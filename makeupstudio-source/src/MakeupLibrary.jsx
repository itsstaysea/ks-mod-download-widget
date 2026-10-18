import React,{useEffect,useRef,useState} from 'react';
import {X,Stamp} from 'lucide-react';
import {IconButton,Range} from './components';
import {stampDefinitions,getStamp,tintImage} from './makeup';

export function MakeupLibrary({doc,settings,setSettings,onClose,run,notify}){
  const dialog=useRef(),[chosen,setChosen]=useState('bold'),[bases,setBases]=useState([]),[error,setError]=useState('');
  useEffect(()=>{dialog.current.showModal();let active=true;Promise.all(stampDefinitions.filter(s=>['bold','lips','brow-1','brow-2'].includes(s.id)).map(s=>getStamp(s.id))).then(items=>{if(active)setBases(items);}).catch(e=>{if(active)setError(e.message);});return()=>{active=false;};},[]);
  const base=bases.find(s=>s.id===chosen);
  function apply(){run(()=>{const image=tintImage(base.full,settings.color);doc.placeArtwork(base.name,ctx=>ctx.drawImage(image,0,0,doc.width,doc.height),settings.opacity/100);onClose();notify('Makeup added.');});}
  return <dialog ref={dialog} className="library-dialog" onCancel={onClose} aria-labelledby="library-title"><div className="window-title"><Stamp size={16}/><span id="library-title">Makeup bases</span><IconButton icon={X} label="Close makeup library" onClick={onClose}/></div><div className="library-body">{error&&<p role="alert">{error}</p>}<div className="preset-grid">{bases.map(base=><button key={base.id} className="preset-card" aria-pressed={chosen===base.id} onClick={()=>setChosen(base.id)}><div className="checker"><img src={base.thumb} alt=""/></div><span>{base.name}</span></button>)}</div><div className="library-options"><label className="preset-color">Color<input type="color" aria-label="Base color" value={settings.color} onInput={e=>setSettings(s=>({...s,color:e.target.value}))}/></label><Range label="Opacity" value={settings.opacity} min={1} onChange={opacity=>setSettings(s=>({...s,opacity}))}/></div><div className="library-actions"><button className="primary" disabled={!base} onClick={apply}>Apply makeup</button></div></div></dialog>;
}
