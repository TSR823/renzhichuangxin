function Cu(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function ju(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $i={exports:{}},P1={},Ui={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var at=Symbol.for("react.element"),Eu=Symbol.for("react.portal"),_u=Symbol.for("react.fragment"),Iu=Symbol.for("react.strict_mode"),Lu=Symbol.for("react.profiler"),zu=Symbol.for("react.provider"),Ou=Symbol.for("react.context"),Mu=Symbol.for("react.forward_ref"),Au=Symbol.for("react.suspense"),Bu=Symbol.for("react.memo"),Fu=Symbol.for("react.lazy"),pl=Symbol.iterator;function $u(e){return e===null||typeof e!="object"?null:(e=pl&&e[pl]||e["@@iterator"],typeof e=="function"?e:null)}var Vi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wi=Object.assign,Hi={};function xn(e,n,t){this.props=e,this.context=n,this.refs=Hi,this.updater=t||Vi}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ki(){}Ki.prototype=xn.prototype;function x2(e,n,t){this.props=e,this.context=n,this.refs=Hi,this.updater=t||Vi}var p2=x2.prototype=new Ki;p2.constructor=x2;Wi(p2,xn.prototype);p2.isPureReactComponent=!0;var Nl=Array.isArray,bi=Object.prototype.hasOwnProperty,N2={current:null},Yi={key:!0,ref:!0,__self:!0,__source:!0};function Gi(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)bi.call(n,r)&&!Yi.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:at,type:e,key:i,ref:o,props:l,_owner:N2.current}}function Uu(e,n){return{$$typeof:at,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function T2(e){return typeof e=="object"&&e!==null&&e.$$typeof===at}function Vu(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Tl=/\/+/g;function W1(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Vu(""+e.key):n.toString(36)}function zt(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case at:case Eu:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+W1(o,0):r,Nl(l)?(t="",e!=null&&(t=e.replace(Tl,"$&/")+"/"),zt(l,n,t,"",function(c){return c})):l!=null&&(T2(l)&&(l=Uu(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Tl,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",Nl(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+W1(i,s);o+=zt(i,n,t,u,l)}else if(u=$u(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+W1(i,s++),o+=zt(i,n,t,u,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Tt(e,n,t){if(e==null)return e;var r=[],l=0;return zt(e,r,"","",function(i){return n.call(t,i,l++)}),r}function Wu(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var c0={current:null},Ot={transition:null},Hu={ReactCurrentDispatcher:c0,ReactCurrentBatchConfig:Ot,ReactCurrentOwner:N2};function Xi(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Tt,forEach:function(e,n,t){Tt(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Tt(e,function(){n++}),n},toArray:function(e){return Tt(e,function(n){return n})||[]},only:function(e){if(!T2(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=xn;I.Fragment=_u;I.Profiler=Lu;I.PureComponent=x2;I.StrictMode=Iu;I.Suspense=Au;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hu;I.act=Xi;I.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wi({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=N2.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)bi.call(n,u)&&!Yi.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&s!==void 0?s[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:at,type:e.type,key:l,ref:i,props:r,_owner:o}};I.createContext=function(e){return e={$$typeof:Ou,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zu,_context:e},e.Consumer=e};I.createElement=Gi;I.createFactory=function(e){var n=Gi.bind(null,e);return n.type=e,n};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Mu,render:e}};I.isValidElement=T2;I.lazy=function(e){return{$$typeof:Fu,_payload:{_status:-1,_result:e},_init:Wu}};I.memo=function(e,n){return{$$typeof:Bu,type:e,compare:n===void 0?null:n}};I.startTransition=function(e){var n=Ot.transition;Ot.transition={};try{e()}finally{Ot.transition=n}};I.unstable_act=Xi;I.useCallback=function(e,n){return c0.current.useCallback(e,n)};I.useContext=function(e){return c0.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return c0.current.useDeferredValue(e)};I.useEffect=function(e,n){return c0.current.useEffect(e,n)};I.useId=function(){return c0.current.useId()};I.useImperativeHandle=function(e,n,t){return c0.current.useImperativeHandle(e,n,t)};I.useInsertionEffect=function(e,n){return c0.current.useInsertionEffect(e,n)};I.useLayoutEffect=function(e,n){return c0.current.useLayoutEffect(e,n)};I.useMemo=function(e,n){return c0.current.useMemo(e,n)};I.useReducer=function(e,n,t){return c0.current.useReducer(e,n,t)};I.useRef=function(e){return c0.current.useRef(e)};I.useState=function(e){return c0.current.useState(e)};I.useSyncExternalStore=function(e,n,t){return c0.current.useSyncExternalStore(e,n,t)};I.useTransition=function(){return c0.current.useTransition()};I.version="18.3.1";Ui.exports=I;var P=Ui.exports;const Ji=ju(P),Ku=Cu({__proto__:null,default:Ji},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu=P,Yu=Symbol.for("react.element"),Gu=Symbol.for("react.fragment"),Xu=Object.prototype.hasOwnProperty,Ju=bu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zu={key:!0,ref:!0,__self:!0,__source:!0};function Zi(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Xu.call(n,r)&&!Zu.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Yu,type:e,key:i,ref:o,props:l,_owner:Ju.current}}P1.Fragment=Gu;P1.jsx=Zi;P1.jsxs=Zi;$i.exports=P1;var a=$i.exports,Nr={},qi={exports:{}},y0={},eo={exports:{}},no={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(k,j){var _=k.length;k.push(j);e:for(;0<_;){var b=_-1>>>1,Z=k[b];if(0<l(Z,j))k[b]=j,k[_]=Z,_=b;else break e}}function t(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var j=k[0],_=k.pop();if(_!==j){k[0]=_;e:for(var b=0,Z=k.length,pt=Z>>>1;b<pt;){var ve=2*(b+1)-1,V1=k[ve],ge=ve+1,Nt=k[ge];if(0>l(V1,_))ge<Z&&0>l(Nt,V1)?(k[b]=Nt,k[ge]=_,b=ge):(k[b]=V1,k[ve]=_,b=ve);else if(ge<Z&&0>l(Nt,_))k[b]=Nt,k[ge]=_,b=ge;else break e}}return j}function l(k,j){var _=k.sortIndex-j.sortIndex;return _!==0?_:k.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],c=[],f=1,D=null,Q=3,m=!1,N=!1,h=!1,y=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(k){for(var j=t(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=k)r(c),j.sortIndex=j.expirationTime,n(u,j);else break;j=t(c)}}function T(k){if(h=!1,x(k),!N)if(t(u)!==null)N=!0,$1(g);else{var j=t(c);j!==null&&U1(T,j.startTime-k)}}function g(k,j){N=!1,h&&(h=!1,p(C),C=-1),m=!0;var _=Q;try{for(x(j),D=t(u);D!==null&&(!(D.expirationTime>j)||k&&!N0());){var b=D.callback;if(typeof b=="function"){D.callback=null,Q=D.priorityLevel;var Z=b(D.expirationTime<=j);j=e.unstable_now(),typeof Z=="function"?D.callback=Z:D===t(u)&&r(u),x(j)}else r(u);D=t(u)}if(D!==null)var pt=!0;else{var ve=t(c);ve!==null&&U1(T,ve.startTime-j),pt=!1}return pt}finally{D=null,Q=_,m=!1}}var R=!1,S=null,C=-1,F=5,E=-1;function N0(){return!(e.unstable_now()-E<F)}function mn(){if(S!==null){var k=e.unstable_now();E=k;var j=!0;try{j=S(!0,k)}finally{j?Pn():(R=!1,S=null)}}else R=!1}var Pn;if(typeof d=="function")Pn=function(){d(mn)};else if(typeof MessageChannel<"u"){var xl=new MessageChannel,Su=xl.port2;xl.port1.onmessage=mn,Pn=function(){Su.postMessage(null)}}else Pn=function(){y(mn,0)};function $1(k){S=k,R||(R=!0,Pn())}function U1(k,j){C=y(function(){k(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){N||m||(N=!0,$1(g))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return Q},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(k){switch(Q){case 1:case 2:case 3:var j=3;break;default:j=Q}var _=Q;Q=j;try{return k()}finally{Q=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,j){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var _=Q;Q=k;try{return j()}finally{Q=_}},e.unstable_scheduleCallback=function(k,j,_){var b=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?b+_:b):_=b,k){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=_+Z,k={id:f++,callback:j,priorityLevel:k,startTime:_,expirationTime:Z,sortIndex:-1},_>b?(k.sortIndex=_,n(c,k),t(u)===null&&k===t(c)&&(h?(p(C),C=-1):h=!0,U1(T,_-b))):(k.sortIndex=Z,n(u,k),N||m||(N=!0,$1(g))),k},e.unstable_shouldYield=N0,e.unstable_wrapCallback=function(k){var j=Q;return function(){var _=Q;Q=j;try{return k.apply(this,arguments)}finally{Q=_}}}})(no);eo.exports=no;var qu=eo.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=P,P0=qu;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var to=new Set,Wn={};function Ae(e,n){sn(e,n),sn(e+"Capture",n)}function sn(e,n){for(Wn[e]=n,e=0;e<n.length;e++)to.add(n[e])}var b0=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tr=Object.prototype.hasOwnProperty,na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hl={},ml={};function ta(e){return Tr.call(ml,e)?!0:Tr.call(hl,e)?!1:na.test(e)?ml[e]=!0:(hl[e]=!0,!1)}function ra(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function la(e,n,t,r){if(n===null||typeof n>"u"||ra(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function d0(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var r0={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){r0[e]=new d0(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];r0[n]=new d0(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){r0[e]=new d0(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){r0[e]=new d0(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){r0[e]=new d0(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){r0[e]=new d0(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){r0[e]=new d0(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){r0[e]=new d0(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){r0[e]=new d0(e,5,!1,e.toLowerCase(),null,!1,!1)});var h2=/[\-:]([a-z])/g;function m2(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(h2,m2);r0[n]=new d0(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(h2,m2);r0[n]=new d0(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(h2,m2);r0[n]=new d0(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){r0[e]=new d0(e,1,!1,e.toLowerCase(),null,!1,!1)});r0.xlinkHref=new d0("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){r0[e]=new d0(e,1,!1,e.toLowerCase(),null,!0,!0)});function P2(e,n,t,r){var l=r0.hasOwnProperty(n)?r0[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(la(n,t,l,r)&&(t=null),r||l===null?ta(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var J0=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ht=Symbol.for("react.element"),Ue=Symbol.for("react.portal"),Ve=Symbol.for("react.fragment"),y2=Symbol.for("react.strict_mode"),hr=Symbol.for("react.profiler"),ro=Symbol.for("react.provider"),lo=Symbol.for("react.context"),v2=Symbol.for("react.forward_ref"),mr=Symbol.for("react.suspense"),Pr=Symbol.for("react.suspense_list"),g2=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),io=Symbol.for("react.offscreen"),Pl=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=Pl&&e[Pl]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,H1;function En(e){if(H1===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);H1=n&&n[1]||""}return`
`+H1+e}var K1=!1;function b1(e,n){if(!e||K1)return"";K1=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{K1=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?En(e):""}function ia(e){switch(e.tag){case 5:return En(e.type);case 16:return En("Lazy");case 13:return En("Suspense");case 19:return En("SuspenseList");case 0:case 2:case 15:return e=b1(e.type,!1),e;case 11:return e=b1(e.type.render,!1),e;case 1:return e=b1(e.type,!0),e;default:return""}}function yr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ve:return"Fragment";case Ue:return"Portal";case hr:return"Profiler";case y2:return"StrictMode";case mr:return"Suspense";case Pr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lo:return(e.displayName||"Context")+".Consumer";case ro:return(e._context.displayName||"Context")+".Provider";case v2:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case g2:return n=e.displayName||null,n!==null?n:yr(e.type)||"Memo";case te:n=e._payload,e=e._init;try{return yr(e(n))}catch{}}return null}function oa(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yr(n);case 8:return n===y2?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oo(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sa(e){var n=oo(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function mt(e){e._valueTracker||(e._valueTracker=sa(e))}function so(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=oo(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function bt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vr(e,n){var t=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function yl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Te(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function uo(e,n){n=n.checked,n!=null&&P2(e,"checked",n,!1)}function gr(e,n){uo(e,n);var t=Te(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Rr(e,n.type,t):n.hasOwnProperty("defaultValue")&&Rr(e,n.type,Te(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function vl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Rr(e,n,t){(n!=="number"||bt(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var _n=Array.isArray;function en(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Te(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function wr(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(_n(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Te(t)}}function ao(e,n){var t=Te(n.value),r=Te(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Rl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function co(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?co(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pt,fo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Pt=Pt||document.createElement("div"),Pt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Pt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Hn(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ua=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){ua.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),zn[n]=zn[e]})});function Qo(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||zn.hasOwnProperty(e)&&zn[e]?(""+n).trim():n+"px"}function Do(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Qo(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var aa=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sr(e,n){if(n){if(aa[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function Cr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jr=null;function R2(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,nn=null,tn=null;function wl(e){if(e=ft(e)){if(typeof Er!="function")throw Error(v(280));var n=e.stateNode;n&&(n=w1(n),Er(e.stateNode,e.type,n))}}function xo(e){nn?tn?tn.push(e):tn=[e]:nn=e}function po(){if(nn){var e=nn,n=tn;if(tn=nn=null,wl(e),n)for(e=0;e<n.length;e++)wl(n[e])}}function No(e,n){return e(n)}function To(){}var Y1=!1;function ho(e,n,t){if(Y1)return e(n,t);Y1=!0;try{return No(e,n,t)}finally{Y1=!1,(nn!==null||tn!==null)&&(To(),po())}}function Kn(e,n){var t=e.stateNode;if(t===null)return null;var r=w1(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var _r=!1;if(b0)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){_r=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{_r=!1}function ca(e,n,t,r,l,i,o,s,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(f){this.onError(f)}}var On=!1,Yt=null,Gt=!1,Ir=null,da={onError:function(e){On=!0,Yt=e}};function fa(e,n,t,r,l,i,o,s,u){On=!1,Yt=null,ca.apply(da,arguments)}function Qa(e,n,t,r,l,i,o,s,u){if(fa.apply(this,arguments),On){if(On){var c=Yt;On=!1,Yt=null}else throw Error(v(198));Gt||(Gt=!0,Ir=c)}}function Be(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function mo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function kl(e){if(Be(e)!==e)throw Error(v(188))}function Da(e){var n=e.alternate;if(!n){if(n=Be(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return kl(l),e;if(i===r)return kl(l),n;i=i.sibling}throw Error(v(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function Po(e){return e=Da(e),e!==null?yo(e):null}function yo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=yo(e);if(n!==null)return n;e=e.sibling}return null}var vo=P0.unstable_scheduleCallback,Sl=P0.unstable_cancelCallback,xa=P0.unstable_shouldYield,pa=P0.unstable_requestPaint,Y=P0.unstable_now,Na=P0.unstable_getCurrentPriorityLevel,w2=P0.unstable_ImmediatePriority,go=P0.unstable_UserBlockingPriority,Xt=P0.unstable_NormalPriority,Ta=P0.unstable_LowPriority,Ro=P0.unstable_IdlePriority,y1=null,F0=null;function ha(e){if(F0&&typeof F0.onCommitFiberRoot=="function")try{F0.onCommitFiberRoot(y1,e,void 0,(e.current.flags&128)===128)}catch{}}var L0=Math.clz32?Math.clz32:ya,ma=Math.log,Pa=Math.LN2;function ya(e){return e>>>=0,e===0?32:31-(ma(e)/Pa|0)|0}var yt=64,vt=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jt(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~l;s!==0?r=In(s):(i&=o,i!==0&&(r=In(i)))}else o=t&~l,o!==0?r=In(o):i!==0&&(r=In(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-L0(n),l=1<<t,r|=e[t],n&=~l;return r}function va(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ga(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-L0(i),s=1<<o,u=l[o];u===-1?(!(s&t)||s&r)&&(l[o]=va(s,n)):u<=n&&(e.expiredLanes|=s),i&=~s}}function Lr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wo(){var e=yt;return yt<<=1,!(yt&4194240)&&(yt=64),e}function G1(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ct(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-L0(n),e[n]=t}function Ra(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-L0(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function k2(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-L0(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var z=0;function ko(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var So,S2,Co,jo,Eo,zr=!1,gt=[],ae=null,ce=null,de=null,bn=new Map,Yn=new Map,le=[],wa="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cl(e,n){switch(e){case"focusin":case"focusout":ae=null;break;case"dragenter":case"dragleave":ce=null;break;case"mouseover":case"mouseout":de=null;break;case"pointerover":case"pointerout":bn.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(n.pointerId)}}function gn(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=ft(n),n!==null&&S2(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function ka(e,n,t,r,l){switch(n){case"focusin":return ae=gn(ae,e,n,t,r,l),!0;case"dragenter":return ce=gn(ce,e,n,t,r,l),!0;case"mouseover":return de=gn(de,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return bn.set(i,gn(bn.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Yn.set(i,gn(Yn.get(i)||null,e,n,t,r,l)),!0}return!1}function _o(e){var n=ke(e.target);if(n!==null){var t=Be(n);if(t!==null){if(n=t.tag,n===13){if(n=mo(t),n!==null){e.blockedOn=n,Eo(e.priority,function(){Co(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mt(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Or(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);jr=r,t.target.dispatchEvent(r),jr=null}else return n=ft(t),n!==null&&S2(n),e.blockedOn=t,!1;n.shift()}return!0}function jl(e,n,t){Mt(e)&&t.delete(n)}function Sa(){zr=!1,ae!==null&&Mt(ae)&&(ae=null),ce!==null&&Mt(ce)&&(ce=null),de!==null&&Mt(de)&&(de=null),bn.forEach(jl),Yn.forEach(jl)}function Rn(e,n){e.blockedOn===n&&(e.blockedOn=null,zr||(zr=!0,P0.unstable_scheduleCallback(P0.unstable_NormalPriority,Sa)))}function Gn(e){function n(l){return Rn(l,e)}if(0<gt.length){Rn(gt[0],e);for(var t=1;t<gt.length;t++){var r=gt[t];r.blockedOn===e&&(r.blockedOn=null)}}for(ae!==null&&Rn(ae,e),ce!==null&&Rn(ce,e),de!==null&&Rn(de,e),bn.forEach(n),Yn.forEach(n),t=0;t<le.length;t++)r=le[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<le.length&&(t=le[0],t.blockedOn===null);)_o(t),t.blockedOn===null&&le.shift()}var rn=J0.ReactCurrentBatchConfig,Zt=!0;function Ca(e,n,t,r){var l=z,i=rn.transition;rn.transition=null;try{z=1,C2(e,n,t,r)}finally{z=l,rn.transition=i}}function ja(e,n,t,r){var l=z,i=rn.transition;rn.transition=null;try{z=4,C2(e,n,t,r)}finally{z=l,rn.transition=i}}function C2(e,n,t,r){if(Zt){var l=Or(e,n,t,r);if(l===null)ir(e,n,r,qt,t),Cl(e,r);else if(ka(l,e,n,t,r))r.stopPropagation();else if(Cl(e,r),n&4&&-1<wa.indexOf(e)){for(;l!==null;){var i=ft(l);if(i!==null&&So(i),i=Or(e,n,t,r),i===null&&ir(e,n,r,qt,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else ir(e,n,r,null,t)}}var qt=null;function Or(e,n,t,r){if(qt=null,e=R2(r),e=ke(e),e!==null)if(n=Be(e),n===null)e=null;else if(t=n.tag,t===13){if(e=mo(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return qt=e,null}function Io(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Na()){case w2:return 1;case go:return 4;case Xt:case Ta:return 16;case Ro:return 536870912;default:return 16}default:return 16}}var oe=null,j2=null,At=null;function Lo(){if(At)return At;var e,n=j2,t=n.length,r,l="value"in oe?oe.value:oe.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return At=l.slice(e,1<r?1-r:void 0)}function Bt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Rt(){return!0}function El(){return!1}function v0(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Rt:El,this.isPropagationStopped=El,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Rt)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Rt)},persist:function(){},isPersistent:Rt}),n}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},E2=v0(pn),dt=H({},pn,{view:0,detail:0}),Ea=v0(dt),X1,J1,wn,v1=H({},dt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_2,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wn&&(wn&&e.type==="mousemove"?(X1=e.screenX-wn.screenX,J1=e.screenY-wn.screenY):J1=X1=0,wn=e),X1)},movementY:function(e){return"movementY"in e?e.movementY:J1}}),_l=v0(v1),_a=H({},v1,{dataTransfer:0}),Ia=v0(_a),La=H({},dt,{relatedTarget:0}),Z1=v0(La),za=H({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),Oa=v0(za),Ma=H({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Aa=v0(Ma),Ba=H({},pn,{data:0}),Il=v0(Ba),Fa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$a={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ua={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Va(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ua[e])?!!n[e]:!1}function _2(){return Va}var Wa=H({},dt,{key:function(e){if(e.key){var n=Fa[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Bt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$a[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_2,charCode:function(e){return e.type==="keypress"?Bt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ha=v0(Wa),Ka=H({},v1,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ll=v0(Ka),ba=H({},dt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_2}),Ya=v0(ba),Ga=H({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xa=v0(Ga),Ja=H({},v1,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Za=v0(Ja),qa=[9,13,27,32],I2=b0&&"CompositionEvent"in window,Mn=null;b0&&"documentMode"in document&&(Mn=document.documentMode);var e3=b0&&"TextEvent"in window&&!Mn,zo=b0&&(!I2||Mn&&8<Mn&&11>=Mn),zl=" ",Ol=!1;function Oo(e,n){switch(e){case"keyup":return qa.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var We=!1;function n3(e,n){switch(e){case"compositionend":return Mo(n);case"keypress":return n.which!==32?null:(Ol=!0,zl);case"textInput":return e=n.data,e===zl&&Ol?null:e;default:return null}}function t3(e,n){if(We)return e==="compositionend"||!I2&&Oo(e,n)?(e=Lo(),At=j2=oe=null,We=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zo&&n.locale!=="ko"?null:n.data;default:return null}}var r3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ml(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!r3[e.type]:n==="textarea"}function Ao(e,n,t,r){xo(r),n=e1(n,"onChange"),0<n.length&&(t=new E2("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var An=null,Xn=null;function l3(e){Go(e,0)}function g1(e){var n=be(e);if(so(n))return e}function i3(e,n){if(e==="change")return n}var Bo=!1;if(b0){var q1;if(b0){var er="oninput"in document;if(!er){var Al=document.createElement("div");Al.setAttribute("oninput","return;"),er=typeof Al.oninput=="function"}q1=er}else q1=!1;Bo=q1&&(!document.documentMode||9<document.documentMode)}function Bl(){An&&(An.detachEvent("onpropertychange",Fo),Xn=An=null)}function Fo(e){if(e.propertyName==="value"&&g1(Xn)){var n=[];Ao(n,Xn,e,R2(e)),ho(l3,n)}}function o3(e,n,t){e==="focusin"?(Bl(),An=n,Xn=t,An.attachEvent("onpropertychange",Fo)):e==="focusout"&&Bl()}function s3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return g1(Xn)}function u3(e,n){if(e==="click")return g1(n)}function a3(e,n){if(e==="input"||e==="change")return g1(n)}function c3(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var O0=typeof Object.is=="function"?Object.is:c3;function Jn(e,n){if(O0(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Tr.call(n,l)||!O0(e[l],n[l]))return!1}return!0}function Fl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $l(e,n){var t=Fl(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fl(t)}}function $o(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$o(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Uo(){for(var e=window,n=bt();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=bt(e.document)}return n}function L2(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function d3(e){var n=Uo(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&$o(t.ownerDocument.documentElement,t)){if(r!==null&&L2(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=$l(t,i);var o=$l(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var f3=b0&&"documentMode"in document&&11>=document.documentMode,He=null,Mr=null,Bn=null,Ar=!1;function Ul(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ar||He==null||He!==bt(r)||(r=He,"selectionStart"in r&&L2(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&Jn(Bn,r)||(Bn=r,r=e1(Mr,"onSelect"),0<r.length&&(n=new E2("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=He)))}function wt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ke={animationend:wt("Animation","AnimationEnd"),animationiteration:wt("Animation","AnimationIteration"),animationstart:wt("Animation","AnimationStart"),transitionend:wt("Transition","TransitionEnd")},nr={},Vo={};b0&&(Vo=document.createElement("div").style,"AnimationEvent"in window||(delete Ke.animationend.animation,delete Ke.animationiteration.animation,delete Ke.animationstart.animation),"TransitionEvent"in window||delete Ke.transitionend.transition);function R1(e){if(nr[e])return nr[e];if(!Ke[e])return e;var n=Ke[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Vo)return nr[e]=n[t];return e}var Wo=R1("animationend"),Ho=R1("animationiteration"),Ko=R1("animationstart"),bo=R1("transitionend"),Yo=new Map,Vl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function me(e,n){Yo.set(e,n),Ae(n,[e])}for(var tr=0;tr<Vl.length;tr++){var rr=Vl[tr],Q3=rr.toLowerCase(),D3=rr[0].toUpperCase()+rr.slice(1);me(Q3,"on"+D3)}me(Wo,"onAnimationEnd");me(Ho,"onAnimationIteration");me(Ko,"onAnimationStart");me("dblclick","onDoubleClick");me("focusin","onFocus");me("focusout","onBlur");me(bo,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ae("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function Wl(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Qa(r,n,void 0,e),e.currentTarget=null}function Go(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;Wl(l,s,c),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;Wl(l,s,c),i=u}}}if(Gt)throw e=Ir,Gt=!1,Ir=null,e}function M(e,n){var t=n[Vr];t===void 0&&(t=n[Vr]=new Set);var r=e+"__bubble";t.has(r)||(Xo(n,e,2,!1),t.add(r))}function lr(e,n,t){var r=0;n&&(r|=4),Xo(t,e,r,n)}var kt="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[kt]){e[kt]=!0,to.forEach(function(t){t!=="selectionchange"&&(x3.has(t)||lr(t,!1,e),lr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kt]||(n[kt]=!0,lr("selectionchange",!1,n))}}function Xo(e,n,t,r){switch(Io(n)){case 1:var l=Ca;break;case 4:l=ja;break;default:l=C2}t=l.bind(null,n,t,e),l=void 0,!_r||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function ir(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=ke(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}ho(function(){var c=i,f=R2(t),D=[];e:{var Q=Yo.get(e);if(Q!==void 0){var m=E2,N=e;switch(e){case"keypress":if(Bt(t)===0)break e;case"keydown":case"keyup":m=Ha;break;case"focusin":N="focus",m=Z1;break;case"focusout":N="blur",m=Z1;break;case"beforeblur":case"afterblur":m=Z1;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=_l;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Ia;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ya;break;case Wo:case Ho:case Ko:m=Oa;break;case bo:m=Xa;break;case"scroll":m=Ea;break;case"wheel":m=Za;break;case"copy":case"cut":case"paste":m=Aa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ll}var h=(n&4)!==0,y=!h&&e==="scroll",p=h?Q!==null?Q+"Capture":null:Q;h=[];for(var d=c,x;d!==null;){x=d;var T=x.stateNode;if(x.tag===5&&T!==null&&(x=T,p!==null&&(T=Kn(d,p),T!=null&&h.push(qn(d,T,x)))),y)break;d=d.return}0<h.length&&(Q=new m(Q,N,null,t,f),D.push({event:Q,listeners:h}))}}if(!(n&7)){e:{if(Q=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",Q&&t!==jr&&(N=t.relatedTarget||t.fromElement)&&(ke(N)||N[Y0]))break e;if((m||Q)&&(Q=f.window===f?f:(Q=f.ownerDocument)?Q.defaultView||Q.parentWindow:window,m?(N=t.relatedTarget||t.toElement,m=c,N=N?ke(N):null,N!==null&&(y=Be(N),N!==y||N.tag!==5&&N.tag!==6)&&(N=null)):(m=null,N=c),m!==N)){if(h=_l,T="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(h=Ll,T="onPointerLeave",p="onPointerEnter",d="pointer"),y=m==null?Q:be(m),x=N==null?Q:be(N),Q=new h(T,d+"leave",m,t,f),Q.target=y,Q.relatedTarget=x,T=null,ke(f)===c&&(h=new h(p,d+"enter",N,t,f),h.target=x,h.relatedTarget=y,T=h),y=T,m&&N)n:{for(h=m,p=N,d=0,x=h;x;x=$e(x))d++;for(x=0,T=p;T;T=$e(T))x++;for(;0<d-x;)h=$e(h),d--;for(;0<x-d;)p=$e(p),x--;for(;d--;){if(h===p||p!==null&&h===p.alternate)break n;h=$e(h),p=$e(p)}h=null}else h=null;m!==null&&Hl(D,Q,m,h,!1),N!==null&&y!==null&&Hl(D,y,N,h,!0)}}e:{if(Q=c?be(c):window,m=Q.nodeName&&Q.nodeName.toLowerCase(),m==="select"||m==="input"&&Q.type==="file")var g=i3;else if(Ml(Q))if(Bo)g=a3;else{g=s3;var R=o3}else(m=Q.nodeName)&&m.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(g=u3);if(g&&(g=g(e,c))){Ao(D,g,t,f);break e}R&&R(e,Q,c),e==="focusout"&&(R=Q._wrapperState)&&R.controlled&&Q.type==="number"&&Rr(Q,"number",Q.value)}switch(R=c?be(c):window,e){case"focusin":(Ml(R)||R.contentEditable==="true")&&(He=R,Mr=c,Bn=null);break;case"focusout":Bn=Mr=He=null;break;case"mousedown":Ar=!0;break;case"contextmenu":case"mouseup":case"dragend":Ar=!1,Ul(D,t,f);break;case"selectionchange":if(f3)break;case"keydown":case"keyup":Ul(D,t,f)}var S;if(I2)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else We?Oo(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(zo&&t.locale!=="ko"&&(We||C!=="onCompositionStart"?C==="onCompositionEnd"&&We&&(S=Lo()):(oe=f,j2="value"in oe?oe.value:oe.textContent,We=!0)),R=e1(c,C),0<R.length&&(C=new Il(C,e,null,t,f),D.push({event:C,listeners:R}),S?C.data=S:(S=Mo(t),S!==null&&(C.data=S)))),(S=e3?n3(e,t):t3(e,t))&&(c=e1(c,"onBeforeInput"),0<c.length&&(f=new Il("onBeforeInput","beforeinput",null,t,f),D.push({event:f,listeners:c}),f.data=S))}Go(D,n)})}function qn(e,n,t){return{instance:e,listener:n,currentTarget:t}}function e1(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Kn(e,t),i!=null&&r.unshift(qn(e,i,l)),i=Kn(e,n),i!=null&&r.push(qn(e,i,l))),e=e.return}return r}function $e(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hl(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var s=t,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Kn(t,i),u!=null&&o.unshift(qn(t,u,s))):l||(u=Kn(t,i),u!=null&&o.push(qn(t,u,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var p3=/\r\n?/g,N3=/\u0000|\uFFFD/g;function Kl(e){return(typeof e=="string"?e:""+e).replace(p3,`
`).replace(N3,"")}function St(e,n,t){if(n=Kl(n),Kl(e)!==n&&t)throw Error(v(425))}function n1(){}var Br=null,Fr=null;function $r(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ur=typeof setTimeout=="function"?setTimeout:void 0,T3=typeof clearTimeout=="function"?clearTimeout:void 0,bl=typeof Promise=="function"?Promise:void 0,h3=typeof queueMicrotask=="function"?queueMicrotask:typeof bl<"u"?function(e){return bl.resolve(null).then(e).catch(m3)}:Ur;function m3(e){setTimeout(function(){throw e})}function or(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Gn(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Gn(n)}function fe(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Yl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),B0="__reactFiber$"+Nn,et="__reactProps$"+Nn,Y0="__reactContainer$"+Nn,Vr="__reactEvents$"+Nn,P3="__reactListeners$"+Nn,y3="__reactHandles$"+Nn;function ke(e){var n=e[B0];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Y0]||t[B0]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Yl(e);e!==null;){if(t=e[B0])return t;e=Yl(e)}return n}e=t,t=e.parentNode}return null}function ft(e){return e=e[B0]||e[Y0],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function be(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function w1(e){return e[et]||null}var Wr=[],Ye=-1;function Pe(e){return{current:e}}function A(e){0>Ye||(e.current=Wr[Ye],Wr[Ye]=null,Ye--)}function O(e,n){Ye++,Wr[Ye]=e.current,e.current=n}var he={},s0=Pe(he),D0=Pe(!1),_e=he;function un(e,n){var t=e.type.contextTypes;if(!t)return he;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function x0(e){return e=e.childContextTypes,e!=null}function t1(){A(D0),A(s0)}function Gl(e,n,t){if(s0.current!==he)throw Error(v(168));O(s0,n),O(D0,t)}function Jo(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(v(108,oa(e)||"Unknown",l));return H({},t,r)}function r1(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||he,_e=s0.current,O(s0,e),O(D0,D0.current),!0}function Xl(e,n,t){var r=e.stateNode;if(!r)throw Error(v(169));t?(e=Jo(e,n,_e),r.__reactInternalMemoizedMergedChildContext=e,A(D0),A(s0),O(s0,e)):A(D0),O(D0,t)}var V0=null,k1=!1,sr=!1;function Zo(e){V0===null?V0=[e]:V0.push(e)}function v3(e){k1=!0,Zo(e)}function ye(){if(!sr&&V0!==null){sr=!0;var e=0,n=z;try{var t=V0;for(z=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}V0=null,k1=!1}catch(l){throw V0!==null&&(V0=V0.slice(e+1)),vo(w2,ye),l}finally{z=n,sr=!1}}return null}var Ge=[],Xe=0,l1=null,i1=0,g0=[],R0=0,Ie=null,W0=1,H0="";function Re(e,n){Ge[Xe++]=i1,Ge[Xe++]=l1,l1=e,i1=n}function qo(e,n,t){g0[R0++]=W0,g0[R0++]=H0,g0[R0++]=Ie,Ie=e;var r=W0;e=H0;var l=32-L0(r)-1;r&=~(1<<l),t+=1;var i=32-L0(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,W0=1<<32-L0(n)+l|t<<l|r,H0=i+e}else W0=1<<i|t<<l|r,H0=e}function z2(e){e.return!==null&&(Re(e,1),qo(e,1,0))}function O2(e){for(;e===l1;)l1=Ge[--Xe],Ge[Xe]=null,i1=Ge[--Xe],Ge[Xe]=null;for(;e===Ie;)Ie=g0[--R0],g0[R0]=null,H0=g0[--R0],g0[R0]=null,W0=g0[--R0],g0[R0]=null}var m0=null,h0=null,B=!1,I0=null;function es(e,n){var t=w0(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Jl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,m0=e,h0=fe(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,m0=e,h0=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Ie!==null?{id:W0,overflow:H0}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=w0(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,m0=e,h0=null,!0):!1;default:return!1}}function Hr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kr(e){if(B){var n=h0;if(n){var t=n;if(!Jl(e,n)){if(Hr(e))throw Error(v(418));n=fe(t.nextSibling);var r=m0;n&&Jl(e,n)?es(r,t):(e.flags=e.flags&-4097|2,B=!1,m0=e)}}else{if(Hr(e))throw Error(v(418));e.flags=e.flags&-4097|2,B=!1,m0=e}}}function Zl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;m0=e}function Ct(e){if(e!==m0)return!1;if(!B)return Zl(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!$r(e.type,e.memoizedProps)),n&&(n=h0)){if(Hr(e))throw ns(),Error(v(418));for(;n;)es(e,n),n=fe(n.nextSibling)}if(Zl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){h0=fe(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}h0=null}}else h0=m0?fe(e.stateNode.nextSibling):null;return!0}function ns(){for(var e=h0;e;)e=fe(e.nextSibling)}function an(){h0=m0=null,B=!1}function M2(e){I0===null?I0=[e]:I0.push(e)}var g3=J0.ReactCurrentBatchConfig;function kn(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function jt(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ql(e){var n=e._init;return n(e._payload)}function ts(e){function n(p,d){if(e){var x=p.deletions;x===null?(p.deletions=[d],p.flags|=16):x.push(d)}}function t(p,d){if(!e)return null;for(;d!==null;)n(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function l(p,d){return p=pe(p,d),p.index=0,p.sibling=null,p}function i(p,d,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<d?(p.flags|=2,d):x):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,x,T){return d===null||d.tag!==6?(d=Dr(x,p.mode,T),d.return=p,d):(d=l(d,x),d.return=p,d)}function u(p,d,x,T){var g=x.type;return g===Ve?f(p,d,x.props.children,T,x.key):d!==null&&(d.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===te&&ql(g)===d.type)?(T=l(d,x.props),T.ref=kn(p,d,x),T.return=p,T):(T=Kt(x.type,x.key,x.props,null,p.mode,T),T.ref=kn(p,d,x),T.return=p,T)}function c(p,d,x,T){return d===null||d.tag!==4||d.stateNode.containerInfo!==x.containerInfo||d.stateNode.implementation!==x.implementation?(d=xr(x,p.mode,T),d.return=p,d):(d=l(d,x.children||[]),d.return=p,d)}function f(p,d,x,T,g){return d===null||d.tag!==7?(d=Ee(x,p.mode,T,g),d.return=p,d):(d=l(d,x),d.return=p,d)}function D(p,d,x){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Dr(""+d,p.mode,x),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ht:return x=Kt(d.type,d.key,d.props,null,p.mode,x),x.ref=kn(p,null,d),x.return=p,x;case Ue:return d=xr(d,p.mode,x),d.return=p,d;case te:var T=d._init;return D(p,T(d._payload),x)}if(_n(d)||yn(d))return d=Ee(d,p.mode,x,null),d.return=p,d;jt(p,d)}return null}function Q(p,d,x,T){var g=d!==null?d.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return g!==null?null:s(p,d,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ht:return x.key===g?u(p,d,x,T):null;case Ue:return x.key===g?c(p,d,x,T):null;case te:return g=x._init,Q(p,d,g(x._payload),T)}if(_n(x)||yn(x))return g!==null?null:f(p,d,x,T,null);jt(p,x)}return null}function m(p,d,x,T,g){if(typeof T=="string"&&T!==""||typeof T=="number")return p=p.get(x)||null,s(d,p,""+T,g);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ht:return p=p.get(T.key===null?x:T.key)||null,u(d,p,T,g);case Ue:return p=p.get(T.key===null?x:T.key)||null,c(d,p,T,g);case te:var R=T._init;return m(p,d,x,R(T._payload),g)}if(_n(T)||yn(T))return p=p.get(x)||null,f(d,p,T,g,null);jt(d,T)}return null}function N(p,d,x,T){for(var g=null,R=null,S=d,C=d=0,F=null;S!==null&&C<x.length;C++){S.index>C?(F=S,S=null):F=S.sibling;var E=Q(p,S,x[C],T);if(E===null){S===null&&(S=F);break}e&&S&&E.alternate===null&&n(p,S),d=i(E,d,C),R===null?g=E:R.sibling=E,R=E,S=F}if(C===x.length)return t(p,S),B&&Re(p,C),g;if(S===null){for(;C<x.length;C++)S=D(p,x[C],T),S!==null&&(d=i(S,d,C),R===null?g=S:R.sibling=S,R=S);return B&&Re(p,C),g}for(S=r(p,S);C<x.length;C++)F=m(S,p,C,x[C],T),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?C:F.key),d=i(F,d,C),R===null?g=F:R.sibling=F,R=F);return e&&S.forEach(function(N0){return n(p,N0)}),B&&Re(p,C),g}function h(p,d,x,T){var g=yn(x);if(typeof g!="function")throw Error(v(150));if(x=g.call(x),x==null)throw Error(v(151));for(var R=g=null,S=d,C=d=0,F=null,E=x.next();S!==null&&!E.done;C++,E=x.next()){S.index>C?(F=S,S=null):F=S.sibling;var N0=Q(p,S,E.value,T);if(N0===null){S===null&&(S=F);break}e&&S&&N0.alternate===null&&n(p,S),d=i(N0,d,C),R===null?g=N0:R.sibling=N0,R=N0,S=F}if(E.done)return t(p,S),B&&Re(p,C),g;if(S===null){for(;!E.done;C++,E=x.next())E=D(p,E.value,T),E!==null&&(d=i(E,d,C),R===null?g=E:R.sibling=E,R=E);return B&&Re(p,C),g}for(S=r(p,S);!E.done;C++,E=x.next())E=m(S,p,C,E.value,T),E!==null&&(e&&E.alternate!==null&&S.delete(E.key===null?C:E.key),d=i(E,d,C),R===null?g=E:R.sibling=E,R=E);return e&&S.forEach(function(mn){return n(p,mn)}),B&&Re(p,C),g}function y(p,d,x,T){if(typeof x=="object"&&x!==null&&x.type===Ve&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ht:e:{for(var g=x.key,R=d;R!==null;){if(R.key===g){if(g=x.type,g===Ve){if(R.tag===7){t(p,R.sibling),d=l(R,x.props.children),d.return=p,p=d;break e}}else if(R.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===te&&ql(g)===R.type){t(p,R.sibling),d=l(R,x.props),d.ref=kn(p,R,x),d.return=p,p=d;break e}t(p,R);break}else n(p,R);R=R.sibling}x.type===Ve?(d=Ee(x.props.children,p.mode,T,x.key),d.return=p,p=d):(T=Kt(x.type,x.key,x.props,null,p.mode,T),T.ref=kn(p,d,x),T.return=p,p=T)}return o(p);case Ue:e:{for(R=x.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===x.containerInfo&&d.stateNode.implementation===x.implementation){t(p,d.sibling),d=l(d,x.children||[]),d.return=p,p=d;break e}else{t(p,d);break}else n(p,d);d=d.sibling}d=xr(x,p.mode,T),d.return=p,p=d}return o(p);case te:return R=x._init,y(p,d,R(x._payload),T)}if(_n(x))return N(p,d,x,T);if(yn(x))return h(p,d,x,T);jt(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,d!==null&&d.tag===6?(t(p,d.sibling),d=l(d,x),d.return=p,p=d):(t(p,d),d=Dr(x,p.mode,T),d.return=p,p=d),o(p)):t(p,d)}return y}var cn=ts(!0),rs=ts(!1),o1=Pe(null),s1=null,Je=null,A2=null;function B2(){A2=Je=s1=null}function F2(e){var n=o1.current;A(o1),e._currentValue=n}function br(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ln(e,n){s1=e,A2=Je=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Q0=!0),e.firstContext=null)}function S0(e){var n=e._currentValue;if(A2!==e)if(e={context:e,memoizedValue:n,next:null},Je===null){if(s1===null)throw Error(v(308));Je=e,s1.dependencies={lanes:0,firstContext:e}}else Je=Je.next=e;return n}var Se=null;function $2(e){Se===null?Se=[e]:Se.push(e)}function ls(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,$2(n)):(t.next=l.next,l.next=t),n.interleaved=t,G0(e,r)}function G0(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var re=!1;function U2(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function is(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function K0(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Qe(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,G0(e,t)}return l=r.interleaved,l===null?(n.next=n,$2(r)):(n.next=l.next,l.next=n),r.interleaved=n,G0(e,t)}function Ft(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,k2(e,t)}}function ei(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function u1(e,n,t,r){var l=e.updateQueue;re=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=u))}if(i!==null){var D=l.baseState;o=0,f=c=u=null,s=i;do{var Q=s.lane,m=s.eventTime;if((r&Q)===Q){f!==null&&(f=f.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,h=s;switch(Q=n,m=t,h.tag){case 1:if(N=h.payload,typeof N=="function"){D=N.call(m,D,Q);break e}D=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=h.payload,Q=typeof N=="function"?N.call(m,D,Q):N,Q==null)break e;D=H({},D,Q);break e;case 2:re=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,Q=l.effects,Q===null?l.effects=[s]:Q.push(s))}else m={eventTime:m,lane:Q,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=m,u=D):f=f.next=m,o|=Q;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;Q=s,s=Q.next,Q.next=null,l.lastBaseUpdate=Q,l.shared.pending=null}}while(!0);if(f===null&&(u=D),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=f,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);ze|=o,e.lanes=o,e.memoizedState=D}}function ni(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var Qt={},$0=Pe(Qt),nt=Pe(Qt),tt=Pe(Qt);function Ce(e){if(e===Qt)throw Error(v(174));return e}function V2(e,n){switch(O(tt,n),O(nt,e),O($0,Qt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:kr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=kr(n,e)}A($0),O($0,n)}function dn(){A($0),A(nt),A(tt)}function os(e){Ce(tt.current);var n=Ce($0.current),t=kr(n,e.type);n!==t&&(O(nt,e),O($0,t))}function W2(e){nt.current===e&&(A($0),A(nt))}var $=Pe(0);function a1(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ur=[];function H2(){for(var e=0;e<ur.length;e++)ur[e]._workInProgressVersionPrimary=null;ur.length=0}var $t=J0.ReactCurrentDispatcher,ar=J0.ReactCurrentBatchConfig,Le=0,V=null,X=null,q=null,c1=!1,Fn=!1,rt=0,R3=0;function l0(){throw Error(v(321))}function K2(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!O0(e[t],n[t]))return!1;return!0}function b2(e,n,t,r,l,i){if(Le=i,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,$t.current=e===null||e.memoizedState===null?C3:j3,e=t(r,l),Fn){i=0;do{if(Fn=!1,rt=0,25<=i)throw Error(v(301));i+=1,q=X=null,n.updateQueue=null,$t.current=E3,e=t(r,l)}while(Fn)}if($t.current=d1,n=X!==null&&X.next!==null,Le=0,q=X=V=null,c1=!1,n)throw Error(v(300));return e}function Y2(){var e=rt!==0;return rt=0,e}function A0(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=e:q=q.next=e,q}function C0(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=q===null?V.memoizedState:q.next;if(n!==null)q=n,X=e;else{if(e===null)throw Error(v(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?V.memoizedState=q=e:q=q.next=e}return q}function lt(e,n){return typeof n=="function"?n(e):n}function cr(e){var n=C0(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=X,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,c=i;do{var f=c.lane;if((Le&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var D={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=D,o=r):u=u.next=D,V.lanes|=f,ze|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=s,O0(r,n.memoizedState)||(Q0=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,ze|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function dr(e){var n=C0(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);O0(i,n.memoizedState)||(Q0=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function ss(){}function us(e,n){var t=V,r=C0(),l=n(),i=!O0(r.memoizedState,l);if(i&&(r.memoizedState=l,Q0=!0),r=r.queue,G2(ds.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||q!==null&&q.memoizedState.tag&1){if(t.flags|=2048,it(9,cs.bind(null,t,r,l,n),void 0,null),e0===null)throw Error(v(349));Le&30||as(t,n,l)}return l}function as(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function cs(e,n,t,r){n.value=t,n.getSnapshot=r,fs(n)&&Qs(e)}function ds(e,n,t){return t(function(){fs(n)&&Qs(e)})}function fs(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!O0(e,t)}catch{return!0}}function Qs(e){var n=G0(e,1);n!==null&&z0(n,e,1,-1)}function ti(e){var n=A0();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lt,lastRenderedState:e},n.queue=e,e=e.dispatch=S3.bind(null,V,e),[n.memoizedState,e]}function it(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ds(){return C0().memoizedState}function Ut(e,n,t,r){var l=A0();V.flags|=e,l.memoizedState=it(1|n,t,void 0,r===void 0?null:r)}function S1(e,n,t,r){var l=C0();r=r===void 0?null:r;var i=void 0;if(X!==null){var o=X.memoizedState;if(i=o.destroy,r!==null&&K2(r,o.deps)){l.memoizedState=it(n,t,i,r);return}}V.flags|=e,l.memoizedState=it(1|n,t,i,r)}function ri(e,n){return Ut(8390656,8,e,n)}function G2(e,n){return S1(2048,8,e,n)}function xs(e,n){return S1(4,2,e,n)}function ps(e,n){return S1(4,4,e,n)}function Ns(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ts(e,n,t){return t=t!=null?t.concat([e]):null,S1(4,4,Ns.bind(null,n,e),t)}function X2(){}function hs(e,n){var t=C0();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&K2(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function ms(e,n){var t=C0();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&K2(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ps(e,n,t){return Le&21?(O0(t,n)||(t=wo(),V.lanes|=t,ze|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Q0=!0),e.memoizedState=t)}function w3(e,n){var t=z;z=t!==0&&4>t?t:4,e(!0);var r=ar.transition;ar.transition={};try{e(!1),n()}finally{z=t,ar.transition=r}}function ys(){return C0().memoizedState}function k3(e,n,t){var r=xe(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},vs(e))gs(n,t);else if(t=ls(e,n,t,r),t!==null){var l=a0();z0(t,e,r,l),Rs(t,n,r)}}function S3(e,n,t){var r=xe(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(vs(e))gs(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,s=i(o,t);if(l.hasEagerState=!0,l.eagerState=s,O0(s,o)){var u=n.interleaved;u===null?(l.next=l,$2(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=ls(e,n,l,r),t!==null&&(l=a0(),z0(t,e,r,l),Rs(t,n,r))}}function vs(e){var n=e.alternate;return e===V||n!==null&&n===V}function gs(e,n){Fn=c1=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Rs(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,k2(e,t)}}var d1={readContext:S0,useCallback:l0,useContext:l0,useEffect:l0,useImperativeHandle:l0,useInsertionEffect:l0,useLayoutEffect:l0,useMemo:l0,useReducer:l0,useRef:l0,useState:l0,useDebugValue:l0,useDeferredValue:l0,useTransition:l0,useMutableSource:l0,useSyncExternalStore:l0,useId:l0,unstable_isNewReconciler:!1},C3={readContext:S0,useCallback:function(e,n){return A0().memoizedState=[e,n===void 0?null:n],e},useContext:S0,useEffect:ri,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ut(4194308,4,Ns.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ut(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ut(4,2,e,n)},useMemo:function(e,n){var t=A0();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=A0();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=k3.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var n=A0();return e={current:e},n.memoizedState=e},useState:ti,useDebugValue:X2,useDeferredValue:function(e){return A0().memoizedState=e},useTransition:function(){var e=ti(!1),n=e[0];return e=w3.bind(null,e[1]),A0().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=V,l=A0();if(B){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),e0===null)throw Error(v(349));Le&30||as(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,ri(ds.bind(null,r,i,e),[e]),r.flags|=2048,it(9,cs.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=A0(),n=e0.identifierPrefix;if(B){var t=H0,r=W0;t=(r&~(1<<32-L0(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=rt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=R3++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},j3={readContext:S0,useCallback:hs,useContext:S0,useEffect:G2,useImperativeHandle:Ts,useInsertionEffect:xs,useLayoutEffect:ps,useMemo:ms,useReducer:cr,useRef:Ds,useState:function(){return cr(lt)},useDebugValue:X2,useDeferredValue:function(e){var n=C0();return Ps(n,X.memoizedState,e)},useTransition:function(){var e=cr(lt)[0],n=C0().memoizedState;return[e,n]},useMutableSource:ss,useSyncExternalStore:us,useId:ys,unstable_isNewReconciler:!1},E3={readContext:S0,useCallback:hs,useContext:S0,useEffect:G2,useImperativeHandle:Ts,useInsertionEffect:xs,useLayoutEffect:ps,useMemo:ms,useReducer:dr,useRef:Ds,useState:function(){return dr(lt)},useDebugValue:X2,useDeferredValue:function(e){var n=C0();return X===null?n.memoizedState=e:Ps(n,X.memoizedState,e)},useTransition:function(){var e=dr(lt)[0],n=C0().memoizedState;return[e,n]},useMutableSource:ss,useSyncExternalStore:us,useId:ys,unstable_isNewReconciler:!1};function E0(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Yr(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:H({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var C1={isMounted:function(e){return(e=e._reactInternals)?Be(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=a0(),l=xe(e),i=K0(r,l);i.payload=n,t!=null&&(i.callback=t),n=Qe(e,i,l),n!==null&&(z0(n,e,l,r),Ft(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=a0(),l=xe(e),i=K0(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Qe(e,i,l),n!==null&&(z0(n,e,l,r),Ft(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=a0(),r=xe(e),l=K0(t,r);l.tag=2,n!=null&&(l.callback=n),n=Qe(e,l,r),n!==null&&(z0(n,e,r,t),Ft(n,e,r))}};function li(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Jn(t,r)||!Jn(l,i):!0}function ws(e,n,t){var r=!1,l=he,i=n.contextType;return typeof i=="object"&&i!==null?i=S0(i):(l=x0(n)?_e:s0.current,r=n.contextTypes,i=(r=r!=null)?un(e,l):he),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=C1,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function ii(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&C1.enqueueReplaceState(n,n.state,null)}function Gr(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},U2(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=S0(i):(i=x0(n)?_e:s0.current,l.context=un(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Yr(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&C1.enqueueReplaceState(l,l.state,null),u1(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,n){try{var t="",r=n;do t+=ia(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function fr(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Xr(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var _3=typeof WeakMap=="function"?WeakMap:Map;function ks(e,n,t){t=K0(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Q1||(Q1=!0,o2=r),Xr(e,n)},t}function Ss(e,n,t){t=K0(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Xr(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Xr(e,n),typeof r!="function"&&(De===null?De=new Set([this]):De.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function oi(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new _3;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=K3.bind(null,e,n,t),n.then(e,e))}function si(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ui(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=K0(-1,1),n.tag=2,Qe(t,n,1))),t.lanes|=1),e)}var I3=J0.ReactCurrentOwner,Q0=!1;function u0(e,n,t,r){n.child=e===null?rs(n,null,t,r):cn(n,e.child,t,r)}function ai(e,n,t,r,l){t=t.render;var i=n.ref;return ln(n,l),r=b2(e,n,t,r,i,l),t=Y2(),e!==null&&!Q0?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,X0(e,n,l)):(B&&t&&z2(n),n.flags|=1,u0(e,n,r,l),n.child)}function ci(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!ll(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Cs(e,n,i,r,l)):(e=Kt(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Jn,t(o,r)&&e.ref===n.ref)return X0(e,n,l)}return n.flags|=1,e=pe(i,r),e.ref=n.ref,e.return=n,n.child=e}function Cs(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Jn(i,r)&&e.ref===n.ref)if(Q0=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Q0=!0);else return n.lanes=e.lanes,X0(e,n,l)}return Jr(e,n,t,r,l)}function js(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(qe,T0),T0|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(qe,T0),T0|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,O(qe,T0),T0|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,O(qe,T0),T0|=r;return u0(e,n,l,t),n.child}function Es(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Jr(e,n,t,r,l){var i=x0(t)?_e:s0.current;return i=un(n,i),ln(n,l),t=b2(e,n,t,r,i,l),r=Y2(),e!==null&&!Q0?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,X0(e,n,l)):(B&&r&&z2(n),n.flags|=1,u0(e,n,t,l),n.child)}function di(e,n,t,r,l){if(x0(t)){var i=!0;r1(n)}else i=!1;if(ln(n,l),n.stateNode===null)Vt(e,n),ws(n,t,r),Gr(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=S0(c):(c=x0(t)?_e:s0.current,c=un(n,c));var f=t.getDerivedStateFromProps,D=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";D||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==c)&&ii(n,o,r,c),re=!1;var Q=n.memoizedState;o.state=Q,u1(n,r,o,l),u=n.memoizedState,s!==r||Q!==u||D0.current||re?(typeof f=="function"&&(Yr(n,t,f,r),u=n.memoizedState),(s=re||li(n,t,s,r,Q,u,c))?(D||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),o.props=r,o.state=u,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,is(e,n),s=n.memoizedProps,c=n.type===n.elementType?s:E0(n.type,s),o.props=c,D=n.pendingProps,Q=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=S0(u):(u=x0(t)?_e:s0.current,u=un(n,u));var m=t.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==D||Q!==u)&&ii(n,o,r,u),re=!1,Q=n.memoizedState,o.state=Q,u1(n,r,o,l);var N=n.memoizedState;s!==D||Q!==N||D0.current||re?(typeof m=="function"&&(Yr(n,t,m,r),N=n.memoizedState),(c=re||li(n,t,c,r,Q,N,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=N),o.props=r,o.state=N,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),r=!1)}return Zr(e,n,t,r,i,l)}function Zr(e,n,t,r,l,i){Es(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&Xl(n,t,!1),X0(e,n,i);r=n.stateNode,I3.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=cn(n,e.child,null,i),n.child=cn(n,null,s,i)):u0(e,n,s,i),n.memoizedState=r.state,l&&Xl(n,t,!0),n.child}function _s(e){var n=e.stateNode;n.pendingContext?Gl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Gl(e,n.context,!1),V2(e,n.containerInfo)}function fi(e,n,t,r,l){return an(),M2(l),n.flags|=256,u0(e,n,t,r),n.child}var qr={dehydrated:null,treeContext:null,retryLane:0};function e2(e){return{baseLanes:e,cachePool:null,transitions:null}}function Is(e,n,t){var r=n.pendingProps,l=$.current,i=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O($,l&1),e===null)return Kr(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=_1(o,r,0,null),e=Ee(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=e2(t),n.memoizedState=qr,e):J2(n,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return L3(e,n,o,r,s,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=pe(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=pe(s,i):(i=Ee(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?e2(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=qr,r}return i=e.child,e=i.sibling,r=pe(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function J2(e,n){return n=_1({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Et(e,n,t,r){return r!==null&&M2(r),cn(n,e.child,null,t),e=J2(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function L3(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=fr(Error(v(422))),Et(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=_1({mode:"visible",children:r.children},l,0,null),i=Ee(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&cn(n,e.child,null,o),n.child.memoizedState=e2(o),n.memoizedState=qr,i);if(!(n.mode&1))return Et(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(v(419)),r=fr(i,r,void 0),Et(e,n,o,r)}if(s=(o&e.childLanes)!==0,Q0||s){if(r=e0,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,G0(e,l),z0(r,e,l,-1))}return rl(),r=fr(Error(v(421))),Et(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=b3.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,h0=fe(l.nextSibling),m0=n,B=!0,I0=null,e!==null&&(g0[R0++]=W0,g0[R0++]=H0,g0[R0++]=Ie,W0=e.id,H0=e.overflow,Ie=n),n=J2(n,r.children),n.flags|=4096,n)}function Qi(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),br(e.return,n,t)}function Qr(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Ls(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(u0(e,n,r.children,t),r=$.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qi(e,t,n);else if(e.tag===19)Qi(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O($,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&a1(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Qr(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&a1(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Qr(n,!0,t,null,i);break;case"together":Qr(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vt(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function X0(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ze|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=pe(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=pe(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function z3(e,n,t){switch(n.tag){case 3:_s(n),an();break;case 5:os(n);break;case 1:x0(n.type)&&r1(n);break;case 4:V2(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;O(o1,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(O($,$.current&1),n.flags|=128,null):t&n.child.childLanes?Is(e,n,t):(O($,$.current&1),e=X0(e,n,t),e!==null?e.sibling:null);O($,$.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ls(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O($,$.current),r)break;return null;case 22:case 23:return n.lanes=0,js(e,n,t)}return X0(e,n,t)}var zs,n2,Os,Ms;zs=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};n2=function(){};Os=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Ce($0.current);var i=null;switch(t){case"input":l=vr(e,l),r=vr(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=wr(e,l),r=wr(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=n1)}Sr(t,r);var o;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(i||(i=[]),i.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&M("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Ms=function(e,n,t,r){t!==r&&(n.flags|=4)};function Sn(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function i0(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function O3(e,n,t){var r=n.pendingProps;switch(O2(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return i0(n),null;case 1:return x0(n.type)&&t1(),i0(n),null;case 3:return r=n.stateNode,dn(),A(D0),A(s0),H2(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ct(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,I0!==null&&(a2(I0),I0=null))),n2(e,n),i0(n),null;case 5:W2(n);var l=Ce(tt.current);if(t=n.type,e!==null&&n.stateNode!=null)Os(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(v(166));return i0(n),null}if(e=Ce($0.current),Ct(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[B0]=n,r[et]=i,e=(n.mode&1)!==0,t){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(l=0;l<Ln.length;l++)M(Ln[l],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":yl(r,i),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},M("invalid",r);break;case"textarea":gl(r,i),M("invalid",r)}Sr(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&St(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&St(r.textContent,s,e),l=["children",""+s]):Wn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&M("scroll",r)}switch(t){case"input":mt(r),vl(r,i,!0);break;case"textarea":mt(r),Rl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=n1)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=co(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[B0]=n,e[et]=r,zs(e,n,!1,!1),n.stateNode=e;e:{switch(o=Cr(t,r),t){case"dialog":M("cancel",e),M("close",e),l=r;break;case"iframe":case"object":case"embed":M("load",e),l=r;break;case"video":case"audio":for(l=0;l<Ln.length;l++)M(Ln[l],e);l=r;break;case"source":M("error",e),l=r;break;case"img":case"image":case"link":M("error",e),M("load",e),l=r;break;case"details":M("toggle",e),l=r;break;case"input":yl(e,r),l=vr(e,r),M("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),M("invalid",e);break;case"textarea":gl(e,r),l=wr(e,r),M("invalid",e);break;default:l=r}Sr(t,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Do(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&fo(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Hn(e,u):typeof u=="number"&&Hn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&M("scroll",e):u!=null&&P2(e,i,u,o))}switch(t){case"input":mt(e),vl(e,r,!1);break;case"textarea":mt(e),Rl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Te(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?en(e,!!r.multiple,i,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=n1)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return i0(n),null;case 6:if(e&&n.stateNode!=null)Ms(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(v(166));if(t=Ce(tt.current),Ce($0.current),Ct(n)){if(r=n.stateNode,t=n.memoizedProps,r[B0]=n,(i=r.nodeValue!==t)&&(e=m0,e!==null))switch(e.tag){case 3:St(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&St(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[B0]=n,n.stateNode=r}return i0(n),null;case 13:if(A($),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&h0!==null&&n.mode&1&&!(n.flags&128))ns(),an(),n.flags|=98560,i=!1;else if(i=Ct(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(v(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[B0]=n}else an(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;i0(n),i=!1}else I0!==null&&(a2(I0),I0=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||$.current&1?J===0&&(J=3):rl())),n.updateQueue!==null&&(n.flags|=4),i0(n),null);case 4:return dn(),n2(e,n),e===null&&Zn(n.stateNode.containerInfo),i0(n),null;case 10:return F2(n.type._context),i0(n),null;case 17:return x0(n.type)&&t1(),i0(n),null;case 19:if(A($),i=n.memoizedState,i===null)return i0(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)Sn(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=a1(e),o!==null){for(n.flags|=128,Sn(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O($,$.current&1|2),n.child}e=e.sibling}i.tail!==null&&Y()>Qn&&(n.flags|=128,r=!0,Sn(i,!1),n.lanes=4194304)}else{if(!r)if(e=a1(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Sn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!B)return i0(n),null}else 2*Y()-i.renderingStartTime>Qn&&t!==1073741824&&(n.flags|=128,r=!0,Sn(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Y(),n.sibling=null,t=$.current,O($,r?t&1|2:t&1),n):(i0(n),null);case 22:case 23:return tl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?T0&1073741824&&(i0(n),n.subtreeFlags&6&&(n.flags|=8192)):i0(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function M3(e,n){switch(O2(n),n.tag){case 1:return x0(n.type)&&t1(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return dn(),A(D0),A(s0),H2(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return W2(n),null;case 13:if(A($),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));an()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return A($),null;case 4:return dn(),null;case 10:return F2(n.type._context),null;case 22:case 23:return tl(),null;case 24:return null;default:return null}}var _t=!1,o0=!1,A3=typeof WeakSet=="function"?WeakSet:Set,w=null;function Ze(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){K(e,n,r)}else t.current=null}function t2(e,n,t){try{t()}catch(r){K(e,n,r)}}var Di=!1;function B3(e,n){if(Br=Zt,e=Uo(),L2(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,s=-1,u=-1,c=0,f=0,D=e,Q=null;n:for(;;){for(var m;D!==t||l!==0&&D.nodeType!==3||(s=o+l),D!==i||r!==0&&D.nodeType!==3||(u=o+r),D.nodeType===3&&(o+=D.nodeValue.length),(m=D.firstChild)!==null;)Q=D,D=m;for(;;){if(D===e)break n;if(Q===t&&++c===l&&(s=o),Q===i&&++f===r&&(u=o),(m=D.nextSibling)!==null)break;D=Q,Q=D.parentNode}D=m}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fr={focusedElem:e,selectionRange:t},Zt=!1,w=n;w!==null;)if(n=w,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,w=e;else for(;w!==null;){n=w;try{var N=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var h=N.memoizedProps,y=N.memoizedState,p=n.stateNode,d=p.getSnapshotBeforeUpdate(n.elementType===n.type?h:E0(n.type,h),y);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var x=n.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(T){K(n,n.return,T)}if(e=n.sibling,e!==null){e.return=n.return,w=e;break}w=n.return}return N=Di,Di=!1,N}function $n(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&t2(n,t,i)}l=l.next}while(l!==r)}}function j1(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function r2(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function As(e){var n=e.alternate;n!==null&&(e.alternate=null,As(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[B0],delete n[et],delete n[Vr],delete n[P3],delete n[y3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bs(e){return e.tag===5||e.tag===3||e.tag===4}function xi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function l2(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=n1));else if(r!==4&&(e=e.child,e!==null))for(l2(e,n,t),e=e.sibling;e!==null;)l2(e,n,t),e=e.sibling}function i2(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(i2(e,n,t),e=e.sibling;e!==null;)i2(e,n,t),e=e.sibling}var n0=null,_0=!1;function ee(e,n,t){for(t=t.child;t!==null;)Fs(e,n,t),t=t.sibling}function Fs(e,n,t){if(F0&&typeof F0.onCommitFiberUnmount=="function")try{F0.onCommitFiberUnmount(y1,t)}catch{}switch(t.tag){case 5:o0||Ze(t,n);case 6:var r=n0,l=_0;n0=null,ee(e,n,t),n0=r,_0=l,n0!==null&&(_0?(e=n0,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):n0.removeChild(t.stateNode));break;case 18:n0!==null&&(_0?(e=n0,t=t.stateNode,e.nodeType===8?or(e.parentNode,t):e.nodeType===1&&or(e,t),Gn(e)):or(n0,t.stateNode));break;case 4:r=n0,l=_0,n0=t.stateNode.containerInfo,_0=!0,ee(e,n,t),n0=r,_0=l;break;case 0:case 11:case 14:case 15:if(!o0&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&t2(t,n,o),l=l.next}while(l!==r)}ee(e,n,t);break;case 1:if(!o0&&(Ze(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){K(t,n,s)}ee(e,n,t);break;case 21:ee(e,n,t);break;case 22:t.mode&1?(o0=(r=o0)||t.memoizedState!==null,ee(e,n,t),o0=r):ee(e,n,t);break;default:ee(e,n,t)}}function pi(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new A3),n.forEach(function(r){var l=Y3.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function j0(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:n0=s.stateNode,_0=!1;break e;case 3:n0=s.stateNode.containerInfo,_0=!0;break e;case 4:n0=s.stateNode.containerInfo,_0=!0;break e}s=s.return}if(n0===null)throw Error(v(160));Fs(i,o,l),n0=null,_0=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){K(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)$s(n,e),n=n.sibling}function $s(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(j0(n,e),M0(e),r&4){try{$n(3,e,e.return),j1(3,e)}catch(h){K(e,e.return,h)}try{$n(5,e,e.return)}catch(h){K(e,e.return,h)}}break;case 1:j0(n,e),M0(e),r&512&&t!==null&&Ze(t,t.return);break;case 5:if(j0(n,e),M0(e),r&512&&t!==null&&Ze(t,t.return),e.flags&32){var l=e.stateNode;try{Hn(l,"")}catch(h){K(e,e.return,h)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&uo(l,i),Cr(s,o);var c=Cr(s,i);for(o=0;o<u.length;o+=2){var f=u[o],D=u[o+1];f==="style"?Do(l,D):f==="dangerouslySetInnerHTML"?fo(l,D):f==="children"?Hn(l,D):P2(l,f,D,c)}switch(s){case"input":gr(l,i);break;case"textarea":ao(l,i);break;case"select":var Q=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?en(l,!!i.multiple,m,!1):Q!==!!i.multiple&&(i.defaultValue!=null?en(l,!!i.multiple,i.defaultValue,!0):en(l,!!i.multiple,i.multiple?[]:"",!1))}l[et]=i}catch(h){K(e,e.return,h)}}break;case 6:if(j0(n,e),M0(e),r&4){if(e.stateNode===null)throw Error(v(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(h){K(e,e.return,h)}}break;case 3:if(j0(n,e),M0(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Gn(n.containerInfo)}catch(h){K(e,e.return,h)}break;case 4:j0(n,e),M0(e);break;case 13:j0(n,e),M0(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(el=Y())),r&4&&pi(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(o0=(c=o0)||f,j0(n,e),o0=c):j0(n,e),M0(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(w=e,f=e.child;f!==null;){for(D=w=f;w!==null;){switch(Q=w,m=Q.child,Q.tag){case 0:case 11:case 14:case 15:$n(4,Q,Q.return);break;case 1:Ze(Q,Q.return);var N=Q.stateNode;if(typeof N.componentWillUnmount=="function"){r=Q,t=Q.return;try{n=r,N.props=n.memoizedProps,N.state=n.memoizedState,N.componentWillUnmount()}catch(h){K(r,t,h)}}break;case 5:Ze(Q,Q.return);break;case 22:if(Q.memoizedState!==null){Ti(D);continue}}m!==null?(m.return=Q,w=m):Ti(D)}f=f.sibling}e:for(f=null,D=e;;){if(D.tag===5){if(f===null){f=D;try{l=D.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=D.stateNode,u=D.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Qo("display",o))}catch(h){K(e,e.return,h)}}}else if(D.tag===6){if(f===null)try{D.stateNode.nodeValue=c?"":D.memoizedProps}catch(h){K(e,e.return,h)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;f===D&&(f=null),D=D.return}f===D&&(f=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:j0(n,e),M0(e),r&4&&pi(e);break;case 21:break;default:j0(n,e),M0(e)}}function M0(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Bs(t)){var r=t;break e}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Hn(l,""),r.flags&=-33);var i=xi(e);i2(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=xi(e);l2(e,s,o);break;default:throw Error(v(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function F3(e,n,t){w=e,Us(e)}function Us(e,n,t){for(var r=(e.mode&1)!==0;w!==null;){var l=w,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||_t;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||o0;s=_t;var c=o0;if(_t=o,(o0=u)&&!c)for(w=l;w!==null;)o=w,u=o.child,o.tag===22&&o.memoizedState!==null?hi(l):u!==null?(u.return=o,w=u):hi(l);for(;i!==null;)w=i,Us(i),i=i.sibling;w=l,_t=s,o0=c}Ni(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,w=i):Ni(e)}}function Ni(e){for(;w!==null;){var n=w;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:o0||j1(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!o0)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:E0(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&ni(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ni(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var D=f.dehydrated;D!==null&&Gn(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}o0||n.flags&512&&r2(n)}catch(Q){K(n,n.return,Q)}}if(n===e){w=null;break}if(t=n.sibling,t!==null){t.return=n.return,w=t;break}w=n.return}}function Ti(e){for(;w!==null;){var n=w;if(n===e){w=null;break}var t=n.sibling;if(t!==null){t.return=n.return,w=t;break}w=n.return}}function hi(e){for(;w!==null;){var n=w;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{j1(4,n)}catch(u){K(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){K(n,l,u)}}var i=n.return;try{r2(n)}catch(u){K(n,i,u)}break;case 5:var o=n.return;try{r2(n)}catch(u){K(n,o,u)}}}catch(u){K(n,n.return,u)}if(n===e){w=null;break}var s=n.sibling;if(s!==null){s.return=n.return,w=s;break}w=n.return}}var $3=Math.ceil,f1=J0.ReactCurrentDispatcher,Z2=J0.ReactCurrentOwner,k0=J0.ReactCurrentBatchConfig,L=0,e0=null,G=null,t0=0,T0=0,qe=Pe(0),J=0,ot=null,ze=0,E1=0,q2=0,Un=null,f0=null,el=0,Qn=1/0,U0=null,Q1=!1,o2=null,De=null,It=!1,se=null,D1=0,Vn=0,s2=null,Wt=-1,Ht=0;function a0(){return L&6?Y():Wt!==-1?Wt:Wt=Y()}function xe(e){return e.mode&1?L&2&&t0!==0?t0&-t0:g3.transition!==null?(Ht===0&&(Ht=wo()),Ht):(e=z,e!==0||(e=window.event,e=e===void 0?16:Io(e.type)),e):1}function z0(e,n,t,r){if(50<Vn)throw Vn=0,s2=null,Error(v(185));ct(e,t,r),(!(L&2)||e!==e0)&&(e===e0&&(!(L&2)&&(E1|=t),J===4&&ie(e,t0)),p0(e,r),t===1&&L===0&&!(n.mode&1)&&(Qn=Y()+500,k1&&ye()))}function p0(e,n){var t=e.callbackNode;ga(e,n);var r=Jt(e,e===e0?t0:0);if(r===0)t!==null&&Sl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Sl(t),n===1)e.tag===0?v3(mi.bind(null,e)):Zo(mi.bind(null,e)),h3(function(){!(L&6)&&ye()}),t=null;else{switch(ko(r)){case 1:t=w2;break;case 4:t=go;break;case 16:t=Xt;break;case 536870912:t=Ro;break;default:t=Xt}t=Xs(t,Vs.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Vs(e,n){if(Wt=-1,Ht=0,L&6)throw Error(v(327));var t=e.callbackNode;if(on()&&e.callbackNode!==t)return null;var r=Jt(e,e===e0?t0:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=x1(e,r);else{n=r;var l=L;L|=2;var i=Hs();(e0!==e||t0!==n)&&(U0=null,Qn=Y()+500,je(e,n));do try{W3();break}catch(s){Ws(e,s)}while(!0);B2(),f1.current=i,L=l,G!==null?n=0:(e0=null,t0=0,n=J)}if(n!==0){if(n===2&&(l=Lr(e),l!==0&&(r=l,n=u2(e,l))),n===1)throw t=ot,je(e,0),ie(e,r),p0(e,Y()),t;if(n===6)ie(e,r);else{if(l=e.current.alternate,!(r&30)&&!U3(l)&&(n=x1(e,r),n===2&&(i=Lr(e),i!==0&&(r=i,n=u2(e,i))),n===1))throw t=ot,je(e,0),ie(e,r),p0(e,Y()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(v(345));case 2:we(e,f0,U0);break;case 3:if(ie(e,r),(r&130023424)===r&&(n=el+500-Y(),10<n)){if(Jt(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){a0(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ur(we.bind(null,e,f0,U0),n);break}we(e,f0,U0);break;case 4:if(ie(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-L0(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$3(r/1960))-r,10<r){e.timeoutHandle=Ur(we.bind(null,e,f0,U0),r);break}we(e,f0,U0);break;case 5:we(e,f0,U0);break;default:throw Error(v(329))}}}return p0(e,Y()),e.callbackNode===t?Vs.bind(null,e):null}function u2(e,n){var t=Un;return e.current.memoizedState.isDehydrated&&(je(e,n).flags|=256),e=x1(e,n),e!==2&&(n=f0,f0=t,n!==null&&a2(n)),e}function a2(e){f0===null?f0=e:f0.push.apply(f0,e)}function U3(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!O0(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ie(e,n){for(n&=~q2,n&=~E1,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-L0(n),r=1<<t;e[t]=-1,n&=~r}}function mi(e){if(L&6)throw Error(v(327));on();var n=Jt(e,0);if(!(n&1))return p0(e,Y()),null;var t=x1(e,n);if(e.tag!==0&&t===2){var r=Lr(e);r!==0&&(n=r,t=u2(e,r))}if(t===1)throw t=ot,je(e,0),ie(e,n),p0(e,Y()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,we(e,f0,U0),p0(e,Y()),null}function nl(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(Qn=Y()+500,k1&&ye())}}function Oe(e){se!==null&&se.tag===0&&!(L&6)&&on();var n=L;L|=1;var t=k0.transition,r=z;try{if(k0.transition=null,z=1,e)return e()}finally{z=r,k0.transition=t,L=n,!(L&6)&&ye()}}function tl(){T0=qe.current,A(qe)}function je(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,T3(t)),G!==null)for(t=G.return;t!==null;){var r=t;switch(O2(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&t1();break;case 3:dn(),A(D0),A(s0),H2();break;case 5:W2(r);break;case 4:dn();break;case 13:A($);break;case 19:A($);break;case 10:F2(r.type._context);break;case 22:case 23:tl()}t=t.return}if(e0=e,G=e=pe(e.current,null),t0=T0=n,J=0,ot=null,q2=E1=ze=0,f0=Un=null,Se!==null){for(n=0;n<Se.length;n++)if(t=Se[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}Se=null}return e}function Ws(e,n){do{var t=G;try{if(B2(),$t.current=d1,c1){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}c1=!1}if(Le=0,q=X=V=null,Fn=!1,rt=0,Z2.current=null,t===null||t.return===null){J=1,ot=n,G=null;break}e:{var i=e,o=t.return,s=t,u=n;if(n=t0,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=s,D=f.tag;if(!(f.mode&1)&&(D===0||D===11||D===15)){var Q=f.alternate;Q?(f.updateQueue=Q.updateQueue,f.memoizedState=Q.memoizedState,f.lanes=Q.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=si(o);if(m!==null){m.flags&=-257,ui(m,o,s,i,n),m.mode&1&&oi(i,c,n),n=m,u=c;var N=n.updateQueue;if(N===null){var h=new Set;h.add(u),n.updateQueue=h}else N.add(u);break e}else{if(!(n&1)){oi(i,c,n),rl();break e}u=Error(v(426))}}else if(B&&s.mode&1){var y=si(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),ui(y,o,s,i,n),M2(fn(u,s));break e}}i=u=fn(u,s),J!==4&&(J=2),Un===null?Un=[i]:Un.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=ks(i,u,n);ei(i,p);break e;case 1:s=u;var d=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(De===null||!De.has(x)))){i.flags|=65536,n&=-n,i.lanes|=n;var T=Ss(i,s,n);ei(i,T);break e}}i=i.return}while(i!==null)}bs(t)}catch(g){n=g,G===t&&t!==null&&(G=t=t.return);continue}break}while(!0)}function Hs(){var e=f1.current;return f1.current=d1,e===null?d1:e}function rl(){(J===0||J===3||J===2)&&(J=4),e0===null||!(ze&268435455)&&!(E1&268435455)||ie(e0,t0)}function x1(e,n){var t=L;L|=2;var r=Hs();(e0!==e||t0!==n)&&(U0=null,je(e,n));do try{V3();break}catch(l){Ws(e,l)}while(!0);if(B2(),L=t,f1.current=r,G!==null)throw Error(v(261));return e0=null,t0=0,J}function V3(){for(;G!==null;)Ks(G)}function W3(){for(;G!==null&&!xa();)Ks(G)}function Ks(e){var n=Gs(e.alternate,e,T0);e.memoizedProps=e.pendingProps,n===null?bs(e):G=n,Z2.current=null}function bs(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=M3(t,n),t!==null){t.flags&=32767,G=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,G=null;return}}else if(t=O3(t,n,T0),t!==null){G=t;return}if(n=n.sibling,n!==null){G=n;return}G=n=e}while(n!==null);J===0&&(J=5)}function we(e,n,t){var r=z,l=k0.transition;try{k0.transition=null,z=1,H3(e,n,t,r)}finally{k0.transition=l,z=r}return null}function H3(e,n,t,r){do on();while(se!==null);if(L&6)throw Error(v(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Ra(e,i),e===e0&&(G=e0=null,t0=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||It||(It=!0,Xs(Xt,function(){return on(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=k0.transition,k0.transition=null;var o=z;z=1;var s=L;L|=4,Z2.current=null,B3(e,t),$s(t,e),d3(Fr),Zt=!!Br,Fr=Br=null,e.current=t,F3(t),pa(),L=s,z=o,k0.transition=i}else e.current=t;if(It&&(It=!1,se=e,D1=l),i=e.pendingLanes,i===0&&(De=null),ha(t.stateNode),p0(e,Y()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Q1)throw Q1=!1,e=o2,o2=null,e;return D1&1&&e.tag!==0&&on(),i=e.pendingLanes,i&1?e===s2?Vn++:(Vn=0,s2=e):Vn=0,ye(),null}function on(){if(se!==null){var e=ko(D1),n=k0.transition,t=z;try{if(k0.transition=null,z=16>e?16:e,se===null)var r=!1;else{if(e=se,se=null,D1=0,L&6)throw Error(v(331));var l=L;for(L|=4,w=e.current;w!==null;){var i=w,o=i.child;if(w.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(w=c;w!==null;){var f=w;switch(f.tag){case 0:case 11:case 15:$n(8,f,i)}var D=f.child;if(D!==null)D.return=f,w=D;else for(;w!==null;){f=w;var Q=f.sibling,m=f.return;if(As(f),f===c){w=null;break}if(Q!==null){Q.return=m,w=Q;break}w=m}}}var N=i.alternate;if(N!==null){var h=N.child;if(h!==null){N.child=null;do{var y=h.sibling;h.sibling=null,h=y}while(h!==null)}}w=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,w=o;else e:for(;w!==null;){if(i=w,i.flags&2048)switch(i.tag){case 0:case 11:case 15:$n(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,w=p;break e}w=i.return}}var d=e.current;for(w=d;w!==null;){o=w;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,w=x;else e:for(o=d;w!==null;){if(s=w,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:j1(9,s)}}catch(g){K(s,s.return,g)}if(s===o){w=null;break e}var T=s.sibling;if(T!==null){T.return=s.return,w=T;break e}w=s.return}}if(L=l,ye(),F0&&typeof F0.onPostCommitFiberRoot=="function")try{F0.onPostCommitFiberRoot(y1,e)}catch{}r=!0}return r}finally{z=t,k0.transition=n}}return!1}function Pi(e,n,t){n=fn(t,n),n=ks(e,n,1),e=Qe(e,n,1),n=a0(),e!==null&&(ct(e,1,n),p0(e,n))}function K(e,n,t){if(e.tag===3)Pi(e,e,t);else for(;n!==null;){if(n.tag===3){Pi(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(De===null||!De.has(r))){e=fn(t,e),e=Ss(n,e,1),n=Qe(n,e,1),e=a0(),n!==null&&(ct(n,1,e),p0(n,e));break}}n=n.return}}function K3(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=a0(),e.pingedLanes|=e.suspendedLanes&t,e0===e&&(t0&t)===t&&(J===4||J===3&&(t0&130023424)===t0&&500>Y()-el?je(e,0):q2|=t),p0(e,n)}function Ys(e,n){n===0&&(e.mode&1?(n=vt,vt<<=1,!(vt&130023424)&&(vt=4194304)):n=1);var t=a0();e=G0(e,n),e!==null&&(ct(e,n,t),p0(e,t))}function b3(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ys(e,t)}function Y3(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(n),Ys(e,t)}var Gs;Gs=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||D0.current)Q0=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Q0=!1,z3(e,n,t);Q0=!!(e.flags&131072)}else Q0=!1,B&&n.flags&1048576&&qo(n,i1,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Vt(e,n),e=n.pendingProps;var l=un(n,s0.current);ln(n,t),l=b2(null,n,r,e,l,t);var i=Y2();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,x0(r)?(i=!0,r1(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,U2(n),l.updater=C1,n.stateNode=l,l._reactInternals=n,Gr(n,r,e,t),n=Zr(null,n,r,!0,i,t)):(n.tag=0,B&&i&&z2(n),u0(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Vt(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=X3(r),e=E0(r,e),l){case 0:n=Jr(null,n,r,e,t);break e;case 1:n=di(null,n,r,e,t);break e;case 11:n=ai(null,n,r,e,t);break e;case 14:n=ci(null,n,r,E0(r.type,e),t);break e}throw Error(v(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:E0(r,l),Jr(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:E0(r,l),di(e,n,r,l,t);case 3:e:{if(_s(n),e===null)throw Error(v(387));r=n.pendingProps,i=n.memoizedState,l=i.element,is(e,n),u1(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=fn(Error(v(423)),n),n=fi(e,n,r,t,l);break e}else if(r!==l){l=fn(Error(v(424)),n),n=fi(e,n,r,t,l);break e}else for(h0=fe(n.stateNode.containerInfo.firstChild),m0=n,B=!0,I0=null,t=rs(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(an(),r===l){n=X0(e,n,t);break e}u0(e,n,r,t)}n=n.child}return n;case 5:return os(n),e===null&&Kr(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,$r(r,l)?o=null:i!==null&&$r(r,i)&&(n.flags|=32),Es(e,n),u0(e,n,o,t),n.child;case 6:return e===null&&Kr(n),null;case 13:return Is(e,n,t);case 4:return V2(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=cn(n,null,r,t):u0(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:E0(r,l),ai(e,n,r,l,t);case 7:return u0(e,n,n.pendingProps,t),n.child;case 8:return u0(e,n,n.pendingProps.children,t),n.child;case 12:return u0(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,O(o1,r._currentValue),r._currentValue=o,i!==null)if(O0(i.value,o)){if(i.children===l.children&&!D0.current){n=X0(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=K0(-1,t&-t),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),br(i.return,t,n),s.lanes|=t;break}u=u.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(v(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),br(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}u0(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,ln(n,t),l=S0(l),r=r(l),n.flags|=1,u0(e,n,r,t),n.child;case 14:return r=n.type,l=E0(r,n.pendingProps),l=E0(r.type,l),ci(e,n,r,l,t);case 15:return Cs(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:E0(r,l),Vt(e,n),n.tag=1,x0(r)?(e=!0,r1(n)):e=!1,ln(n,t),ws(n,r,l),Gr(n,r,l,t),Zr(null,n,r,!0,e,t);case 19:return Ls(e,n,t);case 22:return js(e,n,t)}throw Error(v(156,n.tag))};function Xs(e,n){return vo(e,n)}function G3(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function w0(e,n,t,r){return new G3(e,n,t,r)}function ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function X3(e){if(typeof e=="function")return ll(e)?1:0;if(e!=null){if(e=e.$$typeof,e===v2)return 11;if(e===g2)return 14}return 2}function pe(e,n){var t=e.alternate;return t===null?(t=w0(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Kt(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")ll(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ve:return Ee(t.children,l,i,n);case y2:o=8,l|=8;break;case hr:return e=w0(12,t,n,l|2),e.elementType=hr,e.lanes=i,e;case mr:return e=w0(13,t,n,l),e.elementType=mr,e.lanes=i,e;case Pr:return e=w0(19,t,n,l),e.elementType=Pr,e.lanes=i,e;case io:return _1(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ro:o=10;break e;case lo:o=9;break e;case v2:o=11;break e;case g2:o=14;break e;case te:o=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=w0(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Ee(e,n,t,r){return e=w0(7,e,r,n),e.lanes=t,e}function _1(e,n,t,r){return e=w0(22,e,r,n),e.elementType=io,e.lanes=t,e.stateNode={isHidden:!1},e}function Dr(e,n,t){return e=w0(6,e,null,n),e.lanes=t,e}function xr(e,n,t){return n=w0(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function J3(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=G1(0),this.expirationTimes=G1(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=G1(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function il(e,n,t,r,l,i,o,s,u){return e=new J3(e,n,t,s,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=w0(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},U2(i),e}function Z3(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ue,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Js(e){if(!e)return he;e=e._reactInternals;e:{if(Be(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(x0(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(x0(t))return Jo(e,t,n)}return n}function Zs(e,n,t,r,l,i,o,s,u){return e=il(t,r,!0,e,l,i,o,s,u),e.context=Js(null),t=e.current,r=a0(),l=xe(t),i=K0(r,l),i.callback=n??null,Qe(t,i,l),e.current.lanes=l,ct(e,l,r),p0(e,r),e}function I1(e,n,t,r){var l=n.current,i=a0(),o=xe(l);return t=Js(t),n.context===null?n.context=t:n.pendingContext=t,n=K0(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Qe(l,n,o),e!==null&&(z0(e,l,o,i),Ft(e,l,o)),o}function p1(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yi(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ol(e,n){yi(e,n),(e=e.alternate)&&yi(e,n)}function q3(){return null}var qs=typeof reportError=="function"?reportError:function(e){console.error(e)};function sl(e){this._internalRoot=e}L1.prototype.render=sl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));I1(e,n,null,null)};L1.prototype.unmount=sl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Oe(function(){I1(null,e,null,null)}),n[Y0]=null}};function L1(e){this._internalRoot=e}L1.prototype.unstable_scheduleHydration=function(e){if(e){var n=jo();e={blockedOn:null,target:e,priority:n};for(var t=0;t<le.length&&n!==0&&n<le[t].priority;t++);le.splice(t,0,e),t===0&&_o(e)}};function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function z1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vi(){}function ec(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=p1(o);i.call(c)}}var o=Zs(n,r,e,0,null,!1,!1,"",vi);return e._reactRootContainer=o,e[Y0]=o.current,Zn(e.nodeType===8?e.parentNode:e),Oe(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=p1(u);s.call(c)}}var u=il(e,0,!1,null,null,!1,!1,"",vi);return e._reactRootContainer=u,e[Y0]=u.current,Zn(e.nodeType===8?e.parentNode:e),Oe(function(){I1(n,u,t,r)}),u}function O1(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=p1(o);s.call(u)}}I1(n,o,e,l)}else o=ec(t,n,e,l,r);return p1(o)}So=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=In(n.pendingLanes);t!==0&&(k2(n,t|1),p0(n,Y()),!(L&6)&&(Qn=Y()+500,ye()))}break;case 13:Oe(function(){var r=G0(e,1);if(r!==null){var l=a0();z0(r,e,1,l)}}),ol(e,1)}};S2=function(e){if(e.tag===13){var n=G0(e,134217728);if(n!==null){var t=a0();z0(n,e,134217728,t)}ol(e,134217728)}};Co=function(e){if(e.tag===13){var n=xe(e),t=G0(e,n);if(t!==null){var r=a0();z0(t,e,n,r)}ol(e,n)}};jo=function(){return z};Eo=function(e,n){var t=z;try{return z=e,n()}finally{z=t}};Er=function(e,n,t){switch(n){case"input":if(gr(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=w1(r);if(!l)throw Error(v(90));so(r),gr(r,l)}}}break;case"textarea":ao(e,t);break;case"select":n=t.value,n!=null&&en(e,!!t.multiple,n,!1)}};No=nl;To=Oe;var nc={usingClientEntryPoint:!1,Events:[ft,be,w1,xo,po,nl]},Cn={findFiberByHostInstance:ke,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tc={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J0.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Po(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||q3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lt.isDisabled&&Lt.supportsFiber)try{y1=Lt.inject(tc),F0=Lt}catch{}}y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nc;y0.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ul(n))throw Error(v(200));return Z3(e,n,null,t)};y0.createRoot=function(e,n){if(!ul(e))throw Error(v(299));var t=!1,r="",l=qs;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=il(e,1,!1,null,null,t,!1,r,l),e[Y0]=n.current,Zn(e.nodeType===8?e.parentNode:e),new sl(n)};y0.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Po(n),e=e===null?null:e.stateNode,e};y0.flushSync=function(e){return Oe(e)};y0.hydrate=function(e,n,t){if(!z1(n))throw Error(v(200));return O1(null,e,n,!0,t)};y0.hydrateRoot=function(e,n,t){if(!ul(e))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=qs;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Zs(n,null,e,1,t??null,l,!1,i,o),e[Y0]=n.current,Zn(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new L1(n)};y0.render=function(e,n,t){if(!z1(n))throw Error(v(200));return O1(null,e,n,!1,t)};y0.unmountComponentAtNode=function(e){if(!z1(e))throw Error(v(40));return e._reactRootContainer?(Oe(function(){O1(null,null,e,!1,function(){e._reactRootContainer=null,e[Y0]=null})}),!0):!1};y0.unstable_batchedUpdates=nl;y0.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!z1(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return O1(e,n,t,!1,r)};y0.version="18.3.1-next-f1338f8080-20240426";function eu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eu)}catch(e){console.error(e)}}eu(),qi.exports=y0;var nu=qi.exports,gi=nu;Nr.createRoot=gi.createRoot,Nr.hydrateRoot=gi.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function st(){return st=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},st.apply(null,arguments)}var ue;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ue||(ue={}));const Ri="popstate";function rc(e){e===void 0&&(e={});function n(r,l){let{pathname:i,search:o,hash:s}=r.location;return c2("",{pathname:i,search:o,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(r,l){return typeof l=="string"?l:N1(l)}return ic(n,t,null,e)}function W(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function tu(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function lc(){return Math.random().toString(36).substr(2,8)}function wi(e,n){return{usr:e.state,key:e.key,idx:n}}function c2(e,n,t,r){return t===void 0&&(t=null),st({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Tn(n):n,{state:t,key:n&&n.key||r||lc()})}function N1(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Tn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function ic(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,s=ue.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(st({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function D(){s=ue.Pop;let y=f(),p=y==null?null:y-c;c=y,u&&u({action:s,location:h.location,delta:p})}function Q(y,p){s=ue.Push;let d=c2(h.location,y,p);c=f()+1;let x=wi(d,c),T=h.createHref(d);try{o.pushState(x,"",T)}catch(g){if(g instanceof DOMException&&g.name==="DataCloneError")throw g;l.location.assign(T)}i&&u&&u({action:s,location:h.location,delta:1})}function m(y,p){s=ue.Replace;let d=c2(h.location,y,p);c=f();let x=wi(d,c),T=h.createHref(d);o.replaceState(x,"",T),i&&u&&u({action:s,location:h.location,delta:0})}function N(y){let p=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof y=="string"?y:N1(y);return d=d.replace(/ $/,"%20"),W(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let h={get action(){return s},get location(){return e(l,o)},listen(y){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(Ri,D),u=y,()=>{l.removeEventListener(Ri,D),u=null}},createHref(y){return n(l,y)},createURL:N,encodeLocation(y){let p=N(y);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:Q,replace:m,go(y){return o.go(y)}};return h}var ki;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ki||(ki={}));function oc(e,n,t){return t===void 0&&(t="/"),sc(e,n,t)}function sc(e,n,t,r){let l=typeof n=="string"?Tn(n):n,i=Dn(l.pathname||"/",t);if(i==null)return null;let o=ru(e);uc(o);let s=null,u=hc(i);for(let c=0;s==null&&c<o.length;++c)s=Nc(o[c],u);return s}function ru(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(i,o,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(W(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ne([r,u.relativePath]),f=t.concat(u);i.children&&i.children.length>0&&(W(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ru(i.children,n,f,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:xc(c,i.index),routesMeta:f})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,o);else for(let u of lu(i.path))l(i,o,u)}),n}function lu(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=lu(r.join("/")),s=[];return s.push(...o.map(u=>u===""?i:[i,u].join("/"))),l&&s.push(...o),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function uc(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:pc(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const ac=/^:[\w-]+$/,cc=3,dc=2,fc=1,Qc=10,Dc=-2,Si=e=>e==="*";function xc(e,n){let t=e.split("/"),r=t.length;return t.some(Si)&&(r+=Dc),n&&(r+=dc),t.filter(l=>!Si(l)).reduce((l,i)=>l+(ac.test(i)?cc:i===""?fc:Qc),r)}function pc(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function Nc(e,n,t){let{routesMeta:r}=e,l={},i="/",o=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,f=i==="/"?n:n.slice(i.length)||"/",D=d2({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),Q=u.route;if(!D)return null;Object.assign(l,D.params),o.push({params:l,pathname:Ne([i,D.pathname]),pathnameBase:yc(Ne([i,D.pathnameBase])),route:Q}),D.pathnameBase!=="/"&&(i=Ne([i,D.pathnameBase]))}return o}function d2(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Tc(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((c,f,D)=>{let{paramName:Q,isOptional:m}=f;if(Q==="*"){let h=s[D]||"";o=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}const N=s[D];return m&&!N?c[Q]=void 0:c[Q]=(N||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function Tc(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),tu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function hc(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return tu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Dn(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function mc(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?Tn(e):e,i;return t?(t=iu(t),t.startsWith("/")?i=Ci(t.substring(1),"/"):i=Ci(t,n)):i=n,{pathname:i,search:vc(r),hash:gc(l)}}function Ci(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function pr(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Pc(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function al(e,n){let t=Pc(e);return n?t.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function cl(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Tn(e):(l=st({},e),W(!l.pathname||!l.pathname.includes("?"),pr("?","pathname","search",l)),W(!l.pathname||!l.pathname.includes("#"),pr("#","pathname","hash",l)),W(!l.search||!l.search.includes("#"),pr("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,s;if(o==null)s=t;else{let D=n.length-1;if(!r&&o.startsWith("..")){let Q=o.split("/");for(;Q[0]==="..";)Q.shift(),D-=1;l.pathname=Q.join("/")}s=D>=0?n[D]:"/"}let u=mc(l,s),c=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const iu=e=>e.replace(/\/\/+/g,"/"),Ne=e=>iu(e.join("/")),yc=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vc=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gc=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Rc(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ou=["post","put","patch","delete"];new Set(ou);const wc=["get",...ou];new Set(wc);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ut(){return ut=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ut.apply(null,arguments)}const M1=P.createContext(null),su=P.createContext(null),Z0=P.createContext(null),A1=P.createContext(null),q0=P.createContext({outlet:null,matches:[],isDataRoute:!1}),uu=P.createContext(null);function kc(e,n){let{relative:t}=n===void 0?{}:n;hn()||W(!1);let{basename:r,navigator:l}=P.useContext(Z0),{hash:i,pathname:o,search:s}=B1(e,{relative:t}),u=o;return r!=="/"&&(u=o==="/"?r:Ne([r,o])),l.createHref({pathname:u,search:s,hash:i})}function hn(){return P.useContext(A1)!=null}function Fe(){return hn()||W(!1),P.useContext(A1).location}function au(e){P.useContext(Z0).static||P.useLayoutEffect(e)}function cu(){let{isDataRoute:e}=P.useContext(q0);return e?Uc():Sc()}function Sc(){hn()||W(!1);let e=P.useContext(M1),{basename:n,future:t,navigator:r}=P.useContext(Z0),{matches:l}=P.useContext(q0),{pathname:i}=Fe(),o=JSON.stringify(al(l,t.v7_relativeSplatPath)),s=P.useRef(!1);return au(()=>{s.current=!0}),P.useCallback(function(c,f){if(f===void 0&&(f={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let D=cl(c,JSON.parse(o),i,f.relative==="path");e==null&&n!=="/"&&(D.pathname=D.pathname==="/"?n:Ne([n,D.pathname])),(f.replace?r.replace:r.push)(D,f.state,f)},[n,r,o,i,e])}const Cc=P.createContext(null);function jc(e){let n=P.useContext(q0).outlet;return n&&P.createElement(Cc.Provider,{value:e},n)}function B1(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=P.useContext(Z0),{matches:l}=P.useContext(q0),{pathname:i}=Fe(),o=JSON.stringify(al(l,r.v7_relativeSplatPath));return P.useMemo(()=>cl(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function Ec(e,n){return _c(e,n)}function _c(e,n,t,r){hn()||W(!1);let{navigator:l}=P.useContext(Z0),{matches:i}=P.useContext(q0),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Fe(),f;if(n){var D;let y=typeof n=="string"?Tn(n):n;u==="/"||(D=y.pathname)!=null&&D.startsWith(u)||W(!1),f=y}else f=c;let Q=f.pathname||"/",m=Q;if(u!=="/"){let y=u.replace(/^\//,"").split("/");m="/"+Q.replace(/^\//,"").split("/").slice(y.length).join("/")}let N=oc(e,{pathname:m}),h=Mc(N&&N.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:Ne([u,l.encodeLocation?l.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?u:Ne([u,l.encodeLocation?l.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,t,r);return n&&h?P.createElement(A1.Provider,{value:{location:ut({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ue.Pop}},h):h}function Ic(){let e=$c(),n=Rc(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},n),t?P.createElement("pre",{style:l},t):null,null)}const Lc=P.createElement(Ic,null);class zc extends P.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?P.createElement(q0.Provider,{value:this.props.routeContext},P.createElement(uu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Oc(e){let{routeContext:n,match:t,children:r}=e,l=P.useContext(M1);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),P.createElement(q0.Provider,{value:n},r)}function Mc(e,n,t,r){var l;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,s=(l=t)==null?void 0:l.errors;if(s!=null){let f=o.findIndex(D=>D.route.id&&(s==null?void 0:s[D.route.id])!==void 0);f>=0||W(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let D=o[f];if((D.route.HydrateFallback||D.route.hydrateFallbackElement)&&(c=f),D.route.id){let{loaderData:Q,errors:m}=t,N=D.route.loader&&Q[D.route.id]===void 0&&(!m||m[D.route.id]===void 0);if(D.route.lazy||N){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,D,Q)=>{let m,N=!1,h=null,y=null;t&&(m=s&&D.route.id?s[D.route.id]:void 0,h=D.route.errorElement||Lc,u&&(c<0&&Q===0?(Vc("route-fallback"),N=!0,y=null):c===Q&&(N=!0,y=D.route.hydrateFallbackElement||null)));let p=n.concat(o.slice(0,Q+1)),d=()=>{let x;return m?x=h:N?x=y:D.route.Component?x=P.createElement(D.route.Component,null):D.route.element?x=D.route.element:x=f,P.createElement(Oc,{match:D,routeContext:{outlet:f,matches:p,isDataRoute:t!=null},children:x})};return t&&(D.route.ErrorBoundary||D.route.errorElement||Q===0)?P.createElement(zc,{location:t.location,revalidation:t.revalidation,component:h,error:m,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var du=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(du||{}),fu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fu||{});function Ac(e){let n=P.useContext(M1);return n||W(!1),n}function Bc(e){let n=P.useContext(su);return n||W(!1),n}function Fc(e){let n=P.useContext(q0);return n||W(!1),n}function Qu(e){let n=Fc(),t=n.matches[n.matches.length-1];return t.route.id||W(!1),t.route.id}function $c(){var e;let n=P.useContext(uu),t=Bc(),r=Qu();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Uc(){let{router:e}=Ac(du.UseNavigateStable),n=Qu(fu.UseNavigateStable),t=P.useRef(!1);return au(()=>{t.current=!0}),P.useCallback(function(l,i){i===void 0&&(i={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,ut({fromRouteId:n},i)))},[e,n])}const ji={};function Vc(e,n,t){ji[e]||(ji[e]=!0)}function Wc(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Hc(e){let{to:n,replace:t,state:r,relative:l}=e;hn()||W(!1);let{future:i,static:o}=P.useContext(Z0),{matches:s}=P.useContext(q0),{pathname:u}=Fe(),c=cu(),f=cl(n,al(s,i.v7_relativeSplatPath),u,l==="path"),D=JSON.stringify(f);return P.useEffect(()=>c(JSON.parse(D),{replace:t,state:r,relative:l}),[c,D,l,t,r]),null}function Kc(e){return jc(e.context)}function ne(e){W(!1)}function bc(e){let{basename:n="/",children:t=null,location:r,navigationType:l=ue.Pop,navigator:i,static:o=!1,future:s}=e;hn()&&W(!1);let u=n.replace(/^\/*/,"/"),c=P.useMemo(()=>({basename:u,navigator:i,static:o,future:ut({v7_relativeSplatPath:!1},s)}),[u,s,i,o]);typeof r=="string"&&(r=Tn(r));let{pathname:f="/",search:D="",hash:Q="",state:m=null,key:N="default"}=r,h=P.useMemo(()=>{let y=Dn(f,u);return y==null?null:{location:{pathname:y,search:D,hash:Q,state:m,key:N},navigationType:l}},[u,f,D,Q,m,N,l]);return h==null?null:P.createElement(Z0.Provider,{value:c},P.createElement(A1.Provider,{children:t,value:h}))}function Yc(e){let{children:n,location:t}=e;return Ec(f2(n),t)}new Promise(()=>{});function f2(e,n){n===void 0&&(n=[]);let t=[];return P.Children.forEach(e,(r,l)=>{if(!P.isValidElement(r))return;let i=[...n,l];if(r.type===P.Fragment){t.push.apply(t,f2(r.props.children,i));return}r.type!==ne&&W(!1),!r.props.index||!r.props.children||W(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=f2(r.props.children,i)),t.push(o)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function T1(){return T1=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},T1.apply(null,arguments)}function Du(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Gc(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Xc(e,n){return e.button===0&&(!n||n==="_self")&&!Gc(e)}const Jc=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Zc=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],qc="6";try{window.__reactRouterVersion=qc}catch{}const ed=P.createContext({isTransitioning:!1}),nd="startTransition",Ei=Ku[nd];function td(e){let{basename:n,children:t,future:r,window:l}=e,i=P.useRef();i.current==null&&(i.current=rc({window:l,v5Compat:!0}));let o=i.current,[s,u]=P.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=P.useCallback(D=>{c&&Ei?Ei(()=>u(D)):u(D)},[u,c]);return P.useLayoutEffect(()=>o.listen(f),[o,f]),P.useEffect(()=>Wc(r),[r]),P.createElement(bc,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:o,future:r})}const rd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ld=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,id=P.forwardRef(function(n,t){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:s,target:u,to:c,preventScrollReset:f,viewTransition:D}=n,Q=Du(n,Jc),{basename:m}=P.useContext(Z0),N,h=!1;if(typeof c=="string"&&ld.test(c)&&(N=c,rd))try{let x=new URL(window.location.href),T=c.startsWith("//")?new URL(x.protocol+c):new URL(c),g=Dn(T.pathname,m);T.origin===x.origin&&g!=null?c=g+T.search+T.hash:h=!0}catch{}let y=kc(c,{relative:l}),p=ud(c,{replace:o,state:s,target:u,preventScrollReset:f,relative:l,viewTransition:D});function d(x){r&&r(x),x.defaultPrevented||p(x)}return P.createElement("a",T1({},Q,{href:N||y,onClick:h||i?r:d,ref:t,target:u}))}),od=P.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:l=!1,className:i="",end:o=!1,style:s,to:u,viewTransition:c,children:f}=n,D=Du(n,Zc),Q=B1(u,{relative:D.relative}),m=Fe(),N=P.useContext(su),{navigator:h,basename:y}=P.useContext(Z0),p=N!=null&&ad(Q)&&c===!0,d=h.encodeLocation?h.encodeLocation(Q).pathname:Q.pathname,x=m.pathname,T=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;l||(x=x.toLowerCase(),T=T?T.toLowerCase():null,d=d.toLowerCase()),T&&y&&(T=Dn(T,y)||T);const g=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let R=x===d||!o&&x.startsWith(d)&&x.charAt(g)==="/",S=T!=null&&(T===d||!o&&T.startsWith(d)&&T.charAt(d.length)==="/"),C={isActive:R,isPending:S,isTransitioning:p},F=R?r:void 0,E;typeof i=="function"?E=i(C):E=[i,R?"active":null,S?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let N0=typeof s=="function"?s(C):s;return P.createElement(id,T1({},D,{"aria-current":F,className:E,ref:t,style:N0,to:u,viewTransition:c}),typeof f=="function"?f(C):f)});var Q2;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Q2||(Q2={}));var _i;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_i||(_i={}));function sd(e){let n=P.useContext(M1);return n||W(!1),n}function ud(e,n){let{target:t,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:s}=n===void 0?{}:n,u=cu(),c=Fe(),f=B1(e,{relative:o});return P.useCallback(D=>{if(Xc(D,t)){D.preventDefault();let Q=r!==void 0?r:N1(c)===N1(f);u(e,{replace:Q,state:l,preventScrollReset:i,relative:o,viewTransition:s})}},[c,u,f,r,l,t,e,i,o,s])}function ad(e,n){n===void 0&&(n={});let t=P.useContext(ed);t==null&&W(!1);let{basename:r}=sd(Q2.useViewTransitionState),l=B1(e,{relative:n.relative});if(!t.isTransitioning)return!1;let i=Dn(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=Dn(t.nextLocation.pathname,r)||t.nextLocation.pathname;return d2(l.pathname,o)!=null||d2(l.pathname,i)!=null}const cd=[{path:"/",label:"首页"},{path:"/outline",label:"学习梳理"},{path:"/analysis",label:"学情分析"},{path:"/advice",label:"学习建议"},{path:"/review",label:"案例核对"}],dd=["/analysis","/advice","/review"],fd=["/advice","/review"],Qd=`\uFEFF记录编号,学生编号,材料编号,主题编号,节点编号,作答事件编号,修订版本,模拟提交时间,评分状态,得分,满分,学生最终作答,解答过程,评分点得分\r
DR0001,D01,Q015,T01,N01,D01-N01-Q015,1,2026-01-20T08:56:22+08:00,已评分,2,3,4a+7b,"1. 原式=6a-3b-2a-4b。
2. =4a-7b。",Q015P1=1；Q015P2=1；Q015P3=0\r
DR0002,D01,Q027,T02,N01,D01-N01-Q027,1,2026-01-20T08:57:46+08:00,已评分,1,1,6,,Q027P1=1\r
DR0003,D01,Q025,T02,N01,D01-N01-Q025,1,2026-01-20T09:02:00+08:00,已评分,3,3,x=5,"1. 两边同乘6：3(x-1)+2(x+1)=24。
2. 3x-3+2x+2=24。
3. 5x-1=24。
4. 5x=25，x=5。
5. 检验：(5-1)/2+(5+1)/3=2+2=4。",Q025P1=1；Q025P2=1；Q025P3=1\r
DR0004,D01,Q019,T02,N01,D01-N01-Q019,1,2026-01-20T09:04:51+08:00,已评分,0,1,-5,,Q019P1=0\r
DR0005,D01,Q014,T01,N01,D01-N01-Q014,1,2026-01-20T09:11:06+08:00,已评分,0,3,3x-6人,"1. 女生2(x-3)=2x-6。
2. x+2x-6=3x-6。",Q014P1=0；Q014P2=0；Q014P3=0\r
DR0006,D01,Q002,T01,N01,D01-N01-Q002,1,2026-01-20T09:12:48+08:00,已评分,0,1,14,,Q002P1=0\r
DR0007,D01,Q022,T02,N01,D01-N01-Q022,1,2026-01-20T09:18:22+08:00,已评分,1,3,x=-1,"1. 3x-6=2x+5。
2. 3x-2x=5-6。
3. x=-1。",Q022P1=1；Q022P2=0；Q022P3=0\r
DR0008,D01,Q024,T02,N01,D01-N01-Q024,1,2026-01-20T09:20:35+08:00,已评分,1,1,x=9,,Q024P1=1\r
DR0009,D01,Q018,T01,N01,D01-N01-Q018,1,2026-01-20T09:24:55+08:00,已评分,2,3,-9,"1. 2(x-3)-3(x+1)+x。
2. =2x-6-3x-3+x。
3. =-9。",Q018P1=1；Q018P2=1；Q018P3=0\r
DR0010,D01,Q013,T01,N01,D01-N01-Q013,1,2026-01-20T09:26:06+08:00,已评分,1,1,5,,Q013P1=1\r
DR0011,D01,Q021,T02,N01,D01-N01-Q021,1,2026-01-20T09:27:59+08:00,已评分,0,1,D,,Q021P1=0\r
DR0012,D01,Q011,T01,N01,D01-N01-Q011,1,2026-01-20T09:37:12+08:00,已评分,2,3,3n,"1. (n-1)+n+(n+1)。
2. =3n。",Q011P1=1；Q011P2=1；Q011P3=0\r
DR0013,D01,Q041,T03,N02,D01-N02-Q041,1,2026-06-17T14:10:57+08:00,已评分,0,1,x<3,,Q041P1=0\r
DR0014,D01,Q011,T01,N02,D01-N02-Q011,1,2026-06-17T14:14:49+08:00,已评分,1,3,3n+2,"1. (n-1)+n+(n+1)。
2. =3n+2。",Q011P1=1；Q011P2=0；Q011P3=0\r
DR0015,D01,Q044,T03,N02,D01-N02-Q044,1,2026-06-17T14:16:50+08:00,已评分,0,1,A,,Q044P1=0\r
DR0016,D01,Q030,T02,N02,D01-N02-Q030,1,2026-06-17T14:19:33+08:00,已评分,0,1,4,,Q030P1=0\r
DR0017,D01,Q029,T02,N02,D01-N02-Q029,1,2026-06-17T14:21:44+08:00,未作答,,1,,,\r
DR0018,D01,Q043,T03,N02,D01-N02-Q043,1,2026-06-17T14:27:03+08:00,待评分,,3,x<-4,"1. -2x<11-3。
2. -2x<8。
3. x<-4。",\r
DR0019,D01,Q002,T01,N02,D01-N02-Q002,1,2026-06-17T14:28:17+08:00,已评分,1,1,11,,Q002P1=1\r
DR0020,D01,Q037,T03,N02,D01-N02-Q037,1,2026-06-17T14:29:57+08:00,已评分,0,1,x<5,,Q037P1=0\r
DR0021,D01,Q039,T03,N02,D01-N02-Q039,1,2026-06-17T14:32:05+08:00,已评分,1,1,x<5,,Q039P1=1\r
DR0022,D01,Q045,T03,N02,D01-N02-Q045,1,2026-06-17T14:33:05+08:00,已评分,1,1,1<x<5,,Q045P1=1\r
DR0023,D01,Q043,T03,N02,D01-N02-Q043,2,2026-06-19T20:27:03+08:00,已评分,1,3,x<-4,"1. -2x<11-3。
2. -2x<8。
3. x<-4。",Q043P1=1；Q043P2=0；Q043P3=0\r
DR0024,D02,Q013,T01,N01,D02-N01-Q013,1,2026-01-20T08:55:14+08:00,已评分,0,1,1,,Q013P1=0\r
DR0025,D02,Q012,T01,N01,D02-N01-Q012,1,2026-01-20T08:56:27+08:00,已评分,0,1,2x+9,,Q012P1=0\r
DR0026,D02,Q001,T01,N01,D02-N01-Q001,1,2026-01-20T08:57:55+08:00,已评分,0,1,5x,,Q001P1=0\r
DR0027,D02,Q027,T02,N01,D02-N01-Q027,1,2026-01-20T08:58:55+08:00,已评分,0,1,11,,Q027P1=0\r
DR0028,D02,Q023,T02,N01,D02-N01-Q023,1,2026-01-20T09:05:24+08:00,已评分,0,1,2,,Q023P1=0\r
DR0029,D02,Q006,T01,N01,D02-N01-Q006,1,2026-01-20T09:17:53+08:00,已评分,0,3,2x+3厘米,"1. 周长=长+宽。
2. (x + 3) + x。
3. =2x + 3。",Q006P1=0；Q006P2=0；Q006P3=0\r
DR0030,D02,Q017,T01,N01,D02-N01-Q017,1,2026-01-20T09:20:15+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0031,D02,Q022,T02,N01,D02-N01-Q022,1,2026-01-20T09:22:08+08:00,已评分,1,3,x=-1,"1. 3x - 6 = 2x + 5。
2. 3x - 2x = 5 - 6。
3. x = -1。",Q022P1=1；Q022P2=0；Q022P3=0\r
DR0032,D02,Q009,T01,N01,D02-N01-Q009,1,2026-01-20T09:25:46+08:00,已评分,3,3,5x-6,"1. 原式=6x - 2 - x - 4。
2. =5x - 6。",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0033,D02,Q011,T01,N01,D02-N01-Q011,1,2026-01-20T09:31:47+08:00,已评分,0,3,3n+1,"1. (n - 1) + n + (n + 2)。
2. =3n + 1。",Q011P1=0；Q011P2=0；Q011P3=0\r
DR0034,D02,Q010,T01,N02,D02-N02-Q010,1,2026-06-17T14:13:40+08:00,未作答,,1,,,\r
DR0035,D02,Q042,T03,N02,D02-N02-Q042,1,2026-06-17T14:15:06+08:00,已评分,1,1,>,,Q042P1=1\r
DR0036,D02,Q014,T01,N02,D02-N02-Q014,1,2026-06-17T14:26:18+08:00,已评分,1,3,2x-3人,"1. 女生有(2x - 3)人。
2. 全班(2x - 3)人。",Q014P1=1；Q014P2=0；Q014P3=0\r
DR0037,D02,Q016,T01,N02,D02-N02-Q016,1,2026-06-17T14:28:20+08:00,已评分,1,1,2b,,Q016P1=1\r
DR0038,D02,Q041,T03,N02,D02-N02-Q041,1,2026-06-17T14:30:38+08:00,已评分,1,1,x<-3,,Q041P1=1\r
DR0039,D02,Q033,T02,N02,D02-N02-Q033,1,2026-06-17T14:31:56+08:00,已评分,0,1,2x+3y,,Q033P1=0\r
DR0040,D02,Q049,T03,N02,D02-N02-Q049,1,2026-06-17T14:38:28+08:00,已评分,1,3,1≤x<3,"1. 2x ≥ 2，x ≥ 1。
2. x < 3。
3. 1 ≤ x < 3。",Q049P1=0；Q049P2=1；Q049P3=0\r
DR0041,D02,Q035,T02,N02,D02-N02-Q035,1,2026-06-17T14:39:32+08:00,已评分,1,1,2,,Q035P1=1\r
DR0042,D02,Q028,T02,N02,D02-N02-Q028,1,2026-06-17T14:47:35+08:00,已评分,0,3,x=3，y=6,"1. ①-②得2y = 12。
2. y = 6。
3. x = 9 - 6 = 3。",Q028P1=0；Q028P2=0；Q028P3=0\r
DR0043,D02,Q029,T02,N02,D02-N02-Q029,1,2026-06-17T14:48:56+08:00,已评分,0,1,3,,Q029P1=0\r
DR0044,D02,Q013,T01,N02,D02-N02-Q013,1,2026-06-17T14:50:13+08:00,已评分,1,1,5,,Q013P1=1\r
DR0045,D02,Q031,T02,N02,D02-N02-Q031,1,2026-06-17T15:01:21+08:00,已评分,2,3,x=4，y=5,"1. y = x - 1。
2. 3x - 1 = 11，x = 4。
3. y = 4 + 1 = 5。",Q031P1=1；Q031P2=1；Q031P3=0\r
DR0046,D02,Q005,T01,N02,D02-N02-Q005,1,2026-06-17T15:02:14+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0047,D02,Q053,T03,N02,D02-N02-Q053,1,2026-06-17T15:05:07+08:00,已评分,0,1,-1≤x<4,,Q053P1=0\r
DR0048,D02,Q037,T03,N02,D02-N02-Q037,1,2026-06-17T15:07:37+08:00,已评分,0,1,x>13,,Q037P1=0\r
DR0049,D02,Q011,T01,N02,D02-N02-Q011,1,2026-06-17T15:13:38+08:00,已评分,0,3,3n+1,"1. (n - 1) + n + (n + 2)。
2. =3n + 1。",Q011P1=0；Q011P2=0；Q011P3=0\r
DR0050,D02,Q030,T02,N02,D02-N02-Q030,1,2026-06-17T15:16:20+08:00,已评分,1,1,3,,Q030P1=1\r
DR0051,D03,Q016,T01,N01,D03-N01-Q016,1,2026-01-20T08:56:02+08:00,已评分,0,1,0,,Q016P1=0\r
DR0052,D03,Q009,T01,N01,D03-N01-Q009,1,2026-01-20T08:58:32+08:00,已评分,3,3,5x-6,"1. 解：原式=6x-2-x-4。
2. =(6x-x)+(-2-4)。
3. =5x-6。",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0053,D03,Q018,T01,N01,D03-N01-Q018,1,2026-01-20T09:10:33+08:00,已评分,0,3,不对，结果是-3,"1. 解：=2x-6-3x+3+x。
2. =-3。
3. 不等于-9，小明说得不对。",Q018P1=0；Q018P2=0；Q018P3=0\r
DR0054,D03,Q003,T01,N01,D03-N01-Q003,1,2026-01-20T09:12:23+08:00,已评分,0,1,C,,Q003P1=0\r
DR0055,D03,Q007,T01,N01,D03-N01-Q007,1,2026-01-20T09:14:50+08:00,已评分,0,1,2,,Q007P1=0\r
DR0056,D03,Q022,T02,N01,D03-N01-Q022,1,2026-01-20T09:17:42+08:00,已评分,0,3,x=7,"1. 解：3x-2=2x+5。
2. x=7。",Q022P1=0；Q022P2=0；Q022P3=0\r
DR0057,D03,Q014,T01,N01,D03-N01-Q014,1,2026-01-20T09:20:34+08:00,已评分,0,3,3x-6人,"1. 解：女生2(x-3)=2x-6。
2. x+2x-6=3x-6。",Q014P1=0；Q014P2=0；Q014P3=0\r
DR0058,D03,Q025,T02,N01,D03-N01-Q025,1,2026-01-20T09:23:31+08:00,已评分,1,3,x=24/5,"1. 解：3(x-1)+2(x+1)=24。
2. 3x-1+2x+1=24。
3. 5x=24。
4. x=24/5。",Q025P1=1；Q025P2=0；Q025P3=0\r
DR0059,D03,Q004,T01,N02,D03-N02-Q004,1,2026-06-17T14:08:18+08:00,已评分,0,1,9x-4,,Q004P1=0\r
DR0060,D03,Q018,T01,N02,D03-N02-Q018,1,2026-06-17T14:10:12+08:00,已评分,0,3,不对，结果是-3,"1. 解：=2x-6-3x+3+x。
2. =-3。
3. 不等于-9，小明说得不对。",Q018P1=0；Q018P2=0；Q018P3=0\r
DR0061,D03,Q046,T03,N02,D03-N02-Q046,1,2026-06-17T14:15:31+08:00,已评分,0,3,4<x≤5,"1. 解：x>3+1，x>4。
2. x≤5。
3. 4<x≤5。",Q046P1=0；Q046P2=0；Q046P3=0\r
DR0062,D03,Q047,T03,N02,D03-N02-Q047,1,2026-06-17T14:17:16+08:00,已评分,0,1,x≥-1或x<4,,Q047P1=0\r
DR0063,D03,Q050,T03,N02,D03-N02-Q050,1,2026-06-17T14:18:43+08:00,已评分,0,1,5x≥30,,Q050P1=0\r
DR0064,D03,Q041,T03,N02,D03-N02-Q041,1,2026-06-17T14:23:24+08:00,已评分,0,1,x<3,,Q041P1=0\r
DR0065,D03,Q028,T02,N02,D03-N02-Q028,1,2026-06-17T14:30:08+08:00,已评分,1,3,x=6，y=-3,"1. 解：2x=12，x=6。
2. 代入②：6-y=3。
3. y=-3。",Q028P1=1；Q028P2=0；Q028P3=0\r
DR0066,D03,Q032,T02,N02,D03-N02-Q032,1,2026-06-17T14:32:05+08:00,已评分,0,1,3,,Q032P1=0\r
DR0067,D03,Q037,T03,N02,D03-N02-Q037,1,2026-06-17T14:33:04+08:00,已评分,0,1,x<5,,Q037P1=0\r
DR0068,D03,Q042,T03,N02,D03-N02-Q042,1,2026-06-17T14:35:04+08:00,已评分,1,1,>,,Q042P1=1\r
DR0069,D03,Q013,T01,N02,D03-N02-Q013,1,2026-06-17T14:36:51+08:00,已评分,0,1,3,,Q013P1=0\r
DR0070,D04,Q003,T01,N01,D04-N01-Q003,1,2026-01-20T08:55:55+08:00,已评分,1,1,B,,Q003P1=1\r
DR0071,D04,Q005,T01,N01,D04-N01-Q005,1,2026-01-20T08:59:38+08:00,已评分,0,1,a+6,,Q005P1=0\r
DR0072,D04,Q019,T02,N01,D04-N01-Q019,1,2026-01-20T09:00:55+08:00,已评分,1,1,5,,Q019P1=1\r
DR0073,D04,Q014,T01,N01,D04-N01-Q014,1,2026-01-20T09:04:49+08:00,已评分,3,3,3x-3人,"1. 女生：(2x - 3)人。
2. 全班人数=x + (2x - 3)。
3. =3x - 3。",Q014P1=1；Q014P2=1；Q014P3=1\r
DR0074,D04,Q025,T02,N01,D04-N01-Q025,1,2026-01-20T09:08:28+08:00,已评分,1,3,x=24/5,"1. 3(x - 1) + 2(x + 1) = 24。
2. 3x - 1 + 2x + 1 = 24。
3. 5x = 24。
4. x = 24/5。",Q025P1=1；Q025P2=0；Q025P3=0\r
DR0075,D04,Q001,T01,N01,D04-N01-Q001,1,2026-01-20T09:09:41+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0076,D04,Q015,T01,N01,D04-N01-Q015,1,2026-01-20T09:18:22+08:00,已评分,2,3,4a-b,"1. 原式=6a - 3b - 2a - 4b。
2. =4a - b。",Q015P1=1；Q015P2=1；Q015P3=0\r
DR0077,D04,Q012,T01,N01,D04-N01-Q012,1,2026-01-20T09:20:05+08:00,已评分,1,1,-2x+9,,Q012P1=1\r
DR0078,D04,Q023,T02,N01,D04-N01-Q023,1,2026-01-20T09:21:01+08:00,已评分,1,1,x=7,,Q023P1=1\r
DR0079,D04,Q010,T01,N01,D04-N01-Q010,1,2026-01-20T09:22:21+08:00,已评分,0,1,-4a-3,,Q010P1=0\r
DR0080,D04,Q002,T01,N01,D04-N01-Q002,1,2026-01-20T09:23:05+08:00,已评分,0,1,10,,Q002P1=0\r
DR0081,D04,Q017,T02,N01,D04-N01-Q017,1,2026-01-20T09:24:19+08:00,已评分,0,1,-3,,Q017P1=0\r
DR0082,D04,Q015,T01,N01,D04-N01-Q015,2,2026-01-21T11:18:22+08:00,已评分,1,3,4a-b,"1. 原式=6a - 3b - 2a - 4b。
2. =4a - b。",Q015P1=1；Q015P2=0；Q015P3=0\r
DR0083,D04,Q006,T01,N02,D04-N02-Q006,1,2026-06-17T14:17:02+08:00,已评分,2,3,4x+3厘米,"1. C = 2[(x + 3) + x]。
2. =2(2x + 3)。
3. =4x + 3。",Q006P1=1；Q006P2=1；Q006P3=0\r
DR0084,D04,Q004,T01,N02,D04-N02-Q004,1,2026-06-17T14:19:34+08:00,已评分,0,1,x-4,,Q004P1=0\r
DR0085,D04,Q036,T02,N02,D04-N02-Q036,1,2026-06-17T14:23:57+08:00,已评分,1,3,鸡2只，兔8只,"1. 设鸡x只，兔y只。
2. x + y = 10，2x + 4y = 26。
3. ②-①×2：2y = 16。
4. y = 8，x = 2。",Q036P1=1；Q036P2=0；Q036P3=0\r
DR0086,D04,Q052,T03,N02,D04-N02-Q052,1,2026-06-17T14:34:13+08:00,已评分,3,3,14人,"1. 设还需要x名同学。
2. 18 + 3x ≥ 60。
3. 3x ≥ 42，x ≥ 14。
4. x取整数，最少14人。",Q052P1=1；Q052P2=1；Q052P3=1\r
DR0087,D04,Q017,T01,N02,D04-N02-Q017,1,2026-06-17T14:35:17+08:00,已评分,0,1,3x²y,,Q017P1=0\r
DR0088,D04,Q045,T03,N02,D04-N02-Q045,1,2026-06-17T14:39:16+08:00,已评分,1,1,1<x<5,,Q045P1=1\r
DR0089,D04,Q054,T03,N02,D04-N02-Q054,1,2026-06-17T14:48:49+08:00,已评分,1,3,25<x≤30,"1. x - 20 > 5，x > 25。
2. x ≤ 30。
3. 25 < x ≤ 30。",Q054P1=0；Q054P2=1；Q054P3=0\r
DR0090,D04,Q040,T03,N02,D04-N02-Q040,1,2026-06-17T14:52:52+08:00,已评分,3,3,x≤4，4处实心点向左,"1. 3x ≤ 10 + 2。
2. 3x ≤ 12。
3. x ≤ 4。
4. 数轴上4处画实心点，向左。",Q040P1=1；Q040P2=1；Q040P3=1\r
DR0091,D04,Q037,T03,N02,D04-N02-Q037,1,2026-06-17T14:53:40+08:00,已评分,1,1,x>5,,Q037P1=1\r
DR0092,D04,Q011,T01,N02,D04-N02-Q011,1,2026-06-17T14:58:12+08:00,已评分,2,3,3n，比3大,"1. (n - 1) + n + (n + 1)。
2. =3n。
3. 3n比3大。",Q011P1=1；Q011P2=1；Q011P3=0\r
DR0093,D04,Q014,T01,N02,D04-N02-Q014,1,2026-06-17T15:04:28+08:00,已评分,1,3,2x-3人,"1. 女生：(2x - 3)人。
2. 全班(2x - 3)人。",Q014P1=1；Q014P2=0；Q014P3=0\r
DR0094,D04,Q039,T03,N02,D04-N02-Q039,1,2026-06-17T15:05:23+08:00,已评分,1,1,x<5,,Q039P1=1\r
DR0095,D05,Q014,T01,N01,D05-N01-Q014,1,2026-01-20T08:59:33+08:00,已评分,1,3,2x-3人,"1. 女生有(2x - 3)人。
2. 全班(2x - 3)人。",Q014P1=1；Q014P2=0；Q014P3=0\r
DR0096,D05,Q013,T01,N01,D05-N01-Q013,1,2026-01-20T09:00:30+08:00,已评分,0,1,3,,Q013P1=0\r
DR0097,D05,Q009,T01,N01,D05-N01-Q009,1,2026-01-20T09:04:26+08:00,已评分,3,3,5x-6,"1. 6x - 2 - x - 4。
2. =5x - 6。",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0098,D05,Q017,T01,N01,D05-N01-Q017,1,2026-01-20T09:07:12+08:00,已评分,0,1,3x²y,,Q017P1=0\r
DR0099,D05,Q008,T01,N01,D05-N01-Q008,1,2026-01-20T09:09:35+08:00,已评分,1,1,是,,Q008P1=1\r
DR0100,D05,Q002,T01,N01,D05-N01-Q002,1,2026-01-20T09:11:19+08:00,已评分,0,1,14,,Q002P1=0\r
DR0101,D05,Q012,T01,N01,D05-N01-Q012,1,2026-01-20T09:12:18+08:00,已评分,0,1,2x+9,,Q012P1=0\r
DR0102,D05,Q006,T01,N02,D05-N02-Q006,1,2026-06-17T14:16:51+08:00,已评分,0,3,(2x+3)厘米,"1. 周长=长+宽。
2. (x + 3) + x。
3. =2x + 3。",Q006P1=0；Q006P2=0；Q006P3=0\r
DR0103,D05,Q032,T02,N02,D05-N02-Q032,1,2026-06-17T14:19:15+08:00,已评分,0,1,3,,Q032P1=0\r
DR0104,D05,Q001,T01,N02,D05-N02-Q001,1,2026-06-17T14:20:17+08:00,已评分,0,1,5x,,Q001P1=0\r
DR0105,D05,Q037,T03,N02,D05-N02-Q037,1,2026-06-17T14:22:49+08:00,已评分,0,1,x>13,,Q037P1=0\r
DR0106,D05,Q052,T03,N02,D05-N02-Q052,1,2026-06-17T14:29:56+08:00,已评分,0,3,20人,"1. 3x ≥ 60。
2. x ≥ 20。
3. 至少20人。",Q052P1=0；Q052P2=0；Q052P3=0\r
DR0107,D05,Q042,T03,N02,D05-N02-Q042,1,2026-06-17T14:31:23+08:00,已评分,0,1,<,,Q042P1=0\r
DR0108,D05,Q002,T01,N02,D05-N02-Q002,1,2026-06-17T14:32:34+08:00,已评分,0,1,14,,Q002P1=0\r
DR0109,D05,Q047,T03,N02,D05-N02-Q047,1,2026-06-17T14:34:22+08:00,已评分,1,1,-1≤x<4,,Q047P1=1\r
DR0110,D05,Q029,T02,N02,D05-N02-Q029,1,2026-06-17T14:35:54+08:00,已评分,0,1,3,,Q029P1=0\r
DR0111,D06,Q015,T01,N01,D06-N01-Q015,1,2026-01-20T09:03:00+08:00,已评分,3,3,4a-7b,"1. 原式=6a-3b-2a-4b
2. =4a-7b",Q015P1=1；Q015P2=1；Q015P3=1\r
DR0112,D06,Q012,T01,N01,D06-N01-Q012,1,2026-01-20T09:04:45+08:00,已评分,0,1,-2x+5,,Q012P1=0\r
DR0113,D06,Q024,T02,N01,D06-N01-Q024,1,2026-01-20T09:06:51+08:00,已评分,0,1,1,,Q024P1=0\r
DR0114,D06,Q009,T01,N01,D06-N01-Q009,1,2026-01-20T09:15:30+08:00,已评分,0,3,5x+2,"1. 6x-2-x+4
2. =5x+2",Q009P1=0；Q009P2=0；Q009P3=0\r
DR0115,D06,Q025,T02,N01,D06-N01-Q025,1,2026-01-20T09:20:31+08:00,已评分,0,3,x=1,"1. 3(x-1)+2(x+1)=4
2. 5x-1=4
3. x=1",Q025P1=0；Q025P2=0；Q025P3=0\r
DR0116,D06,Q005,T01,N01,D06-N01-Q005,1,2026-01-20T09:21:19+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0117,D06,Q006,T01,N01,D06-N01-Q006,1,2026-01-20T09:24:24+08:00,已评分,0,3,(2x+3)厘米,"1. 周长=长+宽
2. (x+3)+x
3. =2x+3",Q006P1=0；Q006P2=0；Q006P3=0\r
DR0118,D06,Q021,T02,N01,D06-N01-Q021,1,2026-01-20T09:26:02+08:00,已评分,1,1,B,,Q021P1=1\r
DR0119,D06,Q014,T01,N01,D06-N01-Q014,1,2026-01-20T09:35:27+08:00,已评分,0,3,3x+3人,"1. 女生有(2x+3)人
2. x+(2x+3)=3x+3",Q014P1=0；Q014P2=0；Q014P3=0\r
DR0120,D06,Q018,T01,N01,D06-N01-Q018,1,2026-01-20T09:40:02+08:00,已评分,2,3,对,"1. =2x-6-3x-3+x
2. =-9
3. 取x=1，值是-9，所以对",Q018P1=1；Q018P2=1；Q018P3=0\r
DR0121,D06,Q026,T02,N01,D06-N01-Q026,1,2026-01-20T09:42:43+08:00,已评分,0,1,否,,Q026P1=0\r
DR0122,D06,Q008,T01,N02,D06-N02-Q008,1,2026-06-17T14:08:40+08:00,已评分,1,1,是,,Q008P1=1\r
DR0123,D06,Q012,T01,N02,D06-N02-Q012,1,2026-06-17T14:10:02+08:00,已评分,0,1,-2x+5,,Q012P1=0\r
DR0124,D06,Q034,T02,N02,D06-N02-Q034,1,2026-06-17T14:15:33+08:00,已评分,2,3,成人票20元，学生票30元,"1. 设成人票x元，学生票y元
2. 2x+y=80，x+2y=70
3. 3x=90，x=30，y=20",Q034P1=1；Q034P2=1；Q034P3=0\r
DR0125,D06,Q036,T02,N02,D06-N02-Q036,1,2026-06-17T14:19:06+08:00,已评分,1,3,鸡2只，兔8只,"1. 设鸡x只，兔y只
2. x+y=10，2x+4y=26
3. ②-①×2：2y=16
4. y=8，x=2",Q036P1=1；Q036P2=0；Q036P3=0\r
DR0126,D06,Q052,T03,N02,D06-N02-Q052,1,2026-06-17T14:22:31+08:00,已评分,0,3,26人,"1. 3x≥60+18
2. x≥26
3. 至少26人",Q052P1=0；Q052P2=0；Q052P3=0\r
DR0127,D06,Q049,T03,N02,D06-N02-Q049,1,2026-06-17T14:27:33+08:00,已评分,2,3,2<x≤3,"1. 2x≥4，x≥2
2. x<3
3. 2<x≤3",Q049P1=1；Q049P2=1；Q049P3=0\r
DR0128,D06,Q050,T03,N02,D06-N02-Q050,1,2026-06-17T14:29:19+08:00,已评分,0,1,x≤6,,Q050P1=0\r
DR0129,D07,Q020,T02,N01,D07-N01-Q020,1,2026-01-20T08:56:17+08:00,已评分,1,1,6,,Q020P1=1\r
DR0130,D07,Q005,T01,N01,D07-N01-Q005,1,2026-01-20T08:57:12+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0131,D07,Q024,T02,N01,D07-N01-Q024,1,2026-01-20T08:58:14+08:00,已评分,1,1,9,,Q024P1=1\r
DR0132,D07,Q002,T01,N01,D07-N01-Q002,1,2026-01-20T08:59:08+08:00,已评分,1,1,11,,Q002P1=1\r
DR0133,D07,Q015,T01,N01,D07-N01-Q015,1,2026-01-20T09:02:30+08:00,已评分,3,3,4a+7b,"1. 解：6a-3b-2a-4b。
2. =4a-7b。",Q015P1=1；Q015P2=1；Q015P3=0\r
DR0134,D07,Q006,T01,N01,D07-N01-Q006,1,2026-01-20T09:06:03+08:00,已评分,3,3,(4x+6)厘米,"1. 解：周长=2×(长+宽)。
2. C=2[(x+3)+x]。
3. =4x+6。",Q006P1=1；Q006P2=1；Q006P3=1\r
DR0135,D07,Q027,T02,N01,D07-N01-Q027,1,2026-01-20T09:08:11+08:00,已评分,1,1,6,,Q027P1=1\r
DR0136,D07,Q010,T01,N02,D07-N02-Q010,1,2026-06-17T14:12:26+08:00,已评分,1,1,-4a+6,,Q010P1=1\r
DR0137,D07,Q014,T01,N02,D07-N02-Q014,1,2026-06-17T14:19:17+08:00,已评分,0,3,3x-6人,"1. 解：女生2(x-3)=2x-6。
2. x+2x-6=3x-6。",Q014P1=0；Q014P2=0；Q014P3=0\r
DR0138,D07,Q035,T02,N02,D07-N02-Q035,1,2026-06-17T14:20:44+08:00,已评分,1,1,2,,Q035P1=1\r
DR0139,D07,Q049,T03,N02,D07-N02-Q049,1,2026-06-17T14:23:19+08:00,已评分,2,3,2<x≤3,"1. 解：2x≥4，x≥2。
2. x<3。
3. 2<x≤3。",Q049P1=1；Q049P2=1；Q049P3=0\r
DR0140,D07,Q043,T03,N02,D07-N02-Q043,1,2026-06-17T14:29:09+08:00,已评分,1,3,x<-4,"1. 解：-2x<11-3。
2. -2x<8。
3. x<-4。",Q043P1=1；Q043P2=0；Q043P3=0\r
DR0141,D07,Q005,T01,N02,D07-N02-Q005,1,2026-06-17T14:31:40+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0142,D07,Q031,T02,N02,D07-N02-Q031,1,2026-06-17T14:33:50+08:00,已评分,2,3,x=4，y=5,"1. 解：y=x-1。
2. 3x-1=11，x=4。
3. y=4+1=5。",Q031P1=1；Q031P2=1；Q031P3=0\r
DR0143,D07,Q046,T03,N02,D07-N02-Q046,1,2026-06-17T14:40:49+08:00,已评分,1,3,x>2或x≤5,"1. 解：x>2。
2. x≤5。
3. x>2或x≤5。",Q046P1=1；Q046P2=0；Q046P3=0\r
DR0144,D07,Q029,T02,N02,D07-N02-Q029,1,2026-06-17T14:42:45+08:00,已评分,1,1,4,,Q029P1=1\r
DR0145,D07,Q006,T01,N02,D07-N02-Q006,1,2026-06-17T14:48:27+08:00,已评分,0,3,2x+3厘米,"1. 解：周长=长+宽。
2. (x+3)+x。
3. =2x+3。",Q006P1=0；Q006P2=0；Q006P3=0\r
DR0146,D07,Q052,T03,N02,D07-N02-Q052,1,2026-06-17T14:57:30+08:00,已评分,3,3,14人,"1. 设还需要x名同学。
2. 18+3x≥60。
3. 3x≥42，x≥14。
4. 答：至少还需要14名同学。",Q052P1=1；Q052P2=1；Q052P3=1\r
DR0147,D07,Q013,T01,N02,D07-N02-Q013,1,2026-06-17T15:00:56+08:00,已评分,1,1,5,,Q013P1=1\r
DR0148,D07,Q032,T02,N02,D07-N02-Q032,1,2026-06-17T15:02:37+08:00,已评分,0,1,3,,Q032P1=0\r
DR0149,D07,Q017,T01,N02,D07-N02-Q017,1,2026-06-17T15:06:38+08:00,已评分,0,1,3x²y,,Q017P1=0\r
DR0150,D07,Q033,T02,N02,D07-N02-Q033,1,2026-06-17T15:09:49+08:00,已评分,1,1,2x+3y=17,,Q033P1=1\r
DR0151,D08,Q025,T02,N01,D08-N01-Q025,1,2026-01-20T08:58:24+08:00,已评分,3,3,x=5,"1. 解：两边同乘6：3(x - 1) + 2(x + 1) = 24。
2. 3x - 3 + 2x + 2 = 24。
3. 5x - 1 = 24。
4. 5x = 25，x = 5。
5. 检验：(5 - 1)/2 + (5 + 1)/3 = 2 + 2 = 4。",Q025P1=1；Q025P2=1；Q025P3=1\r
DR0152,D08,Q027,T02,N01,D08-N01-Q027,1,2026-01-20T09:01:17+08:00,已评分,1,1,6,,Q027P1=1\r
DR0153,D08,Q019,T02,N01,D08-N01-Q019,1,2026-01-20T09:02:43+08:00,已评分,1,1,5,,Q019P1=1\r
DR0154,D08,Q021,T02,N01,D08-N01-Q021,1,2026-01-20T09:03:16+08:00,已评分,1,1,B,,Q021P1=1\r
DR0155,D08,Q008,T01,N01,D08-N01-Q008,1,2026-01-20T09:04:50+08:00,已评分,1,1,是,,Q008P1=1\r
DR0156,D08,Q020,T02,N01,D08-N01-Q020,1,2026-01-20T09:06:57+08:00,已评分,1,1,x=6,,Q020P1=1\r
DR0157,D08,Q002,T01,N01,D08-N01-Q002,1,2026-01-20T09:08:03+08:00,已评分,0,1,10,,Q002P1=0\r
DR0158,D08,Q011,T01,N01,D08-N01-Q011,1,2026-01-20T09:11:22+08:00,已评分,0,3,3n+1,"1. 解：(n - 1) + n + (n + 2)。
2. =3n + 1。",Q011P1=0；Q011P2=0；Q011P3=0\r
DR0159,D08,Q017,T01,N01,D08-N01-Q017,1,2026-01-20T09:12:55+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0160,D08,Q022,T02,N01,D08-N01-Q022,1,2026-01-20T09:17:40+08:00,已评分,3,3,x=11,"1. 解：3x - 6 = 2x + 5。
2. 3x - 2x = 5 + 6。
3. x = 11。
4. 检验：x = 11时两边都等于27。",Q022P1=1；Q022P2=1；Q022P3=1\r
DR0161,D08,Q013,T01,N01,D08-N01-Q013,1,2026-01-20T09:19:37+08:00,已评分,1,1,5,,Q013P1=1\r
DR0162,D08,Q014,T01,N01,D08-N01-Q014,1,2026-01-20T09:30:31+08:00,已评分,1,3,2x-3人,"1. 解：女生：(2x - 3)人。
2. 全班(2x - 3)人。",Q014P1=1；Q014P2=0；Q014P3=0\r
DR0163,D08,Q003,T01,N01,D08-N01-Q003,1,2026-01-20T09:31:56+08:00,已评分,1,1,B,,Q003P1=1\r
DR0164,D08,Q012,T01,N01,D08-N01-Q012,1,2026-01-20T09:35:35+08:00,已评分,0,1,2x+9,,Q012P1=0\r
DR0165,D08,Q001,T01,N01,D08-N01-Q001,1,2026-01-20T09:38:25+08:00,已评分,0,1,3(x+2),,Q001P1=0\r
DR0166,D08,Q051,T03,N02,D08-N02-Q051,1,2026-06-17T14:14:05+08:00,已评分,0,1,x-5<30,,Q051P1=0\r
DR0167,D08,Q031,T02,N02,D08-N02-Q031,1,2026-06-17T14:16:40+08:00,已评分,2,3,x=4，y=5,"1. 解：y = x - 1。
2. 3x - 1 = 11，x = 4。
3. y = 4 + 1 = 5。",Q031P1=1；Q031P2=1；Q031P3=0\r
DR0168,D08,Q050,T03,N02,D08-N02-Q050,1,2026-06-17T14:19:10+08:00,已评分,1,1,5x≤30,,Q050P1=1\r
DR0169,D08,Q039,T03,N02,D08-N02-Q039,1,2026-06-17T14:21:05+08:00,已评分,1,1,x<5,,Q039P1=1\r
DR0170,D08,Q003,T01,N02,D08-N02-Q003,1,2026-06-17T14:22:24+08:00,已评分,1,1,B,,Q003P1=1\r
DR0171,D08,Q049,T03,N02,D08-N02-Q049,1,2026-06-17T14:25:28+08:00,已评分,3,3,2≤x<3,"1. 解：由①得2x ≥ 4，x ≥ 2。
2. 由②得x < 3。
3. ∴2 ≤ x < 3。",Q049P1=1；Q049P2=1；Q049P3=1\r
DR0172,D08,Q035,T02,N02,D08-N02-Q035,1,2026-06-17T14:26:12+08:00,已评分,1,1,2,,Q035P1=1\r
DR0173,D08,Q033,T02,N02,D08-N02-Q033,1,2026-06-17T14:28:28+08:00,已评分,0,1,2x+3y,,Q033P1=0\r
DR0174,D08,Q030,T02,N02,D08-N02-Q030,1,2026-06-17T14:29:25+08:00,已评分,0,1,5,,Q030P1=0\r
DR0175,D08,Q040,T03,N02,D08-N02-Q040,1,2026-06-17T14:40:12+08:00,已评分,3,3,x≤4，4处实心点向左,"1. 解：3x ≤ 10 + 2。
2. 3x ≤ 12。
3. x ≤ 4。
4. 数轴上4处画实心点，向左。",Q040P1=1；Q040P2=1；Q040P3=1\r
DR0176,D08,Q045,T03,N02,D08-N02-Q045,1,2026-06-17T14:42:05+08:00,已评分,1,1,1<x<5,,Q045P1=1\r
DR0177,D09,Q027,T02,N01,D09-N01-Q027,1,2026-01-20T08:53:31+08:00,已评分,0,1,11,,Q027P1=0\r
DR0178,D09,Q017,T01,N01,D09-N01-Q017,1,2026-01-20T08:56:37+08:00,已评分,0,1,-3,,Q017P1=0\r
DR0179,D09,Q024,T02,N01,D09-N01-Q024,1,2026-01-20T08:58:10+08:00,已评分,0,1,21,,Q024P1=0\r
DR0180,D09,Q023,T02,N01,D09-N01-Q023,1,2026-01-20T08:59:29+08:00,已评分,0,1,-2,,Q023P1=0\r
DR0181,D09,Q003,T01,N01,D09-N01-Q003,1,2026-01-20T09:00:44+08:00,已评分,1,1,B,,Q003P1=1\r
DR0182,D09,Q012,T01,N01,D09-N01-Q012,1,2026-01-20T09:02:53+08:00,已评分,0,1,2x+9,,Q012P1=0\r
DR0183,D09,Q016,T01,N01,D09-N01-Q016,1,2026-01-20T09:03:52+08:00,已评分,0,1,0,,Q016P1=0\r
DR0184,D09,Q005,T01,N01,D09-N01-Q005,1,2026-01-20T09:04:46+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0185,D09,Q022,T02,N01,D09-N01-Q022,1,2026-01-20T09:11:59+08:00,已评分,1,3,x=-1,"1. 解：3x-6=2x+5。
2. 3x-2x=5-6。
3. x=-1。",Q022P1=1；Q022P2=0；Q022P3=0\r
DR0186,D09,Q020,T02,N01,D09-N01-Q020,1,2026-01-20T09:14:34+08:00,已评分,0,1,15,,Q020P1=0\r
DR0187,D09,Q037,T03,N02,D09-N02-Q037,1,2026-06-17T14:10:46+08:00,已评分,0,1,x>13,,Q037P1=0\r
DR0188,D09,Q029,T02,N02,D09-N02-Q029,1,2026-06-17T14:11:34+08:00,已评分,1,1,4,,Q029P1=1\r
DR0189,D09,Q054,T03,N02,D09-N02-Q054,1,2026-06-17T14:16:14+08:00,已评分,1,3,x≥25,"1. 解：x-20≥5。
2. x≥25。",Q054P1=1；Q054P2=0；Q054P3=0\r
DR0190,D09,Q044,T03,N02,D09-N02-Q044,1,2026-06-17T14:17:09+08:00,已评分,1,1,B,,Q044P1=1\r
DR0191,D09,Q028,T02,N02,D09-N02-Q028,1,2026-06-17T14:20:57+08:00,已评分,1,3,x=6，y=-3,"1. 解：2x=12，x=6。
2. 代入②：6-y=3。
3. y=-3。",Q028P1=1；Q028P2=0；Q028P3=0\r
DR0192,D09,Q010,T01,N02,D09-N02-Q010,1,2026-06-17T14:23:09+08:00,已评分,0,1,4a+6,,Q010P1=0\r
DR0193,D09,Q039,T03,N02,D09-N02-Q039,1,2026-06-17T14:24:32+08:00,已评分,0,1,x<-1,,Q039P1=0\r
DR0194,D09,Q036,T02,N02,D09-N02-Q036,1,2026-06-17T14:29:10+08:00,已评分,0,3,鸡3只，兔7只,"1. 设鸡x只，兔y只。
2. x+y=10，4x+2y=26。
3. x=3，y=7。",Q036P1=0；Q036P2=0；Q036P3=0\r
DR0195,D09,Q040,T03,N02,D09-N02-Q040,1,2026-06-17T14:33:41+08:00,已评分,0,3,x≤8/3,"1. 解：3x≤10-2。
2. 3x≤8。
3. x≤8/3。
4. 8/3处实心点，向左。",Q040P1=0；Q040P2=0；Q040P3=0\r
DR0196,D09,Q012,T01,N02,D09-N02-Q012,1,2026-06-17T14:35:32+08:00,已评分,1,1,-2x+9,,Q012P1=1\r
DR0197,D10,Q022,T02,N01,D10-N01-Q022,1,2026-01-20T09:01:23+08:00,已评分,3,3,x=11,"1. 解：3x - 6 = 2x + 5。
2. 3x - 2x = 5 + 6。
3. x = 11。
4. 检验：x = 11时两边都等于27。",Q022P1=1；Q022P2=1；Q022P3=1\r
DR0198,D10,Q026,T02,N01,D10-N01-Q026,1,2026-01-20T09:04:16+08:00,已评分,0,1,否,,Q026P1=0\r
DR0199,D10,Q015,T01,N01,D10-N01-Q015,1,2026-01-20T09:07:14+08:00,待评分,,3,4a-7b,"1. 解：原式=6a - 3b - 2a - 4b。
2. =4a - 7b。",\r
DR0200,D10,Q024,T02,N01,D10-N01-Q024,1,2026-01-20T09:09:23+08:00,已评分,1,1,9,,Q024P1=1\r
DR0201,D10,Q027,T02,N01,D10-N01-Q027,1,2026-01-20T09:11:40+08:00,已评分,1,1,6,,Q027P1=1\r
DR0202,D10,Q018,T01,N01,D10-N01-Q018,1,2026-01-20T09:15:39+08:00,已评分,0,3,不对,"1. 解：=2x - 6 - 3x + 3 + x。
2. =-3。
3. 不等于-9，小明说得不对。",Q018P1=0；Q018P2=0；Q018P3=0\r
DR0203,D10,Q025,T02,N01,D10-N01-Q025,1,2026-01-20T09:17:46+08:00,已评分,3,3,x=5,"1. 解：去分母得3(x - 1) + 2(x + 1) = 24。
2. 3x - 3 + 2x + 2 = 24。
3. 5x - 1 = 24。
4. 5x = 25，x = 5。
5. 验算：左边=2 + 2 = 4=右边。",Q025P1=1；Q025P2=1；Q025P3=1\r
DR0204,D10,Q023,T02,N01,D10-N01-Q023,1,2026-01-20T09:19:36+08:00,已评分,1,1,x=7,,Q023P1=1\r
DR0205,D10,Q011,T01,N01,D10-N01-Q011,1,2026-01-20T09:26:28+08:00,已评分,3,3,3n，是3的倍数,"1. 解：(n - 1) + n + (n + 1)。
2. =3n。
3. 3n是3的n倍，n是整数，所以和是3的倍数。",Q011P1=1；Q011P2=1；Q011P3=1\r
DR0206,D10,Q007,T01,N01,D10-N01-Q007,1,2026-01-20T09:28:02+08:00,已评分,1,1,-2,,Q007P1=1\r
DR0207,D10,Q016,T01,N01,D10-N01-Q016,1,2026-01-20T09:29:40+08:00,已评分,1,1,2b,,Q016P1=1\r
DR0208,D10,Q021,T02,N01,D10-N01-Q021,1,2026-01-20T09:31:23+08:00,已评分,0,1,A,,Q021P1=0\r
DR0209,D10,Q020,T02,N01,D10-N01-Q020,1,2026-01-20T09:33:53+08:00,已评分,1,1,x=6,,Q020P1=1\r
DR0210,D10,Q015,T01,N01,D10-N01-Q015,2,2026-01-22T11:07:14+08:00,已评分,3,3,4a-7b,"1. 解：原式=6a - 3b - 2a - 4b。
2. =4a - 7b。",Q015P1=1；Q015P2=1；Q015P3=1\r
DR0211,D10,Q048,T03,N02,D10-N02-Q048,1,2026-06-17T14:09:19+08:00,已评分,1,1,无解,,Q048P1=1\r
DR0212,D10,Q011,T01,N02,D10-N02-Q011,1,2026-06-17T14:19:25+08:00,已评分,3,3,3n，是3的倍数,"1. 解：(n - 1) + n + (n + 1)。
2. =3n。
3. ∵n是整数，所以3n是3的倍数。",Q011P1=1；Q011P2=1；Q011P3=1\r
DR0213,D10,Q034,T02,N02,D10-N02-Q034,1,2026-06-17T14:26:14+08:00,已评分,1,3,成人票10元，学生票60元,"1. 设成人票x元，学生票y元。
2. 2x + y = 80，x + 2y = 70。
3. y = 80 - 2x，代入：x + 80 - 2x = 70。
4. x = 10，y = 60。",Q034P1=1；Q034P2=0；Q034P3=0\r
DR0214,D10,Q032,T02,N02,D10-N02-Q032,1,2026-06-17T14:27:04+08:00,已评分,1,1,4,,Q032P1=1\r
DR0215,D10,Q041,T03,N02,D10-N02-Q041,1,2026-06-17T14:28:50+08:00,已评分,1,1,x<-3,,Q041P1=1\r
DR0216,D10,Q030,T02,N02,D10-N02-Q030,1,2026-06-17T14:29:38+08:00,已评分,1,1,3,,Q030P1=1\r
DR0217,D10,Q029,T02,N02,D10-N02-Q029,1,2026-06-17T14:31:53+08:00,已评分,1,1,4,,Q029P1=1\r
DR0218,D10,Q036,T02,N02,D10-N02-Q036,1,2026-06-17T14:43:45+08:00,已评分,3,3,鸡7只，兔3只,"1. 设鸡x只，兔y只。
2. x + y = 10，2x + 4y = 26。
3. 由①得x = 10 - y。
4. 代入②：20 - 2y + 4y = 26，y = 3。
5. x = 7。
6. 答：鸡7只，兔3只。
7. 检验：7×2 + 3×4 = 14 + 12 = 26。",Q036P1=1；Q036P2=1；Q036P3=1\r
DR0219,D10,Q053,T03,N02,D10-N02-Q053,1,2026-06-17T14:45:36+08:00,已评分,0,1,-2<x≤3,,Q053P1=0\r
DR0220,D10,Q049,T03,N02,D10-N02-Q049,1,2026-06-17T14:48:37+08:00,已评分,3,3,2≤x<3,"1. 解：由①得2x ≥ 4，x ≥ 2。
2. 解②：x < 3。
3. ∴2 ≤ x < 3。",Q049P1=1；Q049P2=1；Q049P3=1\r
DR0221,D11,Q008,T01,N01,D11-N01-Q008,1,2026-01-20T08:55:48+08:00,已评分,0,1,否,,Q008P1=0\r
DR0222,D11,Q004,T01,N01,D11-N01-Q004,1,2026-01-20T08:56:59+08:00,已评分,1,1,5x-4,,Q004P1=1\r
DR0223,D11,Q025,T02,N01,D11-N01-Q025,1,2026-01-20T09:02:04+08:00,待评分,,3,x=5,"1. 去分母得3(x-1)+2(x+1)=24
2. 3x-3+2x+2=24
3. 5x-1=24
4. 5x=25，x=5
5. 验算：左边=2+2=4=右边",\r
DR0224,D11,Q023,T02,N01,D11-N01-Q023,1,2026-01-20T09:02:53+08:00,已评分,1,1,7,,Q023P1=1\r
DR0225,D11,Q006,T01,N01,D11-N01-Q006,1,2026-01-20T09:11:58+08:00,已评分,2,3,4x+3厘米,"1. C=2[(x+3)+x]
2. =2(2x+3)
3. =4x+3",Q006P1=1；Q006P2=1；Q006P3=0\r
DR0226,D11,Q024,T02,N01,D11-N01-Q024,1,2026-01-20T09:14:35+08:00,已评分,1,1,9,,Q024P1=1\r
DR0227,D11,Q017,T01,N01,D11-N01-Q017,1,2026-01-20T09:15:20+08:00,已评分,0,1,-3,,Q017P1=0\r
DR0228,D11,Q002,T01,N01,D11-N01-Q002,1,2026-01-20T09:17:17+08:00,已评分,0,1,9,,Q002P1=0\r
DR0229,D11,Q015,T01,N01,D11-N01-Q015,1,2026-01-20T09:23:38+08:00,已评分,3,3,4a-7b,"1. 原式=6a-3b-2a-4b
2. =(6a-2a)+(-3b-4b)
3. =4a-7b",Q015P1=1；Q015P2=1；Q015P3=1\r
DR0230,D11,Q027,T02,N01,D11-N01-Q027,1,2026-01-20T09:25:17+08:00,已评分,1,1,6,,Q027P1=1\r
DR0231,D11,Q009,T01,N01,D11-N01-Q009,1,2026-01-20T09:32:53+08:00,已评分,3,3,5x-6,"1. 6x-2-x-4
2. =5x-6",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0232,D11,Q005,T01,N01,D11-N01-Q005,1,2026-01-20T09:34:42+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0233,D11,Q016,T01,N02,D11-N02-Q016,1,2026-06-17T14:11:47+08:00,已评分,0,1,0,,Q016P1=0\r
DR0234,D11,Q031,T02,N02,D11-N02-Q031,1,2026-06-17T14:17:06+08:00,已评分,3,3,x=4，y=3,"1. 由②得y=x-1
2. 代入①：2x+x-1=11
3. 3x=12，x=4
4. y=4-1=3
5. 检验：2×4+3=11，4-3=1",Q031P1=1；Q031P2=1；Q031P3=1\r
DR0235,D11,Q006,T01,N02,D11-N02-Q006,1,2026-06-17T14:22:02+08:00,已评分,0,3,3x+6厘米,"1. 周长=2×长+宽
2. 2(x+3)+x
3. =2x+6+x
4. =3x+6",Q006P1=0；Q006P2=0；Q006P3=0\r
DR0236,D11,Q001,T01,N02,D11-N02-Q001,1,2026-06-17T14:24:58+08:00,已评分,0,1,5x,,Q001P1=0\r
DR0237,D11,Q001,T01,N02,D11-N02-Q001,2,2026-06-17T14:25:54+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0238,D11,Q053,T03,N02,D11-N02-Q053,1,2026-06-17T14:26:42+08:00,已评分,1,1,-2≤x<3,,Q053P1=1\r
DR0239,D11,Q035,T02,N02,D11-N02-Q035,1,2026-06-17T14:30:16+08:00,已评分,1,1,2,,Q035P1=1\r
DR0240,D11,Q041,T03,N02,D11-N02-Q041,1,2026-06-17T14:31:24+08:00,已评分,1,1,x<-3,,Q041P1=1\r
DR0241,D11,Q044,T03,N02,D11-N02-Q044,1,2026-06-17T14:32:35+08:00,已评分,1,1,B,,Q044P1=1\r
DR0242,D11,Q030,T02,N02,D11-N02-Q030,1,2026-06-17T14:33:51+08:00,已评分,1,1,3,,Q030P1=1\r
DR0243,D11,Q015,T01,N02,D11-N02-Q015,1,2026-06-17T14:38:33+08:00,已评分,1,3,4a-b,"1. 6a-3b-2a-4b
2. =4a-b",Q015P1=1；Q015P2=0；Q015P3=0\r
DR0244,D11,Q039,T03,N02,D11-N02-Q039,1,2026-06-17T14:39:34+08:00,已评分,1,1,x<5,,Q039P1=1\r
DR0245,D11,Q029,T02,N02,D11-N02-Q029,1,2026-06-17T14:40:35+08:00,已评分,1,1,x=4,,Q029P1=1\r
DR0246,D12,Q027,T02,N01,D12-N01-Q027,1,2026-01-20T08:55:52+08:00,已评分,0,1,12,,Q027P1=0\r
DR0247,D12,Q009,T01,N01,D12-N01-Q009,1,2026-01-20T08:59:09+08:00,已评分,3,3,5x-6,"1. 解：6x-2-x-4
2. =5x-6",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0248,D12,Q006,T01,N01,D12-N01-Q006,1,2026-01-20T09:02:52+08:00,已评分,2,3,4x+6,"1. 解：周长=(长+宽)×2
2. C=2[(x+3)+x]
3. =2(2x+3)
4. =4x+6",Q006P1=1；Q006P2=1；Q006P3=0\r
DR0249,D12,Q014,T01,N01,D12-N01-Q014,1,2026-01-20T09:09:31+08:00,已评分,0,3,3x+3人,"1. 解：女生有(2x+3)人
2. x+(2x+3)=3x+3",Q014P1=0；Q014P2=0；Q014P3=0\r
DR0250,D12,Q017,T01,N01,D12-N01-Q017,1,2026-01-20T09:11:43+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0251,D12,Q013,T01,N01,D12-N01-Q013,1,2026-01-20T09:13:26+08:00,已评分,1,1,5,,Q013P1=1\r
DR0252,D12,Q026,T02,N01,D12-N01-Q026,1,2026-01-20T09:14:25+08:00,已评分,1,1,是,,Q026P1=1\r
DR0253,D12,Q005,T01,N01,D12-N01-Q005,1,2026-01-20T09:16:10+08:00,已评分,0,1,3a+5,,Q005P1=0\r
DR0254,D12,Q004,T01,N01,D12-N01-Q004,1,2026-01-20T09:17:28+08:00,已评分,1,1,5x-4,,Q004P1=1\r
DR0255,D12,Q010,T01,N01,D12-N01-Q010,1,2026-01-20T09:18:29+08:00,已评分,1,1,-4a+6,,Q010P1=1\r
DR0256,D12,Q016,T01,N01,D12-N01-Q016,1,2026-01-20T09:19:13+08:00,已评分,1,1,2b,,Q016P1=1\r
DR0257,D12,Q018,T01,N01,D12-N01-Q018,1,2026-01-20T09:22:17+08:00,已评分,3,3,对，结果是-9,"1. 解：2(x-3)-3(x+1)+x
2. =2x-6-3x-3+x
3. =-9
4. 结果里没有x，∴x取什么值都等于-9，小明说得对",Q018P1=1；Q018P2=1；Q018P3=1\r
DR0258,D12,Q030,T02,N02,D12-N02-Q030,1,2026-06-17T14:11:19+08:00,已评分,1,1,3,,Q030P1=1\r
DR0259,D12,Q040,T03,N02,D12-N02-Q040,1,2026-06-17T14:20:44+08:00,已评分,1,3,x≥4，4处实心点向右,"1. 解：3x≤12
2. x≥4
3. 4处实心点，向右",Q040P1=1；Q040P2=0；Q040P3=0\r
DR0260,D12,Q006,T01,N02,D12-N02-Q006,1,2026-06-17T14:24:48+08:00,已评分,2,3,4x+6,"1. 解：周长=2×(长+宽)
2. C=2[(x+3)+x]
3. =4x+6",Q006P1=1；Q006P2=1；Q006P3=0\r
DR0261,D12,Q007,T01,N02,D12-N02-Q007,1,2026-06-17T14:26:19+08:00,已评分,1,1,-2,,Q007P1=1\r
DR0262,D12,Q046,T03,N02,D12-N02-Q046,1,2026-06-17T14:33:47+08:00,已评分,3,3,2<x≤5,"1. 解：解①：x>2
2. 由②得x≤5
3. ∴不等式组的解集为2<x≤5",Q046P1=1；Q046P2=1；Q046P3=1\r
DR0263,D12,Q029,T02,N02,D12-N02-Q029,1,2026-06-17T14:36:33+08:00,已评分,0,1,3,,Q029P1=0\r
DR0264,D12,Q029,T02,N02,D12-N02-Q029,2,2026-06-17T14:37:43+08:00,已评分,1,1,4,,Q029P1=1\r
DR0265,D12,Q010,T01,N02,D12-N02-Q010,1,2026-06-17T14:38:55+08:00,已评分,1,1,-4a+6,,Q010P1=1\r
DR0266,D12,Q037,T03,N02,D12-N02-Q037,1,2026-06-17T14:41:28+08:00,已评分,1,1,x>5,,Q037P1=1\r
DR0267,D12,Q042,T03,N02,D12-N02-Q042,1,2026-06-17T14:44:34+08:00,已评分,1,1,>,,Q042P1=1\r
DR0268,D12,Q054,T03,N02,D12-N02-Q054,1,2026-06-17T14:52:03+08:00,已评分,1,3,25<x≤30,"1. 解：x-20>5，x>25
2. x≤30
3. 25<x≤30",Q054P1=0；Q054P2=1；Q054P3=0\r
DR0269,D12,Q031,T02,N02,D12-N02-Q031,1,2026-06-17T14:59:45+08:00,已评分,2,3,x=4，y=3,"1. 解：由②得y=x-1
2. 代入①：2x+x-1=11
3. 3x=12，x=4
4. y=4-1=3",Q031P1=1；Q031P2=1；Q031P3=0\r
DR0270,D12,Q053,T03,N02,D12-N02-Q053,1,2026-06-17T15:01:17+08:00,已评分,1,1,-2≤x<3,,Q053P1=1\r
DR0271,D12,Q045,T03,N02,D12-N02-Q045,1,2026-06-17T15:02:21+08:00,已评分,1,1,1<x<5,,Q045P1=1\r
DR0272,D12,Q003,T01,N02,D12-N02-Q003,1,2026-06-17T15:02:51+08:00,已评分,1,1,B,,Q003P1=1\r
DR0273,D13,Q022,T02,N01,D13-N01-Q022,1,2026-01-20T09:02:15+08:00,已评分,2,3,x=11,"1. 3x-6=2x+5。
2. 3x-2x=5+6。
3. x=11。",Q022P1=1；Q022P2=1；Q022P3=0\r
DR0274,D13,Q008,T01,N01,D13-N01-Q008,1,2026-01-20T09:03:03+08:00,已评分,1,1,是,,Q008P1=1\r
DR0275,D13,Q007,T01,N01,D13-N01-Q007,1,2026-01-20T09:04:21+08:00,待评分,,1,-2,,\r
DR0276,D13,Q014,T01,N01,D13-N01-Q014,1,2026-01-20T09:07:52+08:00,已评分,0,3,3x+3人,"1. 女生有(2x+3)人。
2. x+(2x+3)=3x+3。",Q014P1=0；Q014P2=0；Q014P3=0\r
DR0277,D13,Q010,T01,N02,D13-N02-Q010,1,2026-06-17T14:10:03+08:00,已评分,1,1,-4a+6,,Q010P1=1\r
DR0278,D13,Q053,T03,N02,D13-N02-Q053,1,2026-06-17T14:10:50+08:00,已评分,1,1,-2≤x<3,,Q053P1=1\r
DR0279,D13,Q041,T03,N02,D13-N02-Q041,1,2026-06-17T14:14:16+08:00,已评分,1,1,x<-3,,Q041P1=1\r
DR0280,D13,Q017,T01,N02,D13-N02-Q017,1,2026-06-17T14:17:16+08:00,已评分,0,1,3x²y,,Q017P1=0\r
DR0281,D13,Q015,T01,N02,D13-N02-Q015,1,2026-06-17T14:21:40+08:00,已评分,3,3,4a-7b,"1. 原式=6a-3b-2a-4b。
2. =(6a-2a)+(-3b-4b)。
3. =4a-7b。",Q015P1=1；Q015P2=1；Q015P3=1\r
DR0282,D13,Q031,T02,N02,D13-N02-Q031,1,2026-06-17T14:27:35+08:00,已评分,0,3,x=10，y=-9,"1. 由②得y=1-x。
2. 2x+1-x=11。
3. x=10。
4. y=1-10=-9。",Q031P1=0；Q031P2=0；Q031P3=0\r
DR0283,D13,Q007,T01,N02,D13-N02-Q007,1,2026-06-17T14:29:36+08:00,已评分,1,1,-2,,Q007P1=1\r
DR0284,D13,Q030,T02,N02,D13-N02-Q030,1,2026-06-17T14:32:18+08:00,已评分,1,1,3,,Q030P1=1\r
DR0285,D13,Q052,T03,N02,D13-N02-Q052,1,2026-06-17T14:37:16+08:00,已评分,0,3,15人,"1. 18+3x>60。
2. x>14。
3. 至少15人。",Q052P1=0；Q052P2=0；Q052P3=0\r
DR0286,D13,Q051,T03,N02,D13-N02-Q051,1,2026-06-17T14:40:43+08:00,已评分,0,1,x-5<30,,Q051P1=0\r
DR0287,D13,Q045,T03,N02,D13-N02-Q045,1,2026-06-17T14:41:50+08:00,已评分,0,1,x<1或x>5,,Q045P1=0\r
DR0288,D13,Q044,T03,N02,D13-N02-Q044,1,2026-06-17T14:42:46+08:00,已评分,0,1,C,,Q044P1=0\r
DR0289,D13,Q042,T03,N02,D13-N02-Q042,1,2026-06-17T14:43:42+08:00,已评分,0,1,<,,Q042P1=0\r
DR0290,D13,Q033,T02,N02,D13-N02-Q033,1,2026-06-17T14:47:19+08:00,已评分,1,1,2x+3y=17,,Q033P1=1\r
DR0291,D13,Q029,T02,N02,D13-N02-Q029,1,2026-06-17T14:48:57+08:00,已评分,1,1,x=4,,Q029P1=1\r
DR0292,D13,Q047,T03,N02,D13-N02-Q047,1,2026-06-17T14:50:38+08:00,已评分,0,1,-1<x<4,,Q047P1=0\r
DR0293,D14,Q025,T02,N01,D14-N01-Q025,1,2026-01-20T08:55:29+08:00,已评分,3,3,x=5,"1. 两边同乘6：3(x-1)+2(x+1)=24。
2. 3x-3+2x+2=24。
3. 5x-1=24。
4. 5x=25，x=5。
5. 验算：左边=2+2=4=右边。",Q025P1=1；Q025P2=1；Q025P3=1\r
DR0294,D14,Q026,T02,N01,D14-N01-Q026,1,2026-01-20T08:56:41+08:00,已评分,0,1,否,,Q026P1=0\r
DR0295,D14,Q019,T02,N01,D14-N01-Q019,1,2026-01-20T08:58:36+08:00,已评分,1,1,x=5,,Q019P1=1\r
DR0296,D14,Q013,T01,N01,D14-N01-Q013,1,2026-01-20T09:00:50+08:00,已评分,1,1,5,,Q013P1=1\r
DR0297,D14,Q022,T02,N01,D14-N01-Q022,1,2026-01-20T09:07:34+08:00,已评分,3,3,x=11,"1. 3x-6=2x+5。
2. 3x-2x=5+6。
3. x=11。
4. 验算：x=11时两边都等于27。",Q022P1=1；Q022P2=1；Q022P3=1\r
DR0298,D14,Q011,T01,N01,D14-N01-Q011,1,2026-01-20T09:09:26+08:00,已评分,3,3,3n，是3的倍数,"1. (n-1)+n+(n+1)。
2. =3n。
3. 因为n是整数，所以3n是3的倍数。",Q011P1=1；Q011P2=1；Q011P3=1\r
DR0299,D14,Q024,T02,N01,D14-N01-Q024,1,2026-01-20T09:10:40+08:00,已评分,1,1,9,,Q024P1=1\r
DR0300,D14,Q021,T02,N01,D14-N01-Q021,1,2026-01-20T09:11:51+08:00,已评分,1,1,B,,Q021P1=1\r
DR0301,D14,Q008,T01,N01,D14-N01-Q008,1,2026-01-20T09:13:17+08:00,已评分,1,1,是,,Q008P1=1\r
DR0302,D14,Q023,T02,N01,D14-N01-Q023,1,2026-01-20T09:14:44+08:00,已评分,1,1,7,,Q023P1=1\r
DR0303,D14,Q004,T01,N01,D14-N01-Q004,1,2026-01-20T09:16:05+08:00,已评分,1,1,5x-4,,Q004P1=1\r
DR0304,D14,Q009,T01,N01,D14-N01-Q009,1,2026-01-20T09:26:00+08:00,已评分,3,3,5x-6,"1. 6x-2-x-4。
2. =(6x-x)+(-2-4)。
3. =5x-6。",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0305,D14,Q016,T01,N02,D14-N02-Q016,1,2026-06-17T14:10:45+08:00,已评分,1,1,2b,,Q016P1=1\r
DR0306,D14,Q049,T03,N02,D14-N02-Q049,1,2026-06-17T14:14:52+08:00,已评分,3,3,2≤x<3,"1. 由①得2x≥4，x≥2。
2. 由②得x<3。
3. 所以2≤x<3。",Q049P1=1；Q049P2=1；Q049P3=1\r
DR0307,D14,Q046,T03,N02,D14-N02-Q046,1,2026-06-17T14:20:14+08:00,已评分,3,3,2<x≤5,"1. 由①得x>2。
2. 由②得x≤5。
3. ∴不等式组的解集为2<x≤5。",Q046P1=1；Q046P2=1；Q046P3=1\r
DR0308,D14,Q034,T02,N02,D14-N02-Q034,1,2026-06-17T14:29:18+08:00,已评分,3,3,成人30元，学生20元,"1. 设成人票x元，学生票y元。
2. 2x+y=80，x+2y=70。
3. 由①得y=80-2x，代入②：3x=90。
4. x=30，y=20。
5. 答：成人票30元，学生票20元。
6. 检验：两个条件都满足。",Q034P1=1；Q034P2=1；Q034P3=1\r
DR0309,D14,Q035,T02,N02,D14-N02-Q035,1,2026-06-17T14:31:47+08:00,已评分,1,1,2,,Q035P1=1\r
DR0310,D14,Q036,T02,N02,D14-N02-Q036,1,2026-06-17T14:35:20+08:00,已评分,3,3,鸡7兔3,"1. 设鸡x只，兔y只。
2. x+y=10，2x+4y=26。
3. 由①得x=10-y。
4. 代入②：20-2y+4y=26，y=3。
5. x=7。
6. 答：鸡7只，兔3只。
7. 检验：7×2+3×4=14+12=26。",Q036P1=1；Q036P2=1；Q036P3=1\r
DR0311,D14,Q040,T03,N02,D14-N02-Q040,1,2026-06-17T14:37:52+08:00,已评分,3,3,x≤4，4处实心点向左,"1. 3x≤10+2。
2. 3x≤12。
3. x≤4。
4. 数轴上4处画实心点，向左。",Q040P1=1；Q040P2=1；Q040P3=1\r
DR0312,D14,Q003,T01,N02,D14-N02-Q003,1,2026-06-17T14:39:04+08:00,已评分,1,1,B,,Q003P1=1\r
DR0313,D14,Q032,T02,N02,D14-N02-Q032,1,2026-06-17T14:40:25+08:00,已评分,1,1,4,,Q032P1=1\r
DR0314,D14,Q052,T03,N02,D14-N02-Q052,1,2026-06-17T14:45:24+08:00,已评分,3,3,14,"1. 设还需要x名同学。
2. 18+3x≥60。
3. 3x≥42，x≥14。
4. 答：至少还需要14名同学。",Q052P1=1；Q052P2=1；Q052P3=1\r
DR0315,D14,Q033,T02,N02,D14-N02-Q033,1,2026-06-17T14:47:05+08:00,已评分,1,1,2x+3y=17,,Q033P1=1\r
DR0316,D14,Q012,T01,N02,D14-N02-Q012,1,2026-06-17T14:47:51+08:00,已评分,1,1,-2x+9,,Q012P1=1\r
DR0317,D14,Q017,T01,N02,D14-N02-Q017,1,2026-06-17T14:49:56+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0318,D14,Q029,T02,N02,D14-N02-Q029,1,2026-06-17T14:52:02+08:00,已评分,1,1,4,,Q029P1=1\r
DR0319,D15,Q009,T01,N01,D15-N01-Q009,1,2026-01-20T08:59:44+08:00,已评分,0,3,5x-5,"1. 原式=6x-1-x-4。
2. =5x-5。",Q009P1=0；Q009P2=0；Q009P3=0\r
DR0320,D15,Q023,T02,N01,D15-N01-Q023,1,2026-01-20T09:02:21+08:00,已评分,1,1,x=7,,Q023P1=1\r
DR0321,D15,Q001,T01,N01,D15-N01-Q001,1,2026-01-20T09:03:05+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0322,D15,Q008,T01,N01,D15-N01-Q008,1,2026-01-20T09:08:55+08:00,已评分,1,1,是,,Q008P1=1\r
DR0323,D15,Q002,T01,N01,D15-N01-Q002,1,2026-01-20T09:10:15+08:00,已评分,1,1,11,,Q002P1=1\r
DR0324,D15,Q020,T02,N01,D15-N01-Q020,1,2026-01-20T09:11:00+08:00,已评分,1,1,6,,Q020P1=1\r
DR0325,D15,Q026,T02,N01,D15-N01-Q026,1,2026-01-20T09:13:19+08:00,已评分,1,1,是,,Q026P1=1\r
DR0326,D15,Q003,T01,N01,D15-N01-Q003,1,2026-01-20T09:15:01+08:00,已评分,1,1,B,,Q003P1=1\r
DR0327,D15,Q007,T01,N01,D15-N01-Q007,1,2026-01-20T09:15:56+08:00,已评分,1,1,-2,,Q007P1=1\r
DR0328,D15,Q006,T01,N01,D15-N01-Q006,1,2026-01-20T09:22:17+08:00,已评分,3,3,(4x+6)厘米,"1. 周长=2×(长+宽)。
2. C=2[(x+3)+x]。
3. =2(2x+3)。
4. =4x+6。",Q006P1=1；Q006P2=1；Q006P3=1\r
DR0329,D15,Q018,T01,N01,D15-N01-Q018,1,2026-01-20T09:31:21+08:00,已评分,0,3,不对，结果是-3,"1. =2x-6-3x+3+x。
2. =-3。
3. 不等于-9，小明说得不对。",Q018P1=0；Q018P2=0；Q018P3=0\r
DR0330,D15,Q024,T02,N01,D15-N01-Q024,1,2026-01-20T09:32:01+08:00,已评分,1,1,9,,Q024P1=1\r
DR0331,D15,Q019,T02,N01,D15-N01-Q019,1,2026-01-20T09:34:21+08:00,已评分,1,1,5,,Q019P1=1\r
DR0332,D15,Q016,T01,N01,D15-N01-Q016,1,2026-01-20T09:35:57+08:00,未作答,,1,,,\r
DR0333,D15,Q050,T03,N02,D15-N02-Q050,1,2026-06-17T14:12:07+08:00,已评分,1,1,5x≤30,,Q050P1=1\r
DR0334,D15,Q030,T02,N02,D15-N02-Q030,1,2026-06-17T14:12:30+08:00,已评分,1,1,3,,Q030P1=1\r
DR0335,D15,Q054,T03,N02,D15-N02-Q054,1,2026-06-17T14:23:54+08:00,已评分,3,3,25≤x≤30,"1. x-20≥5，x≥25。
2. x≤30。
3. 所以25≤x≤30。
4. 售价最低25元，最高30元。",Q054P1=1；Q054P2=1；Q054P3=1\r
DR0336,D15,Q049,T03,N02,D15-N02-Q049,1,2026-06-17T14:32:09+08:00,已评分,3,3,2≤x<3,"1. 由①得2x≥4，x≥2。
2. 解②：x<3。
3. ∴2≤x<3。",Q049P1=1；Q049P2=1；Q049P3=1\r
DR0337,D15,Q028,T02,N02,D15-N02-Q028,1,2026-06-17T14:38:00+08:00,已评分,1,3,x=6，y=-3,"1. 2x=12，x=6。
2. 代入②：6-y=3。
3. y=-3。",Q028P1=1；Q028P2=0；Q028P3=0\r
DR0338,D15,Q042,T03,N02,D15-N02-Q042,1,2026-06-17T14:40:32+08:00,已评分,1,1,>,,Q042P1=1\r
DR0339,D15,Q032,T02,N02,D15-N02-Q032,1,2026-06-17T14:42:27+08:00,已评分,1,1,y=4,,Q032P1=1\r
DR0340,D15,Q011,T01,N02,D15-N02-Q011,1,2026-06-17T14:46:51+08:00,已评分,3,3,和为3n，是3的倍数,"1. (n-1)+n+(n+1)。
2. =3n。
3. ∵n是整数，所以3n是3的倍数。",Q011P1=1；Q011P2=1；Q011P3=1\r
DR0341,D15,Q047,T03,N02,D15-N02-Q047,1,2026-06-17T14:49:35+08:00,已评分,1,1,-1≤x<4,,Q047P1=1\r
DR0342,D15,Q039,T03,N02,D15-N02-Q039,1,2026-06-17T14:51:32+08:00,已评分,1,1,x<5,,Q039P1=1\r
DR0343,D15,Q044,T03,N02,D15-N02-Q044,1,2026-06-17T14:52:04+08:00,已评分,1,1,B,,Q044P1=1\r
DR0344,D15,Q048,T03,N02,D15-N02-Q048,1,2026-06-17T14:53:14+08:00,已评分,1,1,无解,,Q048P1=1\r
DR0345,D15,Q036,T02,N02,D15-N02-Q036,1,2026-06-17T15:00:22+08:00,已评分,3,3,鸡7只，兔3只,"1. 设鸡x只，兔y只。
2. x+y=10，2x+4y=26。
3. 由①得x=10-y。
4. 代入②：20-2y+4y=26，y=3。
5. x=7。
6. 答：鸡7只，兔3只。
7. 检验：7×2+3×4=14+12=26。",Q036P1=1；Q036P2=1；Q036P3=1\r
DR0346,D15,Q035,T02,N02,D15-N02-Q035,1,2026-06-17T15:02:49+08:00,已评分,1,1,2,,Q035P1=1\r
DR0347,D16,Q005,T01,N01,D16-N01-Q005,1,2026-01-20T08:58:27+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0348,D16,Q006,T01,N01,D16-N01-Q006,1,2026-01-20T09:05:03+08:00,已评分,3,3,(4x+6)厘米,"1. 周长=(长+宽)×2。
2. C = 2[(x + 3) + x]。
3. =4x + 6。",Q006P1=1；Q006P2=1；Q006P3=1\r
DR0349,D16,Q018,T01,N01,D16-N01-Q018,1,2026-01-20T09:14:58+08:00,已评分,2,3,对,"1. =2x - 6 - 3x - 3 + x。
2. =-9。
3. 取x = 1，值是-9，所以对。",Q018P1=1；Q018P2=1；Q018P3=0\r
DR0350,D16,Q025,T02,N01,D16-N01-Q025,1,2026-01-20T09:25:53+08:00,已评分,2,3,x=23/5,"1. 3(x - 1) + 2(x + 1) = 24。
2. 5x - 1 = 24。
3. 5x = 23。
4. x = 23/5。",Q025P1=1；Q025P2=1；Q025P3=0\r
DR0351,D16,Q016,T01,N01,D16-N01-Q016,1,2026-01-20T09:27:18+08:00,已评分,1,1,2b,,Q016P1=1\r
DR0352,D16,Q021,T02,N01,D16-N01-Q021,1,2026-01-20T09:27:59+08:00,已评分,1,1,B,,Q021P1=1\r
DR0353,D16,Q017,T01,N01,D16-N01-Q017,1,2026-01-20T09:29:29+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0354,D16,Q022,T02,N01,D16-N01-Q022,1,2026-01-20T09:39:15+08:00,已评分,2,3,x=10,"1. 3x - 6 = 2x + 5。
2. 3x - 2x = 5 + 6。
3. x = 10。",Q022P1=1；Q022P2=1；Q022P3=0\r
DR0355,D16,Q026,T02,N01,D16-N01-Q026,1,2026-01-20T09:42:22+08:00,已评分,1,1,是,,Q026P1=1\r
DR0356,D16,Q014,T01,N01,D16-N01-Q014,1,2026-01-20T09:48:12+08:00,已评分,0,3,3x+3人,"1. 女生有(2x + 3)人。
2. x + (2x + 3) = 3x + 3。",Q014P1=0；Q014P2=0；Q014P3=0\r
DR0357,D16,Q011,T01,N01,D16-N01-Q011,1,2026-01-20T09:55:08+08:00,已评分,2,3,3n，比3大,"1. (n - 1) + n + (n + 1)。
2. =3n。
3. 3n比3大。",Q011P1=1；Q011P2=1；Q011P3=0\r
DR0358,D16,Q041,T03,N02,D16-N02-Q041,1,2026-06-17T14:10:51+08:00,已评分,1,1,x<-3,,Q041P1=1\r
DR0359,D16,Q054,T03,N02,D16-N02-Q054,1,2026-06-17T14:14:21+08:00,已评分,1,3,x≥25,"1. x - 20 ≥ 5。
2. x ≥ 25。",Q054P1=1；Q054P2=0；Q054P3=0\r
DR0360,D16,Q035,T02,N02,D16-N02-Q035,1,2026-06-17T14:15:46+08:00,已评分,0,1,3,,Q035P1=0\r
DR0361,D16,Q044,T03,N02,D16-N02-Q044,1,2026-06-17T14:17:27+08:00,已评分,10,1,B,,Q044P1=1\r
DR0362,D16,Q029,T02,N02,D16-N02-Q029,1,2026-06-17T14:18:46+08:00,已评分,0,1,8,,Q029P1=0\r
DR0363,D16,Q012,T01,N02,D16-N02-Q012,1,2026-06-17T14:24:57+08:00,已评分,1,1,-2x+9,,Q012P1=1\r
DR0364,D16,Q040,T03,N02,D16-N02-Q040,1,2026-06-17T14:26:42+08:00,已评分,3,3,x≤4，4处实心点向左,"1. 3x ≤ 10 + 2。
2. 3x ≤ 12。
3. x ≤ 4。
4. 数轴上4处画实心点，向左。",Q040P1=1；Q040P2=1；Q040P3=1\r
DR0365,D16,Q051,T03,N02,D16-N02-Q051,1,2026-06-17T14:27:34+08:00,已评分,1,1,x-5≤30,,Q051P1=1\r
DR0366,D16,Q007,T01,N02,D16-N02-Q007,1,2026-06-17T14:29:11+08:00,已评分,0,1,10,,Q007P1=0\r
DR0367,D16,Q043,T03,N02,D16-N02-Q043,1,2026-06-17T14:37:03+08:00,已评分,1,3,x<-4,"1. -2x < 11 - 3。
2. -2x < 8。
3. x < -4。",Q043P1=1；Q043P2=0；Q043P3=0\r
DR0368,D17,Q016,T01,N01,D17-N01-Q016,1,2026-01-20T08:57:28+08:00,已评分,1,1,2b,,Q016P1=1\r
DR0369,D17,Q014,T01,N01,D17-N01-Q014,1,2026-01-20T09:03:10+08:00,已评分,3,3,3x-3人,"1. 解：女生有(2x - 3)人。
2. 全班人数=x + (2x - 3)。
3. =3x - 3。",Q014P1=1；Q014P2=1；Q014P3=1\r
DR0370,D17,Q013,T01,N01,D17-N01-Q013,1,2026-01-20T09:04:12+08:00,已评分,1,1,5,,Q013P1=1\r
DR0371,D17,Q009,T01,N01,D17-N01-Q009,1,2026-01-20T09:14:30+08:00,已评分,3,3,5x-6,"1. 解：原式=6x - 2 - x - 4。
2. =5x - 6。",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0372,D18,Q006,T01,N01,D18-N01-Q006,1,2026-01-20T08:58:20+08:00,已评分,3,3,4x+6厘米,"1. 周长=2×(长+宽)。
2. C=2[(x+3)+x]。
3. =4x+6。",Q006P1=1；Q006P2=1；Q006P3=1\r
DR0373,D18,Q017,T01,N01,D18-N01-Q017,1,2026-01-20T09:00:16+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0374,D18,Q020,T02,N01,D18-N01-Q020,1,2026-01-20T09:02:16+08:00,已评分,1,1,x=6,,Q020P1=1\r
DR0375,D18,Q015,T01,N01,D18-N01-Q015,1,2026-01-20T09:08:22+08:00,已评分,1,3,4a-b,"1. 6a-3b-2a-4b。
2. =4a-b。",Q015P1=1；Q015P2=0；Q015P3=0\r
DR0376,D18,Q027,T02,N01,D18-N01-Q027,1,2026-01-20T09:10:11+08:00,已评分,1,1,6,,Q027P1=1\r
DR0377,D18,Q014,T01,N01,D18-N01-Q014,1,2026-01-20T09:16:33+08:00,已评分,3,3,3x-3人,"1. 女生：(2x-3)人。
2. 全班=x+(2x-3)。
3. =3x-3。",Q014P1=1；Q014P2=1；Q014P3=1\r
DR0378,D18,Q003,T01,N01,D18-N01-Q003,1,2026-01-20T09:17:07+08:00,已评分,1,1,B,,Q003P1=1\r
DR0379,D18,Q012,T01,N01,D18-N01-Q012,1,2026-01-20T09:18:45+08:00,已评分,1,1,-2x+9,,Q012P1=1\r
DR0380,D18,Q022,T02,N01,D18-N01-Q022,1,2026-01-20T09:22:51+08:00,已评分,3,3,x=11,"1. 3x-6=2x+5。
2. 3x-2x=5+6。
3. x=11。
4. 检验：左边=3×9=27，右边=22+5=27。",Q022P1=1；Q022P2=1；Q022P3=1\r
DR0381,D18,Q053,T03,N02,D18-N02-Q053,1,2026-06-17T14:09:02+08:00,已评分,1,1,-2≤x<3,,Q053P1=1\r
DR0382,D18,Q009,T01,N02,D18-N02-Q009,1,2026-06-17T14:12:56+08:00,已评分,3,3,5x-6,"1. 原式=6x-2-x-4。
2. =5x-6。",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0383,D18,Q041,T03,N02,D18-N02-Q041,1,2026-06-17T14:13:48+08:00,已评分,1,1,x<-3,,Q041P1=1\r
DR0384,D18,Q032,T02,N02,D18-N02-Q032,1,2026-06-17T14:16:16+08:00,已评分,1,1,4,,Q032P1=1\r
DR0385,D18,Q043,T03,N02,D18-N02-Q043,1,2026-06-17T14:20:09+08:00,已评分,0,3,x>-7,"1. -2x<11+3。
2. -2x<14。
3. x>-7。",Q043P1=0；Q043P2=0；Q043P3=0\r
DR0386,D18,Q050,T03,N02,D18-N02-Q050,1,2026-06-17T14:23:38+08:00,已评分,0,1,5x<30,,Q050P1=0\r
DR0387,D18,Q001,T01,N02,D18-N02-Q001,1,2026-06-17T14:25:54+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0388,D18,Q033,T02,N02,D18-N02-Q033,1,2026-06-17T14:28:41+08:00,已评分,1,1,2x+3y=17,,Q033P1=1\r
DR0389,D18,Q029,T02,N02,D18-N02-Q029,1,2026-06-17T14:30:03+08:00,已评分,0,1,6,,Q029P1=0\r
DR0390,D18,Q044,T03,N02,D18-N02-Q044,1,2026-06-17T14:30:44+08:00,已评分,1,1,B,,Q044P1=1\r
DR0391,D19,Q002,T01,N01,D19-N01-Q002,1,2026-01-20T08:55:28+08:00,已评分,1,1,11,,Q002P1=1\r
DR0392,D19,Q015,T01,N01,D19-N01-Q015,1,2026-01-20T08:58:29+08:00,已评分,0,3,4a+b,"1. 解：原式=6a - 3b - 2a + 4b。
2. =4a + b。",Q015P1=0；Q015P2=0；Q015P3=0\r
DR0393,D19,Q011,T01,N01,D19-N01-Q011,1,2026-01-20T09:04:40+08:00,已评分,3,3,3n，是3的倍数,"1. 解：(n - 1) + n + (n + 1)。
2. =3n。
3. 3n是3的n倍，n是整数，所以和是3的倍数。",Q011P1=1；Q011P2=1；Q011P3=1\r
DR0394,D19,Q023,T02,N01,D19-N01-Q023,1,2026-01-20T09:05:43+08:00,已评分,0,1,-2,,Q023P1=0\r
DR0395,D19,Q017,T01,N01,D19-N01-Q017,1,2026-01-20T09:08:43+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0396,D19,Q001,T01,N01,D19-N01-Q001,1,2026-01-20T09:10:59+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0397,D19,Q006,T01,N01,D19-N01-Q006,1,2026-01-20T09:17:09+08:00,已评分,3,3,4x+6厘米,"1. 解：周长=(长+宽)×2。
2. C = 2[(x + 3) + x]。
3. =2(2x + 3)。
4. =4x + 6。",Q006P1=1；Q006P2=1；Q006P3=1\r
DR0398,D19,Q024,T02,N01,D19-N01-Q024,1,2026-01-20T09:21:39+08:00,已评分,0,1,1,,Q024P1=0\r
DR0399,D19,Q007,T01,N01,D19-N01-Q007,1,2026-01-20T09:24:42+08:00,已评分,0,1,2,,Q007P1=0\r
DR0400,D19,Q019,T02,N01,D19-N01-Q019,1,2026-01-20T09:26:14+08:00,已评分,0,1,19,,Q019P1=0\r
DR0401,D19,Q036,T02,N02,D19-N02-Q036,1,2026-06-17T14:12:12+08:00,已评分,1,3,鸡2只，兔8只,"1. 设鸡x只，兔y只。
2. x + y = 10，2x + 4y = 26。
3. ②-①×2：2y = 16。
4. y = 8，x = 2。",Q036P1=1；Q036P2=0；Q036P3=0\r
DR0402,D19,Q006,T01,N02,D19-N02-Q006,1,2026-06-17T14:21:22+08:00,已评分,2,3,4x+3厘米,"1. 解：C = 2[(x + 3) + x]。
2. =2(2x + 3)。
3. =4x + 3。",Q006P1=1；Q006P2=1；Q006P3=0\r
DR0403,D19,Q032,T02,N02,D19-N02-Q032,1,2026-06-17T14:22:55+08:00,已评分,0,1,3,,Q032P1=0\r
DR0404,D19,Q031,T02,N02,D19-N02-Q031,1,2026-06-17T14:25:45+08:00,已评分,3,3,"x=4,y=3","1. 解：由②得y = x - 1。
2. 代入①：2x + x - 1 = 11。
3. 3x = 12，x = 4。
4. y = 4 - 1 = 3。
5. 检验：2×4 + 3 = 11，4 - 3 = 1。",Q031P1=1；Q031P2=1；Q031P3=1\r
DR0405,D19,Q029,T02,N02,D19-N02-Q029,1,2026-06-17T14:26:45+08:00,已评分,1,1,4,,Q029P1=1\r
DR0406,D19,Q002,T01,N02,D19-N02-Q002,1,2026-06-17T14:28:11+08:00,已评分,0,1,14,,Q002P1=0\r
DR0407,D19,Q034,T02,N02,D19-N02-Q034,1,2026-06-17T14:33:43+08:00,已评分,2,3,成人票30元，学生票20元,"1. 设成人票x元，学生票y元。
2. 2x + y = 80，x + 2y = 70。
3. 由①得y = 80 - 2x，代入②：3x = 90。
4. x = 30，y = 20。
5. 答：成人票30元，学生票20元。",Q034P1=1；Q034P2=1；Q034P3=0\r
DR0408,D19,Q017,T01,N02,D19-N02-Q017,1,2026-06-17T14:34:12+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0409,D20,Q021,T02,N01,D20-N01-Q021,1,2026-01-20T08:54:20+08:00,已评分,0,1,D,,Q021P1=0\r
DR0410,D20,Q004,T01,N01,D20-N01-Q004,1,2026-01-20T08:58:03+08:00,已评分,0,1,9x-4,,Q004P1=0\r
DR0411,D20,Q018,T01,N01,D20-N01-Q018,1,2026-01-20T09:11:52+08:00,待评分,,3,不对，结果是-3,"1. 解：=2x - 6 - 3x + 3 + x。
2. =-3。
3. 不等于-9，小明说得不对。",\r
DR0412,D20,Q008,T01,N01,D20-N01-Q008,1,2026-01-20T09:13:28+08:00,已评分,0,1,否,,Q008P1=0\r
DR0413,D20,Q002,T01,N01,D20-N01-Q002,1,2026-01-20T09:15:03+08:00,已评分,0,1,10,,Q002P1=0\r
DR0414,D20,Q022,T02,N01,D20-N01-Q022,1,2026-01-20T09:17:37+08:00,已评分,2,3,x=10,"1. 解：3x - 6 = 2x + 5。
2. 3x - 2x = 5 + 6。
3. x = 10。",Q022P1=1；Q022P2=1；Q022P3=0\r
DR0415,D20,Q001,T01,N01,D20-N01-Q001,1,2026-01-20T09:18:58+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0416,D20,Q024,T02,N01,D20-N01-Q024,1,2026-01-20T09:21:41+08:00,已评分,0,1,3,,Q024P1=0\r
DR0417,D20,Q019,T02,N01,D20-N01-Q019,1,2026-01-20T09:24:34+08:00,已评分,1,1,5,,Q019P1=1\r
DR0418,D20,Q002,T01,N02,D20-N02-Q002,1,2026-06-17T14:11:57+08:00,已评分,0,1,9,,Q002P1=0\r
DR0419,D20,Q028,T02,N02,D20-N02-Q028,1,2026-06-17T14:18:59+08:00,已评分,0,3,x=3，y=6,"1. 解：①-②得2y = 12。
2. y = 6。
3. x = 9 - 6 = 3。",Q028P1=0；Q028P2=0；Q028P3=0\r
DR0420,D20,Q032,T02,N02,D20-N02-Q032,1,2026-06-17T14:22:21+08:00,已评分,0,1,3,,Q032P1=0\r
DR0421,D20,Q018,T01,N02,D20-N02-Q018,1,2026-06-17T14:31:18+08:00,已评分,2,3,对,"1. 解：=2x - 6 - 3x - 3 + x。
2. =-9。
3. 取x = 1，值是-9，所以对。",Q018P1=1；Q018P2=1；Q018P3=0\r
DR0422,D21,Q019,T02,N01,D21-N01-Q019,1,2026-01-20T08:56:10+08:00,已评分,0,1,19,,Q019P1=0\r
DR0423,D21,Q018,T01,N01,D21-N01-Q018,1,2026-01-20T09:03:36+08:00,已评分,1,3,不对,"1. =2x-6-3x-3+x。
2. =2x-9。
3. 值随x变化，不对。",Q018P1=1；Q018P2=0；Q018P3=0\r
DR0424,D21,Q001,T01,N01,D21-N01-Q001,1,2026-01-20T09:05:50+08:00,已评分,0,1,2x+3,,Q001P1=0\r
DR0425,D21,Q027,T02,N01,D21-N01-Q027,1,2026-01-20T09:07:18+08:00,已评分,0,1,11,,Q027P1=0\r
DR0426,D21,Q005,T01,N01,D21-N01-Q005,1,2026-01-20T09:08:52+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0427,D21,Q050,T03,N02,D21-N02-Q050,1,2026-06-17T14:11:33+08:00,已评分,1,1,5x≤30,,Q050P1=1\r
DR0428,D21,Q032,T02,N02,D21-N02-Q032,1,2026-06-17T14:13:12+08:00,已评分,1,1,4,,Q032P1=1\r
DR0429,D21,Q029,T02,N02,D21-N02-Q029,1,2026-06-17T14:14:29+08:00,已评分,1,1,x=4,,Q029P1=1\r
DR0430,D21,Q048,T03,N02,D21-N02-Q048,1,2026-06-17T14:16:39+08:00,已评分,0,1,x<2或x>3,,Q048P1=0\r
DR0431,D21,Q045,T03,N02,D21-N02-Q045,1,2026-06-17T14:17:37+08:00,已评分,1,1,1<x<5,,Q045P1=1\r
DR0432,D21,Q018,T01,N02,D21-N02-Q018,1,2026-06-17T14:19:47+08:00,已评分,1,3,不对,"1. =2x-6-3x-3+x。
2. =2x-9。
3. 值随x变化，不对。",Q018P1=1；Q018P2=0；Q018P3=0\r
DR0433,D22,Q027,T02,N01,D22-N01-Q027,1,2026-01-20T10:45:29+08:00,已评分,0,1,8.5,,Q027P1=0\r
DR0434,D22,Q023,T02,N01,D22-N01-Q023,1,2026-01-20T10:46:55+08:00,已评分,1,1,7,,Q023P1=1\r
DR0435,D22,Q013,T01,N01,D22-N01-Q013,1,2026-01-20T10:49:06+08:00,已评分,1,1,5,,Q013P1=1\r
DR0436,D22,Q008,T01,N01,D22-N01-Q008,1,2026-01-20T10:50:20+08:00,已评分,0,1,否,,Q008P1=0\r
DR0437,D22,Q025,T02,N01,D22-N01-Q025,1,2026-01-20T10:56:22+08:00,已评分,2,3,x=24/5,"1. 解：3(x-1)+2(x+1)=24。
2. 3x-1+2x+1=24。
3. 5x=24。
4. x=24/5。",Q025P1=1；Q025P2=1；Q025P3=0\r
DR0438,D22,Q009,T01,N01,D22-N01-Q009,1,2026-01-20T11:04:29+08:00,已评分,3,3,5x-6,"1. 解：6x-2-x-4。
2. =5x-6。",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0439,D22,Q012,T01,N01,D22-N01-Q012,1,2026-01-20T11:06:59+08:00,已评分,0,1,8x+9,,Q012P1=0\r
DR0440,D22,Q016,T01,N01,D22-N01-Q016,1,2026-01-20T11:08:18+08:00,已评分,0,1,2a+2b,,Q016P1=0\r
DR0441,D22,Q001,T01,N01,D22-N01-Q001,1,2026-01-20T11:09:45+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0442,D22,Q024,T02,N01,D22-N01-Q024,1,2026-01-20T11:12:12+08:00,已评分,0,1,3,,Q024P1=0\r
DR0443,D22,Q006,T01,N01,D22-N01-Q006,1,2026-01-20T11:18:26+08:00,已评分,0,3,3x+6厘米,"1. 解：周长=2×长+宽。
2. 2(x+3)+x。
3. =2x+6+x。
4. =3x+6。",Q006P1=0；Q006P2=0；Q006P3=0\r
DR0444,D22,Q026,T02,N01,D22-N01-Q026,1,2026-01-20T11:21:41+08:00,已评分,1,1,是,,Q026P1=1\r
DR0445,D22,Q005,T01,N01,D22-N01-Q005,1,2026-01-20T11:23:24+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0446,D22,Q025,T02,N01,D22-N01-Q025,2,2026-01-22T14:56:22+08:00,已评分,1,3,x=24/5,"1. 解：3(x-1)+2(x+1)=24。
2. 3x-1+2x+1=24。
3. 5x=24。
4. x=24/5。",Q025P1=1；Q025P2=0；Q025P3=0\r
DR0447,D22,Q042,T03,N02,D22-N02-Q042,1,2026-06-17T08:37:16+08:00,已评分,1,1,>,,Q042P1=1\r
DR0448,D22,Q014,T01,N02,D22-N02-Q014,1,2026-06-17T08:42:20+08:00,已评分,0,3,3x+3人,"1. 解：女生有(2x+3)人。
2. x+(2x+3)=3x+3。",Q014P1=0；Q014P2=0；Q014P3=0\r
DR0449,D22,Q047,T03,N02,D22-N02-Q047,1,2026-06-17T08:43:48+08:00,已评分,1,1,-1≤x<4,,Q047P1=1\r
DR0450,D22,Q005,T01,N02,D22-N02-Q005,1,2026-06-17T08:45:14+08:00,已评分,0,1,a+6,,Q005P1=0\r
DR0451,D22,Q031,T02,N02,D22-N02-Q031,1,2026-06-17T08:58:18+08:00,已评分,0,3,x=10，y=-9,"1. 解：由②得y=1-x。
2. 2x+1-x=11。
3. x=10。
4. y=1-10=-9。",Q031P1=0；Q031P2=0；Q031P3=0\r
DR0452,D22,Q051,T03,N02,D22-N02-Q051,1,2026-06-17T08:59:55+08:00,已评分,1,1,x-5≤30,,Q051P1=1\r
DR0453,D22,Q037,T03,N02,D22-N02-Q037,1,2026-06-17T09:01:28+08:00,已评分,1,1,x>5,,Q037P1=1\r
DR0454,D22,Q035,T02,N02,D22-N02-Q035,1,2026-06-17T09:02:48+08:00,已评分,0,1,13,,Q035P1=0\r
DR0455,D22,Q006,T01,N02,D22-N02-Q006,1,2026-06-17T09:08:14+08:00,已评分,2,3,4x+6,"1. 解：周长=2×(长+宽)。
2. C=2[(x+3)+x]。
3. =2(2x+3)。
4. =4x+6。",Q006P1=1；Q006P2=1；Q006P3=0\r
DR0456,D22,Q045,T03,N02,D22-N02-Q045,1,2026-06-17T09:10:34+08:00,已评分,1,1,1<x<5,,Q045P1=1\r
DR0457,D23,Q001,T01,N01,D23-N01-Q001,1,2026-01-20T10:45:28+08:00,已评分,0,1,2x+3,,Q001P1=0\r
DR0458,D23,Q014,T01,N01,D23-N01-Q014,1,2026-01-20T10:49:10+08:00,已评分,2,3,3x-3,"1. 解：女生：(2x - 3)人。
2. 全班=x + (2x - 3)。
3. =3x - 3。",Q014P1=1；Q014P2=1；Q014P3=0\r
DR0459,D23,Q013,T01,N01,D23-N01-Q013,1,2026-01-20T10:51:48+08:00,已评分,0,1,1,,Q013P1=0\r
DR0460,D23,Q019,T02,N01,D23-N01-Q019,1,2026-01-20T10:54:27+08:00,已评分,1,1,5,,Q019P1=1\r
DR0461,D23,Q002,T01,N01,D23-N01-Q002,1,2026-01-20T10:56:23+08:00,已评分,1,1,11,,Q002P1=1\r
DR0462,D23,Q010,T01,N01,D23-N01-Q010,1,2026-01-20T11:00:13+08:00,已评分,0,1,4a+6,,Q010P1=0\r
DR0463,D23,Q023,T02,N01,D23-N01-Q023,1,2026-01-20T11:02:35+08:00,已评分,1,1,7,,Q023P1=1\r
DR0464,D23,Q018,T01,N01,D23-N01-Q018,1,2026-01-20T11:14:33+08:00,已评分,2,3,对,"1. 解：=2x - 6 - 3x - 3 + x。
2. =-9。
3. 取x = 1，值是-9，∴对。",Q018P1=1；Q018P2=1；Q018P3=0\r
DR0465,D23,Q050,T03,N02,D23-N02-Q050,1,2026-06-17T08:34:14+08:00,已评分,0,1,x≤6,,Q050P1=0\r
DR0466,D23,Q032,T02,N02,D23-N02-Q032,1,2026-06-17T08:35:47+08:00,已评分,0,1,3,,Q032P1=0\r
DR0467,D23,Q045,T03,N02,D23-N02-Q045,1,2026-06-17T08:37:38+08:00,已评分,0,1,1≤x≤5,,Q045P1=0\r
DR0468,D23,Q053,T03,N02,D23-N02-Q053,1,2026-06-17T08:39:14+08:00,已评分,1,1,-2≤x<3,,Q053P1=1\r
DR0469,D23,Q010,T01,N02,D23-N02-Q010,1,2026-06-17T08:41:23+08:00,已评分,0,1,-4a-6,,Q010P1=0\r
DR0470,D23,Q004,T01,N02,D23-N02-Q004,1,2026-06-17T08:42:37+08:00,已评分,0,1,5x+4,,Q004P1=0\r
DR0471,D23,Q051,T03,N02,D23-N02-Q051,1,2026-06-17T08:43:22+08:00,已评分,0,1,x-5<30,,Q051P1=0\r
DR0472,D23,Q035,T02,N02,D23-N02-Q035,1,2026-06-17T08:46:56+08:00,已评分,1,1,2,,Q035P1=1\r
DR0473,D23,Q033,T02,N02,D23-N02-Q033,1,2026-06-17T08:48:16+08:00,已评分,0,1,x+y=17,,Q033P1=0\r
DR0474,D23,Q052,T03,N02,D23-N02-Q052,1,2026-06-17T08:53:07+08:00,已评分,0,3,15人,"1. 解：18 + 3x > 60。
2. x > 14。
3. 至少15人。",Q052P1=0；Q052P2=0；Q052P3=0\r
DR0475,D24,Q025,T02,N01,D24-N01-Q025,1,2026-01-20T10:47:36+08:00,已评分,0,3,x=1,"1. 解：3(x-1)+2(x+1)=4。
2. 5x-1=4。
3. x=1。",Q025P1=0；Q025P2=0；Q025P3=0\r
DR0476,D24,Q004,T01,N01,D24-N01-Q004,1,2026-01-20T10:48:49+08:00,已评分,1,1,5x-4,,Q004P1=1\r
DR0477,D24,Q027,T02,N01,D24-N01-Q027,1,2026-01-20T10:51:23+08:00,已评分,1,1,6,,Q027P1=1\r
DR0478,D24,Q017,T01,N01,D24-N01-Q017,1,2026-01-20T10:52:47+08:00,已评分,0,1,-3,,Q017P1=0\r
DR0479,D24,Q001,T01,N01,D24-N01-Q001,1,2026-01-20T10:54:00+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0480,D24,Q023,T02,N01,D24-N01-Q023,1,2026-01-20T10:55:18+08:00,已评分,0,1,2,,Q023P1=0\r
DR0481,D24,Q012,T01,N01,D24-N01-Q012,1,2026-01-20T10:56:11+08:00,已评分,0,1,2x+9,,Q012P1=0\r
DR0482,D24,Q013,T01,N01,D24-N01-Q013,1,2026-01-20T10:59:05+08:00,已评分,0,1,1,,Q013P1=0\r
DR0483,D24,Q007,T01,N01,D24-N01-Q007,1,2026-01-20T11:00:53+08:00,已评分,0,1,2,,Q007P1=0\r
DR0484,D24,Q016,T01,N01,D24-N01-Q016,1,2026-01-20T11:02:48+08:00,已评分,0,1,2a+2b,,Q016P1=0\r
DR0485,D24,Q009,T01,N01,D24-N01-Q009,1,2026-01-20T11:06:39+08:00,已评分,2,3,5x+6,"1. 解：6x-2-x-4。
2. =5x-6。",Q009P1=1；Q009P2=1；Q009P3=0\r
DR0486,D24,Q010,T01,N01,D24-N01-Q010,1,2026-01-20T11:08:13+08:00,已评分,0,1,-4a-6,,Q010P1=0\r
DR0487,D24,Q024,T02,N01,D24-N01-Q024,1,2026-01-20T11:09:19+08:00,已评分,0,1,1,,Q024P1=0\r
DR0488,D24,Q020,T02,N01,D24-N01-Q020,1,2026-01-20T11:11:53+08:00,已评分,0,1,15,,Q020P1=0\r
DR0489,D24,Q026,T02,N01,D24-N01-Q026,1,2026-01-20T11:13:30+08:00,已评分,1,1,是,,Q026P1=1\r
DR0490,D24,Q051,T03,N02,D24-N02-Q051,1,2026-06-17T08:36:27+08:00,已评分,1,1,x-5≤30,,Q051P1=1\r
DR0491,D24,Q034,T02,N02,D24-N02-Q034,1,2026-06-17T08:44:19+08:00,已评分,3,3,成人票30元，学生票20元,"1. 设成人票x元，学生票y元。
2. 2x+y=80，x+2y=70。
3. ①×2-②：3x=90。
4. x=30，y=20。
5. 答：成人票30元，学生票20元。
6. 检验：2×30+20=80，30+2×20=70。",Q034P1=1；Q034P2=1；Q034P3=1\r
DR0492,D24,Q032,T02,N02,D24-N02-Q032,1,2026-06-17T08:45:45+08:00,已评分,0,1,6,,Q032P1=0\r
DR0493,D24,Q043,T03,N02,D24-N02-Q043,1,2026-06-17T08:49:38+08:00,已评分,1,3,x<-4,"1. 解：-2x<11-3。
2. -2x<8。
3. x<-4。",Q043P1=1；Q043P2=0；Q043P3=0\r
DR0494,D24,Q037,T03,N02,D24-N02-Q037,1,2026-06-17T08:52:42+08:00,已评分,0,1,x<5,,Q037P1=0\r
DR0495,D24,Q004,T01,N02,D24-N02-Q004,1,2026-06-17T08:55:09+08:00,已评分,0,1,5x+4,,Q004P1=0\r
DR0496,D24,Q035,T02,N02,D24-N02-Q035,1,2026-06-17T08:59:12+08:00,已评分,0,1,-2,,Q035P1=0\r
DR0497,D24,Q029,T02,N02,D24-N02-Q029,1,2026-06-17T09:02:28+08:00,未作答,,1,,,\r
DR0498,D25,Q018,T01,N01,D25-N01-Q018,1,2026-01-20T10:50:26+08:00,已评分,2,3,对,"1. 解：=2x-6-3x-3+x
2. =-9
3. 取x=1，值是-9，所以对",Q018P1=1；Q018P2=1；Q018P3=0\r
DR0499,D25,Q012,T01,N01,D25-N01-Q012,1,2026-01-20T10:52:59+08:00,已评分,0,1,-2x+5,,Q012P1=0\r
DR0500,D25,Q003,T01,N01,D25-N01-Q003,1,2026-01-20T10:54:01+08:00,已评分,0,1,C,,Q003P1=0\r
DR0501,D25,Q020,T02,N01,D25-N01-Q020,1,2026-01-20T10:55:44+08:00,已评分,0,1,15,,Q020P1=0\r
DR0502,D25,Q005,T01,N01,D25-N01-Q005,1,2026-01-20T10:57:30+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0503,D25,Q019,T02,N01,D25-N01-Q019,1,2026-01-20T11:00:38+08:00,已评分,0,1,-5,,Q019P1=0\r
DR0504,D25,Q027,T02,N01,D25-N01-Q027,1,2026-01-20T11:02:52+08:00,已评分,0,1,12,,Q027P1=0\r
DR0505,D25,Q041,T03,N02,D25-N02-Q041,1,2026-06-17T08:39:45+08:00,已评分,1,1,x<-3,,Q041P1=1\r
DR0506,D25,Q035,T02,N02,D25-N02-Q035,1,2026-06-17T08:40:45+08:00,已评分,1,1,y=2,,Q035P1=1\r
DR0507,D25,Q028,T02,N02,D25-N02-Q028,1,2026-06-17T08:49:14+08:00,已评分,1,3,x=6，y=-3,"1. 解：2x=12，x=6
2. 代入②：6-y=3
3. y=-3",Q028P1=1；Q028P2=0；Q028P3=0\r
DR0508,D25,Q007,T01,N02,D25-N02-Q007,1,2026-06-17T08:50:25+08:00,已评分,1,1,-2,,Q007P1=1\r
DR0509,D25,Q048,T03,N02,D25-N02-Q048,1,2026-06-17T08:51:58+08:00,已评分,1,1,无解,,Q048P1=1\r
DR0510,D25,Q017,T01,N02,D25-N02-Q017,1,2026-06-17T08:53:13+08:00,已评分,0,1,3x²y,,Q017P1=0\r
DR0511,D25,Q053,T03,N02,D25-N02-Q053,1,2026-06-17T08:54:46+08:00,已评分,0,1,-2<x≤3,,Q053P1=0\r
DR0512,D25,Q014,T01,N02,D25-N02-Q014,1,2026-06-17T08:58:57+08:00,已评分,0,3,3x+3人,"1. 解：女生有(2x+3)人
2. x+(2x+3)=3x+3",Q014P1=0；Q014P2=0；Q014P3=0\r
DR0513,D25,Q015,T01,N02,D25-N02-Q015,1,2026-06-17T09:03:37+08:00,已评分,2,3,4a+7b,"1. 解：6a-3b-2a-4b
2. =4a-7b",Q015P1=1；Q015P2=1；Q015P3=0\r
DR0514,D25,Q049,T03,N02,D25-N02-Q049,1,2026-06-17T09:06:56+08:00,已评分,2,3,2<x≤3,"1. 解：2x≥4，x≥2
2. x<3
3. 2<x≤3",Q049P1=1；Q049P2=1；Q049P3=0\r
DR0515,D25,Q038,T03,N01,D25-N01-Q038,1,2026-06-17T09:08:18+08:00,已评分,1,1,x≤5,,Q038P1=1\r
DR0516,D25,Q034,T02,N02,D25-N02-Q034,1,2026-06-17T09:13:57+08:00,已评分,3,3,成人票30元，学生票20元,"1. 设成人票x元，学生票y元
2. 2x+y=80，x+2y=70
3. ①×2-②：3x=90
4. x=30，y=20
5. 答：成人票30元，学生票20元
6. 检验：2×30+20=80，30+2×20=70",Q034P1=1；Q034P2=1；Q034P3=1\r
DR0517,D25,Q013,T01,N02,D25-N02-Q013,1,2026-06-17T09:16:38+08:00,已评分,1,1,5,,Q013P1=1\r
DR0518,D25,Q033,T02,N02,D25-N02-Q033,1,2026-06-17T09:17:52+08:00,已评分,1,1,2x+3y=17,,Q033P1=1\r
DR0519,D25,Q042,T03,N02,D25-N02-Q042,1,2026-06-17T09:19:47+08:00,已评分,1,1,>,,Q042P1=1\r
DR0520,D26,Q009,T01,N01,D26-N01-Q009,1,2026-01-20T10:49:11+08:00,已评分,3,3,5x-6,"1. 6x-2-x-4。
2. =(6x-x)+(-2-4)。
3. =5x-6。",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0521,D26,Q006,T01,N01,D26-N01-Q006,1,2026-01-20T10:53:31+08:00,已评分,0,3,3x+6厘米,"1. 周长=2×长+宽。
2. 2(x+3)+x。
3. =2x+6+x。
4. =3x+6。",Q006P1=0；Q006P2=0；Q006P3=0\r
DR0522,D26,Q001,T01,N01,D26-N01-Q001,1,2026-01-20T10:54:40+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0523,D26,Q016,T01,N01,D26-N01-Q016,1,2026-01-20T10:55:43+08:00,已评分,1,1,2b,,Q016P1=1\r
DR0524,D26,Q021,T02,N01,D26-N01-Q021,1,2026-01-20T10:57:33+08:00,已评分,1,1,B,,Q021P1=1\r
DR0525,D26,Q014,T01,N01,D26-N01-Q014,1,2026-01-20T11:05:22+08:00,已评分,3,3,3x-3人,"1. 女生有(2x-3)人。
2. 全班=x+(2x-3)。
3. =3x-3。",Q014P1=1；Q014P2=1；Q014P3=1\r
DR0526,D26,Q018,T01,N01,D26-N01-Q018,1,2026-01-20T11:07:54+08:00,已评分,3,3,对，结果是-9,"1. 2(x-3)-3(x+1)+x。
2. =2x-6-3x-3+x。
3. =-9。
4. 化简后是常数-9，与x无关，说法正确。",Q018P1=1；Q018P2=1；Q018P3=1\r
DR0527,D26,Q002,T01,N01,D26-N01-Q002,1,2026-01-20T11:09:09+08:00,已评分,1,1,11,,Q002P1=1\r
DR0528,D26,Q017,T01,N01,D26-N01-Q017,1,2026-01-20T11:10:45+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0529,D26,Q015,T01,N01,D26-N01-Q015,1,2026-01-20T11:15:15+08:00,已评分,3,3,4a-7b,"1. 6a-3b-2a-4b。
2. =4a-7b。",Q015P1=1；Q015P2=1；Q015P3=1\r
DR0530,D26,Q038,T03,N02,D26-N02-Q038,1,2026-06-17T08:38:22+08:00,已评分,1,1,x≤5,,Q038P1=1\r
DR0531,D26,Q035,T02,N02,D26-N02-Q035,1,2026-06-17T08:40:11+08:00,已评分,1,1,2,,Q035P1=1\r
DR0532,D26,Q052,T03,N02,D26-N02-Q052,1,2026-06-17T08:44:06+08:00,待评分,,3,14,"1. 设还需要x名同学。
2. 18+3x≥60。
3. 3x≥42，x≥14。
4. 答：至少还需要14名同学。",\r
DR0533,D26,Q042,T03,N02,D26-N02-Q042,1,2026-06-17T08:46:00+08:00,已评分,0,1,<,,Q042P1=0\r
DR0534,D26,Q053,T03,N02,D26-N02-Q053,1,2026-06-17T08:46:49+08:00,已评分,1,1,-2≤x<3,,Q053P1=1\r
DR0535,D26,Q034,T02,N02,D26-N02-Q034,1,2026-06-17T08:54:48+08:00,已评分,4,3,成人票30元，学生票20元,"1. 设成人票x元，学生票y元。
2. 2x+y=80，x+2y=70。
3. 由①得y=80-2x，代入②：3x=90。
4. x=30，y=20。
5. 答：成人票30元，学生票20元。
6. 检验：两个条件都满足。",Q034P1=1；Q034P2=1；Q034P3=1\r
DR0536,D26,Q043,T03,N02,D26-N02-Q043,1,2026-06-17T08:58:32+08:00,已评分,1,3,x<-4,"1. -2x<11-3。
2. -2x<8。
3. x<-4。",Q043P1=1；Q043P2=0；Q043P3=0\r
DR0537,D26,Q029,T02,N02,D26-N02-Q029,1,2026-06-17T09:00:35+08:00,已评分,0,1,3,,Q029P1=0\r
DR0538,D26,Q044,T03,N02,D26-N02-Q044,1,2026-06-17T09:02:10+08:00,已评分,1,1,B,,Q044P1=1\r
DR0539,D26,Q032,T02,N02,D26-N02-Q032,1,2026-06-17T09:03:20+08:00,已评分,0,1,8,,Q032P1=0\r
DR0540,D26,Q003,T01,N02,D26-N02-Q003,1,2026-06-17T09:04:28+08:00,已评分,1,1,B,,Q003P1=1\r
DR0541,D27,Q025,T02,N01,D27-N01-Q025,1,2026-01-20T10:48:34+08:00,已评分,2,3,x=23/5,"1. 解：3(x-1)+2(x+1)=24
2. 5x-1=24
3. 5x=23
4. x=23/5",Q025P1=1；Q025P2=1；Q025P3=0\r
DR0542,D27,Q009,T01,N01,D27-N01-Q009,1,2026-01-20T10:53:34+08:00,已评分,3,3,5x-6,"1. 解：6x-2-x-4
2. =5x-6",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0543,D27,Q011,T01,N01,D27-N01-Q011,1,2026-01-20T10:59:30+08:00,已评分,0,3,3n+1,"1. 解：(n-1)+n+(n+2)
2. =3n+1",Q011P1=0；Q011P2=0；Q011P3=0\r
DR0544,D27,Q024,T02,N01,D27-N01-Q024,1,2026-01-20T11:03:19+08:00,已评分,0,1,3,,Q024P1=0\r
DR0545,D27,Q008,T01,N01,D27-N01-Q008,1,2026-01-20T11:04:31+08:00,已评分,1,1,是,,Q008P1=1\r
DR0546,D27,Q020,T02,N01,D27-N01-Q020,1,2026-01-20T11:07:14+08:00,已评分,1,1,6,,Q020P1=1\r
DR0547,D27,Q047,T03,N02,D27-N02-Q047,1,2026-06-17T08:39:38+08:00,已评分,1,1,-1≤x<4,,Q047P1=1\r
DR0548,D27,Q002,T01,N02,D27-N02-Q002,1,2026-06-17T08:40:54+08:00,已评分,1,1,11,,Q002P1=1\r
DR0549,D27,Q044,T03,N02,D27-N02-Q044,1,2026-06-17T08:41:44+08:00,已评分,1,1,B,,Q044P1=1\r
DR0550,D27,Q042,T03,N02,D27-N02-Q042,1,2026-06-17T08:46:42+08:00,已评分,0,1,=,,Q042P1=0\r
DR0551,D27,Q013,T01,N02,D27-N02-Q013,1,2026-06-17T08:50:11+08:00,已评分,1,1,5,,Q013P1=1\r
DR0552,D27,Q051,T03,N02,D27-N02-Q051,1,2026-06-17T08:51:05+08:00,已评分,0,1,x-5<30,,Q051P1=0\r
DR0553,D27,Q045,T03,N02,D27-N02-Q045,1,2026-06-17T08:52:22+08:00,已评分,1,1,1<x<5,,Q045P1=1\r
DR0554,D27,Q030,T02,N02,D27-N02-Q030,1,2026-06-17T08:53:38+08:00,已评分,1,1,3,,Q030P1=1\r
DR0555,D27,Q049,T03,N02,D27-N02-Q049,1,2026-06-17T08:58:13+08:00,已评分,3,3,2<x≤3,"1. 解：2x≥4，x≥2
2. x<3
3. 2<x≤3",Q049P1=1；Q049P2=1；Q049P3=1\r
DR0556,D27,Q048,T03,N02,D27-N02-Q048,1,2026-06-17T09:01:03+08:00,已评分,0,1,x>3,,Q048P1=0\r
DR0557,D27,Q037,T03,N02,D27-N02-Q037,1,2026-06-17T09:01:59+08:00,已评分,1,1,x>5,,Q037P1=1\r
DR0558,D27,Q049,T03,N02,D27-N02-Q049,2,2026-06-18T11:58:13+08:00,已评分,2,3,2<x≤3,"1. 解：2x≥4，x≥2
2. x<3
3. 2<x≤3",Q049P1=1；Q049P2=1；Q049P3=0\r
DR0559,D28,Q022,T02,N01,D28-N01-Q022,1,2026-01-20T10:48:41+08:00,已评分,1,3,x=-1,"1. 解：3x-6=2x+5。
2. 3x-2x=5-6。
3. x=-1。",Q022P1=1；Q022P2=0；Q022P3=0\r
DR0560,D28,Q006,T01,N01,D28-N01-Q006,1,2026-01-20T10:54:53+08:00,已评分,2,3,4x+3厘米,"1. 解：C=2[(x+3)+x]。
2. =2(2x+3)。
3. =4x+3。",Q006P1=1；Q006P2=1；Q006P3=0\r
DR0561,D28,Q012,T01,N01,D28-N01-Q012,1,2026-01-20T10:56:35+08:00,已评分,0,1,2x+9,,Q012P1=0\r
DR0562,D28,Q007,T01,N01,D28-N01-Q007,1,2026-01-20T10:58:03+08:00,已评分,0,1,-10,,Q007P1=0\r
DR0563,D28,Q004,T01,N01,D28-N01-Q004,1,2026-01-20T10:59:23+08:00,已评分,1,1,5x-4,,Q004P1=1\r
DR0564,D28,Q005,T01,N01,D28-N01-Q005,1,2026-01-20T11:00:13+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0565,D28,Q035,T02,N02,D28-N02-Q035,1,2026-06-17T08:35:35+08:00,已评分,0,1,3,,Q035P1=0\r
DR0566,D28,Q036,T02,N02,D28-N02-Q036,1,2026-06-17T08:40:23+08:00,已评分,0,3,鸡3只，兔7只,"1. 设鸡x只，兔y只。
2. x+y=10，4x+2y=26。
3. x=3，y=7。",Q036P1=0；Q036P2=0；Q036P3=0\r
DR0567,D28,Q034,T02,N02,D28-N02-Q034,1,2026-06-17T08:48:32+08:00,已评分,2,3,成人票20元，学生票30元,"1. 设成人票x元，学生票y元。
2. 2x+y=80，x+2y=70。
3. 3x=90，x=30，y=20。",Q034P1=1；Q034P2=1；Q034P3=0\r
DR0568,D28,Q003,T01,N02,D28-N02-Q003,1,2026-06-17T08:49:54+08:00,已评分,1,1,B,,Q003P1=1\r
DR0569,D28,Q030,T02,N02,D28-N02-Q030,1,2026-06-17T08:52:05+08:00,已评分,1,1,3,,Q030P1=1\r
DR0570,D28,Q029,T02,N02,D28-N02-Q029,1,2026-06-17T08:56:17+08:00,已评分,1,1,4,,Q029P1=1\r
DR0571,D28,Q032,T02,N02,D28-N02-Q032,1,2026-06-17T08:57:46+08:00,已评分,0,1,3,,Q032P1=0\r
DR0572,D28,Q028,T02,N02,D28-N02-Q028,1,2026-06-17T09:05:03+08:00,已评分,3,3,x=6，y=3,"1. 解：两式相加，2x=12。
2. x=6。
3. 代入x+y=9，得y=3。
4. ∴x=6，y=3。
5. 检验：6+3=9，6-3=3。",Q028P1=1；Q028P2=1；Q028P3=1\r
DR0573,D29,Q003,T01,N01,D29-N01-Q003,1,2026-01-20T10:43:26+08:00,已评分,1,1,B,,Q003P1=1\r
DR0574,D29,Q024,T02,N01,D29-N01-Q024,1,2026-01-20T10:45:59+08:00,已评分,1,1,9,,Q024P1=1\r
DR0575,D29,Q012,T01,N01,D29-N01-Q012,1,2026-01-20T10:48:21+08:00,已评分,1,1,-2x+9,,Q012P1=1\r
DR0576,D29,Q026,T02,N01,D29-N01-Q026,1,2026-01-20T10:50:44+08:00,已评分,0,1,否,,Q026P1=0\r
DR0577,D29,Q013,T01,N01,D29-N01-Q013,1,2026-01-20T10:52:55+08:00,已评分,1,1,5,,Q013P1=1\r
DR0578,D29,Q002,T01,N01,D29-N01-Q002,1,2026-01-20T10:55:03+08:00,已评分,1,1,11,,Q002P1=1\r
DR0579,D29,Q010,T01,N01,D29-N01-Q010,1,2026-01-20T10:56:48+08:00,已评分,1,1,-4a+6,,Q010P1=1\r
DR0580,D29,Q021,T02,N01,D29-N01-Q021,1,2026-01-20T10:57:55+08:00,已评分,1,1,B,,Q021P1=1\r
DR0581,D29,Q006,T01,N02,D29-N02-Q006,1,2026-06-18T15:52:19+08:00,已评分,2,3,4x+6,"1. 周长=2×(长+宽)
2. C=2[(x+3)+x]
3. =4x+6",Q006P1=1；Q006P2=1；Q006P3=0\r
DR0582,D29,Q014,T01,N02,D29-N02-Q014,1,2026-06-18T16:01:48+08:00,已评分,2,3,3x-3,"1. 女生有(2x-3)人
2. 全班=x+(2x-3)
3. =3x-3",Q014P1=1；Q014P2=1；Q014P3=0\r
DR0583,D29,Q029,T02,N02,D29-N02-Q029,1,2026-06-18T16:05:01+08:00,已评分,1,1,x=4,,Q029P1=1\r
DR0584,D29,Q038,T03,N02,D29-N02-Q038,1,2026-06-18T16:07:03+08:00,已评分,1,1,x≤5,,Q038P1=1\r
DR0585,D29,Q047,T03,N02,D29-N02-Q047,1,2026-06-18T16:08:39+08:00,已评分,1,1,-1≤x<4,,Q047P1=1\r
DR0586,D29,Q031,T02,N02,D29-N02-Q031,1,2026-06-18T16:13:38+08:00,已评分,3,3,x=4，y=3,"1. 由②得y=x-1
2. 代入①：2x+x-1=11
3. 3x=12，x=4
4. y=4-1=3
5. 检验：2×4+3=11，4-3=1",Q031P1=1；Q031P2=1；Q031P3=1\r
DR0587,D29,Q034,T02,N02,D29-N02-Q034,1,2026-06-18T16:17:52+08:00,已评分,2,3,成人票30元，学生票20元,"1. 设成人票x元，学生票y元
2. 2x+y=80，x+2y=70
3. ①×2-②：3x=90
4. x=30，y=20
5. 答：成人票30元，学生票20元",Q034P1=1；Q034P2=1；Q034P3=0\r
DR0588,D29,Q010,T01,N02,D29-N02-Q010,1,2026-06-18T16:19:23+08:00,已评分,1,1,-4a+6,,Q010P1=1\r
DR0589,D29,Q032,T02,N02,D29-N02-Q032,1,2026-06-18T16:21:27+08:00,已评分,1,1,4,,Q032P1=1\r
DR0590,D29,Q028,T02,N02,D29-N02-Q028,1,2026-06-18T16:25:03+08:00,已评分,2,3,"x=6,y=3","1. 两式相加，2x=12
2. x=6
3. 把x=6代入①，得y=3
4. ∴x=6，y=3",Q028P1=1；Q028P2=1；Q028P3=0\r
DR0591,D29,Q048,T03,N02,D29-N02-Q048,1,2026-06-18T16:27:14+08:00,已评分,1,1,无解,,Q048P1=1\r
DR0592,D29,Q039,T03,N02,D29-N02-Q039,1,2026-06-18T16:30:09+08:00,已评分,1,1,x<5,,Q039P1=1\r
DR0593,D29,Q012,T01,N02,D29-N02-Q012,1,2026-06-18T16:32:36+08:00,已评分,1,1,-2x+9,,Q012P1=1\r
DR0594,D29,Q049,T03,N02,D29-N02-Q049,1,2026-06-18T16:37:32+08:00,已评分,3,3,2≤x<3,"1. 解①：2x≥4，x≥2
2. 由②得x<3
3. ∴2≤x<3",Q049P1=1；Q049P2=1；Q049P3=1\r
DR0595,D29,Q041,T03,N02,D29-N02-Q041,1,2026-06-18T16:38:39+08:00,已评分,1,1,x<-3,,Q041P1=1\r
DR0596,D30,Q022,T02,N01,D30-N01-Q022,1,2026-01-20T10:46:39+08:00,已评分,0,3,x=7,"1. 解：3x - 2 = 2x + 5。
2. x = 7。",Q022P1=0；Q022P2=0；Q022P3=0\r
DR0597,D30,Q009,T01,N01,D30-N01-Q009,1,2026-01-20T10:52:00+08:00,已评分,0,3,5x-5,"1. 解：6x - 1 - x - 4。
2. =5x - 5。",Q009P1=0；Q009P2=0；Q009P3=0\r
DR0598,D30,Q007,T01,N01,D30-N01-Q007,1,2026-01-20T10:52:36+08:00,已评分,0,1,2,,Q007P1=0\r
DR0599,D30,Q011,T01,N01,D30-N01-Q011,1,2026-01-20T10:55:22+08:00,已评分,2,3,3n，比3大,"1. 解：(n - 1) + n + (n + 1)。
2. =3n。
3. 3n比3大。",Q011P1=1；Q011P2=1；Q011P3=0\r
DR0600,D30,Q026,T02,N01,D30-N01-Q026,1,2026-01-20T10:57:21+08:00,已评分,0,1,否,,Q026P1=0\r
DR0601,D30,Q017,T01,N01,D30-N01-Q017,1,2026-01-20T11:00:10+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0602,D30,Q023,T02,N01,D30-N01-Q023,1,2026-01-20T11:01:25+08:00,已评分,0,1,2,,Q023P1=0\r
DR0603,D30,Q006,T01,N01,D30-N01-Q006,1,2026-01-20T11:09:01+08:00,已评分,2,3,4x+6,"1. 解：周长=(长+宽)×2。
2. C = 2[(x + 3) + x]。
3. =2(2x + 3)。
4. =4x + 6。",Q006P1=1；Q006P2=1；Q006P3=0\r
DR0604,D30,Q003,T01,N01,D30-N01-Q003,1,2026-01-20T11:10:21+08:00,已评分,0,1,D,,Q003P1=0\r
DR0605,D30,Q016,T01,N01,D30-N01-Q016,1,2026-01-20T11:13:13+08:00,已评分,0,1,2a+2b,,Q016P1=0\r
DR0606,D30,Q018,T01,N01,D30-N01-Q018,1,2026-01-20T11:18:40+08:00,已评分,0,3,不对,"1. 解：=2x - 6 - 3x + 3 + x。
2. =-3。
3. 不等于-9，小明说得不对。",Q018P1=0；Q018P2=0；Q018P3=0\r
DR0607,D30,Q012,T01,N01,D30-N01-Q012,1,2026-01-20T11:20:40+08:00,已评分,0,1,2x+9,,Q012P1=0\r
DR0608,D30,Q015,T01,N01,D30-N01-Q015,1,2026-01-20T11:24:22+08:00,已评分,2,3,4a+7b,"1. 解：原式=6a - 3b - 2a - 4b。
2. =4a - 7b。",Q015P1=1；Q015P2=1；Q015P3=0\r
DR0609,D30,Q014,T01,N01,D30-N01-Q014,1,2026-01-20T11:28:04+08:00,已评分,0,3,3x-6人,"1. 解：女生2(x - 3) = 2x - 6。
2. x + 2x - 6 = 3x - 6。",Q014P1=0；Q014P2=0；Q014P3=0\r
DR0610,D30,Q017,T01,N02,D30-N02-Q017,1,2026-06-17T08:36:59+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0611,D30,Q047,T03,N02,D30-N02-Q047,1,2026-06-17T08:39:04+08:00,已评分,1,1,-1≤x<4,,Q047P1=1\r
DR0612,D30,Q034,T02,N02,D30-N02-Q034,1,2026-06-17T08:42:16+08:00,已评分,1,3,成人票10元，学生票60元,"1. 设成人票x元，学生票y元。
2. 2x + y = 80，x + 2y = 70。
3. y = 80 - 2x，代入：x + 80 - 2x = 70。
4. x = 10，y = 60。",Q034P1=1；Q034P2=0；Q034P3=0\r
DR0613,D30,Q010,T01,N02,D30-N02-Q010,1,2026-06-17T08:43:40+08:00,已评分,0,1,-4a-6,,Q010P1=0\r
DR0614,D30,Q039,T03,N02,D30-N02-Q039,1,2026-06-17T08:45:00+08:00,已评分,1,1,x<5,,Q039P1=1\r
DR0615,D30,Q008,T01,N02,D30-N02-Q008,1,2026-06-17T08:46:51+08:00,已评分,1,1,是,,Q008P1=1\r
DR0616,D30,Q030,T02,N02,D30-N02-Q030,1,2026-06-17T08:50:45+08:00,已评分,0,1,6,,Q030P1=0\r
DR0617,D30,Q053,T03,N02,D30-N02-Q053,1,2026-06-17T08:52:35+08:00,已评分,1,1,-2≤x<3,,Q053P1=1\r
DR0618,D30,Q044,T03,N02,D30-N02-Q044,1,2026-06-17T08:53:36+08:00,已评分,1,1,B,,Q044P1=1\r
DR0619,D30,Q018,T01,N02,D30-N02-Q018,1,2026-06-17T09:08:24+08:00,已评分,2,3,对,"1. 解：=2x - 6 - 3x - 3 + x。
2. =-9。
3. 取x = 1，值是-9，∴对。",Q018P1=1；Q018P2=1；Q018P3=0\r
DR0620,D31,Q005,T01,N01,D31-N01-Q005,1,2026-01-20T10:43:45+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0621,D31,Q024,T02,N01,D31-N01-Q024,1,2026-01-20T10:45:35+08:00,已评分,0,1,1,,Q024P1=0\r
DR0622,D31,Q009,T01,N01,D31-N01-Q009,1,2026-01-20T10:50:11+08:00,已评分,2,3,5x+6,"1. 原式=6x-2-x-4。
2. =5x-6。",Q009P1=1；Q009P2=1；Q009P3=0\r
DR0623,D31,Q013,T01,N01,D31-N01-Q013,1,2026-01-20T10:51:17+08:00,已评分,1,1,5,,Q013P1=1\r
DR0624,D31,Q025,T02,N01,D31-N01-Q025,1,2026-01-20T11:00:02+08:00,已评分,0,3,x=1,"1. 3(x-1)+2(x+1)=4。
2. 5x-1=4。
3. x=1。",Q025P1=0；Q025P2=0；Q025P3=0\r
DR0625,D31,Q011,T01,N01,D31-N01-Q011,1,2026-01-20T11:05:19+08:00,已评分,2,3,3n，比3大,"1. (n-1)+n+(n+1)。
2. =3n。
3. 3n比3大。",Q011P1=1；Q011P2=1；Q011P3=0\r
DR0626,D31,Q046,T03,N02,D31-N02-Q046,1,2026-06-17T08:42:33+08:00,已评分,0,3,4<x≤5,"1. x>3+1，x>4。
2. x≤5。
3. 4<x≤5。",Q046P1=0；Q046P2=0；Q046P3=0\r
DR0627,D31,Q049,T03,N02,D31-N02-Q049,1,2026-06-17T08:51:39+08:00,已评分,1,3,x>3,"1. x≥2。
2. -x>-3，x>3。
3. 所以x>3。",Q049P1=1；Q049P2=0；Q049P3=0\r
DR0628,D31,Q017,T01,N02,D31-N02-Q017,1,2026-06-17T08:54:40+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0629,D31,Q007,T01,N02,D31-N02-Q007,1,2026-06-17T08:56:32+08:00,已评分,0,1,10,,Q007P1=0\r
DR0630,D31,Q033,T02,N02,D31-N02-Q033,1,2026-06-17T08:58:21+08:00,已评分,0,1,3x+2y=17,,Q033P1=0\r
DR0631,D31,Q050,T03,N02,D31-N02-Q050,1,2026-06-17T08:59:34+08:00,已评分,1,1,5x≤30,,Q050P1=1\r
DR0632,D32,Q014,T01,N01,D32-N01-Q014,1,2026-01-20T10:51:22+08:00,已评分,0,3,3x+3人,"1. 女生有(2x + 3)人。
2. x + (2x + 3) = 3x + 3。",Q014P1=0；Q014P2=0；Q014P3=0\r
DR0633,D32,Q026,T02,N01,D32-N01-Q026,1,2026-01-20T10:53:00+08:00,已评分,1,1,是,,Q026P1=1\r
DR0634,D32,Q022,T02,N01,D32-N01-Q022,1,2026-01-20T10:59:45+08:00,已评分,1,3,x=-1,"1. 3x - 6 = 2x + 5。
2. 3x - 2x = 5 - 6。
3. x = -1。",Q022P1=1；Q022P2=0；Q022P3=0\r
DR0635,D32,Q020,T02,N01,D32-N01-Q020,1,2026-01-20T11:00:40+08:00,已评分,1,1,6,,Q020P1=1\r
DR0636,D32,Q009,T01,N01,D32-N01-Q009,1,2026-01-20T11:07:03+08:00,已评分,3,3,5x-6,"1. 6x - 2 - x - 4。
2. =(6x - x) + (-2 - 4)。
3. =5x - 6。",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0637,D32,Q008,T01,N01,D32-N01-Q008,1,2026-01-20T11:09:04+08:00,已评分,1,1,是,,Q008P1=1\r
DR0638,D32,Q033,T02,N02,D32-N02-Q033,1,2026-06-17T08:34:45+08:00,已评分,1,1,2x+3y=17,,Q033P1=1\r
DR0639,D32,Q028,T02,N02,D32-N02-Q028,1,2026-06-17T08:38:33+08:00,已评分,1,3,x=6，y=-3,"1. 2x = 12，x = 6。
2. 代入②：6 - y = 3。
3. y = -3。",Q028P1=1；Q028P2=0；Q028P3=0\r
DR0640,D32,Q034,T02,N02,D32-N02-Q034,1,2026-06-17T08:42:46+08:00,已评分,0,3,成人票20元，学生票30元,"1. 设成人票x元，学生票y元。
2. 2x + y = 70，x + 2y = 80。
3. x = 20，y = 30。",Q034P1=0；Q034P2=0；Q034P3=0\r
DR0641,D32,Q001,T01,N02,D32-N02-Q001,1,2026-06-17T08:43:38+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0642,D32,Q009,T01,N02,D32-N02-Q009,1,2026-06-17T08:51:42+08:00,已评分,1,3,7x-6,"1. 6x - 2 - x - 4。
2. =7x - 6。",Q009P1=1；Q009P2=0；Q009P3=0\r
DR0643,D32,Q006,T01,N02,D32-N02-Q006,1,2026-06-17T09:00:01+08:00,已评分,3,3,4x+6厘米,"1. 周长=(长+宽)×2。
2. C = 2[(x + 3) + x]。
3. =4x + 6。",Q006P1=1；Q006P2=1；Q006P3=1\r
DR0644,D32,Q029,T02,N02,D32-N02-Q029,1,2026-06-17T09:02:25+08:00,已评分,1,1,4,,Q029P1=1\r
DR0645,D32,Q030,T02,N02,D32-N02-Q030,1,2026-06-17T09:03:04+08:00,已评分,1,1,y=3,,Q030P1=1\r
DR0646,D32,Q005,T01,N02,D32-N02-Q005,1,2026-06-17T09:04:55+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0647,D32,Q032,T02,N02,D32-N02-Q032,1,2026-06-17T09:07:30+08:00,已评分,1,1,4,,Q032P1=1\r
DR0648,D32,Q031,T02,N02,D32-N02-Q031,1,2026-06-17T09:11:09+08:00,已评分,3,3,x=4，y=3,"1. 由②得y = x - 1。
2. 代入①：2x + x - 1 = 11。
3. 3x = 12，x = 4。
4. y = 4 - 1 = 3。
5. 检验：2×4 + 3 = 11，4 - 3 = 1。",Q031P1=1；Q031P2=1；Q031P3=1\r
DR0649,D32,Q036,T02,N02,D32-N02-Q036,1,2026-06-17T09:18:48+08:00,已评分,3,3,鸡7兔3,"1. 设鸡x只，兔y只。
2. x + y = 10，2x + 4y = 26。
3. 由①得x = 10 - y。
4. 代入②：20 - 2y + 4y = 26，y = 3。
5. x = 7。
6. 答：鸡7只，兔3只。
7. 检验：7×2 + 3×4 = 14 + 12 = 26。",Q036P1=1；Q036P2=1；Q036P3=1\r
DR0650,D32,Q016,T01,N02,D32-N02-Q016,1,2026-06-17T09:20:26+08:00,已评分,0,1,2a,,Q016P1=0\r
DR0651,D32,Q003,T01,N02,D32-N02-Q003,1,2026-06-17T09:21:36+08:00,已评分,1,1,B,,Q003P1=1\r
DR0652,D32,Q004,T01,N02,D32-N02-Q004,1,2026-06-17T09:23:50+08:00,已评分,1,1,5x-4,,Q004P1=1\r
DR0653,D33,Q021,T02,N01,D33-N01-Q021,1,2026-01-20T10:43:32+08:00,已评分,0,1,D,,Q021P1=0\r
DR0654,D33,Q015,T01,N01,D33-N01-Q015,1,2026-01-20T10:48:33+08:00,已评分,3,3,4a-7b,"1. 6a - 3b - 2a - 4b
2. =4a - 7b",Q015P1=1；Q015P2=1；Q015P3=1\r
DR0655,D33,Q002,T01,N01,D33-N01-Q002,1,2026-01-20T10:50:34+08:00,已评分,1,1,11,,Q002P1=1\r
DR0656,D33,Q003,T01,N01,D33-N01-Q003,1,2026-01-20T10:51:46+08:00,已评分,1,1,B,,Q003P1=1\r
DR0657,D33,Q001,T01,N01,D33-N01-Q001,1,2026-01-20T10:53:33+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0658,D33,Q025,T02,N01,D33-N01-Q025,1,2026-01-20T10:59:08+08:00,已评分,2,3,x=23/5,"1. 3(x - 1) + 2(x + 1) = 24
2. 5x - 1 = 24
3. 5x = 23
4. x = 23/5",Q025P1=1；Q025P2=1；Q025P3=0\r
DR0659,D33,Q007,T01,N01,D33-N01-Q007,1,2026-01-20T10:59:37+08:00,已评分,0,1,-10,,Q007P1=0\r
DR0660,D33,Q009,T01,N01,D33-N01-Q009,1,2026-01-20T11:06:34+08:00,已评分,3,3,5x-6,"1. 6x - 2 - x - 4
2. =5x - 6",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0661,D33,Q012,T01,N01,D33-N01-Q012,1,2026-01-20T11:08:11+08:00,已评分,1,1,-2x+9,,Q012P1=1\r
DR0662,D33,Q006,T01,N01,D33-N01-Q006,1,2026-01-20T11:13:37+08:00,已评分,3,3,4x+6厘米,"1. 周长=2×(长+宽)
2. C = 2[(x + 3) + x]
3. =4x + 6",Q006P1=1；Q006P2=1；Q006P3=1\r
DR0663,D33,Q026,T02,N01,D33-N01-Q026,1,2026-01-20T11:14:41+08:00,已评分,1,1,是,,Q026P1=1\r
DR0664,D33,Q044,T03,N02,D33-N02-Q044,1,2026-06-17T08:40:10+08:00,已评分,1,1,B,,Q044P1=1\r
DR0665,D33,Q015,T01,N02,D33-N02-Q015,1,2026-06-17T08:45:58+08:00,已评分,3,3,4a-7b,"1. 原式=6a - 3b - 2a - 4b
2. =4a - 7b",Q015P1=1；Q015P2=1；Q015P3=1\r
DR0666,D33,Q038,T03,N02,D33-N02-Q038,1,2026-06-17T08:51:08+08:00,已评分,1,1,x≤5,,Q038P1=1\r
DR0667,D33,Q031,T02,N02,D33-N02-Q031,1,2026-06-17T08:56:47+08:00,已评分,0,3,x=10，y=-9,"1. 由②得y = 1 - x
2. 2x + 1 - x = 11
3. x = 10
4. y = 1 - 10 = -9",Q031P1=0；Q031P2=0；Q031P3=0\r
DR0668,D33,Q007,T01,N02,D33-N02-Q007,1,2026-06-17T08:58:55+08:00,已评分,1,1,-2,,Q007P1=1\r
DR0669,D33,Q018,T01,N02,D33-N02-Q018,1,2026-06-17T09:07:11+08:00,已评分,3,3,对,"1. 2(x - 3) - 3(x + 1) + x
2. =2x - 6 - 3x - 3 + x
3. =-9
4. 结果里没有x，所以x取什么值都等于-9，小明说得对",Q018P1=1；Q018P2=1；Q018P3=1\r
DR0670,D33,Q017,T01,N02,D33-N02-Q017,1,2026-06-17T09:09:33+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0671,D33,Q034,T02,N02,D33-N02-Q034,1,2026-06-17T09:13:40+08:00,已评分,1,3,成人票10元，学生票60元,"1. 设成人票x元，学生票y元
2. 2x + y = 80，x + 2y = 70
3. y = 80 - 2x，代入：x + 80 - 2x = 70
4. x = 10，y = 60",Q034P1=1；Q034P2=0；Q034P3=0\r
DR0672,D33,Q039,T03,N02,D33-N02-Q039,1,2026-06-17T09:15:36+08:00,已评分,1,1,x<5,,Q039P1=1\r
DR0673,D33,Q008,T01,N02,D33-N02-Q008,1,2026-06-17T09:16:47+08:00,已评分,1,1,是,,Q008P1=1\r
DR0674,D33,Q030,T02,N02,D33-N02-Q030,1,2026-06-17T09:18:44+08:00,已评分,1,1,3,,Q030P1=1\r
DR0675,D34,Q005,T01,N01,D34-N01-Q005,1,2026-01-20T10:44:12+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0676,D34,Q018,T01,N01,D34-N01-Q018,1,2026-01-20T10:50:08+08:00,已评分,2,3,对,"1. =2x-6-3x-3+x
2. =-9
3. 取x=1，值是-9，∴对",Q018P1=1；Q018P2=1；Q018P3=0\r
DR0677,D34,Q008,T01,N01,D34-N01-Q008,1,2026-01-20T10:50:56+08:00,已评分,1,1,是,,Q008P1=1\r
DR0678,D34,Q026,T02,N01,D34-N01-Q026,1,2026-01-20T10:52:15+08:00,已评分,1,1,是,,Q026P1=1\r
DR0679,D34,Q014,T01,N01,D34-N01-Q014,1,2026-01-20T11:10:11+08:00,已评分,0,3,3x+3人,"1. 女生有(2x+3)人
2. x+(2x+3)=3x+3",Q014P1=0；Q014P2=0；Q014P3=0\r
DR0680,D34,Q001,T01,N01,D34-N01-Q001,1,2026-01-20T11:12:24+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0681,D34,Q025,T02,N01,D34-N01-Q025,1,2026-01-20T11:17:01+08:00,已评分,2,3,x=23/5,"1. 3(x-1)+2(x+1)=24
2. 5x-1=24
3. 5x=23
4. x=23/5",Q025P1=1；Q025P2=1；Q025P3=0\r
DR0682,D34,Q027,T02,N01,D34-N01-Q027,1,2026-01-20T11:18:38+08:00,已评分,0,1,8.5,,Q027P1=0\r
DR0683,D34,Q010,T01,N01,D34-N01-Q010,1,2026-01-20T11:19:30+08:00,已评分,0,1,-4a-3,,Q010P1=0\r
DR0684,D34,Q007,T01,N01,D34-N01-Q007,1,2026-01-20T11:20:55+08:00,已评分,0,1,10,,Q007P1=0\r
DR0685,D34,Q017,T01,N01,D34-N01-Q017,1,2026-01-20T11:22:37+08:00,已评分,0,1,-3x²y,,Q017P1=0\r
DR0686,D34,Q011,T01,N01,D34-N01-Q011,1,2026-01-20T11:32:39+08:00,已评分,0,3,3n+1,"1. (n-1)+n+(n+2)
2. =3n+1",Q011P1=0；Q011P2=0；Q011P3=0\r
DR0687,D34,Q045,T03,N02,D34-N02-Q045,1,2026-06-17T08:42:01+08:00,已评分,1,1,1<x<5,,Q045P1=1\r
DR0688,D34,Q029,T02,N02,D34-N02-Q029,1,2026-06-17T08:43:07+08:00,已评分,0,1,8,,Q029P1=0\r
DR0689,D34,Q002,T01,N02,D34-N02-Q002,1,2026-06-17T08:44:12+08:00,已评分,0,1,14,,Q002P1=0\r
DR0690,D34,Q038,T03,N02,D34-N02-Q038,1,2026-06-17T08:45:50+08:00,已评分,1,1,x≤5,,Q038P1=1\r
DR0691,D34,Q036,T02,N02,D34-N02-Q036,1,2026-06-17T08:52:41+08:00,已评分,0,3,鸡3只，兔7只,"1. 设鸡x只，兔y只
2. x+y=10，4x+2y=26
3. x=3，y=7",Q036P1=0；Q036P2=0；Q036P3=0\r
DR0692,D34,Q040,T03,N02,D34-N02-Q040,1,2026-06-17T08:58:23+08:00,已评分,0,3,x≤8/3,"1. 3x≤10-2
2. 3x≤8
3. x≤8/3
4. 8/3处实心点，向左",Q040P1=0；Q040P2=0；Q040P3=0\r
DR0693,D34,Q031,T02,N02,D34-N02-Q031,1,2026-06-17T09:00:59+08:00,已评分,0,3,x=10，y=-9,"1. 由②得y=1-x
2. 2x+1-x=11
3. x=10
4. y=1-10=-9",Q031P1=0；Q031P2=0；Q031P3=0\r
DR0694,D34,Q030,T02,N02,D34-N02-Q030,1,2026-06-17T09:05:48+08:00,已评分,0,1,4,,Q030P1=0\r
DR0695,D34,Q035,T02,N02,D34-N02-Q035,1,2026-06-17T09:07:45+08:00,已评分,1,1,2,,Q035P1=1\r
DR0696,D34,Q046,T03,N02,D34-N02-Q046,1,2026-06-17T09:13:39+08:00,已评分,1,3,x>2或x≤5,"1. x>2
2. x≤5
3. x>2或x≤5",Q046P1=1；Q046P2=0；Q046P3=0\r
DR0697,D34,Q034,T02,N02,D34-N02-Q034,1,2026-06-17T09:17:20+08:00,已评分,0,3,成人票20元，学生票30元,"1. 设成人票x元，学生票y元
2. 2x+y=70，x+2y=80
3. x=20，y=30",Q034P1=0；Q034P2=0；Q034P3=0\r
DR0698,D35,Q020,T02,N01,D35-N01-Q020,1,2026-01-20T10:47:34+08:00,已评分,1,1,6,,Q020P1=1\r
DR0699,D35,Q004,T01,N01,D35-N01-Q004,1,2026-01-20T10:49:13+08:00,已评分,1,1,5x-4,,Q004P1=1\r
DR0700,D35,Q008,T01,N01,D35-N01-Q008,1,2026-01-20T10:50:22+08:00,已评分,1,1,是,,Q008P1=1\r
DR0701,D35,Q025,T02,N01,D35-N01-Q025,1,2026-01-20T10:52:41+08:00,已评分,3,3,x=5,"1. 去分母得3(x - 1) + 2(x + 1) = 24。
2. 3x - 3 + 2x + 2 = 24。
3. 5x - 1 = 24。
4. 5x = 25，x = 5。
5. 检验：(5 - 1)/2 + (5 + 1)/3 = 2 + 2 = 4。",Q025P1=1；Q025P2=1；Q025P3=1\r
DR0702,D35,Q017,T01,N01,D35-N01-Q017,1,2026-01-20T10:53:23+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0703,D35,Q009,T01,N01,D35-N01-Q009,1,2026-01-20T10:57:20+08:00,已评分,0,3,5x+2,"1. 原式=6x - 2 - x + 4。
2. =5x + 2。",Q009P1=0；Q009P2=0；Q009P3=0\r
DR0704,D35,Q039,T03,N02,D35-N02-Q039,1,2026-06-17T08:41:19+08:00,已评分,0,1,x>5,,Q039P1=0\r
DR0705,D35,Q030,T02,N02,D35-N02-Q030,1,2026-06-17T08:44:05+08:00,已评分,1,1,3,,Q030P1=1\r
DR0706,D35,Q011,T01,N02,D35-N02-Q011,1,2026-06-17T08:56:21+08:00,已评分,1,3,3n+2,"1. (n - 1) + n + (n + 1)。
2. =3n + 2。",Q011P1=1；Q011P2=0；Q011P3=0\r
DR0707,D35,Q028,T02,N02,D35-N02-Q028,1,2026-06-17T09:01:23+08:00,已评分,3,3,"x=6,y=3","1. ①+②得2x = 12。
2. x = 6。
3. 把x = 6代入①，得y = 3。
4. ∴x = 6，y = 3。
5. 验算：两个方程都成立。",Q028P1=1；Q028P2=1；Q028P3=1\r
DR0708,D36,Q009,T01,N01,D36-N01-Q009,1,2026-01-20T10:51:04+08:00,已评分,3,3,5x-6,"1. 6x-2-x-4。
2. =(6x-x)+(-2-4)。
3. =5x-6。",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0709,D36,Q005,T01,N01,D36-N01-Q005,1,2026-01-20T10:52:23+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0710,D36,Q015,T01,N01,D36-N01-Q015,1,2026-01-20T11:00:00+08:00,已评分,3,3,4a-7b,"1. 原式=6a-3b-2a-4b。
2. =(6a-2a)+(-3b-4b)。
3. =4a-7b。",Q015P1=1；Q015P2=1；Q015P3=1\r
DR0711,D36,Q026,T02,N01,D36-N01-Q026,1,2026-01-20T11:03:14+08:00,已评分,1,1,是,,Q026P1=1\r
DR0712,D36,Q027,T02,N01,D36-N01-Q027,1,2026-01-20T11:06:14+08:00,已评分,1,1,6,,Q027P1=1\r
DR0713,D36,Q013,T01,N01,D36-N01-Q013,1,2026-01-20T11:07:16+08:00,已评分,1,1,5,,Q013P1=1\r
DR0714,D36,Q003,T01,N01,D36-N01-Q003,1,2026-01-20T11:09:32+08:00,已评分,1,1,B,,Q003P1=1\r
DR0715,D36,Q024,T02,N01,D36-N01-Q024,1,2026-01-20T11:10:59+08:00,已评分,1,1,9,,Q024P1=1\r
DR0716,D36,Q002,T01,N01,D36-N01-Q002,1,2026-01-20T11:11:50+08:00,已评分,1,1,11,,Q002P1=1\r
DR0717,D36,Q018,T01,N01,D36-N01-Q018,1,2026-01-20T11:23:07+08:00,已评分,2,3,-9,"1. 2(x-3)-3(x+1)+x。
2. =2x-6-3x-3+x。
3. =-9。",Q018P1=1；Q018P2=1；Q018P3=0\r
DR0718,D36,Q023,T02,N01,D36-N01-Q023,1,2026-01-20T11:24:33+08:00,已评分,0,1,14,,Q023P1=0\r
DR0719,D36,Q028,T02,N02,D36-N02-Q028,1,2026-06-17T08:43:39+08:00,已评分,2,3,x=6，y=3,"1. 两式相加，2x=12。
2. x=6。
3. 把x=6代入①，得y=3。
4. ∴x=6，y=3。",Q028P1=1；Q028P2=1；Q028P3=0\r
DR0720,D36,Q034,T02,N02,D36-N02-Q034,1,2026-06-17T08:52:27+08:00,已评分,3,3,成人票30元，学生票20元,"1. 设成人票x元，学生票y元。
2. 2x+y=80，x+2y=70。
3. 由①得y=80-2x，代入②：3x=90。
4. x=30，y=20。
5. 答：成人票30元，学生票20元。
6. 验算：两个条件都满足。",Q034P1=1；Q034P2=1；Q034P3=1\r
DR0721,D36,Q031,T02,N02,D36-N02-Q031,1,2026-06-17T09:02:02+08:00,已评分,3,3,x=4，y=3,"1. 由②得y=x-1。
2. 代入①：2x+x-1=11。
3. 3x=12，x=4。
4. y=4-1=3。
5. 检验：代入两个方程都成立。",Q031P1=1；Q031P2=1；Q031P3=1\r
DR0722,D36,Q045,T03,N02,D36-N02-Q045,1,2026-06-17T09:02:46+08:00,已评分,1,1,1<x<5,,Q045P1=1\r
DR0723,D36,Q040,T03,N02,D36-N02-Q040,1,2026-06-17T09:07:10+08:00,已评分,3,3,x≤4，4处实心点向左,"1. 3x≤10+2。
2. 3x≤12。
3. x≤4。
4. 在4处点实心点，向左画。",Q040P1=1；Q040P2=1；Q040P3=1\r
DR0724,D36,Q035,T02,N02,D36-N02-Q035,1,2026-06-17T09:08:24+08:00,已评分,1,1,2,,Q035P1=1\r
DR0725,D36,Q043,T03,N02,D36-N02-Q043,1,2026-06-17T09:21:00+08:00,已评分,1,3,x<-4,"1. -2x<11-3。
2. -2x<8。
3. x<-4。",Q043P1=1；Q043P2=0；Q043P3=0\r
DR0726,D36,Q042,T03,N02,D36-N02-Q042,1,2026-06-17T09:22:36+08:00,已评分,1,1,>,,Q042P1=1\r
DR0727,D36,Q049,T03,N02,D36-N02-Q049,1,2026-06-17T09:28:08+08:00,已评分,3,3,2≤x<3,"1. 解①：2x≥4，x≥2。
2. 由②得x<3。
3. 所以2≤x<3。",Q049P1=1；Q049P2=1；Q049P3=1\r
DR0728,D37,Q017,T01,N01,D37-N01-Q017,1,2026-01-20T10:44:35+08:00,已评分,0,1,3x²y,,Q017P1=0\r
DR0729,D37,Q012,T01,N01,D37-N01-Q012,1,2026-01-20T10:46:11+08:00,已评分,0,1,2x+9,,Q012P1=0\r
DR0730,D37,Q004,T01,N01,D37-N01-Q004,1,2026-01-20T10:48:43+08:00,已评分,0,1,9x-4,,Q004P1=0\r
DR0731,D37,Q001,T01,N01,D37-N01-Q001,1,2026-01-20T10:51:12+08:00,已评分,0,1,3(x+2),,Q001P1=0\r
DR0732,D37,Q026,T02,N01,D37-N01-Q026,1,2026-01-20T10:52:06+08:00,已评分,0,1,否,,Q026P1=0\r
DR0733,D37,Q002,T01,N01,D37-N01-Q002,1,2026-01-20T10:53:00+08:00,已评分,0,1,10,,Q002P1=0\r
DR0734,D37,Q043,T03,N02,D37-N02-Q043,1,2026-06-17T08:39:28+08:00,已评分,1,3,x<-4,"1. -2x < 11 - 3。
2. -2x < 8。
3. x < -4。",Q043P1=1；Q043P2=0；Q043P3=0\r
DR0735,D37,Q034,T02,N02,D37-N02-Q034,1,2026-06-17T08:43:43+08:00,已评分,1,3,成人票10元，学生票60元,"1. 设成人票x元，学生票y元。
2. 2x + y = 80，x + 2y = 70。
3. y = 80 - 2x，代入：x + 80 - 2x = 70。
4. x = 10，y = 60。",Q034P1=1；Q034P2=0；Q034P3=0\r
DR0736,D37,Q004,T01,N02,D37-N02-Q004,1,2026-06-17T08:46:01+08:00,已评分,0,1,9x-4,,Q004P1=0\r
DR0737,D37,Q049,T03,N02,D37-N02-Q049,1,2026-06-17T08:50:09+08:00,已评分,2,3,x≥2或x<3,"1. x ≥ 2。
2. x < 3。
3. x ≥ 2或x < 3。",Q049P1=1；Q049P2=1；Q049P3=0\r
DR0738,D37,Q029,T02,N02,D37-N02-Q029,1,2026-06-17T08:52:41+08:00,已评分,0,1,6,,Q029P1=0\r
DR0739,D37,Q040,T03,N02,D37-N02-Q040,1,2026-06-17T09:03:27+08:00,已评分,2,3,x≤4，4处空心点向左,"1. 3x ≤ 12。
2. x ≤ 4。
3. 4处画空心圈，向左。",Q040P1=1；Q040P2=1；Q040P3=0\r
DR0740,D37,Q044,T03,N02,D37-N02-Q044,1,2026-06-17T09:04:19+08:00,已评分,0,1,C,,Q044P1=0\r
DR0741,D38,Q001,T01,N01,D38-N01-Q001,1,2026-01-20T10:44:50+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0742,D38,Q016,T01,N01,D38-N01-Q016,1,2026-01-20T10:47:36+08:00,已评分,0,1,2a+2b,,Q016P1=0\r
DR0743,D38,Q022,T02,N01,D38-N01-Q022,1,2026-01-20T10:52:01+08:00,已评分,2,3,x=11,"1. 解：3x - 6 = 2x + 5
2. 3x - 2x = 5 + 6
3. x = 11",Q022P1=1；Q022P2=1；Q022P3=0\r
DR0744,D38,Q009,T01,N01,D38-N01-Q009,1,2026-01-20T10:59:07+08:00,未作答,,3,,,\r
DR0745,D38,Q008,T01,N01,D38-N01-Q008,1,2026-01-20T11:01:08+08:00,已评分,1,1,是,,Q008P1=1\r
DR0746,D38,Q023,T02,N01,D38-N01-Q023,1,2026-01-20T11:02:29+08:00,已评分,0,1,14,,Q023P1=0\r
DR0747,D38,Q021,T02,N01,D38-N01-Q021,1,2026-01-20T11:03:38+08:00,已评分,1,1,B,,Q021P1=1\r
DR0748,D38,Q024,T02,N01,D38-N01-Q024,1,2026-01-20T11:06:30+08:00,已评分,1,1,x=9,,Q024P1=1\r
DR0749,D38,Q027,T02,N01,D38-N01-Q027,1,2026-01-20T11:08:00+08:00,已评分,1,1,6,,Q027P1=1\r
DR0750,D38,Q006,T01,N01,D38-N01-Q006,1,2026-01-20T11:11:19+08:00,已评分,3,3,(4x+6)厘米,"1. 解：周长=(长+宽)×2
2. C = 2[(x + 3) + x]
3. =4x + 6",Q006P1=1；Q006P2=1；Q006P3=1\r
DR0751,D38,Q038,T03,N02,D38-N02-Q038,1,2026-06-17T08:35:00+08:00,已评分,1,1,x≤5,,Q038P1=1\r
DR0752,D38,Q043,T03,N02,D38-N02-Q043,1,2026-06-17T08:38:02+08:00,已评分,1,3,x<-4,"1. 解：-2x < 11 - 3
2. -2x < 8
3. x < -4",Q043P1=1；Q043P2=0；Q043P3=0\r
DR0753,D38,Q053,T03,N02,D38-N02-Q053,1,2026-06-17T08:39:46+08:00,已评分,1,1,-2≤x<3,,Q053P1=1\r
DR0754,D38,Q002,T01,N02,D38-N02-Q002,1,2026-06-17T08:40:43+08:00,已评分,1,1,11,,Q002P1=1\r
DR0755,D38,Q016,T01,N02,D38-N02-Q016,1,2026-06-17T08:43:10+08:00,已评分,1,1,2b,,Q016P1=1\r
DR0756,D38,Q041,T03,N02,D38-N02-Q041,1,2026-06-17T08:45:00+08:00,已评分,0,1,x>-3,,Q041P1=0\r
DR0757,D38,Q035,T02,N02,D38-N02-Q035,1,2026-06-17T08:45:39+08:00,已评分,0,1,13,,Q035P1=0\r
DR0758,D38,Q009,T01,N02,D38-N02-Q009,1,2026-06-17T08:51:00+08:00,已评分,3,3,5x-6,"1. 解：6x - 2 - x - 4
2. =5x - 6",Q009P1=1；Q009P2=1；Q009P3=1\r
DR0759,D38,Q042,T03,N02,D38-N02-Q042,1,2026-06-17T08:52:16+08:00,已评分,0,1,<,,Q042P1=0\r
DR0760,D38,Q049,T03,N02,D38-N02-Q049,1,2026-06-17T08:57:23+08:00,已评分,1,3,x>3,"1. 解：x ≥ 2
2. -x > -3，x > 3
3. ∴x > 3",Q049P1=1；Q049P2=0；Q049P3=0\r
DR0761,D38,Q028,T02,N02,D38-N02-Q028,1,2026-06-17T09:01:49+08:00,已评分,3,3,"x=6,y=3","1. 解：两式相加，2x = 12
2. x = 6
3. 代入x + y = 9，得y = 3
4. ∴x = 6，y = 3
5. 验算：两个方程都成立",Q028P1=1；Q028P2=1；Q028P3=1\r
DR0762,D38,Q012,T01,N02,D38-N02-Q012,1,2026-06-17T09:03:49+08:00,已评分,1,1,-2x+9,,Q012P1=1\r
DR0763,D38,Q033,T02,N02,D38-N02-Q033,1,2026-06-17T09:04:30+08:00,已评分,1,1,2x+3y=17,,Q033P1=1\r
DR0764,D39,Q018,T01,N01,D39-N01-Q018,1,2026-01-20T10:45:05+08:00,已评分,2,3,对,"1. 解：=2x-6-3x-3+x。
2. =-9。
3. 取x=1，值是-9，所以对。",Q018P1=1；Q018P2=1；Q018P3=0\r
DR0765,D39,Q016,T01,N01,D39-N01-Q016,1,2026-01-20T10:46:08+08:00,已评分,1,1,2b,,Q016P1=1\r
DR0766,D39,Q007,T01,N01,D39-N01-Q007,1,2026-01-20T10:51:20+08:00,已评分,0,1,-10,,Q007P1=0\r
DR0767,D39,Q001,T01,N01,D39-N01-Q001,1,2026-01-20T10:53:17+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0768,D39,Q023,T02,N01,D39-N01-Q023,1,2026-01-20T10:56:53+08:00,已评分,0,1,-2,,Q023P1=0\r
DR0769,D39,Q005,T01,N01,D39-N01-Q005,1,2026-01-20T10:57:52+08:00,已评分,1,1,3a+6,,Q005P1=1\r
DR0770,D39,Q020,T02,N01,D39-N01-Q020,1,2026-01-20T10:59:23+08:00,已评分,0,1,54,,Q020P1=0\r
DR0771,D39,Q021,T02,N01,D39-N01-Q021,1,2026-01-20T11:00:30+08:00,已评分,0,1,D,,Q021P1=0\r
DR0772,D39,Q006,T01,N01,D39-N01-Q006,1,2026-01-20T11:09:22+08:00,已评分,0,3,3x+6厘米,"1. 解：周长=2×长+宽。
2. 2(x+3)+x。
3. =2x+6+x。
4. =3x+6。",Q006P1=0；Q006P2=0；Q006P3=0\r
DR0773,D39,Q025,T02,N01,D39-N01-Q025,1,2026-01-20T11:13:47+08:00,已评分,0,3,x=1,"1. 解：3(x-1)+2(x+1)=4。
2. 5x-1=4。
3. x=1。",Q025P1=0；Q025P2=0；Q025P3=0\r
DR0774,D39,Q002,T01,N01,D39-N01-Q002,1,2026-01-20T11:15:07+08:00,已评分,0,1,10,,Q002P1=0\r
DR0775,D39,Q010,T01,N01,D39-N01-Q010,1,2026-01-20T11:18:23+08:00,已评分,0,1,4a+6,,Q010P1=0\r
DR0776,D39,Q011,T01,N01,D39-N01-Q011,1,2026-01-20T11:21:41+08:00,已评分,2,3,3n，比3大,"1. 解：(n-1)+n+(n+1)。
2. =3n。
3. 3n比3大。",Q011P1=1；Q011P2=1；Q011P3=0\r
DR0777,D39,Q027,T02,N01,D39-N01-Q027,1,2026-01-20T11:22:30+08:00,已评分,0,1,12,,Q027P1=0\r
DR0778,D39,Q003,T01,N01,D39-N01-Q003,1,2026-01-20T11:23:34+08:00,已评分,1,1,B,,Q003P1=1\r
DR0779,D39,Q008,T01,N02,D39-N02-Q008,1,2026-06-17T08:37:44+08:00,已评分,0,1,否,,Q008P1=0\r
DR0780,D39,Q035,T02,N02,D39-N02-Q035,1,2026-06-17T08:40:24+08:00,已评分,1,1,2,,Q035P1=1\r
DR0781,D39,Q029,T02,N02,D39-N02-Q029,1,2026-06-17T08:41:34+08:00,已评分,0,1,6,,Q029P1=0\r
DR0782,D39,Q033,T02,N02,D39-N02-Q033,1,2026-06-17T08:45:51+08:00,已评分,0,1,2x+3y,,Q033P1=0\r
DR0783,D39,Q034,T02,N02,D39-N02-Q034,1,2026-06-17T08:51:50+08:00,已评分,2,3,成人票20元，学生票30元,"1. 设成人票x元，学生票y元。
2. 2x+y=80，x+2y=70。
3. 3x=90，x=30，y=20。",Q034P1=1；Q034P2=1；Q034P3=0\r
DR0784,D39,Q032,T02,N02,D39-N02-Q032,1,2026-06-17T08:53:19+08:00,已评分,0,1,3,,Q032P1=0\r
DR0785,D40,Q020,T02,N01,D40-N01-Q020,1,2026-01-20T10:43:19+08:00,已评分,0,1,15,,Q020P1=0\r
DR0786,D40,Q010,T01,N01,D40-N01-Q010,1,2026-01-20T10:45:29+08:00,已评分,0,1,-4a-3,,Q010P1=0\r
DR0787,D40,Q018,T01,N01,D40-N01-Q018,1,2026-01-20T10:51:59+08:00,已评分,2,3,对,"1. 解：=2x-6-3x-3+x。
2. =-9。
3. 取x=1，值是-9，所以对。",Q018P1=1；Q018P2=1；Q018P3=0\r
DR0788,D40,Q026,T02,N01,D40-N01-Q026,1,2026-01-20T10:54:52+08:00,已评分,0,1,否,,Q026P1=0\r
DR0789,D40,Q023,T02,N01,D40-N01-Q023,1,2026-01-20T10:56:00+08:00,已评分,1,1,7,,Q023P1=1\r
DR0790,D40,Q011,T01,N01,D40-N01-Q011,1,2026-01-20T11:03:45+08:00,已评分,2,3,3n,"1. 解：(n-1)+n+(n+1)。
2. =3n。",Q011P1=1；Q011P2=1；Q011P3=0\r
DR0791,D40,Q024,T02,N01,D40-N01-Q024,1,2026-01-20T11:06:12+08:00,已评分,0,1,3,,Q024P1=0\r
DR0792,D40,Q017,T01,N01,D40-N01-Q017,1,2026-01-20T11:08:04+08:00,已评分,1,1,-3x²y,,Q017P1=1\r
DR0793,D40,Q008,T01,N01,D40-N01-Q008,1,2026-01-20T11:10:23+08:00,已评分,0,1,否,,Q008P1=0\r
DR0794,D40,Q016,T01,N02,D40-N02-Q016,1,2026-06-17T08:39:19+08:00,已评分,1,1,2b,,Q016P1=1\r
DR0795,D40,Q038,T03,N02,D40-N02-Q038,1,2026-06-17T08:41:44+08:00,已评分,0,1,x<5,,Q038P1=0\r
DR0796,D40,Q001,T01,N02,D40-N02-Q001,1,2026-06-17T08:44:23+08:00,已评分,1,1,3x+2,,Q001P1=1\r
DR0797,D40,Q044,T03,N02,D40-N02-Q044,1,2026-06-17T08:46:18+08:00,已评分,1,1,B,,Q044P1=1\r
DR0798,D40,Q054,T03,N02,D40-N02-Q054,1,2026-06-17T08:51:17+08:00,已评分,1,3,25≤x<30,"1. 解：x-20≥5，x≥25。
2. x<30。
3. 25≤x<30。",Q054P1=1；Q054P2=0；Q054P3=0\r
DR0799,D40,Q037,T03,N02,D40-N02-Q037,1,2026-06-17T08:52:59+08:00,已评分,0,1,x>13,,Q037P1=0\r
DR0800,D40,Q032,T02,N02,D40-N02-Q032,1,2026-06-17T08:54:07+08:00,已评分,0,1,8,,Q032P1=0\r
DR0801,D40,Q047,T03,N02,D40-N02-Q047,1,2026-06-17T08:55:51+08:00,已评分,0,1,-1<x≤4,,Q047P1=0\r
DR0802,D40,Q030,T02,N02,D40-N02-Q030,1,2026-06-17T08:57:04+08:00,已评分,0,1,4,,Q030P1=0\r
DR0803,D40,Q034,T02,N02,D40-N02-Q034,1,2026-06-17T09:06:53+08:00,已评分,0,3,成人票20元，学生票30元,"1. 设成人票x元，学生票y元。
2. 2x+y=70，x+2y=80。
3. x=20，y=30。",Q034P1=0；Q034P2=0；Q034P3=0\r
DR0804,D40,Q035,T02,N02,D40-N02-Q035,1,2026-06-17T09:08:19+08:00,已评分,0,1,-2,,Q035P1=0\r
DR0805,D40,Q010,T01,N02,D40-N02-Q010,1,2026-06-17T09:11:01+08:00,已评分,0,1,4a+6,,Q010P1=0\r
DR0806,D40,Q036,T02,N02,D40-N02-Q036,1,2026-06-17T09:19:48+08:00,已评分,1,3,鸡2只，兔8只,"1. 设鸡x只，兔y只。
2. x+y=10，2x+4y=26。
3. ②-①×2：2y=16。
4. y=8，x=2。",Q036P1=1；Q036P2=0；Q036P3=0\r
`,Dd=`\uFEFF材料编号,主题编号,材料类型,题型,题干或内容,选项,参考答案,参考解析,满分,评分点,指标编号,来源或资料文件\r
Q001,T01,题目,填空题,每支笔x元，买3支笔另付2元包装费，共需多少元？用代数式表示。,,3x+2,三支笔共3x元，再加2元。,1,Q001P1 答案正确 1分,T01I1,赛事新编\r
Q002,T01,题目,填空题,x=4时，代数式2x+3的值是多少？,,11,代入x=4，2×4+3=11。,1,Q002P1 答案正确 1分,T01I1,赛事新编\r
Q003,T01,题目,选择题,下列哪一组是同类项？,"A. 3x与3x²
B. 3x与-2x
C. x与xy
D. 2与2x",B,3x与-2x的字母及其指数相同。,1,Q003P1 答案正确 1分,T01I2,赛事新编\r
Q004,T01,题目,填空题,化简5x-2x+2x-4。,,5x-4,同类项系数5-2+2=5。,1,Q004P1 答案正确 1分,T01I2,赛事新编\r
Q005,T01,题目,填空题,去括号：3(a+2)=？,,3a+6,3分别乘括号内两项。,1,Q005P1 答案正确 1分,T01I2,赛事新编\r
Q006,T01,题目,解答题,长方形的长为(x+3)厘米，宽为x厘米，用含x的整式表示它的周长。,,4x+6厘米,周长是长与宽之和的2倍；C=2[(x+3)+x]=2(2x+3)；C=4x+6厘米。,3,"Q006P1 写出周长关系 1分
Q006P2 正确列出周长算式 1分
Q006P3 合并同类项并写单位 1分",T01I1,赛事新编\r
Q007,T01,题目,填空题,x=-2时，x²+3x的值是多少？,,-2,(-2)²+3×(-2)=4-6=-2。,1,Q007P1 答案正确 1分,T01I1,赛事新编\r
Q008,T01,题目,填空题,4m与-3m是否为同类项？回答“是”或“否”。,,是,字母及指数相同。,1,Q008P1 答案正确 1分,T01I2,赛事新编\r
Q009,T01,题目,解答题,化简：2(3x-1)-(x+4)。,,5x-6,去括号得6x-2-x-4；6x-x=5x，-2-4=-6；结果为5x-6。,3,"Q009P1 按法则去括号 1分
Q009P2 合并同类项 1分
Q009P3 写出正确化简结果 1分",T01I2,赛事新编\r
Q010,T01,题目,填空题,去括号：-2(2a-3)=？,,-4a+6,-2乘-3应得+6。,1,Q010P1 答案正确 1分,T01I2,赛事新编\r
Q011,T01,题目,解答题,设n为整数，求三个连续整数n-1、n、n+1的和，并说明这个和与3有什么关系。,,3n，是3的倍数,和为(n-1)+n+(n+1)；合并得3n；n为整数，所以和是3的倍数。,3,"Q011P1 列出三个数的和 1分
Q011P2 正确化简 1分
Q011P3 由n为整数解释倍数关系 1分",T01I3,赛事新编\r
Q012,T01,题目,填空题,化简3x+2-5x+7。,,-2x+9,x项得-2x，常数项得9。,1,Q012P1 答案正确 1分,T01I2,赛事新编\r
Q013,T01,题目,填空题,a=2，b=-1时，2a-b的值是多少？,,5,2×2-(-1)=5。,1,Q013P1 答案正确 1分,T01I1,赛事新编\r
Q014,T01,题目,解答题,某班男生有x人，女生人数比男生人数的2倍少3人。用含x的整式表示全班人数。,,3x-3人,女生人数是2x-3人；全班人数=x+(2x-3)；合并得3x-3人。,3,"Q014P1 表示女生人数 1分
Q014P2 列出全班人数之和 1分
Q014P3 合并同类项并写单位 1分",T01I1,赛事新编\r
Q015,T01,题目,解答题,化简：3(2a-b)-2(a+2b)。,,4a-7b,去括号得6a-3b-2a-4b；a项6a-2a=4a；b项-3b-4b=-7b；结果为4a-7b。,3,"Q015P1 正确去两个括号 1分
Q015P2 分别合并a项和b项 1分
Q015P3 写出正确结果 1分",T01I2,赛事新编\r
Q016,T01,题目,填空题,化简(a+b)-(a-b)。,,2b,去括号后a+b-a+b=2b。,1,Q016P1 答案正确 1分,T01I2,赛事新编\r
Q017,T01,题目,填空题,化简2x²y-5x²y。,,-3x²y,相同字母部分保留，系数2-5=-3。,1,Q017P1 答案正确 1分,T01I2,赛事新编\r
Q018,T01,题目,解答题,小明说：“无论x取什么值，代数式2(x-3)-3(x+1)+x的值都等于-9。”他的说法对吗？请说明理由。,,对；化简结果为-9，与x的取值无关,去括号得2x-6-3x-3+x；合并同类项得-9；结果不含x，所以无论x取何值，代数式的值都是-9，说法正确。,3,"Q018P1 正确去括号 1分
Q018P2 合并同类项得到-9 1分
Q018P3 说明结果与x无关并作出判断 1分",T01I3,赛事新编\r
Q019,T02,题目,填空题,解方程x+7=12，x=？,,5,等式两边减7，x=5。,1,Q019P1 答案正确 1分,T02I1,赛事新编\r
Q020,T02,题目,填空题,解方程3x=18，x=？,,6,等式两边除以3。,1,Q020P1 答案正确 1分,T02I1,赛事新编\r
Q021,T02,题目,选择题,方程2(x-1)=8去括号后正确的是哪项？,"A. 2x-1=8
B. 2x-2=8
C. 2x+2=8
D. x-2=8",B,2乘括号内的x和-1。,1,Q021P1 答案正确 1分,T02I1,赛事新编\r
Q022,T02,题目,解答题,解方程：3(x-2)=2x+5。,,x=11,去括号得3x-6=2x+5；移项得3x-2x=5+6；x=11，代回两边均为27。,3,"Q022P1 正确去括号 1分
Q022P2 移项并合并同类项 1分
Q022P3 求解并核对 1分",T02I1,赛事新编\r
Q023,T02,题目,填空题,解方程2x-5=9，x=？,,7,2x=14，所以x=7。,1,Q023P1 答案正确 1分,T02I1,赛事新编\r
Q024,T02,题目,填空题,解方程x/3+2=5，x=？,,9,x/3=3，所以x=9。,1,Q024P1 答案正确 1分,T02I1,赛事新编\r
Q025,T02,题目,解答题,解方程：(x-1)/2+(x+1)/3=4。,,x=5,同乘6得3(x-1)+2(x+1)=24；展开得5x-1=24；5x=25，x=5。,3,"Q025P1 正确去分母 1分
Q025P2 去括号并合并 1分
Q025P3 求解并检验 1分",T02I1,赛事新编\r
Q026,T02,题目,填空题,x=3是否为方程2x+1=7的解？回答“是”或“否”。,,是,代入左边得7，与右边相等。,1,Q026P1 答案正确 1分,T02I1,赛事新编\r
Q027,T02,题目,填空题,某数的2倍再加5等于17，这个数是多少？,,6,设x，2x+5=17，x=6。,1,Q027P1 答案正确 1分,T02I3,赛事新编\r
Q028,T02,题目,解答题,解方程组：x+y=9，x-y=3。,,x=6，y=3,两式相加得2x=12；x=6，代入x+y=9得y=3；解为x=6，y=3，两式均成立。,3,"Q028P1 正确选择消元关系 1分
Q028P2 求出一个未知数并回代 1分
Q028P3 给出并核验两个解 1分",T02I2,赛事新编\r
Q029,T02,题目,填空题,方程组x+y=7，x-y=1中的x是多少？,,4,两式相加得2x=8。,1,Q029P1 答案正确 1分,T02I2,赛事新编\r
Q030,T02,题目,填空题,方程组x+2y=8、x=2中的y是多少？,,3,代入2+2y=8，y=3。,1,Q030P1 答案正确 1分,T02I2,赛事新编\r
Q031,T02,题目,解答题,解方程组：2x+y=11，x-y=1。,,x=4，y=3,由x-y=1得y=x-1；代入2x+y=11得3x-1=11，x=4；y=3，原方程组成立。,3,"Q031P1 正确建立消元步骤 1分
Q031P2 求出x 1分
Q031P3 回代求y并核验 1分",T02I2,赛事新编\r
Q032,T02,题目,填空题,方程组x+y=12、x=2y中的y是多少？,,4,3y=12，所以y=4。,1,Q032P1 答案正确 1分,T02I2,赛事新编\r
Q033,T02,题目,填空题,钢笔每支x元，练习本每本y元。买两支钢笔和三本练习本共用17元，列出x、y满足的等量关系式。,,2x+3y=17,总价为数量乘单价后相加。,1,Q033P1 答案正确 1分,T02I3,赛事新编\r
Q034,T02,题目,解答题,两张成人票和一张学生票共80元，一张成人票和两张学生票共70元。成人票、学生票的单价各是多少元？,,成人票30元，学生票20元,设成人票x元、学生票y元，2x+y=80，x+2y=70；消元得x=30，y=20；成人票30元，学生票20元，代回均符合。,3,"Q034P1 设未知数并列出两式 1分
Q034P2 正确消元求值 1分
Q034P3 解释并核验票价 1分",T02I3,赛事新编\r
Q035,T02,题目,填空题,方程组x+y=5，2x+y=8中的y是多少？,,2,两式相减得x=3，代入x+y=5得y=2。,1,Q035P1 答案正确 1分,T02I2,赛事新编\r
Q036,T02,题目,解答题,笼中鸡和兔共10只，共有26只脚。鸡和兔各有多少只？,,鸡7只，兔3只,设鸡x只、兔y只，x+y=10，2x+4y=26；由方程组得y=3，x=7；鸡7只兔3只，脚数14+12=26。,3,"Q036P1 设未知数并列数量关系 1分
Q036P2 消元求两种数量 1分
Q036P3 检验实际意义 1分",T02I3,赛事新编\r
Q037,T03,题目,填空题,解不等式x+4>9，写出解集。,,x>5,两边减4。,1,Q037P1 答案正确 1分,T03I1,赛事新编\r
Q038,T03,题目,填空题,解不等式2x≤10，写出解集。,,x≤5,两边除以正数2，方向不变。,1,Q038P1 答案正确 1分,T03I1,赛事新编\r
Q039,T03,题目,填空题,解不等式x-3<2，写出解集。,,x<5,两边加3。,1,Q039P1 答案正确 1分,T03I1,赛事新编\r
Q040,T03,题目,解答题,解不等式3x-2≤10，并说明解集在数轴上如何表示。,,x≤4，4处实心点向左,两边加2得3x≤12；两边除以3得x≤4；数轴上4处实心点，向左表示。,3,"Q040P1 正确移项 1分
Q040P2 求出解集 1分
Q040P3 正确说明端点与方向 1分",T03I1,赛事新编\r
Q041,T03,题目,填空题,解不等式-2x>6，写出解集。,,x<-3,除以负数-2，不等号方向改变。,1,Q041P1 答案正确 1分,T03I1,赛事新编\r
Q042,T03,题目,填空题,已知a<b，则-a与-b之间应填“>”“<”还是“=”？,,>,两边乘-1，不等号方向改变。,1,Q042P1 答案正确 1分,T03I1,赛事新编\r
Q043,T03,题目,解答题,解不等式：-2x+3<11。,,x>-4,两边减3得-2x<8；两边除以-2，不等号反向；解集为x>-4；取x=0可检验。,3,"Q043P1 正确移项 1分
Q043P2 除以负数时反向 1分
Q043P3 写出并核对解集 1分",T03I1,赛事新编\r
Q044,T03,题目,选择题,不等式组x≥-2，x<1的解集在数轴上应如何表示？,"A. -2处空心点、1处实心点，取两点之间
B. -2处实心点、1处空心点，取两点之间
C. -2处实心点向左、1处空心点向右
D. -2处空心点、1处空心点，取两点之间",B,x≥-2含端点-2，x<1不含端点1，公共部分在两点之间。,1,Q044P1 答案正确 1分,T03I2,赛事新编\r
Q045,T03,题目,填空题,同时满足x>1、x<5，写出公共解集。,,1<x<5,取两个解集交集。,1,Q045P1 答案正确 1分,T03I2,赛事新编\r
Q046,T03,题目,解答题,解不等式组：x+1>3，2x≤10。,,2<x≤5,由x+1>3得x>2；由2x≤10得x≤5；交集为2<x≤5。,3,"Q046P1 分别解出两个不等式 1分
Q046P2 取两个解集交集 1分
Q046P3 正确写出开闭端点 1分",T03I2,赛事新编\r
Q047,T03,题目,填空题,同时满足x≥-1、x<4，写出公共解集。,,-1≤x<4,左端点含-1，右端点不含4。,1,Q047P1 答案正确 1分,T03I2,赛事新编\r
Q048,T03,题目,填空题,不等式组x>3、x<2的解集是什么？,,无解,两个范围没有交集。,1,Q048P1 答案正确 1分,T03I2,赛事新编\r
Q049,T03,题目,解答题,解不等式组：2x-1≥3，3-x>0。,,2≤x<3,2x-1≥3得x≥2；3-x>0得x<3；交集为2≤x<3。,3,"Q049P1 正确求第一个解集 1分
Q049P2 正确求第二个解集 1分
Q049P3 取交集并说明端点 1分",T03I2,赛事新编\r
Q050,T03,题目,填空题,每张票5元，买x张的费用不超过30元，应列什么不等式？,,5x≤30,费用为5x，“不超过”对应≤。,1,Q050P1 答案正确 1分,T03I3,赛事新编\r
Q051,T03,题目,填空题,一件商品原价x元，优惠5元后价格不超过30元，应列什么不等式？,,x-5≤30,优惠后为x-5。,1,Q051P1 答案正确 1分,T03I3,赛事新编\r
Q052,T03,题目,解答题,班级计划至少收集60本书，现已有18本，其余由x名同学每人捐3本。至少还需要多少名同学捐书？,,14人,列出18+3x≥60；得3x≥42，x≥14；人数为整数，至少还需14人。,3,"Q052P1 正确列出至少关系 1分
Q052P2 解不等式 1分
Q052P3 结合人数取整数并解释 1分",T03I3,赛事新编\r
Q053,T03,题目,填空题,解复合不等式-3≤2x+1<7，写出解集。,,-2≤x<3,各部分同时减1再除以2。,1,Q053P1 答案正确 1分,T03I2,赛事新编\r
Q054,T03,题目,解答题,某商品成本为20元，售价为x元。要求每件至少获利5元，且售价不超过30元，求售价x的取值范围。,,25≤x≤30元,至少获利5元，x-20≥5，即x≥25；售价不超过30元，所以x≤30；两条件同时满足：25≤x≤30元。,3,"Q054P1 根据利润列下界 1分
Q054P2 根据售价列上界 1分
Q054P3 合并范围并解释 1分",T03I3,赛事新编\r
L01,T01,学习卡,,代数式与整式运算：先看数量关系；代入时连同负号加括号；去括号注意括号前的符号，最后合并同类项。,,,,,,T01I1、T01I2、T01I3,赛事新编\r
L02,T02,学习卡,,方程与方程组：保持等式两边同变；一元一次方程逐步化简；二元一次方程组选择代入或加减消元，并代回原题。,,,,,,T02I1、T02I2、T02I3,赛事新编\r
L03,T03,学习卡,,不等式与不等式组：两边乘除负数须反向；不等式组取公共解集；注意端点能否取到及现实数量限制。,,,,,,T03I1、T03I2、T03I3,赛事新编\r
B01,,教材,,七年级下册 第八章 实数,,,,,,,5_课程标准及相关教学资源/B01_相关资料切片.pdf\r
B02,,教材,,七年级下册 第十一章 不等式与不等式组,,,,,,,5_课程标准及相关教学资源/B02_相关资料切片.pdf\r
B03,,教材,,七年级下册 第十二章 数据的收集、整理与描述,,,,,,,5_课程标准及相关教学资源/B03_相关资料切片.pdf\r
B04,,教材,,七年级上册 第六章 几何图形初步,,,,,,,5_课程标准及相关教学资源/B04_相关资料切片.pdf\r
B05,,教材,,七年级上册 第三章 代数式；第四章 整式的加减,,,,,,,5_课程标准及相关教学资源/B05_相关资料切片.pdf\r
B06,,教材,,七年级上册 第五章 一元一次方程；七年级下册 第十章 二元一次方程组,,,,,,,5_课程标准及相关教学资源/B06_相关资料切片.pdf\r
B07,,教材,,七年级上册 第二章 有理数的运算,,,,,,,5_课程标准及相关教学资源/B07_相关资料切片.pdf\r
B08,,教材,,七年级下册 第七章 相交线与平行线,,,,,,,5_课程标准及相关教学资源/B08_相关资料切片.pdf\r
`,xd=`\uFEFF节点编号,模拟测验日期,已教及测量主题,说明,可用题目编号\r
N01,2026-01-20,T01、T02,模拟上学期期末：T01及T02中的一元一次方程；方程组和不等式尚未教学。,Q001、Q002、Q003、Q004、Q005、Q006、Q007、Q008、Q009、Q010、Q011、Q012、Q013、Q014、Q015、Q016、Q017、Q018、Q019、Q020、Q021、Q022、Q023、Q024、Q025、Q026、Q027\r
N02,2026-06-17,T01、T02、T03,模拟下学期期末：复习T01，新增T02方程组及T03不等式。,Q001、Q002、Q003、Q004、Q005、Q006、Q007、Q008、Q009、Q010、Q011、Q012、Q013、Q014、Q015、Q016、Q017、Q018、Q028、Q029、Q030、Q031、Q032、Q033、Q034、Q035、Q036、Q037、Q038、Q039、Q040、Q041、Q042、Q043、Q044、Q045、Q046、Q047、Q048、Q049、Q050、Q051、Q052、Q053、Q054\r
`,pd=`\uFEFF主题编号,主题,主题目标,指标编号,观察指标,课标整理编号,课标文件页／正文页,教材正文页\r
T01,代数式与整式运算,能用代数式表示简单数量关系、代入求值，并进行整式加减与解释。,T01I1,表示数量关系并代入求值,CR01,62／55,上册68—109\r
T01,代数式与整式运算,能用代数式表示简单数量关系、代入求值，并进行整式加减与解释。,T01I2,识别同类项、去括号并化简,CR01,62／55,上册68—109\r
T01,代数式与整式运算,能用代数式表示简单数量关系、代入求值，并进行整式加减与解释。,T01I3,用整式解释具体问题,CR01,62／55,上册68—109\r
T02,方程与方程组,能解一元一次方程和二元一次方程组，依据等量关系建立模型并检验答案。,T02I1,运用等式性质解一元一次方程,CR02,63／56,上册110—148；下册87—119\r
T02,方程与方程组,能解一元一次方程和二元一次方程组，依据等量关系建立模型并检验答案。,T02I2,用消元法解二元一次方程组,CR02,63／56,上册110—148；下册87—119\r
T02,方程与方程组,能解一元一次方程和二元一次方程组，依据等量关系建立模型并检验答案。,T02I3,列方程或方程组解决简单实际问题并检验,CR02,63／56,上册110—148；下册87—119\r
T03,不等式与不等式组,能解一元一次不等式及简单不等式组，表示解集，并解决范围约束问题。,T03I1,运用不等式性质求解，负数乘除时正确改变方向,CR03,63／56,下册120—145\r
T03,不等式与不等式组,能解一元一次不等式及简单不等式组，表示解集，并解决范围约束问题。,T03I2,求两个一元一次不等式解集的交集,CR03,63／56,下册120—145\r
T03,不等式与不等式组,能解一元一次不等式及简单不等式组，表示解集，并解决范围约束问题。,T03I3,根据实际限制列不等式并解释取值范围,CR03,63／56,下册120—145\r
`,Nd=`\uFEFF学生编号,模拟班级编号,年级\r
D01,DC01,7\r
D02,DC01,7\r
D03,DC01,7\r
D04,DC01,7\r
D05,DC01,7\r
D06,DC01,7\r
D07,DC01,7\r
D08,DC01,7\r
D09,DC01,7\r
D10,DC01,7\r
D11,DC01,7\r
D12,DC01,7\r
D13,DC01,7\r
D14,DC01,7\r
D15,DC01,7\r
D16,DC01,7\r
D17,DC01,7\r
D18,DC01,7\r
D19,DC01,7\r
D20,DC01,7\r
D21,DC01,7\r
D22,DC02,7\r
D23,DC02,7\r
D24,DC02,7\r
D25,DC02,7\r
D26,DC02,7\r
D27,DC02,7\r
D28,DC02,7\r
D29,DC02,7\r
D30,DC02,7\r
D31,DC02,7\r
D32,DC02,7\r
D33,DC02,7\r
D34,DC02,7\r
D35,DC02,7\r
D36,DC02,7\r
D37,DC02,7\r
D38,DC02,7\r
D39,DC02,7\r
D40,DC02,7\r
`;function Dt(e){const n=e.replace(/^\uFEFF/,""),t=[];let r=[],l="",i=!1;for(let s=0;s<n.length;s+=1){const u=n[s];i?u==='"'?n[s+1]==='"'?(l+='"',s+=1):i=!1:l+=u:u==='"'?i=!0:u===","?(r.push(l),l=""):u===`
`?(r.push(l),l="",t.push(r),r=[]):u!=="\r"&&(l+=u)}(l||r.length>0)&&(r.push(l),t.push(r));const o=t.shift().map(s=>s.trim());return t.filter(s=>s.some(u=>u!=="")).map(s=>Object.fromEntries(o.map((u,c)=>[u,(s[c]??"").trim()])))}const Td=Dt(Qd),xu=Dt(Dd),dl=Dt(Nd),pu=Dt(pd);Dt(xd);const hd=new Map(xu.map(e=>[e.材料编号,e])),Nu=["全部学生",...dl.map(e=>e.学生编号)],Tu=new Map(dl.map(e=>[e.学生编号,e.模拟班级编号])),h1=(()=>{const e=new Map;return dl.forEach(n=>{const t=n.模拟班级编号;e.set(t,(e.get(t)||0)+1)}),[...e.entries()].map(([n,t])=>({id:n,count:t}))})();[...new Set(pu.map(e=>e.主题))];const Me=pu.map(e=>{const n=e.指标编号;return{id:n,name:e.观察指标,topicId:e.主题编号,topicName:e.主题,requirement:e.主题目标,materials:xu.filter(t=>t.材料类型==="题目"&&(t.指标编号||"").split("、").includes(n)).map(t=>t.材料编号)}}),jn=new Map(Me.map(e=>[e.id,e])),xt=Td.map(e=>{const n=hd.get(e.材料编号);return{recordId:e.记录编号,studentId:e.学生编号,materialId:e.材料编号,topicId:e.主题编号,nodeId:e.节点编号,status:e.评分状态,scoreText:e.得分,score:e.得分===""?null:Number(e.得分),full:e.满分===""?null:Number(e.满分),submittedAt:e.模拟提交时间,finalAnswer:e.学生最终作答,kpIds:((n==null?void 0:n.指标编号)||"").split("、").filter(Boolean)}}),hu=xt.filter(e=>e.score===null),mu=xt.filter(e=>e.score!==null&&(e.full===null||e.full<=0||e.score<0||e.score>e.full)),m1=new Map;xt.forEach(e=>{const n=`${e.studentId}|${e.materialId}`,t=m1.get(n);(!t||e.submittedAt>t.submittedAt)&&m1.set(n,e)});const Pu=xt.filter(e=>m1.get(`${e.studentId}|${e.materialId}`)!==e),fl=[...m1.values()].filter(e=>e.status==="已评分"&&e.score!==null&&e.full!==null&&e.full>0&&e.score>=0&&e.score<=e.full),Ii=[{key:"total",label:"总记录",value:xt.length},{key:"missing",label:"缺失记录",value:hu.length},{key:"duplicate",label:"重复记录",value:Pu.length},{key:"abnormal",label:"异常记录",value:mu.length}],Li=[...mu.map(e=>({recordId:e.recordId,studentId:e.studentId,questionId:e.materialId,node:e.nodeId,type:"异常越界",status:"待修正"})),...hu.slice(0,4).map(e=>({recordId:e.recordId,studentId:e.studentId,questionId:e.materialId,node:e.nodeId,type:"缺失记录",status:e.status})),...Pu.slice(0,4).map(e=>({recordId:e.recordId,studentId:e.studentId,questionId:e.materialId,node:e.nodeId,type:"重复记录",status:"已合并"}))].slice(0,10),D2=new Map;fl.forEach(e=>{const n=D2.get(e.studentId)||[];n.push(e),D2.set(e.studentId,n)});function md(e){const n=D2.get(e)||[],t=Me.map(u=>{const c=n.filter(Q=>Q.kpIds.includes(u.id)),f=c.reduce((Q,m)=>Q+m.score,0),D=c.reduce((Q,m)=>Q+m.full,0);return{kpId:u.id,name:u.name,answered:c.length,score:f,full:D,accuracy:D>0?Math.round(f/D*100):null,records:c.map(Q=>({recordId:Q.recordId,materialId:Q.materialId,nodeId:Q.nodeId,score:Q.score,full:Q.full,submittedAt:Q.submittedAt}))}}),r=n.length,l=n.reduce((u,c)=>u+c.score,0),i=n.reduce((u,c)=>u+c.full,0),o=t.filter(u=>u.answered>0).length,s=Math.round(o/Me.length*100);return{studentId:e,classId:Tu.get(e)??"未分班",validAnswers:r,scoreTotal:l,fullTotal:i,overallAccuracy:i>0?Math.round(l/i*100):0,coverageRate:s,answeredKpCount:o,recordStatus:r>=12&&o>=6?"记录充足":"部分信息不足",kpStats:t,answeredMaterials:[...new Set(n.map(u=>u.materialId))]}}const Ql=new Map(Nu.slice(1).map(e=>[e,md(e)]));function yu(e){return Ql.get(e)??null}function vu(e,n){var m;const t=e.length,r=n.reduce((N,h)=>N+h.score,0),l=n.reduce((N,h)=>N+h.full,0),i=Me.map(N=>{const h=n.filter(d=>d.kpIds.includes(N.id)),y=h.reduce((d,x)=>d+x.score,0),p=h.reduce((d,x)=>d+x.full,0);return{kpId:N.id,name:N.name,answered:h.length,score:y,full:p,avg:p>0?Math.round(y/p*100):0}}),o=i.filter(N=>N.avg<60).sort((N,h)=>N.avg-h.avg),s=o.length?o:[...i].sort((N,h)=>N.avg-h.avg).slice(0,2),u={高:"安排 1 课时重讲核心概念，配套基础变式练习",中:"结合错题集中讲评，增加同类变式练习",低:"保持常规练习，关注个别学生的订正情况"},c=s.map(N=>{const h=N.avg<50?"高":N.avg<60?"中":"低";return{...N,level:h,evidence:`${N.answered} 条有效作答，平均正确率 ${N.avg}%`,teachingTip:u[h]}}),f=e.filter(N=>N.recordStatus==="记录充足"),D=e.filter(N=>N.recordStatus!=="记录充足"),Q=(N,h)=>{if(N.length===0)return{count:0,avgAnswers:0,avgAccuracy:0,coverage:0,risk:"暂无样本"};const y=N.reduce((x,T)=>x+T.validAnswers,0),p=N.reduce((x,T)=>x+T.scoreTotal,0),d=N.reduce((x,T)=>x+T.fullTotal,0);return{count:N.length,avgAnswers:Math.round(y/N.length),avgAccuracy:d>0?Math.round(p/d*100):0,coverage:Math.round(N.reduce((x,T)=>x+T.coverageRate,0)/N.length),risk:h}};return{classId:((m=e[0])==null?void 0:m.classId)??"",totalStudents:t,validTotal:n.length,overallAccuracy:l>0?Math.round(r/l*100):0,insufficientCount:D.length,kpStats:i,commonProblems:c,comparison:{sufficient:Q(f,"个别知识点正确率偏低，需针对性巩固"),insufficient:Q(D,"样本不足，暂不判定掌握情况，优先补采数据")}}}const Pd=vu([...Ql.values()],fl),yd=new Map(h1.map(e=>[e.id,vu([...Ql.values()].filter(n=>n.classId===e.id),fl.filter(n=>Tu.get(n.studentId)===e.id))]));function gu(e){return yd.get(e)??Pd}function zi(e,n){const t=new Set(n.answeredMaterials),r=e.materials.filter(l=>!t.has(l));return(r.length?r:e.materials).slice(0,2)}function vd(e,n){const t=new Map(n.kpStats.map(i=>[i.kpId,i.avg])),r=i=>{const o=jn.get(i.kpId);return{kpId:i.kpId,kpName:i.name,topicName:o.topicName,requirement:`【${o.topicName}】${o.requirement}`,answered:i.answered,score:i.score,full:i.full,accuracy:i.accuracy,classAvg:t.get(i.kpId)??0}},l=[];if(e.recordStatus==="记录充足")e.kpStats.filter(o=>o.answered>0).sort((o,s)=>o.accuracy-s.accuracy).slice(0,3).forEach(o=>{const s=jn.get(o.kpId),u=t.get(o.kpId)??0,c=o.accuracy<70;l.push({content:c?`巩固「${o.name}」：完成错题重练与变式训练`:`拓展「${o.name}」：完成综合应用题训练`,materials:zi(s,e),reason:`该知识点正确率 ${o.accuracy}%，${o.accuracy<u?"低于":"高于"}班级平均 ${u}%，${c?"建议优先巩固":"可在巩固基础上适度拓展"}。`,condition:c?"适用于已完成基础练习、可独立完成常规题的学生":"适用于基础题正确率稳定、需要提升综合运用的学生",teacherAdjustable:"可调整练习数量与难度，或替换为同知识点材料",evidence:r(o)})});else{e.kpStats.filter(s=>s.answered===0).slice(0,2).forEach(s=>{const u=jn.get(s.kpId);l.push({content:`完成「${s.name}」诊断性练习，补齐学习记录`,materials:u.materials.slice(0,2),reason:"该知识点暂无有效作答记录，信息不足，暂不判定掌握情况。",condition:"独立作答、不查看解析，建议 15 分钟内完成",teacherAdjustable:"可调整诊断题量与材料，优先覆盖未作答知识点",evidence:r(s)})});const o=e.kpStats.filter(s=>s.answered>0&&s.accuracy<60).sort((s,u)=>s.accuracy-u.accuracy)[0];if(o){const s=jn.get(o.kpId);l.push({content:`回顾「${o.name}」已作答题目，订正错误并说明思路`,materials:zi(s,e),reason:`该知识点已有 ${o.answered} 条记录，正确率 ${o.accuracy}%，需补充订正记录。`,condition:"在教师或同伴提示下完成订正，避免直接给出答案",teacherAdjustable:"可缩减题量，优先选择错题对应的基础题",evidence:r(o)})}if(l.length===0){const s=e.kpStats[0],u=jn.get(s.kpId);l.push({content:`完成「${s.name}」诊断性练习，补齐学习记录`,materials:u.materials.slice(0,2),reason:"当前有效记录不足，需补充诊断数据后再生成巩固建议。",condition:"独立作答，完成后由教师核对答题过程",teacherAdjustable:"可根据课堂进度调整诊断材料",evidence:r(s)})}}return l.map((i,o)=>({...i,id:`S${o+1}`,order:o+1,materialsText:i.materials.join("、"),teacherNote:""}))}const Ru=P.createContext(null);function gd({children:e}){const[n,t]=P.useState(""),[r,l]=P.useState("全部状态"),[i,o]=P.useState("全部学生"),[s,u]=P.useState(Ii),[c,f]=P.useState(Li),[D,Q]=P.useState(!1),[m,N]=P.useState(0),h=P.useRef(null);P.useEffect(()=>()=>window.clearTimeout(h.current),[]);const d={topic:n,setTopic:t,status:r,setStatus:l,studentId:i,setStudentId:o,metrics:s,rows:c,loading:D,reload:()=>{D||(Q(!0),h.current=window.setTimeout(()=>{f(Li),u(Ii),t(""),l("全部状态"),o("全部学生"),N(0),Q(!1)},600))},addRecord:()=>{const x=m+1,T={recordId:`SIM-${Date.now()}`,studentId:"D17",questionId:"Q044",node:"N02",type:"缺失记录",status:"待评分"};f(g=>[T,...g]),u(g=>g.map(R=>R.key==="total"||R.key==="missing"?{...R,value:R.value+1}:R)),N(x),o("全部学生"),l("全部状态")}};return a.jsx(Ru.Provider,{value:d,children:e})}function F1(){const e=P.useContext(Ru);if(!e)throw new Error("useAppState 必须在 AppStateProvider 内部使用");return e}const Rd=["全部状态","缺失记录","异常越界","重复记录"],wd=[{key:"missing",title:"缺失标记：",desc:"得分为空（待评分 / 未作答）→ 标记为信息不足，不参与正确率计算"},{key:"abnormal",title:"异常越界：",desc:"得分不在 [0, 满分] 范围内 → 标记为异常数据，排除统计"},{key:"duplicate",title:"重复合并：",desc:"同一学生同一题目多条记录 → 保留最新提交时间一条，其余标记为重复"}],kd={缺失记录:"bg-warn text-[#A9761C]",异常越界:"bg-danger text-[#B4544F]",重复记录:"bg-card text-muted"},U=(...e)=>e.filter(Boolean).join(" ");function Sd({className:e}){return a.jsx("svg",{viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",className:e,children:a.jsx("path",{d:"M3 4.5 6 7.5l3-3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Cd({className:e}){return a.jsx("svg",{viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",className:e,children:a.jsx("path",{d:"m2.5 6.2 2.3 2.3 4.7-5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}function Oi({ariaLabel:e,displayText:n,value:t,options:r,onChange:l,accent:i=!1,maxHeightClass:o="max-h-64"}){const[s,u]=P.useState(!1),c=P.useRef(null);return P.useEffect(()=>{if(!s)return;const f=Q=>{c.current&&!c.current.contains(Q.target)&&u(!1)},D=Q=>{Q.key==="Escape"&&u(!1)};return document.addEventListener("mousedown",f),document.addEventListener("keydown",D),()=>{document.removeEventListener("mousedown",f),document.removeEventListener("keydown",D)}},[s]),a.jsxs("div",{ref:c,className:"relative",children:[a.jsxs("button",{type:"button","aria-label":e,"aria-haspopup":"listbox","aria-expanded":s,onClick:()=>u(f=>!f),onKeyDown:f=>{(f.key==="ArrowDown"||f.key==="ArrowUp")&&(f.preventDefault(),u(!0))},className:U("flex h-10 w-full items-center justify-center gap-1.5 rounded-lg border bg-white px-3","text-[13px] transition-colors duration-150","focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40",i?"border-brand text-brand":"border-line text-ink hover:border-brand/70",s&&"border-brand ring-2 ring-brand/30"),children:[a.jsx("span",{className:"truncate",children:n}),a.jsx(Sd,{className:U("h-3.5 w-3.5 shrink-0 transition-transform duration-150",s&&"rotate-180")})]}),s&&a.jsx("ul",{role:"listbox","aria-label":e,className:U("absolute left-0 right-0 top-[42px] z-30 overflow-y-auto rounded-lg border border-line bg-white p-1 shadow-[0_8px_24px_rgba(51,68,66,0.12)]",o),children:r.map(f=>{const D=f===t;return a.jsx("li",{role:"presentation",children:a.jsxs("button",{type:"button",role:"option","aria-selected":D,onClick:()=>{l(f),u(!1)},className:U("flex w-full items-center justify-between rounded px-2.5 py-2 text-left","text-[13px] transition-colors",D?"bg-card font-medium text-brand":"text-ink hover:bg-card"),children:[a.jsx("span",{className:"truncate",children:f}),D&&a.jsx(Cd,{className:"h-3 w-3 shrink-0"})]})},f)})})]})}function jd(){const{pathname:e}=Fe(),{topic:n,setTopic:t,status:r,setStatus:l,studentId:i,setStudentId:o,loading:s,reload:u,addRecord:c}=F1(),f=dd.includes(e),D=!fd.includes(e);return a.jsxs("aside",{className:"relative z-10 flex w-[240px] shrink-0 flex-col gap-5 overflow-y-auto border-r border-line bg-page px-5 py-6",children:[a.jsxs("label",{className:"block",children:[a.jsx("span",{className:"sr-only",children:"学习主题"}),a.jsx("input",{type:"text",value:n,onChange:Q=>t(Q.target.value),placeholder:"学习主题",className:U("h-10 w-full rounded-lg border border-line bg-white px-3 text-center text-[13px]","text-ink placeholder:text-muted","transition-colors duration-150","focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30")})]}),D&&a.jsx(Oi,{ariaLabel:"记录状态筛选",displayText:`记录状态 · ${r}`,value:r,options:Rd,onChange:l}),a.jsxs("button",{type:"button",onClick:u,disabled:s,className:U("flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-line bg-white","text-[13px] text-ink transition-colors duration-150","hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-60"),children:[s&&a.jsx("span",{"aria-hidden":"true",className:"h-3.5 w-3.5 animate-spin rounded-full border-2 border-brand/30 border-t-brand"}),s?"加载中…":"重新加载数据集"]}),a.jsx("button",{type:"button",onClick:c,className:U("h-10 w-full rounded-lg border border-line bg-white text-[13px] text-ink","transition-colors duration-150 hover:border-brand hover:text-brand"),children:"模拟新增记录"}),f&&a.jsxs("div",{className:"space-y-2",children:[a.jsx(Oi,{ariaLabel:"学生 ID 筛选",displayText:`学生ID · ${i}`,value:i,options:Nu,onChange:o,accent:!0}),e==="/analysis"&&a.jsx("p",{className:"px-1 text-center text-[11px] leading-5 text-muted",children:"请选择一名学生查看个体学情"})]})]})}function Ed(){return a.jsx("header",{className:"h-14 shrink-0 bg-brand",children:a.jsx("nav",{"aria-label":"主导航",className:"grid h-full grid-cols-5",children:cd.map(e=>a.jsx(od,{to:e.path,end:e.path==="/",className:({isActive:n})=>U("flex h-full items-center justify-center text-sm transition-colors",n?"bg-white/25 font-semibold text-ink":"font-normal text-ink/85 hover:bg-white/15"),children:e.label},e.path))})})}function _d(){return a.jsxs("div",{className:"flex h-screen flex-col overflow-hidden bg-page text-ink",children:[a.jsx(Ed,{}),a.jsxs("div",{className:"flex min-h-0 flex-1",children:[a.jsx(jd,{}),a.jsx("main",{className:"min-w-0 flex-1 overflow-y-auto p-4",children:a.jsx(Kc,{})})]})]})}function Id({className:e}){return a.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:e,children:a.jsx("path",{d:"m4 4 8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function wu({open:e,title:n,onClose:t,children:r}){return P.useEffect(()=>{if(!e)return;const l=o=>{o.key==="Escape"&&t()},i=document.body.style.overflow;return document.body.style.overflow="hidden",document.addEventListener("keydown",l),()=>{document.body.style.overflow=i,document.removeEventListener("keydown",l)}},[e,t]),e?nu.createPortal(a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-6",onMouseDown:l=>{l.target===l.currentTarget&&t()},children:a.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":n,className:"max-h-[82vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-line bg-white shadow-[0_20px_60px_rgba(51,68,66,0.2)]",children:[a.jsxs("header",{className:"flex items-center justify-between gap-4 border-b border-line px-5 py-4",children:[a.jsx("h2",{className:"text-sm font-semibold text-ink",children:n}),a.jsx("button",{type:"button","aria-label":"关闭弹窗",onClick:t,className:"flex h-7 w-7 items-center justify-center rounded-md text-muted transition-colors hover:bg-card hover:text-ink",children:a.jsx(Id,{className:"h-4 w-4"})})]}),a.jsx("div",{className:"px-5 py-4",children:r})]})}),document.body):null}const Mi=e=>e.split(/[、,，\s]+/).filter(Boolean),Ai=e=>`"${String(e??"").replace(/"/g,'""')}"`;function Bi(e,n,t){const r=new Blob([n],{type:t}),l=URL.createObjectURL(r),i=document.createElement("a");i.href=l,i.download=e,i.click(),URL.revokeObjectURL(l)}function Ld(){const{studentId:e}=F1(),n=P.useMemo(()=>e==="全部学生"?null:yu(e),[e]),t=P.useMemo(()=>gu(n==null?void 0:n.classId),[n]),[r,l]=P.useState([]),[i,o]=P.useState(null);P.useEffect(()=>{l(n?vd(n,t):[]),o(null)},[e,n,t]);const s=(Q,m)=>{l(N=>N.map(h=>h.id===Q?{...h,...m}:h))},u=(Q,m)=>{const N=Q+m;N<0||N>=r.length||l(h=>{const y=[...h];return[y[Q],y[N]]=[y[N],y[Q]],y})},c=Q=>{o({...Q.evidence,materials:Mi(Q.materialsText)})},f=Q=>{if(!n||r.length===0)return;const m=r.map((y,p)=>({order:p+1,content:y.content,materials:Mi(y.materialsText),reason:y.reason,condition:y.condition,teacherAdjustable:y.teacherAdjustable,teacherNote:y.teacherNote.trim()}));if(Q==="json"){Bi(`学习建议_${n.studentId}.json`,JSON.stringify({studentId:n.studentId,recordStatus:n.recordStatus,validAnswers:n.validAnswers,suggestions:m},null,2),"application/json;charset=utf-8");return}const N=["执行顺序","建议学习内容","材料编号","选择理由","适用条件","教师调整说明"],h=m.map(y=>[y.order,y.content,y.materials.join("、"),y.reason,y.condition,y.teacherNote].map(Ai).join(","));Bi(`学习建议_${n.studentId}.csv`,`\uFEFF${[N.map(Ai).join(","),...h].join(`
`)}`,"text/csv;charset=utf-8")},D=(n==null?void 0:n.recordStatus)==="记录充足";return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("section",{className:"rounded-lg border border-line bg-white p-5",children:[a.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-base font-semibold text-ink",children:"个性化学习建议"}),a.jsx("p",{className:"mt-1 text-xs text-muted",children:"基于个体学情证据生成，支持教师调整与证据链溯源。"})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{type:"button",onClick:()=>f("json"),disabled:!n||r.length===0,className:"h-9 rounded-lg border border-line px-3 text-xs text-ink transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-50",children:"导出 JSON"}),a.jsx("button",{type:"button",onClick:()=>f("csv"),disabled:!n||r.length===0,className:"h-9 rounded-lg border border-line px-3 text-xs text-ink transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-50",children:"导出 CSV"})]})]}),!n&&a.jsx("p",{className:"mt-4 rounded-lg bg-warn px-4 py-3 text-xs font-medium leading-6 text-[#A9761C]",children:"请前往学情分析页面选择学生后，再查看个性化学习建议。"}),n&&a.jsxs("div",{className:U("mt-4 rounded-lg px-4 py-3",D?"bg-card":"bg-warn"),children:[a.jsxs("p",{className:U("text-xs font-medium",D?"text-ink":"text-[#A9761C]"),children:["当前学生：",n.studentId," · ",n.classId," 班 ·"," ",D?"记录充足":"信息不足，优先完成诊断性练习收集数据"]}),a.jsxs("p",{className:U("mt-1 text-[11px] leading-5",D?"text-muted":"text-[#A9761C]"),children:["有效作答 ",n.validAnswers," 条 · 覆盖 ",n.answeredKpCount,"/",Me.length," 个知识点 · 整体正确率 ",n.overallAccuracy,"%",!D&&" · 信息不足 ≠ 判定未掌握"]})]})]}),n&&a.jsx("div",{className:"space-y-3",children:r.map((Q,m)=>a.jsxs("article",{className:"rounded-lg border border-line bg-white p-5",children:[a.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/25 text-xs font-semibold text-ink",children:m+1}),a.jsx("h2",{className:"text-sm font-semibold text-ink",children:Q.content})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("button",{type:"button",onClick:()=>u(m,-1),disabled:m===0,className:"rounded border border-line px-2 py-1 text-[11px] text-muted transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40",children:"上移"}),a.jsx("button",{type:"button",onClick:()=>u(m,1),disabled:m===r.length-1,className:"rounded border border-line px-2 py-1 text-[11px] text-muted transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40",children:"下移"}),a.jsx("button",{type:"button",onClick:()=>c(Q),className:"rounded border border-line px-2.5 py-1 text-[11px] text-brand transition-colors hover:border-brand hover:bg-card",children:"查看证据链"})]})]}),a.jsxs("dl",{className:"mt-4 grid gap-4 text-xs md:grid-cols-2",children:[a.jsxs("div",{children:[a.jsx("dt",{className:"text-muted",children:"对应材料 / 练习编号（可替换）"}),a.jsx("dd",{className:"mt-1.5",children:a.jsx("input",{value:Q.materialsText,onChange:N=>s(Q.id,{materialsText:N.target.value}),className:"h-9 w-full rounded-lg border border-line px-3 text-xs text-ink transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"})})]}),a.jsxs("div",{children:[a.jsx("dt",{className:"text-muted",children:"选择理由"}),a.jsx("dd",{className:"mt-1.5 leading-6 text-ink",children:Q.reason})]}),a.jsxs("div",{children:[a.jsx("dt",{className:"text-muted",children:"适用条件"}),a.jsx("dd",{className:"mt-1.5 leading-6 text-ink",children:Q.condition})]}),a.jsxs("div",{children:[a.jsx("dt",{className:"text-muted",children:"教师可调整点"}),a.jsx("dd",{className:"mt-1.5 leading-6 text-muted",children:Q.teacherAdjustable})]})]}),a.jsx("div",{className:"mt-3 rounded-lg bg-page px-3 py-2.5",children:a.jsxs("label",{className:"block",children:[a.jsx("span",{className:"text-[11px] text-muted",children:"教师调整理由（随成果包导出留痕）"}),a.jsx("input",{value:Q.teacherNote,onChange:N=>s(Q.id,{teacherNote:N.target.value}),placeholder:"例如：该生计算基础薄弱，增加 2 道基础计算题",className:"mt-1.5 h-9 w-full rounded-lg border border-line bg-white px-3 text-xs text-ink placeholder:text-muted transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"})]})})]},Q.id))}),a.jsx(wu,{open:!!i,title:"证据链 · 课标要求与学习记录",onClose:()=>o(null),children:i&&a.jsxs("div",{className:"space-y-4 text-xs leading-6 text-muted",children:[a.jsxs("section",{children:[a.jsxs("h3",{className:"text-sm font-semibold text-ink",children:[i.kpName,a.jsx("span",{className:"ml-1.5 text-[11px] font-normal text-muted",children:i.kpId})]}),a.jsxs("p",{className:"mt-1",children:[a.jsx("span",{className:"text-ink",children:"课标学习要求："}),i.requirement]})]}),a.jsxs("section",{className:"rounded-lg bg-card px-4 py-3",children:[a.jsxs("p",{children:[a.jsx("span",{className:"text-ink",children:"该生学习记录："}),"有效作答 ",i.answered," 条， 得分 ",i.score," / ",i.full,"，正确率 ",i.accuracy,"%。"]}),a.jsxs("p",{children:[a.jsx("span",{className:"text-ink",children:"班级参照："}),"该知识点班级平均正确率"," ",i.classAvg,"%。"]}),a.jsx("p",{className:"mt-1 text-[11px]",children:"统计口径：缺失记录不计入正确率；同一知识点多条记录按最新一条统计。"})]}),a.jsxs("section",{children:[a.jsx("p",{className:"text-ink",children:"关联材料编号"}),a.jsx("p",{className:"mt-1",children:i.materials.join("、")||"暂无"})]}),!D&&a.jsx("p",{className:"rounded bg-warn px-3 py-2 text-[#A9761C]",children:"信息不足 ≠ 判定未掌握：该建议仅表示当前记录不足，不代表学生未掌握该知识点。"})]})})]})}const zd=[{key:"quality",label:"Tab1 数据质量报告"},{key:"individual",label:"Tab2 个体学情"},{key:"group",label:"Tab3 群体学情"}],Fi="grid grid-cols-[1fr_1.2fr_1.2fr_1.6fr_1.2fr] items-center gap-4";function Od(e){return e>=75?"bg-brand":e>=60?"bg-[#E7C57E]":"bg-[#DDA5A1]"}function ku({data:e}){return a.jsx("div",{className:"mt-4 space-y-2.5",children:e.map(n=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs("span",{className:"w-[190px] shrink-0 truncate text-[11px] text-muted",title:`${n.id} ${n.name}`,children:[a.jsx("span",{className:"font-medium text-ink",children:n.id})," ",n.name]}),a.jsx("div",{className:"h-2.5 flex-1 overflow-hidden rounded-full bg-page",children:n.value!=null&&a.jsx("div",{className:U("h-full rounded-full",Od(n.value)),style:{width:`${Math.max(n.value,2)}%`}})}),a.jsx("span",{className:U("w-12 shrink-0 text-right text-[11px]",n.value==null?"text-muted":"font-medium text-ink"),children:n.value==null?"无数据":`${n.value}%`})]},n.id))})}function Md(){const e=[{label:"≥ 75% 良好",color:"bg-brand"},{label:"60%~74% 一般",color:"bg-[#E7C57E]"},{label:"< 60% 待巩固",color:"bg-[#DDA5A1]"},{label:"无数据",color:"bg-line"}];return a.jsx("div",{className:"flex flex-wrap items-center gap-4",children:e.map(n=>a.jsxs("span",{className:"inline-flex items-center gap-1.5 text-[11px] text-muted",children:[a.jsx("span",{className:U("h-2 w-2 rounded-sm",n.color)}),n.label]},n.label))})}function Ad({className:e}){return a.jsxs("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:e,children:[a.jsx("path",{d:"M8 2.2 14.2 13a.6.6 0 0 1-.5.9H2.3a.6.6 0 0 1-.5-.9L8 2.2Z",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"}),a.jsx("path",{d:"M8 6.1v3.1",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"}),a.jsx("circle",{cx:"8",cy:"11.2",r:"0.7",fill:"currentColor"})]})}const Bd={total:"bg-card",missing:"bg-warn",duplicate:"bg-card",abnormal:"bg-danger"};function Fd({metrics:e}){return a.jsx("div",{className:"grid grid-cols-2 gap-4 lg:grid-cols-4",children:e.map(n=>a.jsxs("div",{className:U("rounded-lg border border-line/60 px-6 py-4",Bd[n.key]||"bg-card"),children:[a.jsx("p",{className:"text-xs text-muted",children:n.label}),a.jsx("p",{className:"mt-3 text-4xl font-bold leading-none tracking-tight text-ink tabular-nums",children:n.value})]},n.key))})}function $d({metrics:e,rows:n}){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"px-6 pb-6",children:a.jsx(Fd,{metrics:e})}),a.jsxs("section",{className:"border-t border-line px-6 py-5",children:[a.jsx("h2",{className:"text-[13px] font-semibold text-ink",children:"数据清洗规则说明"}),a.jsx("div",{className:"mt-2.5 space-y-1 text-xs leading-6 text-muted",children:wd.map(t=>a.jsxs("p",{children:[a.jsx("span",{className:"text-ink",children:t.title}),t.desc]},t.key))}),a.jsxs("p",{className:"mt-3 inline-flex items-center gap-1.5 rounded bg-warn px-2.5 py-1.5 text-xs font-medium text-[#A9761C]",children:[a.jsx(Ad,{className:"h-3.5 w-3.5"}),"警示：信息不足 ",a.jsx("span",{className:"font-semibold",children:"≠"})," 判定未掌握"]})]}),a.jsxs("section",{className:"border-t border-line px-6 py-5",children:[a.jsx("h2",{className:"text-[13px] font-semibold text-ink",children:"异常/缺失样例预览"}),a.jsx("div",{className:"mt-4 overflow-x-auto",children:a.jsxs("div",{className:"min-w-[640px]",children:[a.jsxs("div",{className:U(Fi,"border-b border-line py-2.5 text-xs font-medium text-muted"),children:[a.jsx("span",{children:"学生ID"}),a.jsx("span",{children:"题目编号"}),a.jsx("span",{children:"测验节点"}),a.jsx("span",{children:"异常/缺失类型"}),a.jsx("span",{children:"数据状态"})]}),n.map(t=>a.jsxs("div",{className:U(Fi,"border-b border-line py-3.5 text-xs text-ink","transition-colors last:border-b-0 hover:bg-page/70"),children:[a.jsx("span",{className:"font-medium",children:t.studentId}),a.jsx("span",{className:"text-ink/80",children:t.questionId}),a.jsx("span",{className:"text-ink/80",children:t.node}),a.jsx("span",{children:a.jsx("span",{className:U("inline-flex items-center rounded px-2.5 py-1 font-medium",kd[t.type]),children:t.type})}),a.jsx("span",{className:"text-muted",children:t.status})]},t.recordId)),n.length===0&&a.jsx("div",{className:"py-10 text-center text-xs text-muted",children:"当前筛选条件下暂无异常/缺失样例"})]})})]})]})}const Ud={记录充足:"bg-brand/25 text-ink",部分信息不足:"bg-warn text-[#A9761C]"};function Vd({onClick:e}){return a.jsx("button",{type:"button",onClick:e,className:"rounded border border-line px-2.5 py-1 text-[11px] text-brand transition-colors hover:border-brand hover:bg-card",children:"查看依据"})}function Wd({profile:e,groupStats:n}){const[t,r]=P.useState(null),l=e.kpStats.map(f=>({id:f.kpId,name:f.name,value:f.accuracy})),i=e.kpStats.filter(f=>f.answered>0&&f.accuracy<65),o=e.kpStats.filter(f=>f.answered===0),s=new Map(n.kpStats.map(f=>[f.kpId,f.avg])),u=[{key:"materials",label:"材料编号",content:e.answeredMaterials.length?`${e.answeredMaterials.slice(0,10).join("、")}${e.answeredMaterials.length>10?" 等":""}（共 ${e.answeredMaterials.length} 份）`:"暂无有效作答记录"},{key:"weak",label:"待巩固知识点",content:i.length?i.map(f=>`${f.name}（${f.accuracy}%）`).join("、"):"暂无（各知识点正确率均不低于 65%）"},{key:"missing",label:"信息不足知识点",content:o.length?o.map(f=>`${f.name}（无作答记录，暂不判定）`).join("、"):"暂无"}],c={materials:"依据 · 已作答材料明细",weak:"依据 · 待巩固知识点统计",missing:"依据 · 信息不足知识点说明"};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"px-6 pb-4",children:a.jsxs("div",{className:"flex flex-wrap items-center gap-x-10 gap-y-3 rounded-lg bg-card px-5 py-4",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-[11px] text-muted",children:"学生编号"}),a.jsx("p",{className:"mt-1 text-sm font-semibold text-ink",children:e.studentId})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-[11px] text-muted",children:"所在班级"}),a.jsx("p",{className:"mt-1 text-sm font-semibold text-ink",children:e.classId})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-[11px] text-muted",children:"有效作答数"}),a.jsxs("p",{className:"mt-1 text-sm font-semibold text-ink",children:[e.validAnswers," 条"]})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-[11px] text-muted",children:"记录覆盖度"}),a.jsxs("p",{className:"mt-1 text-sm font-semibold text-ink",children:[e.answeredKpCount,"/",Me.length,a.jsxs("span",{className:"ml-1 text-xs font-normal text-muted",children:["（",e.coverageRate,"%）"]})]})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-[11px] text-muted",children:"整体正确率"}),a.jsxs("p",{className:"mt-1 text-sm font-semibold text-ink",children:[e.overallAccuracy,"%"]})]}),a.jsx("span",{className:U("ml-auto rounded px-2.5 py-1 text-xs font-medium",Ud[e.recordStatus]),children:e.recordStatus})]})}),a.jsx("div",{className:"px-6 pb-5",children:a.jsxs("div",{className:"rounded-lg border border-line p-5",children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[a.jsx("h2",{className:"text-[13px] font-semibold text-ink",children:"各知识点答题正确率"}),a.jsx(Md,{})]}),a.jsx(ku,{data:l}),o.length>0&&a.jsxs("p",{className:"mt-3 rounded bg-warn px-3 py-2 text-[11px] leading-5 text-[#A9761C]",children:["信息不足 ≠ 判定未掌握：",o.map(f=>f.name).join("、"),"暂无有效作答记录，未纳入正确率判断。"]})]})}),a.jsxs("section",{className:"border-t border-line px-6 py-5",children:[a.jsx("h2",{className:"text-[13px] font-semibold text-ink",children:"学情摘要"}),a.jsxs("div",{className:"mt-4 overflow-hidden rounded-lg border border-line",children:[a.jsxs("div",{className:"grid grid-cols-[150px_1fr_90px] items-center gap-4 bg-page px-4 py-2.5 text-xs font-medium text-muted",children:[a.jsx("span",{children:"项目"}),a.jsx("span",{children:"内容"}),a.jsx("span",{className:"text-right",children:"操作"})]}),u.map(f=>a.jsxs("div",{className:"grid grid-cols-[150px_1fr_90px] items-center gap-4 border-t border-line px-4 py-3 text-xs",children:[a.jsx("span",{className:"font-medium text-ink",children:f.label}),a.jsx("span",{className:"leading-6 text-muted",children:f.content}),a.jsx("span",{className:"text-right",children:a.jsx(Vd,{onClick:()=>r(f.key)})})]},f.key))]})]}),a.jsxs(wu,{open:!!t,title:t?c[t]:"",onClose:()=>r(null),children:[t==="materials"&&a.jsxs("div",{className:"space-y-2 text-xs leading-6 text-muted",children:[a.jsx("p",{className:"text-ink",children:"按知识点统计的有效作答材料："}),Me.map((f,D)=>{const Q=e.kpStats[D].answered;return a.jsxs("p",{className:"rounded bg-page px-3 py-2",children:[a.jsxs("span",{className:"font-medium text-ink",children:[f.id," ",f.name]}),"：",Q>0?f.materials.slice(0,Q).join("、"):"无",a.jsxs("span",{className:"ml-1",children:["（",Q," 条）"]})]},f.id)})]}),t==="weak"&&a.jsxs("div",{className:"space-y-2 text-xs leading-6 text-muted",children:[i.length>0?a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"text-ink",children:"正确率低于 65% 的知识点统计："}),i.map(f=>a.jsxs("p",{className:"rounded bg-page px-3 py-2",children:[a.jsxs("span",{className:"font-medium text-ink",children:[f.kpId," ",f.name]}),"：有效作答 ",f.answered," 条，得分 ",f.score," / ",f.full,"，正确率"," ",a.jsxs("span",{className:"font-medium text-ink",children:[f.accuracy,"%"]}),"；班级平均"," ",s.get(f.kpId),"%。"]},f.kpId))]}):a.jsx("p",{children:"暂无待巩固知识点。"}),a.jsx("p",{className:"text-[11px]",children:"统计口径：缺失记录不计入正确率，重复记录只保留最新一条。"})]}),t==="missing"&&a.jsx("div",{className:"space-y-2 text-xs leading-6 text-muted",children:o.length>0?a.jsxs(a.Fragment,{children:[o.map(f=>a.jsxs("p",{className:"rounded bg-warn px-3 py-2 text-[#A9761C]",children:[f.kpId," ",f.name,"：暂无有效作答记录。"]},f.kpId)),a.jsx("p",{children:"信息不足 ≠ 判定未掌握：以上知识点仅表示当前缺少可用的学习记录，系统不据此输出 薄弱或未掌握结论，建议优先安排诊断性练习补充数据。"})]}):a.jsx("p",{children:"暂无信息不足知识点。"})})]})]})}const Hd={高:"bg-danger text-[#B4544F]",中:"bg-warn text-[#A9761C]",低:"bg-card text-muted"};function Kd({stats:e,classId:n,onClassChange:t}){const r=e.kpStats.map(s=>({id:s.kpId,name:s.name,value:s.avg})),l=h1.map(s=>`${s.id} 班 ${s.count} 人`).join("、"),i=[{label:"班级学生数",value:e.totalStudents,unit:"人"},{label:"有效作答记录",value:e.validTotal,unit:"条"},{label:"班级平均正确率",value:e.overallAccuracy,unit:"%"},{label:"记录不足学生",value:e.insufficientCount,unit:"人"}],o=[{label:"人数",sufficient:`${e.comparison.sufficient.count} 人`,insufficient:`${e.comparison.insufficient.count} 人`},{label:"人均有效作答",sufficient:`${e.comparison.sufficient.avgAnswers} 条`,insufficient:`${e.comparison.insufficient.avgAnswers} 条`},{label:"平均正确率",sufficient:`${e.comparison.sufficient.avgAccuracy}%`,insufficient:`${e.comparison.insufficient.avgAccuracy}%`},{label:"知识点覆盖率",sufficient:`${e.comparison.sufficient.coverage}%`,insufficient:`${e.comparison.insufficient.coverage}%`},{label:"主要风险",sufficient:e.comparison.sufficient.risk,insufficient:e.comparison.insufficient.risk}];return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"px-6 py-5",children:a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-[13px] font-semibold text-ink",children:"班级群体学情"}),a.jsxs("p",{className:"mt-1 text-[11px] text-muted",children:[l,"，按班级分别统计；选择学生后默认跟随其所在班级。"]})]}),a.jsx("div",{className:"flex flex-wrap gap-2",children:h1.map(s=>{const u=s.id===n;return a.jsxs("button",{type:"button",onClick:()=>t(s.id),className:U("rounded-lg border px-3 py-1.5 text-xs transition-colors",u?"border-brand bg-card font-semibold text-ink":"border-line text-muted hover:border-brand hover:text-ink"),children:[s.id," 班",a.jsxs("span",{className:"ml-1 text-[11px] font-normal text-muted",children:[s.count," 人"]})]},s.id)})})]})}),a.jsx("div",{className:"px-6 pb-5",children:a.jsx("div",{className:"grid grid-cols-2 gap-4 lg:grid-cols-4",children:i.map(s=>a.jsxs("div",{className:"rounded-lg border border-line/60 bg-card px-5 py-4",children:[a.jsx("p",{className:"text-xs text-muted",children:s.label}),a.jsxs("p",{className:"mt-3 text-3xl font-bold leading-none tracking-tight text-ink tabular-nums",children:[s.value,a.jsx("span",{className:"ml-1 text-xs font-normal text-muted",children:s.unit})]})]},s.label))})}),a.jsx("div",{className:"px-6 pb-5",children:a.jsxs("div",{className:"rounded-lg border border-line p-5",children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[a.jsxs("h2",{className:"text-[13px] font-semibold text-ink",children:[e.classId," 班各知识点平均正确率"]}),a.jsx("span",{className:"text-[11px] text-muted",children:"统计口径：有效作答记录，缺失不计入"})]}),a.jsx(ku,{data:r})]})}),a.jsxs("section",{className:"border-t border-line px-6 py-5",children:[a.jsx("h2",{className:"text-[13px] font-semibold text-ink",children:"共性问题"}),a.jsx("div",{className:"mt-4 overflow-x-auto",children:a.jsxs("div",{className:"min-w-[720px]",children:[a.jsxs("div",{className:"grid grid-cols-[1.1fr_0.8fr_1.6fr_1.8fr] items-center gap-4 border-b border-line py-2.5 text-xs font-medium text-muted",children:[a.jsx("span",{children:"知识点"}),a.jsx("span",{children:"群体薄弱程度"}),a.jsx("span",{children:"统计依据"}),a.jsx("span",{children:"教学提示"})]}),e.commonProblems.map(s=>a.jsxs("div",{className:"grid grid-cols-[1.1fr_0.8fr_1.6fr_1.8fr] items-center gap-4 border-b border-line py-3 text-xs text-ink last:border-b-0",children:[a.jsxs("span",{children:[a.jsx("span",{className:"font-medium",children:s.name}),a.jsx("span",{className:"ml-1 text-[11px] text-muted",children:s.kpId})]}),a.jsx("span",{children:a.jsx("span",{className:U("inline-flex rounded px-2.5 py-1 font-medium",Hd[s.level]),children:s.level})}),a.jsx("span",{className:"text-muted",children:s.evidence}),a.jsx("span",{className:"text-muted",children:s.teachingTip})]},s.kpId))]})})]}),a.jsxs("section",{className:"border-t border-line px-6 py-5",children:[a.jsx("h2",{className:"text-[13px] font-semibold text-ink",children:"群体差异对比"}),a.jsxs("div",{className:"mt-4 overflow-hidden rounded-lg border border-line",children:[a.jsxs("div",{className:"grid grid-cols-[140px_1fr_1fr] items-center gap-4 bg-page px-4 py-2.5 text-xs font-medium text-muted",children:[a.jsx("span",{children:"对比维度"}),a.jsx("span",{children:"记录充足组"}),a.jsx("span",{children:"信息不足组"})]}),o.map(s=>a.jsxs("div",{className:"grid grid-cols-[140px_1fr_1fr] items-center gap-4 border-t border-line px-4 py-3 text-xs",children:[a.jsx("span",{className:"font-medium text-ink",children:s.label}),a.jsx("span",{className:"text-muted",children:s.sufficient}),a.jsx("span",{className:"text-muted",children:s.insufficient})]},s.label))]}),a.jsx("p",{className:"mt-3 rounded bg-warn px-3 py-2 text-[11px] leading-5 text-[#A9761C]",children:"信息不足组仅代表记录覆盖度不足，暂不参与掌握情况判定，建议优先补充诊断性练习。"})]})]})}function bd({activeTab:e,onChange:n}){return a.jsx("div",{className:"flex items-center gap-10 overflow-x-auto px-6",children:zd.map(t=>{const r=t.key===e;return a.jsxs("button",{type:"button",role:"tab","aria-selected":r,onClick:()=>n(t.key),className:U("relative shrink-0 py-4 text-[13px] transition-colors",r?"font-semibold text-brand":"text-muted hover:text-ink"),children:[t.label,a.jsx("span",{"aria-hidden":"true",className:U("absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand transition-opacity",r?"opacity-100":"opacity-0")})]},t.key)})})}function Yd(){return a.jsx("div",{className:"px-6 pb-6",children:a.jsxs("div",{className:"flex h-[280px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-page/60",children:[a.jsx("p",{className:"text-sm font-medium text-ink",children:"尚未选择学生"}),a.jsx("p",{className:"text-xs text-muted",children:"请先在左侧「学生ID」下拉框中选择学生，再查看个体学情。"})]})})}function Gd(){var D;const{metrics:e,rows:n,studentId:t,status:r}=F1(),[l,i]=P.useState("quality"),o=P.useMemo(()=>t==="全部学生"?null:yu(t),[t]),[s,u]=P.useState(((D=h1[0])==null?void 0:D.id)??"");P.useEffect(()=>{o!=null&&o.classId&&u(o.classId)},[o]);const c=P.useMemo(()=>gu(s),[s]),f=P.useMemo(()=>n.filter(Q=>(t==="全部学生"||Q.studentId===t)&&(r==="全部状态"||Q.type===r)),[n,t,r]);return a.jsxs("section",{className:"rounded-lg border border-line bg-white",children:[a.jsx(bd,{activeTab:l,onChange:i}),l==="quality"&&a.jsx($d,{metrics:e,rows:f}),l==="individual"&&(o?a.jsx(Wd,{profile:o,groupStats:c}):a.jsx(Yd,{})),l==="group"&&a.jsx(Kd,{stats:c,classId:s,onClassChange:u})]})}function Dl({title:e,subtitle:n,children:t}){return a.jsxs("section",{className:"rounded-lg border border-line bg-white p-6",children:[a.jsxs("header",{children:[a.jsx("h1",{className:"text-base font-semibold text-ink",children:e}),n&&a.jsx("p",{className:"mt-1 text-xs leading-5 text-muted",children:n})]}),a.jsx("div",{className:"mt-5",children:t})]})}function Xd(){return a.jsx(Dl,{title:"首页 · 总览仪表盘",subtitle:"数据集概览与功能快捷入口，仅展示群体数据，不涉及单个学生。",children:a.jsxs("div",{className:"rounded-lg border border-dashed border-line bg-page/60 px-6 py-12 text-center",children:[a.jsx("p",{className:"text-sm font-medium text-ink",children:"页面内容待实现"}),a.jsx("p",{className:"mt-1.5 text-xs leading-6 text-muted",children:"将包含：项目简介卡片 · 总学生数 / 总学习记录 / 缺失 / 异常指标行 · 4 个功能入口卡片 · 各知识点平均正确率柱状图"})]})})}function Jd(){return a.jsx(Dl,{title:"学习内容梳理",subtitle:"梳理课标要求与配套材料，输出结构化学习内容清单，与本页学生数据无关。",children:a.jsxs("div",{className:"rounded-lg border border-dashed border-line bg-page/60 px-6 py-12 text-center",children:[a.jsx("p",{className:"text-sm font-medium text-ink",children:"页面内容待实现"}),a.jsx("p",{className:"mt-1.5 text-xs leading-6 text-muted",children:"将包含：分析主题范围说明 · 结构化清单大表格（M1）· 导出 JSON / CSV · 知识点依赖关系可视化"})]})})}function Zd(){const{studentId:e}=F1();return a.jsxs(Dl,{title:"案例核对 & 证据溯源",subtitle:"以「学习要求 → 已有表现 → 学习建议」三栏对照核验证据链，并导出成果包。",children:[a.jsxs("p",{className:"mb-4 rounded-lg bg-card px-4 py-3 text-xs text-muted",children:["当前继承学生：",a.jsx("span",{className:"font-medium text-ink",children:e==="全部学生"?"未选择（可在左侧学生ID中选择）":e})]}),a.jsxs("div",{className:"rounded-lg border border-dashed border-line bg-page/60 px-6 py-12 text-center",children:[a.jsx("p",{className:"text-sm font-medium text-ink",children:"页面内容待实现"}),a.jsx("p",{className:"mt-1.5 text-xs leading-6 text-muted",children:"将包含：案例A / 案例B / 多学生对比 / 系统设置与成果包导出 4 个 Tab · 三栏对照大表格 · 模拟新增记录后证据刷新"})]})]})}function qd(){return a.jsx(Yc,{children:a.jsxs(ne,{element:a.jsx(_d,{}),children:[a.jsx(ne,{path:"/",element:a.jsx(Xd,{})}),a.jsx(ne,{path:"/outline",element:a.jsx(Jd,{})}),a.jsx(ne,{path:"/analysis",element:a.jsx(Gd,{})}),a.jsx(ne,{path:"/advice",element:a.jsx(Ld,{})}),a.jsx(ne,{path:"/review",element:a.jsx(Zd,{})}),a.jsx(ne,{path:"*",element:a.jsx(Hc,{to:"/",replace:!0})})]})})}Nr.createRoot(document.getElementById("root")).render(a.jsx(Ji.StrictMode,{children:a.jsx(td,{children:a.jsx(gd,{children:a.jsx(qd,{})})})}));
