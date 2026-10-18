export const defaultAppearance = { skinMode: 'natural', skinTone: 50, skinHue: 0, eyeTone: 75, baseBrows: true };
const tones=[
  [0,[246,238,235]],[15,[244,216,200]],[30,[230,184,148]],
  [50,[216,153,112]],[65,[171,110,74]],[80,[115,70,46]],[100,[63,36,25]],
];
function skinColor(value){
  const index=tones.findIndex(([at])=>at>=value);
  if(index<=0)return tones[0][1];
  const [start,a]=tones[index-1],[end,b]=tones[index],t=(value-start)/(end-start);
  return a.map((c,k)=>c+(b[k]-c)*t);
}

const eyeTones=[[0,[54,36,26]],[20,[103,66,39]],[40,[132,116,67]],[60,[88,115,88]],[75,[60,128,167]],[100,[122,130,137]]];
function eyeColor(value){
  const index=eyeTones.findIndex(([at])=>at>=value);if(index<=0)return eyeTones[0][1];
  const [start,a]=eyeTones[index-1],[end,b]=eyeTones[index],t=(value-start)/(end-start);
  return a.map((c,k)=>c+(b[k]-c)*t);
}
export function restoreEyeTone(appearance){
  if(Number.isFinite(appearance?.eyeTone))return Math.max(0,Math.min(100,appearance.eyeTone));
  if(!appearance?.eyeHue)return 75;
  const sample=new Uint8ClampedArray([60,128,167]);rotateHue(sample,0,appearance.eyeHue);
  return eyeTones.reduce((best,tone)=>tone[1].reduce((sum,c,k)=>sum+(c-sample[k])**2,0)<best.distance?{value:tone[0],distance:tone[1].reduce((sum,c,k)=>sum+(c-sample[k])**2,0)}:best,{value:75,distance:Infinity}).value;
}

// HSV hue rotation retains saturation and brightness, including original shading.
function rotateHue(p,i,degrees){
  const r=p[i]/255,g=p[i+1]/255,b=p[i+2]/255,max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min;
  if(d<.00001||!degrees)return;
  let h=max===r?(g-b)/d:max===g?(b-r)/d+2:(r-g)/d+4;
  h=((h+degrees/60)%6+6)%6;
  const x=d*(1-Math.abs(h%2-1)),m=min;
  const rgb=h<1?[d,x,0]:h<2?[x,d,0]:h<3?[0,d,x]:h<4?[0,x,d]:h<5?[x,0,d]:[d,0,x];
  for(let k=0;k<3;k++)p[i+k]=(rgb[k]+m)*255;
}

// These masks belong to the supplied Sims atlas, not an arbitrary imported texture.
export function recolorSkinAndEyes(image, appearance) {
  const {data,width,height}=image;
  const eyeTone=appearance.eyeTone??75,iris=eyeColor(eyeTone);
  const natural=appearance.skinMode!=='occult',target=skinColor(appearance.skinTone??50),reference=tones[3][1];
  for(let y=0;y<height;y++)for(let x=0;x<width;x++){
    const i=(y*width+x)*4;if(!data[i+3])continue;
    const u=x/width*1024,v=y/height*2048;
    const eyeIsland=u<110&&v>=500&&v<625;
    const oralIsland=u>815&&v>=500&&v<700;
    if(eyeIsland){
      // Recolor only blue iris pigment; preserve neutral pupil, whites and highlights.
      if(eyeTone!==75&&Math.hypot(u-51,v-565)<21&&data[i+2]-data[i]>12){
        const brightness=(.2126*data[i]+.7152*data[i+1]+.0722*data[i+2])/116.36;
        const blend=Math.min(1,(data[i+2]-data[i]-12)/20);
        for(let k=0;k<3;k++)data[i+k]=data[i+k]*(1-blend)+Math.min(255,iris[k]*brightness)*blend;
      }
      continue;
    }
    if(oralIsland)continue;
    // Change only warm skin pixels, always from the untouched base. Channel ratios
    // retain the source texture's local shading and undertone variation.
    if(data[i]>data[i+1]&&data[i+1]>data[i+2]){
      if(natural){for(let k=0;k<3;k++){const value=data[i+k],pivot=reference[k];data[i+k]=target[k]>pivot&&value>pivot?target[k]+(value-pivot)*(255-target[k])/(255-pivot):value*target[k]/pivot;}}
      else rotateHue(data,i,appearance.skinHue);
    }
  }
  return image;
}
