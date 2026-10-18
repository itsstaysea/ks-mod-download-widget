(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Xv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var nh={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function jv(){if(Pm)return yt;Pm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),m=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=m&&F[m]||F["@@iterator"],typeof F=="function"?F:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(F,O,pe){this.props=F,this.context=O,this.refs=E,this.updater=pe||x}S.prototype.isReactComponent={},S.prototype.setState=function(F,O){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,O,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=S.prototype;function L(F,O,pe){this.props=F,this.context=O,this.refs=E,this.updater=pe||x}var P=L.prototype=new y;P.constructor=L,M(P,S.prototype),P.isPureReactComponent=!0;var A=Array.isArray,z=Object.prototype.hasOwnProperty,I={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function $(F,O,pe){var ye,Ee={},K=null,ae=null;if(O!=null)for(ye in O.ref!==void 0&&(ae=O.ref),O.key!==void 0&&(K=""+O.key),O)z.call(O,ye)&&!B.hasOwnProperty(ye)&&(Ee[ye]=O[ye]);var _e=arguments.length-2;if(_e===1)Ee.children=pe;else if(1<_e){for(var De=Array(_e),Ie=0;Ie<_e;Ie++)De[Ie]=arguments[Ie+2];Ee.children=De}if(F&&F.defaultProps)for(ye in _e=F.defaultProps,_e)Ee[ye]===void 0&&(Ee[ye]=_e[ye]);return{$$typeof:s,type:F,key:K,ref:ae,props:Ee,_owner:I.current}}function R(F,O){return{$$typeof:s,type:F.type,key:O,ref:F.ref,props:F.props,_owner:F._owner}}function C(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function G(F){var O={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(pe){return O[pe]})}var ee=/\/+/g;function re(F,O){return typeof F=="object"&&F!==null&&F.key!=null?G(""+F.key):O.toString(36)}function ce(F,O,pe,ye,Ee){var K=typeof F;(K==="undefined"||K==="boolean")&&(F=null);var ae=!1;if(F===null)ae=!0;else switch(K){case"string":case"number":ae=!0;break;case"object":switch(F.$$typeof){case s:case e:ae=!0}}if(ae)return ae=F,Ee=Ee(ae),F=ye===""?"."+re(ae,0):ye,A(Ee)?(pe="",F!=null&&(pe=F.replace(ee,"$&/")+"/"),ce(Ee,O,pe,"",function(Ie){return Ie})):Ee!=null&&(C(Ee)&&(Ee=R(Ee,pe+(!Ee.key||ae&&ae.key===Ee.key?"":(""+Ee.key).replace(ee,"$&/")+"/")+F)),O.push(Ee)),1;if(ae=0,ye=ye===""?".":ye+":",A(F))for(var _e=0;_e<F.length;_e++){K=F[_e];var De=ye+re(K,_e);ae+=ce(K,O,pe,De,Ee)}else if(De=_(F),typeof De=="function")for(F=De.call(F),_e=0;!(K=F.next()).done;)K=K.value,De=ye+re(K,_e++),ae+=ce(K,O,pe,De,Ee);else if(K==="object")throw O=String(F),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return ae}function he(F,O,pe){if(F==null)return F;var ye=[],Ee=0;return ce(F,ye,"","",function(K){return O.call(pe,K,Ee++)}),ye}function oe(F){if(F._status===-1){var O=F._result;O=O(),O.then(function(pe){(F._status===0||F._status===-1)&&(F._status=1,F._result=pe)},function(pe){(F._status===0||F._status===-1)&&(F._status=2,F._result=pe)}),F._status===-1&&(F._status=0,F._result=O)}if(F._status===1)return F._result.default;throw F._result}var fe={current:null},H={transition:null},le={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:H,ReactCurrentOwner:I};function se(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:he,forEach:function(F,O,pe){he(F,function(){O.apply(this,arguments)},pe)},count:function(F){var O=0;return he(F,function(){O++}),O},toArray:function(F){return he(F,function(O){return O})||[]},only:function(F){if(!C(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},yt.Component=S,yt.Fragment=t,yt.Profiler=a,yt.PureComponent=L,yt.StrictMode=i,yt.Suspense=f,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,yt.act=se,yt.cloneElement=function(F,O,pe){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ye=M({},F.props),Ee=F.key,K=F.ref,ae=F._owner;if(O!=null){if(O.ref!==void 0&&(K=O.ref,ae=I.current),O.key!==void 0&&(Ee=""+O.key),F.type&&F.type.defaultProps)var _e=F.type.defaultProps;for(De in O)z.call(O,De)&&!B.hasOwnProperty(De)&&(ye[De]=O[De]===void 0&&_e!==void 0?_e[De]:O[De])}var De=arguments.length-2;if(De===1)ye.children=pe;else if(1<De){_e=Array(De);for(var Ie=0;Ie<De;Ie++)_e[Ie]=arguments[Ie+2];ye.children=_e}return{$$typeof:s,type:F.type,key:Ee,ref:K,props:ye,_owner:ae}},yt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},yt.createElement=$,yt.createFactory=function(F){var O=$.bind(null,F);return O.type=F,O},yt.createRef=function(){return{current:null}},yt.forwardRef=function(F){return{$$typeof:h,render:F}},yt.isValidElement=C,yt.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:oe}},yt.memo=function(F,O){return{$$typeof:d,type:F,compare:O===void 0?null:O}},yt.startTransition=function(F){var O=H.transition;H.transition={};try{F()}finally{H.transition=O}},yt.unstable_act=se,yt.useCallback=function(F,O){return fe.current.useCallback(F,O)},yt.useContext=function(F){return fe.current.useContext(F)},yt.useDebugValue=function(){},yt.useDeferredValue=function(F){return fe.current.useDeferredValue(F)},yt.useEffect=function(F,O){return fe.current.useEffect(F,O)},yt.useId=function(){return fe.current.useId()},yt.useImperativeHandle=function(F,O,pe){return fe.current.useImperativeHandle(F,O,pe)},yt.useInsertionEffect=function(F,O){return fe.current.useInsertionEffect(F,O)},yt.useLayoutEffect=function(F,O){return fe.current.useLayoutEffect(F,O)},yt.useMemo=function(F,O){return fe.current.useMemo(F,O)},yt.useReducer=function(F,O,pe){return fe.current.useReducer(F,O,pe)},yt.useRef=function(F){return fe.current.useRef(F)},yt.useState=function(F){return fe.current.useState(F)},yt.useSyncExternalStore=function(F,O,pe){return fe.current.useSyncExternalStore(F,O,pe)},yt.useTransition=function(){return fe.current.useTransition()},yt.version="18.3.1",yt}var Lm;function v_(){return Lm||(Lm=1,nh.exports=jv()),nh.exports}var et=v_();const k=Xv(et);var Al={},ih={exports:{}},Vn={},rh={exports:{}},sh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function Yv(){return Dm||(Dm=1,(function(s){function e(H,le){var se=H.length;H.push(le);e:for(;0<se;){var F=se-1>>>1,O=H[F];if(0<a(O,le))H[F]=le,H[se]=O,se=F;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var le=H[0],se=H.pop();if(se!==le){H[0]=se;e:for(var F=0,O=H.length,pe=O>>>1;F<pe;){var ye=2*(F+1)-1,Ee=H[ye],K=ye+1,ae=H[K];if(0>a(Ee,se))K<O&&0>a(ae,Ee)?(H[F]=ae,H[K]=se,F=K):(H[F]=Ee,H[ye]=se,F=ye);else if(K<O&&0>a(ae,se))H[F]=ae,H[K]=se,F=K;else break e}}return le}function a(H,le){var se=H.sortIndex-le.sortIndex;return se!==0?se:H.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();s.unstable_now=function(){return c.now()-h}}var f=[],d=[],g=1,m=null,_=3,x=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(H){for(var le=t(d);le!==null;){if(le.callback===null)i(d);else if(le.startTime<=H)i(d),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(d)}}function A(H){if(E=!1,P(H),!M)if(t(f)!==null)M=!0,oe(z);else{var le=t(d);le!==null&&fe(A,le.startTime-H)}}function z(H,le){M=!1,E&&(E=!1,y($),$=-1),x=!0;var se=_;try{for(P(le),m=t(f);m!==null&&(!(m.expirationTime>le)||H&&!G());){var F=m.callback;if(typeof F=="function"){m.callback=null,_=m.priorityLevel;var O=F(m.expirationTime<=le);le=s.unstable_now(),typeof O=="function"?m.callback=O:m===t(f)&&i(f),P(le)}else i(f);m=t(f)}if(m!==null)var pe=!0;else{var ye=t(d);ye!==null&&fe(A,ye.startTime-le),pe=!1}return pe}finally{m=null,_=se,x=!1}}var I=!1,B=null,$=-1,R=5,C=-1;function G(){return!(s.unstable_now()-C<R)}function ee(){if(B!==null){var H=s.unstable_now();C=H;var le=!0;try{le=B(!0,H)}finally{le?re():(I=!1,B=null)}}else I=!1}var re;if(typeof L=="function")re=function(){L(ee)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,he=ce.port2;ce.port1.onmessage=ee,re=function(){he.postMessage(null)}}else re=function(){S(ee,0)};function oe(H){B=H,I||(I=!0,re())}function fe(H,le){$=S(function(){H(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){M||x||(M=!0,oe(z))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(H){switch(_){case 1:case 2:case 3:var le=3;break;default:le=_}var se=_;_=le;try{return H()}finally{_=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,le){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var se=_;_=H;try{return le()}finally{_=se}},s.unstable_scheduleCallback=function(H,le,se){var F=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,H){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=se+O,H={id:g++,callback:le,priorityLevel:H,startTime:se,expirationTime:O,sortIndex:-1},se>F?(H.sortIndex=se,e(d,H),t(f)===null&&H===t(d)&&(E?(y($),$=-1):E=!0,fe(A,se-F))):(H.sortIndex=O,e(f,H),M||x||(M=!0,oe(z))),H},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(H){var le=_;return function(){var se=_;_=le;try{return H.apply(this,arguments)}finally{_=se}}}})(sh)),sh}var Im;function qv(){return Im||(Im=1,rh.exports=Yv()),rh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function $v(){if(Nm)return Vn;Nm=1;var s=v_(),e=qv();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)i.add(r[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},m={};function _(n){return f.call(m,n)?!0:f.call(g,n)?!1:d.test(n)?m[n]=!0:(g[n]=!0,!1)}function x(n,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,o,u){if(r===null||typeof r>"u"||x(n,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,o,u,p,v,w){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,L);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,L);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,L);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,o,u){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,o,p,u)&&(o=null),u||p===null?_(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):p.mustUseProperty?n[p.propertyName]=o===null?p.type===3?!1:"":o:(r=p.attributeName,u=p.attributeNamespace,o===null?n.removeAttribute(r):(p=p.type,o=p===3||p===4&&o===!0?"":""+o,u?n.setAttributeNS(u,r,o):n.setAttribute(r,o))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),I=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),G=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),H=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,F;function O(n){if(F===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);F=r&&r[1]||""}return`
`+F+n}var pe=!1;function ye(n,r){if(!n||pe)return"";pe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(te){var u=te}Reflect.construct(n,[],r)}else{try{r.call()}catch(te){u=te}n.call(r.prototype)}else{try{throw Error()}catch(te){u=te}n()}}catch(te){if(te&&u&&typeof te.stack=="string"){for(var p=te.stack.split(`
`),v=u.stack.split(`
`),w=p.length-1,N=v.length-1;1<=w&&0<=N&&p[w]!==v[N];)N--;for(;1<=w&&0<=N;w--,N--)if(p[w]!==v[N]){if(w!==1||N!==1)do if(w--,N--,0>N||p[w]!==v[N]){var V=`
`+p[w].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=w&&0<=N);break}}}finally{pe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?O(n):""}function Ee(n){switch(n.tag){case 5:return O(n.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return n=ye(n.type,!1),n;case 11:return n=ye(n.type.render,!1),n;case 1:return n=ye(n.type,!0),n;default:return""}}function K(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case I:return"Portal";case R:return"Profiler";case $:return"StrictMode";case re:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ee:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return r=n.displayName||null,r!==null?r:K(n.type)||"Memo";case oe:r=n._payload,n=n._init;try{return K(n(r))}catch{}}return null}function ae(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(r);case 8:return r===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ie(n){var r=De(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var p=o.get,v=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(w){u=""+w,v.call(this,w)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function st(n){n._valueTracker||(n._valueTracker=Ie(n))}function Ut(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=De(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function U(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Et(n,r){var o=r.checked;return se({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Qe(n,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=_e(r.value!=null?r.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function me(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function ve(n,r){me(n,r);var o=_e(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Oe(n,r.type,o):r.hasOwnProperty("defaultValue")&&Oe(n,r.type,_e(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function vt(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Oe(n,r,o){(r!=="number"||U(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var ht=Array.isArray;function Gt(n,r,o,u){if(n=n.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=r.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+_e(o),r=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function Wt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(ht(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:_e(o)}}function T(n,r){var o=_e(r.value),u=_e(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function J(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Se(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?de(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ue,Ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,o,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Pe(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(Ge).forEach(function(n){Ze.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ge[r]=Ge[n]})});function Ce(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Ge.hasOwnProperty(n)&&Ge[n]?(""+r).trim():r+"px"}function Fe(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,p=Ce(o,r[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,p):n[o]=p}}var at=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,r){if(r){if(at[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ne(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,Le=null,Be=null;function Te(n){if(n=ka(n)){if(typeof be!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ho(r),be(n.stateNode,n.type,r))}}function ge(n){Le?Be?Be.push(n):Be=[n]:Le=n}function je(){if(Le){var n=Le,r=Be;if(Be=Le=null,Te(n),r)for(n=0;n<r.length;n++)Te(r[n])}}function dt(n,r){return n(r)}function Dt(){}var wt=!1;function ei(n,r,o){if(wt)return n(r,o);wt=!0;try{return dt(n,r,o)}finally{wt=!1,(Le!==null||Be!==null)&&(Dt(),je())}}function _n(n,r){var o=n.stateNode;if(o===null)return null;var u=Ho(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var ms=!1;if(h)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){ms=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{ms=!1}function ya(n,r,o,u,p,v,w,N,V){var te=Array.prototype.slice.call(arguments,3);try{r.apply(o,te)}catch(Me){this.onError(Me)}}var sr=!1,Br=null,Bi=!1,gs=null,_s={onError:function(n){sr=!0,Br=n}};function So(n,r,o,u,p,v,w,N,V){sr=!1,Br=null,ya.apply(_s,arguments)}function Mo(n,r,o,u,p,v,w,N,V){if(So.apply(this,arguments),sr){if(sr){var te=Br;sr=!1,Br=null}else throw Error(t(198));Bi||(Bi=!0,gs=te)}}function zi(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Eo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function wo(n){if(zi(n)!==n)throw Error(t(188))}function Tc(n){var r=n.alternate;if(!r){if(r=zi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,u=r;;){var p=o.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===o)return wo(p),n;if(v===u)return wo(p),r;v=v.sibling}throw Error(t(188))}if(o.return!==u.return)o=p,u=v;else{for(var w=!1,N=p.child;N;){if(N===o){w=!0,o=p,u=v;break}if(N===u){w=!0,u=p,o=v;break}N=N.sibling}if(!w){for(N=v.child;N;){if(N===o){w=!0,o=v,u=p;break}if(N===u){w=!0,u=v,o=p;break}N=N.sibling}if(!w)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function To(n){return n=Tc(n),n!==null?bo(n):null}function bo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=bo(n);if(r!==null)return r;n=n.sibling}return null}var b=e.unstable_scheduleCallback,q=e.unstable_cancelCallback,ne=e.unstable_shouldYield,ie=e.unstable_requestPaint,j=e.unstable_now,Ae=e.unstable_getCurrentPriorityLevel,Ue=e.unstable_ImmediatePriority,We=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,rt=e.unstable_LowPriority,ot=e.unstable_IdlePriority,Je=null,ct=null;function Lt(n){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:tt,zt=Math.log,It=Math.LN2;function tt(n){return n>>>=0,n===0?32:31-(zt(n)/It|0)|0}var kt=64,xt=4194304;function rn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hi(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,w=o&268435455;if(w!==0){var N=w&~p;N!==0?u=rn(N):(v&=w,v!==0&&(u=rn(v)))}else w=o&~p,w!==0?u=rn(w):v!==0&&(u=rn(v));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)o=31-Tt(r),p=1<<o,u|=n[o],r&=~p;return u}function An(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zr(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var w=31-Tt(v),N=1<<w,V=p[w];V===-1?((N&o)===0||(N&u)!==0)&&(p[w]=An(N,r)):V<=r&&(n.expiredLanes|=N),v&=~N}}function Vt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Cn(){var n=kt;return kt<<=1,(kt&4194240)===0&&(kt=64),n}function vn(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Qt(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Tt(r),n[r]=o}function yn(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var p=31-Tt(o),v=1<<p;r[p]=0,u[p]=-1,n[p]=-1,o&=~v}}function Vr(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-Tt(o),p=1<<u;p&r|n[u]&r&&(n[u]|=r),o&=~p}}var St=0;function lf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var cf,bc,uf,hf,df,Ac=!1,Ao=[],ar=null,or=null,lr=null,xa=new Map,Sa=new Map,cr=[],f0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ff(n,r){switch(n){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":xa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(r.pointerId)}}function Ma(n,r,o,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},r!==null&&(r=ka(r),r!==null&&bc(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function p0(n,r,o,u,p){switch(r){case"focusin":return ar=Ma(ar,n,r,o,u,p),!0;case"dragenter":return or=Ma(or,n,r,o,u,p),!0;case"mouseover":return lr=Ma(lr,n,r,o,u,p),!0;case"pointerover":var v=p.pointerId;return xa.set(v,Ma(xa.get(v)||null,n,r,o,u,p)),!0;case"gotpointercapture":return v=p.pointerId,Sa.set(v,Ma(Sa.get(v)||null,n,r,o,u,p)),!0}return!1}function pf(n){var r=Hr(n.target);if(r!==null){var o=zi(r);if(o!==null){if(r=o.tag,r===13){if(r=Eo(o),r!==null){n.blockedOn=r,df(n.priority,function(){uf(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Co(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Rc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);ft=u,o.target.dispatchEvent(u),ft=null}else return r=ka(o),r!==null&&bc(r),n.blockedOn=o,!1;r.shift()}return!0}function mf(n,r,o){Co(n)&&o.delete(r)}function m0(){Ac=!1,ar!==null&&Co(ar)&&(ar=null),or!==null&&Co(or)&&(or=null),lr!==null&&Co(lr)&&(lr=null),xa.forEach(mf),Sa.forEach(mf)}function Ea(n,r){n.blockedOn===r&&(n.blockedOn=null,Ac||(Ac=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,m0)))}function wa(n){function r(p){return Ea(p,n)}if(0<Ao.length){Ea(Ao[0],n);for(var o=1;o<Ao.length;o++){var u=Ao[o];u.blockedOn===n&&(u.blockedOn=null)}}for(ar!==null&&Ea(ar,n),or!==null&&Ea(or,n),lr!==null&&Ea(lr,n),xa.forEach(r),Sa.forEach(r),o=0;o<cr.length;o++)u=cr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<cr.length&&(o=cr[0],o.blockedOn===null);)pf(o),o.blockedOn===null&&cr.shift()}var vs=A.ReactCurrentBatchConfig,Ro=!0;function g0(n,r,o,u){var p=St,v=vs.transition;vs.transition=null;try{St=1,Cc(n,r,o,u)}finally{St=p,vs.transition=v}}function _0(n,r,o,u){var p=St,v=vs.transition;vs.transition=null;try{St=4,Cc(n,r,o,u)}finally{St=p,vs.transition=v}}function Cc(n,r,o,u){if(Ro){var p=Rc(n,r,o,u);if(p===null)jc(n,r,u,Po,o),ff(n,u);else if(p0(p,n,r,o,u))u.stopPropagation();else if(ff(n,u),r&4&&-1<f0.indexOf(n)){for(;p!==null;){var v=ka(p);if(v!==null&&cf(v),v=Rc(n,r,o,u),v===null&&jc(n,r,u,Po,o),v===p)break;p=v}p!==null&&u.stopPropagation()}else jc(n,r,u,null,o)}}var Po=null;function Rc(n,r,o,u){if(Po=null,n=W(u),n=Hr(n),n!==null)if(r=zi(n),r===null)n=null;else if(o=r.tag,o===13){if(n=Eo(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Po=n,null}function gf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ae()){case Ue:return 1;case We:return 4;case ze:case rt:return 16;case ot:return 536870912;default:return 16}default:return 16}}var ur=null,Pc=null,Lo=null;function _f(){if(Lo)return Lo;var n,r=Pc,o=r.length,u,p="value"in ur?ur.value:ur.textContent,v=p.length;for(n=0;n<o&&r[n]===p[n];n++);var w=o-n;for(u=1;u<=w&&r[o-u]===p[v-u];u++);return Lo=p.slice(n,1<u?1-u:void 0)}function Do(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Io(){return!0}function vf(){return!1}function Yn(n){function r(o,u,p,v,w){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=w,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(v):v[N]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Io:vf,this.isPropagationStopped=vf,this}return se(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),r}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=Yn(ys),Ta=se({},ys,{view:0,detail:0}),v0=Yn(Ta),Dc,Ic,ba,No=se({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ba&&(ba&&n.type==="mousemove"?(Dc=n.screenX-ba.screenX,Ic=n.screenY-ba.screenY):Ic=Dc=0,ba=n),Dc)},movementY:function(n){return"movementY"in n?n.movementY:Ic}}),yf=Yn(No),y0=se({},No,{dataTransfer:0}),x0=Yn(y0),S0=se({},Ta,{relatedTarget:0}),Nc=Yn(S0),M0=se({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),E0=Yn(M0),w0=se({},ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),T0=Yn(w0),b0=se({},ys,{data:0}),xf=Yn(b0),A0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=R0[n])?!!r[n]:!1}function Uc(){return P0}var L0=se({},Ta,{key:function(n){if(n.key){var r=A0[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Do(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?C0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(n){return n.type==="keypress"?Do(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Do(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),D0=Yn(L0),I0=se({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sf=Yn(I0),N0=se({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),U0=Yn(N0),k0=se({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=Yn(k0),O0=se({},No,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),B0=Yn(O0),z0=[9,13,27,32],kc=h&&"CompositionEvent"in window,Aa=null;h&&"documentMode"in document&&(Aa=document.documentMode);var V0=h&&"TextEvent"in window&&!Aa,Mf=h&&(!kc||Aa&&8<Aa&&11>=Aa),Ef=" ",wf=!1;function Tf(n,r){switch(n){case"keyup":return z0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function H0(n,r){switch(n){case"compositionend":return bf(r);case"keypress":return r.which!==32?null:(wf=!0,Ef);case"textInput":return n=r.data,n===Ef&&wf?null:n;default:return null}}function G0(n,r){if(xs)return n==="compositionend"||!kc&&Tf(n,r)?(n=_f(),Lo=Pc=ur=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Mf&&r.locale!=="ko"?null:r.data;default:return null}}var W0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!W0[n.type]:r==="textarea"}function Cf(n,r,o,u){ge(u),r=Bo(r,"onChange"),0<r.length&&(o=new Lc("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Ca=null,Ra=null;function X0(n){jf(n,0)}function Uo(n){var r=Ts(n);if(Ut(r))return n}function j0(n,r){if(n==="change")return r}var Rf=!1;if(h){var Fc;if(h){var Oc="oninput"in document;if(!Oc){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),Oc=typeof Pf.oninput=="function"}Fc=Oc}else Fc=!1;Rf=Fc&&(!document.documentMode||9<document.documentMode)}function Lf(){Ca&&(Ca.detachEvent("onpropertychange",Df),Ra=Ca=null)}function Df(n){if(n.propertyName==="value"&&Uo(Ra)){var r=[];Cf(r,Ra,n,W(n)),ei(X0,r)}}function Y0(n,r,o){n==="focusin"?(Lf(),Ca=r,Ra=o,Ca.attachEvent("onpropertychange",Df)):n==="focusout"&&Lf()}function q0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Uo(Ra)}function $0(n,r){if(n==="click")return Uo(r)}function K0(n,r){if(n==="input"||n==="change")return Uo(r)}function Z0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var di=typeof Object.is=="function"?Object.is:Z0;function Pa(n,r){if(di(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!f.call(r,p)||!di(n[p],r[p]))return!1}return!0}function If(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Nf(n,r){var o=If(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=If(o)}}function Uf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Uf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function kf(){for(var n=window,r=U();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=U(n.document)}return r}function Bc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function J0(n){var r=kf(),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Uf(o.ownerDocument.documentElement,o)){if(u!==null&&Bc(o)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=o.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=Nf(o,v);var w=Nf(o,u);p&&w&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(r),n.extend(w.node,w.offset)):(r.setEnd(w.node,w.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Q0=h&&"documentMode"in document&&11>=document.documentMode,Ss=null,zc=null,La=null,Vc=!1;function Ff(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Vc||Ss==null||Ss!==U(u)||(u=Ss,"selectionStart"in u&&Bc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),La&&Pa(La,u)||(La=u,u=Bo(zc,"onSelect"),0<u.length&&(r=new Lc("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=Ss)))}function ko(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ms={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},Hc={},Of={};h&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Fo(n){if(Hc[n])return Hc[n];if(!Ms[n])return n;var r=Ms[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Of)return Hc[n]=r[o];return n}var Bf=Fo("animationend"),zf=Fo("animationiteration"),Vf=Fo("animationstart"),Hf=Fo("transitionend"),Gf=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(n,r){Gf.set(n,r),l(r,[n])}for(var Gc=0;Gc<Wf.length;Gc++){var Wc=Wf[Gc],ev=Wc.toLowerCase(),tv=Wc[0].toUpperCase()+Wc.slice(1);hr(ev,"on"+tv)}hr(Bf,"onAnimationEnd"),hr(zf,"onAnimationIteration"),hr(Vf,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(Hf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function Xf(n,r,o){var u=n.type||"unknown-event";n.currentTarget=o,Mo(u,r,void 0,n),n.currentTarget=null}function jf(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;e:{var v=void 0;if(r)for(var w=u.length-1;0<=w;w--){var N=u[w],V=N.instance,te=N.currentTarget;if(N=N.listener,V!==v&&p.isPropagationStopped())break e;Xf(p,N,te),v=V}else for(w=0;w<u.length;w++){if(N=u[w],V=N.instance,te=N.currentTarget,N=N.listener,V!==v&&p.isPropagationStopped())break e;Xf(p,N,te),v=V}}}if(Bi)throw n=gs,Bi=!1,gs=null,n}function Xt(n,r){var o=r[Jc];o===void 0&&(o=r[Jc]=new Set);var u=n+"__bubble";o.has(u)||(Yf(r,n,2,!1),o.add(u))}function Xc(n,r,o){var u=0;r&&(u|=4),Yf(o,n,u,r)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Ia(n){if(!n[Oo]){n[Oo]=!0,i.forEach(function(o){o!=="selectionchange"&&(nv.has(o)||Xc(o,!1,n),Xc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Oo]||(r[Oo]=!0,Xc("selectionchange",!1,r))}}function Yf(n,r,o,u){switch(gf(r)){case 1:var p=g0;break;case 4:p=_0;break;default:p=Cc}o=p.bind(null,r,o,n),p=void 0,!ms||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,o,{capture:!0,passive:p}):n.addEventListener(r,o,!0):p!==void 0?n.addEventListener(r,o,{passive:p}):n.addEventListener(r,o,!1)}function jc(n,r,o,u,p){var v=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var N=u.stateNode.containerInfo;if(N===p||N.nodeType===8&&N.parentNode===p)break;if(w===4)for(w=u.return;w!==null;){var V=w.tag;if((V===3||V===4)&&(V=w.stateNode.containerInfo,V===p||V.nodeType===8&&V.parentNode===p))return;w=w.return}for(;N!==null;){if(w=Hr(N),w===null)return;if(V=w.tag,V===5||V===6){u=v=w;continue e}N=N.parentNode}}u=u.return}ei(function(){var te=v,Me=W(o),we=[];e:{var xe=Gf.get(n);if(xe!==void 0){var Ve=Lc,Xe=n;switch(n){case"keypress":if(Do(o)===0)break e;case"keydown":case"keyup":Ve=D0;break;case"focusin":Xe="focus",Ve=Nc;break;case"focusout":Xe="blur",Ve=Nc;break;case"beforeblur":case"afterblur":Ve=Nc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=x0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=U0;break;case Bf:case zf:case Vf:Ve=E0;break;case Hf:Ve=F0;break;case"scroll":Ve=v0;break;case"wheel":Ve=B0;break;case"copy":case"cut":case"paste":Ve=T0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=Sf}var Ye=(r&4)!==0,en=!Ye&&n==="scroll",Z=Ye?xe!==null?xe+"Capture":null:xe;Ye=[];for(var X=te,Q;X!==null;){Q=X;var Re=Q.stateNode;if(Q.tag===5&&Re!==null&&(Q=Re,Z!==null&&(Re=_n(X,Z),Re!=null&&Ye.push(Na(X,Re,Q)))),en)break;X=X.return}0<Ye.length&&(xe=new Ve(xe,Xe,null,o,Me),we.push({event:xe,listeners:Ye}))}}if((r&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",xe&&o!==ft&&(Xe=o.relatedTarget||o.fromElement)&&(Hr(Xe)||Xe[Vi]))break e;if((Ve||xe)&&(xe=Me.window===Me?Me:(xe=Me.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ve?(Xe=o.relatedTarget||o.toElement,Ve=te,Xe=Xe?Hr(Xe):null,Xe!==null&&(en=zi(Xe),Xe!==en||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Ve=null,Xe=te),Ve!==Xe)){if(Ye=yf,Re="onMouseLeave",Z="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Sf,Re="onPointerLeave",Z="onPointerEnter",X="pointer"),en=Ve==null?xe:Ts(Ve),Q=Xe==null?xe:Ts(Xe),xe=new Ye(Re,X+"leave",Ve,o,Me),xe.target=en,xe.relatedTarget=Q,Re=null,Hr(Me)===te&&(Ye=new Ye(Z,X+"enter",Xe,o,Me),Ye.target=Q,Ye.relatedTarget=en,Re=Ye),en=Re,Ve&&Xe)t:{for(Ye=Ve,Z=Xe,X=0,Q=Ye;Q;Q=Es(Q))X++;for(Q=0,Re=Z;Re;Re=Es(Re))Q++;for(;0<X-Q;)Ye=Es(Ye),X--;for(;0<Q-X;)Z=Es(Z),Q--;for(;X--;){if(Ye===Z||Z!==null&&Ye===Z.alternate)break t;Ye=Es(Ye),Z=Es(Z)}Ye=null}else Ye=null;Ve!==null&&qf(we,xe,Ve,Ye,!1),Xe!==null&&en!==null&&qf(we,en,Xe,Ye,!0)}}e:{if(xe=te?Ts(te):window,Ve=xe.nodeName&&xe.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&xe.type==="file")var $e=j0;else if(Af(xe))if(Rf)$e=K0;else{$e=q0;var nt=Y0}else(Ve=xe.nodeName)&&Ve.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&($e=$0);if($e&&($e=$e(n,te))){Cf(we,$e,o,Me);break e}nt&&nt(n,xe,te),n==="focusout"&&(nt=xe._wrapperState)&&nt.controlled&&xe.type==="number"&&Oe(xe,"number",xe.value)}switch(nt=te?Ts(te):window,n){case"focusin":(Af(nt)||nt.contentEditable==="true")&&(Ss=nt,zc=te,La=null);break;case"focusout":La=zc=Ss=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,Ff(we,o,Me);break;case"selectionchange":if(Q0)break;case"keydown":case"keyup":Ff(we,o,Me)}var it;if(kc)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else xs?Tf(n,o)&&(ut="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ut="onCompositionStart");ut&&(Mf&&o.locale!=="ko"&&(xs||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&xs&&(it=_f()):(ur=Me,Pc="value"in ur?ur.value:ur.textContent,xs=!0)),nt=Bo(te,ut),0<nt.length&&(ut=new xf(ut,n,null,o,Me),we.push({event:ut,listeners:nt}),it?ut.data=it:(it=bf(o),it!==null&&(ut.data=it)))),(it=V0?H0(n,o):G0(n,o))&&(te=Bo(te,"onBeforeInput"),0<te.length&&(Me=new xf("onBeforeInput","beforeinput",null,o,Me),we.push({event:Me,listeners:te}),Me.data=it))}jf(we,r)})}function Na(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Bo(n,r){for(var o=r+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=_n(n,o),v!=null&&u.unshift(Na(n,v,p)),v=_n(n,r),v!=null&&u.push(Na(n,v,p))),n=n.return}return u}function Es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qf(n,r,o,u,p){for(var v=r._reactName,w=[];o!==null&&o!==u;){var N=o,V=N.alternate,te=N.stateNode;if(V!==null&&V===u)break;N.tag===5&&te!==null&&(N=te,p?(V=_n(o,v),V!=null&&w.unshift(Na(o,V,N))):p||(V=_n(o,v),V!=null&&w.push(Na(o,V,N)))),o=o.return}w.length!==0&&n.push({event:r,listeners:w})}var iv=/\r\n?/g,rv=/\u0000|\uFFFD/g;function $f(n){return(typeof n=="string"?n:""+n).replace(iv,`
`).replace(rv,"")}function zo(n,r,o){if(r=$f(r),$f(n)!==r&&o)throw Error(t(425))}function Vo(){}var Yc=null,qc=null;function $c(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,sv=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,av=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(n){return Kf.resolve(null).then(n).catch(ov)}:Kc;function ov(n){setTimeout(function(){throw n})}function Zc(n,r){var o=r,u=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(u===0){n.removeChild(p),wa(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=p}while(o);wa(r)}function dr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Zf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Ci="__reactFiber$"+ws,Ua="__reactProps$"+ws,Vi="__reactContainer$"+ws,Jc="__reactEvents$"+ws,lv="__reactListeners$"+ws,cv="__reactHandles$"+ws;function Hr(n){var r=n[Ci];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Vi]||o[Ci]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=Zf(n);n!==null;){if(o=n[Ci])return o;n=Zf(n)}return r}n=o,o=n.parentNode}return null}function ka(n){return n=n[Ci]||n[Vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ho(n){return n[Ua]||null}var Qc=[],bs=-1;function fr(n){return{current:n}}function jt(n){0>bs||(n.current=Qc[bs],Qc[bs]=null,bs--)}function Ht(n,r){bs++,Qc[bs]=n.current,n.current=r}var pr={},xn=fr(pr),kn=fr(!1),Gr=pr;function As(n,r){var o=n.type.contextTypes;if(!o)return pr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in o)p[v]=r[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Fn(n){return n=n.childContextTypes,n!=null}function Go(){jt(kn),jt(xn)}function Jf(n,r,o){if(xn.current!==pr)throw Error(t(168));Ht(xn,r),Ht(kn,o)}function Qf(n,r,o){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,ae(n)||"Unknown",p));return se({},o,u)}function Wo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,Gr=xn.current,Ht(xn,n),Ht(kn,kn.current),!0}function ep(n,r,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Qf(n,r,Gr),u.__reactInternalMemoizedMergedChildContext=n,jt(kn),jt(xn),Ht(xn,n)):jt(kn),Ht(kn,o)}var Hi=null,Xo=!1,eu=!1;function tp(n){Hi===null?Hi=[n]:Hi.push(n)}function uv(n){Xo=!0,tp(n)}function mr(){if(!eu&&Hi!==null){eu=!0;var n=0,r=St;try{var o=Hi;for(St=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Hi=null,Xo=!1}catch(p){throw Hi!==null&&(Hi=Hi.slice(n+1)),b(Ue,mr),p}finally{St=r,eu=!1}}return null}var Cs=[],Rs=0,jo=null,Yo=0,ti=[],ni=0,Wr=null,Gi=1,Wi="";function Xr(n,r){Cs[Rs++]=Yo,Cs[Rs++]=jo,jo=n,Yo=r}function np(n,r,o){ti[ni++]=Gi,ti[ni++]=Wi,ti[ni++]=Wr,Wr=n;var u=Gi;n=Wi;var p=32-Tt(u)-1;u&=~(1<<p),o+=1;var v=32-Tt(r)+p;if(30<v){var w=p-p%5;v=(u&(1<<w)-1).toString(32),u>>=w,p-=w,Gi=1<<32-Tt(r)+p|o<<p|u,Wi=v+n}else Gi=1<<v|o<<p|u,Wi=n}function tu(n){n.return!==null&&(Xr(n,1),np(n,1,0))}function nu(n){for(;n===jo;)jo=Cs[--Rs],Cs[Rs]=null,Yo=Cs[--Rs],Cs[Rs]=null;for(;n===Wr;)Wr=ti[--ni],ti[ni]=null,Wi=ti[--ni],ti[ni]=null,Gi=ti[--ni],ti[ni]=null}var qn=null,$n=null,qt=!1,fi=null;function ip(n,r){var o=ai(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function rp(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,qn=n,$n=dr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,qn=n,$n=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Wr!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=ai(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,qn=n,$n=null,!0):!1;default:return!1}}function iu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ru(n){if(qt){var r=$n;if(r){var o=r;if(!rp(n,r)){if(iu(n))throw Error(t(418));r=dr(o.nextSibling);var u=qn;r&&rp(n,r)?ip(u,o):(n.flags=n.flags&-4097|2,qt=!1,qn=n)}}else{if(iu(n))throw Error(t(418));n.flags=n.flags&-4097|2,qt=!1,qn=n}}}function sp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;qn=n}function qo(n){if(n!==qn)return!1;if(!qt)return sp(n),qt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!$c(n.type,n.memoizedProps)),r&&(r=$n)){if(iu(n))throw ap(),Error(t(418));for(;r;)ip(n,r),r=dr(r.nextSibling)}if(sp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){$n=dr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}$n=null}}else $n=qn?dr(n.stateNode.nextSibling):null;return!0}function ap(){for(var n=$n;n;)n=dr(n.nextSibling)}function Ps(){$n=qn=null,qt=!1}function su(n){fi===null?fi=[n]:fi.push(n)}var hv=A.ReactCurrentBatchConfig;function Fa(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(w){var N=p.refs;w===null?delete N[v]:N[v]=w},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function $o(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function op(n){var r=n._init;return r(n._payload)}function lp(n){function r(Z,X){if(n){var Q=Z.deletions;Q===null?(Z.deletions=[X],Z.flags|=16):Q.push(X)}}function o(Z,X){if(!n)return null;for(;X!==null;)r(Z,X),X=X.sibling;return null}function u(Z,X){for(Z=new Map;X!==null;)X.key!==null?Z.set(X.key,X):Z.set(X.index,X),X=X.sibling;return Z}function p(Z,X){return Z=Er(Z,X),Z.index=0,Z.sibling=null,Z}function v(Z,X,Q){return Z.index=Q,n?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<X?(Z.flags|=2,X):Q):(Z.flags|=2,X)):(Z.flags|=1048576,X)}function w(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function N(Z,X,Q,Re){return X===null||X.tag!==6?(X=Ku(Q,Z.mode,Re),X.return=Z,X):(X=p(X,Q),X.return=Z,X)}function V(Z,X,Q,Re){var $e=Q.type;return $e===B?Me(Z,X,Q.props.children,Re,Q.key):X!==null&&(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&op($e)===X.type)?(Re=p(X,Q.props),Re.ref=Fa(Z,X,Q),Re.return=Z,Re):(Re=yl(Q.type,Q.key,Q.props,null,Z.mode,Re),Re.ref=Fa(Z,X,Q),Re.return=Z,Re)}function te(Z,X,Q,Re){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=Zu(Q,Z.mode,Re),X.return=Z,X):(X=p(X,Q.children||[]),X.return=Z,X)}function Me(Z,X,Q,Re,$e){return X===null||X.tag!==7?(X=Qr(Q,Z.mode,Re,$e),X.return=Z,X):(X=p(X,Q),X.return=Z,X)}function we(Z,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Ku(""+X,Z.mode,Q),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case z:return Q=yl(X.type,X.key,X.props,null,Z.mode,Q),Q.ref=Fa(Z,null,X),Q.return=Z,Q;case I:return X=Zu(X,Z.mode,Q),X.return=Z,X;case oe:var Re=X._init;return we(Z,Re(X._payload),Q)}if(ht(X)||le(X))return X=Qr(X,Z.mode,Q,null),X.return=Z,X;$o(Z,X)}return null}function xe(Z,X,Q,Re){var $e=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return $e!==null?null:N(Z,X,""+Q,Re);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case z:return Q.key===$e?V(Z,X,Q,Re):null;case I:return Q.key===$e?te(Z,X,Q,Re):null;case oe:return $e=Q._init,xe(Z,X,$e(Q._payload),Re)}if(ht(Q)||le(Q))return $e!==null?null:Me(Z,X,Q,Re,null);$o(Z,Q)}return null}function Ve(Z,X,Q,Re,$e){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return Z=Z.get(Q)||null,N(X,Z,""+Re,$e);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case z:return Z=Z.get(Re.key===null?Q:Re.key)||null,V(X,Z,Re,$e);case I:return Z=Z.get(Re.key===null?Q:Re.key)||null,te(X,Z,Re,$e);case oe:var nt=Re._init;return Ve(Z,X,Q,nt(Re._payload),$e)}if(ht(Re)||le(Re))return Z=Z.get(Q)||null,Me(X,Z,Re,$e,null);$o(X,Re)}return null}function Xe(Z,X,Q,Re){for(var $e=null,nt=null,it=X,ut=X=0,dn=null;it!==null&&ut<Q.length;ut++){it.index>ut?(dn=it,it=null):dn=it.sibling;var Ct=xe(Z,it,Q[ut],Re);if(Ct===null){it===null&&(it=dn);break}n&&it&&Ct.alternate===null&&r(Z,it),X=v(Ct,X,ut),nt===null?$e=Ct:nt.sibling=Ct,nt=Ct,it=dn}if(ut===Q.length)return o(Z,it),qt&&Xr(Z,ut),$e;if(it===null){for(;ut<Q.length;ut++)it=we(Z,Q[ut],Re),it!==null&&(X=v(it,X,ut),nt===null?$e=it:nt.sibling=it,nt=it);return qt&&Xr(Z,ut),$e}for(it=u(Z,it);ut<Q.length;ut++)dn=Ve(it,Z,ut,Q[ut],Re),dn!==null&&(n&&dn.alternate!==null&&it.delete(dn.key===null?ut:dn.key),X=v(dn,X,ut),nt===null?$e=dn:nt.sibling=dn,nt=dn);return n&&it.forEach(function(wr){return r(Z,wr)}),qt&&Xr(Z,ut),$e}function Ye(Z,X,Q,Re){var $e=le(Q);if(typeof $e!="function")throw Error(t(150));if(Q=$e.call(Q),Q==null)throw Error(t(151));for(var nt=$e=null,it=X,ut=X=0,dn=null,Ct=Q.next();it!==null&&!Ct.done;ut++,Ct=Q.next()){it.index>ut?(dn=it,it=null):dn=it.sibling;var wr=xe(Z,it,Ct.value,Re);if(wr===null){it===null&&(it=dn);break}n&&it&&wr.alternate===null&&r(Z,it),X=v(wr,X,ut),nt===null?$e=wr:nt.sibling=wr,nt=wr,it=dn}if(Ct.done)return o(Z,it),qt&&Xr(Z,ut),$e;if(it===null){for(;!Ct.done;ut++,Ct=Q.next())Ct=we(Z,Ct.value,Re),Ct!==null&&(X=v(Ct,X,ut),nt===null?$e=Ct:nt.sibling=Ct,nt=Ct);return qt&&Xr(Z,ut),$e}for(it=u(Z,it);!Ct.done;ut++,Ct=Q.next())Ct=Ve(it,Z,ut,Ct.value,Re),Ct!==null&&(n&&Ct.alternate!==null&&it.delete(Ct.key===null?ut:Ct.key),X=v(Ct,X,ut),nt===null?$e=Ct:nt.sibling=Ct,nt=Ct);return n&&it.forEach(function(Wv){return r(Z,Wv)}),qt&&Xr(Z,ut),$e}function en(Z,X,Q,Re){if(typeof Q=="object"&&Q!==null&&Q.type===B&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case z:e:{for(var $e=Q.key,nt=X;nt!==null;){if(nt.key===$e){if($e=Q.type,$e===B){if(nt.tag===7){o(Z,nt.sibling),X=p(nt,Q.props.children),X.return=Z,Z=X;break e}}else if(nt.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&op($e)===nt.type){o(Z,nt.sibling),X=p(nt,Q.props),X.ref=Fa(Z,nt,Q),X.return=Z,Z=X;break e}o(Z,nt);break}else r(Z,nt);nt=nt.sibling}Q.type===B?(X=Qr(Q.props.children,Z.mode,Re,Q.key),X.return=Z,Z=X):(Re=yl(Q.type,Q.key,Q.props,null,Z.mode,Re),Re.ref=Fa(Z,X,Q),Re.return=Z,Z=Re)}return w(Z);case I:e:{for(nt=Q.key;X!==null;){if(X.key===nt)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){o(Z,X.sibling),X=p(X,Q.children||[]),X.return=Z,Z=X;break e}else{o(Z,X);break}else r(Z,X);X=X.sibling}X=Zu(Q,Z.mode,Re),X.return=Z,Z=X}return w(Z);case oe:return nt=Q._init,en(Z,X,nt(Q._payload),Re)}if(ht(Q))return Xe(Z,X,Q,Re);if(le(Q))return Ye(Z,X,Q,Re);$o(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,X!==null&&X.tag===6?(o(Z,X.sibling),X=p(X,Q),X.return=Z,Z=X):(o(Z,X),X=Ku(Q,Z.mode,Re),X.return=Z,Z=X),w(Z)):o(Z,X)}return en}var Ls=lp(!0),cp=lp(!1),Ko=fr(null),Zo=null,Ds=null,au=null;function ou(){au=Ds=Zo=null}function lu(n){var r=Ko.current;jt(Ko),n._currentValue=r}function cu(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Is(n,r){Zo=n,au=Ds=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(On=!0),n.firstContext=null)}function ii(n){var r=n._currentValue;if(au!==n)if(n={context:n,memoizedValue:r,next:null},Ds===null){if(Zo===null)throw Error(t(308));Ds=n,Zo.dependencies={lanes:0,firstContext:n}}else Ds=Ds.next=n;return r}var jr=null;function uu(n){jr===null?jr=[n]:jr.push(n)}function up(n,r,o,u){var p=r.interleaved;return p===null?(o.next=o,uu(r)):(o.next=p.next,p.next=o),r.interleaved=o,Xi(n,u)}function Xi(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var gr=!1;function hu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ji(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function _r(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(bt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,Xi(n,o)}return p=u.interleaved,p===null?(r.next=r,uu(u)):(r.next=p.next,p.next=r),u.interleaved=r,Xi(n,o)}function Jo(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Vr(n,o)}}function dp(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,v=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};v===null?p=v=w:v=v.next=w,o=o.next}while(o!==null);v===null?p=v=r:v=v.next=r}else p=v=r;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Qo(n,r,o,u){var p=n.updateQueue;gr=!1;var v=p.firstBaseUpdate,w=p.lastBaseUpdate,N=p.shared.pending;if(N!==null){p.shared.pending=null;var V=N,te=V.next;V.next=null,w===null?v=te:w.next=te,w=V;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,N=Me.lastBaseUpdate,N!==w&&(N===null?Me.firstBaseUpdate=te:N.next=te,Me.lastBaseUpdate=V))}if(v!==null){var we=p.baseState;w=0,Me=te=V=null,N=v;do{var xe=N.lane,Ve=N.eventTime;if((u&xe)===xe){Me!==null&&(Me=Me.next={eventTime:Ve,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Xe=n,Ye=N;switch(xe=r,Ve=o,Ye.tag){case 1:if(Xe=Ye.payload,typeof Xe=="function"){we=Xe.call(Ve,we,xe);break e}we=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ye.payload,xe=typeof Xe=="function"?Xe.call(Ve,we,xe):Xe,xe==null)break e;we=se({},we,xe);break e;case 2:gr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,xe=p.effects,xe===null?p.effects=[N]:xe.push(N))}else Ve={eventTime:Ve,lane:xe,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Me===null?(te=Me=Ve,V=we):Me=Me.next=Ve,w|=xe;if(N=N.next,N===null){if(N=p.shared.pending,N===null)break;xe=N,N=xe.next,xe.next=null,p.lastBaseUpdate=xe,p.shared.pending=null}}while(!0);if(Me===null&&(V=we),p.baseState=V,p.firstBaseUpdate=te,p.lastBaseUpdate=Me,r=p.shared.interleaved,r!==null){p=r;do w|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);$r|=w,n.lanes=w,n.memoizedState=we}}function fp(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=o,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var Oa={},Ri=fr(Oa),Ba=fr(Oa),za=fr(Oa);function Yr(n){if(n===Oa)throw Error(t(174));return n}function du(n,r){switch(Ht(za,r),Ht(Ba,n),Ht(Ri,Oa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Se(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Se(r,n)}jt(Ri),Ht(Ri,r)}function Ns(){jt(Ri),jt(Ba),jt(za)}function pp(n){Yr(za.current);var r=Yr(Ri.current),o=Se(r,n.type);r!==o&&(Ht(Ba,n),Ht(Ri,o))}function fu(n){Ba.current===n&&(jt(Ri),jt(Ba))}var $t=fr(0);function el(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var pu=[];function mu(){for(var n=0;n<pu.length;n++)pu[n]._workInProgressVersionPrimary=null;pu.length=0}var tl=A.ReactCurrentDispatcher,gu=A.ReactCurrentBatchConfig,qr=0,Kt=null,sn=null,un=null,nl=!1,Va=!1,Ha=0,dv=0;function Sn(){throw Error(t(321))}function _u(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!di(n[o],r[o]))return!1;return!0}function vu(n,r,o,u,p,v){if(qr=v,Kt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,tl.current=n===null||n.memoizedState===null?gv:_v,n=o(u,p),Va){v=0;do{if(Va=!1,Ha=0,25<=v)throw Error(t(301));v+=1,un=sn=null,r.updateQueue=null,tl.current=vv,n=o(u,p)}while(Va)}if(tl.current=sl,r=sn!==null&&sn.next!==null,qr=0,un=sn=Kt=null,nl=!1,r)throw Error(t(300));return n}function yu(){var n=Ha!==0;return Ha=0,n}function Pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?Kt.memoizedState=un=n:un=un.next=n,un}function ri(){if(sn===null){var n=Kt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var r=un===null?Kt.memoizedState:un.next;if(r!==null)un=r,sn=n;else{if(n===null)throw Error(t(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},un===null?Kt.memoizedState=un=n:un=un.next=n}return un}function Ga(n,r){return typeof r=="function"?r(n):r}function xu(n){var r=ri(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=sn,p=u.baseQueue,v=o.pending;if(v!==null){if(p!==null){var w=p.next;p.next=v.next,v.next=w}u.baseQueue=p=v,o.pending=null}if(p!==null){v=p.next,u=u.baseState;var N=w=null,V=null,te=v;do{var Me=te.lane;if((qr&Me)===Me)V!==null&&(V=V.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),u=te.hasEagerState?te.eagerState:n(u,te.action);else{var we={lane:Me,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};V===null?(N=V=we,w=u):V=V.next=we,Kt.lanes|=Me,$r|=Me}te=te.next}while(te!==null&&te!==v);V===null?w=u:V.next=N,di(u,r.memoizedState)||(On=!0),r.memoizedState=u,r.baseState=w,r.baseQueue=V,o.lastRenderedState=u}if(n=o.interleaved,n!==null){p=n;do v=p.lane,Kt.lanes|=v,$r|=v,p=p.next;while(p!==n)}else p===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Su(n){var r=ri(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,v=r.memoizedState;if(p!==null){o.pending=null;var w=p=p.next;do v=n(v,w.action),w=w.next;while(w!==p);di(v,r.memoizedState)||(On=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),o.lastRenderedState=v}return[v,u]}function mp(){}function gp(n,r){var o=Kt,u=ri(),p=r(),v=!di(u.memoizedState,p);if(v&&(u.memoizedState=p,On=!0),u=u.queue,Mu(yp.bind(null,o,u,n),[n]),u.getSnapshot!==r||v||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,Wa(9,vp.bind(null,o,u,p,r),void 0,null),hn===null)throw Error(t(349));(qr&30)!==0||_p(o,r,p)}return p}function _p(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Kt.updateQueue,r===null?(r={lastEffect:null,stores:null},Kt.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function vp(n,r,o,u){r.value=o,r.getSnapshot=u,xp(r)&&Sp(n)}function yp(n,r,o){return o(function(){xp(r)&&Sp(n)})}function xp(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!di(n,o)}catch{return!0}}function Sp(n){var r=Xi(n,1);r!==null&&_i(r,n,1,-1)}function Mp(n){var r=Pi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},r.queue=n,n=n.dispatch=mv.bind(null,Kt,n),[r.memoizedState,n]}function Wa(n,r,o,u){return n={tag:n,create:r,destroy:o,deps:u,next:null},r=Kt.updateQueue,r===null?(r={lastEffect:null,stores:null},Kt.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n)),n}function Ep(){return ri().memoizedState}function il(n,r,o,u){var p=Pi();Kt.flags|=n,p.memoizedState=Wa(1|r,o,void 0,u===void 0?null:u)}function rl(n,r,o,u){var p=ri();u=u===void 0?null:u;var v=void 0;if(sn!==null){var w=sn.memoizedState;if(v=w.destroy,u!==null&&_u(u,w.deps)){p.memoizedState=Wa(r,o,v,u);return}}Kt.flags|=n,p.memoizedState=Wa(1|r,o,v,u)}function wp(n,r){return il(8390656,8,n,r)}function Mu(n,r){return rl(2048,8,n,r)}function Tp(n,r){return rl(4,2,n,r)}function bp(n,r){return rl(4,4,n,r)}function Ap(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Cp(n,r,o){return o=o!=null?o.concat([n]):null,rl(4,4,Ap.bind(null,r,n),o)}function Eu(){}function Rp(n,r){var o=ri();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&_u(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Pp(n,r){var o=ri();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&_u(r,u[1])?u[0]:(n=n(),o.memoizedState=[n,r],n)}function Lp(n,r,o){return(qr&21)===0?(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=o):(di(o,r)||(o=Cn(),Kt.lanes|=o,$r|=o,n.baseState=!0),r)}function fv(n,r){var o=St;St=o!==0&&4>o?o:4,n(!0);var u=gu.transition;gu.transition={};try{n(!1),r()}finally{St=o,gu.transition=u}}function Dp(){return ri().memoizedState}function pv(n,r,o){var u=Sr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Ip(n))Np(r,o);else if(o=up(n,r,o,u),o!==null){var p=Pn();_i(o,n,u,p),Up(o,r,u)}}function mv(n,r,o){var u=Sr(n),p={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ip(n))Np(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var w=r.lastRenderedState,N=v(w,o);if(p.hasEagerState=!0,p.eagerState=N,di(N,w)){var V=r.interleaved;V===null?(p.next=p,uu(r)):(p.next=V.next,V.next=p),r.interleaved=p;return}}catch{}finally{}o=up(n,r,p,u),o!==null&&(p=Pn(),_i(o,n,u,p),Up(o,r,u))}}function Ip(n){var r=n.alternate;return n===Kt||r!==null&&r===Kt}function Np(n,r){Va=nl=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Up(n,r,o){if((o&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Vr(n,o)}}var sl={readContext:ii,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},gv={readContext:ii,useCallback:function(n,r){return Pi().memoizedState=[n,r===void 0?null:r],n},useContext:ii,useEffect:wp,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,il(4194308,4,Ap.bind(null,r,n),o)},useLayoutEffect:function(n,r){return il(4194308,4,n,r)},useInsertionEffect:function(n,r){return il(4,2,n,r)},useMemo:function(n,r){var o=Pi();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var u=Pi();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=pv.bind(null,Kt,n),[u.memoizedState,n]},useRef:function(n){var r=Pi();return n={current:n},r.memoizedState=n},useState:Mp,useDebugValue:Eu,useDeferredValue:function(n){return Pi().memoizedState=n},useTransition:function(){var n=Mp(!1),r=n[0];return n=fv.bind(null,n[1]),Pi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var u=Kt,p=Pi();if(qt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),hn===null)throw Error(t(349));(qr&30)!==0||_p(u,r,o)}p.memoizedState=o;var v={value:o,getSnapshot:r};return p.queue=v,wp(yp.bind(null,u,v,n),[n]),u.flags|=2048,Wa(9,vp.bind(null,u,v,o,r),void 0,null),o},useId:function(){var n=Pi(),r=hn.identifierPrefix;if(qt){var o=Wi,u=Gi;o=(u&~(1<<32-Tt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ha++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=dv++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},_v={readContext:ii,useCallback:Rp,useContext:ii,useEffect:Mu,useImperativeHandle:Cp,useInsertionEffect:Tp,useLayoutEffect:bp,useMemo:Pp,useReducer:xu,useRef:Ep,useState:function(){return xu(Ga)},useDebugValue:Eu,useDeferredValue:function(n){var r=ri();return Lp(r,sn.memoizedState,n)},useTransition:function(){var n=xu(Ga)[0],r=ri().memoizedState;return[n,r]},useMutableSource:mp,useSyncExternalStore:gp,useId:Dp,unstable_isNewReconciler:!1},vv={readContext:ii,useCallback:Rp,useContext:ii,useEffect:Mu,useImperativeHandle:Cp,useInsertionEffect:Tp,useLayoutEffect:bp,useMemo:Pp,useReducer:Su,useRef:Ep,useState:function(){return Su(Ga)},useDebugValue:Eu,useDeferredValue:function(n){var r=ri();return sn===null?r.memoizedState=n:Lp(r,sn.memoizedState,n)},useTransition:function(){var n=Su(Ga)[0],r=ri().memoizedState;return[n,r]},useMutableSource:mp,useSyncExternalStore:gp,useId:Dp,unstable_isNewReconciler:!1};function pi(n,r){if(n&&n.defaultProps){r=se({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function wu(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:se({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var al={isMounted:function(n){return(n=n._reactInternals)?zi(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Pn(),p=Sr(n),v=ji(u,p);v.payload=r,o!=null&&(v.callback=o),r=_r(n,v,p),r!==null&&(_i(r,n,p,u),Jo(r,n,p))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Pn(),p=Sr(n),v=ji(u,p);v.tag=1,v.payload=r,o!=null&&(v.callback=o),r=_r(n,v,p),r!==null&&(_i(r,n,p,u),Jo(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Pn(),u=Sr(n),p=ji(o,u);p.tag=2,r!=null&&(p.callback=r),r=_r(n,p,u),r!==null&&(_i(r,n,u,o),Jo(r,n,u))}};function kp(n,r,o,u,p,v,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,w):r.prototype&&r.prototype.isPureReactComponent?!Pa(o,u)||!Pa(p,v):!0}function Fp(n,r,o){var u=!1,p=pr,v=r.contextType;return typeof v=="object"&&v!==null?v=ii(v):(p=Fn(r)?Gr:xn.current,u=r.contextTypes,v=(u=u!=null)?As(n,p):pr),r=new r(o,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=al,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function Op(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&al.enqueueReplaceState(r,r.state,null)}function Tu(n,r,o,u){var p=n.stateNode;p.props=o,p.state=n.memoizedState,p.refs={},hu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=ii(v):(v=Fn(r)?Gr:xn.current,p.context=As(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(wu(n,r,v,o),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&al.enqueueReplaceState(p,p.state,null),Qo(n,o,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Us(n,r){try{var o="",u=r;do o+=Ee(u),u=u.return;while(u);var p=o}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function bu(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Au(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var yv=typeof WeakMap=="function"?WeakMap:Map;function Bp(n,r,o){o=ji(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){fl||(fl=!0,Hu=u),Au(n,r)},o}function zp(n,r,o){o=ji(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;o.payload=function(){return u(p)},o.callback=function(){Au(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(o.callback=function(){Au(n,r),typeof u!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})}),o}function Vp(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new yv;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(o)||(p.add(o),n=Iv.bind(null,n,r,o),r.then(n,n))}function Hp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Gp(n,r,o,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=ji(-1,1),r.tag=2,_r(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var xv=A.ReactCurrentOwner,On=!1;function Rn(n,r,o,u){r.child=n===null?cp(r,null,o,u):Ls(r,n.child,o,u)}function Wp(n,r,o,u,p){o=o.render;var v=r.ref;return Is(r,p),u=vu(n,r,o,u,v,p),o=yu(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Yi(n,r,p)):(qt&&o&&tu(r),r.flags|=1,Rn(n,r,u,p),r.child)}function Xp(n,r,o,u,p){if(n===null){var v=o.type;return typeof v=="function"&&!$u(v)&&v.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=v,jp(n,r,v,u,p)):(n=yl(o.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var w=v.memoizedProps;if(o=o.compare,o=o!==null?o:Pa,o(w,u)&&n.ref===r.ref)return Yi(n,r,p)}return r.flags|=1,n=Er(v,u),n.ref=r.ref,n.return=r,r.child=n}function jp(n,r,o,u,p){if(n!==null){var v=n.memoizedProps;if(Pa(v,u)&&n.ref===r.ref)if(On=!1,r.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(On=!0);else return r.lanes=n.lanes,Yi(n,r,p)}return Cu(n,r,o,u,p)}function Yp(n,r,o){var u=r.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Fs,Kn),Kn|=o;else{if((o&1073741824)===0)return n=v!==null?v.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ht(Fs,Kn),Kn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:o,Ht(Fs,Kn),Kn|=u}else v!==null?(u=v.baseLanes|o,r.memoizedState=null):u=o,Ht(Fs,Kn),Kn|=u;return Rn(n,r,p,o),r.child}function qp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Cu(n,r,o,u,p){var v=Fn(o)?Gr:xn.current;return v=As(r,v),Is(r,p),o=vu(n,r,o,u,v,p),u=yu(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Yi(n,r,p)):(qt&&u&&tu(r),r.flags|=1,Rn(n,r,o,p),r.child)}function $p(n,r,o,u,p){if(Fn(o)){var v=!0;Wo(r)}else v=!1;if(Is(r,p),r.stateNode===null)ll(n,r),Fp(r,o,u),Tu(r,o,u,p),u=!0;else if(n===null){var w=r.stateNode,N=r.memoizedProps;w.props=N;var V=w.context,te=o.contextType;typeof te=="object"&&te!==null?te=ii(te):(te=Fn(o)?Gr:xn.current,te=As(r,te));var Me=o.getDerivedStateFromProps,we=typeof Me=="function"||typeof w.getSnapshotBeforeUpdate=="function";we||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==u||V!==te)&&Op(r,w,u,te),gr=!1;var xe=r.memoizedState;w.state=xe,Qo(r,u,w,p),V=r.memoizedState,N!==u||xe!==V||kn.current||gr?(typeof Me=="function"&&(wu(r,o,Me,u),V=r.memoizedState),(N=gr||kp(r,o,N,u,xe,V,te))?(we||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(r.flags|=4194308)):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=V),w.props=u,w.state=V,w.context=te,u=N):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{w=r.stateNode,hp(n,r),N=r.memoizedProps,te=r.type===r.elementType?N:pi(r.type,N),w.props=te,we=r.pendingProps,xe=w.context,V=o.contextType,typeof V=="object"&&V!==null?V=ii(V):(V=Fn(o)?Gr:xn.current,V=As(r,V));var Ve=o.getDerivedStateFromProps;(Me=typeof Ve=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==we||xe!==V)&&Op(r,w,u,V),gr=!1,xe=r.memoizedState,w.state=xe,Qo(r,u,w,p);var Xe=r.memoizedState;N!==we||xe!==Xe||kn.current||gr?(typeof Ve=="function"&&(wu(r,o,Ve,u),Xe=r.memoizedState),(te=gr||kp(r,o,te,u,xe,Xe,V)||!1)?(Me||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Xe,V),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Xe,V)),typeof w.componentDidUpdate=="function"&&(r.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof w.componentDidUpdate!="function"||N===n.memoizedProps&&xe===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&xe===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Xe),w.props=u,w.state=Xe,w.context=V,u=te):(typeof w.componentDidUpdate!="function"||N===n.memoizedProps&&xe===n.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&xe===n.memoizedState||(r.flags|=1024),u=!1)}return Ru(n,r,o,u,v,p)}function Ru(n,r,o,u,p,v){qp(n,r);var w=(r.flags&128)!==0;if(!u&&!w)return p&&ep(r,o,!1),Yi(n,r,v);u=r.stateNode,xv.current=r;var N=w&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&w?(r.child=Ls(r,n.child,null,v),r.child=Ls(r,null,N,v)):Rn(n,r,N,v),r.memoizedState=u.state,p&&ep(r,o,!0),r.child}function Kp(n){var r=n.stateNode;r.pendingContext?Jf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Jf(n,r.context,!1),du(n,r.containerInfo)}function Zp(n,r,o,u,p){return Ps(),su(p),r.flags|=256,Rn(n,r,o,u),r.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Lu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Jp(n,r,o){var u=r.pendingProps,p=$t.current,v=!1,w=(r.flags&128)!==0,N;if((N=w)||(N=n!==null&&n.memoizedState===null?!1:(p&2)!==0),N?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ht($t,p&1),n===null)return ru(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(w=u.children,n=u.fallback,v?(u=r.mode,v=r.child,w={mode:"hidden",children:w},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=w):v=xl(w,u,0,null),n=Qr(n,u,o,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Lu(o),r.memoizedState=Pu,n):Du(r,w));if(p=n.memoizedState,p!==null&&(N=p.dehydrated,N!==null))return Sv(n,r,w,u,N,p,o);if(v){v=u.fallback,w=r.mode,p=n.child,N=p.sibling;var V={mode:"hidden",children:u.children};return(w&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=V,r.deletions=null):(u=Er(p,V),u.subtreeFlags=p.subtreeFlags&14680064),N!==null?v=Er(N,v):(v=Qr(v,w,o,null),v.flags|=2),v.return=r,u.return=r,u.sibling=v,r.child=u,u=v,v=r.child,w=n.child.memoizedState,w=w===null?Lu(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},v.memoizedState=w,v.childLanes=n.childLanes&~o,r.memoizedState=Pu,u}return v=n.child,n=v.sibling,u=Er(v,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=u,r.memoizedState=null,u}function Du(n,r){return r=xl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ol(n,r,o,u){return u!==null&&su(u),Ls(r,n.child,null,o),n=Du(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Sv(n,r,o,u,p,v,w){if(o)return r.flags&256?(r.flags&=-257,u=bu(Error(t(422))),ol(n,r,w,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=u.fallback,p=r.mode,u=xl({mode:"visible",children:u.children},p,0,null),v=Qr(v,p,w,null),v.flags|=2,u.return=r,v.return=r,u.sibling=v,r.child=u,(r.mode&1)!==0&&Ls(r,n.child,null,w),r.child.memoizedState=Lu(w),r.memoizedState=Pu,v);if((r.mode&1)===0)return ol(n,r,w,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var N=u.dgst;return u=N,v=Error(t(419)),u=bu(v,u,void 0),ol(n,r,w,u)}if(N=(w&n.childLanes)!==0,On||N){if(u=hn,u!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|w))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Xi(n,p),_i(u,n,p,-1))}return qu(),u=bu(Error(t(421))),ol(n,r,w,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Nv.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,$n=dr(p.nextSibling),qn=r,qt=!0,fi=null,n!==null&&(ti[ni++]=Gi,ti[ni++]=Wi,ti[ni++]=Wr,Gi=n.id,Wi=n.overflow,Wr=r),r=Du(r,u.children),r.flags|=4096,r)}function Qp(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),cu(n.return,r,o)}function Iu(n,r,o,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=o,v.tailMode=p)}function em(n,r,o){var u=r.pendingProps,p=u.revealOrder,v=u.tail;if(Rn(n,r,u.children,o),u=$t.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qp(n,o,r);else if(n.tag===19)Qp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ht($t,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(o=r.child,p=null;o!==null;)n=o.alternate,n!==null&&el(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),Iu(r,!1,p,o,v);break;case"backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&el(n)===null){r.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}Iu(r,!0,o,null,v);break;case"together":Iu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ll(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Yi(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),$r|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Er(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Er(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function Mv(n,r,o){switch(r.tag){case 3:Kp(r),Ps();break;case 5:pp(r);break;case 1:Fn(r.type)&&Wo(r);break;case 4:du(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;Ht(Ko,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Ht($t,$t.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Jp(n,r,o):(Ht($t,$t.current&1),n=Yi(n,r,o),n!==null?n.sibling:null);Ht($t,$t.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(n.flags&128)!==0){if(u)return em(n,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ht($t,$t.current),u)break;return null;case 22:case 23:return r.lanes=0,Yp(n,r,o)}return Yi(n,r,o)}var tm,Nu,nm,im;tm=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Nu=function(){},nm=function(n,r,o,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,Yr(Ri.current);var v=null;switch(o){case"input":p=Et(n,p),u=Et(n,u),v=[];break;case"select":p=se({},p,{value:void 0}),u=se({},u,{value:void 0}),v=[];break;case"textarea":p=Wt(n,p),u=Wt(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Vo)}qe(o,u);var w;o=null;for(te in p)if(!u.hasOwnProperty(te)&&p.hasOwnProperty(te)&&p[te]!=null)if(te==="style"){var N=p[te];for(w in N)N.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?v||(v=[]):(v=v||[]).push(te,null));for(te in u){var V=u[te];if(N=p!=null?p[te]:void 0,u.hasOwnProperty(te)&&V!==N&&(V!=null||N!=null))if(te==="style")if(N){for(w in N)!N.hasOwnProperty(w)||V&&V.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in V)V.hasOwnProperty(w)&&N[w]!==V[w]&&(o||(o={}),o[w]=V[w])}else o||(v||(v=[]),v.push(te,o)),o=V;else te==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,N=N?N.__html:void 0,V!=null&&N!==V&&(v=v||[]).push(te,V)):te==="children"?typeof V!="string"&&typeof V!="number"||(v=v||[]).push(te,""+V):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(V!=null&&te==="onScroll"&&Xt("scroll",n),v||N===V||(v=[])):(v=v||[]).push(te,V))}o&&(v=v||[]).push("style",o);var te=v;(r.updateQueue=te)&&(r.flags|=4)}},im=function(n,r,o,u){o!==u&&(r.flags|=4)};function Xa(n,r){if(!qt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Mn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function Ev(n,r,o){var u=r.pendingProps;switch(nu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(r),null;case 1:return Fn(r.type)&&Go(),Mn(r),null;case 3:return u=r.stateNode,Ns(),jt(kn),jt(xn),mu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(qo(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,fi!==null&&(Xu(fi),fi=null))),Nu(n,r),Mn(r),null;case 5:fu(r);var p=Yr(za.current);if(o=r.type,n!==null&&r.stateNode!=null)nm(n,r,o,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Mn(r),null}if(n=Yr(Ri.current),qo(r)){u=r.stateNode,o=r.type;var v=r.memoizedProps;switch(u[Ci]=r,u[Ua]=v,n=(r.mode&1)!==0,o){case"dialog":Xt("cancel",u),Xt("close",u);break;case"iframe":case"object":case"embed":Xt("load",u);break;case"video":case"audio":for(p=0;p<Da.length;p++)Xt(Da[p],u);break;case"source":Xt("error",u);break;case"img":case"image":case"link":Xt("error",u),Xt("load",u);break;case"details":Xt("toggle",u);break;case"input":Qe(u,v),Xt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Xt("invalid",u);break;case"textarea":D(u,v),Xt("invalid",u)}qe(o,v),p=null;for(var w in v)if(v.hasOwnProperty(w)){var N=v[w];w==="children"?typeof N=="string"?u.textContent!==N&&(v.suppressHydrationWarning!==!0&&zo(u.textContent,N,n),p=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(v.suppressHydrationWarning!==!0&&zo(u.textContent,N,n),p=["children",""+N]):a.hasOwnProperty(w)&&N!=null&&w==="onScroll"&&Xt("scroll",u)}switch(o){case"input":st(u),vt(u,v,!0);break;case"textarea":st(u),J(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=Vo)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(o,{is:u.is}):(n=w.createElement(o),o==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,o),n[Ci]=r,n[Ua]=u,tm(n,r,!1,!1),r.stateNode=n;e:{switch(w=Ne(o,u),o){case"dialog":Xt("cancel",n),Xt("close",n),p=u;break;case"iframe":case"object":case"embed":Xt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Da.length;p++)Xt(Da[p],n);p=u;break;case"source":Xt("error",n),p=u;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),p=u;break;case"details":Xt("toggle",n),p=u;break;case"input":Qe(n,u),p=Et(n,u),Xt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=se({},u,{value:void 0}),Xt("invalid",n);break;case"textarea":D(n,u),p=Wt(n,u),Xt("invalid",n);break;default:p=u}qe(o,p),N=p;for(v in N)if(N.hasOwnProperty(v)){var V=N[v];v==="style"?Fe(n,V):v==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ke(n,V)):v==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&Pe(n,V):typeof V=="number"&&Pe(n,""+V):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(a.hasOwnProperty(v)?V!=null&&v==="onScroll"&&Xt("scroll",n):V!=null&&P(n,v,V,w))}switch(o){case"input":st(n),vt(n,u,!1);break;case"textarea":st(n),J(n);break;case"option":u.value!=null&&n.setAttribute("value",""+_e(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?Gt(n,!!u.multiple,v,!1):u.defaultValue!=null&&Gt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Vo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Mn(r),null;case 6:if(n&&r.stateNode!=null)im(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(o=Yr(za.current),Yr(Ri.current),qo(r)){if(u=r.stateNode,o=r.memoizedProps,u[Ci]=r,(v=u.nodeValue!==o)&&(n=qn,n!==null))switch(n.tag){case 3:zo(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zo(u.nodeValue,o,(n.mode&1)!==0)}v&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Ci]=r,r.stateNode=u}return Mn(r),null;case 13:if(jt($t),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(qt&&$n!==null&&(r.mode&1)!==0&&(r.flags&128)===0)ap(),Ps(),r.flags|=98560,v=!1;else if(v=qo(r),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Ci]=r}else Ps(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Mn(r),v=!1}else fi!==null&&(Xu(fi),fi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||($t.current&1)!==0?an===0&&(an=3):qu())),r.updateQueue!==null&&(r.flags|=4),Mn(r),null);case 4:return Ns(),Nu(n,r),n===null&&Ia(r.stateNode.containerInfo),Mn(r),null;case 10:return lu(r.type._context),Mn(r),null;case 17:return Fn(r.type)&&Go(),Mn(r),null;case 19:if(jt($t),v=r.memoizedState,v===null)return Mn(r),null;if(u=(r.flags&128)!==0,w=v.rendering,w===null)if(u)Xa(v,!1);else{if(an!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(w=el(n),w!==null){for(r.flags|=128,Xa(v,!1),u=w.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)v=o,n=u,v.flags&=14680066,w=v.alternate,w===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=w.childLanes,v.lanes=w.lanes,v.child=w.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=w.memoizedProps,v.memoizedState=w.memoizedState,v.updateQueue=w.updateQueue,v.type=w.type,n=w.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ht($t,$t.current&1|2),r.child}n=n.sibling}v.tail!==null&&j()>Os&&(r.flags|=128,u=!0,Xa(v,!1),r.lanes=4194304)}else{if(!u)if(n=el(w),n!==null){if(r.flags|=128,u=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Xa(v,!0),v.tail===null&&v.tailMode==="hidden"&&!w.alternate&&!qt)return Mn(r),null}else 2*j()-v.renderingStartTime>Os&&o!==1073741824&&(r.flags|=128,u=!0,Xa(v,!1),r.lanes=4194304);v.isBackwards?(w.sibling=r.child,r.child=w):(o=v.last,o!==null?o.sibling=w:r.child=w,v.last=w)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=j(),r.sibling=null,o=$t.current,Ht($t,u?o&1|2:o&1),r):(Mn(r),null);case 22:case 23:return Yu(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Kn&1073741824)!==0&&(Mn(r),r.subtreeFlags&6&&(r.flags|=8192)):Mn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function wv(n,r){switch(nu(r),r.tag){case 1:return Fn(r.type)&&Go(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ns(),jt(kn),jt(xn),mu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return fu(r),null;case 13:if(jt($t),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ps()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return jt($t),null;case 4:return Ns(),null;case 10:return lu(r.type._context),null;case 22:case 23:return Yu(),null;case 24:return null;default:return null}}var cl=!1,En=!1,Tv=typeof WeakSet=="function"?WeakSet:Set,He=null;function ks(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Zt(n,r,u)}else o.current=null}function Uu(n,r,o){try{o()}catch(u){Zt(n,r,u)}}var rm=!1;function bv(n,r){if(Yc=Ro,n=kf(),Bc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{o.nodeType,v.nodeType}catch{o=null;break e}var w=0,N=-1,V=-1,te=0,Me=0,we=n,xe=null;t:for(;;){for(var Ve;we!==o||p!==0&&we.nodeType!==3||(N=w+p),we!==v||u!==0&&we.nodeType!==3||(V=w+u),we.nodeType===3&&(w+=we.nodeValue.length),(Ve=we.firstChild)!==null;)xe=we,we=Ve;for(;;){if(we===n)break t;if(xe===o&&++te===p&&(N=w),xe===v&&++Me===u&&(V=w),(Ve=we.nextSibling)!==null)break;we=xe,xe=we.parentNode}we=Ve}o=N===-1||V===-1?null:{start:N,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(qc={focusedElem:n,selectionRange:o},Ro=!1,He=r;He!==null;)if(r=He,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,He=n;else for(;He!==null;){r=He;try{var Xe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ye=Xe.memoizedProps,en=Xe.memoizedState,Z=r.stateNode,X=Z.getSnapshotBeforeUpdate(r.elementType===r.type?Ye:pi(r.type,Ye),en);Z.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var Q=r.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Zt(r,r.return,Re)}if(n=r.sibling,n!==null){n.return=r.return,He=n;break}He=r.return}return Xe=rm,rm=!1,Xe}function ja(n,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Uu(r,o,v)}p=p.next}while(p!==u)}}function ul(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function ku(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function sm(n){var r=n.alternate;r!==null&&(n.alternate=null,sm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ci],delete r[Ua],delete r[Jc],delete r[lv],delete r[cv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function am(n){return n.tag===5||n.tag===3||n.tag===4}function om(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||am(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fu(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Vo));else if(u!==4&&(n=n.child,n!==null))for(Fu(n,r,o),n=n.sibling;n!==null;)Fu(n,r,o),n=n.sibling}function Ou(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Ou(n,r,o),n=n.sibling;n!==null;)Ou(n,r,o),n=n.sibling}var pn=null,mi=!1;function vr(n,r,o){for(o=o.child;o!==null;)lm(n,r,o),o=o.sibling}function lm(n,r,o){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 5:En||ks(o,r);case 6:var u=pn,p=mi;pn=null,vr(n,r,o),pn=u,mi=p,pn!==null&&(mi?(n=pn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):pn.removeChild(o.stateNode));break;case 18:pn!==null&&(mi?(n=pn,o=o.stateNode,n.nodeType===8?Zc(n.parentNode,o):n.nodeType===1&&Zc(n,o),wa(n)):Zc(pn,o.stateNode));break;case 4:u=pn,p=mi,pn=o.stateNode.containerInfo,mi=!0,vr(n,r,o),pn=u,mi=p;break;case 0:case 11:case 14:case 15:if(!En&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,w=v.destroy;v=v.tag,w!==void 0&&((v&2)!==0||(v&4)!==0)&&Uu(o,r,w),p=p.next}while(p!==u)}vr(n,r,o);break;case 1:if(!En&&(ks(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(N){Zt(o,r,N)}vr(n,r,o);break;case 21:vr(n,r,o);break;case 22:o.mode&1?(En=(u=En)||o.memoizedState!==null,vr(n,r,o),En=u):vr(n,r,o);break;default:vr(n,r,o)}}function cm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Tv),r.forEach(function(u){var p=Uv.bind(null,n,u);o.has(u)||(o.add(u),u.then(p,p))})}}function gi(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u];try{var v=n,w=r,N=w;e:for(;N!==null;){switch(N.tag){case 5:pn=N.stateNode,mi=!1;break e;case 3:pn=N.stateNode.containerInfo,mi=!0;break e;case 4:pn=N.stateNode.containerInfo,mi=!0;break e}N=N.return}if(pn===null)throw Error(t(160));lm(v,w,p),pn=null,mi=!1;var V=p.alternate;V!==null&&(V.return=null),p.return=null}catch(te){Zt(p,r,te)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)um(r,n),r=r.sibling}function um(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(gi(r,n),Li(n),u&4){try{ja(3,n,n.return),ul(3,n)}catch(Ye){Zt(n,n.return,Ye)}try{ja(5,n,n.return)}catch(Ye){Zt(n,n.return,Ye)}}break;case 1:gi(r,n),Li(n),u&512&&o!==null&&ks(o,o.return);break;case 5:if(gi(r,n),Li(n),u&512&&o!==null&&ks(o,o.return),n.flags&32){var p=n.stateNode;try{Pe(p,"")}catch(Ye){Zt(n,n.return,Ye)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,w=o!==null?o.memoizedProps:v,N=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{N==="input"&&v.type==="radio"&&v.name!=null&&me(p,v),Ne(N,w);var te=Ne(N,v);for(w=0;w<V.length;w+=2){var Me=V[w],we=V[w+1];Me==="style"?Fe(p,we):Me==="dangerouslySetInnerHTML"?Ke(p,we):Me==="children"?Pe(p,we):P(p,Me,we,te)}switch(N){case"input":ve(p,v);break;case"textarea":T(p,v);break;case"select":var xe=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Ve=v.value;Ve!=null?Gt(p,!!v.multiple,Ve,!1):xe!==!!v.multiple&&(v.defaultValue!=null?Gt(p,!!v.multiple,v.defaultValue,!0):Gt(p,!!v.multiple,v.multiple?[]:"",!1))}p[Ua]=v}catch(Ye){Zt(n,n.return,Ye)}}break;case 6:if(gi(r,n),Li(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Ye){Zt(n,n.return,Ye)}}break;case 3:if(gi(r,n),Li(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{wa(r.containerInfo)}catch(Ye){Zt(n,n.return,Ye)}break;case 4:gi(r,n),Li(n);break;case 13:gi(r,n),Li(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Vu=j())),u&4&&cm(n);break;case 22:if(Me=o!==null&&o.memoizedState!==null,n.mode&1?(En=(te=En)||Me,gi(r,n),En=te):gi(r,n),Li(n),u&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!Me&&(n.mode&1)!==0)for(He=n,Me=n.child;Me!==null;){for(we=He=Me;He!==null;){switch(xe=He,Ve=xe.child,xe.tag){case 0:case 11:case 14:case 15:ja(4,xe,xe.return);break;case 1:ks(xe,xe.return);var Xe=xe.stateNode;if(typeof Xe.componentWillUnmount=="function"){u=xe,o=xe.return;try{r=u,Xe.props=r.memoizedProps,Xe.state=r.memoizedState,Xe.componentWillUnmount()}catch(Ye){Zt(u,o,Ye)}}break;case 5:ks(xe,xe.return);break;case 22:if(xe.memoizedState!==null){fm(we);continue}}Ve!==null?(Ve.return=xe,He=Ve):fm(we)}Me=Me.sibling}e:for(Me=null,we=n;;){if(we.tag===5){if(Me===null){Me=we;try{p=we.stateNode,te?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(N=we.stateNode,V=we.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null,N.style.display=Ce("display",w))}catch(Ye){Zt(n,n.return,Ye)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=te?"":we.memoizedProps}catch(Ye){Zt(n,n.return,Ye)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:gi(r,n),Li(n),u&4&&cm(n);break;case 21:break;default:gi(r,n),Li(n)}}function Li(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(am(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Pe(p,""),u.flags&=-33);var v=om(n);Ou(n,v,p);break;case 3:case 4:var w=u.stateNode.containerInfo,N=om(n);Fu(n,N,w);break;default:throw Error(t(161))}}catch(V){Zt(n,n.return,V)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Av(n,r,o){He=n,hm(n)}function hm(n,r,o){for(var u=(n.mode&1)!==0;He!==null;){var p=He,v=p.child;if(p.tag===22&&u){var w=p.memoizedState!==null||cl;if(!w){var N=p.alternate,V=N!==null&&N.memoizedState!==null||En;N=cl;var te=En;if(cl=w,(En=V)&&!te)for(He=p;He!==null;)w=He,V=w.child,w.tag===22&&w.memoizedState!==null?pm(p):V!==null?(V.return=w,He=V):pm(p);for(;v!==null;)He=v,hm(v),v=v.sibling;He=p,cl=N,En=te}dm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,He=v):dm(n)}}function dm(n){for(;He!==null;){var r=He;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:En||ul(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!En)if(o===null)u.componentDidMount();else{var p=r.elementType===r.type?o.memoizedProps:pi(r.type,o.memoizedProps);u.componentDidUpdate(p,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&fp(r,v,u);break;case 3:var w=r.updateQueue;if(w!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}fp(r,w,o)}break;case 5:var N=r.stateNode;if(o===null&&r.flags&4){o=N;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var te=r.alternate;if(te!==null){var Me=te.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&wa(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||r.flags&512&&ku(r)}catch(xe){Zt(r,r.return,xe)}}if(r===n){He=null;break}if(o=r.sibling,o!==null){o.return=r.return,He=o;break}He=r.return}}function fm(n){for(;He!==null;){var r=He;if(r===n){He=null;break}var o=r.sibling;if(o!==null){o.return=r.return,He=o;break}He=r.return}}function pm(n){for(;He!==null;){var r=He;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{ul(4,r)}catch(V){Zt(r,o,V)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(V){Zt(r,p,V)}}var v=r.return;try{ku(r)}catch(V){Zt(r,v,V)}break;case 5:var w=r.return;try{ku(r)}catch(V){Zt(r,w,V)}}}catch(V){Zt(r,r.return,V)}if(r===n){He=null;break}var N=r.sibling;if(N!==null){N.return=r.return,He=N;break}He=r.return}}var Cv=Math.ceil,hl=A.ReactCurrentDispatcher,Bu=A.ReactCurrentOwner,si=A.ReactCurrentBatchConfig,bt=0,hn=null,tn=null,mn=0,Kn=0,Fs=fr(0),an=0,Ya=null,$r=0,dl=0,zu=0,qa=null,Bn=null,Vu=0,Os=1/0,qi=null,fl=!1,Hu=null,yr=null,pl=!1,xr=null,ml=0,$a=0,Gu=null,gl=-1,_l=0;function Pn(){return(bt&6)!==0?j():gl!==-1?gl:gl=j()}function Sr(n){return(n.mode&1)===0?1:(bt&2)!==0&&mn!==0?mn&-mn:hv.transition!==null?(_l===0&&(_l=Cn()),_l):(n=St,n!==0||(n=window.event,n=n===void 0?16:gf(n.type)),n)}function _i(n,r,o,u){if(50<$a)throw $a=0,Gu=null,Error(t(185));Qt(n,o,u),((bt&2)===0||n!==hn)&&(n===hn&&((bt&2)===0&&(dl|=o),an===4&&Mr(n,mn)),zn(n,u),o===1&&bt===0&&(r.mode&1)===0&&(Os=j()+500,Xo&&mr()))}function zn(n,r){var o=n.callbackNode;zr(n,r);var u=hi(n,n===hn?mn:0);if(u===0)o!==null&&q(o),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(o!=null&&q(o),r===1)n.tag===0?uv(gm.bind(null,n)):tp(gm.bind(null,n)),av(function(){(bt&6)===0&&mr()}),o=null;else{switch(lf(u)){case 1:o=Ue;break;case 4:o=We;break;case 16:o=ze;break;case 536870912:o=ot;break;default:o=ze}o=wm(o,mm.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function mm(n,r){if(gl=-1,_l=0,(bt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Bs()&&n.callbackNode!==o)return null;var u=hi(n,n===hn?mn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=vl(n,u);else{r=u;var p=bt;bt|=2;var v=vm();(hn!==n||mn!==r)&&(qi=null,Os=j()+500,Zr(n,r));do try{Lv();break}catch(N){_m(n,N)}while(!0);ou(),hl.current=v,bt=p,tn!==null?r=0:(hn=null,mn=0,r=an)}if(r!==0){if(r===2&&(p=Vt(n),p!==0&&(u=p,r=Wu(n,p))),r===1)throw o=Ya,Zr(n,0),Mr(n,u),zn(n,j()),o;if(r===6)Mr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!Rv(p)&&(r=vl(n,u),r===2&&(v=Vt(n),v!==0&&(u=v,r=Wu(n,v))),r===1))throw o=Ya,Zr(n,0),Mr(n,u),zn(n,j()),o;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Jr(n,Bn,qi);break;case 3:if(Mr(n,u),(u&130023424)===u&&(r=Vu+500-j(),10<r)){if(hi(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Pn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Kc(Jr.bind(null,n,Bn,qi),r);break}Jr(n,Bn,qi);break;case 4:if(Mr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var w=31-Tt(u);v=1<<w,w=r[w],w>p&&(p=w),u&=~v}if(u=p,u=j()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Cv(u/1960))-u,10<u){n.timeoutHandle=Kc(Jr.bind(null,n,Bn,qi),u);break}Jr(n,Bn,qi);break;case 5:Jr(n,Bn,qi);break;default:throw Error(t(329))}}}return zn(n,j()),n.callbackNode===o?mm.bind(null,n):null}function Wu(n,r){var o=qa;return n.current.memoizedState.isDehydrated&&(Zr(n,r).flags|=256),n=vl(n,r),n!==2&&(r=Bn,Bn=o,r!==null&&Xu(r)),n}function Xu(n){Bn===null?Bn=n:Bn.push.apply(Bn,n)}function Rv(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var p=o[u],v=p.getSnapshot;p=p.value;try{if(!di(v(),p))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Mr(n,r){for(r&=~zu,r&=~dl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-Tt(r),u=1<<o;n[o]=-1,r&=~u}}function gm(n){if((bt&6)!==0)throw Error(t(327));Bs();var r=hi(n,0);if((r&1)===0)return zn(n,j()),null;var o=vl(n,r);if(n.tag!==0&&o===2){var u=Vt(n);u!==0&&(r=u,o=Wu(n,u))}if(o===1)throw o=Ya,Zr(n,0),Mr(n,r),zn(n,j()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Jr(n,Bn,qi),zn(n,j()),null}function ju(n,r){var o=bt;bt|=1;try{return n(r)}finally{bt=o,bt===0&&(Os=j()+500,Xo&&mr())}}function Kr(n){xr!==null&&xr.tag===0&&(bt&6)===0&&Bs();var r=bt;bt|=1;var o=si.transition,u=St;try{if(si.transition=null,St=1,n)return n()}finally{St=u,si.transition=o,bt=r,(bt&6)===0&&mr()}}function Yu(){Kn=Fs.current,jt(Fs)}function Zr(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,sv(o)),tn!==null)for(o=tn.return;o!==null;){var u=o;switch(nu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Go();break;case 3:Ns(),jt(kn),jt(xn),mu();break;case 5:fu(u);break;case 4:Ns();break;case 13:jt($t);break;case 19:jt($t);break;case 10:lu(u.type._context);break;case 22:case 23:Yu()}o=o.return}if(hn=n,tn=n=Er(n.current,null),mn=Kn=r,an=0,Ya=null,zu=dl=$r=0,Bn=qa=null,jr!==null){for(r=0;r<jr.length;r++)if(o=jr[r],u=o.interleaved,u!==null){o.interleaved=null;var p=u.next,v=o.pending;if(v!==null){var w=v.next;v.next=p,u.next=w}o.pending=u}jr=null}return n}function _m(n,r){do{var o=tn;try{if(ou(),tl.current=sl,nl){for(var u=Kt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}nl=!1}if(qr=0,un=sn=Kt=null,Va=!1,Ha=0,Bu.current=null,o===null||o.return===null){an=1,Ya=r,tn=null;break}e:{var v=n,w=o.return,N=o,V=r;if(r=mn,N.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var te=V,Me=N,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var xe=Me.alternate;xe?(Me.updateQueue=xe.updateQueue,Me.memoizedState=xe.memoizedState,Me.lanes=xe.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Ve=Hp(w);if(Ve!==null){Ve.flags&=-257,Gp(Ve,w,N,v,r),Ve.mode&1&&Vp(v,te,r),r=Ve,V=te;var Xe=r.updateQueue;if(Xe===null){var Ye=new Set;Ye.add(V),r.updateQueue=Ye}else Xe.add(V);break e}else{if((r&1)===0){Vp(v,te,r),qu();break e}V=Error(t(426))}}else if(qt&&N.mode&1){var en=Hp(w);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),Gp(en,w,N,v,r),su(Us(V,N));break e}}v=V=Us(V,N),an!==4&&(an=2),qa===null?qa=[v]:qa.push(v),v=w;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var Z=Bp(v,V,r);dp(v,Z);break e;case 1:N=V;var X=v.type,Q=v.stateNode;if((v.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(yr===null||!yr.has(Q)))){v.flags|=65536,r&=-r,v.lanes|=r;var Re=zp(v,N,r);dp(v,Re);break e}}v=v.return}while(v!==null)}xm(o)}catch($e){r=$e,tn===o&&o!==null&&(tn=o=o.return);continue}break}while(!0)}function vm(){var n=hl.current;return hl.current=sl,n===null?sl:n}function qu(){(an===0||an===3||an===2)&&(an=4),hn===null||($r&268435455)===0&&(dl&268435455)===0||Mr(hn,mn)}function vl(n,r){var o=bt;bt|=2;var u=vm();(hn!==n||mn!==r)&&(qi=null,Zr(n,r));do try{Pv();break}catch(p){_m(n,p)}while(!0);if(ou(),bt=o,hl.current=u,tn!==null)throw Error(t(261));return hn=null,mn=0,an}function Pv(){for(;tn!==null;)ym(tn)}function Lv(){for(;tn!==null&&!ne();)ym(tn)}function ym(n){var r=Em(n.alternate,n,Kn);n.memoizedProps=n.pendingProps,r===null?xm(n):tn=r,Bu.current=null}function xm(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=Ev(o,r,Kn),o!==null){tn=o;return}}else{if(o=wv(o,r),o!==null){o.flags&=32767,tn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,tn=null;return}}if(r=r.sibling,r!==null){tn=r;return}tn=r=n}while(r!==null);an===0&&(an=5)}function Jr(n,r,o){var u=St,p=si.transition;try{si.transition=null,St=1,Dv(n,r,o,u)}finally{si.transition=p,St=u}return null}function Dv(n,r,o,u){do Bs();while(xr!==null);if((bt&6)!==0)throw Error(t(327));o=n.finishedWork;var p=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=o.lanes|o.childLanes;if(yn(n,v),n===hn&&(tn=hn=null,mn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||pl||(pl=!0,wm(ze,function(){return Bs(),null})),v=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||v){v=si.transition,si.transition=null;var w=St;St=1;var N=bt;bt|=4,Bu.current=null,bv(n,o),um(o,n),J0(qc),Ro=!!Yc,qc=Yc=null,n.current=o,Av(o),ie(),bt=N,St=w,si.transition=v}else n.current=o;if(pl&&(pl=!1,xr=n,ml=p),v=n.pendingLanes,v===0&&(yr=null),Lt(o.stateNode),zn(n,j()),r!==null)for(u=n.onRecoverableError,o=0;o<r.length;o++)p=r[o],u(p.value,{componentStack:p.stack,digest:p.digest});if(fl)throw fl=!1,n=Hu,Hu=null,n;return(ml&1)!==0&&n.tag!==0&&Bs(),v=n.pendingLanes,(v&1)!==0?n===Gu?$a++:($a=0,Gu=n):$a=0,mr(),null}function Bs(){if(xr!==null){var n=lf(ml),r=si.transition,o=St;try{if(si.transition=null,St=16>n?16:n,xr===null)var u=!1;else{if(n=xr,xr=null,ml=0,(bt&6)!==0)throw Error(t(331));var p=bt;for(bt|=4,He=n.current;He!==null;){var v=He,w=v.child;if((He.flags&16)!==0){var N=v.deletions;if(N!==null){for(var V=0;V<N.length;V++){var te=N[V];for(He=te;He!==null;){var Me=He;switch(Me.tag){case 0:case 11:case 15:ja(8,Me,v)}var we=Me.child;if(we!==null)we.return=Me,He=we;else for(;He!==null;){Me=He;var xe=Me.sibling,Ve=Me.return;if(sm(Me),Me===te){He=null;break}if(xe!==null){xe.return=Ve,He=xe;break}He=Ve}}}var Xe=v.alternate;if(Xe!==null){var Ye=Xe.child;if(Ye!==null){Xe.child=null;do{var en=Ye.sibling;Ye.sibling=null,Ye=en}while(Ye!==null)}}He=v}}if((v.subtreeFlags&2064)!==0&&w!==null)w.return=v,He=w;else e:for(;He!==null;){if(v=He,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:ja(9,v,v.return)}var Z=v.sibling;if(Z!==null){Z.return=v.return,He=Z;break e}He=v.return}}var X=n.current;for(He=X;He!==null;){w=He;var Q=w.child;if((w.subtreeFlags&2064)!==0&&Q!==null)Q.return=w,He=Q;else e:for(w=X;He!==null;){if(N=He,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:ul(9,N)}}catch($e){Zt(N,N.return,$e)}if(N===w){He=null;break e}var Re=N.sibling;if(Re!==null){Re.return=N.return,He=Re;break e}He=N.return}}if(bt=p,mr(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Je,n)}catch{}u=!0}return u}finally{St=o,si.transition=r}}return!1}function Sm(n,r,o){r=Us(o,r),r=Bp(n,r,1),n=_r(n,r,1),r=Pn(),n!==null&&(Qt(n,1,r),zn(n,r))}function Zt(n,r,o){if(n.tag===3)Sm(n,n,o);else for(;r!==null;){if(r.tag===3){Sm(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(yr===null||!yr.has(u))){n=Us(o,n),n=zp(r,n,1),r=_r(r,n,1),n=Pn(),r!==null&&(Qt(r,1,n),zn(r,n));break}}r=r.return}}function Iv(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),r=Pn(),n.pingedLanes|=n.suspendedLanes&o,hn===n&&(mn&o)===o&&(an===4||an===3&&(mn&130023424)===mn&&500>j()-Vu?Zr(n,0):zu|=o),zn(n,r)}function Mm(n,r){r===0&&((n.mode&1)===0?r=1:(r=xt,xt<<=1,(xt&130023424)===0&&(xt=4194304)));var o=Pn();n=Xi(n,r),n!==null&&(Qt(n,r,o),zn(n,o))}function Nv(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Mm(n,o)}function Uv(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Mm(n,o)}var Em;Em=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||kn.current)On=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return On=!1,Mv(n,r,o);On=(n.flags&131072)!==0}else On=!1,qt&&(r.flags&1048576)!==0&&np(r,Yo,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;ll(n,r),n=r.pendingProps;var p=As(r,xn.current);Is(r,o),p=vu(null,r,u,n,p,o);var v=yu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Fn(u)?(v=!0,Wo(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,hu(r),p.updater=al,r.stateNode=p,p._reactInternals=r,Tu(r,u,n,o),r=Ru(null,r,u,!0,v,o)):(r.tag=0,qt&&v&&tu(r),Rn(null,r,p,o),r=r.child),r;case 16:u=r.elementType;e:{switch(ll(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=Fv(u),n=pi(u,n),p){case 0:r=Cu(null,r,u,n,o);break e;case 1:r=$p(null,r,u,n,o);break e;case 11:r=Wp(null,r,u,n,o);break e;case 14:r=Xp(null,r,u,pi(u.type,n),o);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:pi(u,p),Cu(n,r,u,p,o);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:pi(u,p),$p(n,r,u,p,o);case 3:e:{if(Kp(r),n===null)throw Error(t(387));u=r.pendingProps,v=r.memoizedState,p=v.element,hp(n,r),Qo(r,u,null,o);var w=r.memoizedState;if(u=w.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=Us(Error(t(423)),r),r=Zp(n,r,u,o,p);break e}else if(u!==p){p=Us(Error(t(424)),r),r=Zp(n,r,u,o,p);break e}else for($n=dr(r.stateNode.containerInfo.firstChild),qn=r,qt=!0,fi=null,o=cp(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ps(),u===p){r=Yi(n,r,o);break e}Rn(n,r,u,o)}r=r.child}return r;case 5:return pp(r),n===null&&ru(r),u=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,w=p.children,$c(u,p)?w=null:v!==null&&$c(u,v)&&(r.flags|=32),qp(n,r),Rn(n,r,w,o),r.child;case 6:return n===null&&ru(r),null;case 13:return Jp(n,r,o);case 4:return du(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Ls(r,null,u,o):Rn(n,r,u,o),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:pi(u,p),Wp(n,r,u,p,o);case 7:return Rn(n,r,r.pendingProps,o),r.child;case 8:return Rn(n,r,r.pendingProps.children,o),r.child;case 12:return Rn(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,v=r.memoizedProps,w=p.value,Ht(Ko,u._currentValue),u._currentValue=w,v!==null)if(di(v.value,w)){if(v.children===p.children&&!kn.current){r=Yi(n,r,o);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var N=v.dependencies;if(N!==null){w=v.child;for(var V=N.firstContext;V!==null;){if(V.context===u){if(v.tag===1){V=ji(-1,o&-o),V.tag=2;var te=v.updateQueue;if(te!==null){te=te.shared;var Me=te.pending;Me===null?V.next=V:(V.next=Me.next,Me.next=V),te.pending=V}}v.lanes|=o,V=v.alternate,V!==null&&(V.lanes|=o),cu(v.return,o,r),N.lanes|=o;break}V=V.next}}else if(v.tag===10)w=v.type===r.type?null:v.child;else if(v.tag===18){if(w=v.return,w===null)throw Error(t(341));w.lanes|=o,N=w.alternate,N!==null&&(N.lanes|=o),cu(w,o,r),w=v.sibling}else w=v.child;if(w!==null)w.return=v;else for(w=v;w!==null;){if(w===r){w=null;break}if(v=w.sibling,v!==null){v.return=w.return,w=v;break}w=w.return}v=w}Rn(n,r,p.children,o),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,Is(r,o),p=ii(p),u=u(p),r.flags|=1,Rn(n,r,u,o),r.child;case 14:return u=r.type,p=pi(u,r.pendingProps),p=pi(u.type,p),Xp(n,r,u,p,o);case 15:return jp(n,r,r.type,r.pendingProps,o);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:pi(u,p),ll(n,r),r.tag=1,Fn(u)?(n=!0,Wo(r)):n=!1,Is(r,o),Fp(r,u,p),Tu(r,u,p,o),Ru(null,r,u,!0,n,o);case 19:return em(n,r,o);case 22:return Yp(n,r,o)}throw Error(t(156,r.tag))};function wm(n,r){return b(n,r)}function kv(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,r,o,u){return new kv(n,r,o,u)}function $u(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Fv(n){if(typeof n=="function")return $u(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===he)return 14}return 2}function Er(n,r){var o=n.alternate;return o===null?(o=ai(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function yl(n,r,o,u,p,v){var w=2;if(u=n,typeof n=="function")$u(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case B:return Qr(o.children,p,v,r);case $:w=8,p|=8;break;case R:return n=ai(12,o,r,p|2),n.elementType=R,n.lanes=v,n;case re:return n=ai(13,o,r,p),n.elementType=re,n.lanes=v,n;case ce:return n=ai(19,o,r,p),n.elementType=ce,n.lanes=v,n;case fe:return xl(o,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:w=10;break e;case G:w=9;break e;case ee:w=11;break e;case he:w=14;break e;case oe:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ai(w,o,r,p),r.elementType=n,r.type=u,r.lanes=v,r}function Qr(n,r,o,u){return n=ai(7,n,u,r),n.lanes=o,n}function xl(n,r,o,u){return n=ai(22,n,u,r),n.elementType=fe,n.lanes=o,n.stateNode={isHidden:!1},n}function Ku(n,r,o){return n=ai(6,n,null,r),n.lanes=o,n}function Zu(n,r,o){return r=ai(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Ov(n,r,o,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vn(0),this.expirationTimes=vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Ju(n,r,o,u,p,v,w,N,V){return n=new Ov(n,r,o,N,V),r===1?(r=1,v===!0&&(r|=8)):r=0,v=ai(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(v),n}function Bv(n,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:r,implementation:o}}function Tm(n){if(!n)return pr;n=n._reactInternals;e:{if(zi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Fn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Fn(o))return Qf(n,o,r)}return r}function bm(n,r,o,u,p,v,w,N,V){return n=Ju(o,u,!0,n,p,v,w,N,V),n.context=Tm(null),o=n.current,u=Pn(),p=Sr(o),v=ji(u,p),v.callback=r??null,_r(o,v,p),n.current.lanes=p,Qt(n,p,u),zn(n,u),n}function Sl(n,r,o,u){var p=r.current,v=Pn(),w=Sr(p);return o=Tm(o),r.context===null?r.context=o:r.pendingContext=o,r=ji(v,w),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=_r(p,r,w),n!==null&&(_i(n,p,w,v),Jo(n,p,w)),w}function Ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Am(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Qu(n,r){Am(n,r),(n=n.alternate)&&Am(n,r)}function zv(){return null}var Cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function eh(n){this._internalRoot=n}El.prototype.render=eh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Sl(n,r,null,null)},El.prototype.unmount=eh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Kr(function(){Sl(null,n,null,null)}),r[Vi]=null}};function El(n){this._internalRoot=n}El.prototype.unstable_scheduleHydration=function(n){if(n){var r=hf();n={blockedOn:null,target:n,priority:r};for(var o=0;o<cr.length&&r!==0&&r<cr[o].priority;o++);cr.splice(o,0,n),o===0&&pf(n)}};function th(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function wl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Rm(){}function Vv(n,r,o,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var te=Ml(w);v.call(te)}}var w=bm(r,u,n,0,null,!1,!1,"",Rm);return n._reactRootContainer=w,n[Vi]=w.current,Ia(n.nodeType===8?n.parentNode:n),Kr(),w}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var N=u;u=function(){var te=Ml(V);N.call(te)}}var V=Ju(n,0,!1,null,null,!1,!1,"",Rm);return n._reactRootContainer=V,n[Vi]=V.current,Ia(n.nodeType===8?n.parentNode:n),Kr(function(){Sl(r,V,o,u)}),V}function Tl(n,r,o,u,p){var v=o._reactRootContainer;if(v){var w=v;if(typeof p=="function"){var N=p;p=function(){var V=Ml(w);N.call(V)}}Sl(r,w,n,p)}else w=Vv(o,r,n,p,u);return Ml(w)}cf=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=rn(r.pendingLanes);o!==0&&(Vr(r,o|1),zn(r,j()),(bt&6)===0&&(Os=j()+500,mr()))}break;case 13:Kr(function(){var u=Xi(n,1);if(u!==null){var p=Pn();_i(u,n,1,p)}}),Qu(n,1)}},bc=function(n){if(n.tag===13){var r=Xi(n,134217728);if(r!==null){var o=Pn();_i(r,n,134217728,o)}Qu(n,134217728)}},uf=function(n){if(n.tag===13){var r=Sr(n),o=Xi(n,r);if(o!==null){var u=Pn();_i(o,n,r,u)}Qu(n,r)}},hf=function(){return St},df=function(n,r){var o=St;try{return St=n,r()}finally{St=o}},be=function(n,r,o){switch(r){case"input":if(ve(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var p=Ho(u);if(!p)throw Error(t(90));Ut(u),ve(u,p)}}}break;case"textarea":T(n,o);break;case"select":r=o.value,r!=null&&Gt(n,!!o.multiple,r,!1)}},dt=ju,Dt=Kr;var Hv={usingClientEntryPoint:!1,Events:[ka,Ts,Ho,ge,je,ju]},Ka={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gv={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=To(n),n===null?null:n.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||zv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{Je=bl.inject(Gv),ct=bl}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hv,Vn.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!th(r))throw Error(t(200));return Bv(n,r,null,o)},Vn.createRoot=function(n,r){if(!th(n))throw Error(t(299));var o=!1,u="",p=Cm;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Ju(n,1,!1,null,null,o,!1,u,p),n[Vi]=r.current,Ia(n.nodeType===8?n.parentNode:n),new eh(r)},Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=To(r),n=n===null?null:n.stateNode,n},Vn.flushSync=function(n){return Kr(n)},Vn.hydrate=function(n,r,o){if(!wl(r))throw Error(t(200));return Tl(null,n,r,!0,o)},Vn.hydrateRoot=function(n,r,o){if(!th(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,p=!1,v="",w=Cm;if(o!=null&&(o.unstable_strictMode===!0&&(p=!0),o.identifierPrefix!==void 0&&(v=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),r=bm(r,null,n,1,o??null,p,!1,v,w),n[Vi]=r.current,Ia(n),u)for(n=0;n<u.length;n++)o=u[n],p=o._getVersion,p=p(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,p]:r.mutableSourceEagerHydrationData.push(o,p);return new El(r)},Vn.render=function(n,r,o){if(!wl(r))throw Error(t(200));return Tl(null,n,r,!1,o)},Vn.unmountComponentAtNode=function(n){if(!wl(n))throw Error(t(40));return n._reactRootContainer?(Kr(function(){Tl(null,null,n,!1,function(){n._reactRootContainer=null,n[Vi]=null})}),!0):!1},Vn.unstable_batchedUpdates=ju,Vn.unstable_renderSubtreeIntoContainer=function(n,r,o,u){if(!wl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Tl(n,r,o,!1,u)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var Um;function Kv(){if(Um)return ih.exports;Um=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ih.exports=$v(),ih.exports}var km;function Zv(){if(km)return Al;km=1;var s=Kv();return Al.createRoot=s.createRoot,Al.hydrateRoot=s.hydrateRoot,Al}var Jv=Zv();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y_=(...s)=>s.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ey={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=et.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:a="",children:l,iconNode:c,...h},f)=>et.createElement("svg",{ref:f,...ey,width:e,height:e,stroke:s,strokeWidth:i?Number(t)*24/Number(e):t,className:y_("lucide",a),...h},[...c.map(([d,g])=>et.createElement(d,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=(s,e)=>{const t=et.forwardRef(({className:i,...a},l)=>et.createElement(ty,{ref:l,iconNode:e,className:y_(`lucide-${Qv(s)}`,i),...a}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=At("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=At("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=At("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=At("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=At("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=At("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=At("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=At("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=At("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=At("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=At("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=At("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=At("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=At("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=At("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=At("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=At("Pipette",[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=At("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=At("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=At("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=At("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=At("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=At("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=At("Spline",[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=At("SprayCan",[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=At("Stamp",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=At("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=At("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=At("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=At("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=At("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=At("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=At("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),E_={skinMode:"natural",skinTone:50,skinHue:0,eyeTone:75,baseBrows:!0},ao=[[0,[246,238,235]],[15,[244,216,200]],[30,[230,184,148]],[50,[216,153,112]],[65,[171,110,74]],[80,[115,70,46]],[100,[63,36,25]]];function Ty(s){const e=ao.findIndex(([h])=>h>=s);if(e<=0)return ao[0][1];const[t,i]=ao[e-1],[a,l]=ao[e],c=(s-t)/(a-t);return i.map((h,f)=>h+(l[f]-h)*c)}const oo=[[0,[54,36,26]],[20,[103,66,39]],[40,[132,116,67]],[60,[88,115,88]],[75,[60,128,167]],[100,[122,130,137]]];function by(s){const e=oo.findIndex(([h])=>h>=s);if(e<=0)return oo[0][1];const[t,i]=oo[e-1],[a,l]=oo[e],c=(s-t)/(a-t);return i.map((h,f)=>h+(l[f]-h)*c)}function Ay(s){if(Number.isFinite(s==null?void 0:s.eyeTone))return Math.max(0,Math.min(100,s.eyeTone));if(!(s!=null&&s.eyeHue))return 75;const e=new Uint8ClampedArray([60,128,167]);return w_(e,0,s.eyeHue),oo.reduce((t,i)=>i[1].reduce((a,l,c)=>a+(l-e[c])**2,0)<t.distance?{value:i[0],distance:i[1].reduce((a,l,c)=>a+(l-e[c])**2,0)}:t,{value:75,distance:1/0}).value}function w_(s,e,t){const i=s[e]/255,a=s[e+1]/255,l=s[e+2]/255,c=Math.max(i,a,l),h=Math.min(i,a,l),f=c-h;if(f<1e-5||!t)return;let d=c===i?(a-l)/f:c===a?(l-i)/f+2:(i-a)/f+4;d=((d+t/60)%6+6)%6;const g=f*(1-Math.abs(d%2-1)),m=h,_=d<1?[f,g,0]:d<2?[g,f,0]:d<3?[0,f,g]:d<4?[0,g,f]:d<5?[g,0,f]:[f,0,g];for(let x=0;x<3;x++)s[e+x]=(_[x]+m)*255}function Cy(s,e){const{data:t,width:i,height:a}=s,l=e.eyeTone??75,c=by(l),h=e.skinMode!=="occult",f=Ty(e.skinTone??50),d=ao[3][1];for(let g=0;g<a;g++)for(let m=0;m<i;m++){const _=(g*i+m)*4;if(!t[_+3])continue;const x=m/i*1024,M=g/a*2048,E=x<110&&M>=500&&M<625,S=x>815&&M>=500&&M<700;if(E){if(l!==75&&Math.hypot(x-51,M-565)<21&&t[_+2]-t[_]>12){const y=(.2126*t[_]+.7152*t[_+1]+.0722*t[_+2])/116.36,L=Math.min(1,(t[_+2]-t[_]-12)/20);for(let P=0;P<3;P++)t[_+P]=t[_+P]*(1-L)+Math.min(255,c[P]*y)*L}continue}if(!S&&t[_]>t[_+1]&&t[_+1]>t[_+2])if(h)for(let y=0;y<3;y++){const L=t[_+y],P=d[y];t[_+y]=f[y]>P&&L>P?f[y]+(L-P)*(255-f[y])/(255-P):L*f[y]/P}else w_(t,_,e.skinHue)}return s}const Cl=[[386,732],[400,715],[423,699],[444,700],[491,711],[492,734],[476,734],[441,722],[417,722],[395,733]];function Ry(s,e){let t=!1,i=1/0;for(let c=0,h=Cl.length-1;c<Cl.length;h=c++){const f=Cl[h],d=Cl[c],g=d[0]-f[0],m=d[1]-f[1];f[1]>e!=d[1]>e&&s<(d[0]-f[0])*(e-f[1])/(d[1]-f[1])+f[0]&&(t=!t);const _=Math.max(0,Math.min(1,((s-f[0])*g+(e-f[1])*m)/(g*g+m*m)));i=Math.min(i,Math.hypot(s-f[0]-_*g,e-f[1]-_*m))}const a=Math.max(0,Math.min(1,((t?i:-i)+10)/10)),l=Math.max(0,Math.min(1,(742-e)/7));return a*a*(3-2*a)*l*l*(3-2*l)}function Py(s){const{data:e,width:t,height:i}=s,a=new Uint8ClampedArray(e),l=(c,h,f)=>a[(Math.min(i-1,Math.max(0,Math.round(h/2048*i)))*t+Math.min(t-1,Math.max(0,Math.round(c/1024*t))))*4+f];for(let c=Math.floor(688/2048*i);c<Math.ceil(742/2048*i);c++)for(let h=Math.floor(374/1024*t);h<Math.ceil(650/1024*t);h++){const f=h/t*1024,d=c/i*2048,g=f>512?1024-f:f,m=Ry(g,d),_=(c*t+h)*4;if(!(!m||!a[_+3]))for(let x=0;x<3;x++){let M=0;for(let S=-3;S<=3;S++)M+=l(f+S,687+(d-700)*.12,x)/7;const E=M*(1-Math.max(0,d-700)*65e-5);e[_+x]=a[_+x]*(1-m)+E*m}}return s}const Bm={brows:{label:"Brows",size:.8,hairLength:14,hairSpacing:2.5,hairAngle:-65,hairCurve:35},lashes:{label:"Upper lashes",size:1.2,hairLength:19,hairSpacing:5,hairAngle:-85,hairCurve:65},lower:{label:"Bottom lashes",size:.65,hairLength:9,hairSpacing:4,hairAngle:80,hairCurve:40}};function Ly(s,e,t){if(s.length<2)return[];const i=[{...s[0],distance:0}];let a=0;for(let h=1;h<s.length;h++){const f=i.at(-1),d=s[h],g=Math.hypot(d.x-f.x,d.y-f.y);if(g<.05)continue;const m=Math.min(g,t-a),_=m/g;if(a+=m,i.push({x:f.x+(d.x-f.x)*_,y:f.y+(d.y-f.y)*_,distance:a}),a>=t)break}if(a<.25)return[];const l=[],c=[];for(let h=0;h<i.length;h++){const f=i[h],d=i[Math.max(0,h-1)],g=i[Math.min(i.length-1,h+1)],m=g.x-d.x,_=g.y-d.y,x=Math.hypot(m,_)||1,M=f.distance/a,E=e/2*(.65+.35*Math.min(1,M/.18))*Math.pow(1-M,.7);l.push({x:f.x-_/x*E,y:f.y+m/x*E}),c.push({x:f.x+_/x*E,y:f.y-m/x*E})}return[...l,...c.reverse()]}function Dy(s,e,t=!1){if(s.length<2)return[];const i=[];let a=0,l=0;for(let d=1;d<s.length;d++){const g=s[d-1],m=s[d],_=Math.hypot(m.x-g.x,m.y-g.y);if(!(_<1e-4)){for(;l<=a+_;){const x=(l-a)/_;i.push({x:g.x+(m.x-g.x)*x,y:g.y+(m.y-g.y)*x,tx:(m.x-g.x)/_,ty:(m.y-g.y)/_}),l+=Math.max(1,e.hairSpacing||3)}a+=_}}const c=[],h=e.hairStyle==="brows"?1:3,f=t?-1:1;for(const[d,g]of i.entries())for(let m=0;m<h;m++){const _=.82+.18*(.5+.5*Math.sin(d*2.4+m*1.7)),x=e.hairLength*_*(m===1?.8:1),M=((e.hairAngle??-65)+(m-(h-1)/2)*10)*Math.PI/180*f,E=g.tx*Math.cos(M)-g.ty*Math.sin(M),S=g.ty*Math.cos(M)+g.tx*Math.sin(M),y=(e.hairCurve??35)/100*x*.65,L={x:g.x+E*x*.48+g.tx*y,y:g.y+S*x*.48+g.ty*y},P={x:g.x+E*x,y:g.y+S*x},A=[];for(let z=0;z<=18;z++){const I=z/18,B=1-I;A.push({x:B*B*g.x+2*B*I*L.x+I*I*P.x,y:B*B*g.y+2*B*I*L.y+I*I*P.y})}c.push({path:A,width:e.size*(m===1?.55:1),alpha:m===1?.5:.78+.22*_})}return c}function T_(s,e,t,i,a){s.clearRect(0,0,i,a),s.save(),s.scale(i/1024,a/2048),s.fillStyle=t.color;for(const[l,c]of e.entries())for(const h of Dy(c,t,l===1)){const f=Ly(h.path,h.width,1/0);f.length&&(s.globalAlpha=h.alpha,s.beginPath(),f.forEach((d,g)=>g?s.lineTo(d.x,d.y):s.moveTo(d.x,d.y)),s.closePath(),s.fill())}s.restore()}const qh={hair:{label:"Hair stroke",size:.8,hairLength:14,hairSpacing:2.5,hairAngle:-65,hairCurve:35,hairStyle:"brows",opacity:100,softness:0,color:"#34251f"},stamp:{label:"Stamp"},brush:{label:"Brush",size:24,opacity:100,softness:.1},airbrush:{label:"Airbrush",size:60,opacity:35,softness:1},eraser:{label:"Eraser",size:40,opacity:100,softness:.4},eyedropper:{label:"Eyedropper"},blush:{label:"Blush",size:40,opacity:25,softness:1,color:"#d16a7a"},lips:{label:"Lip color",size:8,opacity:75,softness:.4,color:"#a84a60"},eyeshadow:{label:"Eyeshadow",size:20,opacity:40,softness:.9,color:"#876084"},freckles:{label:"Freckles",size:30,opacity:55,softness:.2,color:"#86513c"}};function Yt(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,t}function hc(s){return new Promise((e,t)=>{const i=new Image;i.onload=()=>e(i),i.onerror=()=>t(new Error("This image could not be read. Please use a PNG or JPEG.")),i.src=s})}function b_(s){return new Promise((e,t)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=()=>t(new Error("Could not read the file.")),i.readAsDataURL(s)})}function zm(s,e){const t=URL.createObjectURL(s),i=document.createElement("a");i.href=t,i.download=e,i.click(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}class Vm{constructor(e){this.width=1024,this.height=2048,this.changed=e,this.base=Yt(this.width,this.height),this.baseName="",this.baseVisible=!0,this.layers=[],this.active="",this.undoStack=[],this.redoStack=[],this.composite=Yt(this.width,this.height),this.preview=Yt(this.width,this.height),this.appearance={...E_},this.stroke=null,this.addLayer(!1),this.refresh()}layer(){return this.layers.find(e=>e.id===this.active)}checkpoint(){this.undoStack.push(this.serialize()),this.undoStack.length>16&&this.undoStack.shift(),this.redoStack=[]}addLayer(e=!0){if(this.layers.length>=12)throw new Error("This project supports up to 12 layers.");e&&this.checkpoint();const t={id:crypto.randomUUID(),name:`Makeup ${this.layers.length+1}`,visible:!0,opacity:1,canvas:Yt(this.width,this.height)};this.layers.push(t),this.active=t.id,e&&this.refresh()}removeLayer(){this.layers.length!==1&&(this.checkpoint(),this.layers=this.layers.filter(e=>e.id!==this.active),this.active=this.layers.at(-1).id,this.refresh())}moveLayer(e){const t=this.layers.findIndex(a=>a.id===this.active),i=t+e;i<0||i>=this.layers.length||(this.checkpoint(),[this.layers[t],this.layers[i]]=[this.layers[i],this.layers[t]],this.refresh())}clearLayer(){this.checkpoint(),this.layer().canvas.getContext("2d").clearRect(0,0,this.width,this.height),this.refresh()}refresh(){var t;const e=this.composite.getContext("2d");e.clearRect(0,0,this.width,this.height),this.baseVisible&&e.drawImage(this.previewBase(),0,0),this.renderLayers(e),(t=this.changed)==null||t.call(this)}previewBase(){var l;if(!["female-base.png","male-base.png"].includes(this.baseName))return this.base;const e=JSON.stringify(this.appearance);if(((l=this.baseCache)==null?void 0:l.base)===this.base&&this.baseCache.key===e)return this.baseCache.canvas;const t=Yt(this.width,this.height),i=t.getContext("2d");i.drawImage(this.base,0,0);const a=i.getImageData(0,0,this.width,this.height);return this.appearance.baseBrows===!1&&Py(a),i.putImageData(Cy(a,this.appearance),0,0),this.baseCache={base:this.base,key:e,canvas:t},t}placeArtwork(e,t,i=1){if(this.layers.length>=12)throw new Error("This project supports up to 12 layers. Remove a layer first.");const a=Yt(this.width,this.height);t(a.getContext("2d")),this.checkpoint(),this.addLayer(!1),Object.assign(this.layer(),{name:e,opacity:i,canvas:a}),this.refresh()}renderLayers(e){var t;for(const i of this.layers)i.visible&&(e.globalAlpha=i.opacity,e.drawImage(((t=this.stroke)==null?void 0:t.id)===i.id?this.preview:i.canvas,0,0));e.globalAlpha=1}begin(e){if(!this.layer().visible)throw new Error("Show the selected layer before painting.");if(e.tool==="hair"&&this.layers.length>=12)throw new Error("Remove a layer before adding another hair stroke.");this.checkpoint(),e.tool==="hair"&&(this.addLayer(!1),this.layer().name=e.hairStyle==="brows"?"Brow strokes":e.hairStyle==="lower"?"Bottom lashes":"Upper lashes"),this.stroke={...e,id:this.active,canvas:Yt(this.width,this.height),hairs:[[],[]],hairEnded:[!1,!1]}}addHairPoints(e){const t=this.stroke;(t==null?void 0:t.tool)==="hair"&&e.forEach((i,a)=>{if(t.hairEnded[a])return;const l=t.hairs[a];if(!i){l.length&&(t.hairEnded[a]=!0);return}const c={x:i.x/this.width*1024,y:i.y/this.height*2048},h=l.at(-1);if(h&&Math.hypot(c.x-h.x,c.y-h.y)>64){t.hairEnded[a]=!0;return}(!h||Math.hypot(c.x-h.x,c.y-h.y)>=.1)&&l.push(c)})}stamp(e,t){const i=this.stroke;if(!i)return;const a=i.canvas.getContext("2d"),l=i.size/2;if(a.fillStyle=i.color,i.tool==="freckles")for(let c=0;c<7;c++){const h=Math.random()*Math.PI*2,f=Math.sqrt(Math.random())*l,d=.6+Math.random()*1.5;a.beginPath(),a.arc(e+Math.cos(h)*f,t+Math.sin(h)*f,d,0,Math.PI*2),a.fill()}else{if(i.softness>0){const c=a.createRadialGradient(e,t,l*(1-i.softness)*.9,e,t,l);c.addColorStop(0,i.color),c.addColorStop(1,i.color+"00"),a.fillStyle=c}a.beginPath(),a.arc(e,t,l,0,Math.PI*2),a.fill()}}updateStroke(){if(!this.stroke)return;this.stroke.tool==="hair"&&T_(this.stroke.canvas.getContext("2d"),this.stroke.hairs,this.stroke,this.width,this.height);const e=this.preview.getContext("2d");e.clearRect(0,0,this.width,this.height),e.drawImage(this.layer().canvas,0,0),e.globalCompositeOperation=this.stroke.tool==="eraser"?"destination-out":"source-over",e.globalAlpha=this.stroke.opacity/100,e.drawImage(this.stroke.canvas,0,0),e.globalAlpha=1,e.globalCompositeOperation="source-over",this.refresh()}end(){if(!this.stroke)return;this.stroke.tool==="hair"&&(this.stroke.hairs.forEach((t,i)=>{t.length===1&&t.push({x:t[0].x+(i?-.1:.1),y:t[0].y})}),this.updateStroke());const e=this.layer().canvas.getContext("2d");e.clearRect(0,0,this.width,this.height),e.drawImage(this.preview,0,0),this.stroke=null,this.refresh()}sample(e,t){const i=this.composite.getContext("2d").getImageData(Math.max(0,Math.min(this.width-1,Math.floor(e))),Math.max(0,Math.min(this.height-1,Math.floor(t))),1,1).data;return i[3]?"#"+[...i.slice(0,3)].map(a=>a.toString(16).padStart(2,"0")).join(""):null}async importBase(e,t){const i=await hc(e);if(i.width>4096||i.height>4096||i.width<16||i.height<16)throw new Error("Use a texture between 16 and 4096 pixels per side.");this.checkpoint(),this.resize(i.width,i.height,!1),this.base.getContext("2d").clearRect(0,0,this.width,this.height),this.base.getContext("2d").drawImage(i,0,0),this.baseName=t,this.baseVisible=!0,this.refresh()}resize(e,t,i=!0){i&&this.checkpoint();for(const l of this.layers){const c=Yt(e,t);c.getContext("2d").drawImage(l.canvas,0,0,e,t),l.canvas=c}const a=Yt(e,t);a.getContext("2d").drawImage(this.base,0,0,e,t),this.base=a,this.width=e,this.height=t,this.composite=Yt(e,t),this.preview=Yt(e,t),i&&this.refresh()}serialize(){return{appearance:this.appearance,width:this.width,height:this.height,base:this.base.toDataURL(),baseName:this.baseName,baseVisible:this.baseVisible,active:this.active,layers:this.layers.map(({canvas:e,...t})=>({...t,image:e.toDataURL()}))}}async restore(e){var l,c,h,f,d,g;if(!Number.isInteger(e.width)||!Number.isInteger(e.height)||e.width<16||e.height<16||e.width>4096||e.height>4096||!Array.isArray(e.layers)||!e.layers.length||e.layers.length>12)throw new Error("This project has invalid texture dimensions or layers.");const t=async m=>{if(typeof m!="string"||!m.startsWith("data:image/png;base64,"))throw new Error("Invalid project image.");return hc(m)},[i,...a]=await Promise.all([t(e.base),...e.layers.map(m=>t(m.image))]);this.appearance={skinMode:((l=e.appearance)==null?void 0:l.skinMode)==="occult"||!((c=e.appearance)!=null&&c.skinMode)&&((h=e.appearance)!=null&&h.skinHue)?"occult":"natural",skinTone:Math.max(0,Math.min(100,Number(((f=e.appearance)==null?void 0:f.skinTone)??50))),skinHue:Math.max(-180,Math.min(180,Number((d=e.appearance)==null?void 0:d.skinHue)||0)),eyeTone:Ay(e.appearance),baseBrows:((g=e.appearance)==null?void 0:g.baseBrows)!==!1},this.width=e.width,this.height=e.height,this.base=Yt(this.width,this.height),this.base.getContext("2d").drawImage(i,0,0),this.baseName=String(e.baseName||""),this.baseVisible=e.baseVisible!==!1,this.layers=e.layers.map((m,_)=>{const x=Yt(this.width,this.height);return x.getContext("2d").drawImage(a[_],0,0),{id:String(m.id),name:String(m.name),visible:m.visible!==!1,opacity:Math.max(0,Math.min(1,Number(m.opacity)||0)),canvas:x}}),this.active=this.layers.some(m=>m.id===e.active)?e.active:this.layers.at(-1).id,this.composite=Yt(this.width,this.height),this.preview=Yt(this.width,this.height),this.stroke=null,this.refresh()}async undo(){var t;if(!this.undoStack.length)return;const e=this.undoStack.at(-1);this.redoStack.push(this.serialize()),await this.restore(e),this.undoStack.pop(),(t=this.changed)==null||t.call(this)}async redo(){var t;if(!this.redoStack.length)return;const e=this.redoStack.at(-1);this.undoStack.push(this.serialize()),await this.restore(e),this.redoStack.pop(),(t=this.changed)==null||t.call(this)}export(){const e=Yt(this.width,this.height),t=e.getContext("2d");return this.renderLayers(t),new Promise(i=>e.toBlob(i,"image/png"))}}function A_(){return new Promise((s,e)=>{const t=indexedDB.open("face-studio",1);t.onupgradeneeded=()=>t.result.createObjectStore("projects"),t.onsuccess=()=>s(t.result),t.onerror=()=>e(t.error)})}async function Iy(){const s=await A_();return new Promise((e,t)=>{const i=s.transaction("projects"),a=i.objectStore("projects").get("draft");a.onsuccess=()=>e(a.result),a.onerror=()=>t(a.error),i.oncomplete=()=>s.close()})}async function Ny(s){const e=await A_();return new Promise((t,i)=>{const a=e.transaction("projects","readwrite");a.objectStore("projects").put(s,"draft"),a.oncomplete=()=>{e.close(),t()},a.onerror=()=>{e.close(),i(a.error)}})}const C_=[{id:"butterfly",name:"Butterfly",kind:"shape"},{id:"heart",name:"Heart",kind:"shape"},{id:"star",name:"Star",kind:"shape"},{id:"bold",name:"Bold wing",source:8,kind:"liner",crop:[388,730,88,30]},{id:"fine",name:"Fine wing",source:5,kind:"liner",crop:[388,728,88,30]},{id:"round",name:"Rounded liner",source:12,kind:"liner",crop:[374,728,104,34]},{id:"lips",name:"Lip shape",source:8,kind:"lips",crop:[466,838,94,44]},{id:"brow-1",name:"Brow 1",source:"brow-1",kind:"brows",crop:[365,689,294,54]},{id:"brow-2",name:"Brow 2",source:"brow-2",kind:"brows",crop:[386,698,253,34]},{id:"shadow",name:"Soft lid",source:1,kind:"shadow",crop:[434,728,56,42]},{id:"blush",name:"Blush circle",source:2,kind:"blush",crop:[365,742,110,110]}],Za=new Map;async function R_(s){if(Za.has(s))return Za.get(s);const e=C_.find(M=>M.id===s);if(!e)throw new Error("Choose a stamp first.");if(e.kind==="shape"){const M=Uy(e.id),E={...e,single:M,thumb:sa(M,"#332235").toDataURL()};return Za.set(s,E),E}const t=await hc(`/ks-mod-download-widget/makeupstudio/makeup/${e.source}.png`),i=Yt(1024,2048),a=i.getContext("2d");if(a.drawImage(t,0,0),e.kind==="brows"){const[M,E,S,y]=e.crop,L=Yt(S,y);L.getContext("2d").drawImage(i,M,E,S,y,0,0,S,y);const P={...e,full:i,single:L,thumb:sa(L,"#332235").toDataURL()};return Za.set(s,P),P}const l=a.getImageData(0,0,1024,2048),c=l.data;for(let M=0;M<2048;M++)for(let E=0;E<1024;E++){const S=(M*1024+E)*4,y=c[S]<12&&c[S+1]<12&&c[S+2]<12;let L=!1;if(e.kind==="liner"&&(L=M>=728&&M<765&&E>=374&&E<=650&&y),e.kind==="lips"&&(L=M>=838&&M<885),e.kind==="shadow"&&(L=M>=728&&M<772&&E>=434&&E<=590&&!y),e.kind==="blush"){const P=E<512?420:605;L=M>=755&&((E-P)/53)**2+((M-800)/45)**2<=1&&c[S+2]>c[S]&&c[S+2]>c[S+1]*1.15}L||(c[S+3]=0)}let h=0;for(let M=3;M<c.length;M+=4)h=Math.max(h,c[M]);if(h)for(let M=3;M<c.length;M+=4)c[M]=Math.round(c[M]*255/h);a.putImageData(l,0,0);const[f,d,g,m]=e.crop,_=Yt(g,m);_.getContext("2d").drawImage(i,f,d,g,m,0,0,g,m);const x={...e,full:i,single:_,thumb:sa(_,"#332235").toDataURL()};return Za.set(s,x),x}function sa(s,e){const t=Yt(s.width,s.height),i=t.getContext("2d");return i.drawImage(s,0,0),i.globalCompositeOperation="source-in",i.fillStyle=e,i.fillRect(0,0,t.width,t.height),t}function Uy(s){const e=Yt(96,96),t=e.getContext("2d");if(t.fillStyle="#000",s==="butterfly"){for(const i of[-1,1])t.save(),t.translate(48,0),t.scale(i,1),t.beginPath(),t.moveTo(3,46),t.bezierCurveTo(13,14,43,4,43,27),t.bezierCurveTo(44,43,28,48,14,49),t.bezierCurveTo(45,49,38,85,23,81),t.bezierCurveTo(12,79,6,66,3,55),t.fill(),t.restore();t.beginPath(),t.ellipse(48,51,4,23,0,0,Math.PI*2),t.fill(),t.lineWidth=2.5,t.strokeStyle="#000",t.beginPath(),t.moveTo(47,34),t.quadraticCurveTo(45,22,38,21),t.moveTo(49,34),t.quadraticCurveTo(51,22,58,21),t.stroke()}else if(s==="heart")t.beginPath(),t.moveTo(48,83),t.bezierCurveTo(3,52,4,28,20,17),t.bezierCurveTo(33,9,43,17,48,26),t.bezierCurveTo(53,17,63,9,76,17),t.bezierCurveTo(92,28,93,52,48,83),t.fill();else{t.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,l=i%2?18:42;t.lineTo(48+Math.cos(a)*l,48+Math.sin(a)*l)}t.closePath(),t.fill()}return e}async function ky(s){if(s.type!=="image/png"&&!/\.png$/i.test(s.name))throw new Error("Choose a PNG stamp.");if(s.size>10*1024*1024)throw new Error("Choose a stamp smaller than 10 MB.");const e=await hc(await b_(s));if(e.width>2048||e.height>2048)throw new Error("Choose a stamp up to 2048 pixels per side.");const t=Yt(e.width,e.height),i=t.getContext("2d");i.drawImage(e,0,0);const a=i.getImageData(0,0,t.width,t.height).data;let l=t.width,c=t.height,h=-1,f=-1;for(let g=0;g<t.height;g++)for(let m=0;m<t.width;m++)a[(g*t.width+m)*4+3]&&(l=Math.min(l,m),h=Math.max(h,m),c=Math.min(c,g),f=Math.max(f,g));if(h<0)throw new Error("This stamp is empty.");const d=Yt(h-l+1,f-c+1);return d.getContext("2d").drawImage(t,l,c,d.width,d.height,0,0,d.width,d.height),{id:crypto.randomUUID(),name:s.name.replace(/\.png$/i,"").slice(0,40)||"My stamp",kind:"shape",single:d,thumb:sa(d,"#332235").toDataURL(),nativeScale:96/Math.max(d.width,d.height)}}const Hm=new WeakMap;function P_(s,e,t,i,a){let l=Hm.get(t);(l==null?void 0:l.color)!==a.color&&(l={color:a.color,image:sa(t.single,a.color)},Hm.set(t,l));const c=l.image,h=a.stampScale/100*(t.nativeScale||1);for(const[f,d]of i.entries())f&&Math.hypot(d.x-i[0].x,d.y-i[0].y)<2||(s.save(),s.translate(d.x,d.y),s.scale(e.width/1024,e.height/2048),s.rotate(a.stampRotation*Math.PI/180*(f?-1:1)),s.scale(f?-1:1,1),s.drawImage(c,-c.width*h/2,-c.height*h/2,c.width*h,c.height*h),s.restore())}function Fy(s,e,t,i){s.placeArtwork(e.name,a=>P_(a,s,e,t,i),i.opacity/100)}function Oy({settings:s,setSettings:e,customStamps:t,setCustomStamps:i}){const a=et.useRef(),[l,c]=et.useState([]),[h,f]=et.useState("");et.useEffect(()=>{let m=!0;return Promise.all(["butterfly","heart","star"].map(R_)).then(_=>{m&&(c(_),e(x=>x.stamp?x:{...x,stamp:_[0],stampScale:50,stampRotation:0}))}).catch(_=>{m&&f(_.message)}),()=>{m=!1}},[]);function d(m){e(_=>({..._,stamp:m,stampScale:50,stampRotation:0}))}function g(m){var _;i(x=>x.filter(M=>M.id!==m.id)),((_=s.stamp)==null?void 0:_.id)===m.id&&e(x=>({...x,stamp:l[0],stampScale:50,stampRotation:0}))}return k.createElement("section",{className:"stamp-options"},k.createElement("h3",null,"Stamps"),k.createElement("div",{className:"stamp-choices"},[...l,...t].map(m=>{var _;return k.createElement("div",{className:"stamp-choice",key:m.id},k.createElement("button",{"aria-label":m.name,title:m.name,"aria-pressed":((_=s.stamp)==null?void 0:_.id)===m.id,onClick:()=>d(m)},k.createElement("img",{src:m.thumb,alt:""}),k.createElement("span",null,m.name)),t.some(x=>x.id===m.id)&&k.createElement("button",{className:"delete-stamp","aria-label":"Delete stamp "+m.name,title:"Delete stamp "+m.name,onClick:()=>g(m)},k.createElement(M_,{size:12})))})),k.createElement("button",{className:"import-stamp",onClick:()=>a.current.click()},"Import stamp"),k.createElement("input",{ref:a,type:"file",accept:"image/png",hidden:!0,onChange:async m=>{var x;const _=(x=m.target.files)==null?void 0:x[0];if(m.target.value="",!!_)try{if(t.length>=20)throw new Error("You can import up to 20 stamps.");const M=await ky(_);i(E=>[...E,M]),d(M),f("")}catch(M){f(M.message)}}}),h&&k.createElement("p",{role:"alert"},h),k.createElement(In,{label:"Stamp size",value:s.stampScale??50,min:10,max:300,onChange:m=>e(_=>({..._,stampScale:m}))}),k.createElement(In,{label:"Stamp rotation",value:s.stampRotation??0,min:-180,max:180,suffix:"",onChange:m=>e(_=>({..._,stampRotation:m}))}))}function bn({icon:s,label:e,...t}){return k.createElement("button",{className:"icon-button",title:e,"aria-label":e,...t},k.createElement(s,{size:17}))}function In({label:s,value:e,onChange:t,onStart:i,min:a=0,max:l=100,suffix:c="%",...h}){return k.createElement("label",{className:"range-field"},k.createElement("span",null,s,k.createElement("output",null,e,c)),k.createElement("input",{type:"range","aria-label":s,min:a,max:l,value:e,onPointerDown:i,onKeyDown:f=>{(f.key.startsWith("Arrow")||["Home","End","PageUp","PageDown"].includes(f.key))&&(i==null||i())},onChange:f=>t(Number(f.target.value)),...h}))}const By={hair:xy,stamp:Vd,brush:ry,airbrush:Sy,eraser:ly,eyedropper:x_,blush:ay,lips:oy,eyeshadow:Xh,freckles:S_},zy=["#d16a7a","#c74764","#f78d84","#e8aa85","#9a544e","#845747","#aa83a4","#765475","#693e55","#655e64","#b2afb9","#25222d"];function Vy({settings:s,setSettings:e,selectTool:t,mirror:i,setMirror:a,view:l,onLibrary:c,onFocus:h,ready:f,customStamps:d,setCustomStamps:g}){const m=["brush","blush","lips","eyeshadow","freckles"].includes(s.tool),_=M=>s.tool===M||M==="brush"&&m,x=M=>M.map(E=>{const S=By[E];return k.createElement("button",{key:E,title:E==="hair"?"Sweep along the brow or lash line":void 0,onClick:()=>t(E),"aria-pressed":_(E),className:"tool "+(_(E)?"selected":"")},k.createElement(S,{size:21}),k.createElement("span",null,qh[E].label),_(E)&&k.createElement("span",{className:"tool-dot"}))});return k.createElement("aside",{className:"panel tools-panel"},k.createElement("div",{className:"window-title"},k.createElement(na,{size:15}),k.createElement("span",null,"Beauty kit"),k.createElement(jh,{className:"window-star",size:13})),k.createElement("div",{className:"focus-views",role:"group","aria-label":"Close-up views"},["face","eyes","lips"].map(M=>k.createElement("button",{key:M,disabled:!f,onClick:()=>h(M)},M[0].toUpperCase()+M.slice(1)))),k.createElement("h2",null,"Tools"),k.createElement("div",{className:"tool-list"},x(["brush","airbrush","hair","eraser","eyedropper","stamp"])),s.tool==="hair"&&k.createElement("section",null,k.createElement("h3",null,"Hair strokes"),k.createElement("label",{className:"field-label"},"Style",k.createElement("select",{"aria-label":"Hair style",value:s.hairStyle,onChange:M=>{const E=M.target.value;e(S=>({...S,...Bm[E],hairStyle:E}))}},Object.entries(Bm).map(([M,E])=>k.createElement("option",{key:M,value:M},E.label)))),k.createElement(In,{label:"Thickness",value:s.size,min:.3,max:10,step:.1,suffix:"",onChange:M=>e(E=>({...E,size:M}))}),k.createElement(In,{label:"Length",value:s.hairLength,min:4,max:100,suffix:"",onChange:M=>e(E=>({...E,hairLength:M}))}),k.createElement(In,{label:"Spacing",value:s.hairSpacing,min:1,max:12,step:.5,suffix:"",onChange:M=>e(E=>({...E,hairSpacing:M}))}),k.createElement(In,{label:"Direction",value:s.hairAngle,min:-180,max:180,suffix:"",onChange:M=>e(E=>({...E,hairAngle:M}))}),k.createElement(In,{label:"Curve",value:s.hairCurve,min:0,max:100,onChange:M=>e(E=>({...E,hairCurve:M}))})),s.tool==="stamp"&&k.createElement(Oy,{settings:s,setSettings:e,customStamps:d,setCustomStamps:g}),m&&k.createElement("section",null,k.createElement("h3",null,"Makeup brushes"),k.createElement("div",{className:"tool-list makeup-tools"},x(["blush","lips","eyeshadow","freckles"]))),k.createElement("section",null,k.createElement("button",{className:"library-launch",onClick:c},k.createElement(Vd,{size:18})," Makeup bases")),k.createElement("section",null,k.createElement("h3",null,"Color"),k.createElement("div",{className:"color-value"},k.createElement("input",{"aria-label":"Brush color",type:"color",value:s.color,onInput:M=>e(E=>({...E,color:M.target.value}))}),k.createElement("span",null,s.color.toUpperCase()),k.createElement(bn,{icon:x_,label:"Pick a color",onClick:()=>t("eyedropper")})),k.createElement("div",{className:"swatches"},zy.map(M=>k.createElement("button",{key:M,style:{background:M},className:M===s.color?"current":"",title:M,"aria-label":"Use color "+M,onClick:()=>e(E=>({...E,color:M}))}))),!["stamp","hair"].includes(s.tool)&&k.createElement(In,{label:"Brush size",value:s.size,min:1,max:180,suffix:" px",onChange:M=>e(E=>({...E,size:M}))}),k.createElement(In,{label:"Opacity",value:s.opacity,min:1,onChange:M=>e(E=>({...E,opacity:M}))}),!["stamp","hair"].includes(s.tool)&&k.createElement(In,{label:"Softness",value:Math.round(s.softness*100),onChange:M=>e(E=>({...E,softness:M/100}))})),k.createElement("section",{className:"mirror-row"},k.createElement("button",{className:"switch "+(i?"on":""),role:"switch","aria-checked":i,"aria-label":"Symmetry",onClick:()=>a(!i)},k.createElement("span",null)),k.createElement("div",null,"Symmetry")))}function Hy({doc:s,mutate:e,run:t,version:i}){const a=s.layer();return k.createElement("section",{className:"layer-section"},k.createElement("div",{className:"section-heading"},k.createElement("h2",null,"Layers"),k.createElement("button",{className:"subtle-button",onClick:()=>t(()=>s.addLayer())},k.createElement(my,{size:15})," Add layer")),k.createElement("div",{className:"layer-list"},[...s.layers].reverse().map(l=>k.createElement("div",{className:"layer-row "+(l.id===s.active?"selected":""),key:l.id,onClick:()=>e(()=>{s.active=l.id})},k.createElement(bn,{icon:l.visible?Xh:Fm,label:(l.visible?"Hide ":"Show ")+l.name,onClick:c=>{c.stopPropagation(),e(()=>{l.visible=!l.visible},!0)}}),k.createElement("div",{className:"layer-chip checker"},k.createElement(dy,{size:17})),k.createElement("input",{"aria-label":"Layer name "+l.name,value:l.name,onFocus:()=>{s.active=l.id,s.checkpoint()},onChange:c=>e(()=>{l.name=c.target.value.slice(0,40)})}),k.createElement("span",null,Math.round(l.opacity*100),"%"))),k.createElement("div",{className:"layer-row base-row"},k.createElement(bn,{icon:s.baseVisible?Xh:Fm,label:s.baseVisible?"Hide skin":"Show skin",onClick:()=>e(()=>{s.baseVisible=!s.baseVisible},!0)}),k.createElement("div",{className:"layer-chip base-chip"}),k.createElement("div",null,"Skin"))),k.createElement(In,{label:"Layer opacity",value:Math.round(a.opacity*100),onStart:()=>s.checkpoint(),onChange:l=>e(()=>{a.opacity=l/100})}),k.createElement("div",{className:"layer-actions"},k.createElement(bn,{icon:iy,label:"Move layer up",disabled:s.layers.at(-1).id===s.active,onClick:()=>s.moveLayer(1)}),k.createElement(bn,{icon:ny,label:"Move layer down",disabled:s.layers[0].id===s.active,onClick:()=>s.moveLayer(-1)}),k.createElement("button",{className:"text-button",onClick:()=>s.clearLayer()},"Clear layer"),k.createElement(bn,{icon:M_,label:"Delete layer",disabled:s.layers.length===1,onClick:()=>s.removeLayer()})))}function Gy({doc:s,settings:e,setSettings:t,onClose:i,run:a,notify:l}){const c=et.useRef(),[h,f]=et.useState("bold"),[d,g]=et.useState([]),[m,_]=et.useState("");et.useEffect(()=>{c.current.showModal();let E=!0;return Promise.all(C_.filter(S=>["bold","lips","brow-1","brow-2"].includes(S.id)).map(S=>R_(S.id))).then(S=>{E&&g(S)}).catch(S=>{E&&_(S.message)}),()=>{E=!1}},[]);const x=d.find(E=>E.id===h);function M(){a(()=>{const E=sa(x.full,e.color);s.placeArtwork(x.name,S=>S.drawImage(E,0,0,s.width,s.height),e.opacity/100),i(),l("Makeup added.")})}return k.createElement("dialog",{ref:c,className:"library-dialog",onCancel:i,"aria-labelledby":"library-title"},k.createElement("div",{className:"window-title"},k.createElement(Vd,{size:16}),k.createElement("span",{id:"library-title"},"Makeup bases"),k.createElement(bn,{icon:Yh,label:"Close makeup library",onClick:i})),k.createElement("div",{className:"library-body"},m&&k.createElement("p",{role:"alert"},m),k.createElement("div",{className:"preset-grid"},d.map(E=>k.createElement("button",{key:E.id,className:"preset-card","aria-pressed":h===E.id,onClick:()=>f(E.id)},k.createElement("div",{className:"checker"},k.createElement("img",{src:E.thumb,alt:""})),k.createElement("span",null,E.name)))),k.createElement("div",{className:"library-options"},k.createElement("label",{className:"preset-color"},"Color",k.createElement("input",{type:"color","aria-label":"Base color",value:e.color,onInput:E=>t(S=>({...S,color:E.target.value}))})),k.createElement(In,{label:"Opacity",value:e.opacity,min:1,onChange:E=>t(S=>({...S,opacity:E}))})),k.createElement("div",{className:"library-actions"},k.createElement("button",{className:"primary",disabled:!x,onClick:M},"Apply makeup"))))}function Wy({doc:s,gender:e,mutate:t,busy:i}){const a=e!=="custom"&&["female-base.png","male-base.png"].includes(s.baseName),l=(c,h)=>t(()=>{s.appearance={...s.appearance,[c]:h}});return k.createElement("section",{className:"appearance-section"},k.createElement("h3",null,"Your Sim"),k.createElement("fieldset",{disabled:i||!a},k.createElement("label",{className:"field-label"},"Skin colors",k.createElement("select",{"aria-label":"Skin colors",value:s.appearance.skinMode,onChange:c=>t(()=>{s.appearance={...s.appearance,skinMode:c.target.value}},!0)},k.createElement("option",{value:"natural"},"Natural"),k.createElement("option",{value:"occult"},"Occult"))),s.appearance.skinMode==="natural"?k.createElement(k.Fragment,null,k.createElement(In,{label:"Skin tone",value:s.appearance.skinTone,min:0,max:100,suffix:"",onStart:()=>s.checkpoint(),onChange:c=>l("skinTone",c)}),k.createElement("div",{className:"tone-labels"},k.createElement("span",null,"Gothic pale"),k.createElement("span",null,"Deep brown"))):k.createElement(In,{label:"Skin color",value:s.appearance.skinHue,min:-180,max:180,suffix:"°",onStart:()=>s.checkpoint(),onChange:c=>l("skinHue",c)}),k.createElement(In,{label:"Eye color",value:s.appearance.eyeTone,min:0,max:100,suffix:"",onStart:()=>s.checkpoint(),onChange:c=>l("eyeTone",c)}),k.createElement("label",{className:"brow-toggle"},k.createElement("input",{type:"checkbox",checked:s.appearance.baseBrows!==!1,onChange:c=>t(()=>{s.appearance={...s.appearance,baseBrows:c.target.checked}},!0)}),"Show base brows"),k.createElement("button",{className:"text-button",onClick:()=>t(()=>{s.appearance={...E_}},!0)},"Reset skin & eyes")),!a&&k.createElement("p",{className:"preview-note"},"Choose a female or male Sim to change colors."))}const Xy="modulepreload",jy=function(s){return"/ks-mod-download-widget/makeupstudio/"+s},Gm={},Yy=function(e,t,i){let a=Promise.resolve();if(t&&t.length>0){let c=function(d){return Promise.all(d.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));a=c(t.map(d=>{if(d=jy(d),d in Gm)return;Gm[d]=!0;const g=d.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const _=document.createElement("link");if(_.rel=g?"stylesheet":Xy,g||(_.as="script"),_.crossOrigin="",_.href=d,f&&_.setAttribute("nonce",f),document.head.appendChild(_),g)return new Promise((x,M)=>{_.addEventListener("load",x),_.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${d}`)))})}))}function l(c){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=c,window.dispatchEvent(h),!h.defaultPrevented)throw c}return a.then(c=>{for(const h of c||[])h.status==="rejected"&&l(h.reason);return e().catch(l)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hd="180",Ir={ROTATE:0,DOLLY:1,PAN:2},cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qy=0,Wm=1,$y=2,L_=1,Ky=2,tr=3,kr=0,Xn=1,Ii=2,Nr=0,aa=1,Xm=2,jm=3,Ym=4,Zy=5,os=100,Jy=101,Qy=102,ex=103,tx=104,nx=200,ix=201,rx=202,sx=203,$h=204,Kh=205,ax=206,ox=207,lx=208,cx=209,ux=210,hx=211,dx=212,fx=213,px=214,Zh=0,Jh=1,Qh=2,la=3,ed=4,td=5,nd=6,id=7,Gd=0,mx=1,gx=2,Ur=0,_x=1,vx=2,yx=3,xx=4,Sx=5,Mx=6,Ex=7,qm="attached",wx="detached",D_=300,ca=301,ua=302,rd=303,sd=304,yc=306,ad=1e3,us=1001,od=1002,Qn=1003,Tx=1004,Rl=1005,Ni=1006,ah=1007,hs=1008,ki=1009,I_=1010,N_=1011,fo=1012,Wd=1013,ds=1014,Ei=1015,yo=1016,Xd=1017,jd=1018,po=1020,U_=35902,k_=35899,F_=1021,O_=1022,ci=1023,mo=1026,go=1027,Yd=1028,qd=1029,B_=1030,$d=1031,Kd=1033,sc=33776,ac=33777,oc=33778,lc=33779,ld=35840,cd=35841,ud=35842,hd=35843,dd=36196,fd=37492,pd=37496,md=37808,gd=37809,_d=37810,vd=37811,yd=37812,xd=37813,Sd=37814,Md=37815,Ed=37816,wd=37817,Td=37818,bd=37819,Ad=37820,Cd=37821,Rd=36492,Pd=36494,Ld=36495,Dd=36283,Id=36284,Nd=36285,Ud=36286,dc=2300,kd=2301,oh=2302,$m=2400,Km=2401,Zm=2402,bx=2500,xb=0,Sb=1,Mb=2,Ax=3200,Cx=3201,Zd=0,Rx=1,Dr="",Gn="srgb",ha="srgb-linear",fc="linear",Ft="srgb",zs=7680,Jm=519,Px=512,Lx=513,Dx=514,z_=515,Ix=516,Nx=517,Ux=518,kx=519,Fd=35044,Qm="300 es",Ui=2e3,pc=2001;class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eg=1234567;const uo=Math.PI/180,da=180/Math.PI;function wi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function _t(s,e,t){return Math.max(e,Math.min(t,s))}function Jd(s,e){return(s%e+e)%e}function Fx(s,e,t,i,a){return i+(s-e)*(a-i)/(t-e)}function Ox(s,e,t){return s!==e?(t-s)/(e-s):0}function ho(s,e,t){return(1-t)*s+t*e}function Bx(s,e,t,i){return ho(s,e,1-Math.exp(-t*i))}function zx(s,e=1){return e-Math.abs(Jd(s,e*2)-e)}function Vx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Hx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Gx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Wx(s,e){return s+Math.random()*(e-s)}function Xx(s){return s*(.5-Math.random())}function jx(s){s!==void 0&&(eg=s);let e=eg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yx(s){return s*uo}function qx(s){return s*da}function $x(s){return(s&s-1)===0&&s!==0}function Kx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Zx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Jx(s,e,t,i,a){const l=Math.cos,c=Math.sin,h=l(t/2),f=c(t/2),d=l((e+i)/2),g=c((e+i)/2),m=l((e-i)/2),_=c((e-i)/2),x=l((i-e)/2),M=c((i-e)/2);switch(a){case"XYX":s.set(h*g,f*m,f*_,h*d);break;case"YZY":s.set(f*_,h*g,f*m,h*d);break;case"ZXZ":s.set(f*m,f*_,h*g,h*d);break;case"XZX":s.set(h*g,f*M,f*x,h*d);break;case"YXY":s.set(f*x,h*g,f*M,h*d);break;case"ZYZ":s.set(f*M,f*x,h*g,h*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Si(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Qx={DEG2RAD:uo,RAD2DEG:da,generateUUID:wi,clamp:_t,euclideanModulo:Jd,mapLinear:Fx,inverseLerp:Ox,lerp:ho,damp:Bx,pingpong:zx,smoothstep:Vx,smootherstep:Hx,randInt:Gx,randFloat:Wx,randFloatSpread:Xx,seededRandom:jx,degToRad:Yx,radToDeg:qx,isPowerOfTwo:$x,ceilPowerOfTwo:Kx,floorPowerOfTwo:Zx,setQuaternionFromProperEuler:Jx,normalize:Nt,denormalize:Si};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*a+e.x,this.y=l*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fr{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,l,c,h){let f=i[a+0],d=i[a+1],g=i[a+2],m=i[a+3];const _=l[c+0],x=l[c+1],M=l[c+2],E=l[c+3];if(h===0){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h===1){e[t+0]=_,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(m!==E||f!==_||d!==x||g!==M){let S=1-h;const y=f*_+d*x+g*M+m*E,L=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const z=Math.sqrt(P),I=Math.atan2(z,y*L);S=Math.sin(S*I)/z,h=Math.sin(h*I)/z}const A=h*L;if(f=f*S+_*A,d=d*S+x*A,g=g*S+M*A,m=m*S+E*A,S===1-h){const z=1/Math.sqrt(f*f+d*d+g*g+m*m);f*=z,d*=z,g*=z,m*=z}}e[t]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,a,l,c){const h=i[a],f=i[a+1],d=i[a+2],g=i[a+3],m=l[c],_=l[c+1],x=l[c+2],M=l[c+3];return e[t]=h*M+g*m+f*x-d*_,e[t+1]=f*M+g*_+d*m-h*x,e[t+2]=d*M+g*x+h*_-f*m,e[t+3]=g*M-h*m-f*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,l=e._z,c=e._order,h=Math.cos,f=Math.sin,d=h(i/2),g=h(a/2),m=h(l/2),_=f(i/2),x=f(a/2),M=f(l/2);switch(c){case"XYZ":this._x=_*g*m+d*x*M,this._y=d*x*m-_*g*M,this._z=d*g*M+_*x*m,this._w=d*g*m-_*x*M;break;case"YXZ":this._x=_*g*m+d*x*M,this._y=d*x*m-_*g*M,this._z=d*g*M-_*x*m,this._w=d*g*m+_*x*M;break;case"ZXY":this._x=_*g*m-d*x*M,this._y=d*x*m+_*g*M,this._z=d*g*M+_*x*m,this._w=d*g*m-_*x*M;break;case"ZYX":this._x=_*g*m-d*x*M,this._y=d*x*m+_*g*M,this._z=d*g*M-_*x*m,this._w=d*g*m+_*x*M;break;case"YZX":this._x=_*g*m+d*x*M,this._y=d*x*m+_*g*M,this._z=d*g*M-_*x*m,this._w=d*g*m-_*x*M;break;case"XZY":this._x=_*g*m-d*x*M,this._y=d*x*m-_*g*M,this._z=d*g*M+_*x*m,this._w=d*g*m+_*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],l=t[8],c=t[1],h=t[5],f=t[9],d=t[2],g=t[6],m=t[10],_=i+h+m;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-f)*x,this._y=(l-d)*x,this._z=(c-a)*x}else if(i>h&&i>m){const x=2*Math.sqrt(1+i-h-m);this._w=(g-f)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(l+d)/x}else if(h>m){const x=2*Math.sqrt(1+h-i-m);this._w=(l-d)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(f+g)/x}else{const x=2*Math.sqrt(1+m-i-h);this._w=(c-a)/x,this._x=(l+d)/x,this._y=(f+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,l=e._z,c=e._w,h=t._x,f=t._y,d=t._z,g=t._w;return this._x=i*g+c*h+a*d-l*f,this._y=a*g+c*f+l*h-i*d,this._z=l*g+c*d+i*f-a*h,this._w=c*g-i*h-a*f-l*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,l=this._z,c=this._w;let h=c*e._w+i*e._x+a*e._y+l*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=c,this._x=i,this._y=a,this._z=l,this;const f=1-h*h;if(f<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*i+t*this._x,this._y=x*a+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const d=Math.sqrt(f),g=Math.atan2(d,h),m=Math.sin((1-t)*g)/d,_=Math.sin(t*g)/d;return this._w=c*m+this._w*_,this._x=i*m+this._x*_,this._y=a*m+this._y*_,this._z=l*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*a,this.y=l[1]*t+l[4]*i+l[7]*a,this.z=l[2]*t+l[5]*i+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*i+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*i+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,l=e.x,c=e.y,h=e.z,f=e.w,d=2*(c*a-h*i),g=2*(h*t-l*a),m=2*(l*i-c*t);return this.x=t+f*d+c*m-h*g,this.y=i+f*g+h*d-l*m,this.z=a+f*m+l*g-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*a,this.y=l[1]*t+l[5]*i+l[9]*a,this.z=l[2]*t+l[6]*i+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,l=e.z,c=t.x,h=t.y,f=t.z;return this.x=a*f-l*h,this.y=l*c-i*f,this.z=i*h-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lh.copy(this).projectOnVector(e),this.sub(lh)}reflect(e){return this.sub(lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new Y,tg=new Fr;class mt{constructor(e,t,i,a,l,c,h,f,d){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,c,h,f,d)}set(e,t,i,a,l,c,h,f,d){const g=this.elements;return g[0]=e,g[1]=a,g[2]=h,g[3]=t,g[4]=l,g[5]=f,g[6]=i,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,c=i[0],h=i[3],f=i[6],d=i[1],g=i[4],m=i[7],_=i[2],x=i[5],M=i[8],E=a[0],S=a[3],y=a[6],L=a[1],P=a[4],A=a[7],z=a[2],I=a[5],B=a[8];return l[0]=c*E+h*L+f*z,l[3]=c*S+h*P+f*I,l[6]=c*y+h*A+f*B,l[1]=d*E+g*L+m*z,l[4]=d*S+g*P+m*I,l[7]=d*y+g*A+m*B,l[2]=_*E+x*L+M*z,l[5]=_*S+x*P+M*I,l[8]=_*y+x*A+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],h=e[5],f=e[6],d=e[7],g=e[8];return t*c*g-t*h*d-i*l*g+i*h*f+a*l*d-a*c*f}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],h=e[5],f=e[6],d=e[7],g=e[8],m=g*c-h*d,_=h*f-g*l,x=d*l-c*f,M=t*m+i*_+a*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=m*E,e[1]=(a*d-g*i)*E,e[2]=(h*i-a*c)*E,e[3]=_*E,e[4]=(g*t-a*f)*E,e[5]=(a*l-h*t)*E,e[6]=x*E,e[7]=(i*f-d*t)*E,e[8]=(c*t-i*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,l,c,h){const f=Math.cos(l),d=Math.sin(l);return this.set(i*f,i*d,-i*(f*c+d*h)+c+e,-a*d,a*f,-a*(-d*c+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(ch.makeScale(e,t)),this}rotate(e){return this.premultiply(ch.makeRotation(-e)),this}translate(e,t){return this.premultiply(ch.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new mt;function V_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function _o(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function eS(){const s=_o("canvas");return s.style.display="block",s}const ng={};function vo(s){s in ng||(ng[s]=!0,console.warn(s))}function tS(s,e,t){return new Promise(function(i,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}const ig=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rg=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nS(){const s={enabled:!0,workingColorSpace:ha,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ft&&(a.r=ir(a.r),a.g=ir(a.g),a.b=ir(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(a.r=oa(a.r),a.g=oa(a.g),a.b=oa(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Dr?fc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return vo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return vo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[ha]:{primaries:e,whitePoint:i,transfer:fc,toXYZ:ig,fromXYZ:rg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:ig,fromXYZ:rg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),s}const Rt=nS();function ir(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Vs;class iS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vs===void 0&&(Vs=_o("canvas")),Vs.width=e.width,Vs.height=e.height;const a=Vs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Vs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_o("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=ir(l[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ir(t[i]/255)*255):t[i]=ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rS=0;class Qd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,h=a.length;c<h;c++)a[c].isDataTexture?l.push(uh(a[c].image)):l.push(uh(a[c]))}else l=uh(a);i.url=l}return t||(e.images[this.uuid]=i),i}}function uh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?iS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sS=0;const hh=new Y;class gn extends ps{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,i=us,a=us,l=Ni,c=hs,h=ci,f=ki,d=gn.DEFAULT_ANISOTROPY,g=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=wi(),this.name="",this.source=new Qd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=f,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hh).x}get height(){return this.source.getSize(hh).y}get depth(){return this.source.getSize(hh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ad:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ad:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=D_;gn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,a=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,l;const f=e.elements,d=f[0],g=f[4],m=f[8],_=f[1],x=f[5],M=f[9],E=f[2],S=f[6],y=f[10];if(Math.abs(g-_)<.01&&Math.abs(m-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(m+E)<.1&&Math.abs(M+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,A=(x+1)/2,z=(y+1)/2,I=(g+_)/4,B=(m+E)/4,$=(M+S)/4;return P>A&&P>z?P<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(P),a=I/i,l=B/i):A>z?A<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(A),i=I/a,l=$/a):z<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),i=B/l,a=$/l),this.set(i,a,l,t),this}let L=Math.sqrt((S-M)*(S-M)+(m-E)*(m-E)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(m-E)/L,this.z=(_-g)/L,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aS extends ps{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const a={width:e,height:t,depth:i.depth},l=new gn(a);this.textures=[];const c=i.count;for(let h=0;h<c;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Qd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends aS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class H_ extends gn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oS extends gn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=l.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,vi):vi.fromBufferAttribute(l,c),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pl.copy(i.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),Ll.subVectors(this.max,Ja),Hs.subVectors(e.a,Ja),Gs.subVectors(e.b,Ja),Ws.subVectors(e.c,Ja),Tr.subVectors(Gs,Hs),br.subVectors(Ws,Gs),es.subVectors(Hs,Ws);let t=[0,-Tr.z,Tr.y,0,-br.z,br.y,0,-es.z,es.y,Tr.z,0,-Tr.x,br.z,0,-br.x,es.z,0,-es.x,-Tr.y,Tr.x,0,-br.y,br.x,0,-es.y,es.x,0];return!dh(t,Hs,Gs,Ws,Ll)||(t=[1,0,0,0,1,0,0,0,1],!dh(t,Hs,Gs,Ws,Ll))?!1:(Dl.crossVectors(Tr,br),t=[Dl.x,Dl.y,Dl.z],dh(t,Hs,Gs,Ws,Ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],vi=new Y,Pl=new Fi,Hs=new Y,Gs=new Y,Ws=new Y,Tr=new Y,br=new Y,es=new Y,Ja=new Y,Ll=new Y,Dl=new Y,ts=new Y;function dh(s,e,t,i,a){for(let l=0,c=s.length-3;l<=c;l+=3){ts.fromArray(s,l);const h=a.x*Math.abs(ts.x)+a.y*Math.abs(ts.y)+a.z*Math.abs(ts.z),f=e.dot(ts),d=t.dot(ts),g=i.dot(ts);if(Math.max(-Math.max(f,d,g),Math.min(f,d,g))>h)return!1}return!0}const lS=new Fi,Qa=new Y,fh=new Y;class rr{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lS.setFromPoints(e).getCenter(i);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qa.subVectors(e,this.center);const t=Qa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Qa,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qa.copy(e.center).add(fh)),this.expandByPoint(Qa.copy(e.center).sub(fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ki=new Y,ph=new Y,Il=new Y,Ar=new Y,mh=new Y,Nl=new Y,gh=new Y;class pa{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){ph.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),Ar.copy(this.origin).sub(ph);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Il),h=Ar.dot(this.direction),f=-Ar.dot(Il),d=Ar.lengthSq(),g=Math.abs(1-c*c);let m,_,x,M;if(g>0)if(m=c*f-h,_=c*h-f,M=l*g,m>=0)if(_>=-M)if(_<=M){const E=1/g;m*=E,_*=E,x=m*(m+c*_+2*h)+_*(c*m+_+2*f)+d}else _=l,m=Math.max(0,-(c*_+h)),x=-m*m+_*(_+2*f)+d;else _=-l,m=Math.max(0,-(c*_+h)),x=-m*m+_*(_+2*f)+d;else _<=-M?(m=Math.max(0,-(-c*l+h)),_=m>0?-l:Math.min(Math.max(-l,-f),l),x=-m*m+_*(_+2*f)+d):_<=M?(m=0,_=Math.min(Math.max(-l,-f),l),x=_*(_+2*f)+d):(m=Math.max(0,-(c*l+h)),_=m>0?l:Math.min(Math.max(-l,-f),l),x=-m*m+_*(_+2*f)+d);else _=c>0?-l:l,m=Math.max(0,-(c*_+h)),x=-m*m+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(ph).addScaledVector(Il,_),x}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const i=Ki.dot(this.direction),a=Ki.dot(Ki)-i*i,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),h=i-c,f=i+c;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,l,c,h,f;const d=1/this.direction.x,g=1/this.direction.y,m=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,a=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,a=(e.min.x-_.x)*d),g>=0?(l=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),i>c||l>a||((l>i||isNaN(i))&&(i=l),(c<a||isNaN(a))&&(a=c),m>=0?(h=(e.min.z-_.z)*m,f=(e.max.z-_.z)*m):(h=(e.max.z-_.z)*m,f=(e.min.z-_.z)*m),i>f||h>a)||((h>i||i!==i)&&(i=h),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,i,a,l){mh.subVectors(t,e),Nl.subVectors(i,e),gh.crossVectors(mh,Nl);let c=this.direction.dot(gh),h;if(c>0){if(a)return null;h=1}else if(c<0)h=-1,c=-c;else return null;Ar.subVectors(this.origin,e);const f=h*this.direction.dot(Nl.crossVectors(Ar,Nl));if(f<0)return null;const d=h*this.direction.dot(mh.cross(Ar));if(d<0||f+d>c)return null;const g=-h*Ar.dot(gh);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,a,l,c,h,f,d,g,m,_,x,M,E,S){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,c,h,f,d,g,m,_,x,M,E,S)}set(e,t,i,a,l,c,h,f,d,g,m,_,x,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=a,y[1]=l,y[5]=c,y[9]=h,y[13]=f,y[2]=d,y[6]=g,y[10]=m,y[14]=_,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Xs.setFromMatrixColumn(e,0).length(),l=1/Xs.setFromMatrixColumn(e,1).length(),c=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,l=e.z,c=Math.cos(i),h=Math.sin(i),f=Math.cos(a),d=Math.sin(a),g=Math.cos(l),m=Math.sin(l);if(e.order==="XYZ"){const _=c*g,x=c*m,M=h*g,E=h*m;t[0]=f*g,t[4]=-f*m,t[8]=d,t[1]=x+M*d,t[5]=_-E*d,t[9]=-h*f,t[2]=E-_*d,t[6]=M+x*d,t[10]=c*f}else if(e.order==="YXZ"){const _=f*g,x=f*m,M=d*g,E=d*m;t[0]=_+E*h,t[4]=M*h-x,t[8]=c*d,t[1]=c*m,t[5]=c*g,t[9]=-h,t[2]=x*h-M,t[6]=E+_*h,t[10]=c*f}else if(e.order==="ZXY"){const _=f*g,x=f*m,M=d*g,E=d*m;t[0]=_-E*h,t[4]=-c*m,t[8]=M+x*h,t[1]=x+M*h,t[5]=c*g,t[9]=E-_*h,t[2]=-c*d,t[6]=h,t[10]=c*f}else if(e.order==="ZYX"){const _=c*g,x=c*m,M=h*g,E=h*m;t[0]=f*g,t[4]=M*d-x,t[8]=_*d+E,t[1]=f*m,t[5]=E*d+_,t[9]=x*d-M,t[2]=-d,t[6]=h*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,x=c*d,M=h*f,E=h*d;t[0]=f*g,t[4]=E-_*m,t[8]=M*m+x,t[1]=m,t[5]=c*g,t[9]=-h*g,t[2]=-d*g,t[6]=x*m+M,t[10]=_-E*m}else if(e.order==="XZY"){const _=c*f,x=c*d,M=h*f,E=h*d;t[0]=f*g,t[4]=-m,t[8]=d*g,t[1]=_*m+E,t[5]=c*g,t[9]=x*m-M,t[2]=M*m-x,t[6]=h*g,t[10]=E*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cS,e,uS)}lookAt(e,t,i){const a=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Cr.crossVectors(i,Zn),Cr.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Cr.crossVectors(i,Zn)),Cr.normalize(),Ul.crossVectors(Zn,Cr),a[0]=Cr.x,a[4]=Ul.x,a[8]=Zn.x,a[1]=Cr.y,a[5]=Ul.y,a[9]=Zn.y,a[2]=Cr.z,a[6]=Ul.z,a[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,c=i[0],h=i[4],f=i[8],d=i[12],g=i[1],m=i[5],_=i[9],x=i[13],M=i[2],E=i[6],S=i[10],y=i[14],L=i[3],P=i[7],A=i[11],z=i[15],I=a[0],B=a[4],$=a[8],R=a[12],C=a[1],G=a[5],ee=a[9],re=a[13],ce=a[2],he=a[6],oe=a[10],fe=a[14],H=a[3],le=a[7],se=a[11],F=a[15];return l[0]=c*I+h*C+f*ce+d*H,l[4]=c*B+h*G+f*he+d*le,l[8]=c*$+h*ee+f*oe+d*se,l[12]=c*R+h*re+f*fe+d*F,l[1]=g*I+m*C+_*ce+x*H,l[5]=g*B+m*G+_*he+x*le,l[9]=g*$+m*ee+_*oe+x*se,l[13]=g*R+m*re+_*fe+x*F,l[2]=M*I+E*C+S*ce+y*H,l[6]=M*B+E*G+S*he+y*le,l[10]=M*$+E*ee+S*oe+y*se,l[14]=M*R+E*re+S*fe+y*F,l[3]=L*I+P*C+A*ce+z*H,l[7]=L*B+P*G+A*he+z*le,l[11]=L*$+P*ee+A*oe+z*se,l[15]=L*R+P*re+A*fe+z*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],l=e[12],c=e[1],h=e[5],f=e[9],d=e[13],g=e[2],m=e[6],_=e[10],x=e[14],M=e[3],E=e[7],S=e[11],y=e[15];return M*(+l*f*m-a*d*m-l*h*_+i*d*_+a*h*x-i*f*x)+E*(+t*f*x-t*d*_+l*c*_-a*c*x+a*d*g-l*f*g)+S*(+t*d*m-t*h*x-l*c*m+i*c*x+l*h*g-i*d*g)+y*(-a*h*g-t*f*m+t*h*_+a*c*m-i*c*_+i*f*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],h=e[5],f=e[6],d=e[7],g=e[8],m=e[9],_=e[10],x=e[11],M=e[12],E=e[13],S=e[14],y=e[15],L=m*S*d-E*_*d+E*f*x-h*S*x-m*f*y+h*_*y,P=M*_*d-g*S*d-M*f*x+c*S*x+g*f*y-c*_*y,A=g*E*d-M*m*d+M*h*x-c*E*x-g*h*y+c*m*y,z=M*m*f-g*E*f-M*h*_+c*E*_+g*h*S-c*m*S,I=t*L+i*P+a*A+l*z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return e[0]=L*B,e[1]=(E*_*l-m*S*l-E*a*x+i*S*x+m*a*y-i*_*y)*B,e[2]=(h*S*l-E*f*l+E*a*d-i*S*d-h*a*y+i*f*y)*B,e[3]=(m*f*l-h*_*l-m*a*d+i*_*d+h*a*x-i*f*x)*B,e[4]=P*B,e[5]=(g*S*l-M*_*l+M*a*x-t*S*x-g*a*y+t*_*y)*B,e[6]=(M*f*l-c*S*l-M*a*d+t*S*d+c*a*y-t*f*y)*B,e[7]=(c*_*l-g*f*l+g*a*d-t*_*d-c*a*x+t*f*x)*B,e[8]=A*B,e[9]=(M*m*l-g*E*l-M*i*x+t*E*x+g*i*y-t*m*y)*B,e[10]=(c*E*l-M*h*l+M*i*d-t*E*d-c*i*y+t*h*y)*B,e[11]=(g*h*l-c*m*l-g*i*d+t*m*d+c*i*x-t*h*x)*B,e[12]=z*B,e[13]=(g*E*a-M*m*a+M*i*_-t*E*_-g*i*S+t*m*S)*B,e[14]=(M*h*a-c*E*a-M*i*f+t*E*f+c*i*S-t*h*S)*B,e[15]=(c*m*a-g*h*a+g*i*f-t*m*f-c*i*_+t*h*_)*B,this}scale(e){const t=this.elements,i=e.x,a=e.y,l=e.z;return t[0]*=i,t[4]*=a,t[8]*=l,t[1]*=i,t[5]*=a,t[9]*=l,t[2]*=i,t[6]*=a,t[10]*=l,t[3]*=i,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),l=1-i,c=e.x,h=e.y,f=e.z,d=l*c,g=l*h;return this.set(d*c+i,d*h-a*f,d*f+a*h,0,d*h+a*f,g*h+i,g*f-a*c,0,d*f-a*h,g*f+a*c,l*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,l,c){return this.set(1,i,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,l=t._x,c=t._y,h=t._z,f=t._w,d=l+l,g=c+c,m=h+h,_=l*d,x=l*g,M=l*m,E=c*g,S=c*m,y=h*m,L=f*d,P=f*g,A=f*m,z=i.x,I=i.y,B=i.z;return a[0]=(1-(E+y))*z,a[1]=(x+A)*z,a[2]=(M-P)*z,a[3]=0,a[4]=(x-A)*I,a[5]=(1-(_+y))*I,a[6]=(S+L)*I,a[7]=0,a[8]=(M+P)*B,a[9]=(S-L)*B,a[10]=(1-(_+E))*B,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let l=Xs.set(a[0],a[1],a[2]).length();const c=Xs.set(a[4],a[5],a[6]).length(),h=Xs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],yi.copy(this);const d=1/l,g=1/c,m=1/h;return yi.elements[0]*=d,yi.elements[1]*=d,yi.elements[2]*=d,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=m,yi.elements[9]*=m,yi.elements[10]*=m,t.setFromRotationMatrix(yi),i.x=l,i.y=c,i.z=h,this}makePerspective(e,t,i,a,l,c,h=Ui,f=!1){const d=this.elements,g=2*l/(t-e),m=2*l/(i-a),_=(t+e)/(t-e),x=(i+a)/(i-a);let M,E;if(f)M=l/(c-l),E=c*l/(c-l);else if(h===Ui)M=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(h===pc)M=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=m,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,a,l,c,h=Ui,f=!1){const d=this.elements,g=2/(t-e),m=2/(i-a),_=-(t+e)/(t-e),x=-(i+a)/(i-a);let M,E;if(f)M=1/(c-l),E=c/(c-l);else if(h===Ui)M=-2/(c-l),E=-(c+l)/(c-l);else if(h===pc)M=-1/(c-l),E=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=m,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xs=new Y,yi=new Mt,cS=new Y(0,0,0),uS=new Y(1,1,1),Cr=new Y,Ul=new Y,Zn=new Y,sg=new Mt,ag=new Fr;class Ti{constructor(e=0,t=0,i=0,a=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,l=a[0],c=a[4],h=a[8],f=a[1],d=a[5],g=a[9],m=a[2],_=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-m,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-m,l)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ag.setFromEuler(this),this.setFromQuaternion(ag,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class ef{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hS=0;const og=new Y,js=new Fr,Zi=new Mt,kl=new Y,eo=new Y,dS=new Y,fS=new Fr,lg=new Y(1,0,0),cg=new Y(0,1,0),ug=new Y(0,0,1),hg={type:"added"},pS={type:"removed"},Ys={type:"childadded",child:null},_h={type:"childremoved",child:null};class Jt extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new Y,t=new Ti,i=new Fr,a=new Y(1,1,1);function l(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Mt},normalMatrix:{value:new mt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ef,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(lg,e)}rotateY(e){return this.rotateOnAxis(cg,e)}rotateZ(e){return this.rotateOnAxis(ug,e)}translateOnAxis(e,t){return og.copy(e).applyQuaternion(this.quaternion),this.position.add(og.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lg,e)}translateY(e){return this.translateOnAxis(cg,e)}translateZ(e){return this.translateOnAxis(ug,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kl.copy(e):kl.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(eo,kl,this.up):Zi.lookAt(kl,eo,this.up),this.quaternion.setFromRotationMatrix(Zi),a&&(Zi.extractRotation(a.matrixWorld),js.setFromRotationMatrix(Zi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hg),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pS),_h.child=e,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hg),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,dS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,fS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let d=0,g=f.length;d<g;d++){const m=f[d];l(e.shapes,m)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,d=this.material.length;f<d;f++)h.push(l(e.materials,this.material[f]));a.material=h}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];a.animations.push(l(e.animations,f))}}if(t){const h=c(e.geometries),f=c(e.materials),d=c(e.textures),g=c(e.images),m=c(e.shapes),_=c(e.skeletons),x=c(e.animations),M=c(e.nodes);h.length>0&&(i.geometries=h),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),g.length>0&&(i.images=g),m.length>0&&(i.shapes=m),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=a,i;function c(h){const f=[];for(const d in h){const g=h[d];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Jt.DEFAULT_UP=new Y(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new Y,Ji=new Y,vh=new Y,Qi=new Y,qs=new Y,$s=new Y,dg=new Y,yh=new Y,xh=new Y,Sh=new Y,Mh=new Pt,Eh=new Pt,wh=new Pt;class Mi{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),xi.subVectors(e,t),a.cross(xi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,i,a,l){xi.subVectors(a,t),Ji.subVectors(i,t),vh.subVectors(e,t);const c=xi.dot(xi),h=xi.dot(Ji),f=xi.dot(vh),d=Ji.dot(Ji),g=Ji.dot(vh),m=c*d-h*h;if(m===0)return l.set(0,0,0),null;const _=1/m,x=(d*f-h*g)*_,M=(c*g-h*f)*_;return l.set(1-x-M,M,x)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,i,a,l,c,h,f){return this.getBarycoord(e,t,i,a,Qi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Qi.x),f.addScaledVector(c,Qi.y),f.addScaledVector(h,Qi.z),f)}static getInterpolatedAttribute(e,t,i,a,l,c){return Mh.setScalar(0),Eh.setScalar(0),wh.setScalar(0),Mh.fromBufferAttribute(e,t),Eh.fromBufferAttribute(e,i),wh.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Mh,l.x),c.addScaledVector(Eh,l.y),c.addScaledVector(wh,l.z),c}static isFrontFacing(e,t,i,a){return xi.subVectors(i,t),Ji.subVectors(e,t),xi.cross(Ji).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),xi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,l){return Mi.getInterpolation(e,this.a,this.b,this.c,t,i,a,l)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,l=this.c;let c,h;qs.subVectors(a,i),$s.subVectors(l,i),yh.subVectors(e,i);const f=qs.dot(yh),d=$s.dot(yh);if(f<=0&&d<=0)return t.copy(i);xh.subVectors(e,a);const g=qs.dot(xh),m=$s.dot(xh);if(g>=0&&m<=g)return t.copy(a);const _=f*m-g*d;if(_<=0&&f>=0&&g<=0)return c=f/(f-g),t.copy(i).addScaledVector(qs,c);Sh.subVectors(e,l);const x=qs.dot(Sh),M=$s.dot(Sh);if(M>=0&&x<=M)return t.copy(l);const E=x*d-f*M;if(E<=0&&d>=0&&M<=0)return h=d/(d-M),t.copy(i).addScaledVector($s,h);const S=g*M-x*m;if(S<=0&&m-g>=0&&x-M>=0)return dg.subVectors(l,a),h=(m-g)/(m-g+(x-M)),t.copy(a).addScaledVector(dg,h);const y=1/(S+E+_);return c=E*y,h=_*y,t.copy(i).addScaledVector(qs,c).addScaledVector($s,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const G_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Fl={h:0,s:0,l:0};function Th(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Rt.workingColorSpace){if(e=Jd(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,c=2*i-l;this.r=Th(c,l,e+1/3),this.g=Th(c,l,e),this.b=Th(c,l,e-1/3)}return Rt.colorSpaceToWorking(this,a),this}setStyle(e,t=Gn){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],h=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const i=G_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Rt.workingToColorSpace(Tn.copy(this),e),Math.round(_t(Tn.r*255,0,255))*65536+Math.round(_t(Tn.g*255,0,255))*256+Math.round(_t(Tn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Tn.copy(this),t);const i=Tn.r,a=Tn.g,l=Tn.b,c=Math.max(i,a,l),h=Math.min(i,a,l);let f,d;const g=(h+c)/2;if(h===c)f=0,d=0;else{const m=c-h;switch(d=g<=.5?m/(c+h):m/(2-c-h),c){case i:f=(a-l)/m+(a<l?6:0);break;case a:f=(l-i)/m+2;break;case l:f=(i-a)/m+4;break}f/=6}return e.h=f,e.s=d,e.l=g,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Gn){Rt.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,a=Tn.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Fl);const i=ho(Rr.h,Fl.h,t),a=ho(Rr.s,Fl.s,t),l=ho(Rr.l,Fl.l,t);return this.setHSL(i,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*a,this.g=l[1]*t+l[4]*i+l[7]*a,this.b=l[2]*t+l[5]*i+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new pt;pt.NAMES=G_;let mS=0;class Oi extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=aa,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Kh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$h&&(i.blendSrc=this.blendSrc),this.blendDst!==Kh&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==la&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const c=[];for(const h in l){const f=l[h];delete f.metadata,c.push(f)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class W_ extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new Y,Ol=new lt;let gS=0;class ui{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fd,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array),l=Nt(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fd&&(e.usage=this.usage),e}}class X_ extends ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class j_ extends ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends ui{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _S=0;const oi=new Mt,bh=new Jt,Ks=new Y,Jn=new Fi,to=new Fi,fn=new Y;class bi extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V_(e)?j_:X_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new mt().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,i){return oi.makeTranslation(e,t,i),this.applyMatrix4(oi),this}scale(e,t,i){return oi.makeScale(e,t,i),this.applyMatrix4(oi),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Nn(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const l=t[i];Jn.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const h=t[l];to.setFromBufferAttribute(h),this.morphTargetsRelative?(fn.addVectors(Jn.min,to.min),Jn.expandByPoint(fn),fn.addVectors(Jn.max,to.max),Jn.expandByPoint(fn)):(Jn.expandByPoint(to.min),Jn.expandByPoint(to.max))}Jn.getCenter(i);let a=0;for(let l=0,c=e.count;l<c;l++)fn.fromBufferAttribute(e,l),a=Math.max(a,i.distanceToSquared(fn));if(t)for(let l=0,c=t.length;l<c;l++){const h=t[l],f=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)fn.fromBufferAttribute(h,d),f&&(Ks.fromBufferAttribute(e,d),fn.add(Ks)),a=Math.max(a,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),h=[],f=[];for(let $=0;$<i.count;$++)h[$]=new Y,f[$]=new Y;const d=new Y,g=new Y,m=new Y,_=new lt,x=new lt,M=new lt,E=new Y,S=new Y;function y($,R,C){d.fromBufferAttribute(i,$),g.fromBufferAttribute(i,R),m.fromBufferAttribute(i,C),_.fromBufferAttribute(l,$),x.fromBufferAttribute(l,R),M.fromBufferAttribute(l,C),g.sub(d),m.sub(d),x.sub(_),M.sub(_);const G=1/(x.x*M.y-M.x*x.y);isFinite(G)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(m,-x.y).multiplyScalar(G),S.copy(m).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(G),h[$].add(E),h[R].add(E),h[C].add(E),f[$].add(S),f[R].add(S),f[C].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let $=0,R=L.length;$<R;++$){const C=L[$],G=C.start,ee=C.count;for(let re=G,ce=G+ee;re<ce;re+=3)y(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const P=new Y,A=new Y,z=new Y,I=new Y;function B($){z.fromBufferAttribute(a,$),I.copy(z);const R=h[$];P.copy(R),P.sub(z.multiplyScalar(z.dot(R))).normalize(),A.crossVectors(I,R);const G=A.dot(f[$])<0?-1:1;c.setXYZW($,P.x,P.y,P.z,G)}for(let $=0,R=L.length;$<R;++$){const C=L[$],G=C.start,ee=C.count;for(let re=G,ce=G+ee;re<ce;re+=3)B(e.getX(re+0)),B(e.getX(re+1)),B(e.getX(re+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const a=new Y,l=new Y,c=new Y,h=new Y,f=new Y,d=new Y,g=new Y,m=new Y;if(e)for(let _=0,x=e.count;_<x;_+=3){const M=e.getX(_+0),E=e.getX(_+1),S=e.getX(_+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),g.subVectors(c,l),m.subVectors(a,l),g.cross(m),h.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),h.add(g),f.add(g),d.add(g),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,x=t.count;_<x;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),g.subVectors(c,l),m.subVectors(a,l),g.cross(m),i.setXYZ(_+0,g.x,g.y,g.z),i.setXYZ(_+1,g.x,g.y,g.z),i.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(h,f){const d=h.array,g=h.itemSize,m=h.normalized,_=new d.constructor(f.length*g);let x=0,M=0;for(let E=0,S=f.length;E<S;E++){h.isInterleavedBufferAttribute?x=f[E]*h.data.stride+h.offset:x=f[E]*g;for(let y=0;y<g;y++)_[M++]=d[x++]}return new ui(_,g,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,i=this.index.array,a=this.attributes;for(const h in a){const f=a[h],d=e(f,i);t.setAttribute(h,d)}const l=this.morphAttributes;for(const h in l){const f=[],d=l[h];for(let g=0,m=d.length;g<m;g++){const _=d[g],x=e(_,i);f.push(x)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,f=c.length;h<f;h++){const d=c[h];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],g=[];for(let m=0,_=d.length;m<_;m++){const x=d[m];g.push(x.toJSON(e.data))}g.length>0&&(a[f]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const d in a){const g=a[d];this.setAttribute(d,g.clone(t))}const l=e.morphAttributes;for(const d in l){const g=[],m=l[d];for(let _=0,x=m.length;_<x;_++)g.push(m[_].clone(t));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,g=c.length;d<g;d++){const m=c[d];this.addGroup(m.start,m.count,m.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fg=new Mt,ns=new pa,Bl=new rr,pg=new Y,zl=new Y,Vl=new Y,Hl=new Y,Ah=new Y,Gl=new Y,mg=new Y,Wl=new Y;class Un extends Jt{constructor(e=new bi,t=new W_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(l&&h){Gl.set(0,0,0);for(let f=0,d=l.length;f<d;f++){const g=h[f],m=l[f];g!==0&&(Ah.fromBufferAttribute(m,e),c?Gl.addScaledVector(Ah,g):Gl.addScaledVector(Ah.sub(t),g))}t.add(Gl)}return t}raycast(e,t){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(l),ns.copy(e.ray).recast(e.near),!(Bl.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Bl,pg)===null||ns.origin.distanceToSquared(pg)>(e.far-e.near)**2))&&(fg.copy(l).invert(),ns.copy(e.ray).applyMatrix4(fg),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,i){let a;const l=this.geometry,c=this.material,h=l.index,f=l.attributes.position,d=l.attributes.uv,g=l.attributes.uv1,m=l.attributes.normal,_=l.groups,x=l.drawRange;if(h!==null)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],y=c[S.materialIndex],L=Math.max(S.start,x.start),P=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let A=L,z=P;A<z;A+=3){const I=h.getX(A),B=h.getX(A+1),$=h.getX(A+2);a=Xl(this,y,e,i,d,g,m,I,B,$),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,x.start),E=Math.min(h.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const L=h.getX(S),P=h.getX(S+1),A=h.getX(S+2);a=Xl(this,c,e,i,d,g,m,L,P,A),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],y=c[S.materialIndex],L=Math.max(S.start,x.start),P=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let A=L,z=P;A<z;A+=3){const I=A,B=A+1,$=A+2;a=Xl(this,y,e,i,d,g,m,I,B,$),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const L=S,P=S+1,A=S+2;a=Xl(this,c,e,i,d,g,m,L,P,A),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function vS(s,e,t,i,a,l,c,h){let f;if(e.side===Xn?f=i.intersectTriangle(c,l,a,!0,h):f=i.intersectTriangle(a,l,c,e.side===kr,h),f===null)return null;Wl.copy(h),Wl.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(Wl);return d<t.near||d>t.far?null:{distance:d,point:Wl.clone(),object:s}}function Xl(s,e,t,i,a,l,c,h,f,d){s.getVertexPosition(h,zl),s.getVertexPosition(f,Vl),s.getVertexPosition(d,Hl);const g=vS(s,e,t,i,zl,Vl,Hl,mg);if(g){const m=new Y;Mi.getBarycoord(mg,zl,Vl,Hl,m),a&&(g.uv=Mi.getInterpolatedAttribute(a,h,f,d,m,new lt)),l&&(g.uv1=Mi.getInterpolatedAttribute(l,h,f,d,m,new lt)),c&&(g.normal=Mi.getInterpolatedAttribute(c,h,f,d,m,new Y),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:f,c:d,normal:new Y,materialIndex:0};Mi.getNormal(zl,Vl,Hl,_.normal),g.face=_,g.barycoord=m}return g}class xo extends bi{constructor(e=1,t=1,i=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:l,depthSegments:c};const h=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const f=[],d=[],g=[],m=[];let _=0,x=0;M("z","y","x",-1,-1,i,t,e,c,l,0),M("z","y","x",1,-1,i,t,-e,c,l,1),M("x","z","y",1,1,e,i,t,a,c,2),M("x","z","y",1,-1,e,i,-t,a,c,3),M("x","y","z",1,-1,e,t,i,a,l,4),M("x","y","z",-1,-1,e,t,-i,a,l,5),this.setIndex(f),this.setAttribute("position",new Nn(d,3)),this.setAttribute("normal",new Nn(g,3)),this.setAttribute("uv",new Nn(m,2));function M(E,S,y,L,P,A,z,I,B,$,R){const C=A/B,G=z/$,ee=A/2,re=z/2,ce=I/2,he=B+1,oe=$+1;let fe=0,H=0;const le=new Y;for(let se=0;se<oe;se++){const F=se*G-re;for(let O=0;O<he;O++){const pe=O*C-ee;le[E]=pe*L,le[S]=F*P,le[y]=ce,d.push(le.x,le.y,le.z),le[E]=0,le[S]=0,le[y]=I>0?1:-1,g.push(le.x,le.y,le.z),m.push(O/B),m.push(1-se/$),fe+=1}}for(let se=0;se<$;se++)for(let F=0;F<B;F++){const O=_+F+he*se,pe=_+F+he*(se+1),ye=_+(F+1)+he*(se+1),Ee=_+(F+1)+he*se;f.push(O,pe,Ee),f.push(pe,ye,Ee),H+=6}h.addGroup(x,H,R),x+=H,_+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fa(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Dn(s){const e={};for(let t=0;t<s.length;t++){const i=fa(s[t]);for(const a in i)e[a]=i[a]}return e}function yS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Y_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const xS={clone:fa,merge:Dn};var SS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Or extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SS,this.fragmentShader=MS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=yS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class q_ extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new Y,gg=new lt,_g=new lt;class Wn extends q_{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,gg,_g),t.subVectors(_g,gg)}setViewOffset(e,t,i,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uo*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;l+=c.offsetX*a/f,t-=c.offsetY*i/d,a*=c.width/f,i*=c.height/d}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zs=-90,Js=1;class ES extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Wn(Zs,Js,e,t);a.layers=this.layers,this.add(a);const l=new Wn(Zs,Js,e,t);l.layers=this.layers,this.add(l);const c=new Wn(Zs,Js,e,t);c.layers=this.layers,this.add(c);const h=new Wn(Zs,Js,e,t);h.layers=this.layers,this.add(h);const f=new Wn(Zs,Js,e,t);f.layers=this.layers,this.add(f);const d=new Wn(Zs,Js,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,l,c,h,f]=t;for(const d of t)this.remove(d);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===pc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,h,f,d,g]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,l),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,h),e.setRenderTarget(i,3,a),e.render(t,f),e.setRenderTarget(i,4,a),e.render(t,d),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),e.render(t,g),e.setRenderTarget(m,_,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class $_ extends gn{constructor(e=[],t=ca,i,a,l,c,h,f,d,g){super(e,t,i,a,l,c,h,f,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wS extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new $_(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new xo(5,5,5),l=new Or({name:"CubemapFromEquirect",uniforms:fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:Nr});l.uniforms.tEquirect.value=t;const c=new Un(a,l),h=t.minFilter;return t.minFilter===hs&&(t.minFilter=Ni),new ES(1,10,this).update(e,c),t.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(l)}}class ia extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TS={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,l=null,c=null;const h=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),y=this._getHandJoint(d,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],_=g.position.distanceTo(m.position),x=.02,M=.005;d.inputState.pinching&&_>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));h!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(TS)))}return h!==null&&(h.visible=a!==null),f!==null&&(f.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ia;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class bS extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Eb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fd,this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new Y;class K_{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array),l=Nt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new ui(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new K_(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vg=new Y,yg=new Pt,xg=new Pt,AS=new Y,Sg=new Mt,jl=new Y,Rh=new rr,Mg=new Mt,Ph=new pa;class wb extends Un{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qm,this.bindMatrix=new Mt,this.bindMatrixInverse=new Mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,jl),this.boundingBox.expandByPoint(jl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,jl),this.boundingSphere.expandByPoint(jl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,a=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rh.copy(this.boundingSphere),Rh.applyMatrix4(a),e.ray.intersectsSphere(Rh)!==!1&&(Mg.copy(a).invert(),Ph.copy(e.ray).applyMatrix4(Mg),!(this.boundingBox!==null&&Ph.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ph)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Pt,t=this.geometry.attributes.skinWeight;for(let i=0,a=t.count;i<a;i++){e.fromBufferAttribute(t,i);const l=1/e.manhattanLength();l!==1/0?e.multiplyScalar(l):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,a=this.geometry;yg.fromBufferAttribute(a.attributes.skinIndex,e),xg.fromBufferAttribute(a.attributes.skinWeight,e),vg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let l=0;l<4;l++){const c=xg.getComponent(l);if(c!==0){const h=yg.getComponent(l);Sg.multiplyMatrices(i.bones[h].matrixWorld,i.boneInverses[h]),t.addScaledVector(AS.copy(vg).applyMatrix4(Sg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class CS extends Jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Z_ extends gn{constructor(e=null,t=1,i=1,a,l,c,h,f,d=Qn,g=Qn,m,_){super(null,c,h,f,d,g,a,l,m,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eg=new Mt,RS=new Mt;class J_{constructor(e=[],t=[]){this.uuid=wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,a=this.bones.length;i<a;i++)this.boneInverses.push(new Mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Mt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,a=this.boneTexture;for(let l=0,c=e.length;l<c;l++){const h=e[l]?e[l].matrixWorld:RS;Eg.multiplyMatrices(h,t[l]),Eg.toArray(i,l*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new J_(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Z_(t,e,e,ci,Ei);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const a=this.bones[t];if(a.name===e)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,a=e.bones.length;i<a;i++){const l=e.bones[i];let c=t[l];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",l),c=new CS),this.bones.push(c),this.boneInverses.push(new Mt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let a=0,l=t.length;a<l;a++){const c=t[a];e.bones.push(c.uuid);const h=i[a];e.boneInverses.push(h.toArray())}return e}}class wg extends ui{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qs=new Mt,Tg=new Mt,Yl=[],bg=new Fi,PS=new Mt,no=new Un,io=new rr;class Tb extends Un{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wg(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,PS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qs),bg.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(bg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qs),io.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,l=i.length+1,c=e*l+1;for(let h=0;h<i.length;h++)i[h]=a[c+h]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(no.geometry=this.geometry,no.material=this.material,no.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),io.copy(this.boundingSphere),io.applyMatrix4(i),e.ray.intersectsSphere(io)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,Qs),Tg.multiplyMatrices(i,Qs),no.matrixWorld=Tg,no.raycast(e,Yl);for(let c=0,h=Yl.length;c<h;c++){const f=Yl[c];f.instanceId=l,f.object=this,t.push(f)}Yl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new Z_(new Float32Array(a*this.count),a,this.count,Yd,Ei));const l=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const h=this.geometry.morphTargetsRelative?1:1-c,f=a*e;l[f]=h,l.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Lh=new Y,LS=new Y,DS=new mt;class Lr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Lh.subVectors(i,t).cross(LS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Lh),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||DS.getNormalMatrix(e),a=this.coplanarPoint(Lh).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new rr,IS=new lt(.5,.5),ql=new Y;class tf{constructor(e=new Lr,t=new Lr,i=new Lr,a=new Lr,l=new Lr,c=new Lr){this.planes=[e,t,i,a,l,c]}set(e,t,i,a,l,c){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(i),h[3].copy(a),h[4].copy(l),h[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ui,i=!1){const a=this.planes,l=e.elements,c=l[0],h=l[1],f=l[2],d=l[3],g=l[4],m=l[5],_=l[6],x=l[7],M=l[8],E=l[9],S=l[10],y=l[11],L=l[12],P=l[13],A=l[14],z=l[15];if(a[0].setComponents(d-c,x-g,y-M,z-L).normalize(),a[1].setComponents(d+c,x+g,y+M,z+L).normalize(),a[2].setComponents(d+h,x+m,y+E,z+P).normalize(),a[3].setComponents(d-h,x-m,y-E,z-P).normalize(),i)a[4].setComponents(f,_,S,A).normalize(),a[5].setComponents(d-f,x-_,y-S,z-A).normalize();else if(a[4].setComponents(d-f,x-_,y-S,z-A).normalize(),t===Ui)a[5].setComponents(d+f,x+_,y+S,z+A).normalize();else if(t===pc)a[5].setComponents(f,_,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const t=IS.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(ql.x=a.normal.x>0?e.max.x:e.min.x,ql.y=a.normal.y>0?e.max.y:e.min.y,ql.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cc extends Oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mc=new Y,gc=new Y,Ag=new Mt,ro=new pa,$l=new rr,Dh=new Y,Cg=new Y;class Q_ extends Jt{constructor(e=new bi,t=new cc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,l=t.count;a<l;a++)mc.fromBufferAttribute(t,a-1),gc.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=mc.distanceTo(gc);e.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(a),$l.radius+=l,e.ray.intersectsSphere($l)===!1)return;Ag.copy(a).invert(),ro.copy(e.ray).applyMatrix4(Ag);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,d=this.isLineSegments?2:1,g=i.index,_=i.attributes.position;if(g!==null){const x=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let E=x,S=M-1;E<S;E+=d){const y=g.getX(E),L=g.getX(E+1),P=Kl(this,e,ro,f,y,L,E);P&&t.push(P)}if(this.isLineLoop){const E=g.getX(M-1),S=g.getX(x),y=Kl(this,e,ro,f,E,S,M-1);y&&t.push(y)}}else{const x=Math.max(0,c.start),M=Math.min(_.count,c.start+c.count);for(let E=x,S=M-1;E<S;E+=d){const y=Kl(this,e,ro,f,E,E+1,E);y&&t.push(y)}if(this.isLineLoop){const E=Kl(this,e,ro,f,M-1,x,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Kl(s,e,t,i,a,l,c){const h=s.geometry.attributes.position;if(mc.fromBufferAttribute(h,a),gc.fromBufferAttribute(h,l),t.distanceSqToSegment(mc,gc,Dh,Cg)>i)return;Dh.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(Dh);if(!(d<e.near||d>e.far))return{distance:d,point:Cg.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const Rg=new Y,Pg=new Y;class Lg extends Q_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,l=t.count;a<l;a+=2)Rg.fromBufferAttribute(t,a),Pg.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Rg.distanceTo(Pg);e.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bb extends Q_{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lo extends Oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dg=new Mt,Od=new pa,Zl=new rr,Jl=new Y;class Ih extends Jt{constructor(e=new bi,t=new lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(a),Zl.radius+=l,e.ray.intersectsSphere(Zl)===!1)return;Dg.copy(a).invert(),Od.copy(e.ray).applyMatrix4(Dg);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,d=i.index,m=i.attributes.position;if(d!==null){const _=Math.max(0,c.start),x=Math.min(d.count,c.start+c.count);for(let M=_,E=x;M<E;M++){const S=d.getX(M);Jl.fromBufferAttribute(m,S),Ig(Jl,S,f,a,e,t,this)}}else{const _=Math.max(0,c.start),x=Math.min(m.count,c.start+c.count);for(let M=_,E=x;M<E;M++)Jl.fromBufferAttribute(m,M),Ig(Jl,M,f,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Ig(s,e,t,i,a,l,c){const h=Od.distanceSqToPoint(s);if(h<t){const f=new Y;Od.closestPointToPoint(s,f),f.applyMatrix4(i);const d=a.ray.origin.distanceTo(f);if(d<a.near||d>a.far)return;l.push({distance:d,distanceToRay:Math.sqrt(h),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class NS extends gn{constructor(e,t,i,a,l,c,h,f,d){super(e,t,i,a,l,c,h,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class e0 extends gn{constructor(e,t,i=ds,a,l,c,h=Qn,f=Qn,d,g=mo,m=1){if(g!==mo&&g!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:m};super(_,a,l,c,h,f,g,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class t0 extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xc extends bi{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const l=e/2,c=t/2,h=Math.floor(i),f=Math.floor(a),d=h+1,g=f+1,m=e/h,_=t/f,x=[],M=[],E=[],S=[];for(let y=0;y<g;y++){const L=y*_-c;for(let P=0;P<d;P++){const A=P*m-l;M.push(A,-L,0),E.push(0,0,1),S.push(P/h),S.push(1-y/f)}}for(let y=0;y<f;y++)for(let L=0;L<h;L++){const P=L+d*y,A=L+d*(y+1),z=L+1+d*(y+1),I=L+1+d*y;x.push(P,A,I),x.push(A,z,I)}this.setIndex(x),this.setAttribute("position",new Nn(M,3)),this.setAttribute("normal",new Nn(E,3)),this.setAttribute("uv",new Nn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.width,e.height,e.widthSegments,e.heightSegments)}}class n0 extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zd,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ab extends n0{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class US extends Oi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pt(16777215),this.specular=new pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zd,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kS extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FS extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ql(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function OS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function BS(s){function e(a,l){return s[a]-s[l]}const t=s.length,i=new Array(t);for(let a=0;a!==t;++a)i[a]=a;return i.sort(e),i}function Ng(s,e,t){const i=s.length,a=new s.constructor(i);for(let l=0,c=0;c!==i;++l){const h=t[l]*e;for(let f=0;f!==e;++f)a[c++]=s[h+f]}return a}function i0(s,e,t,i){let a=1,l=s[0];for(;l!==void 0&&l[i]===void 0;)l=s[a++];if(l===void 0)return;let c=l[i];if(c!==void 0)if(Array.isArray(c))do c=l[i],c!==void 0&&(e.push(l.time),t.push(...c)),l=s[a++];while(l!==void 0);else if(c.toArray!==void 0)do c=l[i],c!==void 0&&(e.push(l.time),c.toArray(t,t.length)),l=s[a++];while(l!==void 0);else do c=l[i],c!==void 0&&(e.push(l.time),t.push(c)),l=s[a++];while(l!==void 0)}class Sc{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,a=t[i],l=t[i-1];e:{t:{let c;n:{i:if(!(e<a)){for(let h=i+2;;){if(a===void 0){if(e<l)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===h)break;if(l=a,a=t[++i],e<a)break t}c=t.length;break n}if(!(e>=l)){const h=t[1];e<h&&(i=2,l=h);for(let f=i-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(a=l,l=t[--i-1],e>=l)break t}c=i,i=0;break n}break e}for(;i<c;){const h=i+c>>>1;e<t[h]?c=h:i=h+1}if(a=t[i],l=t[i-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,l,a)}return this.interpolate_(i,l,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,l=e*a;for(let c=0;c!==a;++c)t[c]=i[l+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zS extends Sc{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$m,endingEnd:$m}}intervalChanged_(e,t,i){const a=this.parameterPositions;let l=e-2,c=e+1,h=a[l],f=a[c];if(h===void 0)switch(this.getSettings_().endingStart){case Km:l=e,h=2*t-i;break;case Zm:l=a.length-2,h=t+a[l]-a[l+1];break;default:l=e,h=i}if(f===void 0)switch(this.getSettings_().endingEnd){case Km:c=e,f=2*i-t;break;case Zm:c=1,f=i+a[1]-a[0];break;default:c=e-1,f=t}const d=(i-t)*.5,g=this.valueSize;this._weightPrev=d/(t-h),this._weightNext=d/(f-i),this._offsetPrev=l*g,this._offsetNext=c*g}interpolate_(e,t,i,a){const l=this.resultBuffer,c=this.sampleValues,h=this.valueSize,f=e*h,d=f-h,g=this._offsetPrev,m=this._offsetNext,_=this._weightPrev,x=this._weightNext,M=(i-t)/(a-t),E=M*M,S=E*M,y=-_*S+2*_*E-_*M,L=(1+_)*S+(-1.5-2*_)*E+(-.5+_)*M+1,P=(-1-x)*S+(1.5+x)*E+.5*M,A=x*S-x*E;for(let z=0;z!==h;++z)l[z]=y*c[g+z]+L*c[d+z]+P*c[f+z]+A*c[m+z];return l}}class VS extends Sc{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const l=this.resultBuffer,c=this.sampleValues,h=this.valueSize,f=e*h,d=f-h,g=(i-t)/(a-t),m=1-g;for(let _=0;_!==h;++_)l[_]=c[d+_]*m+c[f+_]*g;return l}}class HS extends Sc{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ai{constructor(e,t,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ql(t,this.TimeBufferType),this.values=Ql(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ql(e.times,Array),values:Ql(e.values,Array)};const a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new HS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new VS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case dc:t=this.InterpolantFactoryMethodDiscrete;break;case kd:t=this.InterpolantFactoryMethodLinear;break;case oh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dc;case this.InterpolantFactoryMethodLinear:return kd;case this.InterpolantFactoryMethodSmooth:return oh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e}return this}trim(e,t){const i=this.times,a=i.length;let l=0,c=a-1;for(;l!==a&&i[l]<e;)++l;for(;c!==-1&&i[c]>t;)--c;if(++c,l!==0||c!==a){l>=c&&(c=Math.max(c,1),l=c-1);const h=this.getValueSize();this.times=i.slice(l,c),this.values=this.values.slice(l*h,c*h)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,a=this.values,l=i.length;l===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let h=0;h!==l;h++){const f=i[h];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,f),e=!1;break}if(c!==null&&c>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,f,c),e=!1;break}c=f}if(a!==void 0&&OS(a))for(let h=0,f=a.length;h!==f;++h){const d=a[h];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===oh,l=e.length-1;let c=1;for(let h=1;h<l;++h){let f=!1;const d=e[h],g=e[h+1];if(d!==g&&(h!==1||d!==e[0]))if(a)f=!0;else{const m=h*i,_=m-i,x=m+i;for(let M=0;M!==i;++M){const E=t[m+M];if(E!==t[_+M]||E!==t[x+M]){f=!0;break}}}if(f){if(h!==c){e[c]=e[h];const m=h*i,_=c*i;for(let x=0;x!==i;++x)t[_+x]=t[m+x]}++c}}if(l>0){e[c]=e[l];for(let h=l*i,f=c*i,d=0;d!==i;++d)t[f+d]=t[h+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,a=new i(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}}Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=kd;class ma extends Ai{constructor(e,t,i){super(e,t,i)}}ma.prototype.ValueTypeName="bool";ma.prototype.ValueBufferType=Array;ma.prototype.DefaultInterpolation=dc;ma.prototype.InterpolantFactoryMethodLinear=void 0;ma.prototype.InterpolantFactoryMethodSmooth=void 0;class r0 extends Ai{constructor(e,t,i,a){super(e,t,i,a)}}r0.prototype.ValueTypeName="color";class _c extends Ai{constructor(e,t,i,a){super(e,t,i,a)}}_c.prototype.ValueTypeName="number";class GS extends Sc{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const l=this.resultBuffer,c=this.sampleValues,h=this.valueSize,f=(i-t)/(a-t);let d=e*h;for(let g=d+h;d!==g;d+=4)Fr.slerpFlat(l,0,c,d-h,c,d,f);return l}}class Mc extends Ai{constructor(e,t,i,a){super(e,t,i,a)}InterpolantFactoryMethodLinear(e){return new GS(this.times,this.values,this.getValueSize(),e)}}Mc.prototype.ValueTypeName="quaternion";Mc.prototype.InterpolantFactoryMethodSmooth=void 0;class ga extends Ai{constructor(e,t,i){super(e,t,i)}}ga.prototype.ValueTypeName="string";ga.prototype.ValueBufferType=Array;ga.prototype.DefaultInterpolation=dc;ga.prototype.InterpolantFactoryMethodLinear=void 0;ga.prototype.InterpolantFactoryMethodSmooth=void 0;class vc extends Ai{constructor(e,t,i,a){super(e,t,i,a)}}vc.prototype.ValueTypeName="vector";class Cb{constructor(e="",t=-1,i=[],a=bx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=a,this.uuid=wi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,a=1/(e.fps||1);for(let c=0,h=i.length;c!==h;++c)t.push(XS(i[c]).scale(a));const l=new this(e.name,e.duration,t,e.blendMode);return l.uuid=e.uuid,l.userData=JSON.parse(e.userData||"{}"),l}static toJSON(e){const t=[],i=e.tracks,a={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let l=0,c=i.length;l!==c;++l)t.push(Ai.toJSON(i[l]));return a}static CreateFromMorphTargetSequence(e,t,i,a){const l=t.length,c=[];for(let h=0;h<l;h++){let f=[],d=[];f.push((h+l-1)%l,h,(h+1)%l),d.push(0,1,0);const g=BS(f);f=Ng(f,1,g),d=Ng(d,1,g),!a&&f[0]===0&&(f.push(l),d.push(d[0])),c.push(new _c(".morphTargetInfluences["+t[h].name+"]",f,d).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const a=e;i=a.geometry&&a.geometry.animations||a.animations}for(let a=0;a<i.length;a++)if(i[a].name===t)return i[a];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const a={},l=/^([\w-]*?)([\d]+)$/;for(let h=0,f=e.length;h<f;h++){const d=e[h],g=d.name.match(l);if(g&&g.length>1){const m=g[1];let _=a[m];_||(a[m]=_=[]),_.push(d)}}const c=[];for(const h in a)c.push(this.CreateFromMorphTargetSequence(h,a[h],t,i));return c}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(m,_,x,M,E){if(x.length!==0){const S=[],y=[];i0(x,S,y,M),S.length!==0&&E.push(new m(_,S,y))}},a=[],l=e.name||"default",c=e.fps||30,h=e.blendMode;let f=e.length||-1;const d=e.hierarchy||[];for(let m=0;m<d.length;m++){const _=d[m].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const x={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let E=0;E<_[M].morphTargets.length;E++)x[_[M].morphTargets[E]]=-1;for(const E in x){const S=[],y=[];for(let L=0;L!==_[M].morphTargets.length;++L){const P=_[M];S.push(P.time),y.push(P.morphTarget===E?1:0)}a.push(new _c(".morphTargetInfluence["+E+"]",S,y))}f=x.length*c}else{const x=".bones["+t[m].name+"]";i(vc,x+".position",_,"pos",a),i(Mc,x+".quaternion",_,"rot",a),i(vc,x+".scale",_,"scl",a)}}return a.length===0?null:new this(l,f,a,h)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,a=e.length;i!==a;++i){const l=this.tracks[i];t=Math.max(t,l.times[l.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function WS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _c;case"vector":case"vector2":case"vector3":case"vector4":return vc;case"color":return r0;case"quaternion":return Mc;case"bool":case"boolean":return ma;case"string":return ga}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function XS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=WS(s.type);if(s.times===void 0){const t=[],i=[];i0(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const nr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class s0{constructor(e,t,i){const a=this;let l=!1,c=0,h=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(g){h++,l===!1&&a.onStart!==void 0&&a.onStart(g,c,h),l=!0},this.itemEnd=function(g){c++,a.onProgress!==void 0&&a.onProgress(g,c,h),c===h&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return f?f(g):g},this.setURLModifier=function(g){return f=g,this},this.addHandler=function(g,m){return d.push(g,m),this},this.removeHandler=function(g){const m=d.indexOf(g);return m!==-1&&d.splice(m,2),this},this.getHandler=function(g){for(let m=0,_=d.length;m<_;m+=2){const x=d[m],M=d[m+1];if(x.global&&(x.lastIndex=0),x.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const jS=new s0;class _a{constructor(e){this.manager=e!==void 0?e:jS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,l){i.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_a.DEFAULT_MATERIAL_NAME="__DEFAULT";const er={};class YS extends Error{constructor(e,t){super(e),this.response=t}}class qS extends _a{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=nr.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(er[e]!==void 0){er[e].push({onLoad:t,onProgress:i,onError:a});return}er[e]=[],er[e].push({onLoad:t,onProgress:i,onError:a});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,f=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=er[e],m=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=_?parseInt(_):0,M=x!==0;let E=0;const S=new ReadableStream({start(y){L();function L(){m.read().then(({done:P,value:A})=>{if(P)y.close();else{E+=A.byteLength;const z=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:x});for(let I=0,B=g.length;I<B;I++){const $=g[I];$.onProgress&&$.onProgress(z)}y.enqueue(A),L()}},P=>{y.error(P)})}}});return new Response(S)}else throw new YS(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return d.json();default:if(h==="")return d.text();{const m=/charset="?([^;"\s]*)"?/i.exec(h),_=m&&m[1]?m[1].toLowerCase():void 0,x=new TextDecoder(_);return d.arrayBuffer().then(M=>x.decode(M))}}}).then(d=>{nr.add(`file:${e}`,d);const g=er[e];delete er[e];for(let m=0,_=g.length;m<_;m++){const x=g[m];x.onLoad&&x.onLoad(d)}}).catch(d=>{const g=er[e];if(g===void 0)throw this.manager.itemError(e),d;delete er[e];for(let m=0,_=g.length;m<_;m++){const x=g[m];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ea=new WeakMap;class $S extends _a{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=nr.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let m=ea.get(c);m===void 0&&(m=[],ea.set(c,m)),m.push({onLoad:t,onError:a})}return c}const h=_o("img");function f(){g(),t&&t(this);const m=ea.get(this)||[];for(let _=0;_<m.length;_++){const x=m[_];x.onLoad&&x.onLoad(this)}ea.delete(this),l.manager.itemEnd(e)}function d(m){g(),a&&a(m),nr.remove(`image:${e}`);const _=ea.get(this)||[];for(let x=0;x<_.length;x++){const M=_[x];M.onError&&M.onError(m)}ea.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){h.removeEventListener("load",f,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",f,!1),h.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),nr.add(`image:${e}`,h),l.manager.itemStart(e),h.src=e,h}}class Rb extends _a{constructor(e){super(e)}load(e,t,i,a){const l=new gn,c=new $S(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(h){l.image=h,l.needsUpdate=!0,t!==void 0&&t(l)},i,a),l}}class Ec extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class KS extends Ec{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Nh=new Mt,Ug=new Y,kg=new Y;class nf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=ki,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tf,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ug.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ug),kg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kg),t.updateMatrixWorld(),Nh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ZS extends nf{constructor(){super(new Wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=da*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(i!==t.fov||a!==t.aspect||l!==t.far)&&(t.fov=i,t.aspect=a,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Pb extends Ec{constructor(e,t,i=0,a=Math.PI/3,l=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=i,this.angle=a,this.penumbra=l,this.decay=c,this.map=null,this.shadow=new ZS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fg=new Mt,so=new Y,Uh=new Y;class JS extends nf{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,l=e.distance||i.far;l!==i.far&&(i.far=l,i.updateProjectionMatrix()),so.setFromMatrixPosition(e.matrixWorld),i.position.copy(so),Uh.copy(i.position),Uh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Uh),i.updateMatrixWorld(),a.makeTranslation(-so.x,-so.y,-so.z),Fg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fg,i.coordinateSystem,i.reversedDepth)}}class Lb extends Ec{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new JS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class a0 extends q_{constructor(e=-1,t=1,i=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-e,c=i+e,h=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,h-=g*this.view.offsetY,f=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,h,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class QS extends nf{constructor(){super(new a0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eM extends Ec{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new QS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Db{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const kh=new WeakMap;class Ib extends _a{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=nr.get(`image-bitmap:${e}`);if(c!==void 0){if(l.manager.itemStart(e),c.then){c.then(d=>{if(kh.has(c)===!0)a&&a(kh.get(c)),l.manager.itemError(e),l.manager.itemEnd(e);else return t&&t(d),l.manager.itemEnd(e),d});return}return setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader,h.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const f=fetch(e,h).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(d){return nr.add(`image-bitmap:${e}`,d),t&&t(d),l.manager.itemEnd(e),d}).catch(function(d){a&&a(d),kh.set(f,d),nr.remove(`image-bitmap:${e}`),l.manager.itemError(e),l.manager.itemEnd(e)});nr.add(`image-bitmap:${e}`,f),l.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class tM extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const rf="\\[\\]\\.:\\/",nM=new RegExp("["+rf+"]","g"),sf="[^"+rf+"]",iM="[^"+rf.replace("\\.","")+"]",rM=/((?:WC+[\/:])*)/.source.replace("WC",sf),sM=/(WCOD+)?/.source.replace("WCOD",iM),aM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sf),oM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sf),lM=new RegExp("^"+rM+sM+aM+oM+"$"),cM=["material","materials","bones","map"];class uM{constructor(e,t,i){const a=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,l=i.length;a!==l;++a)i[a].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ot{constructor(e,t,i){this.path=t,this.parsedPath=i||Ot.parseTrackName(t),this.node=Ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ot.Composite(e,t,i):new Ot(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nM,"")}static parseTrackName(e){const t=lM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){const l=i.nodeName.substring(a+1);cM.indexOf(l)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=l)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(l){for(let c=0;c<l.length;c++){const h=l[c];if(h.name===t||h.uuid===t)return h;const f=i(h.children);if(f)return f}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let a=0,l=i.length;a!==l;++a)e[t++]=i[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let a=0,l=i.length;a!==l;++a)i[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,l=i.length;a!==l;++a)i[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,l=i.length;a!==l;++a)i[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,a=t.propertyName;let l=t.propertyIndex;if(e||(e=Ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[a];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+a+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(l!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=l}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=a;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ot.Composite=uM;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Og=new Mt;class hM{constructor(e,t,i=0,a=1/0){this.ray=new pa(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new ef,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Og.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Og),this}intersectObject(e,t=!0,i=[]){return Bd(e,this,i,t),i.sort(Bg),i}intersectObjects(e,t=!0,i=[]){for(let a=0,l=e.length;a<l;a++)Bd(e[a],this,i,t);return i.sort(Bg),i}}function Bg(s,e){return s.distance-e.distance}function Bd(s,e,t,i){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){const l=s.children;for(let c=0,h=l.length;c<h;c++)Bd(l[c],e,t,!0)}}class zg{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dM extends ps{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Vg(s,e,t,i){const a=fM(i);switch(t){case F_:return s*e;case Yd:return s*e/a.components*a.byteLength;case qd:return s*e/a.components*a.byteLength;case B_:return s*e*2/a.components*a.byteLength;case $d:return s*e*2/a.components*a.byteLength;case O_:return s*e*3/a.components*a.byteLength;case ci:return s*e*4/a.components*a.byteLength;case Kd:return s*e*4/a.components*a.byteLength;case sc:case ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case oc:case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cd:case hd:return Math.max(s,16)*Math.max(e,8)/4;case ld:case ud:return Math.max(s,8)*Math.max(e,8)/2;case dd:case fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _d:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Md:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rd:case Pd:case Ld:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Dd:case Id:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Nd:case Ud:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fM(s){switch(s){case ki:case I_:return{byteLength:1,components:1};case fo:case N_:case yo:return{byteLength:2,components:1};case Xd:case jd:return{byteLength:2,components:4};case ds:case Wd:case Ei:return{byteLength:4,components:1};case U_:case k_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function o0(){let s=null,e=!1,t=null,i=null;function a(l,c){t(l,c),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function pM(s){const e=new WeakMap;function t(h,f){const d=h.array,g=h.usage,m=d.byteLength,_=s.createBuffer();s.bindBuffer(f,_),s.bufferData(f,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=s.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=s.SHORT;else if(d instanceof Uint32Array)x=s.UNSIGNED_INT;else if(d instanceof Int32Array)x=s.INT;else if(d instanceof Int8Array)x=s.BYTE;else if(d instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:m}}function i(h,f,d){const g=f.array,m=f.updateRanges;if(s.bindBuffer(d,h),m.length===0)s.bufferSubData(d,0,g);else{m.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<m.length;x++){const M=m[_],E=m[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,m[_]=E)}m.length=_+1;for(let x=0,M=m.length;x<M;x++){const E=m[x];s.bufferSubData(d,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(s.deleteBuffer(f.buffer),e.delete(h))}function c(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,t(h,f));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,h,f),d.version=h.version}}return{get:a,remove:l,update:c}}var mM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$M=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ME=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,WE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,r1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,f1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,S1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,U1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,B1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:mM,alphahash_pars_fragment:gM,alphamap_fragment:_M,alphamap_pars_fragment:vM,alphatest_fragment:yM,alphatest_pars_fragment:xM,aomap_fragment:SM,aomap_pars_fragment:MM,batching_pars_vertex:EM,batching_vertex:wM,begin_vertex:TM,beginnormal_vertex:bM,bsdfs:AM,iridescence_fragment:CM,bumpmap_pars_fragment:RM,clipping_planes_fragment:PM,clipping_planes_pars_fragment:LM,clipping_planes_pars_vertex:DM,clipping_planes_vertex:IM,color_fragment:NM,color_pars_fragment:UM,color_pars_vertex:kM,color_vertex:FM,common:OM,cube_uv_reflection_fragment:BM,defaultnormal_vertex:zM,displacementmap_pars_vertex:VM,displacementmap_vertex:HM,emissivemap_fragment:GM,emissivemap_pars_fragment:WM,colorspace_fragment:XM,colorspace_pars_fragment:jM,envmap_fragment:YM,envmap_common_pars_fragment:qM,envmap_pars_fragment:$M,envmap_pars_vertex:KM,envmap_physical_pars_fragment:oE,envmap_vertex:ZM,fog_vertex:JM,fog_pars_vertex:QM,fog_fragment:eE,fog_pars_fragment:tE,gradientmap_pars_fragment:nE,lightmap_pars_fragment:iE,lights_lambert_fragment:rE,lights_lambert_pars_fragment:sE,lights_pars_begin:aE,lights_toon_fragment:lE,lights_toon_pars_fragment:cE,lights_phong_fragment:uE,lights_phong_pars_fragment:hE,lights_physical_fragment:dE,lights_physical_pars_fragment:fE,lights_fragment_begin:pE,lights_fragment_maps:mE,lights_fragment_end:gE,logdepthbuf_fragment:_E,logdepthbuf_pars_fragment:vE,logdepthbuf_pars_vertex:yE,logdepthbuf_vertex:xE,map_fragment:SE,map_pars_fragment:ME,map_particle_fragment:EE,map_particle_pars_fragment:wE,metalnessmap_fragment:TE,metalnessmap_pars_fragment:bE,morphinstance_vertex:AE,morphcolor_vertex:CE,morphnormal_vertex:RE,morphtarget_pars_vertex:PE,morphtarget_vertex:LE,normal_fragment_begin:DE,normal_fragment_maps:IE,normal_pars_fragment:NE,normal_pars_vertex:UE,normal_vertex:kE,normalmap_pars_fragment:FE,clearcoat_normal_fragment_begin:OE,clearcoat_normal_fragment_maps:BE,clearcoat_pars_fragment:zE,iridescence_pars_fragment:VE,opaque_fragment:HE,packing:GE,premultiplied_alpha_fragment:WE,project_vertex:XE,dithering_fragment:jE,dithering_pars_fragment:YE,roughnessmap_fragment:qE,roughnessmap_pars_fragment:$E,shadowmap_pars_fragment:KE,shadowmap_pars_vertex:ZE,shadowmap_vertex:JE,shadowmask_pars_fragment:QE,skinbase_vertex:e1,skinning_pars_vertex:t1,skinning_vertex:n1,skinnormal_vertex:i1,specularmap_fragment:r1,specularmap_pars_fragment:s1,tonemapping_fragment:a1,tonemapping_pars_fragment:o1,transmission_fragment:l1,transmission_pars_fragment:c1,uv_pars_fragment:u1,uv_pars_vertex:h1,uv_vertex:d1,worldpos_vertex:f1,background_vert:p1,background_frag:m1,backgroundCube_vert:g1,backgroundCube_frag:_1,cube_vert:v1,cube_frag:y1,depth_vert:x1,depth_frag:S1,distanceRGBA_vert:M1,distanceRGBA_frag:E1,equirect_vert:w1,equirect_frag:T1,linedashed_vert:b1,linedashed_frag:A1,meshbasic_vert:C1,meshbasic_frag:R1,meshlambert_vert:P1,meshlambert_frag:L1,meshmatcap_vert:D1,meshmatcap_frag:I1,meshnormal_vert:N1,meshnormal_frag:U1,meshphong_vert:k1,meshphong_frag:F1,meshphysical_vert:O1,meshphysical_frag:B1,meshtoon_vert:z1,meshtoon_frag:V1,points_vert:H1,points_frag:G1,shadow_vert:W1,shadow_frag:X1,sprite_vert:j1,sprite_frag:Y1},ke={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Di={basic:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new pt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Dn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Dn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Dn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new pt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Dn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Dn([ke.points,ke.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Dn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Dn([ke.common,ke.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Dn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Dn([ke.sprite,ke.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Dn([ke.common,ke.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Dn([ke.lights,ke.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Di.physical={uniforms:Dn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const ec={r:0,b:0,g:0},rs=new Ti,q1=new Mt;function $1(s,e,t,i,a,l,c){const h=new pt(0);let f=l===!0?0:1,d,g,m=null,_=0,x=null;function M(P){let A=P.isScene===!0?P.background:null;return A&&A.isTexture&&(A=(P.backgroundBlurriness>0?t:e).get(A)),A}function E(P){let A=!1;const z=M(P);z===null?y(h,f):z&&z.isColor&&(y(z,1),A=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(P,A){const z=M(A);z&&(z.isCubeTexture||z.mapping===yc)?(g===void 0&&(g=new Un(new xo(1,1,1),new Or({name:"BackgroundCubeMaterial",uniforms:fa(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,B,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),rs.copy(A.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(q1.makeRotationFromEuler(rs)),g.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Ft,(m!==z||_!==z.version||x!==s.toneMapping)&&(g.material.needsUpdate=!0,m=z,_=z.version,x=s.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(d===void 0&&(d=new Un(new xc(2,2),new Or({name:"BackgroundMaterial",uniforms:fa(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=z,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Ft,z.matrixAutoUpdate===!0&&z.updateMatrix(),d.material.uniforms.uvTransform.value.copy(z.matrix),(m!==z||_!==z.version||x!==s.toneMapping)&&(d.material.needsUpdate=!0,m=z,_=z.version,x=s.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function y(P,A){P.getRGB(ec,Y_(s)),i.buffers.color.setClear(ec.r,ec.g,ec.b,A,c)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,A=1){h.set(P),f=A,y(h,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,y(h,f)},render:E,addToRenderList:S,dispose:L}}function K1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=_(null);let l=a,c=!1;function h(C,G,ee,re,ce){let he=!1;const oe=m(re,ee,G);l!==oe&&(l=oe,d(l.object)),he=x(C,re,ee,ce),he&&M(C,re,ee,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,A(C,G,ee,re),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function f(){return s.createVertexArray()}function d(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function m(C,G,ee){const re=ee.wireframe===!0;let ce=i[C.id];ce===void 0&&(ce={},i[C.id]=ce);let he=ce[G.id];he===void 0&&(he={},ce[G.id]=he);let oe=he[re];return oe===void 0&&(oe=_(f()),he[re]=oe),oe}function _(C){const G=[],ee=[],re=[];for(let ce=0;ce<t;ce++)G[ce]=0,ee[ce]=0,re[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ee,attributeDivisors:re,object:C,attributes:{},index:null}}function x(C,G,ee,re){const ce=l.attributes,he=G.attributes;let oe=0;const fe=ee.getAttributes();for(const H in fe)if(fe[H].location>=0){const se=ce[H];let F=he[H];if(F===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),se===void 0||se.attribute!==F||F&&se.data!==F.data)return!0;oe++}return l.attributesNum!==oe||l.index!==re}function M(C,G,ee,re){const ce={},he=G.attributes;let oe=0;const fe=ee.getAttributes();for(const H in fe)if(fe[H].location>=0){let se=he[H];se===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const F={};F.attribute=se,se&&se.data&&(F.data=se.data),ce[H]=F,oe++}l.attributes=ce,l.attributesNum=oe,l.index=re}function E(){const C=l.newAttributes;for(let G=0,ee=C.length;G<ee;G++)C[G]=0}function S(C){y(C,0)}function y(C,G){const ee=l.newAttributes,re=l.enabledAttributes,ce=l.attributeDivisors;ee[C]=1,re[C]===0&&(s.enableVertexAttribArray(C),re[C]=1),ce[C]!==G&&(s.vertexAttribDivisor(C,G),ce[C]=G)}function L(){const C=l.newAttributes,G=l.enabledAttributes;for(let ee=0,re=G.length;ee<re;ee++)G[ee]!==C[ee]&&(s.disableVertexAttribArray(ee),G[ee]=0)}function P(C,G,ee,re,ce,he,oe){oe===!0?s.vertexAttribIPointer(C,G,ee,ce,he):s.vertexAttribPointer(C,G,ee,re,ce,he)}function A(C,G,ee,re){E();const ce=re.attributes,he=ee.getAttributes(),oe=G.defaultAttributeValues;for(const fe in he){const H=he[fe];if(H.location>=0){let le=ce[fe];if(le===void 0&&(fe==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),fe==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const se=le.normalized,F=le.itemSize,O=e.get(le);if(O===void 0)continue;const pe=O.buffer,ye=O.type,Ee=O.bytesPerElement,K=ye===s.INT||ye===s.UNSIGNED_INT||le.gpuType===Wd;if(le.isInterleavedBufferAttribute){const ae=le.data,_e=ae.stride,De=le.offset;if(ae.isInstancedInterleavedBuffer){for(let Ie=0;Ie<H.locationSize;Ie++)y(H.location+Ie,ae.meshPerAttribute);C.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ie=0;Ie<H.locationSize;Ie++)S(H.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let Ie=0;Ie<H.locationSize;Ie++)P(H.location+Ie,F/H.locationSize,ye,se,_e*Ee,(De+F/H.locationSize*Ie)*Ee,K)}else{if(le.isInstancedBufferAttribute){for(let ae=0;ae<H.locationSize;ae++)y(H.location+ae,le.meshPerAttribute);C.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ae=0;ae<H.locationSize;ae++)S(H.location+ae);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let ae=0;ae<H.locationSize;ae++)P(H.location+ae,F/H.locationSize,ye,se,F*Ee,F/H.locationSize*ae*Ee,K)}}else if(oe!==void 0){const se=oe[fe];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(H.location,se);break;case 3:s.vertexAttrib3fv(H.location,se);break;case 4:s.vertexAttrib4fv(H.location,se);break;default:s.vertexAttrib1fv(H.location,se)}}}}L()}function z(){$();for(const C in i){const G=i[C];for(const ee in G){const re=G[ee];for(const ce in re)g(re[ce].object),delete re[ce];delete G[ee]}delete i[C]}}function I(C){if(i[C.id]===void 0)return;const G=i[C.id];for(const ee in G){const re=G[ee];for(const ce in re)g(re[ce].object),delete re[ce];delete G[ee]}delete i[C.id]}function B(C){for(const G in i){const ee=i[G];if(ee[C.id]===void 0)continue;const re=ee[C.id];for(const ce in re)g(re[ce].object),delete re[ce];delete ee[C.id]}}function $(){R(),c=!0,l!==a&&(l=a,d(l.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:$,resetDefaultState:R,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfProgram:B,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function Z1(s,e,t){let i;function a(d){i=d}function l(d,g){s.drawArrays(i,d,g),t.update(g,i,1)}function c(d,g,m){m!==0&&(s.drawArraysInstanced(i,d,g,m),t.update(g,i,m))}function h(d,g,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,g,0,m);let x=0;for(let M=0;M<m;M++)x+=g[M];t.update(x,i,1)}function f(d,g,m,_){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<d.length;M++)c(d[M],g[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(i,d,0,g,0,_,0,m);let M=0;for(let E=0;E<m;E++)M+=g[E]*_[E];t.update(M,i,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function J1(s,e,t,i){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(B){return!(B!==ci&&i.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const $=B===yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ki&&i.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ei&&!$)}function f(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const g=f(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const m=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=M>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:m,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:z,maxSamples:I}}function Q1(s){const e=this;let t=null,i=0,a=!1,l=!1;const c=new Lr,h=new mt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const x=m.length!==0||_||i!==0||a;return a=_,i=m.length,x},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(m,_){t=g(m,_,0)},this.setState=function(m,_,x){const M=m.clippingPlanes,E=m.clipIntersection,S=m.clipShadows,y=s.get(m);if(!a||M===null||M.length===0||l&&!S)l?g(null):d();else{const L=l?0:i,P=L*4;let A=y.clippingState||null;f.value=A,A=g(M,_,P,x);for(let z=0;z!==P;++z)A[z]=t[z];y.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(m,_,x,M){const E=m!==null?m.length:0;let S=null;if(E!==0){if(S=f.value,M!==!0||S===null){const y=x+E*4,L=_.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,A=x;P!==E;++P,A+=4)c.copy(m[P]).applyMatrix4(L,h),c.normal.toArray(S,A),S[A+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function ew(s){let e=new WeakMap;function t(c,h){return h===rd?c.mapping=ca:h===sd&&(c.mapping=ua),c}function i(c){if(c&&c.isTexture){const h=c.mapping;if(h===rd||h===sd)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new wS(f.height);return d.fromEquirectangularTexture(s,c),e.set(c,d),c.addEventListener("dispose",a),t(d.texture,c.mapping)}else return null}}return c}function a(c){const h=c.target;h.removeEventListener("dispose",a);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}const ra=4,Hg=[.125,.215,.35,.446,.526,.582],ls=20,Fh=new a0,Gg=new pt;let Oh=null,Bh=0,zh=0,Vh=!1;const as=(1+Math.sqrt(5))/2,ta=1/as,Wg=[new Y(-as,ta,0),new Y(as,ta,0),new Y(-ta,0,as),new Y(ta,0,as),new Y(0,as,-ta),new Y(0,as,ta),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],tw=new Y;class Xg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100,l={}){const{size:c=256,position:h=tw}=l;Oh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,a,f,h),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,Bh,zh),this._renderer.xr.enabled=Vh,e.scissorTest=!1,tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ca||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:yo,format:ci,colorSpace:ha,depthBuffer:!1},a=jg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jg(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nw(l)),this._blurMaterial=iw(l,e,t)}return a}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,Fh)}_sceneToCubeUV(e,t,i,a,l){const f=new Wn(90,1,t,i),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,x=m.toneMapping;m.getClearColor(Gg),m.toneMapping=Ur,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(a),m.clearDepth(),m.setRenderTarget(null));const E=new W_({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),S=new Un(new xo,E);let y=!1;const L=e.background;L?L.isColor&&(E.color.copy(L),e.background=null,y=!0):(E.color.copy(Gg),y=!0);for(let P=0;P<6;P++){const A=P%3;A===0?(f.up.set(0,d[P],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+g[P],l.y,l.z)):A===1?(f.up.set(0,0,d[P]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+g[P],l.z)):(f.up.set(0,d[P],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+g[P]));const z=this._cubeSize;tc(a,A*z,P>2?z:0,z,z),m.setRenderTarget(a),y&&m.render(S,f),m.render(e,f)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=x,m.autoClear=_,e.background=L}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===ca||e.mapping===ua;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Un(this._lodPlanes[0],l),h=l.uniforms;h.envMap.value=e;const f=this._cubeSize;tc(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Fh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=Wg[(a-l-1)%Wg.length];this._blur(e,l-1,l,c,h)}t.autoClear=i}_blur(e,t,i,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",l),this._halfBlur(c,e,i,i,a,"longitudinal",l)}_halfBlur(e,t,i,a,l,c,h){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,m=new Un(this._lodPlanes[a],d),_=d.uniforms,x=this._sizeLods[i]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*ls-1),E=l/M,S=isFinite(l)?1+Math.floor(g*E):ls;S>ls&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ls}`);const y=[];let L=0;for(let B=0;B<ls;++B){const $=B/E,R=Math.exp(-$*$/2);y.push(R),B===0?L+=R:B<S&&(L+=2*R)}for(let B=0;B<y.length;B++)y[B]=y[B]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=c==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:P}=this;_.dTheta.value=M,_.mipInt.value=P-i;const A=this._sizeLods[a],z=3*A*(a>P-ra?a-P+ra:0),I=4*(this._cubeSize-A);tc(t,z,I,3*A,2*A),f.setRenderTarget(t),f.render(m,Fh)}}function nw(s){const e=[],t=[],i=[];let a=s;const l=s-ra+1+Hg.length;for(let c=0;c<l;c++){const h=Math.pow(2,a);t.push(h);let f=1/h;c>s-ra?f=Hg[c-s+ra-1]:c===0&&(f=0),i.push(f);const d=1/(h-2),g=-d,m=1+d,_=[g,g,m,g,m,m,g,g,m,m,g,m],x=6,M=6,E=3,S=2,y=1,L=new Float32Array(E*M*x),P=new Float32Array(S*M*x),A=new Float32Array(y*M*x);for(let I=0;I<x;I++){const B=I%3*2/3-1,$=I>2?0:-1,R=[B,$,0,B+2/3,$,0,B+2/3,$+1,0,B,$,0,B+2/3,$+1,0,B,$+1,0];L.set(R,E*M*I),P.set(_,S*M*I);const C=[I,I,I,I,I,I];A.set(C,y*M*I)}const z=new bi;z.setAttribute("position",new ui(L,E)),z.setAttribute("uv",new ui(P,S)),z.setAttribute("faceIndex",new ui(A,y)),e.push(z),a>ra&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function jg(s,e,t){const i=new fs(s,e,t);return i.texture.mapping=yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tc(s,e,t,i,a){s.viewport.set(e,t,i,a),s.scissor.set(e,t,i,a)}function iw(s,e,t){const i=new Float32Array(ls),a=new Y(0,1,0);return new Or({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Yg(){return new Or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function qg(){return new Or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function af(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rw(s){let e=new WeakMap,t=null;function i(h){if(h&&h.isTexture){const f=h.mapping,d=f===rd||f===sd,g=f===ca||f===ua;if(d||g){let m=e.get(h);const _=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return t===null&&(t=new Xg(s)),m=d?t.fromEquirectangular(h,m):t.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const x=h.image;return d&&x&&x.height>0||g&&x&&a(x)?(t===null&&(t=new Xg(s)),m=d?t.fromEquirectangular(h):t.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",l),m.texture):null}}}return h}function a(h){let f=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&f++;return f===d}function l(h){const f=h.target;f.removeEventListener("dispose",l);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function sw(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&vo("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function aw(s,e,t,i){const a={},l=new WeakMap;function c(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",c),delete a[_.id];const x=l.get(_);x&&(e.remove(x),l.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function h(m,_){return a[_.id]===!0||(_.addEventListener("dispose",c),a[_.id]=!0,t.memory.geometries++),_}function f(m){const _=m.attributes;for(const x in _)e.update(_[x],s.ARRAY_BUFFER)}function d(m){const _=[],x=m.index,M=m.attributes.position;let E=0;if(x!==null){const L=x.array;E=x.version;for(let P=0,A=L.length;P<A;P+=3){const z=L[P+0],I=L[P+1],B=L[P+2];_.push(z,I,I,B,B,z)}}else if(M!==void 0){const L=M.array;E=M.version;for(let P=0,A=L.length/3-1;P<A;P+=3){const z=P+0,I=P+1,B=P+2;_.push(z,I,I,B,B,z)}}else return;const S=new(V_(_)?j_:X_)(_,1);S.version=E;const y=l.get(m);y&&e.remove(y),l.set(m,S)}function g(m){const _=l.get(m);if(_){const x=m.index;x!==null&&_.version<x.version&&d(m)}else d(m);return l.get(m)}return{get:h,update:f,getWireframeAttribute:g}}function ow(s,e,t){let i;function a(_){i=_}let l,c;function h(_){l=_.type,c=_.bytesPerElement}function f(_,x){s.drawElements(i,x,l,_*c),t.update(x,i,1)}function d(_,x,M){M!==0&&(s.drawElementsInstanced(i,x,l,_*c,M),t.update(x,i,M))}function g(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,l,_,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,i,1)}function m(_,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)d(_[y]/c,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,l,_,0,E,0,M);let y=0;for(let L=0;L<M;L++)y+=x[L]*E[L];t.update(y,i,1)}}this.setMode=a,this.setIndex=h,this.render=f,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=m}function lw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,h){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function cw(s,e,t){const i=new WeakMap,a=new Pt;function l(c,h,f){const d=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=g!==void 0?g.length:0;let _=i.get(h);if(_===void 0||_.count!==m){let R=function(){B.dispose(),i.delete(h),h.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let P=0;x===!0&&(P=1),M===!0&&(P=2),E===!0&&(P=3);let A=h.attributes.position.count*P,z=1;A>e.maxTextureSize&&(z=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const I=new Float32Array(A*z*4*m),B=new H_(I,A,z,m);B.type=Ei,B.needsUpdate=!0;const $=P*4;for(let C=0;C<m;C++){const G=S[C],ee=y[C],re=L[C],ce=A*z*4*C;for(let he=0;he<G.count;he++){const oe=he*$;x===!0&&(a.fromBufferAttribute(G,he),I[ce+oe+0]=a.x,I[ce+oe+1]=a.y,I[ce+oe+2]=a.z,I[ce+oe+3]=0),M===!0&&(a.fromBufferAttribute(ee,he),I[ce+oe+4]=a.x,I[ce+oe+5]=a.y,I[ce+oe+6]=a.z,I[ce+oe+7]=0),E===!0&&(a.fromBufferAttribute(re,he),I[ce+oe+8]=a.x,I[ce+oe+9]=a.y,I[ce+oe+10]=a.z,I[ce+oe+11]=re.itemSize===4?a.w:1)}}_={count:m,texture:B,size:new lt(A,z)},i.set(h,_),h.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let x=0;for(let E=0;E<d.length;E++)x+=d[E];const M=h.morphTargetsRelative?1:1-x;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",d)}f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function uw(s,e,t,i){let a=new WeakMap;function l(f){const d=i.render.frame,g=f.geometry,m=e.get(f,g);if(a.get(m)!==d&&(e.update(m),a.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),a.get(f)!==d&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),a.set(f,d))),f.isSkinnedMesh){const _=f.skeleton;a.get(_)!==d&&(_.update(),a.set(_,d))}return m}function c(){a=new WeakMap}function h(f){const d=f.target;d.removeEventListener("dispose",h),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:c}}const l0=new gn,$g=new e0(1,1),c0=new H_,u0=new oS,h0=new $_,Kg=[],Zg=[],Jg=new Float32Array(16),Qg=new Float32Array(9),e_=new Float32Array(4);function va(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let l=Kg[a];if(l===void 0&&(l=new Float32Array(a),Kg[a]=l),e!==0){i.toArray(l,0);for(let c=1,h=0;c!==e;++c)h+=t,s[c].toArray(l,h)}return l}function ln(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function cn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function wc(s,e){let t=Zg[e];t===void 0&&(t=new Int32Array(e),Zg[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function hw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function dw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2fv(this.addr,e),cn(t,e)}}function fw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;s.uniform3fv(this.addr,e),cn(t,e)}}function pw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4fv(this.addr,e),cn(t,e)}}function mw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;e_.set(i),s.uniformMatrix2fv(this.addr,!1,e_),cn(t,i)}}function gw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Qg.set(i),s.uniformMatrix3fv(this.addr,!1,Qg),cn(t,i)}}function _w(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Jg.set(i),s.uniformMatrix4fv(this.addr,!1,Jg),cn(t,i)}}function vw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2iv(this.addr,e),cn(t,e)}}function xw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;s.uniform3iv(this.addr,e),cn(t,e)}}function Sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4iv(this.addr,e),cn(t,e)}}function Mw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ew(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2uiv(this.addr,e),cn(t,e)}}function ww(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;s.uniform3uiv(this.addr,e),cn(t,e)}}function Tw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4uiv(this.addr,e),cn(t,e)}}function bw(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?($g.compareFunction=z_,l=$g):l=l0,t.setTexture2D(e||l,a)}function Aw(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||u0,a)}function Cw(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||h0,a)}function Rw(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||c0,a)}function Pw(s){switch(s){case 5126:return hw;case 35664:return dw;case 35665:return fw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return _w;case 5124:case 35670:return vw;case 35667:case 35671:return yw;case 35668:case 35672:return xw;case 35669:case 35673:return Sw;case 5125:return Mw;case 36294:return Ew;case 36295:return ww;case 36296:return Tw;case 35678:case 36198:case 36298:case 36306:case 35682:return bw;case 35679:case 36299:case 36307:return Aw;case 35680:case 36300:case 36308:case 36293:return Cw;case 36289:case 36303:case 36311:case 36292:return Rw}}function Lw(s,e){s.uniform1fv(this.addr,e)}function Dw(s,e){const t=va(e,this.size,2);s.uniform2fv(this.addr,t)}function Iw(s,e){const t=va(e,this.size,3);s.uniform3fv(this.addr,t)}function Nw(s,e){const t=va(e,this.size,4);s.uniform4fv(this.addr,t)}function Uw(s,e){const t=va(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kw(s,e){const t=va(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Fw(s,e){const t=va(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ow(s,e){s.uniform1iv(this.addr,e)}function Bw(s,e){s.uniform2iv(this.addr,e)}function zw(s,e){s.uniform3iv(this.addr,e)}function Vw(s,e){s.uniform4iv(this.addr,e)}function Hw(s,e){s.uniform1uiv(this.addr,e)}function Gw(s,e){s.uniform2uiv(this.addr,e)}function Ww(s,e){s.uniform3uiv(this.addr,e)}function Xw(s,e){s.uniform4uiv(this.addr,e)}function jw(s,e,t){const i=this.cache,a=e.length,l=wc(t,a);ln(i,l)||(s.uniform1iv(this.addr,l),cn(i,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||l0,l[c])}function Yw(s,e,t){const i=this.cache,a=e.length,l=wc(t,a);ln(i,l)||(s.uniform1iv(this.addr,l),cn(i,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||u0,l[c])}function qw(s,e,t){const i=this.cache,a=e.length,l=wc(t,a);ln(i,l)||(s.uniform1iv(this.addr,l),cn(i,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||h0,l[c])}function $w(s,e,t){const i=this.cache,a=e.length,l=wc(t,a);ln(i,l)||(s.uniform1iv(this.addr,l),cn(i,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||c0,l[c])}function Kw(s){switch(s){case 5126:return Lw;case 35664:return Dw;case 35665:return Iw;case 35666:return Nw;case 35674:return Uw;case 35675:return kw;case 35676:return Fw;case 5124:case 35670:return Ow;case 35667:case 35671:return Bw;case 35668:case 35672:return zw;case 35669:case 35673:return Vw;case 5125:return Hw;case 36294:return Gw;case 36295:return Ww;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return qw;case 36289:case 36303:case 36311:case 36292:return $w}}class Zw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Pw(t.type)}}class Jw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kw(t.type)}}class Qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const h=a[l];h.setValue(e,t[h.id],i)}}}const Hh=/(\w+)(\])?(\[|\.)?/g;function t_(s,e){s.seq.push(e),s.map[e.id]=e}function eT(s,e,t){const i=s.name,a=i.length;for(Hh.lastIndex=0;;){const l=Hh.exec(i),c=Hh.lastIndex;let h=l[1];const f=l[2]==="]",d=l[3];if(f&&(h=h|0),d===void 0||d==="["&&c+2===a){t_(t,d===void 0?new Zw(h,s,e):new Jw(h,s,e));break}else{let m=t.map[h];m===void 0&&(m=new Qw(h),t_(t,m)),t=m}}}class uc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);eT(l,c,this)}}setValue(e,t,i,a){const l=this.map[t];l!==void 0&&l.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let l=0,c=t.length;l!==c;++l){const h=t[l],f=i[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function n_(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const tT=37297;let nT=0;function iT(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const h=c+1;i.push(`${h===e?">":" "} ${h}: ${t[c]}`)}return i.join(`
`)}const i_=new mt;function rT(s){Rt._getMatrix(i_,Rt.workingColorSpace,s);const e=`mat3( ${i_.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case fc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function r_(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(i&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+iT(s.getShaderSource(e),h)}else return l}function sT(s,e){const t=rT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function aT(s,e){let t;switch(e){case _x:t="Linear";break;case vx:t="Reinhard";break;case yx:t="Cineon";break;case xx:t="ACESFilmic";break;case Mx:t="AgX";break;case Ex:t="Neutral";break;case Sx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new Y;function oT(){Rt.getLuminanceCoefficients(nc);const s=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function cT(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uT(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=s.getActiveAttrib(e,a),c=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:h}}return t}function co(s){return s!==""}function s_(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function a_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hT=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(s){return s.replace(hT,fT)}const dT=new Map;function fT(s,e){let t=gt[e];if(t===void 0){const i=dT.get(e);if(i!==void 0)t=gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zd(t)}const pT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o_(s){return s.replace(pT,mT)}function mT(s,e,t,i){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function l_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===L_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ky?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function _T(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ca:case ua:e="ENVMAP_TYPE_CUBE";break;case yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ua:e="ENVMAP_MODE_REFRACTION";break}return e}function yT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gd:e="ENVMAP_BLENDING_MULTIPLY";break;case mx:e="ENVMAP_BLENDING_MIX";break;case gx:e="ENVMAP_BLENDING_ADD";break}return e}function xT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ST(s,e,t,i){const a=s.getContext(),l=t.defines;let c=t.vertexShader,h=t.fragmentShader;const f=gT(t),d=_T(t),g=vT(t),m=yT(t),_=xT(t),x=lT(t),M=cT(l),E=a.createProgram();let S,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(co).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(co).join(`
`),y.length>0&&(y+=`
`)):(S=[l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),y=[l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ur?"#define TONE_MAPPING":"",t.toneMapping!==Ur?gt.tonemapping_pars_fragment:"",t.toneMapping!==Ur?aT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,sT("linearToOutputTexel",t.outputColorSpace),oT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),c=zd(c),c=s_(c,t),c=a_(c,t),h=zd(h),h=s_(h,t),h=a_(h,t),c=o_(c),h=o_(h),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=L+S+c,A=L+y+h,z=n_(a,a.VERTEX_SHADER,P),I=n_(a,a.FRAGMENT_SHADER,A);a.attachShader(E,z),a.attachShader(E,I),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function B(G){if(s.debug.checkShaderErrors){const ee=a.getProgramInfoLog(E)||"",re=a.getShaderInfoLog(z)||"",ce=a.getShaderInfoLog(I)||"",he=ee.trim(),oe=re.trim(),fe=ce.trim();let H=!0,le=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,z,I);else{const se=r_(a,z,"vertex"),F=r_(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+he+`
`+se+`
`+F)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(oe===""||fe==="")&&(le=!1);le&&(G.diagnostics={runnable:H,programLog:he,vertexShader:{log:oe,prefix:S},fragmentShader:{log:fe,prefix:y}})}a.deleteShader(z),a.deleteShader(I),$=new uc(a,E),R=uT(a,E)}let $;this.getUniforms=function(){return $===void 0&&B(this),$};let R;this.getAttributes=function(){return R===void 0&&B(this),R};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(E,tT)),C},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=I,this}let MT=0;class ET{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new wT(e),t.set(e,i)),i}}class wT{constructor(e){this.id=MT++,this.code=e,this.usedTimes=0}}function TT(s,e,t,i,a,l,c){const h=new ef,f=new ET,d=new Set,g=[],m=a.logarithmicDepthBuffer,_=a.vertexTextures;let x=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return d.add(R),R===0?"uv":`uv${R}`}function S(R,C,G,ee,re){const ce=ee.fog,he=re.geometry,oe=R.isMeshStandardMaterial?ee.environment:null,fe=(R.isMeshStandardMaterial?t:e).get(R.envMap||oe),H=fe&&fe.mapping===yc?fe.image.height:null,le=M[R.type];R.precision!==null&&(x=a.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const se=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,F=se!==void 0?se.length:0;let O=0;he.morphAttributes.position!==void 0&&(O=1),he.morphAttributes.normal!==void 0&&(O=2),he.morphAttributes.color!==void 0&&(O=3);let pe,ye,Ee,K;if(le){const wt=Di[le];pe=wt.vertexShader,ye=wt.fragmentShader}else pe=R.vertexShader,ye=R.fragmentShader,f.update(R),Ee=f.getVertexShaderID(R),K=f.getFragmentShaderID(R);const ae=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),De=re.isInstancedMesh===!0,Ie=re.isBatchedMesh===!0,st=!!R.map,Ut=!!R.matcap,U=!!fe,Et=!!R.aoMap,Qe=!!R.lightMap,me=!!R.bumpMap,ve=!!R.normalMap,vt=!!R.displacementMap,Oe=!!R.emissiveMap,ht=!!R.metalnessMap,Gt=!!R.roughnessMap,Wt=R.anisotropy>0,D=R.clearcoat>0,T=R.dispersion>0,J=R.iridescence>0,de=R.sheen>0,Se=R.transmission>0,ue=Wt&&!!R.anisotropyMap,Ke=D&&!!R.clearcoatMap,Pe=D&&!!R.clearcoatNormalMap,Ge=D&&!!R.clearcoatRoughnessMap,Ze=J&&!!R.iridescenceMap,Ce=J&&!!R.iridescenceThicknessMap,Fe=de&&!!R.sheenColorMap,at=de&&!!R.sheenRoughnessMap,qe=!!R.specularMap,Ne=!!R.specularColorMap,ft=!!R.specularIntensityMap,W=Se&&!!R.transmissionMap,be=Se&&!!R.thicknessMap,Le=!!R.gradientMap,Be=!!R.alphaMap,Te=R.alphaTest>0,ge=!!R.alphaHash,je=!!R.extensions;let dt=Ur;R.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(dt=s.toneMapping);const Dt={shaderID:le,shaderType:R.type,shaderName:R.name,vertexShader:pe,fragmentShader:ye,defines:R.defines,customVertexShaderID:Ee,customFragmentShaderID:K,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,batching:Ie,batchingColor:Ie&&re._colorsTexture!==null,instancing:De,instancingColor:De&&re.instanceColor!==null,instancingMorph:De&&re.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ha,alphaToCoverage:!!R.alphaToCoverage,map:st,matcap:Ut,envMap:U,envMapMode:U&&fe.mapping,envMapCubeUVHeight:H,aoMap:Et,lightMap:Qe,bumpMap:me,normalMap:ve,displacementMap:_&&vt,emissiveMap:Oe,normalMapObjectSpace:ve&&R.normalMapType===Rx,normalMapTangentSpace:ve&&R.normalMapType===Zd,metalnessMap:ht,roughnessMap:Gt,anisotropy:Wt,anisotropyMap:ue,clearcoat:D,clearcoatMap:Ke,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Ge,dispersion:T,iridescence:J,iridescenceMap:Ze,iridescenceThicknessMap:Ce,sheen:de,sheenColorMap:Fe,sheenRoughnessMap:at,specularMap:qe,specularColorMap:Ne,specularIntensityMap:ft,transmission:Se,transmissionMap:W,thicknessMap:be,gradientMap:Le,opaque:R.transparent===!1&&R.blending===aa&&R.alphaToCoverage===!1,alphaMap:Be,alphaTest:Te,alphaHash:ge,combine:R.combine,mapUv:st&&E(R.map.channel),aoMapUv:Et&&E(R.aoMap.channel),lightMapUv:Qe&&E(R.lightMap.channel),bumpMapUv:me&&E(R.bumpMap.channel),normalMapUv:ve&&E(R.normalMap.channel),displacementMapUv:vt&&E(R.displacementMap.channel),emissiveMapUv:Oe&&E(R.emissiveMap.channel),metalnessMapUv:ht&&E(R.metalnessMap.channel),roughnessMapUv:Gt&&E(R.roughnessMap.channel),anisotropyMapUv:ue&&E(R.anisotropyMap.channel),clearcoatMapUv:Ke&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:at&&E(R.sheenRoughnessMap.channel),specularMapUv:qe&&E(R.specularMap.channel),specularColorMapUv:Ne&&E(R.specularColorMap.channel),specularIntensityMapUv:ft&&E(R.specularIntensityMap.channel),transmissionMapUv:W&&E(R.transmissionMap.channel),thicknessMapUv:be&&E(R.thicknessMap.channel),alphaMapUv:Be&&E(R.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ve||Wt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!he.attributes.uv&&(st||Be),fog:!!ce,useFog:R.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:_e,skinning:re.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:O,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,decodeVideoTexture:st&&R.map.isVideoTexture===!0&&Rt.getTransfer(R.map.colorSpace)===Ft,decodeVideoTextureEmissive:Oe&&R.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(R.emissiveMap.colorSpace)===Ft,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ii,flipSided:R.side===Xn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:je&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&R.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Dt.vertexUv1s=d.has(1),Dt.vertexUv2s=d.has(2),Dt.vertexUv3s=d.has(3),d.clear(),Dt}function y(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const G in R.defines)C.push(G),C.push(R.defines[G]);return R.isRawShaderMaterial===!1&&(L(C,R),P(C,R),C.push(s.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function L(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function P(R,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),R.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),R.push(h.mask)}function A(R){const C=M[R.type];let G;if(C){const ee=Di[C];G=xS.clone(ee.uniforms)}else G=R.uniforms;return G}function z(R,C){let G;for(let ee=0,re=g.length;ee<re;ee++){const ce=g[ee];if(ce.cacheKey===C){G=ce,++G.usedTimes;break}}return G===void 0&&(G=new ST(s,C,R,l),g.push(G)),G}function I(R){if(--R.usedTimes===0){const C=g.indexOf(R);g[C]=g[g.length-1],g.pop(),R.destroy()}}function B(R){f.remove(R)}function $(){f.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:A,acquireProgram:z,releaseProgram:I,releaseShaderCache:B,programs:g,dispose:$}}function bT(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let h=s.get(c);return h===void 0&&(h={},s.set(c,h)),h}function i(c){s.delete(c)}function a(c,h,f){s.get(c)[h]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:l}}function AT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function c_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function u_(){const s=[];let e=0;const t=[],i=[],a=[];function l(){e=0,t.length=0,i.length=0,a.length=0}function c(m,_,x,M,E,S){let y=s[e];return y===void 0?(y={id:m.id,object:m,geometry:_,material:x,groupOrder:M,renderOrder:m.renderOrder,z:E,group:S},s[e]=y):(y.id=m.id,y.object=m,y.geometry=_,y.material=x,y.groupOrder=M,y.renderOrder=m.renderOrder,y.z=E,y.group=S),e++,y}function h(m,_,x,M,E,S){const y=c(m,_,x,M,E,S);x.transmission>0?i.push(y):x.transparent===!0?a.push(y):t.push(y)}function f(m,_,x,M,E,S){const y=c(m,_,x,M,E,S);x.transmission>0?i.unshift(y):x.transparent===!0?a.unshift(y):t.unshift(y)}function d(m,_){t.length>1&&t.sort(m||AT),i.length>1&&i.sort(_||c_),a.length>1&&a.sort(_||c_)}function g(){for(let m=e,_=s.length;m<_;m++){const x=s[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:a,init:l,push:h,unshift:f,finish:g,sort:d}}function CT(){let s=new WeakMap;function e(i,a){const l=s.get(i);let c;return l===void 0?(c=new u_,s.set(i,[c])):a>=l.length?(c=new u_,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function RT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new pt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function PT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let LT=0;function DT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function IT(s){const e=new RT,t=PT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new Y);const a=new Y,l=new Mt,c=new Mt;function h(d){let g=0,m=0,_=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,L=0,P=0,A=0,z=0,I=0,B=0;d.sort(DT);for(let R=0,C=d.length;R<C;R++){const G=d[R],ee=G.color,re=G.intensity,ce=G.distance,he=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=ee.r*re,m+=ee.g*re,_+=ee.b*re;else if(G.isLightProbe){for(let oe=0;oe<9;oe++)i.probe[oe].addScaledVector(G.sh.coefficients[oe],re);B++}else if(G.isDirectionalLight){const oe=e.get(G);if(oe.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const fe=G.shadow,H=t.get(G);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,i.directionalShadow[x]=H,i.directionalShadowMap[x]=he,i.directionalShadowMatrix[x]=G.shadow.matrix,L++}i.directional[x]=oe,x++}else if(G.isSpotLight){const oe=e.get(G);oe.position.setFromMatrixPosition(G.matrixWorld),oe.color.copy(ee).multiplyScalar(re),oe.distance=ce,oe.coneCos=Math.cos(G.angle),oe.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),oe.decay=G.decay,i.spot[E]=oe;const fe=G.shadow;if(G.map&&(i.spotLightMap[z]=G.map,z++,fe.updateMatrices(G),G.castShadow&&I++),i.spotLightMatrix[E]=fe.matrix,G.castShadow){const H=t.get(G);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,i.spotShadow[E]=H,i.spotShadowMap[E]=he,A++}E++}else if(G.isRectAreaLight){const oe=e.get(G);oe.color.copy(ee).multiplyScalar(re),oe.halfWidth.set(G.width*.5,0,0),oe.halfHeight.set(0,G.height*.5,0),i.rectArea[S]=oe,S++}else if(G.isPointLight){const oe=e.get(G);if(oe.color.copy(G.color).multiplyScalar(G.intensity),oe.distance=G.distance,oe.decay=G.decay,G.castShadow){const fe=G.shadow,H=t.get(G);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,H.shadowCameraNear=fe.camera.near,H.shadowCameraFar=fe.camera.far,i.pointShadow[M]=H,i.pointShadowMap[M]=he,i.pointShadowMatrix[M]=G.shadow.matrix,P++}i.point[M]=oe,M++}else if(G.isHemisphereLight){const oe=e.get(G);oe.skyColor.copy(G.color).multiplyScalar(re),oe.groundColor.copy(G.groundColor).multiplyScalar(re),i.hemi[y]=oe,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=m,i.ambient[2]=_;const $=i.hash;($.directionalLength!==x||$.pointLength!==M||$.spotLength!==E||$.rectAreaLength!==S||$.hemiLength!==y||$.numDirectionalShadows!==L||$.numPointShadows!==P||$.numSpotShadows!==A||$.numSpotMaps!==z||$.numLightProbes!==B)&&(i.directional.length=x,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=y,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=A+z-I,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=B,$.directionalLength=x,$.pointLength=M,$.spotLength=E,$.rectAreaLength=S,$.hemiLength=y,$.numDirectionalShadows=L,$.numPointShadows=P,$.numSpotShadows=A,$.numSpotMaps=z,$.numLightProbes=B,i.version=LT++)}function f(d,g){let m=0,_=0,x=0,M=0,E=0;const S=g.matrixWorldInverse;for(let y=0,L=d.length;y<L;y++){const P=d[y];if(P.isDirectionalLight){const A=i.directional[m];A.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(S),m++}else if(P.isSpotLight){const A=i.spot[x];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(S),x++}else if(P.isRectAreaLight){const A=i.rectArea[M];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),c.identity(),l.copy(P.matrixWorld),l.premultiply(S),c.extractRotation(l),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const A=i.point[_];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),_++}else if(P.isHemisphereLight){const A=i.hemi[E];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(S),E++}}}return{setup:h,setupView:f,state:i}}function h_(s){const e=new IT(s),t=[],i=[];function a(g){d.camera=g,t.length=0,i.length=0}function l(g){t.push(g)}function c(g){i.push(g)}function h(){e.setup(t)}function f(g){e.setupView(t,g)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:h,setupLightsView:f,pushLight:l,pushShadow:c}}function NT(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let h;return c===void 0?(h=new h_(s),e.set(a,[h])):l>=c.length?(h=new h_(s),c.push(h)):h=c[l],h}function i(){e=new WeakMap}return{get:t,dispose:i}}const UT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function FT(s,e,t){let i=new tf;const a=new lt,l=new lt,c=new Pt,h=new kS({depthPacking:Cx}),f=new FS,d={},g=t.maxTextureSize,m={[kr]:Xn,[Xn]:kr,[Ii]:Ii},_=new Or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:UT,fragmentShader:kT}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new bi;M.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Un(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L_;let y=this.type;this.render=function(I,B,$){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const R=s.getRenderTarget(),C=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(Nr),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const re=y!==tr&&this.type===tr,ce=y===tr&&this.type!==tr;for(let he=0,oe=I.length;he<oe;he++){const fe=I[he],H=fe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const le=H.getFrameExtents();if(a.multiply(le),l.copy(H.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/le.x),a.x=l.x*le.x,H.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/le.y),a.y=l.y*le.y,H.mapSize.y=l.y)),H.map===null||re===!0||ce===!0){const F=this.type!==tr?{minFilter:Qn,magFilter:Qn}:{};H.map!==null&&H.map.dispose(),H.map=new fs(a.x,a.y,F),H.map.texture.name=fe.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const se=H.getViewportCount();for(let F=0;F<se;F++){const O=H.getViewport(F);c.set(l.x*O.x,l.y*O.y,l.x*O.z,l.y*O.w),ee.viewport(c),H.updateMatrices(fe,F),i=H.getFrustum(),A(B,$,H.camera,fe,this.type)}H.isPointLightShadow!==!0&&this.type===tr&&L(H,$),H.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(R,C,G)};function L(I,B){const $=e.update(E);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new fs(a.x,a.y)),_.uniforms.shadow_pass.value=I.map.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(B,null,$,_,E,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(B,null,$,x,E,null)}function P(I,B,$,R){let C=null;const G=$.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)C=G;else if(C=$.isPointLight===!0?f:h,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const ee=C.uuid,re=B.uuid;let ce=d[ee];ce===void 0&&(ce={},d[ee]=ce);let he=ce[re];he===void 0&&(he=C.clone(),ce[re]=he,B.addEventListener("dispose",z)),C=he}if(C.visible=B.visible,C.wireframe=B.wireframe,R===tr?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:m[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,$.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ee=s.properties.get(C);ee.light=$}return C}function A(I,B,$,R,C){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===tr)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,I.matrixWorld);const re=e.update(I),ce=I.material;if(Array.isArray(ce)){const he=re.groups;for(let oe=0,fe=he.length;oe<fe;oe++){const H=he[oe],le=ce[H.materialIndex];if(le&&le.visible){const se=P(I,le,R,C);I.onBeforeShadow(s,I,B,$,re,se,H),s.renderBufferDirect($,null,re,se,I,H),I.onAfterShadow(s,I,B,$,re,se,H)}}}else if(ce.visible){const he=P(I,ce,R,C);I.onBeforeShadow(s,I,B,$,re,he,null),s.renderBufferDirect($,null,re,he,I,null),I.onAfterShadow(s,I,B,$,re,he,null)}}const ee=I.children;for(let re=0,ce=ee.length;re<ce;re++)A(ee[re],B,$,R,C)}function z(I){I.target.removeEventListener("dispose",z);for(const $ in d){const R=d[$],C=I.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const OT={[Zh]:Jh,[Qh]:nd,[ed]:id,[la]:td,[Jh]:Zh,[nd]:Qh,[id]:ed,[td]:la};function BT(s,e){function t(){let W=!1;const be=new Pt;let Le=null;const Be=new Pt(0,0,0,0);return{setMask:function(Te){Le!==Te&&!W&&(s.colorMask(Te,Te,Te,Te),Le=Te)},setLocked:function(Te){W=Te},setClear:function(Te,ge,je,dt,Dt){Dt===!0&&(Te*=dt,ge*=dt,je*=dt),be.set(Te,ge,je,dt),Be.equals(be)===!1&&(s.clearColor(Te,ge,je,dt),Be.copy(be))},reset:function(){W=!1,Le=null,Be.set(-1,0,0,0)}}}function i(){let W=!1,be=!1,Le=null,Be=null,Te=null;return{setReversed:function(ge){if(be!==ge){const je=e.get("EXT_clip_control");ge?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),be=ge;const dt=Te;Te=null,this.setClear(dt)}},getReversed:function(){return be},setTest:function(ge){ge?ae(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(ge){Le!==ge&&!W&&(s.depthMask(ge),Le=ge)},setFunc:function(ge){if(be&&(ge=OT[ge]),Be!==ge){switch(ge){case Zh:s.depthFunc(s.NEVER);break;case Jh:s.depthFunc(s.ALWAYS);break;case Qh:s.depthFunc(s.LESS);break;case la:s.depthFunc(s.LEQUAL);break;case ed:s.depthFunc(s.EQUAL);break;case td:s.depthFunc(s.GEQUAL);break;case nd:s.depthFunc(s.GREATER);break;case id:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=ge}},setLocked:function(ge){W=ge},setClear:function(ge){Te!==ge&&(be&&(ge=1-ge),s.clearDepth(ge),Te=ge)},reset:function(){W=!1,Le=null,Be=null,Te=null,be=!1}}}function a(){let W=!1,be=null,Le=null,Be=null,Te=null,ge=null,je=null,dt=null,Dt=null;return{setTest:function(wt){W||(wt?ae(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(wt){be!==wt&&!W&&(s.stencilMask(wt),be=wt)},setFunc:function(wt,ei,_n){(Le!==wt||Be!==ei||Te!==_n)&&(s.stencilFunc(wt,ei,_n),Le=wt,Be=ei,Te=_n)},setOp:function(wt,ei,_n){(ge!==wt||je!==ei||dt!==_n)&&(s.stencilOp(wt,ei,_n),ge=wt,je=ei,dt=_n)},setLocked:function(wt){W=wt},setClear:function(wt){Dt!==wt&&(s.clearStencil(wt),Dt=wt)},reset:function(){W=!1,be=null,Le=null,Be=null,Te=null,ge=null,je=null,dt=null,Dt=null}}}const l=new t,c=new i,h=new a,f=new WeakMap,d=new WeakMap;let g={},m={},_=new WeakMap,x=[],M=null,E=!1,S=null,y=null,L=null,P=null,A=null,z=null,I=null,B=new pt(0,0,0),$=0,R=!1,C=null,G=null,ee=null,re=null,ce=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,fe=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(H)[1]),oe=fe>=1):H.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),oe=fe>=2);let le=null,se={};const F=s.getParameter(s.SCISSOR_BOX),O=s.getParameter(s.VIEWPORT),pe=new Pt().fromArray(F),ye=new Pt().fromArray(O);function Ee(W,be,Le,Be){const Te=new Uint8Array(4),ge=s.createTexture();s.bindTexture(W,ge),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<Le;je++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(be+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return ge}const K={};K[s.TEXTURE_2D]=Ee(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=Ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=Ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=Ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),ae(s.DEPTH_TEST),c.setFunc(la),me(!1),ve(Wm),ae(s.CULL_FACE),Et(Nr);function ae(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function _e(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function De(W,be){return m[W]!==be?(s.bindFramebuffer(W,be),m[W]=be,W===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=be),W===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=be),!0):!1}function Ie(W,be){let Le=x,Be=!1;if(W){Le=_.get(be),Le===void 0&&(Le=[],_.set(be,Le));const Te=W.textures;if(Le.length!==Te.length||Le[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,je=Te.length;ge<je;ge++)Le[ge]=s.COLOR_ATTACHMENT0+ge;Le.length=Te.length,Be=!0}}else Le[0]!==s.BACK&&(Le[0]=s.BACK,Be=!0);Be&&s.drawBuffers(Le)}function st(W){return M!==W?(s.useProgram(W),M=W,!0):!1}const Ut={[os]:s.FUNC_ADD,[Jy]:s.FUNC_SUBTRACT,[Qy]:s.FUNC_REVERSE_SUBTRACT};Ut[ex]=s.MIN,Ut[tx]=s.MAX;const U={[nx]:s.ZERO,[ix]:s.ONE,[rx]:s.SRC_COLOR,[$h]:s.SRC_ALPHA,[ux]:s.SRC_ALPHA_SATURATE,[lx]:s.DST_COLOR,[ax]:s.DST_ALPHA,[sx]:s.ONE_MINUS_SRC_COLOR,[Kh]:s.ONE_MINUS_SRC_ALPHA,[cx]:s.ONE_MINUS_DST_COLOR,[ox]:s.ONE_MINUS_DST_ALPHA,[hx]:s.CONSTANT_COLOR,[dx]:s.ONE_MINUS_CONSTANT_COLOR,[fx]:s.CONSTANT_ALPHA,[px]:s.ONE_MINUS_CONSTANT_ALPHA};function Et(W,be,Le,Be,Te,ge,je,dt,Dt,wt){if(W===Nr){E===!0&&(_e(s.BLEND),E=!1);return}if(E===!1&&(ae(s.BLEND),E=!0),W!==Zy){if(W!==S||wt!==R){if((y!==os||A!==os)&&(s.blendEquation(s.FUNC_ADD),y=os,A=os),wt)switch(W){case aa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xm:s.blendFunc(s.ONE,s.ONE);break;case jm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ym:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case aa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case jm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ym:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,P=null,z=null,I=null,B.set(0,0,0),$=0,S=W,R=wt}return}Te=Te||be,ge=ge||Le,je=je||Be,(be!==y||Te!==A)&&(s.blendEquationSeparate(Ut[be],Ut[Te]),y=be,A=Te),(Le!==L||Be!==P||ge!==z||je!==I)&&(s.blendFuncSeparate(U[Le],U[Be],U[ge],U[je]),L=Le,P=Be,z=ge,I=je),(dt.equals(B)===!1||Dt!==$)&&(s.blendColor(dt.r,dt.g,dt.b,Dt),B.copy(dt),$=Dt),S=W,R=!1}function Qe(W,be){W.side===Ii?_e(s.CULL_FACE):ae(s.CULL_FACE);let Le=W.side===Xn;be&&(Le=!Le),me(Le),W.blending===aa&&W.transparent===!1?Et(Nr):Et(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const Be=W.stencilWrite;h.setTest(Be),Be&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Oe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function me(W){C!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),C=W)}function ve(W){W!==qy?(ae(s.CULL_FACE),W!==G&&(W===Wm?s.cullFace(s.BACK):W===$y?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),G=W}function vt(W){W!==ee&&(oe&&s.lineWidth(W),ee=W)}function Oe(W,be,Le){W?(ae(s.POLYGON_OFFSET_FILL),(re!==be||ce!==Le)&&(s.polygonOffset(be,Le),re=be,ce=Le)):_e(s.POLYGON_OFFSET_FILL)}function ht(W){W?ae(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function Gt(W){W===void 0&&(W=s.TEXTURE0+he-1),le!==W&&(s.activeTexture(W),le=W)}function Wt(W,be,Le){Le===void 0&&(le===null?Le=s.TEXTURE0+he-1:Le=le);let Be=se[Le];Be===void 0&&(Be={type:void 0,texture:void 0},se[Le]=Be),(Be.type!==W||Be.texture!==be)&&(le!==Le&&(s.activeTexture(Le),le=Le),s.bindTexture(W,be||K[W]),Be.type=W,Be.texture=be)}function D(){const W=se[le];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function J(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pe(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ze(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(W){pe.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),pe.copy(W))}function at(W){ye.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),ye.copy(W))}function qe(W,be){let Le=d.get(be);Le===void 0&&(Le=new WeakMap,d.set(be,Le));let Be=Le.get(W);Be===void 0&&(Be=s.getUniformBlockIndex(be,W.name),Le.set(W,Be))}function Ne(W,be){const Be=d.get(be).get(W);f.get(be)!==Be&&(s.uniformBlockBinding(be,Be,W.__bindingPointIndex),f.set(be,Be))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},le=null,se={},m={},_=new WeakMap,x=[],M=null,E=!1,S=null,y=null,L=null,P=null,A=null,z=null,I=null,B=new pt(0,0,0),$=0,R=!1,C=null,G=null,ee=null,re=null,ce=null,pe.set(0,0,s.canvas.width,s.canvas.height),ye.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:ae,disable:_e,bindFramebuffer:De,drawBuffers:Ie,useProgram:st,setBlending:Et,setMaterial:Qe,setFlipSided:me,setCullFace:ve,setLineWidth:vt,setPolygonOffset:Oe,setScissorTest:ht,activeTexture:Gt,bindTexture:Wt,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:J,texImage2D:Ze,texImage3D:Ce,updateUBOMapping:qe,uniformBlockBinding:Ne,texStorage2D:Pe,texStorage3D:Ge,texSubImage2D:de,texSubImage3D:Se,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ke,scissor:Fe,viewport:at,reset:ft}}function zT(s,e,t,i,a,l,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new lt,g=new WeakMap;let m;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,T){return x?new OffscreenCanvas(D,T):_o("canvas")}function E(D,T,J){let de=1;const Se=Wt(D);if((Se.width>J||Se.height>J)&&(de=J/Math.max(Se.width,Se.height)),de<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ue=Math.floor(de*Se.width),Ke=Math.floor(de*Se.height);m===void 0&&(m=M(ue,Ke));const Pe=T?M(ue,Ke):m;return Pe.width=ue,Pe.height=Ke,Pe.getContext("2d").drawImage(D,0,0,ue,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ue+"x"+Ke+")."),Pe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),D;return D}function S(D){return D.generateMipmaps}function y(D){s.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(D,T,J,de,Se=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ue=T;if(T===s.RED&&(J===s.FLOAT&&(ue=s.R32F),J===s.HALF_FLOAT&&(ue=s.R16F),J===s.UNSIGNED_BYTE&&(ue=s.R8)),T===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ue=s.R8UI),J===s.UNSIGNED_SHORT&&(ue=s.R16UI),J===s.UNSIGNED_INT&&(ue=s.R32UI),J===s.BYTE&&(ue=s.R8I),J===s.SHORT&&(ue=s.R16I),J===s.INT&&(ue=s.R32I)),T===s.RG&&(J===s.FLOAT&&(ue=s.RG32F),J===s.HALF_FLOAT&&(ue=s.RG16F),J===s.UNSIGNED_BYTE&&(ue=s.RG8)),T===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ue=s.RG8UI),J===s.UNSIGNED_SHORT&&(ue=s.RG16UI),J===s.UNSIGNED_INT&&(ue=s.RG32UI),J===s.BYTE&&(ue=s.RG8I),J===s.SHORT&&(ue=s.RG16I),J===s.INT&&(ue=s.RG32I)),T===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),J===s.UNSIGNED_INT&&(ue=s.RGB32UI),J===s.BYTE&&(ue=s.RGB8I),J===s.SHORT&&(ue=s.RGB16I),J===s.INT&&(ue=s.RGB32I)),T===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),J===s.UNSIGNED_INT&&(ue=s.RGBA32UI),J===s.BYTE&&(ue=s.RGBA8I),J===s.SHORT&&(ue=s.RGBA16I),J===s.INT&&(ue=s.RGBA32I)),T===s.RGB&&(J===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),T===s.RGBA){const Ke=Se?fc:Rt.getTransfer(de);J===s.FLOAT&&(ue=s.RGBA32F),J===s.HALF_FLOAT&&(ue=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ue=Ke===Ft?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function A(D,T){let J;return D?T===null||T===ds||T===po?J=s.DEPTH24_STENCIL8:T===Ei?J=s.DEPTH32F_STENCIL8:T===fo&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ds||T===po?J=s.DEPTH_COMPONENT24:T===Ei?J=s.DEPTH_COMPONENT32F:T===fo&&(J=s.DEPTH_COMPONENT16),J}function z(D,T){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Qn&&D.minFilter!==Ni?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function I(D){const T=D.target;T.removeEventListener("dispose",I),$(T),T.isVideoTexture&&g.delete(T)}function B(D){const T=D.target;T.removeEventListener("dispose",B),C(T)}function $(D){const T=i.get(D);if(T.__webglInit===void 0)return;const J=D.source,de=_.get(J);if(de){const Se=de[T.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&R(D),Object.keys(de).length===0&&_.delete(J)}i.remove(D)}function R(D){const T=i.get(D);s.deleteTexture(T.__webglTexture);const J=D.source,de=_.get(J);delete de[T.__cacheKey],c.memory.textures--}function C(D){const T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let Se=0;Se<T.__webglFramebuffer[de].length;Se++)s.deleteFramebuffer(T.__webglFramebuffer[de][Se]);else s.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)s.deleteFramebuffer(T.__webglFramebuffer[de]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=D.textures;for(let de=0,Se=J.length;de<Se;de++){const ue=i.get(J[de]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),c.memory.textures--),i.remove(J[de])}i.remove(D)}let G=0;function ee(){G=0}function re(){const D=G;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),G+=1,D}function ce(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function he(D,T){const J=i.get(D);if(D.isVideoTexture&&ht(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const de=D.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(J,D,T);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+T)}function oe(D,T){const J=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){K(J,D,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+T)}function fe(D,T){const J=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){K(J,D,T);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+T)}function H(D,T){const J=i.get(D);if(D.version>0&&J.__version!==D.version){ae(J,D,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+T)}const le={[ad]:s.REPEAT,[us]:s.CLAMP_TO_EDGE,[od]:s.MIRRORED_REPEAT},se={[Qn]:s.NEAREST,[Tx]:s.NEAREST_MIPMAP_NEAREST,[Rl]:s.NEAREST_MIPMAP_LINEAR,[Ni]:s.LINEAR,[ah]:s.LINEAR_MIPMAP_NEAREST,[hs]:s.LINEAR_MIPMAP_LINEAR},F={[Px]:s.NEVER,[kx]:s.ALWAYS,[Lx]:s.LESS,[z_]:s.LEQUAL,[Dx]:s.EQUAL,[Ux]:s.GEQUAL,[Ix]:s.GREATER,[Nx]:s.NOTEQUAL};function O(D,T){if(T.type===Ei&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ni||T.magFilter===ah||T.magFilter===Rl||T.magFilter===hs||T.minFilter===Ni||T.minFilter===ah||T.minFilter===Rl||T.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,le[T.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,le[T.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,le[T.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,se[T.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qn||T.minFilter!==Rl&&T.minFilter!==hs||T.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function pe(D,T){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",I));const de=T.source;let Se=_.get(de);Se===void 0&&(Se={},_.set(de,Se));const ue=ce(T);if(ue!==D.__cacheKey){Se[ue]===void 0&&(Se[ue]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,J=!0),Se[ue].usedTimes++;const Ke=Se[D.__cacheKey];Ke!==void 0&&(Se[D.__cacheKey].usedTimes--,Ke.usedTimes===0&&R(T)),D.__cacheKey=ue,D.__webglTexture=Se[ue].texture}return J}function ye(D,T,J){return Math.floor(Math.floor(D/J)/T)}function Ee(D,T,J,de){const ue=D.updateRanges;if(ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,J,de,T.data);else{ue.sort((Ce,Fe)=>Ce.start-Fe.start);let Ke=0;for(let Ce=1;Ce<ue.length;Ce++){const Fe=ue[Ke],at=ue[Ce],qe=Fe.start+Fe.count,Ne=ye(at.start,T.width,4),ft=ye(Fe.start,T.width,4);at.start<=qe+1&&Ne===ft&&ye(at.start+at.count-1,T.width,4)===Ne?Fe.count=Math.max(Fe.count,at.start+at.count-Fe.start):(++Ke,ue[Ke]=at)}ue.length=Ke+1;const Pe=s.getParameter(s.UNPACK_ROW_LENGTH),Ge=s.getParameter(s.UNPACK_SKIP_PIXELS),Ze=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Ce=0,Fe=ue.length;Ce<Fe;Ce++){const at=ue[Ce],qe=Math.floor(at.start/4),Ne=Math.ceil(at.count/4),ft=qe%T.width,W=Math.floor(qe/T.width),be=Ne,Le=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,ft,W,be,Le,J,de,T.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Pe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ze)}}function K(D,T,J){let de=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=s.TEXTURE_3D);const Se=pe(D,T),ue=T.source;t.bindTexture(de,D.__webglTexture,s.TEXTURE0+J);const Ke=i.get(ue);if(ue.version!==Ke.__version||Se===!0){t.activeTexture(s.TEXTURE0+J);const Pe=Rt.getPrimaries(Rt.workingColorSpace),Ge=T.colorSpace===Dr?null:Rt.getPrimaries(T.colorSpace),Ze=T.colorSpace===Dr||Pe===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Ce=E(T.image,!1,a.maxTextureSize);Ce=Gt(T,Ce);const Fe=l.convert(T.format,T.colorSpace),at=l.convert(T.type);let qe=P(T.internalFormat,Fe,at,T.colorSpace,T.isVideoTexture);O(de,T);let Ne;const ft=T.mipmaps,W=T.isVideoTexture!==!0,be=Ke.__version===void 0||Se===!0,Le=ue.dataReady,Be=z(T,Ce);if(T.isDepthTexture)qe=A(T.format===go,T.type),be&&(W?t.texStorage2D(s.TEXTURE_2D,1,qe,Ce.width,Ce.height):t.texImage2D(s.TEXTURE_2D,0,qe,Ce.width,Ce.height,0,Fe,at,null));else if(T.isDataTexture)if(ft.length>0){W&&be&&t.texStorage2D(s.TEXTURE_2D,Be,qe,ft[0].width,ft[0].height);for(let Te=0,ge=ft.length;Te<ge;Te++)Ne=ft[Te],W?Le&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Fe,at,Ne.data):t.texImage2D(s.TEXTURE_2D,Te,qe,Ne.width,Ne.height,0,Fe,at,Ne.data);T.generateMipmaps=!1}else W?(be&&t.texStorage2D(s.TEXTURE_2D,Be,qe,Ce.width,Ce.height),Le&&Ee(T,Ce,Fe,at)):t.texImage2D(s.TEXTURE_2D,0,qe,Ce.width,Ce.height,0,Fe,at,Ce.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,qe,ft[0].width,ft[0].height,Ce.depth);for(let Te=0,ge=ft.length;Te<ge;Te++)if(Ne=ft[Te],T.format!==ci)if(Fe!==null)if(W){if(Le)if(T.layerUpdates.size>0){const je=Vg(Ne.width,Ne.height,T.format,T.type);for(const dt of T.layerUpdates){const Dt=Ne.data.subarray(dt*je/Ne.data.BYTES_PER_ELEMENT,(dt+1)*je/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,dt,Ne.width,Ne.height,1,Fe,Dt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Ne.width,Ne.height,Ce.depth,Fe,Ne.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,qe,Ne.width,Ne.height,Ce.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Le&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Ne.width,Ne.height,Ce.depth,Fe,at,Ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Te,qe,Ne.width,Ne.height,Ce.depth,0,Fe,at,Ne.data)}else{W&&be&&t.texStorage2D(s.TEXTURE_2D,Be,qe,ft[0].width,ft[0].height);for(let Te=0,ge=ft.length;Te<ge;Te++)Ne=ft[Te],T.format!==ci?Fe!==null?W?Le&&t.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Fe,Ne.data):t.compressedTexImage2D(s.TEXTURE_2D,Te,qe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Le&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Fe,at,Ne.data):t.texImage2D(s.TEXTURE_2D,Te,qe,Ne.width,Ne.height,0,Fe,at,Ne.data)}else if(T.isDataArrayTexture)if(W){if(be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,qe,Ce.width,Ce.height,Ce.depth),Le)if(T.layerUpdates.size>0){const Te=Vg(Ce.width,Ce.height,T.format,T.type);for(const ge of T.layerUpdates){const je=Ce.data.subarray(ge*Te/Ce.data.BYTES_PER_ELEMENT,(ge+1)*Te/Ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,Ce.width,Ce.height,1,Fe,at,je)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,Fe,at,Ce.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,Ce.width,Ce.height,Ce.depth,0,Fe,at,Ce.data);else if(T.isData3DTexture)W?(be&&t.texStorage3D(s.TEXTURE_3D,Be,qe,Ce.width,Ce.height,Ce.depth),Le&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,Fe,at,Ce.data)):t.texImage3D(s.TEXTURE_3D,0,qe,Ce.width,Ce.height,Ce.depth,0,Fe,at,Ce.data);else if(T.isFramebufferTexture){if(be)if(W)t.texStorage2D(s.TEXTURE_2D,Be,qe,Ce.width,Ce.height);else{let Te=Ce.width,ge=Ce.height;for(let je=0;je<Be;je++)t.texImage2D(s.TEXTURE_2D,je,qe,Te,ge,0,Fe,at,null),Te>>=1,ge>>=1}}else if(ft.length>0){if(W&&be){const Te=Wt(ft[0]);t.texStorage2D(s.TEXTURE_2D,Be,qe,Te.width,Te.height)}for(let Te=0,ge=ft.length;Te<ge;Te++)Ne=ft[Te],W?Le&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,Fe,at,Ne):t.texImage2D(s.TEXTURE_2D,Te,qe,Fe,at,Ne);T.generateMipmaps=!1}else if(W){if(be){const Te=Wt(Ce);t.texStorage2D(s.TEXTURE_2D,Be,qe,Te.width,Te.height)}Le&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,at,Ce)}else t.texImage2D(s.TEXTURE_2D,0,qe,Fe,at,Ce);S(T)&&y(de),Ke.__version=ue.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ae(D,T,J){if(T.image.length!==6)return;const de=pe(D,T),Se=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+J);const ue=i.get(Se);if(Se.version!==ue.__version||de===!0){t.activeTexture(s.TEXTURE0+J);const Ke=Rt.getPrimaries(Rt.workingColorSpace),Pe=T.colorSpace===Dr?null:Rt.getPrimaries(T.colorSpace),Ge=T.colorSpace===Dr||Ke===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Ze=T.isCompressedTexture||T.image[0].isCompressedTexture,Ce=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let ge=0;ge<6;ge++)!Ze&&!Ce?Fe[ge]=E(T.image[ge],!0,a.maxCubemapSize):Fe[ge]=Ce?T.image[ge].image:T.image[ge],Fe[ge]=Gt(T,Fe[ge]);const at=Fe[0],qe=l.convert(T.format,T.colorSpace),Ne=l.convert(T.type),ft=P(T.internalFormat,qe,Ne,T.colorSpace),W=T.isVideoTexture!==!0,be=ue.__version===void 0||de===!0,Le=Se.dataReady;let Be=z(T,at);O(s.TEXTURE_CUBE_MAP,T);let Te;if(Ze){W&&be&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,ft,at.width,at.height);for(let ge=0;ge<6;ge++){Te=Fe[ge].mipmaps;for(let je=0;je<Te.length;je++){const dt=Te[je];T.format!==ci?qe!==null?W?Le&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,0,0,dt.width,dt.height,qe,dt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,ft,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,0,0,dt.width,dt.height,qe,Ne,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,ft,dt.width,dt.height,0,qe,Ne,dt.data)}}}else{if(Te=T.mipmaps,W&&be){Te.length>0&&Be++;const ge=Wt(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,ft,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ce){W?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Fe[ge].width,Fe[ge].height,qe,Ne,Fe[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ft,Fe[ge].width,Fe[ge].height,0,qe,Ne,Fe[ge].data);for(let je=0;je<Te.length;je++){const Dt=Te[je].image[ge].image;W?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,0,0,Dt.width,Dt.height,qe,Ne,Dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,ft,Dt.width,Dt.height,0,qe,Ne,Dt.data)}}else{W?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,qe,Ne,Fe[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ft,qe,Ne,Fe[ge]);for(let je=0;je<Te.length;je++){const dt=Te[je];W?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,0,0,qe,Ne,dt.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,ft,qe,Ne,dt.image[ge])}}}S(T)&&y(s.TEXTURE_CUBE_MAP),ue.__version=Se.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function _e(D,T,J,de,Se,ue){const Ke=l.convert(J.format,J.colorSpace),Pe=l.convert(J.type),Ge=P(J.internalFormat,Ke,Pe,J.colorSpace),Ze=i.get(T),Ce=i.get(J);if(Ce.__renderTarget=T,!Ze.__hasExternalTextures){const Fe=Math.max(1,T.width>>ue),at=Math.max(1,T.height>>ue);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?t.texImage3D(Se,ue,Ge,Fe,at,T.depth,0,Ke,Pe,null):t.texImage2D(Se,ue,Ge,Fe,at,0,Ke,Pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Oe(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,Se,Ce.__webglTexture,0,vt(T)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,Se,Ce.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(D,T,J){if(s.bindRenderbuffer(s.RENDERBUFFER,D),T.depthBuffer){const de=T.depthTexture,Se=de&&de.isDepthTexture?de.type:null,ue=A(T.stencilBuffer,Se),Ke=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=vt(T);Oe(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,ue,T.width,T.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ue,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,D)}else{const de=T.textures;for(let Se=0;Se<de.length;Se++){const ue=de[Se],Ke=l.convert(ue.format,ue.colorSpace),Pe=l.convert(ue.type),Ge=P(ue.internalFormat,Ke,Pe,ue.colorSpace),Ze=vt(T);J&&Oe(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Ge,T.width,T.height):Oe(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,Ge,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ge,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=i.get(T.depthTexture);de.__renderTarget=T,(!de.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const Se=de.__webglTexture,ue=vt(T);if(T.depthTexture.format===mo)Oe(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0);else if(T.depthTexture.format===go)Oe(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function st(D){const T=i.get(D),J=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const de=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const Se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",Se)};de.addEventListener("dispose",Se),T.__depthDisposeCallback=Se}T.__boundDepthTexture=de}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const de=D.texture.mipmaps;de&&de.length>0?Ie(T.__webglFramebuffer[0],D):Ie(T.__webglFramebuffer,D)}else if(J){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=s.createRenderbuffer(),De(T.__webglDepthbuffer[de],D,!1);else{const Se=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,ue)}}else{const de=D.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),De(T.__webglDepthbuffer,D,!1);else{const Se=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,ue)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(D,T,J){const de=i.get(D);T!==void 0&&_e(de.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&st(D)}function U(D){const T=D.texture,J=i.get(D),de=i.get(T);D.addEventListener("dispose",B);const Se=D.textures,ue=D.isWebGLCubeRenderTarget===!0,Ke=Se.length>1;if(Ke||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=T.version,c.memory.textures++),ue){J.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Pe]=[];for(let Ge=0;Ge<T.mipmaps.length;Ge++)J.__webglFramebuffer[Pe][Ge]=s.createFramebuffer()}else J.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)J.__webglFramebuffer[Pe]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let Pe=0,Ge=Se.length;Pe<Ge;Pe++){const Ze=i.get(Se[Pe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&Oe(D)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Se.length;Pe++){const Ge=Se[Pe];J.__webglColorRenderbuffer[Pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Pe]);const Ze=l.convert(Ge.format,Ge.colorSpace),Ce=l.convert(Ge.type),Fe=P(Ge.internalFormat,Ze,Ce,Ge.colorSpace,D.isXRRenderTarget===!0),at=vt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Fe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,J.__webglColorRenderbuffer[Pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),De(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),O(s.TEXTURE_CUBE_MAP,T);for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)_e(J.__webglFramebuffer[Pe][Ge],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ge);else _e(J.__webglFramebuffer[Pe],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);S(T)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Pe=0,Ge=Se.length;Pe<Ge;Pe++){const Ze=Se[Pe],Ce=i.get(Ze);let Fe=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Fe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Fe,Ce.__webglTexture),O(Fe,Ze),_e(J.__webglFramebuffer,D,Ze,s.COLOR_ATTACHMENT0+Pe,Fe,0),S(Ze)&&y(Fe)}t.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,de.__webglTexture),O(Pe,T),T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)_e(J.__webglFramebuffer[Ge],D,T,s.COLOR_ATTACHMENT0,Pe,Ge);else _e(J.__webglFramebuffer,D,T,s.COLOR_ATTACHMENT0,Pe,0);S(T)&&y(Pe),t.unbindTexture()}D.depthBuffer&&st(D)}function Et(D){const T=D.textures;for(let J=0,de=T.length;J<de;J++){const Se=T[J];if(S(Se)){const ue=L(D),Ke=i.get(Se).__webglTexture;t.bindTexture(ue,Ke),y(ue),t.unbindTexture()}}}const Qe=[],me=[];function ve(D){if(D.samples>0){if(Oe(D)===!1){const T=D.textures,J=D.width,de=D.height;let Se=s.COLOR_BUFFER_BIT;const ue=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=i.get(D),Pe=T.length>1;if(Pe)for(let Ze=0;Ze<T.length;Ze++)t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Ge=D.texture.mipmaps;Ge&&Ge.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ze=0;Ze<T.length;Ze++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),Pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ze]);const Ce=i.get(T[Ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ce,0)}s.blitFramebuffer(0,0,J,de,0,0,J,de,Se,s.NEAREST),f===!0&&(Qe.length=0,me.length=0,Qe.push(s.COLOR_ATTACHMENT0+Ze),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Qe.push(ue),me.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,me)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pe)for(let Ze=0;Ze<T.length;Ze++){t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ze]);const Ce=i.get(T[Ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.TEXTURE_2D,Ce,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const T=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function vt(D){return Math.min(a.maxSamples,D.samples)}function Oe(D){const T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ht(D){const T=c.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function Gt(D,T){const J=D.colorSpace,de=D.format,Se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==ha&&J!==Dr&&(Rt.getTransfer(J)===Ft?(de!==ci||Se!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function Wt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=re,this.resetTextureUnits=ee,this.setTexture2D=he,this.setTexture2DArray=oe,this.setTexture3D=fe,this.setTextureCube=H,this.rebindTextures=Ut,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Oe}function VT(s,e){function t(i,a=Dr){let l;const c=Rt.getTransfer(a);if(i===ki)return s.UNSIGNED_BYTE;if(i===Xd)return s.UNSIGNED_SHORT_4_4_4_4;if(i===jd)return s.UNSIGNED_SHORT_5_5_5_1;if(i===U_)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===k_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===I_)return s.BYTE;if(i===N_)return s.SHORT;if(i===fo)return s.UNSIGNED_SHORT;if(i===Wd)return s.INT;if(i===ds)return s.UNSIGNED_INT;if(i===Ei)return s.FLOAT;if(i===yo)return s.HALF_FLOAT;if(i===F_)return s.ALPHA;if(i===O_)return s.RGB;if(i===ci)return s.RGBA;if(i===mo)return s.DEPTH_COMPONENT;if(i===go)return s.DEPTH_STENCIL;if(i===Yd)return s.RED;if(i===qd)return s.RED_INTEGER;if(i===B_)return s.RG;if(i===$d)return s.RG_INTEGER;if(i===Kd)return s.RGBA_INTEGER;if(i===sc||i===ac||i===oc||i===lc)if(c===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===sc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ac)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===sc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ac)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ld||i===cd||i===ud||i===hd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===ld)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ud)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dd||i===fd||i===pd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===dd||i===fd)return c===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===pd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===md||i===gd||i===_d||i===vd||i===yd||i===xd||i===Sd||i===Md||i===Ed||i===wd||i===Td||i===bd||i===Ad||i===Cd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===md)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_d)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Md)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ed)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Td)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ad)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rd||i===Pd||i===Ld)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===Rd)return c===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ld)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dd||i===Id||i===Nd||i===Ud)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===Dd)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Id)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ud)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===po?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const HT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new t0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Or({vertexShader:HT,fragmentShader:GT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new xc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XT extends ps{constructor(e,t){super();const i=this;let a=null,l=1,c=null,h="local-floor",f=1,d=null,g=null,m=null,_=null,x=null,M=null;const E=typeof XRWebGLBinding<"u",S=new WT,y={},L=t.getContextAttributes();let P=null,A=null;const z=[],I=[],B=new lt;let $=null;const R=new Wn;R.viewport=new Pt;const C=new Wn;C.viewport=new Pt;const G=[R,C],ee=new tM;let re=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=z[K];return ae===void 0&&(ae=new Ch,z[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=z[K];return ae===void 0&&(ae=new Ch,z[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=z[K];return ae===void 0&&(ae=new Ch,z[K]=ae),ae.getHandSpace()};function he(K){const ae=I.indexOf(K.inputSource);if(ae===-1)return;const _e=z[ae];_e!==void 0&&(_e.update(K.inputSource,K.frame,d||c),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function oe(){a.removeEventListener("select",he),a.removeEventListener("selectstart",he),a.removeEventListener("selectend",he),a.removeEventListener("squeeze",he),a.removeEventListener("squeezestart",he),a.removeEventListener("squeezeend",he),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",fe);for(let K=0;K<z.length;K++){const ae=I[K];ae!==null&&(I[K]=null,z[K].disconnect(ae))}re=null,ce=null,S.reset();for(const K in y)delete y[K];e.setRenderTarget(P),x=null,_=null,m=null,a=null,A=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio($),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){h=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(K){d=K},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(a,t)),m},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",he),a.addEventListener("selectstart",he),a.addEventListener("selectend",he),a.addEventListener("squeeze",he),a.addEventListener("squeezestart",he),a.addEventListener("squeezeend",he),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",fe),L.xrCompatible!==!0&&await t.makeXRCompatible(),$=e.getPixelRatio(),e.getSize(B),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,De=null,Ie=null;L.depth&&(Ie=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=L.stencil?go:mo,De=L.stencil?po:ds);const st={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:l};m=this.getBinding(),_=m.createProjectionLayer(st),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),A=new fs(_.textureWidth,_.textureHeight,{format:ci,type:ki,depthTexture:new e0(_.textureWidth,_.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const _e={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(a,t,_e),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new fs(x.framebufferWidth,x.framebufferHeight,{format:ci,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await a.requestReferenceSpace(h),Ee.setContext(a),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function fe(K){for(let ae=0;ae<K.removed.length;ae++){const _e=K.removed[ae],De=I.indexOf(_e);De>=0&&(I[De]=null,z[De].disconnect(_e))}for(let ae=0;ae<K.added.length;ae++){const _e=K.added[ae];let De=I.indexOf(_e);if(De===-1){for(let st=0;st<z.length;st++)if(st>=I.length){I.push(_e),De=st;break}else if(I[st]===null){I[st]=_e,De=st;break}if(De===-1)break}const Ie=z[De];Ie&&Ie.connect(_e)}}const H=new Y,le=new Y;function se(K,ae,_e){H.setFromMatrixPosition(ae.matrixWorld),le.setFromMatrixPosition(_e.matrixWorld);const De=H.distanceTo(le),Ie=ae.projectionMatrix.elements,st=_e.projectionMatrix.elements,Ut=Ie[14]/(Ie[10]-1),U=Ie[14]/(Ie[10]+1),Et=(Ie[9]+1)/Ie[5],Qe=(Ie[9]-1)/Ie[5],me=(Ie[8]-1)/Ie[0],ve=(st[8]+1)/st[0],vt=Ut*me,Oe=Ut*ve,ht=De/(-me+ve),Gt=ht*-me;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Gt),K.translateZ(ht),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Wt=Ut+ht,D=U+ht,T=vt-Gt,J=Oe+(De-Gt),de=Et*U/D*Wt,Se=Qe*U/D*Wt;K.projectionMatrix.makePerspective(T,J,de,Se,Wt,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function F(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ae=K.near,_e=K.far;S.texture!==null&&(S.depthNear>0&&(ae=S.depthNear),S.depthFar>0&&(_e=S.depthFar)),ee.near=C.near=R.near=ae,ee.far=C.far=R.far=_e,(re!==ee.near||ce!==ee.far)&&(a.updateRenderState({depthNear:ee.near,depthFar:ee.far}),re=ee.near,ce=ee.far),ee.layers.mask=K.layers.mask|6,R.layers.mask=ee.layers.mask&3,C.layers.mask=ee.layers.mask&5;const De=K.parent,Ie=ee.cameras;F(ee,De);for(let st=0;st<Ie.length;st++)F(Ie[st],De);Ie.length===2?se(ee,R,C):ee.projectionMatrix.copy(R.projectionMatrix),O(K,ee,De)};function O(K,ae,_e){_e===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=da*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(_===null&&x===null))return f},this.setFoveation=function(K){f=K,_!==null&&(_.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ee)},this.getCameraTexture=function(K){return y[K]};let pe=null;function ye(K,ae){if(g=ae.getViewerPose(d||c),M=ae,g!==null){const _e=g.views;x!==null&&(e.setRenderTargetFramebuffer(A,x.framebuffer),e.setRenderTarget(A));let De=!1;_e.length!==ee.cameras.length&&(ee.cameras.length=0,De=!0);for(let U=0;U<_e.length;U++){const Et=_e[U];let Qe=null;if(x!==null)Qe=x.getViewport(Et);else{const ve=m.getViewSubImage(_,Et);Qe=ve.viewport,U===0&&(e.setRenderTargetTextures(A,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(A))}let me=G[U];me===void 0&&(me=new Wn,me.layers.enable(U),me.viewport=new Pt,G[U]=me),me.matrix.fromArray(Et.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Et.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),U===0&&(ee.matrix.copy(me.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),De===!0&&ee.cameras.push(me)}const Ie=a.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){m=i.getBinding();const U=m.getDepthInformation(_e[0]);U&&U.isValid&&U.texture&&S.init(U,a.renderState)}if(Ie&&Ie.includes("camera-access")&&E){e.state.unbindTexture(),m=i.getBinding();for(let U=0;U<_e.length;U++){const Et=_e[U].camera;if(Et){let Qe=y[Et];Qe||(Qe=new t0,y[Et]=Qe);const me=m.getCameraImage(Et);Qe.sourceTexture=me}}}}for(let _e=0;_e<z.length;_e++){const De=I[_e],Ie=z[_e];De!==null&&Ie!==void 0&&Ie.update(De,ae,d||c)}pe&&pe(K,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),M=null}const Ee=new o0;Ee.setAnimationLoop(ye),this.setAnimationLoop=function(K){pe=K},this.dispose=function(){}}}const ss=new Ti,jT=new Mt;function YT(s,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,Y_(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function a(S,y,L,P,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),m(S,y)):y.isMeshPhongMaterial?(l(S,y),g(S,y)):y.isMeshStandardMaterial?(l(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,A)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),E(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?f(S,y,L,P):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Xn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Xn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=e.get(y),P=L.envMap,A=L.envMapRotation;P&&(S.envMap.value=P,ss.copy(A),ss.x*=-1,ss.y*=-1,ss.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),S.envMapRotation.value.setFromMatrix4(jT.makeRotationFromEuler(ss)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function f(S,y,L,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=P*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function m(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Xn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const L=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function qT(s,e,t,i){let a={},l={},c=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,P){const A=P.program;i.uniformBlockBinding(L,A)}function d(L,P){let A=a[L.id];A===void 0&&(M(L),A=g(L),a[L.id]=A,L.addEventListener("dispose",S));const z=P.program;i.updateUBOMapping(L,z);const I=e.render.frame;l[L.id]!==I&&(_(L),l[L.id]=I)}function g(L){const P=m();L.__bindingPointIndex=P;const A=s.createBuffer(),z=L.__size,I=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,z,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,A),A}function m(){for(let L=0;L<h;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const P=a[L.id],A=L.uniforms,z=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let I=0,B=A.length;I<B;I++){const $=Array.isArray(A[I])?A[I]:[A[I]];for(let R=0,C=$.length;R<C;R++){const G=$[R];if(x(G,I,R,z)===!0){const ee=G.__offset,re=Array.isArray(G.value)?G.value:[G.value];let ce=0;for(let he=0;he<re.length;he++){const oe=re[he],fe=E(oe);typeof oe=="number"||typeof oe=="boolean"?(G.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ee+ce,G.__data)):oe.isMatrix3?(G.__data[0]=oe.elements[0],G.__data[1]=oe.elements[1],G.__data[2]=oe.elements[2],G.__data[3]=0,G.__data[4]=oe.elements[3],G.__data[5]=oe.elements[4],G.__data[6]=oe.elements[5],G.__data[7]=0,G.__data[8]=oe.elements[6],G.__data[9]=oe.elements[7],G.__data[10]=oe.elements[8],G.__data[11]=0):(oe.toArray(G.__data,ce),ce+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ee,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(L,P,A,z){const I=L.value,B=P+"_"+A;if(z[B]===void 0)return typeof I=="number"||typeof I=="boolean"?z[B]=I:z[B]=I.clone(),!0;{const $=z[B];if(typeof I=="number"||typeof I=="boolean"){if($!==I)return z[B]=I,!0}else if($.equals(I)===!1)return $.copy(I),!0}return!1}function M(L){const P=L.uniforms;let A=0;const z=16;for(let B=0,$=P.length;B<$;B++){const R=Array.isArray(P[B])?P[B]:[P[B]];for(let C=0,G=R.length;C<G;C++){const ee=R[C],re=Array.isArray(ee.value)?ee.value:[ee.value];for(let ce=0,he=re.length;ce<he;ce++){const oe=re[ce],fe=E(oe),H=A%z,le=H%fe.boundary,se=H+le;A+=le,se!==0&&z-se<fe.storage&&(A+=z-se),ee.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=A,A+=fe.storage}}}const I=A%z;return I>0&&(A+=z-I),L.__size=A,L.__cache={},this}function E(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function S(L){const P=L.target;P.removeEventListener("dispose",S);const A=c.indexOf(P.__bindingPointIndex);c.splice(A,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function y(){for(const L in a)s.deleteBuffer(a[L]);c=[],a={},l={}}return{bind:f,update:d,dispose:y}}class $T{constructor(e={}){const{canvas:t=eS(),context:i=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,y=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let z=!1;this._outputColorSpace=Gn;let I=0,B=0,$=null,R=-1,C=null;const G=new Pt,ee=new Pt;let re=null;const ce=new pt(0);let he=0,oe=t.width,fe=t.height,H=1,le=null,se=null;const F=new Pt(0,0,oe,fe),O=new Pt(0,0,oe,fe);let pe=!1;const ye=new tf;let Ee=!1,K=!1;const ae=new Mt,_e=new Y,De=new Pt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Ut(){return $===null?H:1}let U=i;function Et(b,q){return t.getContext(b,q)}try{const b={alpha:!0,depth:a,stencil:l,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hd}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",Te,!1),U===null){const q="webgl2";if(U=Et(q,b),U===null)throw Et(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Qe,me,ve,vt,Oe,ht,Gt,Wt,D,T,J,de,Se,ue,Ke,Pe,Ge,Ze,Ce,Fe,at,qe,Ne,ft;function W(){Qe=new sw(U),Qe.init(),qe=new VT(U,Qe),me=new J1(U,Qe,e,qe),ve=new BT(U,Qe),me.reversedDepthBuffer&&_&&ve.buffers.depth.setReversed(!0),vt=new lw(U),Oe=new bT,ht=new zT(U,Qe,ve,Oe,me,qe,vt),Gt=new ew(A),Wt=new rw(A),D=new pM(U),Ne=new K1(U,D),T=new aw(U,D,vt,Ne),J=new uw(U,T,D,vt),Ce=new cw(U,me,ht),Pe=new Q1(Oe),de=new TT(A,Gt,Wt,Qe,me,Ne,Pe),Se=new YT(A,Oe),ue=new CT,Ke=new NT(Qe),Ze=new $1(A,Gt,Wt,ve,J,x,f),Ge=new FT(A,J,me),ft=new qT(U,vt,me,ve),Fe=new Z1(U,Qe,vt),at=new ow(U,Qe,vt),vt.programs=de.programs,A.capabilities=me,A.extensions=Qe,A.properties=Oe,A.renderLists=ue,A.shadowMap=Ge,A.state=ve,A.info=vt}W();const be=new XT(A,U);this.xr=be,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Qe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Qe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(oe,fe,!1))},this.getSize=function(b){return b.set(oe,fe)},this.setSize=function(b,q,ne=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=b,fe=q,t.width=Math.floor(b*H),t.height=Math.floor(q*H),ne===!0&&(t.style.width=b+"px",t.style.height=q+"px"),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(oe*H,fe*H).floor()},this.setDrawingBufferSize=function(b,q,ne){oe=b,fe=q,H=ne,t.width=Math.floor(b*ne),t.height=Math.floor(q*ne),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b.copy(G)},this.getViewport=function(b){return b.copy(F)},this.setViewport=function(b,q,ne,ie){b.isVector4?F.set(b.x,b.y,b.z,b.w):F.set(b,q,ne,ie),ve.viewport(G.copy(F).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(O)},this.setScissor=function(b,q,ne,ie){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,q,ne,ie),ve.scissor(ee.copy(O).multiplyScalar(H).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(b){ve.setScissorTest(pe=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,ne=!0){let ie=0;if(b){let j=!1;if($!==null){const Ae=$.texture.format;j=Ae===Kd||Ae===$d||Ae===qd}if(j){const Ae=$.texture.type,Ue=Ae===ki||Ae===ds||Ae===fo||Ae===po||Ae===Xd||Ae===jd,We=Ze.getClearColor(),ze=Ze.getClearAlpha(),rt=We.r,ot=We.g,Je=We.b;Ue?(M[0]=rt,M[1]=ot,M[2]=Je,M[3]=ze,U.clearBufferuiv(U.COLOR,0,M)):(E[0]=rt,E[1]=ot,E[2]=Je,E[3]=ze,U.clearBufferiv(U.COLOR,0,E))}else ie|=U.COLOR_BUFFER_BIT}q&&(ie|=U.DEPTH_BUFFER_BIT),ne&&(ie|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ze.dispose(),ue.dispose(),Ke.dispose(),Oe.dispose(),Gt.dispose(),Wt.dispose(),J.dispose(),Ne.dispose(),ft.dispose(),de.dispose(),be.dispose(),be.removeEventListener("sessionstart",_n),be.removeEventListener("sessionend",ms),jn.stop()};function Le(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const b=vt.autoReset,q=Ge.enabled,ne=Ge.autoUpdate,ie=Ge.needsUpdate,j=Ge.type;W(),vt.autoReset=b,Ge.enabled=q,Ge.autoUpdate=ne,Ge.needsUpdate=ie,Ge.type=j}function Te(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ge(b){const q=b.target;q.removeEventListener("dispose",ge),je(q)}function je(b){dt(b),Oe.remove(b)}function dt(b){const q=Oe.get(b).programs;q!==void 0&&(q.forEach(function(ne){de.releaseProgram(ne)}),b.isShaderMaterial&&de.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,ne,ie,j,Ae){q===null&&(q=Ie);const Ue=j.isMesh&&j.matrixWorld.determinant()<0,We=zi(b,q,ne,ie,j);ve.setMaterial(ie,Ue);let ze=ne.index,rt=1;if(ie.wireframe===!0){if(ze=T.getWireframeAttribute(ne),ze===void 0)return;rt=2}const ot=ne.drawRange,Je=ne.attributes.position;let ct=ot.start*rt,Lt=(ot.start+ot.count)*rt;Ae!==null&&(ct=Math.max(ct,Ae.start*rt),Lt=Math.min(Lt,(Ae.start+Ae.count)*rt)),ze!==null?(ct=Math.max(ct,0),Lt=Math.min(Lt,ze.count)):Je!=null&&(ct=Math.max(ct,0),Lt=Math.min(Lt,Je.count));const Tt=Lt-ct;if(Tt<0||Tt===1/0)return;Ne.setup(j,ie,We,ne,ze);let zt,It=Fe;if(ze!==null&&(zt=D.get(ze),It=at,It.setIndex(zt)),j.isMesh)ie.wireframe===!0?(ve.setLineWidth(ie.wireframeLinewidth*Ut()),It.setMode(U.LINES)):It.setMode(U.TRIANGLES);else if(j.isLine){let tt=ie.linewidth;tt===void 0&&(tt=1),ve.setLineWidth(tt*Ut()),j.isLineSegments?It.setMode(U.LINES):j.isLineLoop?It.setMode(U.LINE_LOOP):It.setMode(U.LINE_STRIP)}else j.isPoints?It.setMode(U.POINTS):j.isSprite&&It.setMode(U.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)vo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))It.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const tt=j._multiDrawStarts,kt=j._multiDrawCounts,xt=j._multiDrawCount,rn=ze?D.get(ze).bytesPerElement:1,hi=Oe.get(ie).currentProgram.getUniforms();for(let An=0;An<xt;An++)hi.setValue(U,"_gl_DrawID",An),It.render(tt[An]/rn,kt[An])}else if(j.isInstancedMesh)It.renderInstances(ct,Tt,j.count);else if(ne.isInstancedBufferGeometry){const tt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,kt=Math.min(ne.instanceCount,tt);It.renderInstances(ct,Tt,kt)}else It.render(ct,Tt)};function Dt(b,q,ne){b.transparent===!0&&b.side===Ii&&b.forceSinglePass===!1?(b.side=Xn,b.needsUpdate=!0,_s(b,q,ne),b.side=kr,b.needsUpdate=!0,_s(b,q,ne),b.side=Ii):_s(b,q,ne)}this.compile=function(b,q,ne=null){ne===null&&(ne=b),y=Ke.get(ne),y.init(q),P.push(y),ne.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),b!==ne&&b.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),y.setupLights();const ie=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ae=j.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){const We=Ae[Ue];Dt(We,ne,j),ie.add(We)}else Dt(Ae,ne,j),ie.add(Ae)}),y=P.pop(),ie},this.compileAsync=function(b,q,ne=null){const ie=this.compile(b,q,ne);return new Promise(j=>{function Ae(){if(ie.forEach(function(Ue){Oe.get(Ue).currentProgram.isReady()&&ie.delete(Ue)}),ie.size===0){j(b);return}setTimeout(Ae,10)}Qe.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let wt=null;function ei(b){wt&&wt(b)}function _n(){jn.stop()}function ms(){jn.start()}const jn=new o0;jn.setAnimationLoop(ei),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(b){wt=b,be.setAnimationLoop(b),b===null?jn.stop():jn.start()},be.addEventListener("sessionstart",_n),be.addEventListener("sessionend",ms),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(q),q=be.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,q,$),y=Ke.get(b,P.length),y.init(q),P.push(y),ae.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ye.setFromProjectionMatrix(ae,Ui,q.reversedDepth),K=this.localClippingEnabled,Ee=Pe.init(this.clippingPlanes,K),S=ue.get(b,L.length),S.init(),L.push(S),be.enabled===!0&&be.isPresenting===!0){const Ae=A.xr.getDepthSensingMesh();Ae!==null&&ya(Ae,q,-1/0,A.sortObjects)}ya(b,q,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(le,se),st=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,st&&Ze.addToRenderList(S,b),this.info.render.frame++,Ee===!0&&Pe.beginShadows();const ne=y.state.shadowsArray;Ge.render(ne,b,q),Ee===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=S.opaque,j=S.transmissive;if(y.setupLights(),q.isArrayCamera){const Ae=q.cameras;if(j.length>0)for(let Ue=0,We=Ae.length;Ue<We;Ue++){const ze=Ae[Ue];Br(ie,j,b,ze)}st&&Ze.render(b);for(let Ue=0,We=Ae.length;Ue<We;Ue++){const ze=Ae[Ue];sr(S,b,ze,ze.viewport)}}else j.length>0&&Br(ie,j,b,q),st&&Ze.render(b),sr(S,b,q);$!==null&&B===0&&(ht.updateMultisampleRenderTarget($),ht.updateRenderTargetMipmap($)),b.isScene===!0&&b.onAfterRender(A,b,q),Ne.resetDefaultState(),R=-1,C=null,P.pop(),P.length>0?(y=P[P.length-1],Ee===!0&&Pe.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function ya(b,q,ne,ie){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)ne=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ye.intersectsSprite(b)){ie&&De.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ae);const Ue=J.update(b),We=b.material;We.visible&&S.push(b,Ue,We,ne,De.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ye.intersectsObject(b))){const Ue=J.update(b),We=b.material;if(ie&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),De.copy(b.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),De.copy(Ue.boundingSphere.center)),De.applyMatrix4(b.matrixWorld).applyMatrix4(ae)),Array.isArray(We)){const ze=Ue.groups;for(let rt=0,ot=ze.length;rt<ot;rt++){const Je=ze[rt],ct=We[Je.materialIndex];ct&&ct.visible&&S.push(b,Ue,ct,ne,De.z,Je)}}else We.visible&&S.push(b,Ue,We,ne,De.z,null)}}const Ae=b.children;for(let Ue=0,We=Ae.length;Ue<We;Ue++)ya(Ae[Ue],q,ne,ie)}function sr(b,q,ne,ie){const j=b.opaque,Ae=b.transmissive,Ue=b.transparent;y.setupLightsView(ne),Ee===!0&&Pe.setGlobalState(A.clippingPlanes,ne),ie&&ve.viewport(G.copy(ie)),j.length>0&&Bi(j,q,ne),Ae.length>0&&Bi(Ae,q,ne),Ue.length>0&&Bi(Ue,q,ne),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Br(b,q,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ie.id]===void 0&&(y.state.transmissionRenderTarget[ie.id]=new fs(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?yo:ki,minFilter:hs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Ae=y.state.transmissionRenderTarget[ie.id],Ue=ie.viewport||G;Ae.setSize(Ue.z*A.transmissionResolutionScale,Ue.w*A.transmissionResolutionScale);const We=A.getRenderTarget(),ze=A.getActiveCubeFace(),rt=A.getActiveMipmapLevel();A.setRenderTarget(Ae),A.getClearColor(ce),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),st&&Ze.render(ne);const ot=A.toneMapping;A.toneMapping=Ur;const Je=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),y.setupLightsView(ie),Ee===!0&&Pe.setGlobalState(A.clippingPlanes,ie),Bi(b,ne,ie),ht.updateMultisampleRenderTarget(Ae),ht.updateRenderTargetMipmap(Ae),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Lt=0,Tt=q.length;Lt<Tt;Lt++){const zt=q[Lt],It=zt.object,tt=zt.geometry,kt=zt.material,xt=zt.group;if(kt.side===Ii&&It.layers.test(ie.layers)){const rn=kt.side;kt.side=Xn,kt.needsUpdate=!0,gs(It,ne,ie,tt,kt,xt),kt.side=rn,kt.needsUpdate=!0,ct=!0}}ct===!0&&(ht.updateMultisampleRenderTarget(Ae),ht.updateRenderTargetMipmap(Ae))}A.setRenderTarget(We,ze,rt),A.setClearColor(ce,he),Je!==void 0&&(ie.viewport=Je),A.toneMapping=ot}function Bi(b,q,ne){const ie=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Ae=b.length;j<Ae;j++){const Ue=b[j],We=Ue.object,ze=Ue.geometry,rt=Ue.group;let ot=Ue.material;ot.allowOverride===!0&&ie!==null&&(ot=ie),We.layers.test(ne.layers)&&gs(We,q,ne,ze,ot,rt)}}function gs(b,q,ne,ie,j,Ae){b.onBeforeRender(A,q,ne,ie,j,Ae),b.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(A,q,ne,ie,b,Ae),j.transparent===!0&&j.side===Ii&&j.forceSinglePass===!1?(j.side=Xn,j.needsUpdate=!0,A.renderBufferDirect(ne,q,ie,j,b,Ae),j.side=kr,j.needsUpdate=!0,A.renderBufferDirect(ne,q,ie,j,b,Ae),j.side=Ii):A.renderBufferDirect(ne,q,ie,j,b,Ae),b.onAfterRender(A,q,ne,ie,j,Ae)}function _s(b,q,ne){q.isScene!==!0&&(q=Ie);const ie=Oe.get(b),j=y.state.lights,Ae=y.state.shadowsArray,Ue=j.state.version,We=de.getParameters(b,j.state,Ae,q,ne),ze=de.getProgramCacheKey(We);let rt=ie.programs;ie.environment=b.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(b.isMeshStandardMaterial?Wt:Gt).get(b.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,rt===void 0&&(b.addEventListener("dispose",ge),rt=new Map,ie.programs=rt);let ot=rt.get(ze);if(ot!==void 0){if(ie.currentProgram===ot&&ie.lightsStateVersion===Ue)return Mo(b,We),ot}else We.uniforms=de.getUniforms(b),b.onBeforeCompile(We,A),ot=de.acquireProgram(We,ze),rt.set(ze,ot),ie.uniforms=We.uniforms;const Je=ie.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Je.clippingPlanes=Pe.uniform),Mo(b,We),ie.needsLights=wo(b),ie.lightsStateVersion=Ue,ie.needsLights&&(Je.ambientLightColor.value=j.state.ambient,Je.lightProbe.value=j.state.probe,Je.directionalLights.value=j.state.directional,Je.directionalLightShadows.value=j.state.directionalShadow,Je.spotLights.value=j.state.spot,Je.spotLightShadows.value=j.state.spotShadow,Je.rectAreaLights.value=j.state.rectArea,Je.ltc_1.value=j.state.rectAreaLTC1,Je.ltc_2.value=j.state.rectAreaLTC2,Je.pointLights.value=j.state.point,Je.pointLightShadows.value=j.state.pointShadow,Je.hemisphereLights.value=j.state.hemi,Je.directionalShadowMap.value=j.state.directionalShadowMap,Je.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Je.spotShadowMap.value=j.state.spotShadowMap,Je.spotLightMatrix.value=j.state.spotLightMatrix,Je.spotLightMap.value=j.state.spotLightMap,Je.pointShadowMap.value=j.state.pointShadowMap,Je.pointShadowMatrix.value=j.state.pointShadowMatrix),ie.currentProgram=ot,ie.uniformsList=null,ot}function So(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=uc.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Mo(b,q){const ne=Oe.get(b);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function zi(b,q,ne,ie,j){q.isScene!==!0&&(q=Ie),ht.resetTextureUnits();const Ae=q.fog,Ue=ie.isMeshStandardMaterial?q.environment:null,We=$===null?A.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ha,ze=(ie.isMeshStandardMaterial?Wt:Gt).get(ie.envMap||Ue),rt=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ot=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Je=!!ne.morphAttributes.position,ct=!!ne.morphAttributes.normal,Lt=!!ne.morphAttributes.color;let Tt=Ur;ie.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Tt=A.toneMapping);const zt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,It=zt!==void 0?zt.length:0,tt=Oe.get(ie),kt=y.state.lights;if(Ee===!0&&(K===!0||b!==C)){const Qt=b===C&&ie.id===R;Pe.setState(ie,b,Qt)}let xt=!1;ie.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==kt.state.version||tt.outputColorSpace!==We||j.isBatchedMesh&&tt.batching===!1||!j.isBatchedMesh&&tt.batching===!0||j.isBatchedMesh&&tt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&tt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&tt.instancing===!1||!j.isInstancedMesh&&tt.instancing===!0||j.isSkinnedMesh&&tt.skinning===!1||!j.isSkinnedMesh&&tt.skinning===!0||j.isInstancedMesh&&tt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&tt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&tt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&tt.instancingMorph===!1&&j.morphTexture!==null||tt.envMap!==ze||ie.fog===!0&&tt.fog!==Ae||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Pe.numPlanes||tt.numIntersection!==Pe.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==ot||tt.morphTargets!==Je||tt.morphNormals!==ct||tt.morphColors!==Lt||tt.toneMapping!==Tt||tt.morphTargetsCount!==It)&&(xt=!0):(xt=!0,tt.__version=ie.version);let rn=tt.currentProgram;xt===!0&&(rn=_s(ie,q,j));let hi=!1,An=!1,zr=!1;const Vt=rn.getUniforms(),Cn=tt.uniforms;if(ve.useProgram(rn.program)&&(hi=!0,An=!0,zr=!0),ie.id!==R&&(R=ie.id,An=!0),hi||C!==b){ve.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Vt.setValue(U,"projectionMatrix",b.projectionMatrix),Vt.setValue(U,"viewMatrix",b.matrixWorldInverse);const yn=Vt.map.cameraPosition;yn!==void 0&&yn.setValue(U,_e.setFromMatrixPosition(b.matrixWorld)),me.logarithmicDepthBuffer&&Vt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Vt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,An=!0,zr=!0)}if(j.isSkinnedMesh){Vt.setOptional(U,j,"bindMatrix"),Vt.setOptional(U,j,"bindMatrixInverse");const Qt=j.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Vt.setValue(U,"boneTexture",Qt.boneTexture,ht))}j.isBatchedMesh&&(Vt.setOptional(U,j,"batchingTexture"),Vt.setValue(U,"batchingTexture",j._matricesTexture,ht),Vt.setOptional(U,j,"batchingIdTexture"),Vt.setValue(U,"batchingIdTexture",j._indirectTexture,ht),Vt.setOptional(U,j,"batchingColorTexture"),j._colorsTexture!==null&&Vt.setValue(U,"batchingColorTexture",j._colorsTexture,ht));const vn=ne.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Ce.update(j,ne,rn),(An||tt.receiveShadow!==j.receiveShadow)&&(tt.receiveShadow=j.receiveShadow,Vt.setValue(U,"receiveShadow",j.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Cn.envMap.value=ze,Cn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&q.environment!==null&&(Cn.envMapIntensity.value=q.environmentIntensity),An&&(Vt.setValue(U,"toneMappingExposure",A.toneMappingExposure),tt.needsLights&&Eo(Cn,zr),Ae&&ie.fog===!0&&Se.refreshFogUniforms(Cn,Ae),Se.refreshMaterialUniforms(Cn,ie,H,fe,y.state.transmissionRenderTarget[b.id]),uc.upload(U,So(tt),Cn,ht)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(uc.upload(U,So(tt),Cn,ht),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Vt.setValue(U,"center",j.center),Vt.setValue(U,"modelViewMatrix",j.modelViewMatrix),Vt.setValue(U,"normalMatrix",j.normalMatrix),Vt.setValue(U,"modelMatrix",j.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Qt=ie.uniformsGroups;for(let yn=0,Vr=Qt.length;yn<Vr;yn++){const St=Qt[yn];ft.update(St,rn),ft.bind(St,rn)}}return rn}function Eo(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function wo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(b,q,ne){const ie=Oe.get(b);ie.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),Oe.get(b.texture).__webglTexture=q,Oe.get(b.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ne,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const ne=Oe.get(b);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0};const Tc=U.createFramebuffer();this.setRenderTarget=function(b,q=0,ne=0){$=b,I=q,B=ne;let ie=!0,j=null,Ae=!1,Ue=!1;if(b){const ze=Oe.get(b);if(ze.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(U.FRAMEBUFFER,null),ie=!1;else if(ze.__webglFramebuffer===void 0)ht.setupRenderTarget(b);else if(ze.__hasExternalTextures)ht.rebindTextures(b,Oe.get(b.texture).__webglTexture,Oe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Je=b.depthTexture;if(ze.__boundDepthTexture!==Je){if(Je!==null&&Oe.has(Je)&&(b.width!==Je.image.width||b.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(b)}}const rt=b.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ue=!0);const ot=Oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ot[q])?j=ot[q][ne]:j=ot[q],Ae=!0):b.samples>0&&ht.useMultisampledRTT(b)===!1?j=Oe.get(b).__webglMultisampledFramebuffer:Array.isArray(ot)?j=ot[ne]:j=ot,G.copy(b.viewport),ee.copy(b.scissor),re=b.scissorTest}else G.copy(F).multiplyScalar(H).floor(),ee.copy(O).multiplyScalar(H).floor(),re=pe;if(ne!==0&&(j=Tc),ve.bindFramebuffer(U.FRAMEBUFFER,j)&&ie&&ve.drawBuffers(b,j),ve.viewport(G),ve.scissor(ee),ve.setScissorTest(re),Ae){const ze=Oe.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,ze.__webglTexture,ne)}else if(Ue){const ze=q;for(let rt=0;rt<b.textures.length;rt++){const ot=Oe.get(b.textures[rt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+rt,ot.__webglTexture,ne,ze)}}else if(b!==null&&ne!==0){const ze=Oe.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ze.__webglTexture,ne)}R=-1},this.readRenderTargetPixels=function(b,q,ne,ie,j,Ae,Ue,We=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){ve.bindFramebuffer(U.FRAMEBUFFER,ze);try{const rt=b.textures[We],ot=rt.format,Je=rt.type;if(!me.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-ie&&ne>=0&&ne<=b.height-j&&(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+We),U.readPixels(q,ne,ie,j,qe.convert(ot),qe.convert(Je),Ae))}finally{const rt=$!==null?Oe.get($).__webglFramebuffer:null;ve.bindFramebuffer(U.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(b,q,ne,ie,j,Ae,Ue,We=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze)if(q>=0&&q<=b.width-ie&&ne>=0&&ne<=b.height-j){ve.bindFramebuffer(U.FRAMEBUFFER,ze);const rt=b.textures[We],ot=rt.format,Je=rt.type;if(!me.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ct),U.bufferData(U.PIXEL_PACK_BUFFER,Ae.byteLength,U.STREAM_READ),b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+We),U.readPixels(q,ne,ie,j,qe.convert(ot),qe.convert(Je),0);const Lt=$!==null?Oe.get($).__webglFramebuffer:null;ve.bindFramebuffer(U.FRAMEBUFFER,Lt);const Tt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await tS(U,Tt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ct),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ae),U.deleteBuffer(ct),U.deleteSync(Tt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,ne=0){const ie=Math.pow(2,-ne),j=Math.floor(b.image.width*ie),Ae=Math.floor(b.image.height*ie),Ue=q!==null?q.x:0,We=q!==null?q.y:0;ht.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,ne,0,0,Ue,We,j,Ae),ve.unbindTexture()};const To=U.createFramebuffer(),bo=U.createFramebuffer();this.copyTextureToTexture=function(b,q,ne=null,ie=null,j=0,Ae=null){Ae===null&&(j!==0?(vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=j,j=0):Ae=0);let Ue,We,ze,rt,ot,Je,ct,Lt,Tt;const zt=b.isCompressedTexture?b.mipmaps[Ae]:b.image;if(ne!==null)Ue=ne.max.x-ne.min.x,We=ne.max.y-ne.min.y,ze=ne.isBox3?ne.max.z-ne.min.z:1,rt=ne.min.x,ot=ne.min.y,Je=ne.isBox3?ne.min.z:0;else{const vn=Math.pow(2,-j);Ue=Math.floor(zt.width*vn),We=Math.floor(zt.height*vn),b.isDataArrayTexture?ze=zt.depth:b.isData3DTexture?ze=Math.floor(zt.depth*vn):ze=1,rt=0,ot=0,Je=0}ie!==null?(ct=ie.x,Lt=ie.y,Tt=ie.z):(ct=0,Lt=0,Tt=0);const It=qe.convert(q.format),tt=qe.convert(q.type);let kt;q.isData3DTexture?(ht.setTexture3D(q,0),kt=U.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ht.setTexture2DArray(q,0),kt=U.TEXTURE_2D_ARRAY):(ht.setTexture2D(q,0),kt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);const xt=U.getParameter(U.UNPACK_ROW_LENGTH),rn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),hi=U.getParameter(U.UNPACK_SKIP_PIXELS),An=U.getParameter(U.UNPACK_SKIP_ROWS),zr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,zt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,zt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,rt),U.pixelStorei(U.UNPACK_SKIP_ROWS,ot),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Je);const Vt=b.isDataArrayTexture||b.isData3DTexture,Cn=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const vn=Oe.get(b),Qt=Oe.get(q),yn=Oe.get(vn.__renderTarget),Vr=Oe.get(Qt.__renderTarget);ve.bindFramebuffer(U.READ_FRAMEBUFFER,yn.__webglFramebuffer),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let St=0;St<ze;St++)Vt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.get(b).__webglTexture,j,Je+St),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.get(q).__webglTexture,Ae,Tt+St)),U.blitFramebuffer(rt,ot,Ue,We,ct,Lt,Ue,We,U.DEPTH_BUFFER_BIT,U.NEAREST);ve.bindFramebuffer(U.READ_FRAMEBUFFER,null),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||Oe.has(b)){const vn=Oe.get(b),Qt=Oe.get(q);ve.bindFramebuffer(U.READ_FRAMEBUFFER,To),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,bo);for(let yn=0;yn<ze;yn++)Vt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vn.__webglTexture,j,Je+yn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vn.__webglTexture,j),Cn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qt.__webglTexture,Ae,Tt+yn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Qt.__webglTexture,Ae),j!==0?U.blitFramebuffer(rt,ot,Ue,We,ct,Lt,Ue,We,U.COLOR_BUFFER_BIT,U.NEAREST):Cn?U.copyTexSubImage3D(kt,Ae,ct,Lt,Tt+yn,rt,ot,Ue,We):U.copyTexSubImage2D(kt,Ae,ct,Lt,rt,ot,Ue,We);ve.bindFramebuffer(U.READ_FRAMEBUFFER,null),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Cn?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(kt,Ae,ct,Lt,Tt,Ue,We,ze,It,tt,zt.data):q.isCompressedArrayTexture?U.compressedTexSubImage3D(kt,Ae,ct,Lt,Tt,Ue,We,ze,It,zt.data):U.texSubImage3D(kt,Ae,ct,Lt,Tt,Ue,We,ze,It,tt,zt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ae,ct,Lt,Ue,We,It,tt,zt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ae,ct,Lt,zt.width,zt.height,It,zt.data):U.texSubImage2D(U.TEXTURE_2D,Ae,ct,Lt,Ue,We,It,tt,zt);U.pixelStorei(U.UNPACK_ROW_LENGTH,xt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,hi),U.pixelStorei(U.UNPACK_SKIP_ROWS,An),U.pixelStorei(U.UNPACK_SKIP_IMAGES,zr),Ae===0&&q.generateMipmaps&&U.generateMipmap(kt),ve.unbindTexture()},this.initRenderTarget=function(b){Oe.get(b).__webglFramebuffer===void 0&&ht.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ht.setTextureCube(b,0):b.isData3DTexture?ht.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ht.setTexture2DArray(b,0):ht.setTexture2D(b,0),ve.unbindTexture()},this.resetState=function(){I=0,B=0,$=null,ve.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const KT=/^[og]\s*(.+)?/,ZT=/^mtllib /,JT=/^usemtl /,QT=/^usemap /,d_=/\s+/,f_=new Y,Gh=new Y,p_=new Y,m_=new Y,li=new Y,ic=new pt;function eb(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(a,l){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const h={index:this.materials.length,name:a||"",mtllib:Array.isArray(l)&&l.length>0?l[l.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(f){const d={index:typeof f=="number"?f:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return d.clone=this.clone.bind(d),d}};return this.materials.push(h),h},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(a){const l=this.currentMaterial();if(l&&l.groupEnd===-1&&(l.groupEnd=this.geometry.vertices.length/3,l.groupCount=l.groupEnd-l.groupStart,l.inherited=!1),a&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return a&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),l}},i&&i.name&&typeof i.clone=="function"){const a=i.clone(0);a.inherited=!0,this.object.materials.push(a)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const a=this.vertices,l=this.object.geometry.vertices;l.push(a[e+0],a[e+1],a[e+2]),l.push(a[t+0],a[t+1],a[t+2]),l.push(a[i+0],a[i+1],a[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const a=this.normals,l=this.object.geometry.normals;l.push(a[e+0],a[e+1],a[e+2]),l.push(a[t+0],a[t+1],a[t+2]),l.push(a[i+0],a[i+1],a[i+2])},addFaceNormal:function(e,t,i){const a=this.vertices,l=this.object.geometry.normals;f_.fromArray(a,e),Gh.fromArray(a,t),p_.fromArray(a,i),li.subVectors(p_,Gh),m_.subVectors(f_,Gh),li.cross(m_),li.normalize(),l.push(li.x,li.y,li.z),l.push(li.x,li.y,li.z),l.push(li.x,li.y,li.z)},addColor:function(e,t,i){const a=this.colors,l=this.object.geometry.colors;a[e]!==void 0&&l.push(a[e+0],a[e+1],a[e+2]),a[t]!==void 0&&l.push(a[t+0],a[t+1],a[t+2]),a[i]!==void 0&&l.push(a[i+0],a[i+1],a[i+2])},addUV:function(e,t,i){const a=this.uvs,l=this.object.geometry.uvs;l.push(a[e+0],a[e+1]),l.push(a[t+0],a[t+1]),l.push(a[i+0],a[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,a,l,c,h,f,d){const g=this.vertices.length;let m=this.parseVertexIndex(e,g),_=this.parseVertexIndex(t,g),x=this.parseVertexIndex(i,g);if(this.addVertex(m,_,x),this.addColor(m,_,x),h!==void 0&&h!==""){const M=this.normals.length;m=this.parseNormalIndex(h,M),_=this.parseNormalIndex(f,M),x=this.parseNormalIndex(d,M),this.addNormal(m,_,x)}else this.addFaceNormal(m,_,x);if(a!==void 0&&a!==""){const M=this.uvs.length;m=this.parseUVIndex(a,M),_=this.parseUVIndex(l,M),x=this.parseUVIndex(c,M),this.addUV(m,_,x),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,a=e.length;i<a;i++){const l=this.parseVertexIndex(e[i],t);this.addVertexPoint(l),this.addColor(l)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,a=this.uvs.length;for(let l=0,c=e.length;l<c;l++)this.addVertexLine(this.parseVertexIndex(e[l],i));for(let l=0,c=t.length;l<c;l++)this.addUVLine(this.parseUVIndex(t[l],a))}};return s.startObject("",!1),s}class tb extends _a{constructor(e){super(e),this.materials=null}load(e,t,i,a){const l=this,c=new qS(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(h){try{t(l.parse(h))}catch(f){a?a(f):console.error(f),l.manager.itemError(e)}},i,a)}setMaterials(e){return this.materials=e,this}parse(e){const t=new eb;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let a=[];for(let h=0,f=i.length;h<f;h++){const d=i[h].trimStart();if(d.length===0)continue;const g=d.charAt(0);if(g!=="#")if(g==="v"){const m=d.split(d_);switch(m[0]){case"v":t.vertices.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])),m.length>=7?(ic.setRGB(parseFloat(m[4]),parseFloat(m[5]),parseFloat(m[6]),Gn),t.colors.push(ic.r,ic.g,ic.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3]));break;case"vt":t.uvs.push(parseFloat(m[1]),parseFloat(m[2]));break}}else if(g==="f"){const _=d.slice(1).trim().split(d_),x=[];for(let E=0,S=_.length;E<S;E++){const y=_[E];if(y.length>0){const L=y.split("/");x.push(L)}}const M=x[0];for(let E=1,S=x.length-1;E<S;E++){const y=x[E],L=x[E+1];t.addFace(M[0],y[0],L[0],M[1],y[1],L[1],M[2],y[2],L[2])}}else if(g==="l"){const m=d.substring(1).trim().split(" ");let _=[];const x=[];if(d.indexOf("/")===-1)_=m;else for(let M=0,E=m.length;M<E;M++){const S=m[M].split("/");S[0]!==""&&_.push(S[0]),S[1]!==""&&x.push(S[1])}t.addLineGeometry(_,x)}else if(g==="p"){const _=d.slice(1).trim().split(" ");t.addPointGeometry(_)}else if((a=KT.exec(d))!==null){const m=(" "+a[0].slice(1).trim()).slice(1);t.startObject(m)}else if(JT.test(d))t.object.startMaterial(d.substring(7).trim(),t.materialLibraries);else if(ZT.test(d))t.materialLibraries.push(d.substring(7).trim());else if(QT.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if(a=d.split(" "),a.length>1){const _=a[1].trim().toLowerCase();t.object.smooth=_!=="0"&&_!=="off"}else t.object.smooth=!0;const m=t.object.currentMaterial();m&&(m.smooth=t.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}t.finalize();const l=new ia;if(l.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let h=0,f=t.objects.length;h<f;h++){const d=t.objects[h],g=d.geometry,m=d.materials,_=g.type==="Line",x=g.type==="Points";let M=!1;if(g.vertices.length===0)continue;const E=new bi;E.setAttribute("position",new Nn(g.vertices,3)),g.normals.length>0&&E.setAttribute("normal",new Nn(g.normals,3)),g.colors.length>0&&(M=!0,E.setAttribute("color",new Nn(g.colors,3))),g.hasUVIndices===!0&&E.setAttribute("uv",new Nn(g.uvs,2));const S=[];for(let L=0,P=m.length;L<P;L++){const A=m[L],z=A.name+"_"+A.smooth+"_"+M;let I=t.materials[z];if(this.materials!==null){if(I=this.materials.create(A.name),_&&I&&!(I instanceof cc)){const B=new cc;Oi.prototype.copy.call(B,I),B.color.copy(I.color),I=B}else if(x&&I&&!(I instanceof lo)){const B=new lo({size:10,sizeAttenuation:!1});Oi.prototype.copy.call(B,I),B.color.copy(I.color),B.map=I.map,I=B}}I===void 0&&(_?I=new cc:x?I=new lo({size:1,sizeAttenuation:!1}):I=new US,I.name=A.name,I.flatShading=!A.smooth,I.vertexColors=M,t.materials[z]=I),S.push(I)}let y;if(S.length>1){for(let L=0,P=m.length;L<P;L++){const A=m[L];E.addGroup(A.groupStart,A.groupCount,L)}_?y=new Lg(E,S):x?y=new Ih(E,S):y=new Un(E,S)}else _?y=new Lg(E,S[0]):x?y=new Ih(E,S[0]):y=new Un(E,S[0]);y.name=d.name,l.add(y)}else if(t.vertices.length>0){const h=new lo({size:1,sizeAttenuation:!1}),f=new bi;f.setAttribute("position",new Nn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(f.setAttribute("color",new Nn(t.colors,3)),h.vertexColors=!0);const d=new Ih(f,h);l.add(d)}return l}}const g_={type:"change"},of={type:"start"},d0={type:"end"},rc=new pa,__=new Lr,nb=Math.cos(70*Qx.DEG2RAD),on=new Y,Hn=2*Math.PI,Bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wh=1e-6;class ib extends dM{constructor(e,t=null){super(e,t),this.state=Bt.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ir.ROTATE,MIDDLE:Ir.DOLLY,RIGHT:Ir.PAN},this.touches={ONE:cs.ROTATE,TWO:cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Fr,this._lastTargetPosition=new Y,this._quat=new Fr().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zg,this._sphericalDelta=new zg,this._scale=1,this._panOffset=new Y,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new Y,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sb.bind(this),this._onPointerDown=rb.bind(this),this._onPointerUp=ab.bind(this),this._onContextMenu=fb.bind(this),this._onMouseWheel=cb.bind(this),this._onKeyDown=ub.bind(this),this._onTouchStart=hb.bind(this),this._onTouchMove=db.bind(this),this._onMouseDown=ob.bind(this),this._onMouseMove=lb.bind(this),this._interceptControlDown=pb.bind(this),this._interceptControlUp=mb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(g_),this.update(),this.state=Bt.NONE}update(e=null){const t=this.object.position;on.copy(t).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===Bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=Hn:i>Math.PI&&(i-=Hn),a<-Math.PI?a+=Hn:a>Math.PI&&(a-=Hn),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),t.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const h=on.length();c=this._clampDistance(h*this._scale);const f=h-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const h=new Y(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const d=new Y(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),c=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(rc.origin.copy(this.object.position),rc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rc.direction))<nb?this.object.lookAt(this.target):(__.setFromNormalAndCoplanarPoint(this.object.up,this.target),rc.intersectPlane(__,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wh||this._lastTargetPosition.distanceToSquared(this.target)>Wh?(this.dispatchEvent(g_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Hn/60*this.autoRotateSpeed*e:Hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){on.setFromMatrixColumn(t,0),on.multiplyScalar(-e),this._panOffset.add(on)}_panUp(e,t){this.screenSpacePanning===!0?on.setFromMatrixColumn(t,1):(on.setFromMatrixColumn(t,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(e),this._panOffset.add(on)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;on.copy(a).sub(this.target);let l=on.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/i.clientHeight,this.object.matrix),this._panUp(2*t*l/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,l=t-i.top,c=i.width,h=i.height;this._mouse.x=a/c*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(i*i+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(c,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new lt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function rb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function sb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ab(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(d0),this.state=Bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ob(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ir.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Bt.DOLLY;break;case Ir.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Bt.ROTATE}break;case Ir.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Bt.PAN}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(of)}function lb(s){switch(this.state){case Bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function cb(s){this.enabled===!1||this.enableZoom===!1||this.state!==Bt.NONE||(s.preventDefault(),this.dispatchEvent(of),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(d0))}function ub(s){this.enabled!==!1&&this._handleKeyDown(s)}function hb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Bt.TOUCH_ROTATE;break;case cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Bt.TOUCH_PAN;break;default:this.state=Bt.NONE}break;case 2:switch(this.touches.TWO){case cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Bt.TOUCH_DOLLY_PAN;break;case cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Bt.TOUCH_DOLLY_ROTATE;break;default:this.state=Bt.NONE}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(of)}function db(s){switch(this._trackPointer(s),this.state){case Bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Bt.NONE}}function fb(s){this.enabled!==!1&&s.preventDefault()}function pb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class gb{constructor(e,t){this.doc=t,this.host=e,this.scene=new bS,this.scene.background=new pt("#fbedf7"),this.camera=new Wn(32,1,.01,100),this.camera.position.set(0,0,4.5),this.renderer=new $T({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),e.appendChild(this.renderer.domElement),this.controls=new ib(this.camera,this.renderer.domElement),this.controls.enablePan=!0,this.controls.minDistance=.55,this.controls.maxDistance=4.6,this.controls.minPolarAngle=Math.PI*.34,this.controls.maxPolarAngle=Math.PI*.54,this.controls.mouseButtons={LEFT:null,MIDDLE:Ir.PAN,RIGHT:Ir.ROTATE},this.controls.touches={ONE:null,TWO:cs.DOLLY_PAN},this.previewCanvas=document.createElement("canvas"),this.texture=new NS(this.previewCanvas),this.texture.colorSpace=Gn,this.material=new n0({map:this.texture,roughness:.9,side:Ii}),this.scene.add(new KS(16777215,12036813,2));const i=new eM(16777215,2);i.position.set(2,3,5),this.scene.add(i),this.raycaster=new hM,this.meshes=[],this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.render=()=>this.renderer.render(this.scene,this.camera),this.controls.addEventListener("change",()=>{if(this.focusBounds){const a=this.controls.target.clone().clamp(this.focusBounds.min,this.focusBounds.max),l=a.clone().sub(this.controls.target);this.controls.target.copy(a),this.camera.position.add(l)}this.render()}),this.resize()}resize(){const e=this.host.clientWidth,t=this.host.clientHeight;!e||!t||(this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.render())}refresh(e){const t=this.previewCanvas;(t.width!==this.doc.width||t.height!==this.doc.height)&&(t.width=this.doc.width,t.height=this.doc.height);const i=t.getContext("2d");i.fillStyle="#ded5e5",i.fillRect(0,0,t.width,t.height),i.drawImage(this.doc.composite,0,0),e&&i.drawImage(e,0,0),this.texture.needsUpdate=!0,this.render()}async load(e){const t=new s0;t.setURLModifier(g=>{if(!g.startsWith("data:")&&!g.startsWith("blob:"))throw new Error("Use a self-contained GLB, without external files.");return g});let i;if(e.kind==="obj")i=new tb(t).parse(e.data);else{const{GLTFLoader:g}=await Yy(async()=>{const{GLTFLoader:_}=await import("./GLTFLoader-BqhusD8i.js");return{GLTFLoader:_}},[]),m=Uint8Array.from(atob(e.data),_=>_.charCodeAt(0));i=(await new g(t).parseAsync(m.buffer,"")).scene}i.updateMatrixWorld(!0);const a=new ia;let l=0;if(i.traverse(g=>{if(!g.isMesh)return;let m=g.geometry.clone();m.applyMatrix4(g.matrixWorld),m.getAttribute("normal")||m.computeVertexNormals();const _=m.getAttribute("uv");if(!_){m.dispose();return}const x=m.getAttribute("position");for(let E=0;E<_.count;E++){if(!Number.isFinite(_.getX(E))||!Number.isFinite(_.getY(E))||_.getX(E)<-.001||_.getX(E)>1.001||_.getY(E)<-.001||_.getY(E)>1.001)throw new Error("Use a head with UVs inside one 0–1 texture tile.");e.kind==="glb"&&_.setY(E,1-_.getY(E))}if(x.count>15e5)throw new Error("This mesh is too large; export a lower-detail head.");const M=new Un(m,this.material);M.name=g.name||`Mesh ${++l}`,a.add(M)}),!a.children.length)throw new Error("No UV-mapped mesh found. Export the head with UV coordinates.");const c=new Fi().setFromObject(a),h=c.getCenter(new Y),f=c.getSize(new Y),d=2.5/Math.max(f.x,f.y,f.z);if(!Number.isFinite(d)||d<=0)throw new Error("The model has invalid bounds.");for(const g of a.children)g.geometry.translate(-h.x,-h.y,-h.z),g.geometry.scale(d,d,d);this.model&&(this.scene.remove(this.model),this.model.traverse(g=>{var m;return(m=g.geometry)==null?void 0:m.dispose()})),this.model=a,this.meshes=a.children,this.scene.add(a),this.focusBounds=new Fi;for(const g of this.meshes.filter(m=>m.name.startsWith("head")))this.focusBounds.expandByObject(g);return this.focusBounds.isEmpty()&&this.focusBounds.setFromObject(a),this.focusBounds.expandByScalar(.15),this.reset(),this.meshes.map(g=>g.name)}focus(e){if(e==="face"){this.reset();return}const t=e==="lips"?new lt(.5,1-860/2048):new lt(.425,1-746/2048);let i=1/0,a=null;for(const l of this.meshes){const c=l.geometry.attributes.uv,h=l.geometry.attributes.position;for(let f=0;f<c.count;f++){const d=(c.getX(f)-t.x)**2+(c.getY(f)-t.y)**2;d<i&&(i=d,a=new Y().fromBufferAttribute(h,f))}}a&&(a.x=0,this.controls.target.copy(a),this.camera.position.copy(a).add(new Y(0,0,e==="lips"?1.15:1.7)),this.controls.update(),this.render())}reset(){this.camera.position.set(0,.3,4.2),this.controls.target.set(0,.3,0),this.controls.update(),this.render()}zoom(e){this.camera.position.sub(this.controls.target).multiplyScalar(e).add(this.controls.target),this.controls.update(),this.render()}hit(e,t,i=!1){const a=this.renderer.domElement.getBoundingClientRect();this.raycaster.setFromCamera(new lt((e-a.left)/a.width*2-1,-(t-a.top)/a.height*2+1),this.camera),i&&(this.raycaster.ray.origin.x*=-1,this.raycaster.ray.direction.x*=-1);const l=this.raycaster.intersectObjects(this.meshes,!1).find(c=>c.uv);return l&&this.meshes.includes(l.object)?{x:Math.max(0,Math.min(1,l.uv.x))*this.doc.width,y:(1-Math.max(0,Math.min(1,l.uv.y)))*this.doc.height}:null}drawUV(e,t,i){e.strokeStyle="#8050d555",e.lineWidth=.7;for(const a of this.meshes){const l=a.geometry,c=l.attributes.uv,h=l.index,f=h?h.count:c.count;e.beginPath();for(let d=0;d<f;d+=3){for(let g=0;g<3;g++){const m=h?h.getX(d+g):d+g,_=c.getX(m)*t,x=(1-c.getY(m))*i;g?e.lineTo(_,x):e.moveTo(_,x)}e.closePath()}e.stroke()}}dispose(){var e;cancelAnimationFrame(this.raf),this.observer.disconnect(),this.controls.dispose(),(e=this.model)==null||e.traverse(t=>{var i;return(i=t.geometry)==null?void 0:i.dispose()}),this.texture.dispose(),this.material.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}function _b({doc:s,version:e,view:t,setView:i,settings:a,setSettings:l,mirror:c,sceneRef:h,ready:f,onReady:d,onError:g,busy:m,modelName:_}){var se,F;const x=et.useRef(),M=et.useRef(),E=et.useRef(),S=et.useRef(),y=et.useRef(),L=et.useRef(null),P=et.useRef({}),[A,z]=et.useState(!1),[I,B]=et.useState(!1),[$,R]=et.useState(1),[C,G]=et.useState(null);P.current={settings:a,mirror:c,view:t,navigate:A,busy:m},et.useEffect(()=>{let O;try{O=new gb(x.current,s),h.current=O,d(O)}catch{g("3D preview could not start. Enable WebGL or use the UV texture view."),d(null)}return()=>{O==null||O.dispose()}},[]),et.useEffect(()=>{var O,pe;(O=h.current)==null||O.refresh(),M.current&&(M.current.width=s.width,M.current.height=s.height,M.current.getContext("2d").drawImage(s.composite,0,0)),E.current&&(E.current.width=s.width,E.current.height=s.height,I&&((pe=h.current)==null||pe.drawUV(E.current.getContext("2d"),s.width,s.height)))},[e,I,t,f]),et.useEffect(()=>{var pe;const O=(pe=h.current)==null?void 0:pe.controls;O&&(O.mouseButtons.LEFT=A?0:null,O.touches.ONE=A?0:null)},[A,f]),et.useEffect(()=>{requestAnimationFrame(()=>{var O;return(O=h.current)==null?void 0:O.resize()}),G(null)},[t]);function ee(){var O;if(S.current&&(S.current=null,(O=h.current)==null||O.refresh(),M.current)){const pe=M.current.getContext("2d");pe.clearRect(0,0,s.width,s.height),pe.drawImage(s.composite,0,0)}}function re(O,pe){var ae;const ye=he(O,pe);if(!ye.length){ee();return}const Ee=S.current||Yt(s.width,s.height);S.current=Ee;const K=Ee.getContext("2d");if(K.clearRect(0,0,Ee.width,Ee.height),K.globalAlpha=a.opacity/100*.65,P_(K,s,a.stamp,ye,a),K.globalAlpha=1,(ae=h.current)==null||ae.refresh(Ee),M.current){const _e=M.current.getContext("2d");_e.clearRect(0,0,s.width,s.height),_e.drawImage(s.composite,0,0),_e.drawImage(Ee,0,0)}}function ce(O,pe){var Ie,st,Ut;const ye=oe(O,pe);if(!ye.some(Boolean)){ee(),y.current=null;return}const Ee=ye[0];let K=((Ie=y.current)==null?void 0:Ie.direction)||{x:1,y:0};if(Ee&&((st=y.current)!=null&&st.point)){const U=(Ee.x-y.current.point.x)/s.width*1024,Et=(Ee.y-y.current.point.y)/s.height*2048,Qe=Math.hypot(U,Et);Qe>.5&&Qe<64&&(K={x:U/Qe,y:Et/Qe})}y.current={point:Ee,direction:K};const ae=ye.map((U,Et)=>{if(!U)return[];const Qe={x:U.x/s.width*1024,y:U.y/s.height*2048};return[Qe,{x:Qe.x+K.x*(Et?-1:1)*.1,y:Qe.y+K.y*.1}]}),_e=S.current||Yt(s.width,s.height);S.current=_e,T_(_e.getContext("2d"),ae,a,s.width,s.height);const De=_e.getContext("2d");if(De.globalCompositeOperation="destination-in",De.fillStyle=`rgba(0,0,0,${a.opacity/100*.65})`,De.fillRect(0,0,_e.width,_e.height),De.globalCompositeOperation="source-over",(Ut=h.current)==null||Ut.refresh(_e),M.current){const U=M.current.getContext("2d");U.clearRect(0,0,s.width,s.height),U.drawImage(s.composite,0,0),U.drawImage(_e,0,0)}}et.useEffect(()=>{ee()},[a,c,t,A,m,e,f]),et.useEffect(()=>{var pe;const O=(pe=h.current)==null?void 0:pe.controls;if(O)return O.addEventListener("start",ee),()=>O.removeEventListener("start",ee)},[f]);function he(O,pe){var K,ae;if(t==="3d"){const _e=(K=h.current)==null?void 0:K.hit(O,pe),De=c&&((ae=h.current)==null?void 0:ae.hit(O,pe,!0));return[_e,De].filter(Boolean)}const ye=M.current.getBoundingClientRect();if(O<ye.left||O>ye.right||pe<ye.top||pe>ye.bottom)return[];const Ee={x:(O-ye.left)/ye.width*s.width,y:(pe-ye.top)/ye.height*s.height};return c?[Ee,{x:s.width-Ee.x,y:Ee.y}]:[Ee]}function oe(O,pe){var Ee,K;if(t==="3d")return[(Ee=h.current)==null?void 0:Ee.hit(O,pe),c?(K=h.current)==null?void 0:K.hit(O,pe,!0):null];const ye=he(O,pe);return[ye[0]||null,ye[1]||null]}function fe(O){if(O.button!==0||A||m||t==="3d"&&!f)return;const pe=he(O.clientX,O.clientY);if(pe.length){if(a.tool==="stamp"){if(!a.stamp)return;ee();try{Fy(s,a.stamp,pe,a)}catch(ye){g(ye.message)}return}if(a.tool==="eyedropper"){const ye=s.sample(pe[0].x,pe[0].y);ye&&l(Ee=>({...Ee,color:ye,tool:"brush"}));return}try{ee(),s.begin(a),L.current={x:O.clientX,y:O.clientY},O.currentTarget.setPointerCapture(O.pointerId),a.tool==="hair"?s.addHairPoints(oe(O.clientX,O.clientY)):pe.forEach(ye=>s.stamp(ye.x,ye.y)),s.updateStroke()}catch(ye){g(ye.message)}}}function H(O){const pe=O.currentTarget.getBoundingClientRect();if(G({x:O.clientX-pe.left,y:O.clientY-pe.top}),a.tool==="stamp"&&!A&&!m&&a.stamp){if(O.buttons){ee();return}re(O.clientX,O.clientY);return}if(!L.current){a.tool==="hair"&&!A&&!m&&!O.buttons&&ce(O.clientX,O.clientY);return}const ye=L.current,Ee=O.clientX-ye.x,K=O.clientY-ye.y,ae=Math.hypot(Ee,K),_e=a.tool==="freckles"?9:2,De=Math.max(1,Math.ceil(ae/_e));for(let Ie=1;Ie<=De;Ie++){const st=ye.x+Ee*Ie/De,Ut=ye.y+K*Ie/De;a.tool==="hair"?s.addHairPoints(oe(st,Ut)):he(st,Ut).forEach(U=>s.stamp(U.x,U.y))}s.updateStroke(),L.current={x:O.clientX,y:O.clientY}}function le(O){L.current&&(a.tool==="hair"&&(O==null?void 0:O.type)==="pointerup"&&(s.addHairPoints(oe(O.clientX,O.clientY)),s.updateStroke()),L.current=null,s.end())}return k.createElement("main",{className:"workspace"},k.createElement("div",{className:"window-title mirror-title"},k.createElement(na,{size:15}),k.createElement("span",null,"Makeup mirror"),k.createElement(S_,{className:"window-star",size:14})),k.createElement("div",{className:"workspace-header"},k.createElement("div",{className:"view-tabs",role:"tablist","aria-label":"Painting view"},k.createElement("button",{role:"tab","aria-selected":t==="3d",className:t==="3d"?"active":"",onClick:()=>i("3d")},"3D face"),k.createElement("button",{role:"tab","aria-selected":t==="uv",className:t==="uv"?"active":"",onClick:()=>i("uv")},"Flat view")),k.createElement("span",{className:"model-caption"},_||"Your canvas, your look")),k.createElement("div",{className:"stage "+(A?"navigate":C&&!m&&a.tool!=="eyedropper"?"painting":""),onPointerDown:fe,onPointerEnter:H,onPointerMove:H,onPointerUp:le,onPointerCancel:le,onLostPointerCapture:le,onPointerLeave:()=>{G(null),ee(),y.current=null},onContextMenu:O=>O.preventDefault()},k.createElement("div",{ref:x,className:"three-host",style:{display:t==="3d"?"block":"none"}}),k.createElement("div",{className:"uv-scroll",style:{display:t==="uv"?"flex":"none"}},k.createElement("div",{className:"uv-sheet checker",style:{height:`${92*$}%`,aspectRatio:`${s.width}/${s.height}`}},k.createElement("canvas",{ref:M,"aria-label":"Flat painting canvas"}),k.createElement("canvas",{className:"uv-guide",ref:E}))),!f&&t==="3d"&&!m&&k.createElement("div",{className:"empty-stage"},k.createElement("img",{src:"/sim-reference.png",alt:"Supplied Sim face reference"}),k.createElement("div",null,"Open a model to start painting.")),C&&!A&&!m&&a.tool!=="eyedropper"&&a.tool!=="stamp"&&a.tool!=="hair"&&k.createElement("div",{className:"brush-cursor",style:{left:C.x,top:C.y,width:Math.min(90,Math.max(6,a.size*(t==="uv"?(((se=M.current)==null?void 0:se.clientWidth)||512)/s.width:.7))),height:Math.min(90,Math.max(6,a.size*(t==="uv"?(((F=M.current)==null?void 0:F.clientWidth)||512)/s.width:.7)))}})),k.createElement("div",{className:"viewport-controls"},k.createElement(bn,{icon:uy,label:"Turn the Sim","aria-pressed":A,className:"icon-button "+(A?"active":""),onClick:()=>z(!A)}),k.createElement(bn,{icon:Ey,label:"Zoom in",onClick:()=>{var O;return t==="3d"?(O=h.current)==null?void 0:O.zoom(.85):R(pe=>Math.min(4,pe+.25))}}),k.createElement(bn,{icon:wy,label:"Zoom out",onClick:()=>{var O;return t==="3d"?(O=h.current)==null?void 0:O.zoom(1.15):R(pe=>Math.max(.5,pe-.25))}}),k.createElement(bn,{icon:_y,label:"Reset view",onClick:()=>{var O;(O=h.current)==null||O.reset(),R(1)}}),t==="uv"&&k.createElement(bn,{icon:yy,label:"Show guides","aria-pressed":I,onClick:()=>B(!I)})))}function vb(){const s=new URLSearchParams(location.search).has("scratch"),[e,t]=et.useState(0),i=et.useRef();i.current||(i.current=new Vm,i.current.changed=()=>t(me=>me+1));const a=i.current,[l,c]=et.useState({tool:"brush",color:"#d16a7a",...qh.brush}),[h,f]=et.useState(!1),[d,g]=et.useState("3d"),[m,_]=et.useState("Untitled look"),[x,M]=et.useState(""),[E,S]=et.useState("female"),[y,L]=et.useState(!1),[P,A]=et.useState(!0),[z,I]=et.useState("Loading your studio…"),[B,$]=et.useState(null),[R,C]=et.useState(!1),[G,ee]=et.useState(!1),[re,ce]=et.useState(!1),[he,oe]=et.useState([]),fe=et.useRef(),H=et.useRef(null),le=et.useRef(),se=et.useRef(),F=et.useRef(!1),O=et.useRef(),pe=et.useRef(!0);function ye(me,ve=!1){$({message:me,error:ve}),clearTimeout(O.current),O.current=setTimeout(()=>$(null),6500)}async function Ee(me){if(!pe.current){pe.current=!0,A(!0);try{await me()}catch(ve){ye(ve.message,!0)}finally{pe.current=!1,A(!1)}}}function K(me,ve=!1){pe.current||(ve&&a.checkpoint(),me(),a.refresh())}function ae(){return{format:"face-studio",version:1,name:m,gender:E,modelName:x,asset:H.current,document:a.serialize()}}async function _e(me){if(me.format!=="face-studio"||me.version!==1)throw new Error("Choose a MakeupStudio .facepaint project.");if(!["female","male"].includes(me.gender))throw new Error("Choose a project using a female or male Sim.");await new Vm().restore(me.document);const vt=await fetch(`/ks-mod-download-widget/makeupstudio/models/${me.gender}-head.obj`);if(!vt.ok)throw new Error("The included Sim could not be loaded.");const Oe={kind:"obj",data:await vt.text()};await fe.current.load(Oe),await a.restore(me.document),H.current=Oe,_(String(me.name||"Untitled look")),M(me.gender==="female"?"Female Sim":"Male Sim"),S(me.gender),L(!0),a.undoStack=[],a.redoStack=[]}async function De(me,ve=!1){const vt=await fetch(`/ks-mod-download-widget/makeupstudio/models/${me}-head.obj`);if(!vt.ok)throw new Error("The included head model could not be loaded.");const Oe={kind:"obj",data:await vt.text()};await fe.current.load(Oe),await a.importBase(`/ks-mod-download-widget/makeupstudio/models/${me}-base.png`,`${me}-base.png`),H.current=Oe,S(me),M(me==="female"?"Female Sim":"Male Sim"),L(!0),ve&&(a.undoStack=[],a.redoStack=[]),a.refresh()}async function Ie(){if(!F.current){if(F.current=!0,!fe.current){pe.current=!1,A(!1),g("uv"),I("3D unavailable. Flat view is ready.");return}try{let me;try{s||(me=await Iy())}catch{}if(me)try{await _e(me),ye("Your last look is back.")}catch{await De("female",!0),ye("The previous draft could not be restored. The default head is ready.",!0)}else await De("female",!0)}catch(me){ye(me.message,!0)}finally{pe.current=!1,A(!1),ee(!0),I(s?"Practice mode":"Ready to create")}}}et.useEffect(()=>{if(s||!G||P||a.stroke)return;I("Saving local draft…");let me=!1;const ve=setTimeout(()=>{Ny(ae()).then(()=>{me||I("Saved on this device")}).catch(()=>{me||I("Autosave unavailable · use Save project")})},1200);return()=>{me=!0,clearTimeout(ve)}},[e,m,G,P,E]),et.useEffect(()=>{const me=ve=>{["INPUT","TEXTAREA","SELECT"].includes(ve.target.tagName)||((ve.ctrlKey||ve.metaKey)&&ve.key.toLowerCase()==="z"?(ve.preventDefault(),Ee(()=>ve.shiftKey?a.redo():a.undo())):(ve.ctrlKey||ve.metaKey)&&ve.key.toLowerCase()==="y"?(ve.preventDefault(),Ee(()=>a.redo())):(ve.ctrlKey||ve.metaKey)&&ve.key.toLowerCase()==="s"?(ve.preventDefault(),Ut()):ve.key==="b"?st("brush"):ve.key==="e"?st("eraser"):ve.key==="i"&&st("eyedropper"))};return window.addEventListener("keydown",me),()=>window.removeEventListener("keydown",me)});function st(me){c(ve=>({...ve,...qh[me],tool:me}))}function Ut(){pe.current||(zm(new Blob([JSON.stringify(ae())],{type:"application/json"}),`${U()}.facepaint`),ye("Project saved."))}function U(){return(m.trim()||"Untitled look").replace(/[^a-zA-Z0-9 _-]/g,"").slice(0,80)||"makeup"}async function Et(){await Ee(async()=>{const me=await a.export();if(!me)throw new Error("PNG export failed.");zm(me,`${U()}-overlay.png`),ye("Makeup PNG saved.")})}function Qe(me,ve){var Oe;const vt=(Oe=me.target.files)==null?void 0:Oe[0];me.target.value="",vt&&Ee(()=>ve(vt))}return k.createElement("div",{className:"app-shell"},k.createElement("header",{className:"desktop-header"},k.createElement("div",{className:"app-titlebar"},k.createElement("div",{className:"brand"},k.createElement(na,{size:24}),k.createElement("h1",null,"MakeupStudio")),k.createElement("div",{className:"titlebar-decoration","aria-hidden":"true"},k.createElement(na,{size:15}),k.createElement(na,{size:15}),k.createElement(jh,{size:15}))),k.createElement("div",{className:"topbar"},k.createElement("label",{className:"project-title"},k.createElement("span",null,"My look"),k.createElement("input",{"aria-label":"Project name",value:m,onChange:me=>_(me.target.value),maxLength:80})),k.createElement("div",{className:"header-actions"},k.createElement("button",{onClick:()=>se.current.click(),disabled:P},k.createElement(cy,{size:17}),k.createElement("span",null,"Open project")),k.createElement("button",{onClick:Ut,disabled:P},k.createElement(vy,{size:17}),k.createElement("span",null,"Save project")),k.createElement("button",{className:"primary",onClick:Et,disabled:P},k.createElement(Om,{size:18}),k.createElement("span",null,"Export PNG"))))),k.createElement("div",{className:"editor "+(P?"is-busy":""),"aria-busy":P},k.createElement(Vy,{customStamps:he,setCustomStamps:oe,settings:l,setSettings:c,selectTool:st,mirror:h,setMirror:f,view:d,onLibrary:()=>ce(!0),ready:y,onFocus:me=>{var ve;g("3d"),(ve=fe.current)==null||ve.focus(me)}}),k.createElement("div",{className:"center-column"},k.createElement("div",{className:"edit-toolbar"},k.createElement("span",null),k.createElement("div",null,k.createElement(bn,{icon:My,label:"Undo (Ctrl+Z)",disabled:P||!a.undoStack.length,onClick:()=>Ee(()=>a.undo())}),k.createElement(bn,{icon:gy,label:"Redo (Ctrl+Shift+Z)",disabled:P||!a.redoStack.length,onClick:()=>Ee(()=>a.redo())}))),k.createElement(_b,{doc:a,version:e,view:d,setView:g,settings:l,setSettings:c,mirror:h,sceneRef:fe,ready:y,onReady:Ie,onError:me=>ye(me,!0),busy:P,modelName:x})),k.createElement("aside",{className:"panel project-panel"},k.createElement("div",{className:"window-title"},k.createElement(na,{size:15}),k.createElement("span",null,"Your project"),k.createElement(jh,{className:"window-star",size:13})),k.createElement("h2",null,"Project"),k.createElement("label",{className:"field-label"},"Sim",k.createElement("select",{"aria-label":"Sim",value:E,disabled:P,onChange:me=>Ee(()=>De(me.target.value))},k.createElement("option",{value:"female"},"Female Sim"),k.createElement("option",{value:"male"},"Male Sim"),E==="custom"&&k.createElement("option",{value:"custom"},"Imported head"))),k.createElement("button",{className:"import-button",onClick:()=>le.current.click(),disabled:P},k.createElement(hy,{size:22}),k.createElement("span",null,"Import skin template"),k.createElement(yb,null)),k.createElement(Wy,{doc:a,gender:E,busy:P,mutate:K}),k.createElement(Hy,{doc:a,mutate:K,run:Ee,version:e}),k.createElement("section",{className:"export-section"},k.createElement("h2",null,"Export"),k.createElement("div",{className:"overlay-label"},k.createElement("span",null,k.createElement(sy,{size:15})),"Makeup only"),k.createElement("label",{className:"field-label"},"Image size",k.createElement("select",{"aria-label":"Image size",disabled:P,value:`${a.width}x${a.height}`,onChange:me=>{const[ve,vt]=me.target.value.split("x").map(Number);K(()=>a.resize(ve,vt))}},!["1024x2048","2048x4096","1024x1024","2048x2048"].includes(`${a.width}x${a.height}`)&&k.createElement("option",{value:`${a.width}x${a.height}`},a.width," × ",a.height),k.createElement("option",{value:"1024x2048"},"1024 × 2048"),k.createElement("option",{value:"2048x4096"},"2048 × 4096"),k.createElement("option",{value:"1024x1024"},"1024 × 1024"),k.createElement("option",{value:"2048x2048"},"2048 × 2048"))),k.createElement("button",{className:"primary export-button",onClick:Et,disabled:P},k.createElement(Om,{size:17}),"Export PNG"),k.createElement("button",{className:"help-button",onClick:()=>C(!0)},"Quick help")))),k.createElement("footer",null,k.createElement("span",null,k.createElement(py,{size:13}),k.createElement("strong",null,"Local & private")),k.createElement("span",{className:"save-status"},z)),k.createElement("input",{ref:le,type:"file",accept:"image/png,image/jpeg",hidden:!0,onChange:me=>Qe(me,async ve=>{if(ve.size>40*1024*1024)throw new Error("Use an image smaller than 40 MB.");await a.importBase(await b_(ve),ve.name),ye("Skin template imported.")})}),k.createElement("input",{ref:se,type:"file",accept:".facepaint,.json",hidden:!0,onChange:me=>Qe(me,async ve=>{if(ve.size>150*1024*1024)throw new Error("This project is too large.");await _e(JSON.parse(await ve.text())),ye("Project opened.")})}),P&&k.createElement("div",{className:"busy-indicator",role:"status"},k.createElement(fy,{className:"spin",size:18})," Preparing your canvas…"),B&&k.createElement("div",{role:B.error?"alert":"status",className:"toast "+(B.error?"error":"")},k.createElement("span",null,B.message),k.createElement(bn,{icon:Yh,label:"Dismiss notification",onClick:()=>$(null)})),re&&k.createElement(Gy,{doc:a,settings:l,setSettings:c,run:Ee,notify:ye,onClose:()=>ce(!1)}),R&&k.createElement("div",{className:"modal-backdrop",onClick:()=>C(!1)},k.createElement("section",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"help-title",onClick:me=>me.stopPropagation()},k.createElement("div",{className:"section-heading"},k.createElement("h2",{id:"help-title"},"Quick help"),k.createElement(bn,{icon:Yh,label:"Close help",onClick:()=>C(!1)})),k.createElement("ol",null,k.createElement("li",null,"Drag to paint. Right-drag to turn the Sim, or use the hand button. Scroll to zoom."),k.createElement("li",null,"Choose Makeup bases for a ready-made look, or Stamp to place a shape."),k.createElement("li",null,"Export PNG saves just your makeup. Save project keeps a copy you can keep editing.")),k.createElement("button",{className:"primary",onClick:()=>C(!1)},"Back to creating"))))}function yb(){return k.createElement("span",{className:"import-plus"},"+")}Jv.createRoot(document.getElementById("root")).render(k.createElement(vb,null));export{CS as $,wb as A,ui as B,pt as C,eM as D,Un as E,qS as F,Lg as G,Q_ as H,Tb as I,bb as J,Ih as K,_a as L,Ab as M,Rl as N,Jt as O,Lb as P,Fr as Q,ad as R,Gn as S,xb as T,ia as U,lt as V,Wn as W,Qx as X,a0 as Y,J_ as Z,Cb as _,Mb as a,dc as a0,kd as a1,K_ as a2,gn as a3,vc as a4,_c as a5,Mc as a6,Rt as a7,kr as a8,Sc as a9,Fi as aa,rr as ab,Sb as b,Db as c,ha as d,Pb as e,Mt as f,Y as g,wg as h,Rb as i,Ib as j,Eb as k,hs as l,ah as m,Tx as n,Ni as o,Qn as p,od as q,us as r,lo as s,Oi as t,cc as u,n0 as v,Ii as w,W_ as x,Ot as y,bi as z};
