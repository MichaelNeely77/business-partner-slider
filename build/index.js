(()=>{"use strict";var e,r={734:()=>{const e=window.wp.blocks,r=window.React,t=window.wp.blockEditor,a=window.wp.components,s=window.wp.element;(0,e.registerBlockType)("business-partner-slider/business-card-slider",{title:"Business Card Slider",icon:"images-alt2",category:"common",attributes:{cards:{type:"array",default:[]}},edit:({attributes:e,setAttributes:n})=>{const{cards:l}=e,c=(e,r,t)=>{const a=l.slice();a[e][r]=t,n({cards:a})};return(0,s.useEffect)((()=>{const e=()=>{const e=[...l,{imageUrl:"",linkUrl:""}];n({cards:e})},r=e=>{const r=l.slice();r.splice(e.detail.index,1),n({cards:r})};return document.addEventListener("bcs:addCard",e),document.addEventListener("bcs:removeCard",r),()=>{document.removeEventListener("bcs:addCard",e),document.removeEventListener("bcs:removeCard",r)}}),[l]),(0,r.createElement)(s.Fragment,null,(0,r.createElement)(t.InspectorControls,null,(0,r.createElement)(a.PanelBody,{title:"Cards"},(0,r.createElement)(a.Button,{className:"add-card-button"},"Add Card"))),(0,r.createElement)("div",{...(0,t.useBlockProps)(),className:"bcs-slider"},l.map(((e,s)=>(0,r.createElement)("div",{className:"bcs-card",key:s,"data-index":s},(0,r.createElement)(t.MediaUpload,{onSelect:e=>c(s,"imageUrl",e.url),allowedTypes:["image"],value:e.imageUrl,render:({open:t})=>(0,r.createElement)(a.Button,{className:"select-image-button"},e.imageUrl?(0,r.createElement)("img",{src:e.imageUrl,alt:""}):"Select Image")}),(0,r.createElement)(t.URLInputButton,{url:e.linkUrl,onChange:e=>c(s,"linkUrl",e)}),(0,r.createElement)(a.Button,{className:"remove-card-button"},"Remove"))))))},save:({attributes:e})=>{const{cards:a}=e;return(0,r.createElement)("div",{...t.useBlockProps.save(),className:"bcs-slider"},a.map(((e,t)=>(0,r.createElement)("a",{href:e.linkUrl,className:"bcs-card",key:t},(0,r.createElement)("img",{src:e.imageUrl,alt:""})))))}})}},t={};function a(e){var s=t[e];if(void 0!==s)return s.exports;var n=t[e]={exports:{}};return r[e](n,n.exports,a),n.exports}a.m=r,e=[],a.O=(r,t,s,n)=>{if(!t){var l=1/0;for(d=0;d<e.length;d++){for(var[t,s,n]=e[d],c=!0,o=0;o<t.length;o++)(!1&n||l>=n)&&Object.keys(a.O).every((e=>a.O[e](t[o])))?t.splice(o--,1):(c=!1,n<l&&(l=n));if(c){e.splice(d--,1);var i=s();void 0!==i&&(r=i)}}return r}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[t,s,n]},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={57:0,350:0};a.O.j=r=>0===e[r];var r=(r,t)=>{var s,n,[l,c,o]=t,i=0;if(l.some((r=>0!==e[r]))){for(s in c)a.o(c,s)&&(a.m[s]=c[s]);if(o)var d=o(a)}for(r&&r(t);i<l.length;i++)n=l[i],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},t=globalThis.webpackChunkbusiness_partner_slider=globalThis.webpackChunkbusiness_partner_slider||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var s=a.O(void 0,[350],(()=>a(734)));s=a.O(s)})();