!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=React},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(r(0)),o=n(r(2)),l=i(r(3));o.render(u.createElement(l.default,null),document.getElementById("example"))},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(r(0)),o=i(r(4));t.default=function(){return u.createElement(o.default,null)}},function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(r(0)),a=o(r(5)),f=o(r(6)),c=function(e){function t(t){var r=e.call(this,t)||this;return r.navigateToMain=function(){r.setState({view:"main"})},r.navigateToDetailView=function(e){r.setState({view:e})},r.state={view:"main"},r}return i(t,e),t.prototype.render=function(){return console.log(this.state.view),l.createElement("div",{style:s},l.createElement(a.default,{onClickHeader:this.navigateToMain}),l.createElement(f.default,{view:this.state.view,onNavigateToDetailView:this.navigateToDetailView}))},t}(l.Component);t.default=c;var s={display:"flex",height:"100%",flexDirection:"column"}},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(0));t.default=function(e){return i.createElement("div",{style:u},i.createElement("h1",{onClick:e.onClickHeader,style:o},"React Playground"))};var u={width:"100%",height:"5rem",background:"black",display:"flex",alignItems:"center"},o={marginLeft:"2rem",color:"white"}},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(r(0)),o=i(r(8)),l=i(r(9));t.default=function(e){return"main"===e.view?u.createElement(o.default,{onNavigationItemClick:e.onNavigateToDetailView}):u.createElement(l.default,{view:e.view})}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(0));t.default=function(e){var t="../pics/"+e.view+".jpg";return i.default.createElement("div",{onClick:function(){return e.onClick(e.view)},style:u},i.default.createElement("img",{src:t,style:o}),i.default.createElement("p",{style:l},e.view))};var u={width:"100%",display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center"},o={width:"100%"},l={position:"absolute",color:"white",fontSize:"4rem",letterSpacing:"0.4rem",fontWeight:"bold"}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(0)),u=n(r(7));t.default=function(e){return i.default.createElement("div",{style:o},["red","green","blue"].map((function(t){return i.default.createElement(u.default,{view:t,onClick:e.onNavigationItemClick})})))};var o={display:"flex",flexDirection:"column",flexGrow:1}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(0));t.default=function(e){var t="../pics/"+e.view+".jpg";return i.default.createElement("div",{style:u},i.default.createElement("img",{src:t}))};var u={display:"flex",flexDirection:"column",flexGrow:1}}]);
//# sourceMappingURL=main.js.map