!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("styled-is"),require("prop-types"),require("styled-components"),require("react")):"function"==typeof define&&define.amd?define("@stylekit/ui",["styled-is","prop-types","styled-components","react"],t):"object"==typeof exports?exports["@stylekit/ui"]=t(require("styled-is"),require("prop-types"),require("styled-components"),require("react")):e["@stylekit/ui"]=t(e["styled-is"],e["prop-types"],e["styled-components"],e.react)}(this,(function(e,t,r,n){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/lib/dist/",r(r.s=5)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},,function(e,t,r){"use strict";r.r(t);var n=r(3),o=r.n(n),i=r(1),u=r.n(i),c=r(2),p=r.n(c),f=r(0),l=r.n(f);function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function a(){var e=y(["\n    grid-gap: ","; // <--- Legacy\n    gap: ",";\n  "]);return a=function(){return e},e}function d(){var e=y(["\n  display: grid;\n\n  ",";\n"]);return d=function(){return e},e}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var b=["children","data-testid","className"],g=p.a.div.withConfig({shouldForwardProp:function(e){return b.includes(e)}})(d(),l()("gap")(a(),(function(e){return e.gap}),(function(e){return e.gap}))),m=function(e){var t=e.children,r=s(e,["children"]);return o.a.createElement(g,r,t)};m.displayName="Stack",m.propTypes={children:u.a.node.isRequired,gap:u.a.string},m.defaultProps={gap:"0px"},t.default=m}])}));