import {defaultAppearance,recolorSkinAndEyes,restoreEyeTone} from './appearance';
import {removeBaseBrows} from './base-brows';
import {drawHairs} from './hair';
export const presets = {
  hair: { label: 'Hair stroke', size: .8, hairLength: 14, hairSpacing: 2.5, hairAngle: -65, hairCurve: 35, hairStyle: 'brows', opacity: 100, softness: 0, color: '#34251f' },
  stamp: { label: 'Stamp' },
  brush: { label: 'Brush', size: 24, opacity: 100, softness: 0.1 },
  airbrush: { label: 'Airbrush', size: 60, opacity: 35, softness: 1 },
  eraser: { label: 'Eraser', size: 40, opacity: 100, softness: 0.4 },
  eyedropper: { label: 'Eyedropper' },
  blush: { label: 'Blush', size: 40, opacity: 25, softness: 1, color: '#d16a7a' },
  lips: { label: 'Lip color', size: 8, opacity: 75, softness: 0.4, color: '#a84a60' },
  eyeshadow: { label: 'Eyeshadow', size: 20, opacity: 40, softness: 0.9, color: '#876084' },
  freckles: { label: 'Freckles', size: 30, opacity: 55, softness: 0.2, color: '#86513c' },
};
export function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
export function loadImage(src) { return new Promise((resolve, reject) => { const i = new Image(); i.onload = () => resolve(i); i.onerror = () => reject(new Error('This image could not be read. Please use a PNG or JPEG.')); i.src = src; }); }
export function readFile(file) { return new Promise((resolve, reject) => { const r = new FileReader(); r.onload = () => resolve(r.result); r.onerror = () => reject(new Error('Could not read the file.')); r.readAsDataURL(file); }); }
export function download(blob, name) { const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(url), 30000); }

