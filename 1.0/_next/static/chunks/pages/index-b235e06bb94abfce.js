(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4482)}])},4482:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return h}});var a=t(5893),n=t(7294),r=t(9008),i=t.n(r),o=t(1163),l=function(e){let{Component:s,pageProps:t,workspace:n}=e,r=(0,o.useRouter)(),i=e=>{r.push({pathname:"/new/[workspace]",query:{workspace:btoa(e.name)}})};return(0,a.jsx)("div",{onClick:()=>i(n),className:"w-[245px] h-[88px] transition-all relative cursor-pointer group flex p-2 items-center justify-center bg-slate-100/90 shadow rounded hover:shadow-xl hover:bg-gradient-to-r hover:from-slate-900 hover:to-cyan-800 hover:text-white",children:(0,a.jsx)("div",{className:"w-full h-full",children:(0,a.jsxs)("div",{className:"show-grid flex h-full items-center",children:[(0,a.jsx)("div",{className:"kasmcard-img flex h-full mx-4 items-center justify-center",children:(0,a.jsx)("img",{className:"w-[50px] max-h-[66px]",src:"icons/"+n.image_src})}),(0,a.jsxs)("div",{className:"kasmcard-detail settingPad",children:[(0,a.jsx)("h5",{className:"text-base",children:n.friendly_name}),(0,a.jsx)("p",{className:"text-xs opacity-50",children:n.categories&&n.categories[0]||"Unknown"})]})]})})})},c=t(7160),d=t.n(c);function h(e){let{searchText:s}=e,[t,r]=(0,n.useState)(null),[o,c]=(0,n.useState)(null),[h,m]=(0,n.useState)(null);(0,n.useEffect)(()=>{let e=localStorage.getItem("version")||null;fetch("list.json").then(e=>e.json()).then(s=>{let t=[];s.workspaces.forEach(e=>{e.compatibility&&e.compatibility.forEach(e=>{let s=parseFloat(e);-1===t.indexOf(s)&&t.push(s)})});let a=t.sort((e,s)=>e-s).reverse();c(a),null===e&&(e=a[0],localStorage.setItem("version",e)),m(e),r(s)})},[]);let p=t&&t.workspaces&&t.workspaces.length>0?[...t.workspaces]:[];p=p.filter(e=>e.compatibility.some(e=>e===h+".x"));let u=s&&s.toLowerCase();return s&&""!==s&&(p=p.filter(e=>{let s=e.categories&&e.categories.length>0?e.categories.filter(e=>e.toLowerCase().includes(u)):[];return e.name.toLowerCase().includes(u)||s.length>0})),(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:"Kasm Workspaces"}),(0,a.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("main",{className:"p-8 py-10 xl:px-20",children:[(0,a.jsx)("h1",{className:"flex flex-wrap-reverse uppercase tracking-widest justify-center mb-10 gap-5",children:(0,a.jsxs)("span",{className:"flex items-center text-lg bg-slate-100/90 rounded overflow-hidden shadow",children:[(0,a.jsx)("span",{className:"flex px-3 text-xs opacity-100",children:"Workspaces"}),(0,a.jsx)("span",{className:"text-white p-3 py-1 flex bg-[#2980b9]",children:t&&t.workspacecount})]})}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-1 justify-center",children:[p&&p.length>0&&p.map(function(e,s){return(0,a.jsx)(l,{workspace:e},e.sha)}),p&&0===p.length&&(0,a.jsxs)("p",{children:["No workspaces found ",""!==s&&'matching "'+s+'"']})]}),(0,a.jsx)("div",{className:d().grid})]})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,s,t){e.exports=t(3121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);