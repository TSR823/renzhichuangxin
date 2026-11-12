function vu(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function gu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Li={exports:{}},Nt={},zi={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1=Symbol.for("react.element"),Ru=Symbol.for("react.portal"),wu=Symbol.for("react.fragment"),ku=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),Cu=Symbol.for("react.provider"),ju=Symbol.for("react.context"),Eu=Symbol.for("react.forward_ref"),_u=Symbol.for("react.suspense"),Iu=Symbol.for("react.memo"),Lu=Symbol.for("react.lazy"),ul=Symbol.iterator;function zu(e){return e===null||typeof e!="object"?null:(e=ul&&e[ul]||e["@@iterator"],typeof e=="function"?e:null)}var Mi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oi=Object.assign,Ai={};function fn(e,n,t){this.props=e,this.context=n,this.refs=Ai,this.updater=t||Mi}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bi(){}Bi.prototype=fn.prototype;function u2(e,n,t){this.props=e,this.context=n,this.refs=Ai,this.updater=t||Mi}var a2=u2.prototype=new Bi;a2.constructor=u2;Oi(a2,fn.prototype);a2.isPureReactComponent=!0;var al=Array.isArray,Fi=Object.prototype.hasOwnProperty,c2={current:null},$i={key:!0,ref:!0,__self:!0,__source:!0};function Ui(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)Fi.call(n,r)&&!$i.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:i1,type:e,key:i,ref:o,props:l,_owner:c2.current}}function Mu(e,n){return{$$typeof:i1,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function d2(e){return typeof e=="object"&&e!==null&&e.$$typeof===i1}function Ou(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var cl=/\/+/g;function Bt(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Ou(""+e.key):n.toString(36)}function I1(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case i1:case Ru:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Bt(o,0):r,al(l)?(t="",e!=null&&(t=e.replace(cl,"$&/")+"/"),I1(l,n,t,"",function(c){return c})):l!=null&&(d2(l)&&(l=Mu(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(cl,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",al(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Bt(i,s);o+=I1(i,n,t,u,l)}else if(u=zu(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Bt(i,s++),o+=I1(i,n,t,u,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function p1(e,n,t){if(e==null)return e;var r=[],l=0;return I1(e,r,"","",function(i){return n.call(t,i,l++)}),r}function Au(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var c0={current:null},L1={transition:null},Bu={ReactCurrentDispatcher:c0,ReactCurrentBatchConfig:L1,ReactCurrentOwner:c2};function Vi(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:p1,forEach:function(e,n,t){p1(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return p1(e,function(){n++}),n},toArray:function(e){return p1(e,function(n){return n})||[]},only:function(e){if(!d2(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=fn;_.Fragment=wu;_.Profiler=Su;_.PureComponent=u2;_.StrictMode=ku;_.Suspense=_u;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bu;_.act=Vi;_.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Oi({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=c2.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)Fi.call(n,u)&&!$i.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&s!==void 0?s[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:i1,type:e.type,key:l,ref:i,props:r,_owner:o}};_.createContext=function(e){return e={$$typeof:ju,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cu,_context:e},e.Consumer=e};_.createElement=Ui;_.createFactory=function(e){var n=Ui.bind(null,e);return n.type=e,n};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:Eu,render:e}};_.isValidElement=d2;_.lazy=function(e){return{$$typeof:Lu,_payload:{_status:-1,_result:e},_init:Au}};_.memo=function(e,n){return{$$typeof:Iu,type:e,compare:n===void 0?null:n}};_.startTransition=function(e){var n=L1.transition;L1.transition={};try{e()}finally{L1.transition=n}};_.unstable_act=Vi;_.useCallback=function(e,n){return c0.current.useCallback(e,n)};_.useContext=function(e){return c0.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return c0.current.useDeferredValue(e)};_.useEffect=function(e,n){return c0.current.useEffect(e,n)};_.useId=function(){return c0.current.useId()};_.useImperativeHandle=function(e,n,t){return c0.current.useImperativeHandle(e,n,t)};_.useInsertionEffect=function(e,n){return c0.current.useInsertionEffect(e,n)};_.useLayoutEffect=function(e,n){return c0.current.useLayoutEffect(e,n)};_.useMemo=function(e,n){return c0.current.useMemo(e,n)};_.useReducer=function(e,n,t){return c0.current.useReducer(e,n,t)};_.useRef=function(e){return c0.current.useRef(e)};_.useState=function(e){return c0.current.useState(e)};_.useSyncExternalStore=function(e,n,t){return c0.current.useSyncExternalStore(e,n,t)};_.useTransition=function(){return c0.current.useTransition()};_.version="18.3.1";zi.exports=_;var v=zi.exports;const Wi=gu(v),Fu=vu({__proto__:null,default:Wi},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u=v,Uu=Symbol.for("react.element"),Vu=Symbol.for("react.fragment"),Wu=Object.prototype.hasOwnProperty,Hu=$u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ku={key:!0,ref:!0,__self:!0,__source:!0};function Hi(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Wu.call(n,r)&&!Ku.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Uu,type:e,key:i,ref:o,props:l,_owner:Hu.current}}Nt.Fragment=Vu;Nt.jsx=Hi;Nt.jsxs=Hi;Li.exports=Nt;var a=Li.exports,fr={},Ki={exports:{}},P0={},bi={exports:{}},Yi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(w,j){var E=w.length;w.push(j);e:for(;0<E;){var K=E-1>>>1,J=w[K];if(0<l(J,j))w[K]=j,w[E]=J,E=K;else break e}}function t(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var j=w[0],E=w.pop();if(E!==j){w[0]=E;e:for(var K=0,J=w.length,D1=J>>>1;K<D1;){var Pe=2*(K+1)-1,At=w[Pe],ye=Pe+1,x1=w[ye];if(0>l(At,E))ye<J&&0>l(x1,At)?(w[K]=x1,w[ye]=E,K=ye):(w[K]=At,w[Pe]=E,K=Pe);else if(ye<J&&0>l(x1,E))w[K]=x1,w[ye]=E,K=ye;else break e}}return j}function l(w,j){var E=w.sortIndex-j.sortIndex;return E!==0?E:w.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],c=[],f=1,D=null,Q=3,h=!1,N=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(w){for(var j=t(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=w)r(c),j.sortIndex=j.expirationTime,n(u,j);else break;j=t(c)}}function m(w){if(T=!1,p(w),!N)if(t(u)!==null)N=!0,Mt(g);else{var j=t(c);j!==null&&Ot(m,j.startTime-w)}}function g(w,j){N=!1,T&&(T=!1,x(C),C=-1),h=!0;var E=Q;try{for(p(j),D=t(u);D!==null&&(!(D.expirationTime>j)||w&&!C0());){var K=D.callback;if(typeof K=="function"){D.callback=null,Q=D.priorityLevel;var J=K(D.expirationTime<=j);j=e.unstable_now(),typeof J=="function"?D.callback=J:D===t(u)&&r(u),p(j)}else r(u);D=t(u)}if(D!==null)var D1=!0;else{var Pe=t(c);Pe!==null&&Ot(m,Pe.startTime-j),D1=!1}return D1}finally{D=null,Q=E,h=!1}}var k=!1,S=null,C=-1,H=5,I=-1;function C0(){return!(e.unstable_now()-I<H)}function pn(){if(S!==null){var w=e.unstable_now();I=w;var j=!0;try{j=S(!0,w)}finally{j?Nn():(k=!1,S=null)}}else k=!1}var Nn;if(typeof d=="function")Nn=function(){d(pn)};else if(typeof MessageChannel<"u"){var sl=new MessageChannel,yu=sl.port2;sl.port1.onmessage=pn,Nn=function(){yu.postMessage(null)}}else Nn=function(){y(pn,0)};function Mt(w){S=w,k||(k=!0,Nn())}function Ot(w,j){C=y(function(){w(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(w){w.callback=null},e.unstable_continueExecution=function(){N||h||(N=!0,Mt(g))},e.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<w?Math.floor(1e3/w):5},e.unstable_getCurrentPriorityLevel=function(){return Q},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(w){switch(Q){case 1:case 2:case 3:var j=3;break;default:j=Q}var E=Q;Q=j;try{return w()}finally{Q=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(w,j){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var E=Q;Q=w;try{return j()}finally{Q=E}},e.unstable_scheduleCallback=function(w,j,E){var K=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?K+E:K):E=K,w){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=E+J,w={id:f++,callback:j,priorityLevel:w,startTime:E,expirationTime:J,sortIndex:-1},E>K?(w.sortIndex=E,n(c,w),t(u)===null&&w===t(c)&&(T?(x(C),C=-1):T=!0,Ot(m,E-K))):(w.sortIndex=J,n(u,w),N||h||(N=!0,Mt(g))),w},e.unstable_shouldYield=C0,e.unstable_wrapCallback=function(w){var j=Q;return function(){var E=Q;Q=j;try{return w.apply(this,arguments)}finally{Q=E}}}})(Yi);bi.exports=Yi;var bu=bi.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu=v,m0=bu;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gi=new Set,Fn={};function Oe(e,n){ln(e,n),ln(e+"Capture",n)}function ln(e,n){for(Fn[e]=n,e=0;e<n.length;e++)Gi.add(n[e])}var b0=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qr=Object.prototype.hasOwnProperty,Gu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dl={},fl={};function Xu(e){return Qr.call(fl,e)?!0:Qr.call(dl,e)?!1:Gu.test(e)?fl[e]=!0:(dl[e]=!0,!1)}function Zu(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ju(e,n,t,r){if(n===null||typeof n>"u"||Zu(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function d0(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var r0={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){r0[e]=new d0(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];r0[n]=new d0(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){r0[e]=new d0(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){r0[e]=new d0(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){r0[e]=new d0(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){r0[e]=new d0(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){r0[e]=new d0(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){r0[e]=new d0(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){r0[e]=new d0(e,5,!1,e.toLowerCase(),null,!1,!1)});var f2=/[\-:]([a-z])/g;function Q2(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(f2,Q2);r0[n]=new d0(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(f2,Q2);r0[n]=new d0(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(f2,Q2);r0[n]=new d0(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){r0[e]=new d0(e,1,!1,e.toLowerCase(),null,!1,!1)});r0.xlinkHref=new d0("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){r0[e]=new d0(e,1,!1,e.toLowerCase(),null,!0,!0)});function D2(e,n,t,r){var l=r0.hasOwnProperty(n)?r0[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ju(n,t,l,r)&&(t=null),r||l===null?Xu(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Z0=Yu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N1=Symbol.for("react.element"),Fe=Symbol.for("react.portal"),$e=Symbol.for("react.fragment"),x2=Symbol.for("react.strict_mode"),Dr=Symbol.for("react.profiler"),Xi=Symbol.for("react.provider"),Zi=Symbol.for("react.context"),p2=Symbol.for("react.forward_ref"),xr=Symbol.for("react.suspense"),pr=Symbol.for("react.suspense_list"),N2=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Ji=Symbol.for("react.offscreen"),Ql=Symbol.iterator;function Tn(e){return e===null||typeof e!="object"?null:(e=Ql&&e[Ql]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Ft;function kn(e){if(Ft===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ft=n&&n[1]||""}return`
`+Ft+e}var $t=!1;function Ut(e,n){if(!e||$t)return"";$t=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{$t=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?kn(e):""}function qu(e){switch(e.tag){case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 2:case 15:return e=Ut(e.type,!1),e;case 11:return e=Ut(e.type.render,!1),e;case 1:return e=Ut(e.type,!0),e;default:return""}}function Nr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $e:return"Fragment";case Fe:return"Portal";case Dr:return"Profiler";case x2:return"StrictMode";case xr:return"Suspense";case pr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zi:return(e.displayName||"Context")+".Consumer";case Xi:return(e._context.displayName||"Context")+".Provider";case p2:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N2:return n=e.displayName||null,n!==null?n:Nr(e.type)||"Memo";case ee:n=e._payload,e=e._init;try{return Nr(e(n))}catch{}}return null}function ea(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nr(n);case 8:return n===x2?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function xe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qi(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function na(e){var n=qi(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function T1(e){e._valueTracker||(e._valueTracker=na(e))}function eo(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=qi(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function H1(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tr(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Dl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=xe(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function no(e,n){n=n.checked,n!=null&&D2(e,"checked",n,!1)}function hr(e,n){no(e,n);var t=xe(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?mr(e,n.type,t):n.hasOwnProperty("defaultValue")&&mr(e,n.type,xe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function mr(e,n,t){(n!=="number"||H1(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Sn=Array.isArray;function Je(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+xe(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Pr(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(Sn(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:xe(t)}}function to(e,n){var t=xe(n.value),r=xe(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Nl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ro(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yr(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ro(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var h1,lo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(h1=h1||document.createElement("div"),h1.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=h1.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $n(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ta=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){ta.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),En[n]=En[e]})});function io(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||En.hasOwnProperty(e)&&En[e]?(""+n).trim():n+"px"}function oo(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=io(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var ra=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vr(e,n){if(n){if(ra[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function gr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rr=null;function T2(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,qe=null,en=null;function Tl(e){if(e=u1(e)){if(typeof wr!="function")throw Error(P(280));var n=e.stateNode;n&&(n=yt(n),wr(e.stateNode,e.type,n))}}function so(e){qe?en?en.push(e):en=[e]:qe=e}function uo(){if(qe){var e=qe,n=en;if(en=qe=null,Tl(e),n)for(e=0;e<n.length;e++)Tl(n[e])}}function ao(e,n){return e(n)}function co(){}var Vt=!1;function fo(e,n,t){if(Vt)return e(n,t);Vt=!0;try{return ao(e,n,t)}finally{Vt=!1,(qe!==null||en!==null)&&(co(),uo())}}function Un(e,n){var t=e.stateNode;if(t===null)return null;var r=yt(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var kr=!1;if(b0)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){kr=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{kr=!1}function la(e,n,t,r,l,i,o,s,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(f){this.onError(f)}}var _n=!1,K1=null,b1=!1,Sr=null,ia={onError:function(e){_n=!0,K1=e}};function oa(e,n,t,r,l,i,o,s,u){_n=!1,K1=null,la.apply(ia,arguments)}function sa(e,n,t,r,l,i,o,s,u){if(oa.apply(this,arguments),_n){if(_n){var c=K1;_n=!1,K1=null}else throw Error(P(198));b1||(b1=!0,Sr=c)}}function Ae(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Qo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function hl(e){if(Ae(e)!==e)throw Error(P(188))}function ua(e){var n=e.alternate;if(!n){if(n=Ae(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return hl(l),e;if(i===r)return hl(l),n;i=i.sibling}throw Error(P(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o)throw Error(P(189))}}if(t.alternate!==r)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function Do(e){return e=ua(e),e!==null?xo(e):null}function xo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=xo(e);if(n!==null)return n;e=e.sibling}return null}var po=m0.unstable_scheduleCallback,ml=m0.unstable_cancelCallback,aa=m0.unstable_shouldYield,ca=m0.unstable_requestPaint,b=m0.unstable_now,da=m0.unstable_getCurrentPriorityLevel,h2=m0.unstable_ImmediatePriority,No=m0.unstable_UserBlockingPriority,Y1=m0.unstable_NormalPriority,fa=m0.unstable_LowPriority,To=m0.unstable_IdlePriority,Tt=null,F0=null;function Qa(e){if(F0&&typeof F0.onCommitFiberRoot=="function")try{F0.onCommitFiberRoot(Tt,e,void 0,(e.current.flags&128)===128)}catch{}}var L0=Math.clz32?Math.clz32:pa,Da=Math.log,xa=Math.LN2;function pa(e){return e>>>=0,e===0?32:31-(Da(e)/xa|0)|0}var m1=64,P1=4194304;function Cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function G1(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~l;s!==0?r=Cn(s):(i&=o,i!==0&&(r=Cn(i)))}else o=t&~l,o!==0?r=Cn(o):i!==0&&(r=Cn(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-L0(n),l=1<<t,r|=e[t],n&=~l;return r}function Na(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ta(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-L0(i),s=1<<o,u=l[o];u===-1?(!(s&t)||s&r)&&(l[o]=Na(s,n)):u<=n&&(e.expiredLanes|=s),i&=~s}}function Cr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ho(){var e=m1;return m1<<=1,!(m1&4194240)&&(m1=64),e}function Wt(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function o1(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-L0(n),e[n]=t}function ha(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-L0(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function m2(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-L0(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var z=0;function mo(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Po,P2,yo,vo,go,jr=!1,y1=[],se=null,ue=null,ae=null,Vn=new Map,Wn=new Map,te=[],ma="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pl(e,n){switch(e){case"focusin":case"focusout":se=null;break;case"dragenter":case"dragleave":ue=null;break;case"mouseover":case"mouseout":ae=null;break;case"pointerover":case"pointerout":Vn.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(n.pointerId)}}function mn(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=u1(n),n!==null&&P2(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Pa(e,n,t,r,l){switch(n){case"focusin":return se=mn(se,e,n,t,r,l),!0;case"dragenter":return ue=mn(ue,e,n,t,r,l),!0;case"mouseover":return ae=mn(ae,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Vn.set(i,mn(Vn.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Wn.set(i,mn(Wn.get(i)||null,e,n,t,r,l)),!0}return!1}function Ro(e){var n=Re(e.target);if(n!==null){var t=Ae(n);if(t!==null){if(n=t.tag,n===13){if(n=Qo(t),n!==null){e.blockedOn=n,go(e.priority,function(){yo(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function z1(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Er(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Rr=r,t.target.dispatchEvent(r),Rr=null}else return n=u1(t),n!==null&&P2(n),e.blockedOn=t,!1;n.shift()}return!0}function yl(e,n,t){z1(e)&&t.delete(n)}function ya(){jr=!1,se!==null&&z1(se)&&(se=null),ue!==null&&z1(ue)&&(ue=null),ae!==null&&z1(ae)&&(ae=null),Vn.forEach(yl),Wn.forEach(yl)}function Pn(e,n){e.blockedOn===n&&(e.blockedOn=null,jr||(jr=!0,m0.unstable_scheduleCallback(m0.unstable_NormalPriority,ya)))}function Hn(e){function n(l){return Pn(l,e)}if(0<y1.length){Pn(y1[0],e);for(var t=1;t<y1.length;t++){var r=y1[t];r.blockedOn===e&&(r.blockedOn=null)}}for(se!==null&&Pn(se,e),ue!==null&&Pn(ue,e),ae!==null&&Pn(ae,e),Vn.forEach(n),Wn.forEach(n),t=0;t<te.length;t++)r=te[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<te.length&&(t=te[0],t.blockedOn===null);)Ro(t),t.blockedOn===null&&te.shift()}var nn=Z0.ReactCurrentBatchConfig,X1=!0;function va(e,n,t,r){var l=z,i=nn.transition;nn.transition=null;try{z=1,y2(e,n,t,r)}finally{z=l,nn.transition=i}}function ga(e,n,t,r){var l=z,i=nn.transition;nn.transition=null;try{z=4,y2(e,n,t,r)}finally{z=l,nn.transition=i}}function y2(e,n,t,r){if(X1){var l=Er(e,n,t,r);if(l===null)er(e,n,r,Z1,t),Pl(e,r);else if(Pa(l,e,n,t,r))r.stopPropagation();else if(Pl(e,r),n&4&&-1<ma.indexOf(e)){for(;l!==null;){var i=u1(l);if(i!==null&&Po(i),i=Er(e,n,t,r),i===null&&er(e,n,r,Z1,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else er(e,n,r,null,t)}}var Z1=null;function Er(e,n,t,r){if(Z1=null,e=T2(r),e=Re(e),e!==null)if(n=Ae(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Qo(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Z1=e,null}function wo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(da()){case h2:return 1;case No:return 4;case Y1:case fa:return 16;case To:return 536870912;default:return 16}default:return 16}}var le=null,v2=null,M1=null;function ko(){if(M1)return M1;var e,n=v2,t=n.length,r,l="value"in le?le.value:le.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return M1=l.slice(e,1<r?1-r:void 0)}function O1(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function v1(){return!0}function vl(){return!1}function y0(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?v1:vl,this.isPropagationStopped=vl,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=v1)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=v1)},persist:function(){},isPersistent:v1}),n}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},g2=y0(Qn),s1=V({},Qn,{view:0,detail:0}),Ra=y0(s1),Ht,Kt,yn,ht=V({},s1,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:R2,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yn&&(yn&&e.type==="mousemove"?(Ht=e.screenX-yn.screenX,Kt=e.screenY-yn.screenY):Kt=Ht=0,yn=e),Ht)},movementY:function(e){return"movementY"in e?e.movementY:Kt}}),gl=y0(ht),wa=V({},ht,{dataTransfer:0}),ka=y0(wa),Sa=V({},s1,{relatedTarget:0}),bt=y0(Sa),Ca=V({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),ja=y0(Ca),Ea=V({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_a=y0(Ea),Ia=V({},Qn,{data:0}),Rl=y0(Ia),La={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},za={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ma={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oa(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ma[e])?!!n[e]:!1}function R2(){return Oa}var Aa=V({},s1,{key:function(e){if(e.key){var n=La[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=O1(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?za[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:R2,charCode:function(e){return e.type==="keypress"?O1(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?O1(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ba=y0(Aa),Fa=V({},ht,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wl=y0(Fa),$a=V({},s1,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:R2}),Ua=y0($a),Va=V({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wa=y0(Va),Ha=V({},ht,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ka=y0(Ha),ba=[9,13,27,32],w2=b0&&"CompositionEvent"in window,In=null;b0&&"documentMode"in document&&(In=document.documentMode);var Ya=b0&&"TextEvent"in window&&!In,So=b0&&(!w2||In&&8<In&&11>=In),kl=" ",Sl=!1;function Co(e,n){switch(e){case"keyup":return ba.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ue=!1;function Ga(e,n){switch(e){case"compositionend":return jo(n);case"keypress":return n.which!==32?null:(Sl=!0,kl);case"textInput":return e=n.data,e===kl&&Sl?null:e;default:return null}}function Xa(e,n){if(Ue)return e==="compositionend"||!w2&&Co(e,n)?(e=ko(),M1=v2=le=null,Ue=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return So&&n.locale!=="ko"?null:n.data;default:return null}}var Za={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Za[e.type]:n==="textarea"}function Eo(e,n,t,r){so(r),n=J1(n,"onChange"),0<n.length&&(t=new g2("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ln=null,Kn=null;function Ja(e){Uo(e,0)}function mt(e){var n=He(e);if(eo(n))return e}function qa(e,n){if(e==="change")return n}var _o=!1;if(b0){var Yt;if(b0){var Gt="oninput"in document;if(!Gt){var jl=document.createElement("div");jl.setAttribute("oninput","return;"),Gt=typeof jl.oninput=="function"}Yt=Gt}else Yt=!1;_o=Yt&&(!document.documentMode||9<document.documentMode)}function El(){Ln&&(Ln.detachEvent("onpropertychange",Io),Kn=Ln=null)}function Io(e){if(e.propertyName==="value"&&mt(Kn)){var n=[];Eo(n,Kn,e,T2(e)),fo(Ja,n)}}function e3(e,n,t){e==="focusin"?(El(),Ln=n,Kn=t,Ln.attachEvent("onpropertychange",Io)):e==="focusout"&&El()}function n3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mt(Kn)}function t3(e,n){if(e==="click")return mt(n)}function r3(e,n){if(e==="input"||e==="change")return mt(n)}function l3(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var M0=typeof Object.is=="function"?Object.is:l3;function bn(e,n){if(M0(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Qr.call(n,l)||!M0(e[l],n[l]))return!1}return!0}function _l(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Il(e,n){var t=_l(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=_l(t)}}function Lo(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Lo(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function zo(){for(var e=window,n=H1();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=H1(e.document)}return n}function k2(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function i3(e){var n=zo(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Lo(t.ownerDocument.documentElement,t)){if(r!==null&&k2(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Il(t,i);var o=Il(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var o3=b0&&"documentMode"in document&&11>=document.documentMode,Ve=null,_r=null,zn=null,Ir=!1;function Ll(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ir||Ve==null||Ve!==H1(r)||(r=Ve,"selectionStart"in r&&k2(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&bn(zn,r)||(zn=r,r=J1(_r,"onSelect"),0<r.length&&(n=new g2("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Ve)))}function g1(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var We={animationend:g1("Animation","AnimationEnd"),animationiteration:g1("Animation","AnimationIteration"),animationstart:g1("Animation","AnimationStart"),transitionend:g1("Transition","TransitionEnd")},Xt={},Mo={};b0&&(Mo=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Pt(e){if(Xt[e])return Xt[e];if(!We[e])return e;var n=We[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Mo)return Xt[e]=n[t];return e}var Oo=Pt("animationend"),Ao=Pt("animationiteration"),Bo=Pt("animationstart"),Fo=Pt("transitionend"),$o=new Map,zl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ne(e,n){$o.set(e,n),Oe(n,[e])}for(var Zt=0;Zt<zl.length;Zt++){var Jt=zl[Zt],s3=Jt.toLowerCase(),u3=Jt[0].toUpperCase()+Jt.slice(1);Ne(s3,"on"+u3)}Ne(Oo,"onAnimationEnd");Ne(Ao,"onAnimationIteration");Ne(Bo,"onAnimationStart");Ne("dblclick","onDoubleClick");Ne("focusin","onFocus");Ne("focusout","onBlur");Ne(Fo,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a3=new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));function Ml(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,sa(r,n,void 0,e),e.currentTarget=null}function Uo(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;Ml(l,s,c),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;Ml(l,s,c),i=u}}}if(b1)throw e=Sr,b1=!1,Sr=null,e}function O(e,n){var t=n[Ar];t===void 0&&(t=n[Ar]=new Set);var r=e+"__bubble";t.has(r)||(Vo(n,e,2,!1),t.add(r))}function qt(e,n,t){var r=0;n&&(r|=4),Vo(t,e,r,n)}var R1="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[R1]){e[R1]=!0,Gi.forEach(function(t){t!=="selectionchange"&&(a3.has(t)||qt(t,!1,e),qt(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[R1]||(n[R1]=!0,qt("selectionchange",!1,n))}}function Vo(e,n,t,r){switch(wo(n)){case 1:var l=va;break;case 4:l=ga;break;default:l=y2}t=l.bind(null,n,t,e),l=void 0,!kr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function er(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Re(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}fo(function(){var c=i,f=T2(t),D=[];e:{var Q=$o.get(e);if(Q!==void 0){var h=g2,N=e;switch(e){case"keypress":if(O1(t)===0)break e;case"keydown":case"keyup":h=Ba;break;case"focusin":N="focus",h=bt;break;case"focusout":N="blur",h=bt;break;case"beforeblur":case"afterblur":h=bt;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=gl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=ka;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Ua;break;case Oo:case Ao:case Bo:h=ja;break;case Fo:h=Wa;break;case"scroll":h=Ra;break;case"wheel":h=Ka;break;case"copy":case"cut":case"paste":h=_a;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=wl}var T=(n&4)!==0,y=!T&&e==="scroll",x=T?Q!==null?Q+"Capture":null:Q;T=[];for(var d=c,p;d!==null;){p=d;var m=p.stateNode;if(p.tag===5&&m!==null&&(p=m,x!==null&&(m=Un(d,x),m!=null&&T.push(Gn(d,m,p)))),y)break;d=d.return}0<T.length&&(Q=new h(Q,N,null,t,f),D.push({event:Q,listeners:T}))}}if(!(n&7)){e:{if(Q=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",Q&&t!==Rr&&(N=t.relatedTarget||t.fromElement)&&(Re(N)||N[Y0]))break e;if((h||Q)&&(Q=f.window===f?f:(Q=f.ownerDocument)?Q.defaultView||Q.parentWindow:window,h?(N=t.relatedTarget||t.toElement,h=c,N=N?Re(N):null,N!==null&&(y=Ae(N),N!==y||N.tag!==5&&N.tag!==6)&&(N=null)):(h=null,N=c),h!==N)){if(T=gl,m="onMouseLeave",x="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(T=wl,m="onPointerLeave",x="onPointerEnter",d="pointer"),y=h==null?Q:He(h),p=N==null?Q:He(N),Q=new T(m,d+"leave",h,t,f),Q.target=y,Q.relatedTarget=p,m=null,Re(f)===c&&(T=new T(x,d+"enter",N,t,f),T.target=p,T.relatedTarget=y,m=T),y=m,h&&N)n:{for(T=h,x=N,d=0,p=T;p;p=Be(p))d++;for(p=0,m=x;m;m=Be(m))p++;for(;0<d-p;)T=Be(T),d--;for(;0<p-d;)x=Be(x),p--;for(;d--;){if(T===x||x!==null&&T===x.alternate)break n;T=Be(T),x=Be(x)}T=null}else T=null;h!==null&&Ol(D,Q,h,T,!1),N!==null&&y!==null&&Ol(D,y,N,T,!0)}}e:{if(Q=c?He(c):window,h=Q.nodeName&&Q.nodeName.toLowerCase(),h==="select"||h==="input"&&Q.type==="file")var g=qa;else if(Cl(Q))if(_o)g=r3;else{g=n3;var k=e3}else(h=Q.nodeName)&&h.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(g=t3);if(g&&(g=g(e,c))){Eo(D,g,t,f);break e}k&&k(e,Q,c),e==="focusout"&&(k=Q._wrapperState)&&k.controlled&&Q.type==="number"&&mr(Q,"number",Q.value)}switch(k=c?He(c):window,e){case"focusin":(Cl(k)||k.contentEditable==="true")&&(Ve=k,_r=c,zn=null);break;case"focusout":zn=_r=Ve=null;break;case"mousedown":Ir=!0;break;case"contextmenu":case"mouseup":case"dragend":Ir=!1,Ll(D,t,f);break;case"selectionchange":if(o3)break;case"keydown":case"keyup":Ll(D,t,f)}var S;if(w2)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ue?Co(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(So&&t.locale!=="ko"&&(Ue||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ue&&(S=ko()):(le=f,v2="value"in le?le.value:le.textContent,Ue=!0)),k=J1(c,C),0<k.length&&(C=new Rl(C,e,null,t,f),D.push({event:C,listeners:k}),S?C.data=S:(S=jo(t),S!==null&&(C.data=S)))),(S=Ya?Ga(e,t):Xa(e,t))&&(c=J1(c,"onBeforeInput"),0<c.length&&(f=new Rl("onBeforeInput","beforeinput",null,t,f),D.push({event:f,listeners:c}),f.data=S))}Uo(D,n)})}function Gn(e,n,t){return{instance:e,listener:n,currentTarget:t}}function J1(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Un(e,t),i!=null&&r.unshift(Gn(e,i,l)),i=Un(e,n),i!=null&&r.push(Gn(e,i,l))),e=e.return}return r}function Be(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ol(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var s=t,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Un(t,i),u!=null&&o.unshift(Gn(t,u,s))):l||(u=Un(t,i),u!=null&&o.push(Gn(t,u,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var c3=/\r\n?/g,d3=/\u0000|\uFFFD/g;function Al(e){return(typeof e=="string"?e:""+e).replace(c3,`
`).replace(d3,"")}function w1(e,n,t){if(n=Al(n),Al(e)!==n&&t)throw Error(P(425))}function q1(){}var Lr=null,zr=null;function Mr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Or=typeof setTimeout=="function"?setTimeout:void 0,f3=typeof clearTimeout=="function"?clearTimeout:void 0,Bl=typeof Promise=="function"?Promise:void 0,Q3=typeof queueMicrotask=="function"?queueMicrotask:typeof Bl<"u"?function(e){return Bl.resolve(null).then(e).catch(D3)}:Or;function D3(e){setTimeout(function(){throw e})}function nr(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Hn(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Hn(n)}function ce(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Fl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Dn=Math.random().toString(36).slice(2),B0="__reactFiber$"+Dn,Xn="__reactProps$"+Dn,Y0="__reactContainer$"+Dn,Ar="__reactEvents$"+Dn,x3="__reactListeners$"+Dn,p3="__reactHandles$"+Dn;function Re(e){var n=e[B0];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Y0]||t[B0]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Fl(e);e!==null;){if(t=e[B0])return t;e=Fl(e)}return n}e=t,t=e.parentNode}return null}function u1(e){return e=e[B0]||e[Y0],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function He(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function yt(e){return e[Xn]||null}var Br=[],Ke=-1;function Te(e){return{current:e}}function A(e){0>Ke||(e.current=Br[Ke],Br[Ke]=null,Ke--)}function M(e,n){Ke++,Br[Ke]=e.current,e.current=n}var pe={},s0=Te(pe),D0=Te(!1),Ee=pe;function on(e,n){var t=e.type.contextTypes;if(!t)return pe;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function x0(e){return e=e.childContextTypes,e!=null}function et(){A(D0),A(s0)}function $l(e,n,t){if(s0.current!==pe)throw Error(P(168));M(s0,n),M(D0,t)}function Wo(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(P(108,ea(e)||"Unknown",l));return V({},t,r)}function nt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pe,Ee=s0.current,M(s0,e),M(D0,D0.current),!0}function Ul(e,n,t){var r=e.stateNode;if(!r)throw Error(P(169));t?(e=Wo(e,n,Ee),r.__reactInternalMemoizedMergedChildContext=e,A(D0),A(s0),M(s0,e)):A(D0),M(D0,t)}var V0=null,vt=!1,tr=!1;function Ho(e){V0===null?V0=[e]:V0.push(e)}function N3(e){vt=!0,Ho(e)}function he(){if(!tr&&V0!==null){tr=!0;var e=0,n=z;try{var t=V0;for(z=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}V0=null,vt=!1}catch(l){throw V0!==null&&(V0=V0.slice(e+1)),po(h2,he),l}finally{z=n,tr=!1}}return null}var be=[],Ye=0,tt=null,rt=0,v0=[],g0=0,_e=null,W0=1,H0="";function ve(e,n){be[Ye++]=rt,be[Ye++]=tt,tt=e,rt=n}function Ko(e,n,t){v0[g0++]=W0,v0[g0++]=H0,v0[g0++]=_e,_e=e;var r=W0;e=H0;var l=32-L0(r)-1;r&=~(1<<l),t+=1;var i=32-L0(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,W0=1<<32-L0(n)+l|t<<l|r,H0=i+e}else W0=1<<i|t<<l|r,H0=e}function S2(e){e.return!==null&&(ve(e,1),Ko(e,1,0))}function C2(e){for(;e===tt;)tt=be[--Ye],be[Ye]=null,rt=be[--Ye],be[Ye]=null;for(;e===_e;)_e=v0[--g0],v0[g0]=null,H0=v0[--g0],v0[g0]=null,W0=v0[--g0],v0[g0]=null}var h0=null,T0=null,B=!1,I0=null;function bo(e,n){var t=R0(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Vl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,h0=e,T0=ce(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,h0=e,T0=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=_e!==null?{id:W0,overflow:H0}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=R0(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,h0=e,T0=null,!0):!1;default:return!1}}function Fr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $r(e){if(B){var n=T0;if(n){var t=n;if(!Vl(e,n)){if(Fr(e))throw Error(P(418));n=ce(t.nextSibling);var r=h0;n&&Vl(e,n)?bo(r,t):(e.flags=e.flags&-4097|2,B=!1,h0=e)}}else{if(Fr(e))throw Error(P(418));e.flags=e.flags&-4097|2,B=!1,h0=e}}}function Wl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;h0=e}function k1(e){if(e!==h0)return!1;if(!B)return Wl(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Mr(e.type,e.memoizedProps)),n&&(n=T0)){if(Fr(e))throw Yo(),Error(P(418));for(;n;)bo(e,n),n=ce(n.nextSibling)}if(Wl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){T0=ce(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}T0=null}}else T0=h0?ce(e.stateNode.nextSibling):null;return!0}function Yo(){for(var e=T0;e;)e=ce(e.nextSibling)}function sn(){T0=h0=null,B=!1}function j2(e){I0===null?I0=[e]:I0.push(e)}var T3=Z0.ReactCurrentBatchConfig;function vn(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var r=t.stateNode}if(!r)throw Error(P(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function S1(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Hl(e){var n=e._init;return n(e._payload)}function Go(e){function n(x,d){if(e){var p=x.deletions;p===null?(x.deletions=[d],x.flags|=16):p.push(d)}}function t(x,d){if(!e)return null;for(;d!==null;)n(x,d),d=d.sibling;return null}function r(x,d){for(x=new Map;d!==null;)d.key!==null?x.set(d.key,d):x.set(d.index,d),d=d.sibling;return x}function l(x,d){return x=De(x,d),x.index=0,x.sibling=null,x}function i(x,d,p){return x.index=p,e?(p=x.alternate,p!==null?(p=p.index,p<d?(x.flags|=2,d):p):(x.flags|=2,d)):(x.flags|=1048576,d)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function s(x,d,p,m){return d===null||d.tag!==6?(d=ar(p,x.mode,m),d.return=x,d):(d=l(d,p),d.return=x,d)}function u(x,d,p,m){var g=p.type;return g===$e?f(x,d,p.props.children,m,p.key):d!==null&&(d.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===ee&&Hl(g)===d.type)?(m=l(d,p.props),m.ref=vn(x,d,p),m.return=x,m):(m=W1(p.type,p.key,p.props,null,x.mode,m),m.ref=vn(x,d,p),m.return=x,m)}function c(x,d,p,m){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=cr(p,x.mode,m),d.return=x,d):(d=l(d,p.children||[]),d.return=x,d)}function f(x,d,p,m,g){return d===null||d.tag!==7?(d=Ce(p,x.mode,m,g),d.return=x,d):(d=l(d,p),d.return=x,d)}function D(x,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ar(""+d,x.mode,p),d.return=x,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case N1:return p=W1(d.type,d.key,d.props,null,x.mode,p),p.ref=vn(x,null,d),p.return=x,p;case Fe:return d=cr(d,x.mode,p),d.return=x,d;case ee:var m=d._init;return D(x,m(d._payload),p)}if(Sn(d)||Tn(d))return d=Ce(d,x.mode,p,null),d.return=x,d;S1(x,d)}return null}function Q(x,d,p,m){var g=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return g!==null?null:s(x,d,""+p,m);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case N1:return p.key===g?u(x,d,p,m):null;case Fe:return p.key===g?c(x,d,p,m):null;case ee:return g=p._init,Q(x,d,g(p._payload),m)}if(Sn(p)||Tn(p))return g!==null?null:f(x,d,p,m,null);S1(x,p)}return null}function h(x,d,p,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return x=x.get(p)||null,s(d,x,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case N1:return x=x.get(m.key===null?p:m.key)||null,u(d,x,m,g);case Fe:return x=x.get(m.key===null?p:m.key)||null,c(d,x,m,g);case ee:var k=m._init;return h(x,d,p,k(m._payload),g)}if(Sn(m)||Tn(m))return x=x.get(p)||null,f(d,x,m,g,null);S1(d,m)}return null}function N(x,d,p,m){for(var g=null,k=null,S=d,C=d=0,H=null;S!==null&&C<p.length;C++){S.index>C?(H=S,S=null):H=S.sibling;var I=Q(x,S,p[C],m);if(I===null){S===null&&(S=H);break}e&&S&&I.alternate===null&&n(x,S),d=i(I,d,C),k===null?g=I:k.sibling=I,k=I,S=H}if(C===p.length)return t(x,S),B&&ve(x,C),g;if(S===null){for(;C<p.length;C++)S=D(x,p[C],m),S!==null&&(d=i(S,d,C),k===null?g=S:k.sibling=S,k=S);return B&&ve(x,C),g}for(S=r(x,S);C<p.length;C++)H=h(S,x,C,p[C],m),H!==null&&(e&&H.alternate!==null&&S.delete(H.key===null?C:H.key),d=i(H,d,C),k===null?g=H:k.sibling=H,k=H);return e&&S.forEach(function(C0){return n(x,C0)}),B&&ve(x,C),g}function T(x,d,p,m){var g=Tn(p);if(typeof g!="function")throw Error(P(150));if(p=g.call(p),p==null)throw Error(P(151));for(var k=g=null,S=d,C=d=0,H=null,I=p.next();S!==null&&!I.done;C++,I=p.next()){S.index>C?(H=S,S=null):H=S.sibling;var C0=Q(x,S,I.value,m);if(C0===null){S===null&&(S=H);break}e&&S&&C0.alternate===null&&n(x,S),d=i(C0,d,C),k===null?g=C0:k.sibling=C0,k=C0,S=H}if(I.done)return t(x,S),B&&ve(x,C),g;if(S===null){for(;!I.done;C++,I=p.next())I=D(x,I.value,m),I!==null&&(d=i(I,d,C),k===null?g=I:k.sibling=I,k=I);return B&&ve(x,C),g}for(S=r(x,S);!I.done;C++,I=p.next())I=h(S,x,C,I.value,m),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?C:I.key),d=i(I,d,C),k===null?g=I:k.sibling=I,k=I);return e&&S.forEach(function(pn){return n(x,pn)}),B&&ve(x,C),g}function y(x,d,p,m){if(typeof p=="object"&&p!==null&&p.type===$e&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case N1:e:{for(var g=p.key,k=d;k!==null;){if(k.key===g){if(g=p.type,g===$e){if(k.tag===7){t(x,k.sibling),d=l(k,p.props.children),d.return=x,x=d;break e}}else if(k.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===ee&&Hl(g)===k.type){t(x,k.sibling),d=l(k,p.props),d.ref=vn(x,k,p),d.return=x,x=d;break e}t(x,k);break}else n(x,k);k=k.sibling}p.type===$e?(d=Ce(p.props.children,x.mode,m,p.key),d.return=x,x=d):(m=W1(p.type,p.key,p.props,null,x.mode,m),m.ref=vn(x,d,p),m.return=x,x=m)}return o(x);case Fe:e:{for(k=p.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){t(x,d.sibling),d=l(d,p.children||[]),d.return=x,x=d;break e}else{t(x,d);break}else n(x,d);d=d.sibling}d=cr(p,x.mode,m),d.return=x,x=d}return o(x);case ee:return k=p._init,y(x,d,k(p._payload),m)}if(Sn(p))return N(x,d,p,m);if(Tn(p))return T(x,d,p,m);S1(x,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(t(x,d.sibling),d=l(d,p),d.return=x,x=d):(t(x,d),d=ar(p,x.mode,m),d.return=x,x=d),o(x)):t(x,d)}return y}var un=Go(!0),Xo=Go(!1),lt=Te(null),it=null,Ge=null,E2=null;function _2(){E2=Ge=it=null}function I2(e){var n=lt.current;A(lt),e._currentValue=n}function Ur(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function tn(e,n){it=e,E2=Ge=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Q0=!0),e.firstContext=null)}function k0(e){var n=e._currentValue;if(E2!==e)if(e={context:e,memoizedValue:n,next:null},Ge===null){if(it===null)throw Error(P(308));Ge=e,it.dependencies={lanes:0,firstContext:e}}else Ge=Ge.next=e;return n}var we=null;function L2(e){we===null?we=[e]:we.push(e)}function Zo(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,L2(n)):(t.next=l.next,l.next=t),n.interleaved=t,G0(e,r)}function G0(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ne=!1;function z2(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function K0(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function de(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,G0(e,t)}return l=r.interleaved,l===null?(n.next=n,L2(r)):(n.next=l.next,l.next=n),r.interleaved=n,G0(e,t)}function A1(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,m2(e,t)}}function Kl(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ot(e,n,t,r){var l=e.updateQueue;ne=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=u))}if(i!==null){var D=l.baseState;o=0,f=c=u=null,s=i;do{var Q=s.lane,h=s.eventTime;if((r&Q)===Q){f!==null&&(f=f.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,T=s;switch(Q=n,h=t,T.tag){case 1:if(N=T.payload,typeof N=="function"){D=N.call(h,D,Q);break e}D=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=T.payload,Q=typeof N=="function"?N.call(h,D,Q):N,Q==null)break e;D=V({},D,Q);break e;case 2:ne=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,Q=l.effects,Q===null?l.effects=[s]:Q.push(s))}else h={eventTime:h,lane:Q,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=h,u=D):f=f.next=h,o|=Q;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;Q=s,s=Q.next,Q.next=null,l.lastBaseUpdate=Q,l.shared.pending=null}}while(!0);if(f===null&&(u=D),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=f,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);Le|=o,e.lanes=o,e.memoizedState=D}}function bl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(P(191,l));l.call(r)}}}var a1={},$0=Te(a1),Zn=Te(a1),Jn=Te(a1);function ke(e){if(e===a1)throw Error(P(174));return e}function M2(e,n){switch(M(Jn,n),M(Zn,e),M($0,a1),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:yr(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=yr(n,e)}A($0),M($0,n)}function an(){A($0),A(Zn),A(Jn)}function qo(e){ke(Jn.current);var n=ke($0.current),t=yr(n,e.type);n!==t&&(M(Zn,e),M($0,t))}function O2(e){Zn.current===e&&(A($0),A(Zn))}var F=Te(0);function st(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var rr=[];function A2(){for(var e=0;e<rr.length;e++)rr[e]._workInProgressVersionPrimary=null;rr.length=0}var B1=Z0.ReactCurrentDispatcher,lr=Z0.ReactCurrentBatchConfig,Ie=0,U=null,X=null,q=null,ut=!1,Mn=!1,qn=0,h3=0;function l0(){throw Error(P(321))}function B2(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!M0(e[t],n[t]))return!1;return!0}function F2(e,n,t,r,l,i){if(Ie=i,U=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B1.current=e===null||e.memoizedState===null?v3:g3,e=t(r,l),Mn){i=0;do{if(Mn=!1,qn=0,25<=i)throw Error(P(301));i+=1,q=X=null,n.updateQueue=null,B1.current=R3,e=t(r,l)}while(Mn)}if(B1.current=at,n=X!==null&&X.next!==null,Ie=0,q=X=U=null,ut=!1,n)throw Error(P(300));return e}function $2(){var e=qn!==0;return qn=0,e}function A0(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?U.memoizedState=q=e:q=q.next=e,q}function S0(){if(X===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=q===null?U.memoizedState:q.next;if(n!==null)q=n,X=e;else{if(e===null)throw Error(P(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?U.memoizedState=q=e:q=q.next=e}return q}function e1(e,n){return typeof n=="function"?n(e):n}function ir(e){var n=S0(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=X,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,c=i;do{var f=c.lane;if((Ie&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var D={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=D,o=r):u=u.next=D,U.lanes|=f,Le|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=s,M0(r,n.memoizedState)||(Q0=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,U.lanes|=i,Le|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function or(e){var n=S0(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);M0(i,n.memoizedState)||(Q0=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function es(){}function ns(e,n){var t=U,r=S0(),l=n(),i=!M0(r.memoizedState,l);if(i&&(r.memoizedState=l,Q0=!0),r=r.queue,U2(ls.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||q!==null&&q.memoizedState.tag&1){if(t.flags|=2048,n1(9,rs.bind(null,t,r,l,n),void 0,null),e0===null)throw Error(P(349));Ie&30||ts(t,n,l)}return l}function ts(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function rs(e,n,t,r){n.value=t,n.getSnapshot=r,is(n)&&os(e)}function ls(e,n,t){return t(function(){is(n)&&os(e)})}function is(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!M0(e,t)}catch{return!0}}function os(e){var n=G0(e,1);n!==null&&z0(n,e,1,-1)}function Yl(e){var n=A0();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e1,lastRenderedState:e},n.queue=e,e=e.dispatch=y3.bind(null,U,e),[n.memoizedState,e]}function n1(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ss(){return S0().memoizedState}function F1(e,n,t,r){var l=A0();U.flags|=e,l.memoizedState=n1(1|n,t,void 0,r===void 0?null:r)}function gt(e,n,t,r){var l=S0();r=r===void 0?null:r;var i=void 0;if(X!==null){var o=X.memoizedState;if(i=o.destroy,r!==null&&B2(r,o.deps)){l.memoizedState=n1(n,t,i,r);return}}U.flags|=e,l.memoizedState=n1(1|n,t,i,r)}function Gl(e,n){return F1(8390656,8,e,n)}function U2(e,n){return gt(2048,8,e,n)}function us(e,n){return gt(4,2,e,n)}function as(e,n){return gt(4,4,e,n)}function cs(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ds(e,n,t){return t=t!=null?t.concat([e]):null,gt(4,4,cs.bind(null,n,e),t)}function V2(){}function fs(e,n){var t=S0();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&B2(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Qs(e,n){var t=S0();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&B2(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ds(e,n,t){return Ie&21?(M0(t,n)||(t=ho(),U.lanes|=t,Le|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Q0=!0),e.memoizedState=t)}function m3(e,n){var t=z;z=t!==0&&4>t?t:4,e(!0);var r=lr.transition;lr.transition={};try{e(!1),n()}finally{z=t,lr.transition=r}}function xs(){return S0().memoizedState}function P3(e,n,t){var r=Qe(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ps(e))Ns(n,t);else if(t=Zo(e,n,t,r),t!==null){var l=a0();z0(t,e,r,l),Ts(t,n,r)}}function y3(e,n,t){var r=Qe(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ps(e))Ns(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,s=i(o,t);if(l.hasEagerState=!0,l.eagerState=s,M0(s,o)){var u=n.interleaved;u===null?(l.next=l,L2(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=Zo(e,n,l,r),t!==null&&(l=a0(),z0(t,e,r,l),Ts(t,n,r))}}function ps(e){var n=e.alternate;return e===U||n!==null&&n===U}function Ns(e,n){Mn=ut=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ts(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,m2(e,t)}}var at={readContext:k0,useCallback:l0,useContext:l0,useEffect:l0,useImperativeHandle:l0,useInsertionEffect:l0,useLayoutEffect:l0,useMemo:l0,useReducer:l0,useRef:l0,useState:l0,useDebugValue:l0,useDeferredValue:l0,useTransition:l0,useMutableSource:l0,useSyncExternalStore:l0,useId:l0,unstable_isNewReconciler:!1},v3={readContext:k0,useCallback:function(e,n){return A0().memoizedState=[e,n===void 0?null:n],e},useContext:k0,useEffect:Gl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,F1(4194308,4,cs.bind(null,n,e),t)},useLayoutEffect:function(e,n){return F1(4194308,4,e,n)},useInsertionEffect:function(e,n){return F1(4,2,e,n)},useMemo:function(e,n){var t=A0();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=A0();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=P3.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var n=A0();return e={current:e},n.memoizedState=e},useState:Yl,useDebugValue:V2,useDeferredValue:function(e){return A0().memoizedState=e},useTransition:function(){var e=Yl(!1),n=e[0];return e=m3.bind(null,e[1]),A0().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=U,l=A0();if(B){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),e0===null)throw Error(P(349));Ie&30||ts(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,Gl(ls.bind(null,r,i,e),[e]),r.flags|=2048,n1(9,rs.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=A0(),n=e0.identifierPrefix;if(B){var t=H0,r=W0;t=(r&~(1<<32-L0(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=qn++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=h3++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},g3={readContext:k0,useCallback:fs,useContext:k0,useEffect:U2,useImperativeHandle:ds,useInsertionEffect:us,useLayoutEffect:as,useMemo:Qs,useReducer:ir,useRef:ss,useState:function(){return ir(e1)},useDebugValue:V2,useDeferredValue:function(e){var n=S0();return Ds(n,X.memoizedState,e)},useTransition:function(){var e=ir(e1)[0],n=S0().memoizedState;return[e,n]},useMutableSource:es,useSyncExternalStore:ns,useId:xs,unstable_isNewReconciler:!1},R3={readContext:k0,useCallback:fs,useContext:k0,useEffect:U2,useImperativeHandle:ds,useInsertionEffect:us,useLayoutEffect:as,useMemo:Qs,useReducer:or,useRef:ss,useState:function(){return or(e1)},useDebugValue:V2,useDeferredValue:function(e){var n=S0();return X===null?n.memoizedState=e:Ds(n,X.memoizedState,e)},useTransition:function(){var e=or(e1)[0],n=S0().memoizedState;return[e,n]},useMutableSource:es,useSyncExternalStore:ns,useId:xs,unstable_isNewReconciler:!1};function E0(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Vr(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Rt={isMounted:function(e){return(e=e._reactInternals)?Ae(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=a0(),l=Qe(e),i=K0(r,l);i.payload=n,t!=null&&(i.callback=t),n=de(e,i,l),n!==null&&(z0(n,e,l,r),A1(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=a0(),l=Qe(e),i=K0(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=de(e,i,l),n!==null&&(z0(n,e,l,r),A1(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=a0(),r=Qe(e),l=K0(t,r);l.tag=2,n!=null&&(l.callback=n),n=de(e,l,r),n!==null&&(z0(n,e,r,t),A1(n,e,r))}};function Xl(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!bn(t,r)||!bn(l,i):!0}function hs(e,n,t){var r=!1,l=pe,i=n.contextType;return typeof i=="object"&&i!==null?i=k0(i):(l=x0(n)?Ee:s0.current,r=n.contextTypes,i=(r=r!=null)?on(e,l):pe),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Rt,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Zl(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Rt.enqueueReplaceState(n,n.state,null)}function Wr(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},z2(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=k0(i):(i=x0(n)?Ee:s0.current,l.context=on(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Vr(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Rt.enqueueReplaceState(l,l.state,null),ot(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,n){try{var t="",r=n;do t+=qu(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function sr(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Hr(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var w3=typeof WeakMap=="function"?WeakMap:Map;function ms(e,n,t){t=K0(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){dt||(dt=!0,n2=r),Hr(e,n)},t}function Ps(e,n,t){t=K0(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Hr(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Hr(e,n),typeof r!="function"&&(fe===null?fe=new Set([this]):fe.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Jl(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new w3;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=F3.bind(null,e,n,t),n.then(e,e))}function ql(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ei(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=K0(-1,1),n.tag=2,de(t,n,1))),t.lanes|=1),e)}var k3=Z0.ReactCurrentOwner,Q0=!1;function u0(e,n,t,r){n.child=e===null?Xo(n,null,t,r):un(n,e.child,t,r)}function ni(e,n,t,r,l){t=t.render;var i=n.ref;return tn(n,l),r=F2(e,n,t,r,i,l),t=$2(),e!==null&&!Q0?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,X0(e,n,l)):(B&&t&&S2(n),n.flags|=1,u0(e,n,r,l),n.child)}function ti(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!Z2(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,ys(e,n,i,r,l)):(e=W1(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:bn,t(o,r)&&e.ref===n.ref)return X0(e,n,l)}return n.flags|=1,e=De(i,r),e.ref=n.ref,e.return=n,n.child=e}function ys(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(bn(i,r)&&e.ref===n.ref)if(Q0=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Q0=!0);else return n.lanes=e.lanes,X0(e,n,l)}return Kr(e,n,t,r,l)}function vs(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Ze,N0),N0|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,M(Ze,N0),N0|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,M(Ze,N0),N0|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,M(Ze,N0),N0|=r;return u0(e,n,l,t),n.child}function gs(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Kr(e,n,t,r,l){var i=x0(t)?Ee:s0.current;return i=on(n,i),tn(n,l),t=F2(e,n,t,r,i,l),r=$2(),e!==null&&!Q0?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,X0(e,n,l)):(B&&r&&S2(n),n.flags|=1,u0(e,n,t,l),n.child)}function ri(e,n,t,r,l){if(x0(t)){var i=!0;nt(n)}else i=!1;if(tn(n,l),n.stateNode===null)$1(e,n),hs(n,t,r),Wr(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=k0(c):(c=x0(t)?Ee:s0.current,c=on(n,c));var f=t.getDerivedStateFromProps,D=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";D||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Zl(n,o,r,c),ne=!1;var Q=n.memoizedState;o.state=Q,ot(n,r,o,l),u=n.memoizedState,s!==r||Q!==u||D0.current||ne?(typeof f=="function"&&(Vr(n,t,f,r),u=n.memoizedState),(s=ne||Xl(n,t,s,r,Q,u,c))?(D||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),o.props=r,o.state=u,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Jo(e,n),s=n.memoizedProps,c=n.type===n.elementType?s:E0(n.type,s),o.props=c,D=n.pendingProps,Q=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=k0(u):(u=x0(t)?Ee:s0.current,u=on(n,u));var h=t.getDerivedStateFromProps;(f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==D||Q!==u)&&Zl(n,o,r,u),ne=!1,Q=n.memoizedState,o.state=Q,ot(n,r,o,l);var N=n.memoizedState;s!==D||Q!==N||D0.current||ne?(typeof h=="function"&&(Vr(n,t,h,r),N=n.memoizedState),(c=ne||Xl(n,t,c,r,Q,N,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=N),o.props=r,o.state=N,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),r=!1)}return br(e,n,t,r,i,l)}function br(e,n,t,r,l,i){gs(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&Ul(n,t,!1),X0(e,n,i);r=n.stateNode,k3.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=un(n,e.child,null,i),n.child=un(n,null,s,i)):u0(e,n,s,i),n.memoizedState=r.state,l&&Ul(n,t,!0),n.child}function Rs(e){var n=e.stateNode;n.pendingContext?$l(e,n.pendingContext,n.pendingContext!==n.context):n.context&&$l(e,n.context,!1),M2(e,n.containerInfo)}function li(e,n,t,r,l){return sn(),j2(l),n.flags|=256,u0(e,n,t,r),n.child}var Yr={dehydrated:null,treeContext:null,retryLane:0};function Gr(e){return{baseLanes:e,cachePool:null,transitions:null}}function ws(e,n,t){var r=n.pendingProps,l=F.current,i=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(F,l&1),e===null)return $r(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=St(o,r,0,null),e=Ce(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Gr(t),n.memoizedState=Yr,e):W2(n,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return S3(e,n,o,r,s,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=De(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=De(s,i):(i=Ce(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Gr(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Yr,r}return i=e.child,e=i.sibling,r=De(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function W2(e,n){return n=St({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function C1(e,n,t,r){return r!==null&&j2(r),un(n,e.child,null,t),e=W2(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function S3(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=sr(Error(P(422))),C1(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=St({mode:"visible",children:r.children},l,0,null),i=Ce(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&un(n,e.child,null,o),n.child.memoizedState=Gr(o),n.memoizedState=Yr,i);if(!(n.mode&1))return C1(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(P(419)),r=sr(i,r,void 0),C1(e,n,o,r)}if(s=(o&e.childLanes)!==0,Q0||s){if(r=e0,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,G0(e,l),z0(r,e,l,-1))}return X2(),r=sr(Error(P(421))),C1(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=$3.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,T0=ce(l.nextSibling),h0=n,B=!0,I0=null,e!==null&&(v0[g0++]=W0,v0[g0++]=H0,v0[g0++]=_e,W0=e.id,H0=e.overflow,_e=n),n=W2(n,r.children),n.flags|=4096,n)}function ii(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ur(e.return,n,t)}function ur(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function ks(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(u0(e,n,r.children,t),r=F.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ii(e,t,n);else if(e.tag===19)ii(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(F,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&st(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),ur(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&st(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}ur(n,!0,t,null,i);break;case"together":ur(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function $1(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function X0(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Le|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=De(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=De(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function C3(e,n,t){switch(n.tag){case 3:Rs(n),sn();break;case 5:qo(n);break;case 1:x0(n.type)&&nt(n);break;case 4:M2(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;M(lt,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(M(F,F.current&1),n.flags|=128,null):t&n.child.childLanes?ws(e,n,t):(M(F,F.current&1),e=X0(e,n,t),e!==null?e.sibling:null);M(F,F.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return ks(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(F,F.current),r)break;return null;case 22:case 23:return n.lanes=0,vs(e,n,t)}return X0(e,n,t)}var Ss,Xr,Cs,js;Ss=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Xr=function(){};Cs=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,ke($0.current);var i=null;switch(t){case"input":l=Tr(e,l),r=Tr(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=Pr(e,l),r=Pr(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=q1)}vr(t,r);var o;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(i||(i=[]),i.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&O("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};js=function(e,n,t,r){t!==r&&(n.flags|=4)};function gn(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function i0(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function j3(e,n,t){var r=n.pendingProps;switch(C2(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return i0(n),null;case 1:return x0(n.type)&&et(),i0(n),null;case 3:return r=n.stateNode,an(),A(D0),A(s0),A2(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(k1(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,I0!==null&&(l2(I0),I0=null))),Xr(e,n),i0(n),null;case 5:O2(n);var l=ke(Jn.current);if(t=n.type,e!==null&&n.stateNode!=null)Cs(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(P(166));return i0(n),null}if(e=ke($0.current),k1(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[B0]=n,r[Xn]=i,e=(n.mode&1)!==0,t){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<jn.length;l++)O(jn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Dl(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":pl(r,i),O("invalid",r)}vr(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&w1(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&w1(r.textContent,s,e),l=["children",""+s]):Fn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&O("scroll",r)}switch(t){case"input":T1(r),xl(r,i,!0);break;case"textarea":T1(r),Nl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=q1)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ro(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[B0]=n,e[Xn]=r,Ss(e,n,!1,!1),n.stateNode=e;e:{switch(o=gr(t,r),t){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<jn.length;l++)O(jn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Dl(e,r),l=Tr(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),O("invalid",e);break;case"textarea":pl(e,r),l=Pr(e,r),O("invalid",e);break;default:l=r}vr(t,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?oo(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&lo(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&$n(e,u):typeof u=="number"&&$n(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Fn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&O("scroll",e):u!=null&&D2(e,i,u,o))}switch(t){case"input":T1(e),xl(e,r,!1);break;case"textarea":T1(e),Nl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xe(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Je(e,!!r.multiple,i,!1):r.defaultValue!=null&&Je(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=q1)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return i0(n),null;case 6:if(e&&n.stateNode!=null)js(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(P(166));if(t=ke(Jn.current),ke($0.current),k1(n)){if(r=n.stateNode,t=n.memoizedProps,r[B0]=n,(i=r.nodeValue!==t)&&(e=h0,e!==null))switch(e.tag){case 3:w1(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&w1(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[B0]=n,n.stateNode=r}return i0(n),null;case 13:if(A(F),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&T0!==null&&n.mode&1&&!(n.flags&128))Yo(),sn(),n.flags|=98560,i=!1;else if(i=k1(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[B0]=n}else sn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;i0(n),i=!1}else I0!==null&&(l2(I0),I0=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||F.current&1?Z===0&&(Z=3):X2())),n.updateQueue!==null&&(n.flags|=4),i0(n),null);case 4:return an(),Xr(e,n),e===null&&Yn(n.stateNode.containerInfo),i0(n),null;case 10:return I2(n.type._context),i0(n),null;case 17:return x0(n.type)&&et(),i0(n),null;case 19:if(A(F),i=n.memoizedState,i===null)return i0(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)gn(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=st(e),o!==null){for(n.flags|=128,gn(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return M(F,F.current&1|2),n.child}e=e.sibling}i.tail!==null&&b()>dn&&(n.flags|=128,r=!0,gn(i,!1),n.lanes=4194304)}else{if(!r)if(e=st(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),gn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!B)return i0(n),null}else 2*b()-i.renderingStartTime>dn&&t!==1073741824&&(n.flags|=128,r=!0,gn(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=b(),n.sibling=null,t=F.current,M(F,r?t&1|2:t&1),n):(i0(n),null);case 22:case 23:return G2(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?N0&1073741824&&(i0(n),n.subtreeFlags&6&&(n.flags|=8192)):i0(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function E3(e,n){switch(C2(n),n.tag){case 1:return x0(n.type)&&et(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return an(),A(D0),A(s0),A2(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return O2(n),null;case 13:if(A(F),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));sn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return A(F),null;case 4:return an(),null;case 10:return I2(n.type._context),null;case 22:case 23:return G2(),null;case 24:return null;default:return null}}var j1=!1,o0=!1,_3=typeof WeakSet=="function"?WeakSet:Set,R=null;function Xe(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){W(e,n,r)}else t.current=null}function Zr(e,n,t){try{t()}catch(r){W(e,n,r)}}var oi=!1;function I3(e,n){if(Lr=X1,e=zo(),k2(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,s=-1,u=-1,c=0,f=0,D=e,Q=null;n:for(;;){for(var h;D!==t||l!==0&&D.nodeType!==3||(s=o+l),D!==i||r!==0&&D.nodeType!==3||(u=o+r),D.nodeType===3&&(o+=D.nodeValue.length),(h=D.firstChild)!==null;)Q=D,D=h;for(;;){if(D===e)break n;if(Q===t&&++c===l&&(s=o),Q===i&&++f===r&&(u=o),(h=D.nextSibling)!==null)break;D=Q,Q=D.parentNode}D=h}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(zr={focusedElem:e,selectionRange:t},X1=!1,R=n;R!==null;)if(n=R,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,R=e;else for(;R!==null;){n=R;try{var N=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var T=N.memoizedProps,y=N.memoizedState,x=n.stateNode,d=x.getSnapshotBeforeUpdate(n.elementType===n.type?T:E0(n.type,T),y);x.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(m){W(n,n.return,m)}if(e=n.sibling,e!==null){e.return=n.return,R=e;break}R=n.return}return N=oi,oi=!1,N}function On(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Zr(n,t,i)}l=l.next}while(l!==r)}}function wt(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Jr(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Es(e){var n=e.alternate;n!==null&&(e.alternate=null,Es(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[B0],delete n[Xn],delete n[Ar],delete n[x3],delete n[p3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _s(e){return e.tag===5||e.tag===3||e.tag===4}function si(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_s(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qr(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=q1));else if(r!==4&&(e=e.child,e!==null))for(qr(e,n,t),e=e.sibling;e!==null;)qr(e,n,t),e=e.sibling}function e2(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(e2(e,n,t),e=e.sibling;e!==null;)e2(e,n,t),e=e.sibling}var n0=null,_0=!1;function J0(e,n,t){for(t=t.child;t!==null;)Is(e,n,t),t=t.sibling}function Is(e,n,t){if(F0&&typeof F0.onCommitFiberUnmount=="function")try{F0.onCommitFiberUnmount(Tt,t)}catch{}switch(t.tag){case 5:o0||Xe(t,n);case 6:var r=n0,l=_0;n0=null,J0(e,n,t),n0=r,_0=l,n0!==null&&(_0?(e=n0,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):n0.removeChild(t.stateNode));break;case 18:n0!==null&&(_0?(e=n0,t=t.stateNode,e.nodeType===8?nr(e.parentNode,t):e.nodeType===1&&nr(e,t),Hn(e)):nr(n0,t.stateNode));break;case 4:r=n0,l=_0,n0=t.stateNode.containerInfo,_0=!0,J0(e,n,t),n0=r,_0=l;break;case 0:case 11:case 14:case 15:if(!o0&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Zr(t,n,o),l=l.next}while(l!==r)}J0(e,n,t);break;case 1:if(!o0&&(Xe(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){W(t,n,s)}J0(e,n,t);break;case 21:J0(e,n,t);break;case 22:t.mode&1?(o0=(r=o0)||t.memoizedState!==null,J0(e,n,t),o0=r):J0(e,n,t);break;default:J0(e,n,t)}}function ui(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new _3),n.forEach(function(r){var l=U3.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function j0(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:n0=s.stateNode,_0=!1;break e;case 3:n0=s.stateNode.containerInfo,_0=!0;break e;case 4:n0=s.stateNode.containerInfo,_0=!0;break e}s=s.return}if(n0===null)throw Error(P(160));Is(i,o,l),n0=null,_0=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){W(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ls(n,e),n=n.sibling}function Ls(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(j0(n,e),O0(e),r&4){try{On(3,e,e.return),wt(3,e)}catch(T){W(e,e.return,T)}try{On(5,e,e.return)}catch(T){W(e,e.return,T)}}break;case 1:j0(n,e),O0(e),r&512&&t!==null&&Xe(t,t.return);break;case 5:if(j0(n,e),O0(e),r&512&&t!==null&&Xe(t,t.return),e.flags&32){var l=e.stateNode;try{$n(l,"")}catch(T){W(e,e.return,T)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&no(l,i),gr(s,o);var c=gr(s,i);for(o=0;o<u.length;o+=2){var f=u[o],D=u[o+1];f==="style"?oo(l,D):f==="dangerouslySetInnerHTML"?lo(l,D):f==="children"?$n(l,D):D2(l,f,D,c)}switch(s){case"input":hr(l,i);break;case"textarea":to(l,i);break;case"select":var Q=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Je(l,!!i.multiple,h,!1):Q!==!!i.multiple&&(i.defaultValue!=null?Je(l,!!i.multiple,i.defaultValue,!0):Je(l,!!i.multiple,i.multiple?[]:"",!1))}l[Xn]=i}catch(T){W(e,e.return,T)}}break;case 6:if(j0(n,e),O0(e),r&4){if(e.stateNode===null)throw Error(P(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(T){W(e,e.return,T)}}break;case 3:if(j0(n,e),O0(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Hn(n.containerInfo)}catch(T){W(e,e.return,T)}break;case 4:j0(n,e),O0(e);break;case 13:j0(n,e),O0(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(b2=b())),r&4&&ui(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(o0=(c=o0)||f,j0(n,e),o0=c):j0(n,e),O0(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(R=e,f=e.child;f!==null;){for(D=R=f;R!==null;){switch(Q=R,h=Q.child,Q.tag){case 0:case 11:case 14:case 15:On(4,Q,Q.return);break;case 1:Xe(Q,Q.return);var N=Q.stateNode;if(typeof N.componentWillUnmount=="function"){r=Q,t=Q.return;try{n=r,N.props=n.memoizedProps,N.state=n.memoizedState,N.componentWillUnmount()}catch(T){W(r,t,T)}}break;case 5:Xe(Q,Q.return);break;case 22:if(Q.memoizedState!==null){ci(D);continue}}h!==null?(h.return=Q,R=h):ci(D)}f=f.sibling}e:for(f=null,D=e;;){if(D.tag===5){if(f===null){f=D;try{l=D.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=D.stateNode,u=D.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=io("display",o))}catch(T){W(e,e.return,T)}}}else if(D.tag===6){if(f===null)try{D.stateNode.nodeValue=c?"":D.memoizedProps}catch(T){W(e,e.return,T)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;f===D&&(f=null),D=D.return}f===D&&(f=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:j0(n,e),O0(e),r&4&&ui(e);break;case 21:break;default:j0(n,e),O0(e)}}function O0(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(_s(t)){var r=t;break e}t=t.return}throw Error(P(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&($n(l,""),r.flags&=-33);var i=si(e);e2(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=si(e);qr(e,s,o);break;default:throw Error(P(161))}}catch(u){W(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function L3(e,n,t){R=e,zs(e)}function zs(e,n,t){for(var r=(e.mode&1)!==0;R!==null;){var l=R,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||j1;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||o0;s=j1;var c=o0;if(j1=o,(o0=u)&&!c)for(R=l;R!==null;)o=R,u=o.child,o.tag===22&&o.memoizedState!==null?di(l):u!==null?(u.return=o,R=u):di(l);for(;i!==null;)R=i,zs(i),i=i.sibling;R=l,j1=s,o0=c}ai(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,R=i):ai(e)}}function ai(e){for(;R!==null;){var n=R;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:o0||wt(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!o0)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:E0(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&bl(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}bl(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var D=f.dehydrated;D!==null&&Hn(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}o0||n.flags&512&&Jr(n)}catch(Q){W(n,n.return,Q)}}if(n===e){R=null;break}if(t=n.sibling,t!==null){t.return=n.return,R=t;break}R=n.return}}function ci(e){for(;R!==null;){var n=R;if(n===e){R=null;break}var t=n.sibling;if(t!==null){t.return=n.return,R=t;break}R=n.return}}function di(e){for(;R!==null;){var n=R;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{wt(4,n)}catch(u){W(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){W(n,l,u)}}var i=n.return;try{Jr(n)}catch(u){W(n,i,u)}break;case 5:var o=n.return;try{Jr(n)}catch(u){W(n,o,u)}}}catch(u){W(n,n.return,u)}if(n===e){R=null;break}var s=n.sibling;if(s!==null){s.return=n.return,R=s;break}R=n.return}}var z3=Math.ceil,ct=Z0.ReactCurrentDispatcher,H2=Z0.ReactCurrentOwner,w0=Z0.ReactCurrentBatchConfig,L=0,e0=null,Y=null,t0=0,N0=0,Ze=Te(0),Z=0,t1=null,Le=0,kt=0,K2=0,An=null,f0=null,b2=0,dn=1/0,U0=null,dt=!1,n2=null,fe=null,E1=!1,ie=null,ft=0,Bn=0,t2=null,U1=-1,V1=0;function a0(){return L&6?b():U1!==-1?U1:U1=b()}function Qe(e){return e.mode&1?L&2&&t0!==0?t0&-t0:T3.transition!==null?(V1===0&&(V1=ho()),V1):(e=z,e!==0||(e=window.event,e=e===void 0?16:wo(e.type)),e):1}function z0(e,n,t,r){if(50<Bn)throw Bn=0,t2=null,Error(P(185));o1(e,t,r),(!(L&2)||e!==e0)&&(e===e0&&(!(L&2)&&(kt|=t),Z===4&&re(e,t0)),p0(e,r),t===1&&L===0&&!(n.mode&1)&&(dn=b()+500,vt&&he()))}function p0(e,n){var t=e.callbackNode;Ta(e,n);var r=G1(e,e===e0?t0:0);if(r===0)t!==null&&ml(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ml(t),n===1)e.tag===0?N3(fi.bind(null,e)):Ho(fi.bind(null,e)),Q3(function(){!(L&6)&&he()}),t=null;else{switch(mo(r)){case 1:t=h2;break;case 4:t=No;break;case 16:t=Y1;break;case 536870912:t=To;break;default:t=Y1}t=Vs(t,Ms.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ms(e,n){if(U1=-1,V1=0,L&6)throw Error(P(327));var t=e.callbackNode;if(rn()&&e.callbackNode!==t)return null;var r=G1(e,e===e0?t0:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Qt(e,r);else{n=r;var l=L;L|=2;var i=As();(e0!==e||t0!==n)&&(U0=null,dn=b()+500,Se(e,n));do try{A3();break}catch(s){Os(e,s)}while(!0);_2(),ct.current=i,L=l,Y!==null?n=0:(e0=null,t0=0,n=Z)}if(n!==0){if(n===2&&(l=Cr(e),l!==0&&(r=l,n=r2(e,l))),n===1)throw t=t1,Se(e,0),re(e,r),p0(e,b()),t;if(n===6)re(e,r);else{if(l=e.current.alternate,!(r&30)&&!M3(l)&&(n=Qt(e,r),n===2&&(i=Cr(e),i!==0&&(r=i,n=r2(e,i))),n===1))throw t=t1,Se(e,0),re(e,r),p0(e,b()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(P(345));case 2:ge(e,f0,U0);break;case 3:if(re(e,r),(r&130023424)===r&&(n=b2+500-b(),10<n)){if(G1(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){a0(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Or(ge.bind(null,e,f0,U0),n);break}ge(e,f0,U0);break;case 4:if(re(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-L0(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=b()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*z3(r/1960))-r,10<r){e.timeoutHandle=Or(ge.bind(null,e,f0,U0),r);break}ge(e,f0,U0);break;case 5:ge(e,f0,U0);break;default:throw Error(P(329))}}}return p0(e,b()),e.callbackNode===t?Ms.bind(null,e):null}function r2(e,n){var t=An;return e.current.memoizedState.isDehydrated&&(Se(e,n).flags|=256),e=Qt(e,n),e!==2&&(n=f0,f0=t,n!==null&&l2(n)),e}function l2(e){f0===null?f0=e:f0.push.apply(f0,e)}function M3(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!M0(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function re(e,n){for(n&=~K2,n&=~kt,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-L0(n),r=1<<t;e[t]=-1,n&=~r}}function fi(e){if(L&6)throw Error(P(327));rn();var n=G1(e,0);if(!(n&1))return p0(e,b()),null;var t=Qt(e,n);if(e.tag!==0&&t===2){var r=Cr(e);r!==0&&(n=r,t=r2(e,r))}if(t===1)throw t=t1,Se(e,0),re(e,n),p0(e,b()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ge(e,f0,U0),p0(e,b()),null}function Y2(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(dn=b()+500,vt&&he())}}function ze(e){ie!==null&&ie.tag===0&&!(L&6)&&rn();var n=L;L|=1;var t=w0.transition,r=z;try{if(w0.transition=null,z=1,e)return e()}finally{z=r,w0.transition=t,L=n,!(L&6)&&he()}}function G2(){N0=Ze.current,A(Ze)}function Se(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,f3(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(C2(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&et();break;case 3:an(),A(D0),A(s0),A2();break;case 5:O2(r);break;case 4:an();break;case 13:A(F);break;case 19:A(F);break;case 10:I2(r.type._context);break;case 22:case 23:G2()}t=t.return}if(e0=e,Y=e=De(e.current,null),t0=N0=n,Z=0,t1=null,K2=kt=Le=0,f0=An=null,we!==null){for(n=0;n<we.length;n++)if(t=we[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}we=null}return e}function Os(e,n){do{var t=Y;try{if(_2(),B1.current=at,ut){for(var r=U.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ut=!1}if(Ie=0,q=X=U=null,Mn=!1,qn=0,H2.current=null,t===null||t.return===null){Z=1,t1=n,Y=null;break}e:{var i=e,o=t.return,s=t,u=n;if(n=t0,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=s,D=f.tag;if(!(f.mode&1)&&(D===0||D===11||D===15)){var Q=f.alternate;Q?(f.updateQueue=Q.updateQueue,f.memoizedState=Q.memoizedState,f.lanes=Q.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=ql(o);if(h!==null){h.flags&=-257,ei(h,o,s,i,n),h.mode&1&&Jl(i,c,n),n=h,u=c;var N=n.updateQueue;if(N===null){var T=new Set;T.add(u),n.updateQueue=T}else N.add(u);break e}else{if(!(n&1)){Jl(i,c,n),X2();break e}u=Error(P(426))}}else if(B&&s.mode&1){var y=ql(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),ei(y,o,s,i,n),j2(cn(u,s));break e}}i=u=cn(u,s),Z!==4&&(Z=2),An===null?An=[i]:An.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var x=ms(i,u,n);Kl(i,x);break e;case 1:s=u;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(fe===null||!fe.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var m=Ps(i,s,n);Kl(i,m);break e}}i=i.return}while(i!==null)}Fs(t)}catch(g){n=g,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function As(){var e=ct.current;return ct.current=at,e===null?at:e}function X2(){(Z===0||Z===3||Z===2)&&(Z=4),e0===null||!(Le&268435455)&&!(kt&268435455)||re(e0,t0)}function Qt(e,n){var t=L;L|=2;var r=As();(e0!==e||t0!==n)&&(U0=null,Se(e,n));do try{O3();break}catch(l){Os(e,l)}while(!0);if(_2(),L=t,ct.current=r,Y!==null)throw Error(P(261));return e0=null,t0=0,Z}function O3(){for(;Y!==null;)Bs(Y)}function A3(){for(;Y!==null&&!aa();)Bs(Y)}function Bs(e){var n=Us(e.alternate,e,N0);e.memoizedProps=e.pendingProps,n===null?Fs(e):Y=n,H2.current=null}function Fs(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=E3(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Y=null;return}}else if(t=j3(t,n,N0),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);Z===0&&(Z=5)}function ge(e,n,t){var r=z,l=w0.transition;try{w0.transition=null,z=1,B3(e,n,t,r)}finally{w0.transition=l,z=r}return null}function B3(e,n,t,r){do rn();while(ie!==null);if(L&6)throw Error(P(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(ha(e,i),e===e0&&(Y=e0=null,t0=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||E1||(E1=!0,Vs(Y1,function(){return rn(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=w0.transition,w0.transition=null;var o=z;z=1;var s=L;L|=4,H2.current=null,I3(e,t),Ls(t,e),i3(zr),X1=!!Lr,zr=Lr=null,e.current=t,L3(t),ca(),L=s,z=o,w0.transition=i}else e.current=t;if(E1&&(E1=!1,ie=e,ft=l),i=e.pendingLanes,i===0&&(fe=null),Qa(t.stateNode),p0(e,b()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(dt)throw dt=!1,e=n2,n2=null,e;return ft&1&&e.tag!==0&&rn(),i=e.pendingLanes,i&1?e===t2?Bn++:(Bn=0,t2=e):Bn=0,he(),null}function rn(){if(ie!==null){var e=mo(ft),n=w0.transition,t=z;try{if(w0.transition=null,z=16>e?16:e,ie===null)var r=!1;else{if(e=ie,ie=null,ft=0,L&6)throw Error(P(331));var l=L;for(L|=4,R=e.current;R!==null;){var i=R,o=i.child;if(R.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(R=c;R!==null;){var f=R;switch(f.tag){case 0:case 11:case 15:On(8,f,i)}var D=f.child;if(D!==null)D.return=f,R=D;else for(;R!==null;){f=R;var Q=f.sibling,h=f.return;if(Es(f),f===c){R=null;break}if(Q!==null){Q.return=h,R=Q;break}R=h}}}var N=i.alternate;if(N!==null){var T=N.child;if(T!==null){N.child=null;do{var y=T.sibling;T.sibling=null,T=y}while(T!==null)}}R=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,R=o;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:On(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,R=x;break e}R=i.return}}var d=e.current;for(R=d;R!==null;){o=R;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,R=p;else e:for(o=d;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:wt(9,s)}}catch(g){W(s,s.return,g)}if(s===o){R=null;break e}var m=s.sibling;if(m!==null){m.return=s.return,R=m;break e}R=s.return}}if(L=l,he(),F0&&typeof F0.onPostCommitFiberRoot=="function")try{F0.onPostCommitFiberRoot(Tt,e)}catch{}r=!0}return r}finally{z=t,w0.transition=n}}return!1}function Qi(e,n,t){n=cn(t,n),n=ms(e,n,1),e=de(e,n,1),n=a0(),e!==null&&(o1(e,1,n),p0(e,n))}function W(e,n,t){if(e.tag===3)Qi(e,e,t);else for(;n!==null;){if(n.tag===3){Qi(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fe===null||!fe.has(r))){e=cn(t,e),e=Ps(n,e,1),n=de(n,e,1),e=a0(),n!==null&&(o1(n,1,e),p0(n,e));break}}n=n.return}}function F3(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=a0(),e.pingedLanes|=e.suspendedLanes&t,e0===e&&(t0&t)===t&&(Z===4||Z===3&&(t0&130023424)===t0&&500>b()-b2?Se(e,0):K2|=t),p0(e,n)}function $s(e,n){n===0&&(e.mode&1?(n=P1,P1<<=1,!(P1&130023424)&&(P1=4194304)):n=1);var t=a0();e=G0(e,n),e!==null&&(o1(e,n,t),p0(e,t))}function $3(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),$s(e,t)}function U3(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(n),$s(e,t)}var Us;Us=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||D0.current)Q0=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Q0=!1,C3(e,n,t);Q0=!!(e.flags&131072)}else Q0=!1,B&&n.flags&1048576&&Ko(n,rt,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;$1(e,n),e=n.pendingProps;var l=on(n,s0.current);tn(n,t),l=F2(null,n,r,e,l,t);var i=$2();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,x0(r)?(i=!0,nt(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,z2(n),l.updater=Rt,n.stateNode=l,l._reactInternals=n,Wr(n,r,e,t),n=br(null,n,r,!0,i,t)):(n.tag=0,B&&i&&S2(n),u0(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch($1(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=W3(r),e=E0(r,e),l){case 0:n=Kr(null,n,r,e,t);break e;case 1:n=ri(null,n,r,e,t);break e;case 11:n=ni(null,n,r,e,t);break e;case 14:n=ti(null,n,r,E0(r.type,e),t);break e}throw Error(P(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:E0(r,l),Kr(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:E0(r,l),ri(e,n,r,l,t);case 3:e:{if(Rs(n),e===null)throw Error(P(387));r=n.pendingProps,i=n.memoizedState,l=i.element,Jo(e,n),ot(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=cn(Error(P(423)),n),n=li(e,n,r,t,l);break e}else if(r!==l){l=cn(Error(P(424)),n),n=li(e,n,r,t,l);break e}else for(T0=ce(n.stateNode.containerInfo.firstChild),h0=n,B=!0,I0=null,t=Xo(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(sn(),r===l){n=X0(e,n,t);break e}u0(e,n,r,t)}n=n.child}return n;case 5:return qo(n),e===null&&$r(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Mr(r,l)?o=null:i!==null&&Mr(r,i)&&(n.flags|=32),gs(e,n),u0(e,n,o,t),n.child;case 6:return e===null&&$r(n),null;case 13:return ws(e,n,t);case 4:return M2(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=un(n,null,r,t):u0(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:E0(r,l),ni(e,n,r,l,t);case 7:return u0(e,n,n.pendingProps,t),n.child;case 8:return u0(e,n,n.pendingProps.children,t),n.child;case 12:return u0(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,M(lt,r._currentValue),r._currentValue=o,i!==null)if(M0(i.value,o)){if(i.children===l.children&&!D0.current){n=X0(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=K0(-1,t&-t),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Ur(i.return,t,n),s.lanes|=t;break}u=u.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(P(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Ur(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}u0(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,tn(n,t),l=k0(l),r=r(l),n.flags|=1,u0(e,n,r,t),n.child;case 14:return r=n.type,l=E0(r,n.pendingProps),l=E0(r.type,l),ti(e,n,r,l,t);case 15:return ys(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:E0(r,l),$1(e,n),n.tag=1,x0(r)?(e=!0,nt(n)):e=!1,tn(n,t),hs(n,r,l),Wr(n,r,l,t),br(null,n,r,!0,e,t);case 19:return ks(e,n,t);case 22:return vs(e,n,t)}throw Error(P(156,n.tag))};function Vs(e,n){return po(e,n)}function V3(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function R0(e,n,t,r){return new V3(e,n,t,r)}function Z2(e){return e=e.prototype,!(!e||!e.isReactComponent)}function W3(e){if(typeof e=="function")return Z2(e)?1:0;if(e!=null){if(e=e.$$typeof,e===p2)return 11;if(e===N2)return 14}return 2}function De(e,n){var t=e.alternate;return t===null?(t=R0(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function W1(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")Z2(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case $e:return Ce(t.children,l,i,n);case x2:o=8,l|=8;break;case Dr:return e=R0(12,t,n,l|2),e.elementType=Dr,e.lanes=i,e;case xr:return e=R0(13,t,n,l),e.elementType=xr,e.lanes=i,e;case pr:return e=R0(19,t,n,l),e.elementType=pr,e.lanes=i,e;case Ji:return St(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xi:o=10;break e;case Zi:o=9;break e;case p2:o=11;break e;case N2:o=14;break e;case ee:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=R0(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Ce(e,n,t,r){return e=R0(7,e,r,n),e.lanes=t,e}function St(e,n,t,r){return e=R0(22,e,r,n),e.elementType=Ji,e.lanes=t,e.stateNode={isHidden:!1},e}function ar(e,n,t){return e=R0(6,e,null,n),e.lanes=t,e}function cr(e,n,t){return n=R0(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function H3(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wt(0),this.expirationTimes=Wt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wt(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function J2(e,n,t,r,l,i,o,s,u){return e=new H3(e,n,t,s,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=R0(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},z2(i),e}function K3(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fe,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ws(e){if(!e)return pe;e=e._reactInternals;e:{if(Ae(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(x0(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(x0(t))return Wo(e,t,n)}return n}function Hs(e,n,t,r,l,i,o,s,u){return e=J2(t,r,!0,e,l,i,o,s,u),e.context=Ws(null),t=e.current,r=a0(),l=Qe(t),i=K0(r,l),i.callback=n??null,de(t,i,l),e.current.lanes=l,o1(e,l,r),p0(e,r),e}function Ct(e,n,t,r){var l=n.current,i=a0(),o=Qe(l);return t=Ws(t),n.context===null?n.context=t:n.pendingContext=t,n=K0(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=de(l,n,o),e!==null&&(z0(e,l,o,i),A1(e,l,o)),o}function Dt(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Di(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function q2(e,n){Di(e,n),(e=e.alternate)&&Di(e,n)}function b3(){return null}var Ks=typeof reportError=="function"?reportError:function(e){console.error(e)};function el(e){this._internalRoot=e}jt.prototype.render=el.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));Ct(e,n,null,null)};jt.prototype.unmount=el.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ze(function(){Ct(null,e,null,null)}),n[Y0]=null}};function jt(e){this._internalRoot=e}jt.prototype.unstable_scheduleHydration=function(e){if(e){var n=vo();e={blockedOn:null,target:e,priority:n};for(var t=0;t<te.length&&n!==0&&n<te[t].priority;t++);te.splice(t,0,e),t===0&&Ro(e)}};function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Et(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xi(){}function Y3(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Dt(o);i.call(c)}}var o=Hs(n,r,e,0,null,!1,!1,"",xi);return e._reactRootContainer=o,e[Y0]=o.current,Yn(e.nodeType===8?e.parentNode:e),ze(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=Dt(u);s.call(c)}}var u=J2(e,0,!1,null,null,!1,!1,"",xi);return e._reactRootContainer=u,e[Y0]=u.current,Yn(e.nodeType===8?e.parentNode:e),ze(function(){Ct(n,u,t,r)}),u}function _t(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=Dt(o);s.call(u)}}Ct(n,o,e,l)}else o=Y3(t,n,e,l,r);return Dt(o)}Po=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Cn(n.pendingLanes);t!==0&&(m2(n,t|1),p0(n,b()),!(L&6)&&(dn=b()+500,he()))}break;case 13:ze(function(){var r=G0(e,1);if(r!==null){var l=a0();z0(r,e,1,l)}}),q2(e,1)}};P2=function(e){if(e.tag===13){var n=G0(e,134217728);if(n!==null){var t=a0();z0(n,e,134217728,t)}q2(e,134217728)}};yo=function(e){if(e.tag===13){var n=Qe(e),t=G0(e,n);if(t!==null){var r=a0();z0(t,e,n,r)}q2(e,n)}};vo=function(){return z};go=function(e,n){var t=z;try{return z=e,n()}finally{z=t}};wr=function(e,n,t){switch(n){case"input":if(hr(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=yt(r);if(!l)throw Error(P(90));eo(r),hr(r,l)}}}break;case"textarea":to(e,t);break;case"select":n=t.value,n!=null&&Je(e,!!t.multiple,n,!1)}};ao=Y2;co=ze;var G3={usingClientEntryPoint:!1,Events:[u1,He,yt,so,uo,Y2]},Rn={findFiberByHostInstance:Re,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X3={bundleType:Rn.bundleType,version:Rn.version,rendererPackageName:Rn.rendererPackageName,rendererConfig:Rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z0.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Do(e),e===null?null:e.stateNode},findFiberByHostInstance:Rn.findFiberByHostInstance||b3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _1=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_1.isDisabled&&_1.supportsFiber)try{Tt=_1.inject(X3),F0=_1}catch{}}P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G3;P0.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nl(n))throw Error(P(200));return K3(e,n,null,t)};P0.createRoot=function(e,n){if(!nl(e))throw Error(P(299));var t=!1,r="",l=Ks;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=J2(e,1,!1,null,null,t,!1,r,l),e[Y0]=n.current,Yn(e.nodeType===8?e.parentNode:e),new el(n)};P0.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Do(n),e=e===null?null:e.stateNode,e};P0.flushSync=function(e){return ze(e)};P0.hydrate=function(e,n,t){if(!Et(n))throw Error(P(200));return _t(null,e,n,!0,t)};P0.hydrateRoot=function(e,n,t){if(!nl(e))throw Error(P(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=Ks;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Hs(n,null,e,1,t??null,l,!1,i,o),e[Y0]=n.current,Yn(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new jt(n)};P0.render=function(e,n,t){if(!Et(n))throw Error(P(200));return _t(null,e,n,!1,t)};P0.unmountComponentAtNode=function(e){if(!Et(e))throw Error(P(40));return e._reactRootContainer?(ze(function(){_t(null,null,e,!1,function(){e._reactRootContainer=null,e[Y0]=null})}),!0):!1};P0.unstable_batchedUpdates=Y2;P0.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Et(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return _t(e,n,t,!1,r)};P0.version="18.3.1-next-f1338f8080-20240426";function bs(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bs)}catch(e){console.error(e)}}bs(),Ki.exports=P0;var Ys=Ki.exports,pi=Ys;fr.createRoot=pi.createRoot,fr.hydrateRoot=pi.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function r1(){return r1=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r1.apply(null,arguments)}var oe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(oe||(oe={}));const Ni="popstate";function Z3(e){e===void 0&&(e={});function n(r,l){let{pathname:i,search:o,hash:s}=r.location;return i2("",{pathname:i,search:o,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(r,l){return typeof l=="string"?l:Xs(l)}return q3(n,t,null,e)}function G(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Gs(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function J3(){return Math.random().toString(36).substr(2,8)}function Ti(e,n){return{usr:e.state,key:e.key,idx:n}}function i2(e,n,t,r){return t===void 0&&(t=null),r1({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?xn(n):n,{state:t,key:n&&n.key||r||J3()})}function Xs(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function xn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function q3(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,s=oe.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(r1({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function D(){s=oe.Pop;let y=f(),x=y==null?null:y-c;c=y,u&&u({action:s,location:T.location,delta:x})}function Q(y,x){s=oe.Push;let d=i2(T.location,y,x);c=f()+1;let p=Ti(d,c),m=T.createHref(d);try{o.pushState(p,"",m)}catch(g){if(g instanceof DOMException&&g.name==="DataCloneError")throw g;l.location.assign(m)}i&&u&&u({action:s,location:T.location,delta:1})}function h(y,x){s=oe.Replace;let d=i2(T.location,y,x);c=f();let p=Ti(d,c),m=T.createHref(d);o.replaceState(p,"",m),i&&u&&u({action:s,location:T.location,delta:0})}function N(y){let x=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof y=="string"?y:Xs(y);return d=d.replace(/ $/,"%20"),G(x,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,x)}let T={get action(){return s},get location(){return e(l,o)},listen(y){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(Ni,D),u=y,()=>{l.removeEventListener(Ni,D),u=null}},createHref(y){return n(l,y)},createURL:N,encodeLocation(y){let x=N(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:Q,replace:h,go(y){return o.go(y)}};return T}var hi;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hi||(hi={}));function ec(e,n,t){return t===void 0&&(t="/"),nc(e,n,t)}function nc(e,n,t,r){let l=typeof n=="string"?xn(n):n,i=qs(l.pathname||"/",t);if(i==null)return null;let o=Zs(e);tc(o);let s=null,u=Dc(i);for(let c=0;s==null&&c<o.length;++c)s=dc(o[c],u);return s}function Zs(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(i,o,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(G(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=je([r,u.relativePath]),f=t.concat(u);i.children&&i.children.length>0&&(G(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Zs(i.children,n,f,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:ac(c,i.index),routesMeta:f})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,o);else for(let u of Js(i.path))l(i,o,u)}),n}function Js(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Js(r.join("/")),s=[];return s.push(...o.map(u=>u===""?i:[i,u].join("/"))),l&&s.push(...o),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function tc(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:cc(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const rc=/^:[\w-]+$/,lc=3,ic=2,oc=1,sc=10,uc=-2,mi=e=>e==="*";function ac(e,n){let t=e.split("/"),r=t.length;return t.some(mi)&&(r+=uc),n&&(r+=ic),t.filter(l=>!mi(l)).reduce((l,i)=>l+(rc.test(i)?lc:i===""?oc:sc),r)}function cc(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function dc(e,n,t){let{routesMeta:r}=e,l={},i="/",o=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,f=i==="/"?n:n.slice(i.length)||"/",D=fc({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),Q=u.route;if(!D)return null;Object.assign(l,D.params),o.push({params:l,pathname:je([i,D.pathname]),pathnameBase:Nc(je([i,D.pathnameBase])),route:Q}),D.pathnameBase!=="/"&&(i=je([i,D.pathnameBase]))}return o}function fc(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Qc(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((c,f,D)=>{let{paramName:Q,isOptional:h}=f;if(Q==="*"){let T=s[D]||"";o=i.slice(0,i.length-T.length).replace(/(.)\/+$/,"$1")}const N=s[D];return h&&!N?c[Q]=void 0:c[Q]=(N||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function Qc(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Gs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function Dc(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Gs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function qs(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function xc(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?xn(e):e,i;return t?(t=tu(t),t.startsWith("/")?i=Pi(t.substring(1),"/"):i=Pi(t,n)):i=n,{pathname:i,search:Tc(r),hash:hc(l)}}function Pi(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function dr(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pc(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function eu(e,n){let t=pc(e);return n?t.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function nu(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=xn(e):(l=r1({},e),G(!l.pathname||!l.pathname.includes("?"),dr("?","pathname","search",l)),G(!l.pathname||!l.pathname.includes("#"),dr("#","pathname","hash",l)),G(!l.search||!l.search.includes("#"),dr("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,s;if(o==null)s=t;else{let D=n.length-1;if(!r&&o.startsWith("..")){let Q=o.split("/");for(;Q[0]==="..";)Q.shift(),D-=1;l.pathname=Q.join("/")}s=D>=0?n[D]:"/"}let u=xc(l,s),c=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const tu=e=>e.replace(/\/\/+/g,"/"),je=e=>tu(e.join("/")),Nc=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Tc=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hc=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mc(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ru=["post","put","patch","delete"];new Set(ru);const Pc=["get",...ru];new Set(Pc);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function l1(){return l1=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l1.apply(null,arguments)}const tl=v.createContext(null),yc=v.createContext(null),c1=v.createContext(null),It=v.createContext(null),me=v.createContext({outlet:null,matches:[],isDataRoute:!1}),lu=v.createContext(null);function d1(){return v.useContext(It)!=null}function Lt(){return d1()||G(!1),v.useContext(It).location}function iu(e){v.useContext(c1).static||v.useLayoutEffect(e)}function vc(){let{isDataRoute:e}=v.useContext(me);return e?Ac():gc()}function gc(){d1()||G(!1);let e=v.useContext(tl),{basename:n,future:t,navigator:r}=v.useContext(c1),{matches:l}=v.useContext(me),{pathname:i}=Lt(),o=JSON.stringify(eu(l,t.v7_relativeSplatPath)),s=v.useRef(!1);return iu(()=>{s.current=!0}),v.useCallback(function(c,f){if(f===void 0&&(f={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let D=nu(c,JSON.parse(o),i,f.relative==="path");e==null&&n!=="/"&&(D.pathname=D.pathname==="/"?n:je([n,D.pathname])),(f.replace?r.replace:r.push)(D,f.state,f)},[n,r,o,i,e])}const Rc=v.createContext(null);function wc(e){let n=v.useContext(me).outlet;return n&&v.createElement(Rc.Provider,{value:e},n)}function kc(e,n){return Sc(e,n)}function Sc(e,n,t,r){d1()||G(!1);let{navigator:l}=v.useContext(c1),{matches:i}=v.useContext(me),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Lt(),f;if(n){var D;let y=typeof n=="string"?xn(n):n;u==="/"||(D=y.pathname)!=null&&D.startsWith(u)||G(!1),f=y}else f=c;let Q=f.pathname||"/",h=Q;if(u!=="/"){let y=u.replace(/^\//,"").split("/");h="/"+Q.replace(/^\//,"").split("/").slice(y.length).join("/")}let N=ec(e,{pathname:h}),T=Ic(N&&N.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:je([u,l.encodeLocation?l.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?u:je([u,l.encodeLocation?l.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,t,r);return n&&T?v.createElement(It.Provider,{value:{location:l1({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:oe.Pop}},T):T}function Cc(){let e=Oc(),n=mc(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},n),t?v.createElement("pre",{style:l},t):null,null)}const jc=v.createElement(Cc,null);class Ec extends v.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?v.createElement(me.Provider,{value:this.props.routeContext},v.createElement(lu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _c(e){let{routeContext:n,match:t,children:r}=e,l=v.useContext(tl);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(me.Provider,{value:n},r)}function Ic(e,n,t,r){var l;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,s=(l=t)==null?void 0:l.errors;if(s!=null){let f=o.findIndex(D=>D.route.id&&(s==null?void 0:s[D.route.id])!==void 0);f>=0||G(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let D=o[f];if((D.route.HydrateFallback||D.route.hydrateFallbackElement)&&(c=f),D.route.id){let{loaderData:Q,errors:h}=t,N=D.route.loader&&Q[D.route.id]===void 0&&(!h||h[D.route.id]===void 0);if(D.route.lazy||N){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,D,Q)=>{let h,N=!1,T=null,y=null;t&&(h=s&&D.route.id?s[D.route.id]:void 0,T=D.route.errorElement||jc,u&&(c<0&&Q===0?(Bc("route-fallback"),N=!0,y=null):c===Q&&(N=!0,y=D.route.hydrateFallbackElement||null)));let x=n.concat(o.slice(0,Q+1)),d=()=>{let p;return h?p=T:N?p=y:D.route.Component?p=v.createElement(D.route.Component,null):D.route.element?p=D.route.element:p=f,v.createElement(_c,{match:D,routeContext:{outlet:f,matches:x,isDataRoute:t!=null},children:p})};return t&&(D.route.ErrorBoundary||D.route.errorElement||Q===0)?v.createElement(Ec,{location:t.location,revalidation:t.revalidation,component:T,error:h,children:d(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):d()},null)}var ou=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ou||{}),su=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(su||{});function Lc(e){let n=v.useContext(tl);return n||G(!1),n}function zc(e){let n=v.useContext(yc);return n||G(!1),n}function Mc(e){let n=v.useContext(me);return n||G(!1),n}function uu(e){let n=Mc(),t=n.matches[n.matches.length-1];return t.route.id||G(!1),t.route.id}function Oc(){var e;let n=v.useContext(lu),t=zc(),r=uu();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Ac(){let{router:e}=Lc(ou.UseNavigateStable),n=uu(su.UseNavigateStable),t=v.useRef(!1);return iu(()=>{t.current=!0}),v.useCallback(function(l,i){i===void 0&&(i={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,l1({fromRouteId:n},i)))},[e,n])}const yi={};function Bc(e,n,t){yi[e]||(yi[e]=!0)}function Fc(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function $c(e){let{to:n,replace:t,state:r,relative:l}=e;d1()||G(!1);let{future:i,static:o}=v.useContext(c1),{matches:s}=v.useContext(me),{pathname:u}=Lt(),c=vc(),f=nu(n,eu(s,i.v7_relativeSplatPath),u,l==="path"),D=JSON.stringify(f);return v.useEffect(()=>c(JSON.parse(D),{replace:t,state:r,relative:l}),[c,D,l,t,r]),null}function Uc(e){return wc(e.context)}function q0(e){G(!1)}function Vc(e){let{basename:n="/",children:t=null,location:r,navigationType:l=oe.Pop,navigator:i,static:o=!1,future:s}=e;d1()&&G(!1);let u=n.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:u,navigator:i,static:o,future:l1({v7_relativeSplatPath:!1},s)}),[u,s,i,o]);typeof r=="string"&&(r=xn(r));let{pathname:f="/",search:D="",hash:Q="",state:h=null,key:N="default"}=r,T=v.useMemo(()=>{let y=qs(f,u);return y==null?null:{location:{pathname:y,search:D,hash:Q,state:h,key:N},navigationType:l}},[u,f,D,Q,h,N,l]);return T==null?null:v.createElement(c1.Provider,{value:c},v.createElement(It.Provider,{children:t,value:T}))}function Wc(e){let{children:n,location:t}=e;return kc(o2(n),t)}new Promise(()=>{});function o2(e,n){n===void 0&&(n=[]);let t=[];return v.Children.forEach(e,(r,l)=>{if(!v.isValidElement(r))return;let i=[...n,l];if(r.type===v.Fragment){t.push.apply(t,o2(r.props.children,i));return}r.type!==q0&&G(!1),!r.props.index||!r.props.children||G(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=o2(r.props.children,i)),t.push(o)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Hc="6";try{window.__reactRouterVersion=Hc}catch{}const Kc="startTransition",vi=Fu[Kc];function bc(e){let{basename:n,children:t,future:r,window:l}=e,i=v.useRef();i.current==null&&(i.current=Z3({window:l,v5Compat:!0}));let o=i.current,[s,u]=v.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=v.useCallback(D=>{c&&vi?vi(()=>u(D)):u(D)},[u,c]);return v.useLayoutEffect(()=>o.listen(f),[o,f]),v.useEffect(()=>Fc(r),[r]),v.createElement(Vc,{basename:n,children:t,location:s.location,navigationType:s.action,navigator:o,future:r})}var gi;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gi||(gi={}));var Ri;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ri||(Ri={}));const Yc=["/analysis","/advice","/review"],Gc=["/advice","/review"],Xc=`\uFEFF记录编号,学生编号,材料编号,主题编号,节点编号,作答事件编号,修订版本,模拟提交时间,评分状态,得分,满分,学生最终作答,解答过程,评分点得分\r
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
`,Zc=`\uFEFF材料编号,主题编号,材料类型,题型,题干或内容,选项,参考答案,参考解析,满分,评分点,指标编号,来源或资料文件\r
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
`,Jc=`\uFEFF节点编号,模拟测验日期,已教及测量主题,说明,可用题目编号\r
N01,2026-01-20,T01、T02,模拟上学期期末：T01及T02中的一元一次方程；方程组和不等式尚未教学。,Q001、Q002、Q003、Q004、Q005、Q006、Q007、Q008、Q009、Q010、Q011、Q012、Q013、Q014、Q015、Q016、Q017、Q018、Q019、Q020、Q021、Q022、Q023、Q024、Q025、Q026、Q027\r
N02,2026-06-17,T01、T02、T03,模拟下学期期末：复习T01，新增T02方程组及T03不等式。,Q001、Q002、Q003、Q004、Q005、Q006、Q007、Q008、Q009、Q010、Q011、Q012、Q013、Q014、Q015、Q016、Q017、Q018、Q028、Q029、Q030、Q031、Q032、Q033、Q034、Q035、Q036、Q037、Q038、Q039、Q040、Q041、Q042、Q043、Q044、Q045、Q046、Q047、Q048、Q049、Q050、Q051、Q052、Q053、Q054\r
`,qc=`\uFEFF主题编号,主题,主题目标,指标编号,观察指标,课标整理编号,课标文件页／正文页,教材正文页\r
T01,代数式与整式运算,能用代数式表示简单数量关系、代入求值，并进行整式加减与解释。,T01I1,表示数量关系并代入求值,CR01,62／55,上册68—109\r
T01,代数式与整式运算,能用代数式表示简单数量关系、代入求值，并进行整式加减与解释。,T01I2,识别同类项、去括号并化简,CR01,62／55,上册68—109\r
T01,代数式与整式运算,能用代数式表示简单数量关系、代入求值，并进行整式加减与解释。,T01I3,用整式解释具体问题,CR01,62／55,上册68—109\r
T02,方程与方程组,能解一元一次方程和二元一次方程组，依据等量关系建立模型并检验答案。,T02I1,运用等式性质解一元一次方程,CR02,63／56,上册110—148；下册87—119\r
T02,方程与方程组,能解一元一次方程和二元一次方程组，依据等量关系建立模型并检验答案。,T02I2,用消元法解二元一次方程组,CR02,63／56,上册110—148；下册87—119\r
T02,方程与方程组,能解一元一次方程和二元一次方程组，依据等量关系建立模型并检验答案。,T02I3,列方程或方程组解决简单实际问题并检验,CR02,63／56,上册110—148；下册87—119\r
T03,不等式与不等式组,能解一元一次不等式及简单不等式组，表示解集，并解决范围约束问题。,T03I1,运用不等式性质求解，负数乘除时正确改变方向,CR03,63／56,下册120—145\r
T03,不等式与不等式组,能解一元一次不等式及简单不等式组，表示解集，并解决范围约束问题。,T03I2,求两个一元一次不等式解集的交集,CR03,63／56,下册120—145\r
T03,不等式与不等式组,能解一元一次不等式及简单不等式组，表示解集，并解决范围约束问题。,T03I3,根据实际限制列不等式并解释取值范围,CR03,63／56,下册120—145\r
`,ed=`\uFEFF学生编号,模拟班级编号,年级\r
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
`;function f1(e){const n=e.replace(/^\uFEFF/,""),t=[];let r=[],l="",i=!1;for(let s=0;s<n.length;s+=1){const u=n[s];i?u==='"'?n[s+1]==='"'?(l+='"',s+=1):i=!1:l+=u:u==='"'?i=!0:u===","?(r.push(l),l=""):u===`
`?(r.push(l),l="",t.push(r),r=[]):u!=="\r"&&(l+=u)}(l||r.length>0)&&(r.push(l),t.push(r));const o=t.shift().map(s=>s.trim());return t.filter(s=>s.some(u=>u!=="")).map(s=>Object.fromEntries(o.map((u,c)=>[u,(s[c]??"").trim()])))}const nd=f1(Xc),au=f1(Zc),rl=f1(ed),cu=f1(qc);f1(Jc);const td=new Map(au.map(e=>[e.材料编号,e])),du=["全部学生",...rl.map(e=>e.学生编号)],fu=new Map(rl.map(e=>[e.学生编号,e.模拟班级编号])),xt=(()=>{const e=new Map;return rl.forEach(n=>{const t=n.模拟班级编号;e.set(t,(e.get(t)||0)+1)}),[...e.entries()].map(([n,t])=>({id:n,count:t}))})();[...new Set(cu.map(e=>e.主题))];const Me=cu.map(e=>{const n=e.指标编号;return{id:n,name:e.观察指标,topicId:e.主题编号,topicName:e.主题,requirement:e.主题目标,materials:au.filter(t=>t.材料类型==="题目"&&(t.指标编号||"").split("、").includes(n)).map(t=>t.材料编号)}}),wn=new Map(Me.map(e=>[e.id,e])),Q1=nd.map(e=>{const n=td.get(e.材料编号);return{recordId:e.记录编号,studentId:e.学生编号,materialId:e.材料编号,topicId:e.主题编号,nodeId:e.节点编号,status:e.评分状态,scoreText:e.得分,score:e.得分===""?null:Number(e.得分),full:e.满分===""?null:Number(e.满分),submittedAt:e.模拟提交时间,finalAnswer:e.学生最终作答,kpIds:((n==null?void 0:n.指标编号)||"").split("、").filter(Boolean)}}),Qu=Q1.filter(e=>e.score===null),Du=Q1.filter(e=>e.score!==null&&(e.full===null||e.full<=0||e.score<0||e.score>e.full)),pt=new Map;Q1.forEach(e=>{const n=`${e.studentId}|${e.materialId}`,t=pt.get(n);(!t||e.submittedAt>t.submittedAt)&&pt.set(n,e)});const xu=Q1.filter(e=>pt.get(`${e.studentId}|${e.materialId}`)!==e),ll=[...pt.values()].filter(e=>e.status==="已评分"&&e.score!==null&&e.full!==null&&e.full>0&&e.score>=0&&e.score<=e.full),wi=[{key:"total",label:"总记录",value:Q1.length},{key:"missing",label:"缺失记录",value:Qu.length},{key:"duplicate",label:"重复记录",value:xu.length},{key:"abnormal",label:"异常记录",value:Du.length}],ki=[...Du.map(e=>({recordId:e.recordId,studentId:e.studentId,questionId:e.materialId,node:e.nodeId,type:"异常越界",status:"待修正"})),...Qu.slice(0,4).map(e=>({recordId:e.recordId,studentId:e.studentId,questionId:e.materialId,node:e.nodeId,type:"缺失记录",status:e.status})),...xu.slice(0,4).map(e=>({recordId:e.recordId,studentId:e.studentId,questionId:e.materialId,node:e.nodeId,type:"重复记录",status:"已合并"}))].slice(0,10),s2=new Map;ll.forEach(e=>{const n=s2.get(e.studentId)||[];n.push(e),s2.set(e.studentId,n)});function rd(e){const n=s2.get(e)||[],t=Me.map(u=>{const c=n.filter(Q=>Q.kpIds.includes(u.id)),f=c.reduce((Q,h)=>Q+h.score,0),D=c.reduce((Q,h)=>Q+h.full,0);return{kpId:u.id,name:u.name,answered:c.length,score:f,full:D,accuracy:D>0?Math.round(f/D*100):null,records:c.map(Q=>({recordId:Q.recordId,materialId:Q.materialId,nodeId:Q.nodeId,score:Q.score,full:Q.full,submittedAt:Q.submittedAt}))}}),r=n.length,l=n.reduce((u,c)=>u+c.score,0),i=n.reduce((u,c)=>u+c.full,0),o=t.filter(u=>u.answered>0).length,s=Math.round(o/Me.length*100);return{studentId:e,classId:fu.get(e)??"未分班",validAnswers:r,scoreTotal:l,fullTotal:i,overallAccuracy:i>0?Math.round(l/i*100):0,coverageRate:s,answeredKpCount:o,recordStatus:r>=12&&o>=6?"记录充足":"部分信息不足",kpStats:t,answeredMaterials:[...new Set(n.map(u=>u.materialId))]}}const il=new Map(du.slice(1).map(e=>[e,rd(e)]));function pu(e){return il.get(e)??null}function Nu(e,n){var h;const t=e.length,r=n.reduce((N,T)=>N+T.score,0),l=n.reduce((N,T)=>N+T.full,0),i=Me.map(N=>{const T=n.filter(d=>d.kpIds.includes(N.id)),y=T.reduce((d,p)=>d+p.score,0),x=T.reduce((d,p)=>d+p.full,0);return{kpId:N.id,name:N.name,answered:T.length,score:y,full:x,avg:x>0?Math.round(y/x*100):0}}),o=i.filter(N=>N.avg<60).sort((N,T)=>N.avg-T.avg),s=o.length?o:[...i].sort((N,T)=>N.avg-T.avg).slice(0,2),u={高:"安排 1 课时重讲核心概念，配套基础变式练习",中:"结合错题集中讲评，增加同类变式练习",低:"保持常规练习，关注个别学生的订正情况"},c=s.map(N=>{const T=N.avg<50?"高":N.avg<60?"中":"低";return{...N,level:T,evidence:`${N.answered} 条有效作答，平均正确率 ${N.avg}%`,teachingTip:u[T]}}),f=e.filter(N=>N.recordStatus==="记录充足"),D=e.filter(N=>N.recordStatus!=="记录充足"),Q=(N,T)=>{if(N.length===0)return{count:0,avgAnswers:0,avgAccuracy:0,coverage:0,risk:"暂无样本"};const y=N.reduce((p,m)=>p+m.validAnswers,0),x=N.reduce((p,m)=>p+m.scoreTotal,0),d=N.reduce((p,m)=>p+m.fullTotal,0);return{count:N.length,avgAnswers:Math.round(y/N.length),avgAccuracy:d>0?Math.round(x/d*100):0,coverage:Math.round(N.reduce((p,m)=>p+m.coverageRate,0)/N.length),risk:T}};return{classId:((h=e[0])==null?void 0:h.classId)??"",totalStudents:t,validTotal:n.length,overallAccuracy:l>0?Math.round(r/l*100):0,insufficientCount:D.length,kpStats:i,commonProblems:c,comparison:{sufficient:Q(f,"个别知识点正确率偏低，需针对性巩固"),insufficient:Q(D,"样本不足，暂不判定掌握情况，优先补采数据")}}}const ld=Nu([...il.values()],ll),id=new Map(xt.map(e=>[e.id,Nu([...il.values()].filter(n=>n.classId===e.id),ll.filter(n=>fu.get(n.studentId)===e.id))]));function Tu(e){return id.get(e)??ld}function Si(e,n){const t=new Set(n.answeredMaterials),r=e.materials.filter(l=>!t.has(l));return(r.length?r:e.materials).slice(0,2)}function od(e,n){const t=new Map(n.kpStats.map(i=>[i.kpId,i.avg])),r=i=>{const o=wn.get(i.kpId);return{kpId:i.kpId,kpName:i.name,topicName:o.topicName,requirement:`【${o.topicName}】${o.requirement}`,answered:i.answered,score:i.score,full:i.full,accuracy:i.accuracy,classAvg:t.get(i.kpId)??0}},l=[];if(e.recordStatus==="记录充足")e.kpStats.filter(o=>o.answered>0).sort((o,s)=>o.accuracy-s.accuracy).slice(0,3).forEach(o=>{const s=wn.get(o.kpId),u=t.get(o.kpId)??0,c=o.accuracy<70;l.push({content:c?`巩固「${o.name}」：完成错题重练与变式训练`:`拓展「${o.name}」：完成综合应用题训练`,materials:Si(s,e),reason:`该知识点正确率 ${o.accuracy}%，${o.accuracy<u?"低于":"高于"}班级平均 ${u}%，${c?"建议优先巩固":"可在巩固基础上适度拓展"}。`,condition:c?"适用于已完成基础练习、可独立完成常规题的学生":"适用于基础题正确率稳定、需要提升综合运用的学生",teacherAdjustable:"可调整练习数量与难度，或替换为同知识点材料",evidence:r(o)})});else{e.kpStats.filter(s=>s.answered===0).slice(0,2).forEach(s=>{const u=wn.get(s.kpId);l.push({content:`完成「${s.name}」诊断性练习，补齐学习记录`,materials:u.materials.slice(0,2),reason:"该知识点暂无有效作答记录，信息不足，暂不判定掌握情况。",condition:"独立作答、不查看解析，建议 15 分钟内完成",teacherAdjustable:"可调整诊断题量与材料，优先覆盖未作答知识点",evidence:r(s)})});const o=e.kpStats.filter(s=>s.answered>0&&s.accuracy<60).sort((s,u)=>s.accuracy-u.accuracy)[0];if(o){const s=wn.get(o.kpId);l.push({content:`回顾「${o.name}」已作答题目，订正错误并说明思路`,materials:Si(s,e),reason:`该知识点已有 ${o.answered} 条记录，正确率 ${o.accuracy}%，需补充订正记录。`,condition:"在教师或同伴提示下完成订正，避免直接给出答案",teacherAdjustable:"可缩减题量，优先选择错题对应的基础题",evidence:r(o)})}if(l.length===0){const s=e.kpStats[0],u=wn.get(s.kpId);l.push({content:`完成「${s.name}」诊断性练习，补齐学习记录`,materials:u.materials.slice(0,2),reason:"当前有效记录不足，需补充诊断数据后再生成巩固建议。",condition:"独立作答，完成后由教师核对答题过程",teacherAdjustable:"可根据课堂进度调整诊断材料",evidence:r(s)})}}return l.map((i,o)=>({...i,id:`S${o+1}`,order:o+1,materialsText:i.materials.join("、"),teacherNote:""}))}const hu=v.createContext(null);function sd({children:e}){const[n,t]=v.useState(""),[r,l]=v.useState("全部状态"),[i,o]=v.useState("全部学生"),[s,u]=v.useState(wi),[c,f]=v.useState(ki),[D,Q]=v.useState(!1),[h,N]=v.useState(0),T=v.useRef(null);v.useEffect(()=>()=>window.clearTimeout(T.current),[]);const d={topic:n,setTopic:t,status:r,setStatus:l,studentId:i,setStudentId:o,metrics:s,rows:c,loading:D,reload:()=>{D||(Q(!0),T.current=window.setTimeout(()=>{f(ki),u(wi),t(""),l("全部状态"),o("全部学生"),N(0),Q(!1)},600))},addRecord:()=>{const p=h+1,m={recordId:`SIM-${Date.now()}`,studentId:"D17",questionId:"Q044",node:"N02",type:"缺失记录",status:"待评分"};f(g=>[m,...g]),u(g=>g.map(k=>k.key==="total"||k.key==="missing"?{...k,value:k.value+1}:k)),N(p),o("全部学生"),l("全部状态")}};return a.jsx(hu.Provider,{value:d,children:e})}function zt(){const e=v.useContext(hu);if(!e)throw new Error("useAppState 必须在 AppStateProvider 内部使用");return e}const ud=["全部状态","缺失记录","异常越界","重复记录"],ad=[{key:"missing",title:"缺失标记：",desc:"得分为空（待评分 / 未作答）→ 标记为信息不足，不参与正确率计算"},{key:"abnormal",title:"异常越界：",desc:"得分不在 [0, 满分] 范围内 → 标记为异常数据，排除统计"},{key:"duplicate",title:"重复合并：",desc:"同一学生同一题目多条记录 → 保留最新提交时间一条，其余标记为重复"}],cd={缺失记录:"bg-warn text-[#A9761C]",异常越界:"bg-danger text-[#B4544F]",重复记录:"bg-card text-muted"},$=(...e)=>e.filter(Boolean).join(" ");function dd({className:e}){return a.jsx("svg",{viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",className:e,children:a.jsx("path",{d:"M3 4.5 6 7.5l3-3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function fd({className:e}){return a.jsx("svg",{viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",className:e,children:a.jsx("path",{d:"m2.5 6.2 2.3 2.3 4.7-5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}function Ci({ariaLabel:e,displayText:n,value:t,options:r,onChange:l,accent:i=!1,maxHeightClass:o="max-h-64"}){const[s,u]=v.useState(!1),c=v.useRef(null);return v.useEffect(()=>{if(!s)return;const f=Q=>{c.current&&!c.current.contains(Q.target)&&u(!1)},D=Q=>{Q.key==="Escape"&&u(!1)};return document.addEventListener("mousedown",f),document.addEventListener("keydown",D),()=>{document.removeEventListener("mousedown",f),document.removeEventListener("keydown",D)}},[s]),a.jsxs("div",{ref:c,className:"relative",children:[a.jsxs("button",{type:"button","aria-label":e,"aria-haspopup":"listbox","aria-expanded":s,onClick:()=>u(f=>!f),onKeyDown:f=>{(f.key==="ArrowDown"||f.key==="ArrowUp")&&(f.preventDefault(),u(!0))},className:$("flex h-10 w-full items-center justify-center gap-1.5 rounded-lg border bg-white px-3","text-[13px] transition-colors duration-150","focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40",i?"border-brand text-brand":"border-line text-ink hover:border-brand/70",s&&"border-brand ring-2 ring-brand/30"),children:[a.jsx("span",{className:"truncate",children:n}),a.jsx(dd,{className:$("h-3.5 w-3.5 shrink-0 transition-transform duration-150",s&&"rotate-180")})]}),s&&a.jsx("ul",{role:"listbox","aria-label":e,className:$("absolute left-0 right-0 top-[42px] z-30 overflow-y-auto rounded-lg border border-line bg-white p-1 shadow-[0_8px_24px_rgba(51,68,66,0.12)]",o),children:r.map(f=>{const D=f===t;return a.jsx("li",{role:"presentation",children:a.jsxs("button",{type:"button",role:"option","aria-selected":D,onClick:()=>{l(f),u(!1)},className:$("flex w-full items-center justify-between rounded px-2.5 py-2 text-left","text-[13px] transition-colors",D?"bg-card font-medium text-brand":"text-ink hover:bg-card"),children:[a.jsx("span",{className:"truncate",children:f}),D&&a.jsx(fd,{className:"h-3 w-3 shrink-0"})]})},f)})})]})}function Qd(){const{pathname:e}=Lt(),{topic:n,setTopic:t,status:r,setStatus:l,studentId:i,setStudentId:o,loading:s,reload:u,addRecord:c}=zt(),f=Yc.includes(e),D=!Gc.includes(e);return a.jsxs("aside",{className:"relative z-10 flex w-[240px] shrink-0 flex-col gap-5 overflow-y-auto border-r border-line bg-page px-5 py-6",children:[a.jsxs("label",{className:"block",children:[a.jsx("span",{className:"sr-only",children:"学习主题"}),a.jsx("input",{type:"text",value:n,onChange:Q=>t(Q.target.value),placeholder:"学习主题",className:$("h-10 w-full rounded-lg border border-line bg-white px-3 text-center text-[13px]","text-ink placeholder:text-muted","transition-colors duration-150","focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30")})]}),D&&a.jsx(Ci,{ariaLabel:"记录状态筛选",displayText:`记录状态 · ${r}`,value:r,options:ud,onChange:l}),a.jsxs("button",{type:"button",onClick:u,disabled:s,className:$("flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-line bg-white","text-[13px] text-ink transition-colors duration-150","hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-60"),children:[s&&a.jsx("span",{"aria-hidden":"true",className:"h-3.5 w-3.5 animate-spin rounded-full border-2 border-brand/30 border-t-brand"}),s?"加载中…":"重新加载数据集"]}),a.jsx("button",{type:"button",onClick:c,className:$("h-10 w-full rounded-lg border border-line bg-white text-[13px] text-ink","transition-colors duration-150 hover:border-brand hover:text-brand"),children:"模拟新增记录"}),f&&a.jsxs("div",{className:"space-y-2",children:[a.jsx(Ci,{ariaLabel:"学生 ID 筛选",displayText:`学生ID · ${i}`,value:i,options:du,onChange:o,accent:!0}),e==="/analysis"&&a.jsx("p",{className:"px-1 text-center text-[11px] leading-5 text-muted",children:"请选择一名学生查看个体学情"})]})]})}function Dd(){const e=[{label:"首页",path:"../shouye/index.html"},{label:"学习梳理",path:"../xuexishuli/index.html"},{label:"学情分析",path:"./index.html"},{label:"学习建议",path:"../xuexijianyi/index.html"},{label:"案例核对",path:"../anlihedui/index.html"}];return a.jsx("header",{className:"h-14 shrink-0 bg-brand",children:a.jsx("nav",{"aria-label":"主导航",className:"grid h-full grid-cols-5",children:e.map(n=>{const t=n.label==="学情分析";return a.jsx("a",{href:n.path,className:$("flex h-full items-center justify-center text-sm transition-colors",t?"bg-white/25 font-semibold text-ink":"font-normal text-ink/85 hover:bg-white/15"),children:n.label},n.label)})})})}function xd(){return a.jsxs("div",{className:"flex h-screen flex-col overflow-hidden bg-page text-ink",children:[a.jsx(Dd,{}),a.jsxs("div",{className:"flex min-h-0 flex-1",children:[a.jsx(Qd,{}),a.jsx("main",{className:"min-w-0 flex-1 overflow-y-auto p-4",children:a.jsx(Uc,{})})]})]})}function pd({className:e}){return a.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:e,children:a.jsx("path",{d:"m4 4 8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function mu({open:e,title:n,onClose:t,children:r}){return v.useEffect(()=>{if(!e)return;const l=o=>{o.key==="Escape"&&t()},i=document.body.style.overflow;return document.body.style.overflow="hidden",document.addEventListener("keydown",l),()=>{document.body.style.overflow=i,document.removeEventListener("keydown",l)}},[e,t]),e?Ys.createPortal(a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-6",onMouseDown:l=>{l.target===l.currentTarget&&t()},children:a.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":n,className:"max-h-[82vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-line bg-white shadow-[0_20px_60px_rgba(51,68,66,0.2)]",children:[a.jsxs("header",{className:"flex items-center justify-between gap-4 border-b border-line px-5 py-4",children:[a.jsx("h2",{className:"text-sm font-semibold text-ink",children:n}),a.jsx("button",{type:"button","aria-label":"关闭弹窗",onClick:t,className:"flex h-7 w-7 items-center justify-center rounded-md text-muted transition-colors hover:bg-card hover:text-ink",children:a.jsx(pd,{className:"h-4 w-4"})})]}),a.jsx("div",{className:"px-5 py-4",children:r})]})}),document.body):null}const ji=e=>e.split(/[、,，\s]+/).filter(Boolean),Ei=e=>`"${String(e??"").replace(/"/g,'""')}"`;function _i(e,n,t){const r=new Blob([n],{type:t}),l=URL.createObjectURL(r),i=document.createElement("a");i.href=l,i.download=e,i.click(),URL.revokeObjectURL(l)}function Nd(){const{studentId:e}=zt(),n=v.useMemo(()=>e==="全部学生"?null:pu(e),[e]),t=v.useMemo(()=>Tu(n==null?void 0:n.classId),[n]),[r,l]=v.useState([]),[i,o]=v.useState(null);v.useEffect(()=>{l(n?od(n,t):[]),o(null)},[e,n,t]);const s=(Q,h)=>{l(N=>N.map(T=>T.id===Q?{...T,...h}:T))},u=(Q,h)=>{const N=Q+h;N<0||N>=r.length||l(T=>{const y=[...T];return[y[Q],y[N]]=[y[N],y[Q]],y})},c=Q=>{o({...Q.evidence,materials:ji(Q.materialsText)})},f=Q=>{if(!n||r.length===0)return;const h=r.map((y,x)=>({order:x+1,content:y.content,materials:ji(y.materialsText),reason:y.reason,condition:y.condition,teacherAdjustable:y.teacherAdjustable,teacherNote:y.teacherNote.trim()}));if(Q==="json"){_i(`学习建议_${n.studentId}.json`,JSON.stringify({studentId:n.studentId,recordStatus:n.recordStatus,validAnswers:n.validAnswers,suggestions:h},null,2),"application/json;charset=utf-8");return}const N=["执行顺序","建议学习内容","材料编号","选择理由","适用条件","教师调整说明"],T=h.map(y=>[y.order,y.content,y.materials.join("、"),y.reason,y.condition,y.teacherNote].map(Ei).join(","));_i(`学习建议_${n.studentId}.csv`,`\uFEFF${[N.map(Ei).join(","),...T].join(`
`)}`,"text/csv;charset=utf-8")},D=(n==null?void 0:n.recordStatus)==="记录充足";return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("section",{className:"rounded-lg border border-line bg-white p-5",children:[a.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-base font-semibold text-ink",children:"个性化学习建议"}),a.jsx("p",{className:"mt-1 text-xs text-muted",children:"基于个体学情证据生成，支持教师调整与证据链溯源。"})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{type:"button",onClick:()=>f("json"),disabled:!n||r.length===0,className:"h-9 rounded-lg border border-line px-3 text-xs text-ink transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-50",children:"导出 JSON"}),a.jsx("button",{type:"button",onClick:()=>f("csv"),disabled:!n||r.length===0,className:"h-9 rounded-lg border border-line px-3 text-xs text-ink transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-50",children:"导出 CSV"})]})]}),!n&&a.jsx("p",{className:"mt-4 rounded-lg bg-warn px-4 py-3 text-xs font-medium leading-6 text-[#A9761C]",children:"请前往学情分析页面选择学生后，再查看个性化学习建议。"}),n&&a.jsxs("div",{className:$("mt-4 rounded-lg px-4 py-3",D?"bg-card":"bg-warn"),children:[a.jsxs("p",{className:$("text-xs font-medium",D?"text-ink":"text-[#A9761C]"),children:["当前学生：",n.studentId," · ",n.classId," 班 ·"," ",D?"记录充足":"信息不足，优先完成诊断性练习收集数据"]}),a.jsxs("p",{className:$("mt-1 text-[11px] leading-5",D?"text-muted":"text-[#A9761C]"),children:["有效作答 ",n.validAnswers," 条 · 覆盖 ",n.answeredKpCount,"/",Me.length," 个知识点 · 整体正确率 ",n.overallAccuracy,"%",!D&&" · 信息不足 ≠ 判定未掌握"]})]})]}),n&&a.jsx("div",{className:"space-y-3",children:r.map((Q,h)=>a.jsxs("article",{className:"rounded-lg border border-line bg-white p-5",children:[a.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/25 text-xs font-semibold text-ink",children:h+1}),a.jsx("h2",{className:"text-sm font-semibold text-ink",children:Q.content})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("button",{type:"button",onClick:()=>u(h,-1),disabled:h===0,className:"rounded border border-line px-2 py-1 text-[11px] text-muted transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40",children:"上移"}),a.jsx("button",{type:"button",onClick:()=>u(h,1),disabled:h===r.length-1,className:"rounded border border-line px-2 py-1 text-[11px] text-muted transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40",children:"下移"}),a.jsx("button",{type:"button",onClick:()=>c(Q),className:"rounded border border-line px-2.5 py-1 text-[11px] text-brand transition-colors hover:border-brand hover:bg-card",children:"查看证据链"})]})]}),a.jsxs("dl",{className:"mt-4 grid gap-4 text-xs md:grid-cols-2",children:[a.jsxs("div",{children:[a.jsx("dt",{className:"text-muted",children:"对应材料 / 练习编号（可替换）"}),a.jsx("dd",{className:"mt-1.5",children:a.jsx("input",{value:Q.materialsText,onChange:N=>s(Q.id,{materialsText:N.target.value}),className:"h-9 w-full rounded-lg border border-line px-3 text-xs text-ink transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"})})]}),a.jsxs("div",{children:[a.jsx("dt",{className:"text-muted",children:"选择理由"}),a.jsx("dd",{className:"mt-1.5 leading-6 text-ink",children:Q.reason})]}),a.jsxs("div",{children:[a.jsx("dt",{className:"text-muted",children:"适用条件"}),a.jsx("dd",{className:"mt-1.5 leading-6 text-ink",children:Q.condition})]}),a.jsxs("div",{children:[a.jsx("dt",{className:"text-muted",children:"教师可调整点"}),a.jsx("dd",{className:"mt-1.5 leading-6 text-muted",children:Q.teacherAdjustable})]})]}),a.jsx("div",{className:"mt-3 rounded-lg bg-page px-3 py-2.5",children:a.jsxs("label",{className:"block",children:[a.jsx("span",{className:"text-[11px] text-muted",children:"教师调整理由（随成果包导出留痕）"}),a.jsx("input",{value:Q.teacherNote,onChange:N=>s(Q.id,{teacherNote:N.target.value}),placeholder:"例如：该生计算基础薄弱，增加 2 道基础计算题",className:"mt-1.5 h-9 w-full rounded-lg border border-line bg-white px-3 text-xs text-ink placeholder:text-muted transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"})]})})]},Q.id))}),a.jsx(mu,{open:!!i,title:"证据链 · 课标要求与学习记录",onClose:()=>o(null),children:i&&a.jsxs("div",{className:"space-y-4 text-xs leading-6 text-muted",children:[a.jsxs("section",{children:[a.jsxs("h3",{className:"text-sm font-semibold text-ink",children:[i.kpName,a.jsx("span",{className:"ml-1.5 text-[11px] font-normal text-muted",children:i.kpId})]}),a.jsxs("p",{className:"mt-1",children:[a.jsx("span",{className:"text-ink",children:"课标学习要求："}),i.requirement]})]}),a.jsxs("section",{className:"rounded-lg bg-card px-4 py-3",children:[a.jsxs("p",{children:[a.jsx("span",{className:"text-ink",children:"该生学习记录："}),"有效作答 ",i.answered," 条， 得分 ",i.score," / ",i.full,"，正确率 ",i.accuracy,"%。"]}),a.jsxs("p",{children:[a.jsx("span",{className:"text-ink",children:"班级参照："}),"该知识点班级平均正确率"," ",i.classAvg,"%。"]}),a.jsx("p",{className:"mt-1 text-[11px]",children:"统计口径：缺失记录不计入正确率；同一知识点多条记录按最新一条统计。"})]}),a.jsxs("section",{children:[a.jsx("p",{className:"text-ink",children:"关联材料编号"}),a.jsx("p",{className:"mt-1",children:i.materials.join("、")||"暂无"})]}),!D&&a.jsx("p",{className:"rounded bg-warn px-3 py-2 text-[#A9761C]",children:"信息不足 ≠ 判定未掌握：该建议仅表示当前记录不足，不代表学生未掌握该知识点。"})]})})]})}const Td=[{key:"quality",label:"Tab1 数据质量报告"},{key:"individual",label:"Tab2 个体学情"},{key:"group",label:"Tab3 群体学情"}],Ii="grid grid-cols-[1fr_1.2fr_1.2fr_1.6fr_1.2fr] items-center gap-4";function hd(e){return e>=75?"bg-brand":e>=60?"bg-[#E7C57E]":"bg-[#DDA5A1]"}function Pu({data:e}){return a.jsx("div",{className:"mt-4 space-y-2.5",children:e.map(n=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs("span",{className:"w-[190px] shrink-0 truncate text-[11px] text-muted",title:`${n.id} ${n.name}`,children:[a.jsx("span",{className:"font-medium text-ink",children:n.id})," ",n.name]}),a.jsx("div",{className:"h-2.5 flex-1 overflow-hidden rounded-full bg-page",children:n.value!=null&&a.jsx("div",{className:$("h-full rounded-full",hd(n.value)),style:{width:`${Math.max(n.value,2)}%`}})}),a.jsx("span",{className:$("w-12 shrink-0 text-right text-[11px]",n.value==null?"text-muted":"font-medium text-ink"),children:n.value==null?"无数据":`${n.value}%`})]},n.id))})}function md(){const e=[{label:"≥ 75% 良好",color:"bg-brand"},{label:"60%~74% 一般",color:"bg-[#E7C57E]"},{label:"< 60% 待巩固",color:"bg-[#DDA5A1]"},{label:"无数据",color:"bg-line"}];return a.jsx("div",{className:"flex flex-wrap items-center gap-4",children:e.map(n=>a.jsxs("span",{className:"inline-flex items-center gap-1.5 text-[11px] text-muted",children:[a.jsx("span",{className:$("h-2 w-2 rounded-sm",n.color)}),n.label]},n.label))})}function Pd({className:e}){return a.jsxs("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:e,children:[a.jsx("path",{d:"M8 2.2 14.2 13a.6.6 0 0 1-.5.9H2.3a.6.6 0 0 1-.5-.9L8 2.2Z",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"}),a.jsx("path",{d:"M8 6.1v3.1",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"}),a.jsx("circle",{cx:"8",cy:"11.2",r:"0.7",fill:"currentColor"})]})}const yd={total:"bg-card",missing:"bg-warn",duplicate:"bg-card",abnormal:"bg-danger"};function vd({metrics:e}){return a.jsx("div",{className:"grid grid-cols-2 gap-4 lg:grid-cols-4",children:e.map(n=>a.jsxs("div",{className:$("rounded-lg border border-line/60 px-6 py-4",yd[n.key]||"bg-card"),children:[a.jsx("p",{className:"text-xs text-muted",children:n.label}),a.jsx("p",{className:"mt-3 text-4xl font-bold leading-none tracking-tight text-ink tabular-nums",children:n.value})]},n.key))})}function gd({metrics:e,rows:n}){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"px-6 pb-6",children:a.jsx(vd,{metrics:e})}),a.jsxs("section",{className:"border-t border-line px-6 py-5",children:[a.jsx("h2",{className:"text-[13px] font-semibold text-ink",children:"数据清洗规则说明"}),a.jsx("div",{className:"mt-2.5 space-y-1 text-xs leading-6 text-muted",children:ad.map(t=>a.jsxs("p",{children:[a.jsx("span",{className:"text-ink",children:t.title}),t.desc]},t.key))}),a.jsxs("p",{className:"mt-3 inline-flex items-center gap-1.5 rounded bg-warn px-2.5 py-1.5 text-xs font-medium text-[#A9761C]",children:[a.jsx(Pd,{className:"h-3.5 w-3.5"}),"警示：信息不足 ",a.jsx("span",{className:"font-semibold",children:"≠"})," 判定未掌握"]})]}),a.jsxs("section",{className:"border-t border-line px-6 py-5",children:[a.jsx("h2",{className:"text-[13px] font-semibold text-ink",children:"异常/缺失样例预览"}),a.jsx("div",{className:"mt-4 overflow-x-auto",children:a.jsxs("div",{className:"min-w-[640px]",children:[a.jsxs("div",{className:$(Ii,"border-b border-line py-2.5 text-xs font-medium text-muted"),children:[a.jsx("span",{children:"学生ID"}),a.jsx("span",{children:"题目编号"}),a.jsx("span",{children:"测验节点"}),a.jsx("span",{children:"异常/缺失类型"}),a.jsx("span",{children:"数据状态"})]}),n.map(t=>a.jsxs("div",{className:$(Ii,"border-b border-line py-3.5 text-xs text-ink","transition-colors last:border-b-0 hover:bg-page/70"),children:[a.jsx("span",{className:"font-medium",children:t.studentId}),a.jsx("span",{className:"text-ink/80",children:t.questionId}),a.jsx("span",{className:"text-ink/80",children:t.node}),a.jsx("span",{children:a.jsx("span",{className:$("inline-flex items-center rounded px-2.5 py-1 font-medium",cd[t.type]),children:t.type})}),a.jsx("span",{className:"text-muted",children:t.status})]},t.recordId)),n.length===0&&a.jsx("div",{className:"py-10 text-center text-xs text-muted",children:"当前筛选条件下暂无异常/缺失样例"})]})})]})]})}const Rd={记录充足:"bg-brand/25 text-ink",部分信息不足:"bg-warn text-[#A9761C]"};function wd({onClick:e}){return a.jsx("button",{type:"button",onClick:e,className:"rounded border border-line px-2.5 py-1 text-[11px] text-brand transition-colors hover:border-brand hover:bg-card",children:"查看依据"})}function kd({profile:e,groupStats:n}){const[t,r]=v.useState(null),l=e.kpStats.map(f=>({id:f.kpId,name:f.name,value:f.accuracy})),i=e.kpStats.filter(f=>f.answered>0&&f.accuracy<65),o=e.kpStats.filter(f=>f.answered===0),s=new Map(n.kpStats.map(f=>[f.kpId,f.avg])),u=[{key:"materials",label:"材料编号",content:e.answeredMaterials.length?`${e.answeredMaterials.slice(0,10).join("、")}${e.answeredMaterials.length>10?" 等":""}（共 ${e.answeredMaterials.length} 份）`:"暂无有效作答记录"},{key:"weak",label:"待巩固知识点",content:i.length?i.map(f=>`${f.name}（${f.accuracy}%）`).join("、"):"暂无（各知识点正确率均不低于 65%）"},{key:"missing",label:"信息不足知识点",content:o.length?o.map(f=>`${f.name}（无作答记录，暂不判定）`).join("、"):"暂无"}],c={materials:"依据 · 已作答材料明细",weak:"依据 · 待巩固知识点统计",missing:"依据 · 信息不足知识点说明"};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"px-6 pb-4",children:a.jsxs("div",{className:"flex flex-wrap items-center gap-x-10 gap-y-3 rounded-lg bg-card px-5 py-4",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-[11px] text-muted",children:"学生编号"}),a.jsx("p",{className:"mt-1 text-sm font-semibold text-ink",children:e.studentId})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-[11px] text-muted",children:"所在班级"}),a.jsx("p",{className:"mt-1 text-sm font-semibold text-ink",children:e.classId})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-[11px] text-muted",children:"有效作答数"}),a.jsxs("p",{className:"mt-1 text-sm font-semibold text-ink",children:[e.validAnswers," 条"]})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-[11px] text-muted",children:"记录覆盖度"}),a.jsxs("p",{className:"mt-1 text-sm font-semibold text-ink",children:[e.answeredKpCount,"/",Me.length,a.jsxs("span",{className:"ml-1 text-xs font-normal text-muted",children:["（",e.coverageRate,"%）"]})]})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-[11px] text-muted",children:"整体正确率"}),a.jsxs("p",{className:"mt-1 text-sm font-semibold text-ink",children:[e.overallAccuracy,"%"]})]}),a.jsx("span",{className:$("ml-auto rounded px-2.5 py-1 text-xs font-medium",Rd[e.recordStatus]),children:e.recordStatus})]})}),a.jsx("div",{className:"px-6 pb-5",children:a.jsxs("div",{className:"rounded-lg border border-line p-5",children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[a.jsx("h2",{className:"text-[13px] font-semibold text-ink",children:"各知识点答题正确率"}),a.jsx(md,{})]}),a.jsx(Pu,{data:l}),o.length>0&&a.jsxs("p",{className:"mt-3 rounded bg-warn px-3 py-2 text-[11px] leading-5 text-[#A9761C]",children:["信息不足 ≠ 判定未掌握：",o.map(f=>f.name).join("、"),"暂无有效作答记录，未纳入正确率判断。"]})]})}),a.jsxs("section",{className:"border-t border-line px-6 py-5",children:[a.jsx("h2",{className:"text-[13px] font-semibold text-ink",children:"学情摘要"}),a.jsxs("div",{className:"mt-4 overflow-hidden rounded-lg border border-line",children:[a.jsxs("div",{className:"grid grid-cols-[150px_1fr_90px] items-center gap-4 bg-page px-4 py-2.5 text-xs font-medium text-muted",children:[a.jsx("span",{children:"项目"}),a.jsx("span",{children:"内容"}),a.jsx("span",{className:"text-right",children:"操作"})]}),u.map(f=>a.jsxs("div",{className:"grid grid-cols-[150px_1fr_90px] items-center gap-4 border-t border-line px-4 py-3 text-xs",children:[a.jsx("span",{className:"font-medium text-ink",children:f.label}),a.jsx("span",{className:"leading-6 text-muted",children:f.content}),a.jsx("span",{className:"text-right",children:a.jsx(wd,{onClick:()=>r(f.key)})})]},f.key))]})]}),a.jsxs(mu,{open:!!t,title:t?c[t]:"",onClose:()=>r(null),children:[t==="materials"&&a.jsxs("div",{className:"space-y-2 text-xs leading-6 text-muted",children:[a.jsx("p",{className:"text-ink",children:"按知识点统计的有效作答材料："}),Me.map((f,D)=>{const Q=e.kpStats[D].answered;return a.jsxs("p",{className:"rounded bg-page px-3 py-2",children:[a.jsxs("span",{className:"font-medium text-ink",children:[f.id," ",f.name]}),"：",Q>0?f.materials.slice(0,Q).join("、"):"无",a.jsxs("span",{className:"ml-1",children:["（",Q," 条）"]})]},f.id)})]}),t==="weak"&&a.jsxs("div",{className:"space-y-2 text-xs leading-6 text-muted",children:[i.length>0?a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"text-ink",children:"正确率低于 65% 的知识点统计："}),i.map(f=>a.jsxs("p",{className:"rounded bg-page px-3 py-2",children:[a.jsxs("span",{className:"font-medium text-ink",children:[f.kpId," ",f.name]}),"：有效作答 ",f.answered," 条，得分 ",f.score," / ",f.full,"，正确率"," ",a.jsxs("span",{className:"font-medium text-ink",children:[f.accuracy,"%"]}),"；班级平均"," ",s.get(f.kpId),"%。"]},f.kpId))]}):a.jsx("p",{children:"暂无待巩固知识点。"}),a.jsx("p",{className:"text-[11px]",children:"统计口径：缺失记录不计入正确率，重复记录只保留最新一条。"})]}),t==="missing"&&a.jsx("div",{className:"space-y-2 text-xs leading-6 text-muted",children:o.length>0?a.jsxs(a.Fragment,{children:[o.map(f=>a.jsxs("p",{className:"rounded bg-warn px-3 py-2 text-[#A9761C]",children:[f.kpId," ",f.name,"：暂无有效作答记录。"]},f.kpId)),a.jsx("p",{children:"信息不足 ≠ 判定未掌握：以上知识点仅表示当前缺少可用的学习记录，系统不据此输出 薄弱或未掌握结论，建议优先安排诊断性练习补充数据。"})]}):a.jsx("p",{children:"暂无信息不足知识点。"})})]})]})}const Sd={高:"bg-danger text-[#B4544F]",中:"bg-warn text-[#A9761C]",低:"bg-card text-muted"};function Cd({stats:e,classId:n,onClassChange:t}){const r=e.kpStats.map(s=>({id:s.kpId,name:s.name,value:s.avg})),l=xt.map(s=>`${s.id} 班 ${s.count} 人`).join("、"),i=[{label:"班级学生数",value:e.totalStudents,unit:"人"},{label:"有效作答记录",value:e.validTotal,unit:"条"},{label:"班级平均正确率",value:e.overallAccuracy,unit:"%"},{label:"记录不足学生",value:e.insufficientCount,unit:"人"}],o=[{label:"人数",sufficient:`${e.comparison.sufficient.count} 人`,insufficient:`${e.comparison.insufficient.count} 人`},{label:"人均有效作答",sufficient:`${e.comparison.sufficient.avgAnswers} 条`,insufficient:`${e.comparison.insufficient.avgAnswers} 条`},{label:"平均正确率",sufficient:`${e.comparison.sufficient.avgAccuracy}%`,insufficient:`${e.comparison.insufficient.avgAccuracy}%`},{label:"知识点覆盖率",sufficient:`${e.comparison.sufficient.coverage}%`,insufficient:`${e.comparison.insufficient.coverage}%`},{label:"主要风险",sufficient:e.comparison.sufficient.risk,insufficient:e.comparison.insufficient.risk}];return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"px-6 py-5",children:a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-[13px] font-semibold text-ink",children:"班级群体学情"}),a.jsxs("p",{className:"mt-1 text-[11px] text-muted",children:[l,"，按班级分别统计；选择学生后默认跟随其所在班级。"]})]}),a.jsx("div",{className:"flex flex-wrap gap-2",children:xt.map(s=>{const u=s.id===n;return a.jsxs("button",{type:"button",onClick:()=>t(s.id),className:$("rounded-lg border px-3 py-1.5 text-xs transition-colors",u?"border-brand bg-card font-semibold text-ink":"border-line text-muted hover:border-brand hover:text-ink"),children:[s.id," 班",a.jsxs("span",{className:"ml-1 text-[11px] font-normal text-muted",children:[s.count," 人"]})]},s.id)})})]})}),a.jsx("div",{className:"px-6 pb-5",children:a.jsx("div",{className:"grid grid-cols-2 gap-4 lg:grid-cols-4",children:i.map(s=>a.jsxs("div",{className:"rounded-lg border border-line/60 bg-card px-5 py-4",children:[a.jsx("p",{className:"text-xs text-muted",children:s.label}),a.jsxs("p",{className:"mt-3 text-3xl font-bold leading-none tracking-tight text-ink tabular-nums",children:[s.value,a.jsx("span",{className:"ml-1 text-xs font-normal text-muted",children:s.unit})]})]},s.label))})}),a.jsx("div",{className:"px-6 pb-5",children:a.jsxs("div",{className:"rounded-lg border border-line p-5",children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[a.jsxs("h2",{className:"text-[13px] font-semibold text-ink",children:[e.classId," 班各知识点平均正确率"]}),a.jsx("span",{className:"text-[11px] text-muted",children:"统计口径：有效作答记录，缺失不计入"})]}),a.jsx(Pu,{data:r})]})}),a.jsxs("section",{className:"border-t border-line px-6 py-5",children:[a.jsx("h2",{className:"text-[13px] font-semibold text-ink",children:"共性问题"}),a.jsx("div",{className:"mt-4 overflow-x-auto",children:a.jsxs("div",{className:"min-w-[720px]",children:[a.jsxs("div",{className:"grid grid-cols-[1.1fr_0.8fr_1.6fr_1.8fr] items-center gap-4 border-b border-line py-2.5 text-xs font-medium text-muted",children:[a.jsx("span",{children:"知识点"}),a.jsx("span",{children:"群体薄弱程度"}),a.jsx("span",{children:"统计依据"}),a.jsx("span",{children:"教学提示"})]}),e.commonProblems.map(s=>a.jsxs("div",{className:"grid grid-cols-[1.1fr_0.8fr_1.6fr_1.8fr] items-center gap-4 border-b border-line py-3 text-xs text-ink last:border-b-0",children:[a.jsxs("span",{children:[a.jsx("span",{className:"font-medium",children:s.name}),a.jsx("span",{className:"ml-1 text-[11px] text-muted",children:s.kpId})]}),a.jsx("span",{children:a.jsx("span",{className:$("inline-flex rounded px-2.5 py-1 font-medium",Sd[s.level]),children:s.level})}),a.jsx("span",{className:"text-muted",children:s.evidence}),a.jsx("span",{className:"text-muted",children:s.teachingTip})]},s.kpId))]})})]}),a.jsxs("section",{className:"border-t border-line px-6 py-5",children:[a.jsx("h2",{className:"text-[13px] font-semibold text-ink",children:"群体差异对比"}),a.jsxs("div",{className:"mt-4 overflow-hidden rounded-lg border border-line",children:[a.jsxs("div",{className:"grid grid-cols-[140px_1fr_1fr] items-center gap-4 bg-page px-4 py-2.5 text-xs font-medium text-muted",children:[a.jsx("span",{children:"对比维度"}),a.jsx("span",{children:"记录充足组"}),a.jsx("span",{children:"信息不足组"})]}),o.map(s=>a.jsxs("div",{className:"grid grid-cols-[140px_1fr_1fr] items-center gap-4 border-t border-line px-4 py-3 text-xs",children:[a.jsx("span",{className:"font-medium text-ink",children:s.label}),a.jsx("span",{className:"text-muted",children:s.sufficient}),a.jsx("span",{className:"text-muted",children:s.insufficient})]},s.label))]}),a.jsx("p",{className:"mt-3 rounded bg-warn px-3 py-2 text-[11px] leading-5 text-[#A9761C]",children:"信息不足组仅代表记录覆盖度不足，暂不参与掌握情况判定，建议优先补充诊断性练习。"})]})]})}function jd({activeTab:e,onChange:n}){return a.jsx("div",{className:"flex items-center gap-10 overflow-x-auto px-6",children:Td.map(t=>{const r=t.key===e;return a.jsxs("button",{type:"button",role:"tab","aria-selected":r,onClick:()=>n(t.key),className:$("relative shrink-0 py-4 text-[13px] transition-colors",r?"font-semibold text-brand":"text-muted hover:text-ink"),children:[t.label,a.jsx("span",{"aria-hidden":"true",className:$("absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand transition-opacity",r?"opacity-100":"opacity-0")})]},t.key)})})}function Ed(){return a.jsx("div",{className:"px-6 pb-6",children:a.jsxs("div",{className:"flex h-[280px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-page/60",children:[a.jsx("p",{className:"text-sm font-medium text-ink",children:"尚未选择学生"}),a.jsx("p",{className:"text-xs text-muted",children:"请先在左侧「学生ID」下拉框中选择学生，再查看个体学情。"})]})})}function _d(){var D;const{metrics:e,rows:n,studentId:t,status:r}=zt(),[l,i]=v.useState("quality"),o=v.useMemo(()=>t==="全部学生"?null:pu(t),[t]),[s,u]=v.useState(((D=xt[0])==null?void 0:D.id)??"");v.useEffect(()=>{o!=null&&o.classId&&u(o.classId)},[o]);const c=v.useMemo(()=>Tu(s),[s]),f=v.useMemo(()=>n.filter(Q=>(t==="全部学生"||Q.studentId===t)&&(r==="全部状态"||Q.type===r)),[n,t,r]);return a.jsxs("section",{className:"rounded-lg border border-line bg-white",children:[a.jsx(jd,{activeTab:l,onChange:i}),l==="quality"&&a.jsx(gd,{metrics:e,rows:f}),l==="individual"&&(o?a.jsx(kd,{profile:o,groupStats:c}):a.jsx(Ed,{})),l==="group"&&a.jsx(Cd,{stats:c,classId:s,onClassChange:u})]})}function ol({title:e,subtitle:n,children:t}){return a.jsxs("section",{className:"rounded-lg border border-line bg-white p-6",children:[a.jsxs("header",{children:[a.jsx("h1",{className:"text-base font-semibold text-ink",children:e}),n&&a.jsx("p",{className:"mt-1 text-xs leading-5 text-muted",children:n})]}),a.jsx("div",{className:"mt-5",children:t})]})}function Id(){return a.jsx(ol,{title:"首页 · 总览仪表盘",subtitle:"数据集概览与功能快捷入口，仅展示群体数据，不涉及单个学生。",children:a.jsxs("div",{className:"rounded-lg border border-dashed border-line bg-page/60 px-6 py-12 text-center",children:[a.jsx("p",{className:"text-sm font-medium text-ink",children:"页面内容待实现"}),a.jsx("p",{className:"mt-1.5 text-xs leading-6 text-muted",children:"将包含：项目简介卡片 · 总学生数 / 总学习记录 / 缺失 / 异常指标行 · 4 个功能入口卡片 · 各知识点平均正确率柱状图"})]})})}function Ld(){return a.jsx(ol,{title:"学习内容梳理",subtitle:"梳理课标要求与配套材料，输出结构化学习内容清单，与本页学生数据无关。",children:a.jsxs("div",{className:"rounded-lg border border-dashed border-line bg-page/60 px-6 py-12 text-center",children:[a.jsx("p",{className:"text-sm font-medium text-ink",children:"页面内容待实现"}),a.jsx("p",{className:"mt-1.5 text-xs leading-6 text-muted",children:"将包含：分析主题范围说明 · 结构化清单大表格（M1）· 导出 JSON / CSV · 知识点依赖关系可视化"})]})})}function zd(){const{studentId:e}=zt();return a.jsxs(ol,{title:"案例核对 & 证据溯源",subtitle:"以「学习要求 → 已有表现 → 学习建议」三栏对照核验证据链，并导出成果包。",children:[a.jsxs("p",{className:"mb-4 rounded-lg bg-card px-4 py-3 text-xs text-muted",children:["当前继承学生：",a.jsx("span",{className:"font-medium text-ink",children:e==="全部学生"?"未选择（可在左侧学生ID中选择）":e})]}),a.jsxs("div",{className:"rounded-lg border border-dashed border-line bg-page/60 px-6 py-12 text-center",children:[a.jsx("p",{className:"text-sm font-medium text-ink",children:"页面内容待实现"}),a.jsx("p",{className:"mt-1.5 text-xs leading-6 text-muted",children:"将包含：案例A / 案例B / 多学生对比 / 系统设置与成果包导出 4 个 Tab · 三栏对照大表格 · 模拟新增记录后证据刷新"})]})]})}function Md(){return a.jsx(Wc,{children:a.jsxs(q0,{element:a.jsx(xd,{}),children:[a.jsx(q0,{path:"/",element:a.jsx(Id,{})}),a.jsx(q0,{path:"/outline",element:a.jsx(Ld,{})}),a.jsx(q0,{path:"/analysis",element:a.jsx(_d,{})}),a.jsx(q0,{path:"/advice",element:a.jsx(Nd,{})}),a.jsx(q0,{path:"/review",element:a.jsx(zd,{})}),a.jsx(q0,{path:"*",element:a.jsx($c,{to:"/",replace:!0})})]})})}fr.createRoot(document.getElementById("root")).render(a.jsx(Wi.StrictMode,{children:a.jsx(bc,{children:a.jsx(sd,{children:a.jsx(Md,{})})})}));
