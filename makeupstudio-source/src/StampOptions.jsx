import React,{useEffect,useRef,useState} from 'react';
import {getStamp,importStamp} from './makeup';
import {Range} from './components';
import {Trash2} from 'lucide-react';

export function StampOptions({settings,setSettings,customStamps,setCustomStamps}){
  const input=useRef(),[shapes,setShapes]=useState([]),[error,setError]=useState('');
  useEffect(()=>{let active=true;Promise.all(['butterfly','heart','star'].map(getStamp)).then(items=>{
    if(!active)return;setShapes(items);setSettings(s=>s.stamp?s:{...s,stamp:items[0],stampScale:50,stampRotation:0});
  }).catch(e=>{if(active)setError(e.message);});return()=>{active=false;};},[]);
  function choose(stamp){setSettings(s=>({...s,stamp,stampScale:50,stampRotation:0}));}
  function remove(stamp){
    setCustomStamps(items=>items.filter(item=>item.id!==stamp.id));
    if(settings.stamp?.id===stamp.id)setSettings(s=>({...s,stamp:shapes[0],stampScale:50,stampRotation:0}));
  }
  return <section className="stamp-options"><h3>Stamps</h3><div className="stamp-choices">{[...shapes,...customStamps].map(stamp=><div className="stamp-choice" key={stamp.id}><button aria-label={stamp.name} title={stamp.name} aria-pressed={settings.stamp?.id===stamp.id} onClick={()=>choose(stamp)}><img src={stamp.thumb} alt=""/><span>{stamp.name}</span></button>{customStamps.some(item=>item.id===stamp.id)&&<button className="delete-stamp" aria-label={'Delete stamp '+stamp.name} title={'Delete stamp '+stamp.name} onClick={()=>remove(stamp)}><Trash2 size={12}/></button>}</div>)}</div><button className="import-stamp" onClick={()=>input.current.click()}>Import stamp</button><input ref={input} type="file" accept="image/png" hidden onChange={async e=>{
    const file=e.target.files?.[0];e.target.value='';if(!file)return;
    try{if(customStamps.length>=20)throw new Error('You can import up to 20 stamps.');const stamp=await importStamp(file);setCustomStamps(s=>[...s,stamp]);choose(stamp);setError('');}catch(err){setError(err.message);}
  }}/>{error&&<p role="alert">{error}</p>}<Range label="Stamp size" value={settings.stampScale??50} min={10} max={300} onChange={stampScale=>setSettings(s=>({...s,stampScale}))}/><Range label="Stamp rotation" value={settings.stampRotation??0} min={-180} max={180} suffix="" onChange={stampRotation=>setSettings(s=>({...s,stampRotation}))}/></section>;
}
