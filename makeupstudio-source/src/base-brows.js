// Retouch only the brow islands of the supplied skin templates. Sample the
// untouched skin just above the brow, preserving the original alpha.
const outline=[[386,732],[400,715],[423,699],[444,700],[491,711],[492,734],[476,734],[441,722],[417,722],[395,733]];
function coverage(x,y){
  let inside=false,distance=Infinity;
  for(let i=0,j=outline.length-1;i<outline.length;j=i++){
    const a=outline[j],b=outline[i],dx=b[0]-a[0],dy=b[1]-a[1];
    if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])inside=!inside;
    const t=Math.max(0,Math.min(1,((x-a[0])*dx+(y-a[1])*dy)/(dx*dx+dy*dy)));
    distance=Math.min(distance,Math.hypot(x-a[0]-t*dx,y-a[1]-t*dy));
  }
  const edge=Math.max(0,Math.min(1,((inside?distance:-distance)+10)/10));
  const eyelid=Math.max(0,Math.min(1,(742-y)/7));
  return edge*edge*(3-2*edge)*eyelid*eyelid*(3-2*eyelid);
}
export function removeBaseBrows(image){
  const {data,width,height}=image,source=new Uint8ClampedArray(data);
  const sample=(u,v,k)=>source[(Math.min(height-1,Math.max(0,Math.round(v/2048*height)))*width+Math.min(width-1,Math.max(0,Math.round(u/1024*width))))*4+k];
  for(let y=Math.floor(688/2048*height);y<Math.ceil(742/2048*height);y++)for(let x=Math.floor(374/1024*width);x<Math.ceil(650/1024*width);x++){
    const u=x/width*1024,v=y/height*2048,local=u>512?1024-u:u,alpha=coverage(local,v),i=(y*width+x)*4;
    if(!alpha||!source[i+3])continue;
    for(let k=0;k<3;k++){
      let above=0;
      for(let offset=-3;offset<=3;offset++)above+=sample(u+offset,687+(v-700)*.12,k)/7;
      const skin=above*(1-Math.max(0,v-700)*.00065);data[i+k]=source[i+k]*(1-alpha)+skin*alpha;
    }
  }
  return image;
}
