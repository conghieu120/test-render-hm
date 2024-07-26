import{k as c,ab as x}from"./index-rD5D3wIe.js";import{u as b}from"./styled-components.browser.esm-Cc1hOk3M.js";import{u}from"./theme-CwYL3eQV.js";import{u as m}from"./useTranslation-CdVDZguR.js";import{C as s}from"./index-C97G-hLo.js";const f=b.div`
div.ant-checkbox-group {
  display: flex;
  column-gap: 0;
  > label.ant-checkbox-wrapper {
    font-size: ${e=>e.$fontSize||"14px"};
    align-items: center;
    margin: 0;
    width: auto;
    padding: 0 10px;
    height: 32px;
    min-width: ${e=>e.$fontSize||"78px"};
    justify-content: center;
    border: 1px solid rgb(217, 217, 217);
    border-right-width: 0;

    > span:first-child {
      display: none;
    }
    > span:last-child {
      padding: 0;
    }
  }
  > label.ant-checkbox-wrapper:first-child {
    border-radius: 8px 0px 0px 10px
  }
  > label.ant-checkbox-wrapper:last-child {
    border-radius: 0px 8px 8px 0px
  }
  > label.ant-checkbox-wrapper-checked {
    color: white;
    background-color: ${e=>e.$colorActive}
  }
  > label.ant-checkbox-wrapper-checked + label.ant-checkbox-wrapper {
    border-left-width: 0;
  }

  > label.ant-checkbox-wrapper:last-child {
    border-right-width: 1px;
  }
}
`;function C({options:e,styleProps:a,...o}){const r=u();function l(t){const d=x.cloneDeep(o.value),n=t.filter(p=>p!==d),i=n.length?n[0]:[];console.log(i),o.onChange&&o.onChange(i)}const{t:h}=m();return c.jsx(f,{$colorActive:r.textActiveSecondary,$fontSize:a==null?void 0:a.fontSize,$minWidth:a==null?void 0:a.minWidth,children:c.jsx(s.Group,{options:e.map(t=>({...t,label:h(t.label)})),value:[o.value],onChange:l})})}export{C};
