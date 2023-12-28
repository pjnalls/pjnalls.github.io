import{r as l}from"./index-c6dae603.js";import{j as r}from"./jsx-runtime-ed146b25.js";import{P as t}from"./index-29d2c63d.js";const x="_badge_1gnsu_1",N="_span_1gnsu_5",S="_text_1gnsu_23",q="_icon_1gnsu_36",j="_none_1gnsu_40",B={badge:x,span:N,"dot-false":"_dot-false_1gnsu_16",text:S,"dot-true":"_dot-true_1gnsu_27","bordered-true":"_bordered-true_1gnsu_32",icon:q,"tile-false":"_tile-false_1gnsu_40",none:j,"bordered-false":"_bordered-false_1gnsu_68"},h=Object.freeze(Object.defineProperty({__proto__:null,badge:x,default:B,icon:q,none:j,span:N,text:S},Symbol.toStringTag,{value:"Module"})),a=({tile:e,dot:u,bordered:O,variant:d,className:V})=>r.jsx("div",{className:`badge dot-${u} ${d} bordered-${O} tile-${e} ${V} ${{...h}}`,children:!u&&r.jsxs("div",{className:"span",children:[d==="text"&&r.jsx(r.Fragment,{children:"9"}),d==="icon"&&r.jsx(r.Fragment,{children:"🦸"})]})});t.bool,t.bool,t.bool,t.oneOf(["none","icon","text"]);try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{tile:{defaultValue:null,description:"",name:"tile",required:!0,type:{name:"boolean"}},dot:{defaultValue:null,description:"",name:"dot",required:!0,type:{name:"boolean"}},bordered:{defaultValue:null,description:"",name:"bordered",required:!0,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"icon"'},{value:'"none"'}]}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}}}}}catch{}try{badge.displayName="badge",badge.__docgenInfo={description:"",displayName:"badge",props:{tile:{defaultValue:null,description:"",name:"tile",required:!0,type:{name:"boolean"}},dot:{defaultValue:null,description:"",name:"dot",required:!0,type:{name:"boolean"}},bordered:{defaultValue:null,description:"",name:"bordered",required:!0,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"icon"'},{value:'"none"'}]}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}}}}}catch{}const i={tile:!1,dot:!1,bordered:!1,variant:"text",className:""},J={component:a,title:"Data Display/Badge",argTypes:{variant:{control:!1}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A729&mode=dev"}}},n={render:e=>l.createElement(a,{...e,key:JSON.stringify(e)}),args:{...i,variant:"text"}},o={render:e=>l.createElement(a,{...e,key:JSON.stringify(e)}),args:{...i,variant:"icon"}},s={render:e=>l.createElement(a,{...e,key:JSON.stringify(e)}),args:{...i,dot:!0,variant:"none"}};var c,g,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Badge {...args} key={JSON.stringify(args)} />,
  args: {
    ...badgeArgs,
    variant: 'text'
  }
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,_,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Badge {...args} key={JSON.stringify(args)} />,
  args: {
    ...badgeArgs,
    variant: 'icon'
  }
}`,...(y=(_=o.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var b,f,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Badge {...args} key={JSON.stringify(args)} />,
  args: {
    ...badgeArgs,
    dot: true,
    variant: 'none'
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const T=["Text","Icon","None"];export{o as Icon,s as None,n as Text,T as __namedExportsOrder,J as default};
//# sourceMappingURL=badge.stories-40f0b801.js.map
