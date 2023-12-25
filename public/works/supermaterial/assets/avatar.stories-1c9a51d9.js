import{r as a}from"./index-c6dae603.js";import{j as n}from"./jsx-runtime-ed146b25.js";import{P as p}from"./index-29d2c63d.js";const B="_avatar_1ayqy_1",U="_PN_1ayqy_1",G="_rounded_1ayqy_9",L="_image_1ayqy_18",Q="_text_1ayqy_23",W="_circle_1ayqy_39",H="_icon_1ayqy_43",K="_square_1ayqy_75",Z={avatar:B,PN:U,rounded:G,"sixty-four":"_sixty-four_1ayqy_13",image:L,text:Q,"thirty-six":"_thirty-six_1ayqy_34",circle:W,icon:H,"forty-eight":"_forty-eight_1ayqy_54",square:K},ee=Object.freeze(Object.defineProperty({__proto__:null,PN:U,avatar:B,circle:W,default:Z,icon:H,image:L,rounded:G,square:K,text:Q},Symbol.toStringTag,{value:"Module"})),r=({variant:e,size:X,type:s,className:Y})=>n.jsx("div",{className:`avatar ${e} ${X} ${s} ${Y} ${{...ee}}`,children:["icon","text"].includes(s)&&n.jsxs("div",{className:"PN",children:[s==="text"&&n.jsx(n.Fragment,{children:"PN"}),s==="icon"&&n.jsx(n.Fragment,{children:"🦸"})]})});p.oneOf(["circle","rounded","square"]),p.oneOf(["thirty-six","sixty-four","forty-eight"]),p.oneOf(["image","text","icon"]);try{r.displayName="Avatar",r.__docgenInfo={description:"",displayName:"Avatar",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"circle"'},{value:'"rounded"'},{value:'"square"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"thirty-six"'},{value:'"sixty-four"'},{value:'"forty-eight"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"image"'},{value:'"text"'},{value:'"icon"'}]}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}}}}}catch{}try{avatar.displayName="avatar",avatar.__docgenInfo={description:"",displayName:"avatar",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"circle"'},{value:'"rounded"'},{value:'"square"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"thirty-six"'},{value:'"sixty-four"'},{value:'"forty-eight"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"image"'},{value:'"text"'},{value:'"icon"'}]}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}}}}}catch{}const t={variant:"circle",size:"sixty-four",type:"image",className:""},ne={component:r,title:"Data Display/Avatar",argTypes:{variant:{control:!1}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A728&mode=dev"}}},i={render:e=>a.createElement(r,{...e,key:JSON.stringify(e)}),args:{...t,type:"image",variant:"circle"}},o={render:e=>a.createElement(r,{...e,key:JSON.stringify(e)}),args:{...t,type:"image",variant:"rounded"}},c={render:e=>a.createElement(r,{...e,key:JSON.stringify(e)}),args:{...t,type:"image",variant:"square"}},u={render:e=>a.createElement(r,{...e,key:JSON.stringify(e)}),args:{...t,type:"icon",variant:"circle"}},d={render:e=>a.createElement(r,{...e,key:JSON.stringify(e)}),args:{...t,type:"icon",variant:"rounded"}},l={render:e=>a.createElement(r,{...e,key:JSON.stringify(e)}),args:{...t,type:"icon",variant:"square"}},y={render:e=>a.createElement(r,{...e,key:JSON.stringify(e)}),args:{...t,type:"text",variant:"circle"}},m={render:e=>a.createElement(r,{...e,key:JSON.stringify(e)}),args:{...t,type:"text",variant:"rounded"}},g={render:e=>a.createElement(r,{...e,key:JSON.stringify(e)}),args:{...t,type:"text",variant:"square"}};var v,_,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Avatar {...args} key={JSON.stringify(args)} />,
  args: {
    ...avatarArgs,
    type: 'image',
    variant: 'circle'
  }
}`,...(f=(_=i.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var x,q,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Avatar {...args} key={JSON.stringify(args)} />,
  args: {
    ...avatarArgs,
    type: 'image',
    variant: 'rounded'
  }
}`,...(N=(q=o.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var S,A,O;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Avatar {...args} key={JSON.stringify(args)} />,
  args: {
    ...avatarArgs,
    type: 'image',
    variant: 'square'
  }
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var k,J,h;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Avatar {...args} key={JSON.stringify(args)} />,
  args: {
    ...avatarArgs,
    type: 'icon',
    variant: 'circle'
  }
}`,...(h=(J=u.parameters)==null?void 0:J.docs)==null?void 0:h.source}}};var I,E,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Avatar {...args} key={JSON.stringify(args)} />,
  args: {
    ...avatarArgs,
    type: 'icon',
    variant: 'rounded'
  }
}`,...(j=(E=d.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var T,C,P;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Avatar {...args} key={JSON.stringify(args)} />,
  args: {
    ...avatarArgs,
    type: 'icon',
    variant: 'square'
  }
}`,...(P=(C=l.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var R,V,z;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <Avatar {...args} key={JSON.stringify(args)} />,
  args: {
    ...avatarArgs,
    type: 'text',
    variant: 'circle'
  }
}`,...(z=(V=y.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var $,b,D;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <Avatar {...args} key={JSON.stringify(args)} />,
  args: {
    ...avatarArgs,
    type: 'text',
    variant: 'rounded'
  }
}`,...(D=(b=m.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var F,w,M;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <Avatar {...args} key={JSON.stringify(args)} />,
  args: {
    ...avatarArgs,
    type: 'text',
    variant: 'square'
  }
}`,...(M=(w=g.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const se=["Circled_Image","Rounded_Image","Squared_Image","Circled_Icon","Rounded_Icon","Squared_Icon","Circled_Text","Rounded_Text","Squared_Text"];export{u as Circled_Icon,i as Circled_Image,y as Circled_Text,d as Rounded_Icon,o as Rounded_Image,m as Rounded_Text,l as Squared_Icon,c as Squared_Image,g as Squared_Text,se as __namedExportsOrder,ne as default};
//# sourceMappingURL=avatar.stories-1c9a51d9.js.map
