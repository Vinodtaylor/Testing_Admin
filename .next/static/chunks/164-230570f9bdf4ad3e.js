"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{1310:(e,t,a)=>{a.d(t,{JH:()=>u,jl:()=>w,tU:()=>l,ab:()=>g,Qg:()=>p,e8:()=>i,HR:()=>b,Ae:()=>j,_g:()=>T,lM:()=>R,tA:()=>v,oi:()=>N,m8:()=>m,bx:()=>x,sm:()=>F,fl:()=>y,U9:()=>f,Y1:()=>_,i$:()=>d,fw:()=>c,vu:()=>h});var r=a(2651);let o="https://api.houseofdocs.in";r.A.create({baseURL:o});let s=r.A.create({baseURL:o}),n=(e,t)=>{var a,r;throw Error((null===(r=e.response)||void 0===r?void 0:null===(a=r.data)||void 0===a?void 0:a.message)||t)},l=async e=>{try{return(await s.post("/service/create_service",e,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(e){n(e,"Failed to create 'HomeService' section")}},d=async(e,t)=>{try{return(await s.put("/service/update_service/".concat(e),t)).data}catch(e){n(e,"Failed to update 'HomeService' section")}},c=async(e,t)=>{try{return(await s.put("/service/update_serviceicon/".concat(e),t,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(e){n(e,"Failed to update 'HomeService' section")}},i=async e=>{try{return(await s.delete("/service/delete_service/".concat(e))).data}catch(e){n(e,"Failed to delete 'HomeService' section")}},m=async()=>{try{return(await s.get("/service/get_service")).data}catch(e){n(e,"Failed to delete 'HomeService' section")}},u=async e=>{try{return(await s.post("/banner/create_banner",e,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(e){n(e,"Failed to create 'CTA Banner' section")}},f=async(e,t)=>{try{return(await s.put("/banner/update_banner/".concat(e),t,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(e){n(e,"Failed to update 'CTA Banner' section")}},p=async e=>{try{return(await s.delete("/banner/delete_banner/".concat(e))).data}catch(e){n(e,"Failed to delete 'CTA Banner' section")}},y=async()=>{try{return(await s.get("/banner/get_banner")).data}catch(e){n(e,"Failed to delete 'CTA Banner' section")}},g=async e=>{try{return(await s.post("/testinomal/create_testinomal",e)).data}catch(e){n(e,"Failed to create 'Hometestimonials' section")}},h=async(e,t)=>{try{return(await s.put("/testinomal/update_testinomal/".concat(e),t)).data}catch(e){n(e,"Failed to update 'Hometestimonials' section")}},b=async e=>{try{return(await s.delete("/testinomal/delete_testinomal/".concat(e))).data}catch(e){n(e,"Failed to delete 'Hometestimonials' section")}},x=async()=>{try{return(await s.get("/testinomal/get_testinomal")).data}catch(e){n(e,"Failed to delete 'Hometestimonials' section")}},v=async()=>{try{let e=await s.get("/getalldoctors");return console.log(e,"All Doctors"),e.data}catch(e){n(e,"Failed to fetch  Doctor Detail")}},w=async e=>{try{let t=await s.post("/doctorlist/create_doctorlist",e);return console.log(t,"All Doctors"),t.data}catch(e){n(e,"Failed to fetch  Doctor Detail")}},N=async()=>{try{let e=await s.get("/doctorlist/get_doctorlist");return console.log(e,"All Doctors"),e.data}catch(e){n(e,"Failed to fetch  Doctor Detail")}},_=async(e,t)=>{try{let a=await s.put("/doctorlist/update_doctorlist/".concat(e),t);return console.log(a,"All Doctors"),a.data}catch(e){n(e,"Failed to fetch  Doctor Detail")}},R=async e=>{try{let t=await s.post("/region/create_region",e,{headers:{"Content-Type":"multipart/form-data"}});return console.log(t,"Response"),t.data}catch(e){n(e,"Failed to create Region")}},F=async()=>{try{return(await s.get("/region/get_region")).data}catch(e){n(e,"Failed to get Regions")}},j=async e=>{try{return(await s.delete("/region/delete_region/".concat(e))).data}catch(e){n(e,"Failed to get Regions")}},T=async(e,t)=>{try{let a=await s.put("/region/update_region/".concat(e),t,{headers:{"Content-Type":"multipart/form-data"}});return console.log(a,"Response"),a.data}catch(e){n(e,"Failed to get Regions")}}},3068:(e,t,a)=>{a.d(t,{Lt:()=>c,Rx:()=>b,Zr:()=>x,EO:()=>f,$v:()=>h,ck:()=>y,wd:()=>p,r7:()=>g,tv:()=>i});var r=a(5155),o=a(2115),s=a(7570),n=a(1567),l=a(2317);let d=(0,a(1027).F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}});o.forwardRef((e,t)=>{let{className:a,variant:o,size:s,asChild:c=!1,...i}=e,m=c?l.DX:"button";return(0,r.jsx)(m,{className:(0,n.cn)(d({variant:o,size:s,className:a})),ref:t,...i})}).displayName="Button";let c=s.bL,i=s.l9,m=s.ZL,u=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)(s.hJ,{className:(0,n.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...o,ref:t})});u.displayName=s.hJ.displayName;let f=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsxs)(m,{children:[(0,r.jsx)(u,{}),(0,r.jsx)(s.UC,{ref:t,className:(0,n.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...o})]})});f.displayName=s.UC.displayName;let p=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,n.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};p.displayName="AlertDialogHeader";let y=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};y.displayName="AlertDialogFooter";let g=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)(s.hE,{ref:t,className:(0,n.cn)("text-lg font-semibold",a),...o})});g.displayName=s.hE.displayName;let h=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)(s.VY,{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",a),...o})});h.displayName=s.VY.displayName;let b=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)(s.rc,{ref:t,className:(0,n.cn)(d(),a),...o})});b.displayName=s.rc.displayName;let x=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)(s.ZD,{ref:t,className:(0,n.cn)(d({variant:"outline"}),"mt-2 sm:mt-0",a),...o})});x.displayName=s.ZD.displayName},2508:(e,t,a)=>{a.d(t,{A0:()=>l,BF:()=>d,Hj:()=>c,XI:()=>n,nA:()=>m,nd:()=>i});var r=a(5155),o=a(2115),s=a(1567);let n=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:t,className:(0,s.cn)("w-full caption-bottom text-sm",a),...o})})});n.displayName="Table";let l=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("thead",{ref:t,className:(0,s.cn)("[&_tr]:border-b",a),...o})});l.displayName="TableHeader";let d=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,s.cn)("[&_tr:last-child]:border-0",a),...o})});d.displayName="TableBody",o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...o})}).displayName="TableFooter";let c=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("tr",{ref:t,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...o})});c.displayName="TableRow";let i=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("th",{ref:t,className:(0,s.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...o})});i.displayName="TableHead";let m=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("td",{ref:t,className:(0,s.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...o})});m.displayName="TableCell",o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("caption",{ref:t,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",a),...o})}).displayName="TableCaption"},1567:(e,t,a)=>{a.d(t,{cn:()=>s});var r=a(3463),o=a(9795);function s(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,o.QP)((0,r.$)(t))}}}]);