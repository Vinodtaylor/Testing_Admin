(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7357:(e,t,l)=>{Promise.resolve().then(l.bind(l,7404)),Promise.resolve().then(l.bind(l,412)),Promise.resolve().then(l.bind(l,1044))},7404:(e,t,l)=>{"use strict";l.d(t,{default:()=>p});var a=l(5155),r=l(1310),s=l(2115),n=l(2508),o=l(5565),d=l(3473),i=l(6764),c=l(9993),m=l(2316),x=l(3068),u=l(5805);async function h(e){try{console.log("Original File Details:"),console.log("Size: ".concat((e.size/1024/1024).toFixed(2)," MB")),console.log("Type: ".concat(e.type));let t=performance.now(),l=await (0,u.A)(e,{maxSizeMB:1,maxWidthOrHeight:1024,useWebWorker:!0,fileType:"webp",onProgress:e=>console.log("Compression Progress: ".concat(e,"%"))}),a=(performance.now()-t).toFixed(2);return console.log("Compressed File Details:"),console.log("Size: ".concat((l.size/1024/1024).toFixed(2)," MB")),console.log("Type: ".concat(l.type)),console.log("Compression Duration: ".concat(a," ms")),l}catch(e){throw console.error("Compression Error:",e),e}}let p=()=>{let[e,t]=(0,s.useState)([]),[l,u]=(0,s.useState)(!1),[p,b]=(0,s.useState)(null),[g,j]=(0,s.useState)(null),[f,w]=(0,s.useState)({}),[y,N]=(0,s.useState)(null);(0,s.useEffect)(()=>{(async()=>{try{let e=await (0,r.fl)();console.log("CTA Banner Response:",e),t(e.data)}catch(e){console.error("Error fetching CTA banner:",e)}})()},[]);let v=e=>{j(e),b("delete"),u(!0)},_=e=>{j(e),b("edit"),w({home_page_banner:e.home_page_banner}),N(e.home_page_banner),u(!0)},C=async()=>{let e=new FormData;"delete"===p&&g?(await (0,r.Qg)(g._id),console.log("Deleting item:",g),t(e=>e.filter(e=>e._id!==g._id)),t((await (0,r.fl)()).data)):"edit"===p&&g?(console.log("Editing item:",f),f.home_page_banner&&f.home_page_banner instanceof File&&e.append("home_page_banner",f.home_page_banner),await (0,r.U9)(g._id,e),t((await (0,r.fl)()).data)):"create"===p&&(console.log("Creating a new item:",f),f.home_page_banner&&f.home_page_banner instanceof File&&e.append("home_page_banner",f.home_page_banner),await (0,r.JH)(e),t((await (0,r.fl)()).data)),u(!1)},A=async e=>{var t;let l=null===(t=e.target.files)||void 0===t?void 0:t[0];if(l)try{let e=await h(l),t=URL.createObjectURL(e);N(t),w(t=>({...t,home_page_banner:e}))}catch(e){console.error("Error compressing the image:",e)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4 justify-between mb-6",children:[(0,a.jsx)("h2",{className:"lg:text-xl  font-bold text-gray-800",children:"Home CTA Banner"}),(0,a.jsxs)("button",{onClick:()=>{b("create"),j(null),w({}),N(null),u(!0)},className:"flex whitespace-nowrap items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all duration-200 border border-blue-600",children:["Create CTA Banner",(0,a.jsx)(d.A,{className:"w-4 h-4"})]})]}),(0,a.jsxs)(n.XI,{className:"table-auto w-full border border-gray-200 rounded-md overflow-hidden shadow-md",children:[(0,a.jsx)(n.A0,{children:(0,a.jsx)(n.Hj,{className:"bg-gray-100",children:["Image","Edit","Delete"].map((e,t)=>(0,a.jsx)(n.nd,{className:"px-4 py-3 font-semibold text-gray-700 border-b border-gray-300",children:e},t))})}),(0,a.jsx)(n.BF,{children:e.map((e,t)=>(0,a.jsxs)(n.Hj,{className:"text-gray-700 hover:bg-gray-50 ".concat(t%2==0?"bg-white":"bg-gray-50"),children:[(0,a.jsx)(n.nA,{className:"px-4 py-3 text-center border-b border-gray-200",children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)(o.default,{src:null==e?void 0:e.home_page_banner,alt:"Home CTA Banner ".concat(t+1),width:300,height:300,className:"rounded-md shadow-sm"})})}),(0,a.jsx)(n.nA,{className:"px-4 py-3 text-center border-b border-gray-200",children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)(i.A,{onClick:()=>_(e),className:"cursor-pointer text-blue-500 hover:text-blue-600"})})}),(0,a.jsx)(n.nA,{className:"px-4 py-3 text-center border-b border-gray-200",children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)(c.A,{onClick:()=>v(e),className:"cursor-pointer text-red-500 hover:text-red-600"})})})]},e._id))})]})]}),(0,a.jsx)(x.Lt,{open:l,onOpenChange:u,children:(0,a.jsxs)(x.EO,{className:"max-w-sm rounded-lg",children:[(0,a.jsxs)(x.wd,{children:[(0,a.jsx)(x.r7,{className:"text-center -mb-2",children:"delete"===p?"Are you absolutely sure?":"edit"===p?"Edit Banner":"Create Banner"}),(0,a.jsx)(x.$v,{className:"text-center",children:"delete"===p?"This action cannot be undone. This will permanently delete your item.":"edit"===p?"You can edit the details of the selected item.":"You can create a new CTA banner."})]}),(0,a.jsx)("div",{className:"p-4",children:"delete"===p?(0,a.jsx)("div",{className:"text-center",children:(0,a.jsx)("p",{children:"Are you sure you want to delete this item?"})}):"edit"===p||"create"===p?(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)("h3",{className:"text-sm",children:"CTA Banner Image"}),(0,a.jsxs)("label",{htmlFor:"home_page_banner",className:"text-gray-700 cursor-pointer   border-dashed border flex  justify-center  gap-2 p-3 rounded-md ",children:[(0,a.jsx)(m.A,{}),"  ",y?"Change Image":"Select Banner Image"]}),(0,a.jsx)("input",{id:"home_page_banner",name:"home_page_banner",type:"file",accept:"image/*",onChange:A,className:"hidden"}),y&&(0,a.jsx)("div",{className:"border flex justify-center",children:(0,a.jsx)(o.default,{src:y,alt:"Image Preview",width:500,priority:!0,height:500,className:"rounded-md shadow-sm"})})]}):null}),(0,a.jsxs)(x.ck,{children:[(0,a.jsx)(x.Zr,{onClick:()=>u(!1),className:"rounded-full w-full",children:"Cancel"}),(0,a.jsx)(x.Rx,{onClick:C,className:"rounded-full w-full",children:"delete"===p?"Delete":"edit"===p?"Save Changes":"Create"})]})]})})]})}},412:(e,t,l)=>{"use strict";l.d(t,{default:()=>h});var a=l(5155),r=l(2115),s=l(3068),n=l(2508),o=l(872),d=l(3473),i=l(9993),c=l(1310),m=l(5565),x=l(4367);let u=["Image","Name","Doctor Id","Email","Phone"],h=()=>{var e;let[t,l]=(0,r.useState)([]),[h,p]=(0,r.useState)(!1),[b,g]=(0,r.useState)(null),[j,f]=(0,r.useState)(null),[w,y]=(0,r.useState)(""),[N,v]=(0,r.useState)({doctors:[]}),[_,C]=(0,r.useState)(1),[A]=(0,r.useState)(5),[k,S]=(0,r.useState)([]),[E,D]=(0,r.useState)(!1),[F,T]=(0,r.useState)("");(0,r.useEffect)(()=>{(async()=>{let e=await (0,c.oi)();if(l(e.data),e.data[0]&&e.data.length>0){let t=e.data[0];D(!0),T(t._id),f(t),v({doctors:t.doctors||[]})}else D(!1),v({doctors:[]})})()},[]),console.log(N),(0,r.useEffect)(()=>{(async()=>{S((await (0,c.tA)()).data)})()},[]);let B=e=>{v({doctors:N.doctors.filter(t=>t._id!==e)})},O=async()=>{if(!N.doctors){alert("Please fill all the required fields.");return}let e={doctors:N.doctors.map(e=>({_id:e._id}))};"edit"===b&&j?await (0,c.Y1)(F,e):"create"===b&&await (0,c.jl)(e),l((await (0,c.oi)()).data),p(!1)};(0,r.useEffect)(()=>{console.log(N,"edit"===b?"During edit mode":"During create mode")},[N,b]);let Y=k.filter(e=>{var t,l;return null==e?void 0:null===(l=e.name)||void 0===l?void 0:null===(t=l.toLowerCase())||void 0===t?void 0:t.includes(w.toLowerCase())}),H=e=>{v({doctors:N.doctors.some(t=>t._id===e._id)?N.doctors.filter(t=>t._id!==e._id):[...N.doctors,e]})},P=(null===(e=t[0])||void 0===e?void 0:e.doctors)||[],I=_*A,R=P.slice(I-A,I),L=Math.ceil(P.length/A);return(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4 justify-between mb-6",children:[(0,a.jsx)("h2",{className:"lg:text-xl font-bold text-gray-800",children:"Our Doctors"}),(0,a.jsx)("button",{onClick:()=>{if(t.length>0){let e=t[0];g("edit"),f(e),D(!0),v({doctors:e.doctors||[]})}else g("create"),f(null),D(!1),v({doctors:[]});p(!0)},className:"flex whitespace-nowrap items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all duration-200 border border-blue-600",children:E?(0,a.jsxs)(a.Fragment,{children:["Edit Doctor ",(0,a.jsx)(o.A,{})]}):(0,a.jsxs)(a.Fragment,{children:["Add Doctor",(0,a.jsx)(d.A,{className:"w-4 h-4"})]})})]}),(0,a.jsxs)(n.XI,{className:"table-auto w-full border border-gray-200 rounded-md overflow-hidden shadow-md",children:[(0,a.jsx)(n.A0,{children:(0,a.jsx)(n.Hj,{className:"bg-gray-100",children:u.map((e,t)=>(0,a.jsx)(n.nd,{className:"px-4 py-3 font-semibold text-gray-700 border-b border-gray-300",children:e},t))})}),(0,a.jsx)(n.BF,{children:R.map((e,t)=>(0,a.jsxs)(n.Hj,{children:[(0,a.jsx)(n.nA,{className:"px-4 py-3",children:(0,a.jsx)(m.default,{src:e.doctor_image,alt:e.name,title:e.name,width:40,height:40})}),(0,a.jsx)(n.nA,{className:"px-4 py-3 whitespace-nowrap",children:e.name}),(0,a.jsx)(n.nA,{className:"px-4 py-3 whitespace-nowrap",children:e.doctor_id}),(0,a.jsx)(n.nA,{className:"px-4 py-3 whitespace-nowrap",children:e.email}),(0,a.jsx)(n.nA,{className:"px-4 py-3 whitespace-nowrap",children:e.phone_number})]},t))})]}),Y.length>A&&(0,a.jsxs)("div",{className:"flex justify-center gap-4 items-center mt-4",children:[(0,a.jsx)("button",{onClick:()=>{_>1&&C(_-1)},disabled:1===_,className:"p-2 text-sm rounded ".concat(1===_?"bg-gray-300":"bg-blue-500 hover:bg-blue-600"," text-white"),children:(0,a.jsx)(x.m6W,{})}),(0,a.jsxs)("p",{className:"text-sm",children:["Page ",_," of ",L]}),(0,a.jsx)("button",{onClick:()=>{_<L&&C(_+1)},disabled:_===L,className:"p-2 text-sm rounded ".concat(_===L?"bg-gray-300":"bg-blue-500 hover:bg-blue-600"," text-white"),children:(0,a.jsx)(x.OQo,{})})]}),(0,a.jsx)(s.Lt,{open:h,onOpenChange:p,children:(0,a.jsxs)(s.EO,{className:"rounded-lg lg:h-2/3 h-[500px] lg:max-w-4xl max-w-sm overflow-x-scroll",children:[(0,a.jsxs)(s.wd,{children:[(0,a.jsx)(s.r7,{className:"text-center -mb-2",children:E?"Edit Doctors":"Create Doctors"}),(0,a.jsx)(s.$v,{className:"text-center",children:E?"You can edit the existing doctors.":"You can add a new doctor."})]}),(0,a.jsx)("div",{className:"p-2",children:(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("label",{htmlFor:"doctor",className:"text-base mb-2",children:"Our Doctors"}),(0,a.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"Search doctor",value:w,onChange:e=>{y(e.target.value)},className:"border p-2 rounded-full px-4 outline-none placeholder:text-sm"})]}),N.doctors.length>0&&(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)("div",{className:"flex min-h-[10px] max-h-[150px] overflow-scroll flex-wrap gap-2",children:N.doctors.map(e=>e&&(0,a.jsxs)("div",{className:"p-1 border rounded-lg flex items-center gap-2",children:[e.doctor_image&&(0,a.jsx)(m.default,{src:e.doctor_image,alt:e.name,width:100,height:100,className:"w-10 h-10 object-cover rounded-full"}),(0,a.jsx)("p",{className:"text-sm",children:e.name}),(0,a.jsx)("button",{onClick:()=>B(e._id),className:"text-red-500 hover:text-red-700",children:(0,a.jsx)(i.A,{className:"w-4 h-4"})})]},e._id))})}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2 p-1 min-h-[10px] max-h-[150px] overflow-y-auto",children:k.slice().sort((e,t)=>e.name.localeCompare(t.name)).map(e=>(0,a.jsx)("div",{className:"border p-2 rounded-lg cursor-pointer ".concat(N.doctors.some(t=>t._id===e._id)?"bg-blue-200":""),onClick:()=>H(e),children:(0,a.jsx)("p",{className:"text-sm",children:e.name})},e._id))})]})}),(0,a.jsxs)(s.ck,{children:[(0,a.jsx)(s.Zr,{onClick:()=>p(!1),className:"w-full rounded-full",children:"Cancel"}),(0,a.jsx)(s.Rx,{onClick:O,className:"w-full rounded-full",children:E?"Update":"Create"})]})]})})]})}},1044:(e,t,l)=>{"use strict";l.d(t,{default:()=>m});var a=l(5155),r=l(2115),s=l(3068),n=l(2508),o=l(3473),d=l(6764),i=l(9993),c=l(1310);let m=()=>{let[e,t]=(0,r.useState)([]),[l,m]=(0,r.useState)(!1),[x,u]=(0,r.useState)(null),[h,p]=(0,r.useState)(null),[b,g]=(0,r.useState)({title:"",description:"",date:"",role:"",youtube_link:""}),[j,f]=(0,r.useState)(null);(0,r.useEffect)(()=>{(async()=>{try{let e=await (0,c.bx)();t(e.data)}catch(e){console.error("Error fetching testimonials:",e)}})()},[]);let w=e=>{let t=e.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/?([^"&?/ ]+)|(?:[^\/\n\s]+\/\S+\/)*\S+[^"&?/ ]+))|(?:youtu\.be\/([^"&?/ ]+))/);return t?t[1]||t[2]:null},y=e=>{p(e),u("delete"),m(!0)},N=e=>{p(e),u("edit"),g({title:e.title,role:e.role,youtube_link:e.youtube_link,date:e.date,description:e.description}),f(w(e.youtube_link)),m(!0)},v=async()=>{if(!b.title||!b.description||!b.role||!b.date||!b.youtube_link){alert("Please fill all the required fields: Title, Description, Role, Date, and YouTube Link.");return}let e={title:b.title,description:b.description,role:b.role,date:b.date,youtube_link:b.youtube_link};"delete"===x&&h?(await (0,c.HR)(h._id),t(e=>e.filter(e=>e._id!==h._id)),t((await (0,c.bx)()).data)):"edit"===x&&h?(await (0,c.vu)(h._id,e),t((await (0,c.bx)()).data)):"create"===x&&(await (0,c.ab)(e),t((await (0,c.bx)()).data)),m(!1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4 justify-between mb-6",children:[(0,a.jsx)("h2",{className:"lg:text-xl font-bold text-gray-800",children:"Video testimonials"}),(0,a.jsxs)("button",{onClick:()=>{u("create"),p(null),g({title:"",description:"",youtube_link:"",date:"",role:""}),f(null),m(!0)},className:"flex whitespace-nowrap items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all duration-200 border border-blue-600",children:["Create testimonials",(0,a.jsx)(o.A,{className:"w-4 h-4"})]})]}),(0,a.jsxs)(n.XI,{className:"table-auto w-full border border-gray-200 rounded-md overflow-hidden shadow-md",children:[(0,a.jsx)(n.A0,{children:(0,a.jsx)(n.Hj,{className:"bg-gray-100",children:["Title","Description","Date","Role","Preview","Edit","Delete"].map((e,t)=>(0,a.jsx)(n.nd,{className:"px-4 py-3 font-semibold text-center text-gray-700 border-b border-gray-300",children:e},t))})}),(0,a.jsx)(n.BF,{children:e.map((e,t)=>(0,a.jsxs)(n.Hj,{className:"text-gray-700 hover:bg-gray-50 ".concat(t%2==0?"bg-white":"bg-gray-50"),children:[(0,a.jsx)(n.nA,{className:"px-4 py-3 text-center r whitespace-nowrap border-b border-gray-200",children:e.title}),(0,a.jsx)(n.nA,{className:"px-4 py-3 text-center  border-b border-gray-200",children:(0,a.jsx)("p",{className:"text-left whitespace-nowrap",children:e.description.length>50?"".concat(e.description.slice(0,50),"..."):e.description})}),(0,a.jsx)(n.nA,{className:"px-4 py-3 text-center border-b border-gray-200",children:e.date}),(0,a.jsx)(n.nA,{className:"px-4 py-3 text-center border-b border-gray-200",children:e.role}),(0,a.jsx)(n.nA,{className:"px-4 py-3 text-center border-b border-gray-200",children:e.youtube_link&&(0,a.jsx)("div",{className:"relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg",children:(0,a.jsx)("iframe",{className:"w-full h-[150px] sm:h-[250px] md:h-[200px] border-0",src:"https://www.youtube.com/embed/".concat(w(e.youtube_link)),title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}),(0,a.jsx)(n.nA,{className:"px-4 py-3 text-center border-b border-gray-200",children:(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(d.A,{onClick:()=>N(e),className:"cursor-pointer text-blue-500 hover:text-blue-600"})})}),(0,a.jsx)(n.nA,{className:"px-4 py-3 text-center border-b border-gray-200",children:(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(i.A,{onClick:()=>y(e),className:"cursor-pointer text-red-500 hover:text-red-600"})})})]},e._id))})]})]}),(0,a.jsx)(s.Lt,{open:l,onOpenChange:m,children:(0,a.jsxs)(s.EO,{className:"max-w-sm rounded-lg  ".concat("delete"!==x?"h-[400px]":"","  overflow-x-scroll"),children:[(0,a.jsxs)(s.wd,{children:[(0,a.jsx)(s.r7,{className:"text-center -mb-2",children:"delete"===x?"Are you absolutely sure?":"edit"===x?"Edit Testimonial":"Create Testimonial"}),(0,a.jsx)(s.$v,{className:"text-center",children:"delete"===x?"This action cannot be undone. This will permanently delete your item.":"edit"===x?"You can edit the details of the selected item.":"You can create a new testimonial."})]}),(0,a.jsx)("div",{className:"",children:"delete"===x?(0,a.jsx)("div",{className:"text-center",children:(0,a.jsx)("p",{children:"Are you sure you want to delete this item?"})}):(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("label",{htmlFor:"title",className:"font-semibold",children:"Title"}),(0,a.jsx)("input",{type:"text",value:b.title,onChange:e=>g({...b,title:e.target.value}),className:"w-full  outline-none rounded-full px-6 py-2 mb-2 placeholder:text-sm border border-gray-300 ",placeholder:"Enter title"})]}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("label",{htmlFor:"description",className:"font-semibold",children:"Description"}),(0,a.jsx)("textarea",{rows:5,value:b.description,onChange:e=>g({...b,description:e.target.value}),className:"w-full  outline-none  px-3 py-2 border border-gray-300 rounded-md",placeholder:"Enter description"})]}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("label",{htmlFor:"role",className:"font-semibold",children:"Role"}),(0,a.jsx)("input",{type:"text",value:b.role,onChange:e=>g({...b,role:e.target.value}),className:"w-full  outline-none  rounded-full px-6 py-2 mb-2 placeholder:text-sm border border-gray-300 ",placeholder:"Enter role"})]}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("label",{htmlFor:"date",className:"font-semibold",children:"Date"}),(0,a.jsx)("input",{type:"text",value:b.date,onChange:e=>g({...b,date:e.target.value}),className:"w-full  outline-none  rounded-full px-6 py-2 mb-2 placeholder:text-sm border border-gray-300 ",placeholder:"Enter date"})]}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("label",{htmlFor:"youtube_link",className:"font-semibold",children:"YouTube Link"}),(0,a.jsx)("input",{type:"text",value:b.youtube_link,onChange:e=>{let t=e.target.value;g({...b,youtube_link:t}),f(w(t))},className:"w-full  outline-none  rounded-full px-6 py-2 mb-2 placeholder:text-sm border border-gray-300 ",placeholder:"Enter YouTube link"})]}),j&&(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)("iframe",{width:"100%",height:"200",src:"https://www.youtube.com/embed/".concat(j),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,a.jsxs)(s.ck,{children:[(0,a.jsx)(s.Zr,{onClick:()=>m(!1),className:"w-full rounded-full",children:"Cancel"}),(0,a.jsx)(s.Rx,{onClick:v,className:"w-full rounded-full",children:"delete"===x?"Delete":"edit"===x?"Update":"Create"})]})]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[206,951,651,410,544,164,441,517,358],()=>t(7357)),_N_E=e.O()}]);