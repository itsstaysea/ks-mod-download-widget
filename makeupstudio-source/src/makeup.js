import {canvas,loadImage,readFile} from './document';

export const stampDefinitions=[
  {id:'butterfly',name:'Butterfly',kind:'shape'},
  {id:'heart',name:'Heart',kind:'shape'},
  {id:'star',name:'Star',kind:'shape'},
  {id:'bold',name:'Bold wing',source:8,kind:'liner',crop:[388,730,88,30]},
  {id:'fine',name:'Fine wing',source:5,kind:'liner',crop:[388,728,88,30]},
  {id:'round',name:'Rounded liner',source:12,kind:'liner',crop:[374,728,104,34]},
  {id:'lips',name:'Lip shape',source:8,kind:'lips',crop:[466,838,94,44]},
  {id:'brow-1',name:'Brow 1',source:'brow-1',kind:'brows',crop:[365,689,294,54]},
  {id:'brow-2',name:'Brow 2',source:'brow-2',kind:'brows',crop:[386,698,253,34]},
  {id:'shadow',name:'Soft lid',source:1,kind:'shadow',crop:[434,728,56,42]},
  {id:'blush',name:'Blush circle',source:2,kind:'blush',crop:[365,742,110,110]},
];
const cache=new Map();
export async function getStamp(id){
  if(cache.has(id))return cache.get(id);
  const def=stampDefinitions.find(s=>s.id===id);if(!def)throw new Error('Choose a stamp first.');
  if(def.kind==='shape'){const single=shapeCanvas(def.id),result={...def,single,thumb:tintImage(single,'#332235').toDataURL()};cache.set(id,result);return result;}
  const image=await loadImage(`${import.meta.env.BASE_URL}makeup/${def.source}.png`),full=canvas(1024,2048),ctx=full.getContext('2d');ctx.drawImage(image,0,0);
  if(def.kind==='brows'){
    const [x,y,w,h]=def.crop,single=canvas(w,h);single.getContext('2d').drawImage(full,x,y,w,h,0,0,w,h);
    const result={...def,full,single,thumb:tintImage(single,'#332235').toDataURL()};cache.set(id,result);return result;
  }
  const pixels=ctx.getImageData(0,0,1024,2048),p=pixels.data;
  for(let y=0;y<2048;y++)for(let x=0;x<1024;x++){
    const i=(y*1024+x)*4,black=p[i]<12&&p[i+1]<12&&p[i+2]<12;
    let keep=false;
    if(def.kind==='liner')keep=y>=728&&y<765&&x>=374&&x<=650&&black;
    if(def.kind==='lips')keep=y>=838&&y<885;
    if(def.kind==='shadow')keep=y>=728&&y<772&&x>=434&&x<=590&&!black;
    if(def.kind==='blush'){
      const cx=x<512?420:605;
      // Keep the cheek wash, excluding the eyelid pixels above it.
      keep=y>=755&&((x-cx)/53)**2+((y-800)/45)**2<=1&&p[i+2]>p[i]&&p[i+2]>p[i+1]*1.15;
    }
    if(!keep)p[i+3]=0;
  }
  let maxAlpha=0;for(let i=3;i<p.length;i+=4)maxAlpha=Math.max(maxAlpha,p[i]);
  if(maxAlpha)for(let i=3;i<p.length;i+=4)p[i]=Math.round(p[i]*255/maxAlpha);
  ctx.putImageData(pixels,0,0);
  const [x,y,w,h]=def.crop,single=canvas(w,h);single.getContext('2d').drawImage(full,x,y,w,h,0,0,w,h);
  const result={...def,full,single,thumb:tintImage(single,'#332235').toDataURL()};cache.set(id,result);return result;
}
export function tintImage(source,color){const c=canvas(source.width,source.height),ctx=c.getContext('2d');ctx.drawImage(source,0,0);ctx.globalCompositeOperation='source-in';ctx.fillStyle=color;ctx.fillRect(0,0,c.width,c.height);return c;}
// Simple vector silhouettes; no generated image assets.
function shapeCanvas(id){
  const c=canvas(96,96),ctx=c.getContext('2d');ctx.fillStyle='#000';
  if(id==='butterfly'){
    for(const sign of [-1,1]){ctx.save();ctx.translate(48,0);ctx.scale(sign,1);ctx.beginPath();ctx.moveTo(3,46);ctx.bezierCurveTo(13,14,43,4,43,27);ctx.bezierCurveTo(44,43,28,48,14,49);ctx.bezierCurveTo(45,49,38,85,23,81);ctx.bezierCurveTo(12,79,6,66,3,55);ctx.fill();ctx.restore();}
    ctx.beginPath();ctx.ellipse(48,51,4,23,0,0,Math.PI*2);ctx.fill();ctx.lineWidth=2.5;ctx.strokeStyle='#000';ctx.beginPath();ctx.moveTo(47,34);ctx.quadraticCurveTo(45,22,38,21);ctx.moveTo(49,34);ctx.quadraticCurveTo(51,22,58,21);ctx.stroke();
  }else if(id==='heart'){
    ctx.beginPath();ctx.moveTo(48,83);ctx.bezierCurveTo(3,52,4,28,20,17);ctx.bezierCurveTo(33,9,43,17,48,26);ctx.bezierCurveTo(53,17,63,9,76,17);ctx.bezierCurveTo(92,28,93,52,48,83);ctx.fill();
  }else{ctx.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,r=i%2?18:42;ctx.lineTo(48+Math.cos(a)*r,48+Math.sin(a)*r);}ctx.closePath();ctx.fill();}
  return c;
}
export async function importStamp(file){
  if(file.type!=='image/png'&&!/\.png$/i.test(file.name))throw new Error('Choose a PNG stamp.');
  if(file.size>10*1024*1024)throw new Error('Choose a stamp smaller than 10 MB.');
  const image=await loadImage(await readFile(file));
  if(image.width>2048||image.height>2048)throw new Error('Choose a stamp up to 2048 pixels per side.');
  const c=canvas(image.width,image.height),ctx=c.getContext('2d');ctx.drawImage(image,0,0);
  const pixels=ctx.getImageData(0,0,c.width,c.height).data;let left=c.width,top=c.height,right=-1,bottom=-1;
  for(let y=0;y<c.height;y++)for(let x=0;x<c.width;x++)if(pixels[(y*c.width+x)*4+3]){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}
  if(right<0)throw new Error('This stamp is empty.');
  const single=canvas(right-left+1,bottom-top+1);single.getContext('2d').drawImage(c,left,top,single.width,single.height,0,0,single.width,single.height);
  return {id:crypto.randomUUID(),name:file.name.replace(/\.png$/i,'').slice(0,40)||'My stamp',kind:'shape',single,thumb:tintImage(single,'#332235').toDataURL(),nativeScale:96/Math.max(single.width,single.height)};
}
const tinted=new WeakMap();
export function drawStamp(ctx,doc,stamp,points,settings){
  let cached=tinted.get(stamp);if(cached?.color!==settings.color){cached={color:settings.color,image:tintImage(stamp.single,settings.color)};tinted.set(stamp,cached);}
  const image=cached.image,scale=settings.stampScale/100*(stamp.nativeScale||1);
  for(const [index,p] of points.entries()){
    if(index&&Math.hypot(p.x-points[0].x,p.y-points[0].y)<2)continue;
    ctx.save();ctx.translate(p.x,p.y);ctx.scale(doc.width/1024,doc.height/2048);
    ctx.rotate(settings.stampRotation*Math.PI/180*(index?-1:1));ctx.scale(index?-1:1,1);
    ctx.drawImage(image,-image.width*scale/2,-image.height*scale/2,image.width*scale,image.height*scale);ctx.restore();
  }
}
export function placeStamp(doc,stamp,points,settings){
  doc.placeArtwork(stamp.name,ctx=>drawStamp(ctx,doc,stamp,points,settings),settings.opacity/100);
}