export class PaintDocument {
  constructor(changed) {
    this.width = 1024; this.height = 2048; this.changed = changed;
    this.base = canvas(this.width, this.height); this.baseName = ''; this.baseVisible = true;
    this.layers = []; this.active = ''; this.undoStack = []; this.redoStack = [];
    this.composite = canvas(this.width, this.height); this.preview = canvas(this.width, this.height);
    this.appearance={...defaultAppearance}; this.stroke = null; this.addLayer(false); this.refresh();
  }
  layer() { return this.layers.find(l => l.id === this.active); }
  checkpoint() { this.undoStack.push(this.serialize()); if (this.undoStack.length > 16) this.undoStack.shift(); this.redoStack = []; }
  addLayer(history = true) {
    if(this.layers.length >= 12) throw new Error('This project supports up to 12 layers.');
    if(history) this.checkpoint();
    const l = {id: crypto.randomUUID(), name: `Makeup ${this.layers.length + 1}`, visible: true, opacity: 1, canvas: canvas(this.width, this.height)};
    this.layers.push(l); this.active = l.id; if(history) this.refresh();
  }
  removeLayer() { if(this.layers.length === 1) return; this.checkpoint(); this.layers = this.layers.filter(l => l.id !== this.active); this.active = this.layers.at(-1).id; this.refresh(); }
  moveLayer(delta) { const i = this.layers.findIndex(l=>l.id===this.active), j=i+delta; if(j<0 || j>=this.layers.length)return; this.checkpoint(); [this.layers[i],this.layers[j]]=[this.layers[j],this.layers[i]]; this.refresh(); }
  clearLayer() { this.checkpoint(); this.layer().canvas.getContext('2d').clearRect(0,0,this.width,this.height); this.refresh(); }
  refresh() {
    const ctx = this.composite.getContext('2d'); ctx.clearRect(0,0,this.width,this.height);
    if(this.baseVisible) ctx.drawImage(this.previewBase(),0,0);
    this.renderLayers(ctx); this.changed?.();
  }
  previewBase() {
    if(!['female-base.png','male-base.png'].includes(this.baseName))return this.base;
    const key=JSON.stringify(this.appearance);
    if(this.baseCache?.base===this.base&&this.baseCache.key===key)return this.baseCache.canvas;
    const c=canvas(this.width,this.height),ctx=c.getContext('2d');ctx.drawImage(this.base,0,0);
    const image=ctx.getImageData(0,0,this.width,this.height);if(this.appearance.baseBrows===false)removeBaseBrows(image);
    ctx.putImageData(recolorSkinAndEyes(image,this.appearance),0,0);
    this.baseCache={base:this.base,key,canvas:c};return c;
  }
  placeArtwork(name,draw,opacity=1) {
    if(this.layers.length>=12)throw new Error('This project supports up to 12 layers. Remove a layer first.');
    const artwork=canvas(this.width,this.height);draw(artwork.getContext('2d'));
    this.checkpoint();this.addLayer(false);Object.assign(this.layer(),{name,opacity,canvas:artwork});this.refresh();
  }
  renderLayers(ctx) { for(const l of this.layers) { if(!l.visible)continue; ctx.globalAlpha=l.opacity; ctx.drawImage(this.stroke?.id===l.id ? this.preview : l.canvas,0,0); } ctx.globalAlpha=1; }
  begin(settings) {
    if(!this.layer().visible) throw new Error('Show the selected layer before painting.');
    if(settings.tool==='hair'&&this.layers.length>=12)throw new Error('Remove a layer before adding another hair stroke.');
    this.checkpoint();if(settings.tool==='hair'){this.addLayer(false);this.layer().name=settings.hairStyle==='brows'?'Brow strokes':settings.hairStyle==='lower'?'Bottom lashes':'Upper lashes';}
    this.stroke = {...settings, id: this.active, canvas: canvas(this.width,this.height), hairs:[[],[]], hairEnded:[false,false]};
  }
  addHairPoints(points){
    const s=this.stroke;if(s?.tool!=='hair')return;
    points.forEach((point,index)=>{
      if(s.hairEnded[index])return;
      const path=s.hairs[index];
      if(!point){if(path.length)s.hairEnded[index]=true;return;}
      const p={x:point.x/this.width*1024,y:point.y/this.height*2048},last=path.at(-1);
      // End at a surface boundary instead of drawing across a UV seam.
      if(last&&Math.hypot(p.x-last.x,p.y-last.y)>64){s.hairEnded[index]=true;return;}
      if(!last||Math.hypot(p.x-last.x,p.y-last.y)>=.1)path.push(p);
    });
  }
  stamp(x,y) {
    const s=this.stroke; if(!s)return; const ctx=s.canvas.getContext('2d'), radius=s.size/2;
    ctx.fillStyle=s.color;
    if(s.tool==='freckles') {
      for(let i=0;i<7;i++) { const a=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*radius, dot=0.6+Math.random()*1.5; ctx.beginPath();ctx.arc(x+Math.cos(a)*r,y+Math.sin(a)*r,dot,0,Math.PI*2);ctx.fill(); }
    } else {
      if(s.softness>0) { const g=ctx.createRadialGradient(x,y,radius*(1-s.softness)*0.9,x,y,radius); g.addColorStop(0,s.color);g.addColorStop(1,s.color+'00');ctx.fillStyle=g; }
      ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);ctx.fill();
    }
  }
  updateStroke() {
    if(!this.stroke)return;if(this.stroke.tool==='hair')drawHairs(this.stroke.canvas.getContext('2d'),this.stroke.hairs,this.stroke,this.width,this.height); const ctx=this.preview.getContext('2d');ctx.clearRect(0,0,this.width,this.height);ctx.drawImage(this.layer().canvas,0,0);
    ctx.globalCompositeOperation=this.stroke.tool==='eraser'?'destination-out':'source-over';ctx.globalAlpha=this.stroke.opacity/100;ctx.drawImage(this.stroke.canvas,0,0);ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';this.refresh();
  }
  end() { if(!this.stroke)return;if(this.stroke.tool==='hair'){this.stroke.hairs.forEach((path,index)=>{if(path.length===1)path.push({x:path[0].x+(index?-.1:.1),y:path[0].y});});this.updateStroke();} const ctx=this.layer().canvas.getContext('2d');ctx.clearRect(0,0,this.width,this.height);ctx.drawImage(this.preview,0,0);this.stroke=null;this.refresh(); }
  sample(x,y) { const p=this.composite.getContext('2d').getImageData(Math.max(0,Math.min(this.width-1,Math.floor(x))),Math.max(0,Math.min(this.height-1,Math.floor(y))),1,1).data; return p[3] ? '#'+[...p.slice(0,3)].map(n=>n.toString(16).padStart(2,'0')).join('') : null; }
  async importBase(src,name) {
    const img=await loadImage(src);
    if(img.width>4096||img.height>4096||img.width<16||img.height<16)throw new Error('Use a texture between 16 and 4096 pixels per side.');
    this.checkpoint(); this.resize(img.width,img.height,false);this.base.getContext('2d').clearRect(0,0,this.width,this.height);this.base.getContext('2d').drawImage(img,0,0);this.baseName=name;this.baseVisible=true;this.refresh();
  }
  resize(w,h,history=true) {
    if(history)this.checkpoint();
    for(const l of this.layers) { const c=canvas(w,h);c.getContext('2d').drawImage(l.canvas,0,0,w,h);l.canvas=c; }
    const base=canvas(w,h);base.getContext('2d').drawImage(this.base,0,0,w,h);this.base=base;
    this.width=w;this.height=h;this.composite=canvas(w,h);this.preview=canvas(w,h);if(history)this.refresh();
  }
  serialize() { return {appearance:this.appearance,width:this.width,height:this.height,base:this.base.toDataURL(),baseName:this.baseName,baseVisible:this.baseVisible,active:this.active,layers:this.layers.map(({canvas,...l})=>({...l,image:canvas.toDataURL()}))}; }
  async restore(data) {
    if(!Number.isInteger(data.width)||!Number.isInteger(data.height)||data.width<16||data.height<16||data.width>4096||data.height>4096||!Array.isArray(data.layers)||!data.layers.length||data.layers.length>12)throw new Error('This project has invalid texture dimensions or layers.');
    const decode = async src => { if(typeof src!=='string'||!src.startsWith('data:image/png;base64,'))throw new Error('Invalid project image.');return loadImage(src); };
    const [base,...images]=await Promise.all([decode(data.base),...data.layers.map(l=>decode(l.image))]);
    this.appearance={skinMode:data.appearance?.skinMode==='occult'||(!data.appearance?.skinMode&&data.appearance?.skinHue)?'occult':'natural',skinTone:Math.max(0,Math.min(100,Number(data.appearance?.skinTone??50))),skinHue:Math.max(-180,Math.min(180,Number(data.appearance?.skinHue)||0)),eyeTone:restoreEyeTone(data.appearance),baseBrows:data.appearance?.baseBrows!==false};this.width=data.width;this.height=data.height;this.base=canvas(this.width,this.height);this.base.getContext('2d').drawImage(base,0,0);this.baseName=String(data.baseName||'');this.baseVisible=data.baseVisible!==false;
    this.layers=data.layers.map((l,i)=>{const c=canvas(this.width,this.height);c.getContext('2d').drawImage(images[i],0,0);return {id:String(l.id),name:String(l.name),visible:l.visible!==false,opacity:Math.max(0,Math.min(1,Number(l.opacity)||0)),canvas:c};});
    this.active=this.layers.some(l=>l.id===data.active)?data.active:this.layers.at(-1).id;this.composite=canvas(this.width,this.height);this.preview=canvas(this.width,this.height);this.stroke=null;this.refresh();
  }
  async undo() { if(!this.undoStack.length)return;const target=this.undoStack.at(-1);this.redoStack.push(this.serialize());await this.restore(target);this.undoStack.pop();this.changed?.(); }
  async redo() { if(!this.redoStack.length)return;const target=this.redoStack.at(-1);this.undoStack.push(this.serialize());await this.restore(target);this.redoStack.pop();this.changed?.(); }
  export() { const c=canvas(this.width,this.height),ctx=c.getContext('2d');this.renderLayers(ctx);return new Promise(resolve=>c.toBlob(resolve,'image/png')); }
}
