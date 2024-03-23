"use strict";var e=require("react");function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a,u,c=[],o=!0,i=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;o=!1}else for(;!(o=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);o=!0);}catch(e){i=!0,l=e}finally{try{if(!o&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(i)throw l}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var n=e.createContext(),l=function(){return e.useContext(n)},a=function(r){var l=r.children,a=t(e.useState(!1),2),u=a[0],c=a[1],o=u?"dark":"light";return e.useEffect((function(){document.documentElement.setAttribute("data-theme",o)}),[u]),e.createElement(n.Provider,{value:{theme:o,toggleTheme:function(){c((function(e){return!e}))}}},l)};function u(){var t=l(),r=t.theme,n=t.toggleTheme;return e.createElement(e.Fragment,null,e.createElement("div",{className:"mode-switch"},e.createElement("label",null,e.createElement("input",{type:"checkbox",onChange:n,checked:"dark"===r}),e.createElement("span",{className:"slider round"}))))}module.exports=function(){return React.createElement("div",null,React.createElement(a,null,React.createElement(u,null)))};