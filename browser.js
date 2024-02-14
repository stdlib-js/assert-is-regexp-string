// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=t?e+i(n):i(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=a(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=a(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):n.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":p(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=f.call(i,v,"$1e"),i=f.call(i,y,"e"),i=f.call(i,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,b,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):l.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var x=String.fromCharCode,k=isNaN,S=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,i,n,o,p,l,u,f;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(s(i=e[u]))p+=i;else{if(r=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,k(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=E(i.arg,i.width,i.padRight)),p+=i.arg||"",l+=1}return p}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,a;for(t=[],a=0,i=$.exec(e);i;)(r=e.slice(a,$.lastIndex-i[0].length)).length&&t.push(r),t.push(T(i)),a=$.lastIndex,i=$.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function I(e){return"string"==typeof e}function O(e){var r,t;if(!I(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return V.apply(null,r)}var A,C=Object.prototype,R=C.toString,P=C.__defineGetter__,Z=C.__defineSetter__,G=C.__lookupGetter__,W=C.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(G.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&P&&P.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};var L=A;function X(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(e){return"string"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return U&&"symbol"==typeof Symbol.toStringTag}var M,q=Object.prototype.toString,B=Object.prototype.hasOwnProperty,D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";M=z()?function(e){var r,t,i,a,n;if(null==e)return q.call(e);t=e[H],n=H,r=null!=(a=e)&&B.call(a,n);try{e[H]=void 0}catch(r){return q.call(e)}return i=q.call(e),r?e[H]=t:delete e[H],i}:function(e){return q.call(e)};var J=M,K=String.prototype.valueOf,Q=z();function Y(e){return"object"==typeof e&&(e instanceof String||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object String]"===J(e)))}function ee(e){return N(e)||Y(e)}X(ee,"isPrimitive",N),X(ee,"isObject",Y);var re="function"==typeof Object.defineProperty?Object.defineProperty:null,te=Object.defineProperty;function ie(e){return"number"==typeof e}function ae(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ne(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ae(a):ae(a)+e,i&&(e="-"+e)),e}var oe=String.prototype.toLowerCase,ce=String.prototype.toUpperCase;function se(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ie(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ne(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ne(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ce.call(e.specifier)?ce.call(t):oe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function pe(e){return"string"==typeof e}var le=Math.abs,ue=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,ge=String.prototype.replace,de=/e\+(\d)$/,he=/e-(\d)$/,be=/^(\d+)$/,we=/^(\d+)e/,ye=/\.0$/,ve=/\.0*e/,me=/(\..*[^0])0*e/;function _e(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ie(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":le(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ge.call(t,me,"$1e"),t=ge.call(t,ve,"e"),t=ge.call(t,ye,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ge.call(t,de,"e+0$1"),t=ge.call(t,he,"e-0$1"),e.alternate&&(t=ge.call(t,be,"$1."),t=ge.call(t,we,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===fe.call(e.specifier)?fe.call(t):ue.call(t)}function Ee(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function xe(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ee(i):Ee(i)+e}var ke=String.fromCharCode,Se=isNaN,je=Array.isArray;function Ve(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $e(e){var r,t,i,a,n,o,c,s,p;if(!je(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(pe(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ve(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Se(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Se(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=se(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Se(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Se(n)?String(i.arg):ke(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=_e(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ne(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=xe(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Te=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Fe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ie(e){var r,t,i,a;for(t=[],a=0,i=Te.exec(e);i;)(r=e.slice(a,Te.lastIndex-i[0].length)).length&&t.push(r),t.push(Fe(i)),a=Te.lastIndex,i=Te.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function Oe(e){return"string"==typeof e}function Ae(e){var r,t;if(!Oe(e))throw new TypeError(Ae("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ie(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return $e.apply(null,r)}var Ce,Re=Object.prototype,Pe=Re.toString,Ze=Re.__defineGetter__,Ge=Re.__defineSetter__,We=Re.__lookupGetter__,Le=Re.__lookupSetter__;function Xe(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Ce=function(){try{return re({},"x",{}),!0}catch(e){return!1}}()?te:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===Pe.call(e))throw new TypeError(Ae("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Pe.call(t))throw new TypeError(Ae("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(We.call(e,r)||Le.call(e,r)?(i=e.__proto__,e.__proto__=Re,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Ze&&Ze.call(e,r,t.get),o&&Ge&&Ge.call(e,r,t.set),e};var Ne=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/;return Ce(Xe,"REGEXP",{configurable:!1,enumerable:!1,writable:!1,value:Ne}),function(e){return N(e)&&Ne.test(e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isRegExpString=r();
//# sourceMappingURL=browser.js.map
