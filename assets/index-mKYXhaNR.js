import{r as a,k as t}from"./index-rD5D3wIe.js";import{u as f}from"./styled-components.browser.esm-Cc1hOk3M.js";import{S as x}from"./index-DeZc1mMx.js";import{T as l}from"./index-WqkPP-4X.js";const m=f.div`
display: flex;
flex-direction: row-reverse;
justify-content: flex-end;
align-items: center;
span.ant-typography {
    margin-left: 14px;
    cursor: pointer;
  }
}
`;function C({label:n,bold:s,...e}){const{Text:d}=l,[c,r]=a.useState(e.checked||e.defaultChecked||!1),i=(o,h)=>{e.disabled||(r(o),e.onChange&&e.onChange(o,h))};return a.useEffect(()=>{r(!!e.checked)},[e.checked]),t.jsxs(m,{children:[n&&t.jsx(d,{onClick:()=>i(!c),strong:s,children:n}),t.jsx(x,{...e,checked:c,onChange:i})]})}export{C as S};
