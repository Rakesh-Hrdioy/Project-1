"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5755],{95755:function(e,t,n){n.d(t,{k:function(){return o}});var a=n(97458),i=n(52983),r=n(51028);let s={default:1,[r.BREAKPOINTS.xs]:2,[r.BREAKPOINTS.md]:3,[r.BREAKPOINTS.xl]:4},c=e=>{let t=e.default||1,[n,a]=(0,i.useState)(!1),r=(0,i.useMemo)(()=>Object.keys(e).filter(e=>"default"!==e).sort((e,t)=>Number(t)-Number(e)),[e]),s=(0,i.useCallback)(()=>e[Number(r.find(e=>window.matchMedia("(min-width: ".concat(e,"px)")).matches)||"default")]||t,[r,e,t]),c=(0,i.useCallback)(e=>(a(!0),r.forEach(t=>{let n=window.matchMedia("(min-width: ".concat(t,"px)"));"function"==typeof n.addEventListener?n.addEventListener("change",e):"function"==typeof n.addListener&&n.addListener(e)}),()=>{r.forEach(t=>{let n=window.matchMedia("(min-width: ".concat(t,"px)"));"function"==typeof n.removeEventListener?n.removeEventListener("change",e):"function"==typeof n.removeListener&&n.removeListener(e)})}),[r]),l=(0,i.useSyncExternalStore)(c,s,()=>t);return(0,i.useMemo)(()=>({hasBeenInitialized:n,columnsCount:l}),[l,n])};n(8109),n(8960),n(80293);var l=(0,n(22319).c)({defaultClassName:"_nkl6i52 _1286nb12yv _1286nb133v _1286nb197",variantClassNames:{invisible:{true:"_nkl6i51"}},defaultVariants:{},compoundVariants:[]});let o=e=>{let{children:t,columns:n=s}=e,{hasBeenInitialized:r,columnsCount:o}=c(n),u=(0,i.useMemo)(()=>{let e=i.Children.toArray(t),n=Array.from({length:o},()=>[]);return e.forEach((e,t)=>{n[t%o].push(e)}),n.map((e,t)=>(0,a.jsx)("div",{className:"_1286nb1m",children:e},"".concat(o,"-").concat(t)))},[t,o]);return(0,a.jsx)("div",{className:l({invisible:!r}),children:u})}}}]);