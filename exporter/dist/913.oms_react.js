(self.webpackChunkexporter=self.webpackChunkexporter||[]).push([[913,581,561],{1913:(e,t,a)=>{"use strict";a.r(t),a.d(t,{axiosData:()=>u});var r=a(3146),n=a(2835),s=a(7910),o=a.n(s),l=a(5418),c=a.n(l),i=a(7581);async function u({url:e,method:t="GET",params:a=null,timeout:s=12e4,headers:l={},isNeedErrorAlert:u=!0}){let d=null,m="",p=!0,h=null;try{const r="/OMS/api/v1";if(o().defaults.publicPath=r,!r)throw"publicPath undef";let n=null;const c={baseURL:r,responseType:"json",timeout:12e4,headers:{"Content-Type":"application/json",...l}},i=o().create(c);switch(i.defaults.timeout=s,t){case"GET":n=await i.get(e,{params:a});break;case"POST":n=await i.post(e,a);break;case"PUT":n=await i.put(e,a);break;case"PATCH":n=await i.patch(e,a);break;case"DELETE":n=await i.delete(e,a);break;default:throw"Неизвестный метод API: "+t}d=n,h=n.data}catch(e){if(e.response&&u){const t=e.response?.data?.message_ext||c().createElement(r.Space,{direction:"vertical"},c().createElement(n.Z,{strong:!0},"Запрос:")," ",e.request.responseURL,c().createElement(n.Z,{strong:!0},"Статус ответа: ")," ",e.response.status,c().createElement(n.Z,{strong:!0},"StatusText:")," ",e.response.statusText,c().createElement(n.Z,{strong:!0},"Stack:")," ",e.stack);switch(e.response.status){case 500:(0,i.default)({msg:"Внутренняя ошибка сервера",title:"Ошибка выполнения запроса",techError:t});break;case 404:(0,i.default)({msg:"Данные не найдены ",title:"Ошибка выполнения запроса",techError:t});break;case 400:(0,i.default)({msg:e.response?.data?.message||"Плохой запрос ",title:"Ошибка выполнения запроса",techError:t});break;case 401:case 403:(0,i.default)({msg:e.response?.data?.message,title:"Авторизация",techError:t});break;case 405:(0,i.default)({msg:"Метод не доступен",title:"Ошибка",techError:t});break;default:(0,i.default)({msg:"Ошибка выполнения запроса",title:"Неопознанный ответ сервера",techError:t})}}m=e.response?.data?.message||e.toString()}finally{p=!1}return{response:d,error:m,loading:!1,data:h}}},2561:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(3146),n=a(5418),s=a.n(n),o=a(1203),l=a.n(o);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c.apply(this,arguments)}function i({show:e,handleOk:t,handleCancel:a,children:o,title:i="Надо что то написать",footer:u=null,bodyStyle:d={padding:0,paddingBottom:10},destroyOnClose:m=!0,...p}){const[h,f]=(0,n.useState)({left:0,top:0,bottom:0,right:0}),[E,g]=(0,n.useState)(!0),b=(0,n.useRef)();return s().createElement(r.Modal,c({title:s().createElement("div",{style:{width:"100%",cursor:"move"},className:"bg-main-blue",onMouseOver:()=>g(!1),onMouseOut:()=>g(!0),onFocus:()=>{},onBlur:()=>{}},i),bodyStyle:d,footer:u,visible:e,destroyOnClose:m,onOk:t,onCancel:a,modalRender:e=>s().createElement(l(),{disabled:E,bounds:h,onStart:(e,t)=>((e,t)=>{const{clientWidth:a,clientHeight:r}=window.document.documentElement,n=b.current?.getBoundingClientRect();n&&f({left:-n.left+t.x,right:a-(n.right-t.x),top:-n.top+t.y,bottom:r-(n.bottom-t.y)})})(0,t)},s().createElement("div",{ref:b},e))},p),o)}},7581:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(5418),n=a.n(r),s=a(6235),o=a.n(s),l=a(2561),c=a(3146);const i=({msg:e,title:t,techError:a})=>{const r=document.createElement("div");document.querySelector("body").appendChild(r);const{Panel:s}=c.Collapse;return new Promise((i=>{const u=e=>{o().unmountComponentAtNode(r),r.remove(),i(e)},d=n().createElement(l.default,{title:t,show:!0,handleCancel:u},n().createElement("p",{className:"m-4",style:{whiteSpace:"pre-line"}},e),n().createElement(c.Collapse,null,n().createElement(s,{header:"Подробнее",key:"1"},n().createElement("div",{style:{whiteSpace:"pre-line"}},a))),n().createElement("div",{className:"text-center mt-3"},n().createElement(c.Button,{onClick:u},"Ок")));o().render(d,r)}))}}}]);