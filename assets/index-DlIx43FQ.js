import{r as a,k as n}from"./index-CJvg638n.js";import{u as f}from"./styled-components.browser.esm-BGP0i3rt.js";import{S as l}from"./index-Bsl0EBBv.js";import{T as u}from"./index-D8gngLx0.js";const x=f.div`
display: flex;
flex-direction: row-reverse;
justify-content: flex-end;
align-items: center;
span.ant-typography {
    margin-left: 14px;
    cursor: pointer;
  }
}
`;function C({label:c,bold:s,...e}){const{Text:d}=u,[t,r]=a.useState(e.checked||e.defaultChecked||!1),o=(i,h)=>{e.disabled||(r(i),e.onChange&&e.onChange(i,h))};return a.useEffect(()=>{r(!!e.checked)},[e.checked]),n.jsxs(x,{children:[c&&n.jsx(d,{onClick:()=>o(!t),strong:s,children:c}),n.jsx(l,{...e,style:{backgroundColor:t?"#2263B3":"#DDDDDD"},checked:t,onChange:o})]})}export{C as S};
