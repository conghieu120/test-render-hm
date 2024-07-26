import{r as s,k as e,eA as l,T as x,F as m,E as c,W as p}from"./index-rD5D3wIe.js";import{p as _,q as f}from"./index.esm-By9H6xJu.js";import{e as u}from"./index.esm-aP3EXNwz.js";import{i as d}from"./index.esm-CuvWRocu.js";const F="_animation_1ptxx_165",h="_typewriter_1ptxx_1",b="_blink_1ptxx_1",y="_fadeUpDown1_1ptxx_1",w="_fadeUpDown2_1ptxx_1",j="_fadeUpDown3_1ptxx_1",g="_bubble_1ptxx_351",v="_animate_4010_1ptxx_1",k="_square_1ptxx_453",A="_squareAnima_1ptxx_1",D={"required-label":"_required-label_1ptxx_1","custom-label":"_custom-label_1ptxx_19","custom-input-ant":"_custom-input-ant_1ptxx_37","custom-input-suffix":"_custom-input-suffix_1ptxx_59","btn-custom-primary":"_btn-custom-primary_1ptxx_105","form-login":"_form-login_1ptxx_111","form-register":"_form-register_1ptxx_113","form-login-active":"_form-login-active_1ptxx_145","form-register-active":"_form-register-active_1ptxx_147",animation:F,"text-input":"_text-input_1ptxx_187",typewriter:h,blink:b,"animation-1":"_animation-1_1ptxx_237",fadeUpDown1:y,"animation-2":"_animation-2_1ptxx_245",fadeUpDown2:w,"animation-3":"_animation-3_1ptxx_253",fadeUpDown3:j,bubble:g,animate_4010:v,square:k,squareAnima:A};function q(){const[n,a]=s.useState(!1),i=s.useRef(null);return s.useEffect(()=>{let t=r=>{var o;(o=i.current)!=null&&o.contains(r.target)||a(!1)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[n]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"fixed bottom-[2rem] left-[3rem] z-[10000] w-[250px]",ref:i,children:[e.jsx("div",{className:"flex flex row",children:e.jsx("div",{className:"cursor-pointer absolute bg-[#126ee2] w-[3rem] h-[3rem] bottom-[-1rem] left-[-1rem] rounded-[50%] rounded-bl-[6px] shadow-[-3px_5px_20px_#81a4f1] z-10 transition-[all] ease-in-out duration-[180ms]",children:e.jsx("div",{className:"flex justify-center items-center w-full h-full",children:n===!1?e.jsx("span",{onClick:()=>a(!0),className:"flex justify-center items-center w-full h-full",children:e.jsxs("div",{className:"flex justify-center items-center w-full h-full",children:[[1,2,3].map((t,r)=>e.jsx("span",{style:{height:"8px",width:"8px",marginRight:t!==3?"4px":"0px",backgroundColor:"#FFFFFF",borderRadius:"50%",animation:"blink 2s infinite ease-in-out",animationDelay:t===1?"0s":t===2?"0.4s":"0.8s"}},r)),e.jsx("style",{children:`@keyframes blink {
                                                    50% {
                                                        opacity: 0.25;
                                                        transform: scale(0.8);
                                                    }
                                                }`})]})}):e.jsxs("div",{children:[e.jsx("span",{style:{animation:"rotate 1s ease-in-out"},onClick:()=>a(!1),className:"flex justify-center items-center w-[3rem] h-[3rem]",children:e.jsx(l,{className:"text-[#FFFFFF] text-[20px]"})}),e.jsx("style",{children:`@keyframes rotate {
                                                    0% {
                                                        transform: rotate(320deg);
                                                        opacity: 0;
                                                        visibility: hidden;
                                                        willChange: visible, opacity;
                                                    }
                                                    50%{
                                                        transform: rotate(0deg);
                                                        opacity: 1;
                                                        visibility: inherit;
                                                    }
                                                }`})]})})})}),n&&e.jsxs("div",{className:"absolute z-[999]",children:[e.jsxs("div",{className:"flex flex-row items-center transform -translate-x-[-3rem] -translate-y-[25px]",children:[e.jsx("a",{style:{animation:"openContact 1s ease-in-out"},className:"flex items-center justify-center p-2 mr-2 w-[20px] h-[20px] rounded-full bg-[#0F1941] text-[#FFFFFF] hover:text-[#FFFFFF] shadow-[0_0.1rem_1rem_#18429A]",href:`${x}`,target:"_blank",rel:"noopener noreferrer",children:e.jsx(_,{})}),e.jsx("a",{style:{animation:"openContact 1s ease-in-out"},className:"flex items-center justify-center p-2 mr-2 w-[20px] h-[20px] rounded-full bg-[#0F1941] text-[#FFFFFF] hover:text-[#FFFFFF] shadow-[0_0.1rem_1rem_#18429A]",href:`${m}`,target:"_blank",rel:"noopener noreferrer",children:e.jsx(f,{})}),e.jsx("a",{style:{animation:"openContact 1s ease-in-out"},className:"flex items-center justify-center p-2 mr-2 w-[20px] h-[20px] rounded-full bg-[#0F1941] text-[#FFFFFF] hover:text-[#FFFFFF] shadow-[0_0.1rem_1rem_#18429A]",href:`${c}`,target:"_blank",rel:"noopener noreferrer",children:e.jsx(d,{})}),e.jsx("a",{style:{animation:"openContact 1s ease-in-out"},className:"flex items-center justify-center p-2 mr-2 w-[20px] h-[20px] rounded-full bg-[#0F1941] text-[#FFFFFF] hover:text-[#FFFFFF] shadow-[0_0.1rem_1rem_#18429A]",href:`${p}`,target:"_blank",rel:"noopener noreferrer",children:e.jsx(u,{})})]}),e.jsx("style",{children:`@keyframes openContact {
                                    0% {
                                        transform: translateX(-5px);
                                        opacity: 0;
                                        visibility: hidden;
                                        willChange: visible, opacity;
                                    }
                                    50%{
                                        transform: translateX(0px);
                                        opacity: 1;
                                        visibility: inherit;
                                    }
                                }`})]})]})})}export{q as S,D as s};
