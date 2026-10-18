export const hairPresets={
  brows:{label:'Brows',size:.8,hairLength:14,hairSpacing:2.5,hairAngle:-65,hairCurve:35},
  lashes:{label:'Upper lashes',size:1.2,hairLength:19,hairSpacing:5,hairAngle:-85,hairCurve:65},
  lower:{label:'Bottom lashes',size:.65,hairLength:9,hairSpacing:4,hairAngle:80,hairCurve:40},
};

// Build one continuous, root-to-tip silhouette. Rebuilding while dragging keeps
// the tip tapered without leaving round dabs or accumulating opacity.
export function hairOutline(points,width,maxLength){
  if(points.length<2)return [];
  const path=[{...points[0],distance:0}];let length=0;
  for(let i=1;i<points.length;i++){
    const previous=path.at(-1),next=points[i],distance=Math.hypot(next.x-previous.x,next.y-previous.y);
    if(distance<.05)continue;
    const step=Math.min(distance,maxLength-length),fraction=step/distance;
    length+=step;path.push({x:previous.x+(next.x-previous.x)*fraction,y:previous.y+(next.y-previous.y)*fraction,distance:length});
    if(length>=maxLength)break;
  }
  if(length<.25)return [];
  const left=[],right=[];
  for(let i=0;i<path.length;i++){
    const point=path[i],before=path[Math.max(0,i-1)],after=path[Math.min(path.length-1,i+1)];
    const dx=after.x-before.x,dy=after.y-before.y,d=Math.hypot(dx,dy)||1,t=point.distance/length;
    const radius=width/2*(.65+.35*Math.min(1,t/.18))*Math.pow(1-t, .7);
    left.push({x:point.x-dy/d*radius,y:point.y+dx/d*radius});
    right.push({x:point.x+dy/d*radius,y:point.y-dx/d*radius});
  }
  return [...left,...right.reverse()];
}

export function hairStrands(points,settings,mirrored=false){
  if(points.length<2)return [];
  const roots=[];let travelled=0,next=0;
  for(let i=1;i<points.length;i++){
    const a=points[i-1],b=points[i],length=Math.hypot(b.x-a.x,b.y-a.y);if(length<.0001)continue;
    while(next<=travelled+length){
      const t=(next-travelled)/length;
      roots.push({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t,tx:(b.x-a.x)/length,ty:(b.y-a.y)/length});
      next+=Math.max(1,settings.hairSpacing||3);
    }
    travelled+=length;
  }
  const strands=[],fan=settings.hairStyle==='brows'?1:3,sign=mirrored?-1:1;
  for(const [index,root] of roots.entries())for(let j=0;j<fan;j++){
    const variation=.82+.18*(.5+.5*Math.sin(index*2.4+j*1.7));
    const length=settings.hairLength*variation*(j===1?.8:1),angle=((settings.hairAngle??-65)+(j-(fan-1)/2)*10)*Math.PI/180*sign;
    const dx=root.tx*Math.cos(angle)-root.ty*Math.sin(angle),dy=root.ty*Math.cos(angle)+root.tx*Math.sin(angle);
    const curl=(settings.hairCurve??35)/100*length*.65;
    const control={x:root.x+dx*length*.48+root.tx*curl,y:root.y+dy*length*.48+root.ty*curl};
    const tip={x:root.x+dx*length,y:root.y+dy*length},path=[];
    for(let k=0;k<=18;k++){const t=k/18,u=1-t;path.push({x:u*u*root.x+2*u*t*control.x+t*t*tip.x,y:u*u*root.y+2*u*t*control.y+t*t*tip.y});}
    strands.push({path,width:settings.size*(j===1?.55:1),alpha:j===1?.5:.78+.22*variation});
  }
  return strands;
}

export function drawHairs(ctx,paths,settings,width,height){
  ctx.clearRect(0,0,width,height);ctx.save();ctx.scale(width/1024,height/2048);ctx.fillStyle=settings.color;
  for(const [index,points] of paths.entries())for(const strand of hairStrands(points,settings,index===1)){
    const outline=hairOutline(strand.path,strand.width,Infinity);if(!outline.length)continue;
    ctx.globalAlpha=strand.alpha;
    ctx.beginPath();outline.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();ctx.fill();
  }
  ctx.restore();
}
