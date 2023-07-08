var scatterplotMatrixAC8E02B779444208B0686C0E96FCEC95;(()=>{"use strict";var e={402:(e,t,i)=>{i.d(t,{E:()=>n});var a=i(84),s=a.Zb,r=a.Hn;class l extends s{constructor(){super(...arguments),this.provider=void 0,this.source=void 0,this.name="rcv_script",this.displayName="rcv_script",this.slices=[this.provider,this.source]}}class n extends r{constructor(){super(...arguments),this.rcvScriptCard=new l,this.cards=[this.rcvScriptCard]}}},324:(e,t,i)=>{i.d(t,{u:()=>r});var a=i(261),s=i(402);class r{constructor(e){this.formattingSettingsService=new a.Z,this.imageDiv=document.createElement("div"),this.imageDiv.className="rcv_autoScaleImageContainer",this.imageElement=document.createElement("img"),this.imageElement.className="rcv_autoScaleImage",this.imageDiv.appendChild(this.imageElement),e.element.appendChild(this.imageDiv)}update(e){if(!(e&&e.type&&e.viewport&&e.dataViews&&0!==e.dataViews.length&&e.dataViews[0]))return;const t=e.dataViews[0];this.formattingSettings=this.formattingSettingsService.populateFormattingSettingsModel(s.E,e.dataViews);let i=null;t.scriptResult&&t.scriptResult.payloadBase64&&(i="data:image/png;base64,"+t.scriptResult.payloadBase64),this.imageElement.src=i||null,this.onResizing(e.viewport)}onResizing(e){this.imageDiv.style.height=e.height+"px",this.imageDiv.style.width=e.width+"px",this.imageElement.style.height=e.height+"px",this.imageElement.style.width=e.width+"px"}getFormattingModel(){return this.formattingSettingsService.buildFormattingModel(this.formattingSettings)}}},84:(e,t,i)=>{i.d(t,{Hn:()=>s,Zb:()=>r});class a{}class s{}class r extends a{getFormattingCard(e,t,i){return{displayName:i&&this.displayNameKey?i.getDisplayName(this.displayNameKey):this.displayName,description:i&&this.descriptionKey?i.getDisplayName(this.descriptionKey):this.description,groups:[t],uid:e,analyticsPane:this.analyticsPane}}}},261:(e,t,i)=>{i.d(t,{Z:()=>a});const a=class{constructor(e){this.localizationManager=e}populateFormattingSettingsModel(e,t){var i,a,s;let r=new e,l=null===(a=null===(i=null==t?void 0:t[0])||void 0===i?void 0:i.metadata)||void 0===a?void 0:a.objects;return l&&(null===(s=r.cards)||void 0===s||s.forEach((e=>{var t,i,a;null===(t=null==e?void 0:e.slices)||void 0===t||t.forEach((t=>{null==t||t.setPropertiesValues(l,e.name)})),null===(a=null===(i=null==e?void 0:e.container)||void 0===i?void 0:i.containerItems)||void 0===a||a.forEach((t=>{var i;null===(i=null==t?void 0:t.slices)||void 0===i||i.forEach((t=>{null==t||t.setPropertiesValues(l,e.name)}))}))}))),r}buildFormattingModel(e){var t;let i={cards:[]};return null===(t=e.cards)||void 0===t||t.forEach((e=>{if(!e)return;const t=e.name,a=e.name+"-group";let s={displayName:void 0,slices:[],uid:a},r=e.getFormattingCard(t,s,this.localizationManager);i.cards.push(r);const l={};if(e.container){const i=e.container,n=a+"-container",o={displayName:this.localizationManager&&i.displayNameKey?this.localizationManager.getDisplayName(i.displayNameKey):i.displayName,description:this.localizationManager&&i.descriptionKey?this.localizationManager.getDisplayName(i.descriptionKey):i.description,containerItems:[],uid:n};i.containerItems.forEach((e=>{const i=e.displayNameKey?e.displayNameKey:e.displayName,a=n+i;let s={displayName:this.localizationManager&&e.displayNameKey?this.localizationManager.getDisplayName(e.displayNameKey):e.displayName,slices:[],uid:a};this.buildFormattingSlices(e.slices,t,l,r,s.slices),o.containerItems.push(s)})),s.container=o}e.slices&&this.buildFormattingSlices(e.slices,t,l,r,s.slices),r.revertToDefaultDescriptors=this.getRevertToDefaultDescriptor(e)})),i}buildFormattingSlices(e,t,i,a,s){null==e||e.forEach((e=>{let r=null==e?void 0:e.getFormattingSlice(t,this.localizationManager);r&&(void 0===i[e.name]?i[e.name]=0:(i[e.name]++,r.uid=`${r.uid}-${i[e.name]}`),e.topLevelToggle?(r.suppressDisplayName=!0,a.topLevelToggle=r):s.push(r))}))}getRevertToDefaultDescriptor(e){var t,i;const a={};let s=[],r=this.getSlicesRevertToDefaultDescriptor(e.name,e.slices,a),l=[];return null===(i=null===(t=e.container)||void 0===t?void 0:t.containerItems)||void 0===i||i.forEach((t=>{l=l.concat(this.getSlicesRevertToDefaultDescriptor(e.name,t.slices,a))})),s=r.concat(l),s}getSlicesRevertToDefaultDescriptor(e,t,i){let a=[];return null==t||t.forEach((t=>{t&&!i[t.name]&&(i[t.name]=!0,a=a.concat(t.getRevertToDefaultDescriptor(e)))})),a}}},738:e=>{e.exports=Function("return this")()}},t={};function i(a){var s=t[a];if(void 0!==s)return s.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,i),r.exports}i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{i.r(a),i.d(a,{default:()=>r});var e=i(324),t=i(738).powerbi,s={name:"scatterplotMatrixAC8E02B779444208B0686C0E96FCEC95",displayName:"ScatterMatrix",class:"Visual",apiVersion:"5.1.0",create:t=>{if(e.u)return new e.u(t);throw"Visual instance not found"},createModalDialog:(e,t,i)=>{const a=globalThis.dialogRegistry;e in a&&new a[e](t,i)},custom:!0};void 0!==t&&(t.visuals=t.visuals||{},t.visuals.plugins=t.visuals.plugins||{},t.visuals.plugins.scatterplotMatrixAC8E02B779444208B0686C0E96FCEC95=s);const r=s})(),scatterplotMatrixAC8E02B779444208B0686C0E96FCEC95=a})();