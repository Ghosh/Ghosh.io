!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("styled-is"),require("prop-types"),require("styled-components"),require("react")):"function"==typeof define&&define.amd?define("@stylekit/ui",["styled-is","prop-types","styled-components","react"],e):"object"==typeof exports?exports["@stylekit/ui"]=e(require("styled-is"),require("prop-types"),require("styled-components"),require("react")):n["@stylekit/ui"]=e(n["styled-is"],n["prop-types"],n["styled-components"],n.react)}(this,(function(n,e,t,r){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/lib/dist/",t(t.s=10)}([function(e,t){e.exports=n},function(n,t){n.exports=e},function(n,e){n.exports=t},function(n,e){n.exports=r},function(n,e,t){"use strict";t.r(e);var r=t(3),i=t.n(r),o=t(1),a=t.n(o),u=t(2),c=t.n(u),f=t(0),l=t.n(f);function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function d(){var n=x(["\n    display: flex;\n    justify-content: center;\n  "]);return d=function(){return n},n}function b(){var n=x(["\n    display: flex;\n    align-items: center;\n  "]);return b=function(){return n},n}function p(){var n=x(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "]);return p=function(){return n},n}function m(){var n=x(["\n    margin: ",";\n  "]);return m=function(){return n},n}function h(){var n=x(["\n    padding: ",";\n  "]);return h=function(){return n},n}function g(){var n=x(["\n    height: ",";\n  "]);return g=function(){return n},n}function v(){var n=x(["\n    width: ",";\n  "]);return v=function(){return n},n}function y(){var n=x(["\n    border-radius: ",";\n  "]);return y=function(){return n},n}function O(){var n=x(["\n    color: ",";\n  "]);return O=function(){return n},n}function w(){var n=x(["\n    background-color: ",";\n  "]);return w=function(){return n},n}function j(){var n=x(["\n  box-sizing: border-box;\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n"]);return j=function(){return n},n}function x(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var z=c.a.div(j(),l()("bg")(w(),(function(n){return n.bg})),l()("color")(O(),(function(n){return n.color})),l()("br")(y(),(function(n){return n.br})),l()("width")(v(),(function(n){return n.width})),l()("height")(g(),(function(n){return n.height})),l()("padding")(h(),(function(n){return n.padding})),l()("margin")(m(),(function(n){return n.margin})),l()("centered")(p()),l()("vCentered")(b()),l()("hCentered")(d())),k=function(n){var e=n.children,t=s(n,["children"]);return i.a.createElement(z,t,e)};k.displayName="Box",k.propTypes={children:a.a.node.isRequired,bg:a.a.string,br:a.a.string,color:a.a.string,width:a.a.string,height:a.a.string,padding:a.a.string,margin:a.a.string,centered:a.a.bool,vCentered:a.a.bool,hCentered:a.a.bool},k.defaultProps={bg:"transparent",br:"0",color:"inherit",width:"inherit",height:"inherit",padding:"0",margin:"0",centered:!1,vCentered:!1,hCentered:!1},e.default=k},function(n,e,t){"use strict";t.r(e);var r=t(3),i=t.n(r),o=t(1),a=t.n(o),u=t(2),c=t.n(u),f=t(0),l=t.n(f);function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function d(){var n=p(["\n    grid-gap: ","; // <--- Legacy\n    gap: ",";\n  "]);return d=function(){return n},n}function b(){var n=p(["\n  display: grid;\n\n  ",";\n"]);return b=function(){return n},n}function p(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var m=c.a.div(b(),l()("gap")(d(),(function(n){return n.gap}),(function(n){return n.gap}))),h=function(n){var e=n.children,t=s(n,["children"]);return i.a.createElement(m,t,e)};h.displayName="Stack",h.propTypes={children:a.a.node.isRequired,gap:a.a.string},h.defaultProps={gap:"0px"},e.default=h},function(n,e,t){"use strict";t.r(e);var r=t(3),i=t.n(r),o=t(1),a=t.n(o),u=t(2),c=t.n(u),f=t(0),l=t.n(f);function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function d(){var n=O(["\n    margin-right: ",";\n  "]);return d=function(){return n},n}function b(){var n=O(["\n    margin-left: ",";\n  "]);return b=function(){return n},n}function p(){var n=O(["\n    margin-bottom: ",";\n  "]);return p=function(){return n},n}function m(){var n=O(["\n    margin-top: ",";\n  "]);return m=function(){return n},n}function h(){var n=O(["\n    margin-top: ",";\n    margin-bottom: ",";\n  "]);return h=function(){return n},n}function g(){var n=O(["\n    margin-left: ",";\n    margin-right: ",";\n  "]);return g=function(){return n},n}function v(){var n=O(["\n    margin: ",";\n  "]);return v=function(){return n},n}function y(){var n=O(["\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n"]);return y=function(){return n},n}function O(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var w=c.a.div(y(),l()("m")(v(),(function(n){return n.m})),l()("mx")(g(),(function(n){return n.mx}),(function(n){return n.mx})),l()("my")(h(),(function(n){return n.my}),(function(n){return n.my})),l()("mt")(m(),(function(n){return n.mt})),l()("mb")(p(),(function(n){return n.mb})),l()("ml")(b(),(function(n){return n.ml})),l()("mr")(d(),(function(n){return n.mr}))),j=function(n){var e=s({},n);return i.a.createElement(w,e)};j.propTypes={m:a.a.string,mx:a.a.string,my:a.a.string,mt:a.a.string,mb:a.a.string,ml:a.a.string,mr:a.a.string},j.defaultProps={m:null,mx:null,my:null,mt:null,mb:null,ml:null,mr:null},e.default=j},function(n,e,t){"use strict";t.r(e),t.d(e,"reset",(function(){return o}));var r=t(2);function i(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n"]);return i=function(){return n},n}var o=Object(r.css)(i()),a=Object(r.createGlobalStyle)(o);e.default=a},function(n,e,t){"use strict";t.r(e),t.d(e,"normalize",(function(){return o}));var r=t(2);function i(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(['\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the "main" element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on "h1" elements within "section" and\n * "article" contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd "em" font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd "em" font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent "sub" and "sup" elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from "fieldset" elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    "fieldset" elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to "inherit" in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n']);return i=function(){return n},n}var o=Object(r.css)(i()),a=Object(r.createGlobalStyle)(o);e.default=a},function(n,e,t){"use strict";t.r(e);var r=t(3),i=t.n(r),o=t(1),a=t.n(o),u=t(2),c=t.n(u),f=t(0),l=t.n(f);function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function d(){var n=N(["\n    align-items: center;\n    justify-content: center;\n  "]);return d=function(){return n},n}function b(){var n=N(["\n    width: 100%;\n    height: 100%;\n    flex-basis: 100%;\n  "]);return b=function(){return n},n}function p(){var n=N(["\n    align-items: stretch;\n  "]);return p=function(){return n},n}function m(){var n=N(["\n    align-items: baseline;\n  "]);return m=function(){return n},n}function h(){var n=N(["\n    align-items: center;\n  "]);return h=function(){return n},n}function g(){var n=N(["\n    align-items: flex-end;\n  "]);return g=function(){return n},n}function v(){var n=N(["\n    align-items: flex-start;\n  "]);return v=function(){return n},n}function y(){var n=N(["\n    align-content: stretch; /* default */\n  "]);return y=function(){return n},n}function O(){var n=N(["\n    align-content: space-around;\n  "]);return O=function(){return n},n}function w(){var n=N(["\n    align-content: space-between;\n  "]);return w=function(){return n},n}function j(){var n=N(["\n    align-content: center;\n  "]);return j=function(){return n},n}function x(){var n=N(["\n    align-content: flex-end;\n  "]);return x=function(){return n},n}function z(){var n=N(["\n      align-content: flex-start;\n  "]);return z=function(){return n},n}function k(){var n=N(["\n    justify-content: space-around;\n  "]);return k=function(){return n},n}function C(){var n=N(["\n    justify-content: space-between;\n  "]);return C=function(){return n},n}function S(){var n=N(["\n    justify-content: center;\n  "]);return S=function(){return n},n}function E(){var n=N(["\n    justify-content: flex-end;\n  "]);return E=function(){return n},n}function P(){var n=N(["\n    justify-content: flex-start; /* default */\n  "]);return P=function(){return n},n}function I(){var n=N(["\n    flex-wrap: wrap-reverse;\n  "]);return I=function(){return n},n}function R(){var n=N(["\n    flex-wrap: wrap;\n  "]);return R=function(){return n},n}function q(){var n=N(["\n    flex-wrap: nowrap; /* default */\n  "]);return q=function(){return n},n}function F(){var n=N(["\n    flex-direction: column-reverse;\n  "]);return F=function(){return n},n}function T(){var n=N(["\n    flex-direction: column;\n  "]);return T=function(){return n},n}function A(){var n=N(["\n    flex-direction: row-reverse;\n  "]);return A=function(){return n},n}function M(){var n=N(["\n    flex-direction: row; /* default */\n  "]);return M=function(){return n},n}function _(){var n=N(["\n    display: inline-flex;\n  "]);return _=function(){return n},n}function B(){var n=N(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-content: stretch;\n\n  ",";\n\n  ",";\n  ",";\n  ",";\n  ",";\n\n  ",";\n  ",";\n  ",";\n\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n\n  ",";\n\n  ",";\n"]);return B=function(){return n},n}function N(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var L=c.a.div(B(),l()("inline")(_()),Object(f.match)("direction","row")(M()),Object(f.match)("direction","rowReverse")(A()),Object(f.match)("direction","column")(T()),Object(f.match)("direction","columnReverse")(F()),Object(f.match)("wrap","nowrap")(q()),Object(f.match)("wrap","wrap")(R()),Object(f.match)("wrap","wrapReverse")(I()),Object(f.match)("justifyContent","start")(P()),Object(f.match)("justifyContent","end")(E()),Object(f.match)("justifyContent","center")(S()),Object(f.match)("justifyContent","between")(C()),Object(f.match)("justifyContent","around")(k()),Object(f.match)("alignContent","start")(z()),Object(f.match)("alignContent","end")(x()),Object(f.match)("alignContent","center")(j()),Object(f.match)("alignContent","between")(w()),Object(f.match)("alignContent","around")(O()),Object(f.match)("alignContent","strech")(y()),Object(f.match)("alignItems","start")(v()),Object(f.match)("alignItems","end")(g()),Object(f.match)("alignItems","center")(h()),Object(f.match)("alignItems","baseline")(m()),Object(f.match)("alignItems","stretch")(p()),l()("full")(b()),l()("centered")(d())),G=function(n){var e=n.children,t=s(n,["children"]);return i.a.createElement(L,t,e)};G.displayName="Flex",G.propTypes={children:a.a.node.isRequired,inline:a.a.bool,full:a.a.bool,centered:a.a.bool,direction:a.a.oneOf(["row","rowReverse","column","columnReverse"]),wrap:a.a.oneOf(["nowrap","wrap","wrapReverse"]),justifyContent:a.a.oneOf(["start","end","center","between","around"]),alignContent:a.a.oneOf(["start","end","center","between","around","strech"]),alignItems:a.a.oneOf(["start","end","center","baseline","strech"])},G.defaultProps={inline:!1,full:!1,centered:!1,direction:"row",wrap:"nowrap",justifyContent:"start",alignContent:"start"};var D=G;function H(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function J(){var n=on(["\n    align-self: strech;\n  "]);return J=function(){return n},n}function K(){var n=on(["\n    align-self: baseline;\n  "]);return K=function(){return n},n}function Q(){var n=on(["\n    align-self: center;\n  "]);return Q=function(){return n},n}function U(){var n=on(["\n    align-self: end;\n  "]);return U=function(){return n},n}function V(){var n=on(["\n    align-self: start;\n  "]);return V=function(){return n},n}function W(){var n=on(["\n    align-self: auto; /* default */\n  "]);return W=function(){return n},n}function X(){var n=on(["\n    flex-shrink: 0;\n  "]);return X=function(){return n},n}function Y(){var n=on(["\n    flex-shrink: ",";\n  "]);return Y=function(){return n},n}function Z(){var n=on(["\n    flex-grow: ",";\n  "]);return Z=function(){return n},n}function $(){var n=on(["\n    flex-basis: ",";\n  "]);return $=function(){return n},n}function nn(){var n=on(["\n    order: 99;\n  "]);return nn=function(){return n},n}function en(){var n=on(["\n    order: -1;\n  "]);return en=function(){return n},n}function tn(){var n=on(["\n    order: ",";\n  "]);return tn=function(){return n},n}function rn(){var n=on(["\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 1;\n  display: block;\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n"]);return rn=function(){return n},n}function on(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var an=c.a.div(rn(),l()("order")(tn(),(function(n){return n.order})),l()("first")(en()),l()("last")(nn()),l()("basis")($(),(function(n){return n.basis})),l()("grow")(Z(),(function(n){return n.grow})),l()("shrink")(Y(),(function(n){return n.shrink})),l()("noShrink")(X()),Object(f.match)("alignSelf","auto")(W()),Object(f.match)("alignSelf","start")(V()),Object(f.match)("alignSelf","end")(U()),Object(f.match)("alignSelf","center")(Q()),Object(f.match)("alignSelf","baseline")(K()),Object(f.match)("alignSelf","strech")(J())),un=function(n){var e=n.children,t=H(n,["children"]);return i.a.createElement(an,t,e)};un.displayName="Box",un.propTypes={children:a.a.node.isRequired,first:a.a.bool,last:a.a.bool,order:a.a.number,basis:a.a.oneOfType([a.a.number,a.a.string]),grow:a.a.number,shrink:a.a.number,alignSelf:a.a.oneOf(["auto","start","end","center","baseline","stretch"])},un.defaultProps={first:!1,last:!1,order:0,basis:"auto",grow:0,shrink:1,alignSelf:"auto"};var cn=un;D.Box=cn;e.default=D},function(n,e,t){"use strict";t.r(e);var r=t(9);t.d(e,"Flex",(function(){return r.default}));var i=t(4);t.d(e,"Box",(function(){return i.default}));var o=t(5);t.d(e,"Stack",(function(){return o.default}));var a=t(6);t.d(e,"Spacer",(function(){return a.default}));var u=t(7);t.d(e,"Reset",(function(){return u.default}));var c=t(8);t.d(e,"Normalize",(function(){return c.default}))}])}));