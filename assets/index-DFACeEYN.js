import{k as r,ab as p}from"./index-CJvg638n.js";import{u as x}from"./styled-components.browser.esm-BGP0i3rt.js";import{u as b}from"./useTranslation-DN-CYzVf.js";import{C as u}from"./index-DwCW4jpE.js";const f=x.div`
div.ant-checkbox-group {
  display: flex;
  column-gap: 0;
  > label.ant-checkbox-wrapper {
    font-size: ${a=>a.$fontSize||"14px"};
    align-items: center;
    margin: 0;
    width: auto;
    padding: 0 10px;
    height: 32px;
    min-width: ${a=>a.$fontSize||"78px"};
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
    background-color: #2263B3
  }
  > label.ant-checkbox-wrapper-checked + label.ant-checkbox-wrapper {
    border-left-width: 0;
  }

  > label.ant-checkbox-wrapper:last-child {
    border-right-width: 1px;
  }
}
`;function w({options:a,styleProps:e,...n}){function c(o){const d=p.cloneDeep(n.value),t=o.filter(h=>h!==d),i=t.length?t[0]:[];console.log(i),n.onChange&&n.onChange(i)}const{t:l}=b();return r.jsx(f,{$fontSize:e==null?void 0:e.fontSize,$minWidth:e==null?void 0:e.minWidth,children:r.jsx(u.Group,{options:a.map(o=>({...o,label:l(o.label)})),value:[n.value],onChange:c})})}export{w as C};
