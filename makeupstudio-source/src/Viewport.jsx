import React,{useEffect,useRef,useState} from 'react';
import { RotateCcw, ZoomIn, ZoomOut, Hand, Mouse, Scan, Heart, Sparkles } from 'lucide-react';
import {drawHairs} from './hair';
import { canvas } from './document';
import { placeStamp,drawStamp } from './makeup';
import { FaceScene } from './scene';
import { IconButton } from './components';

export function Viewport({doc,version,view,setView,settings,setSettings,mirror,sceneRef,ready,onReady,onError,busy,modelName}) {
  const host=useRef(), uv=useRef(),guide=useRef(),ghost=useRef(),hoverHair=useRef(),drawing=useRef(null),live=useRef({});const [navigate,setNavigate]=useState(false),[wire,setWire]=useState(false),[zoom,setZoom]=useState(1),[cursor,setCursor]=useState(null);
  live.current={settings,mirror,view,navigate,busy};
  useEffect(()=>{let scene;try{scene=new FaceScene(host.current,doc);sceneRef.current=scene;onReady(scene);}catch(e){onError('3D preview could not start. Enable WebGL or use the UV texture view.');onReady(null);}return()=>{scene?.dispose();};},[]);
  useEffect(()=>{sceneRef.current?.refresh();if(uv.current){uv.current.width=doc.width;uv.current.height=doc.height;uv.current.getContext('2d').drawImage(doc.composite,0,0);}if(guide.current){guide.current.width=doc.width;guide.current.height=doc.height;if(wire)sceneRef.current?.drawUV(guide.current.getContext('2d'),doc.width,doc.height);}},[version,wire,view,ready]);
  useEffect(()=>{const c=sceneRef.current?.controls;if(c){c.mouseButtons.LEFT=navigate?0:null;c.touches.ONE=navigate?0:null;}},[navigate,ready]);
  useEffect(()=>{requestAnimationFrame(()=>sceneRef.current?.resize());setCursor(null);},[view]);
  function clearStampPreview(){
    if(!ghost.current)return;ghost.current=null;sceneRef.current?.refresh();
    if(uv.current){const ctx=uv.current.getContext('2d');ctx.clearRect(0,0,doc.width,doc.height);ctx.drawImage(doc.composite,0,0);}
  }
  function previewStamp(x,y){
    const p=points(x,y);if(!p.length){clearStampPreview();return;}
    const c=ghost.current||canvas(doc.width,doc.height);ghost.current=c;const ctx=c.getContext('2d');ctx.clearRect(0,0,c.width,c.height);
    ctx.globalAlpha=settings.opacity/100*.65;drawStamp(ctx,doc,settings.stamp,p,settings);ctx.globalAlpha=1;
    sceneRef.current?.refresh(c);
    if(uv.current){const flat=uv.current.getContext('2d');flat.clearRect(0,0,doc.width,doc.height);flat.drawImage(doc.composite,0,0);flat.drawImage(c,0,0);}
  }
  function previewHair(x,y){
    const pointsNow=hairPoints(x,y);if(!pointsNow.some(Boolean)){clearStampPreview();hoverHair.current=null;return;}
    const primary=pointsNow[0];let direction=hoverHair.current?.direction||{x:1,y:0};
    if(primary&&hoverHair.current?.point){const dx=(primary.x-hoverHair.current.point.x)/doc.width*1024,dy=(primary.y-hoverHair.current.point.y)/doc.height*2048,d=Math.hypot(dx,dy);if(d>.5&&d<64)direction={x:dx/d,y:dy/d};}
    hoverHair.current={point:primary,direction};
    const paths=pointsNow.map((p,index)=>{if(!p)return [];const start={x:p.x/doc.width*1024,y:p.y/doc.height*2048};return [start,{x:start.x+direction.x*(index?-1:1)*.1,y:start.y+direction.y*.1}];});
    const c=ghost.current||canvas(doc.width,doc.height);ghost.current=c;drawHairs(c.getContext('2d'),paths,settings,doc.width,doc.height);
    const ctx=c.getContext('2d');ctx.globalCompositeOperation='destination-in';ctx.fillStyle=`rgba(0,0,0,${settings.opacity/100*.65})`;ctx.fillRect(0,0,c.width,c.height);ctx.globalCompositeOperation='source-over';
    sceneRef.current?.refresh(c);if(uv.current){const flat=uv.current.getContext('2d');flat.clearRect(0,0,doc.width,doc.height);flat.drawImage(doc.composite,0,0);flat.drawImage(c,0,0);}
  }
  useEffect(()=>{clearStampPreview();},[settings,mirror,view,navigate,busy,version,ready]);
  useEffect(()=>{const controls=sceneRef.current?.controls;if(!controls)return;controls.addEventListener('start',clearStampPreview);return()=>controls.removeEventListener('start',clearStampPreview);},[ready]);
  function points(x,y){if(view==='3d'){const a=sceneRef.current?.hit(x,y),b=mirror&&sceneRef.current?.hit(x,y,true);return [a,b].filter(Boolean);}const r=uv.current.getBoundingClientRect();if(x<r.left||x>r.right||y<r.top||y>r.bottom)return [];const p={x:(x-r.left)/r.width*doc.width,y:(y-r.top)/r.height*doc.height};return mirror?[p,{x:doc.width-p.x,y:p.y}]:[p];}
  function hairPoints(x,y){
    if(view==='3d')return [sceneRef.current?.hit(x,y),mirror?sceneRef.current?.hit(x,y,true):null];
    const p=points(x,y);return [p[0]||null,p[1]||null];
  }
  function down(e){if(e.button!==0||navigate||busy||(view==='3d'&&!ready))return;const p=points(e.clientX,e.clientY);if(!p.length)return;if(settings.tool==='stamp'){if(!settings.stamp)return;clearStampPreview();try{placeStamp(doc,settings.stamp,p,settings);}catch(err){onError(err.message);}return;}if(settings.tool==='eyedropper'){const color=doc.sample(p[0].x,p[0].y);if(color)setSettings(s=>({...s,color,tool:'brush'}));return;}try{clearStampPreview();doc.begin(settings);drawing.current={x:e.clientX,y:e.clientY};e.currentTarget.setPointerCapture(e.pointerId);if(settings.tool==='hair')doc.addHairPoints(hairPoints(e.clientX,e.clientY));else p.forEach(p=>doc.stamp(p.x,p.y));doc.updateStroke();}catch(err){onError(err.message);}}
  function move(e){const r=e.currentTarget.getBoundingClientRect();setCursor({x:e.clientX-r.left,y:e.clientY-r.top});if(settings.tool==='stamp'&&!navigate&&!busy&&settings.stamp){if(e.buttons){clearStampPreview();return;}previewStamp(e.clientX,e.clientY);return;}if(!drawing.current){if(settings.tool==='hair'&&!navigate&&!busy&&!e.buttons)previewHair(e.clientX,e.clientY);return;}const last=drawing.current,dx=e.clientX-last.x,dy=e.clientY-last.y,dist=Math.hypot(dx,dy);const step=settings.tool==='freckles'?9:2;const n=Math.max(1,Math.ceil(dist/step));for(let i=1;i<=n;i++){const x=last.x+dx*i/n,y=last.y+dy*i/n;if(settings.tool==='hair')doc.addHairPoints(hairPoints(x,y));else points(x,y).forEach(p=>doc.stamp(p.x,p.y));}doc.updateStroke();drawing.current={x:e.clientX,y:e.clientY};}
  function up(e){if(drawing.current){if(settings.tool==='hair'&&e?.type==='pointerup'){doc.addHairPoints(hairPoints(e.clientX,e.clientY));doc.updateStroke();}drawing.current=null;doc.end();}}
  return <main className="workspace"><div className="window-title mirror-title"><Heart size={15}/><span>Makeup mirror</span><Sparkles className="window-star" size={14}/></div><div className="workspace-header"><div className="view-tabs" role="tablist" aria-label="Painting view"><button role="tab" aria-selected={view==='3d'} className={view==='3d'?'active':''} onClick={()=>setView('3d')}>3D face</button><button role="tab" aria-selected={view==='uv'} className={view==='uv'?'active':''} onClick={()=>setView('uv')}>Flat view</button></div><span className="model-caption">{modelName||'Your canvas, your look'}</span></div><div className={'stage '+(navigate?'navigate':cursor&&!busy&&settings.tool!=='eyedropper'?'painting':'')} onPointerDown={down} onPointerEnter={move} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onLostPointerCapture={up} onPointerLeave={()=>{setCursor(null);clearStampPreview();hoverHair.current=null;}} onContextMenu={e=>e.preventDefault()}>
    <div ref={host} className="three-host" style={{display:view==='3d'?'block':'none'}}/>
    <div className="uv-scroll" style={{display:view==='uv'?'flex':'none'}}><div className="uv-sheet checker" style={{height:`${92*zoom}%`,aspectRatio:`${doc.width}/${doc.height}`}}><canvas ref={uv} aria-label="Flat painting canvas"/><canvas className="uv-guide" ref={guide}/></div></div>
    {!ready&&view==='3d'&&!busy&&<div className="empty-stage"><img src="/sim-reference.png" alt="Supplied Sim face reference"/><div>Open a model to start painting.</div></div>}
    {cursor&&!navigate&&!busy&&settings.tool!=='eyedropper'&&settings.tool!=='stamp'&&settings.tool!=='hair'&&<div className="brush-cursor" style={{left:cursor.x,top:cursor.y,width:Math.min(90,Math.max(6,settings.size*(view==='uv'?(uv.current?.clientWidth||512)/doc.width:0.7))),height:Math.min(90,Math.max(6,settings.size*(view==='uv'?(uv.current?.clientWidth||512)/doc.width:0.7)))}}/>}
  </div><div className="viewport-controls"><IconButton icon={Hand} label="Turn the Sim" aria-pressed={navigate} className={'icon-button '+(navigate?'active':'')} onClick={()=>setNavigate(!navigate)}/><IconButton icon={ZoomIn} label="Zoom in" onClick={()=>view==='3d'?sceneRef.current?.zoom(.85):setZoom(z=>Math.min(4,z+.25))}/><IconButton icon={ZoomOut} label="Zoom out" onClick={()=>view==='3d'?sceneRef.current?.zoom(1.15):setZoom(z=>Math.max(.5,z-.25))}/><IconButton icon={RotateCcw} label="Reset view" onClick={()=>{sceneRef.current?.reset();setZoom(1);}}/>{view==='uv'&&<IconButton icon={Scan} label="Show guides" aria-pressed={wire} onClick={()=>setWire(!wire)}/>}</div></main>;
}
