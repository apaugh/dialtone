import{_ as b,s as _,v as r,x as i,y as t,z as n,D as s,G as a,F as p,A as f,E as g,C as u}from"./framework-4ea48d0d.js";const x=a("span",{class:"d-label-plain-small"},"Ready",-1),y=a("span",{class:"d-label-plain-small"},"In progress",-1),C=a("span",{class:"d-label-plain-small"},"Planned",-1),S=a("span",{class:"d-label-plain-small"},"N/A",-1),k={class:"d-table"},w=a("thead",null,[a("tr",null,[a("th",{scope:"col"},`
          Component
        `),s(),a("th",{scope:"col"},`
          CSS
        `),s(),a("th",{scope:"col"},`
          Vue
        `),s(),a("th",{scope:"col"},`
          Figma
        `)])],-1),v={scope:"row"},$=["aria-label"],z=["aria-label"],A=["aria-label"],N={__name:"ComponentHealthStatusTable",props:{componentsStatus:{type:Array,default:()=>[]}},setup(m){const c={Ready:"check-circle","In progress":"tools",Planned:"box-select","N/A":"box"},d={Ready:"d-fc-success","In progress":"d-fc-warning",Planned:"d-fc-error","N/A":"d-fc-muted"};return(F,T)=>{const l=_("dt-icon"),o=_("dt-stack"),h=_("router-link");return r(),i(p,null,[t(o,{gap:"400",direction:"row",class:"d-bgc-secondary d-p8 d-bar4 d-ba d-bc-subtle d-my16"},{default:n(()=>[t(o,{direction:"row",gap:"300"},{default:n(()=>[t(l,{class:"d-fc-success",name:"check-circle",size:"300"}),s(),x]),_:1}),s(),t(o,{direction:"row",gap:"300"},{default:n(()=>[t(l,{class:"d-fc-warning",name:"tools",size:"300"}),s(),y]),_:1}),s(),t(o,{direction:"row",gap:"300"},{default:n(()=>[t(l,{class:"d-fc-error",name:"box-select",size:"300"}),s(),C]),_:1}),s(),t(o,{direction:"row",gap:"300"},{default:n(()=>[t(l,{class:"d-fc-muted",name:"box",size:"300"}),s(),S]),_:1})]),_:1}),s(),a("table",k,[w,s(),a("tbody",null,[(r(!0),i(p,null,f(m.componentsStatus,e=>(r(),i("tr",{key:e.name},[a("th",v,[t(h,{class:"d-link",to:e.url},{default:n(()=>[s(g(e.name),1)]),_:2},1032,["to"])]),s(),a("td",{tabindex:"0","aria-label":`${e.name} CSS ${e.css}`},[t(l,{class:u(d[e.css]),name:c[e.css]},null,8,["class","name"])],8,$),s(),a("td",{tabindex:"0","aria-label":`${e.name} VUE ${e.vue}`},[t(l,{class:u(d[e.vue]),name:c[e.vue]},null,8,["class","name"])],8,z),s(),a("td",{tabindex:"0","aria-label":`${e.name} FIGMA ${e.figma}`},[t(l,{class:u(d[e.figma]),name:c[e.figma]},null,8,["class","name"])],8,A)]))),128))])])],64)}}},I=b(N,[["__file","ComponentHealthStatusTable.vue"]]),V={__name:"index.html",setup(m){return(c,d)=>(r(),i("div",null,[t(I,{"components-status":c.$page.componentsStatus},null,8,["components-status"])]))}},E=b(V,[["__file","index.html.vue"]]);export{E as default};
