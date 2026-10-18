import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export class FaceScene {
  constructor(host,doc) {
    this.doc=doc;this.host=host;this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#fbedf7');
    this.camera=new THREE.PerspectiveCamera(32,1,0.01,100);this.camera.position.set(0,0,4.5);
    this.renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));host.appendChild(this.renderer.domElement);
    this.controls=new OrbitControls(this.camera,this.renderer.domElement);this.controls.enablePan=true;this.controls.minDistance=.55;this.controls.maxDistance=4.6;this.controls.minPolarAngle=Math.PI*.34;this.controls.maxPolarAngle=Math.PI*.54;this.controls.mouseButtons={LEFT:null,MIDDLE:THREE.MOUSE.PAN,RIGHT:THREE.MOUSE.ROTATE};this.controls.touches={ONE:null,TWO:THREE.TOUCH.DOLLY_PAN};
    this.previewCanvas=document.createElement('canvas');
    this.texture=new THREE.CanvasTexture(this.previewCanvas);this.texture.colorSpace=THREE.SRGBColorSpace;
    this.material=new THREE.MeshStandardMaterial({map:this.texture,roughness:0.9,side:THREE.DoubleSide});
    this.scene.add(new THREE.HemisphereLight(0xffffff,0xb7aacd,2));const light=new THREE.DirectionalLight(0xffffff,2);light.position.set(2,3,5);this.scene.add(light);
    this.raycaster=new THREE.Raycaster();this.meshes=[];
    this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(host);
    this.render=()=>this.renderer.render(this.scene,this.camera);this.controls.addEventListener('change',()=>{if(this.focusBounds){const clamped=this.controls.target.clone().clamp(this.focusBounds.min,this.focusBounds.max),delta=clamped.clone().sub(this.controls.target);this.controls.target.copy(clamped);this.camera.position.add(delta);}this.render();});this.resize();
  }
  resize(){const w=this.host.clientWidth,h=this.host.clientHeight;if(!w||!h)return;this.renderer.setSize(w,h);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.render();}
  refresh(overlay){const c=this.previewCanvas;if(c.width!==this.doc.width||c.height!==this.doc.height){c.width=this.doc.width;c.height=this.doc.height;}const ctx=c.getContext('2d');ctx.fillStyle='#ded5e5';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(this.doc.composite,0,0);if(overlay)ctx.drawImage(overlay,0,0);this.texture.needsUpdate=true;this.render();}
  async load(asset) {
    const manager=new THREE.LoadingManager();manager.setURLModifier(url=>{if(!url.startsWith('data:')&&!url.startsWith('blob:'))throw new Error('Use a self-contained GLB, without external files.');return url;});
    let source;
    if(asset.kind==='obj') source=new OBJLoader(manager).parse(asset.data);
    else {const {GLTFLoader}=await import('three/addons/loaders/GLTFLoader.js');const bytes=Uint8Array.from(atob(asset.data),c=>c.charCodeAt(0));source=(await new GLTFLoader(manager).parseAsync(bytes.buffer,'')).scene;}
    source.updateMatrixWorld(true);const group=new THREE.Group();let count=0;
    source.traverse(obj=>{if(!obj.isMesh)return;let geo=obj.geometry.clone();geo.applyMatrix4(obj.matrixWorld);if(!geo.getAttribute('normal'))geo.computeVertexNormals();const uv=geo.getAttribute('uv');if(!uv){geo.dispose();return;} const position=geo.getAttribute('position');for(let i=0;i<uv.count;i++){if(!Number.isFinite(uv.getX(i))||!Number.isFinite(uv.getY(i))||uv.getX(i)<-0.001||uv.getX(i)>1.001||uv.getY(i)<-0.001||uv.getY(i)>1.001)throw new Error('Use a head with UVs inside one 0–1 texture tile.');if(asset.kind==='glb')uv.setY(i,1-uv.getY(i));}if(position.count>1500000)throw new Error('This mesh is too large; export a lower-detail head.');const mesh=new THREE.Mesh(geo,this.material);mesh.name=obj.name||`Mesh ${++count}`;group.add(mesh);});
    if(!group.children.length)throw new Error('No UV-mapped mesh found. Export the head with UV coordinates.');
    const box=new THREE.Box3().setFromObject(group),center=box.getCenter(new THREE.Vector3()),size=box.getSize(new THREE.Vector3()),scale=2.5/Math.max(size.x,size.y,size.z);
    if(!Number.isFinite(scale)||scale<=0)throw new Error('The model has invalid bounds.');
    for(const mesh of group.children){mesh.geometry.translate(-center.x,-center.y,-center.z);mesh.geometry.scale(scale,scale,scale);}
    if(this.model){this.scene.remove(this.model);this.model.traverse(o=>o.geometry?.dispose());}
    this.model=group;this.meshes=group.children;this.scene.add(group);this.focusBounds=new THREE.Box3();for(const mesh of this.meshes.filter(m=>m.name.startsWith('head')))this.focusBounds.expandByObject(mesh);if(this.focusBounds.isEmpty())this.focusBounds.setFromObject(group);this.focusBounds.expandByScalar(.15);this.reset();return this.meshes.map(m=>m.name);
  }
  focus(region){
    if(region==='face'){this.reset();return;}
    const targetUV=region==='lips'?new THREE.Vector2(.5,1-860/2048):new THREE.Vector2(.425,1-746/2048);
    let closest=Infinity,point=null;
    for(const mesh of this.meshes){const uv=mesh.geometry.attributes.uv,pos=mesh.geometry.attributes.position;
      for(let i=0;i<uv.count;i++){const d=(uv.getX(i)-targetUV.x)**2+(uv.getY(i)-targetUV.y)**2;if(d<closest){closest=d;point=new THREE.Vector3().fromBufferAttribute(pos,i);}}
    }
    if(!point)return;point.x=0;
    this.controls.target.copy(point);this.camera.position.copy(point).add(new THREE.Vector3(0,0,region==='lips'?1.15:1.7));this.controls.update();this.render();
  }
  reset(){this.camera.position.set(0,.3,4.2);this.controls.target.set(0,.3,0);this.controls.update();this.render();}
  zoom(factor){this.camera.position.sub(this.controls.target).multiplyScalar(factor).add(this.controls.target);this.controls.update();this.render();}
  hit(clientX,clientY,mirror=false) {
    const r=this.renderer.domElement.getBoundingClientRect();this.raycaster.setFromCamera(new THREE.Vector2((clientX-r.left)/r.width*2-1,-(clientY-r.top)/r.height*2+1),this.camera);
    if(mirror){this.raycaster.ray.origin.x*=-1;this.raycaster.ray.direction.x*=-1;}
    const hit=this.raycaster.intersectObjects(this.meshes,false).find(h=>h.uv);return hit&&this.meshes.includes(hit.object)?{x:Math.max(0,Math.min(1,hit.uv.x))*this.doc.width,y:(1-Math.max(0,Math.min(1,hit.uv.y)))*this.doc.height}:null;
  }
  drawUV(ctx,w,h) {
    ctx.strokeStyle='#8050d555';ctx.lineWidth=0.7;
    for(const mesh of this.meshes){const geo=mesh.geometry,uv=geo.attributes.uv,index=geo.index,n=index?index.count:uv.count;ctx.beginPath();for(let i=0;i<n;i+=3){for(let j=0;j<3;j++){const k=index?index.getX(i+j):i+j;const x=uv.getX(k)*w,y=(1-uv.getY(k))*h;j?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.closePath();}ctx.stroke();}
  }
  dispose(){cancelAnimationFrame(this.raf);this.observer.disconnect();this.controls.dispose();this.model?.traverse(o=>o.geometry?.dispose());this.texture.dispose();this.material.dispose();this.renderer.dispose();this.renderer.domElement.remove();}
}
