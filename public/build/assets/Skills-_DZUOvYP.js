import{_ as r}from"./AuthenticatedLayout-McGuc-mI.js";import{o as t,g as c,b as e,t as n,E as i,c as d,w as p,G as m,F as _,e as u,p as g,a as f}from"./app-R7-4oB6V.js";import{_ as k}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./ApplicationLogo-Qm4cP5rP.js";const h={class:"flex items-center mb-2"},x={class:"mr-2"},S={class:"w-full h-2 bg-gray-400 rounded-full overflow-hidden"},v={class:"ml-2"},w={__name:"PercentageBar",props:{percentage:{type:Number,required:!0},skillname:{type:String,required:!0}},setup(a){return(s,o)=>(t(),c("div",h,[e("span",x,n(a.skillname),1),e("div",S,[e("div",{class:"h-full bg-blue-500",style:i({width:a.percentage+"%"})},null,4)]),e("span",v,n(a.percentage)+"%",1)]))}},b=a=>(g("data-v-cefae8f1"),a=a(),f(),a),y={class:"container mx-auto overflow-hidden"},$={class:"flex flex-col items-center mx-auto mb-12"},B=b(()=>e("h1",{"data-aos":"fade-up","data-aos-duration":"750",class:"text-2xl font-bold text-center pt-20 pb-5"},"Mijn Skills",-1)),L={"data-aos":"zoom-in-up","data-aos-duration":"750",class:"flex flex-wrap m-5 bg-gray-200 drop-shadow-2xl rounded-xl"},M={class:"w-full sm:w-1/2 px-3 p-3"},P={mounted(){document.title=this.pageTitle+" | Ricardo van Toorn"},data(){return{pageTitle:"My Skills"}}},T=Object.assign(P,{__name:"Skills",setup(a){const s=[{skillname:"HTML",percentage:90},{skillname:"CSS/Tailwindcss",percentage:80},{skillname:"JavaScript/VueJS",percentage:65},{skillname:"C#",percentage:90},{skillname:"MSSQL/MySQL",percentage:75},{skillname:"Docker",percentage:25},{skillname:"PHP/Laravel",percentage:60},{skillname:"Python",percentage:50},{skillname:"Figma",percentage:80},{skillname:"Photoshop",percentage:65},{skillname:"Devops",percentage:85},{skillname:"Office365",percentage:80}];return(o,I)=>(t(),d(r,null,{default:p(()=>[e("div",y,[e("div",$,[B,e("div",L,[(t(),c(_,null,m(s,l=>e("div",M,[u(w,{skillname:l.skillname,percentage:l.percentage},null,8,["skillname","percentage"])])),64))])])])]),_:1}))}}),V=k(T,[["__scopeId","data-v-cefae8f1"]]);export{V as default};