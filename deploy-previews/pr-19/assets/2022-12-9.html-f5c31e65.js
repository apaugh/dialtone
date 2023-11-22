import{p as r,B as h}from"./BlogPost-18ad3467.js";import{_ as p,s as i,v as _,x as g,I as b,D as a,y as s,z as n,G as e,H as u}from"./framework-4ea48d0d.js";import"./app-297a0778.js";const m=e("p",{class:"d-docsite--paragraph"},"Hello and happy Friday to you all as we approach the holiday season! 🎄 🕎",-1),f=e("p",{class:"d-docsite--paragraph"},"We'll be performing a number of redesigns to existing Dialtone components over the coming months. Some of these updates may involve breaking changes to existing Vue components and Dialtone classes. Today's update involves badge which we have just reworked for better styling, functionality and convenience.",-1),v=e("ul",{class:"d-docsite--unordered-list"},[e("li",{class:"d-docsite--list-element"},[e("a",{href:"https://dialpad.design/components/badge.html",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Badge")]),a(),e("li",{class:"d-docsite--list-element"},[e("a",{href:"https://vue.dialpad.design/?path=/story/components-badge--default",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Badge Vue Component")])],-1),k=e("h2",{id:"badge",tabindex:"-1",class:"d-docsite--header-2"},[a("Badge "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#badge","aria-hidden":"true"},"#")],-1),y=e("p",{class:"d-docsite--paragraph"},"The recent updates to badge cause breaking changes in Dialtone v7.9.0 and Dialtone Vue v2.43.0 and Dialtone Vue 3 v3.29.0",-1),x=e("p",{class:"d-docsite--paragraph"},[a("The migration has been performed for all existing "),e("code",null,"DtBadge"),a(" components and "),e("code",null,"d-badge"),a(" classes in Dialpad and Dialpad Meetings. However if you have an existing feature branch or are in a project outside of Dialpad / Dialpad Meetings that involves badge, the changes will not have been made there so you'll have to make the updates yourself. If you need to do this, please follow the badge section of the "),e("a",{href:"https://github.com/dialpad/dialtone/blob/staging/migration_guide/MIGRATION_GUIDE.md#badge",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"migration guide"),a(".")],-1),w=e("h3",{id:"variants",tabindex:"-1",class:"d-docsite--header-3"},[a("Variants "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#variants","aria-hidden":"true"},"#")],-1),D={class:"d-d-flex d-gg8 d-ai-center"},B=e("h3",{id:"label-badge-examples",tabindex:"-1",class:"d-docsite--header-3"},[a("Label Badge Examples "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#label-badge-examples","aria-hidden":"true"},"#")],-1),V={class:"d-d-flex d-gg8 d-ai-center"},T=e("span",{class:"d-badge"},"Co-host",-1),z=e("span",{class:"d-badge"},"Customer",-1),A={class:"d-badge"},C={class:"d-badge__icon-left"},N=e("span",{class:"d-badge__label"},"Locked",-1),Y={class:"d-badge"},I={class:"d-badge__icon-left"},S=e("span",{class:"d-badge__label"},"Chat log",-1),L=e("div",null,[e("div",{class:"d-d-flex d-gg8 d-ai-center"},[e("span",{class:"d-badge d-badge--info"},[e("span",{class:"d-badge__label"},"In progress")]),a(),e("span",{class:"d-badge d-badge--info"},[e("span",{class:"d-badge__label"},"Beta")]),a(),e("span",{class:"d-badge d-badge--info"},[e("span",{class:"d-badge__label"},"Draft")])])],-1),M=e("div",null,[e("div",{class:"d-d-flex d-gg8 d-ai-center"},[e("span",{class:"d-badge d-badge--warning"},[e("span",{class:"d-badge__label"},"Overdue")])])],-1),E=e("div",null,[e("div",{class:"d-d-flex d-gg8 d-ai-center"},[e("span",{class:"d-badge d-badge--success"},[e("span",{class:"d-badge__label"},"Resolved")])])],-1),P={class:"d-d-flex d-gg8 d-ai-center"},R={class:"d-badge d-badge--critical"},G={class:"d-badge__icon-left"},H=e("span",{class:"d-badge__label"},"Recording",-1),W=e("div",null,[e("div",{class:"d-d-flex d-gg8 d-ai-center"},[e("span",{class:"d-badge d-badge--bulletin"},[e("span",{class:"d-badge__label"},"Live")]),a(),e("span",{class:"d-badge d-badge--bulletin"},[e("span",{class:"d-badge__label"},"Presenter")])])],-1),$={class:"d-d-flex d-gg8 d-ai-center"},j={class:"d-badge d-badge--ai"},q={class:"d-badge__icon-left"},F=e("span",{class:"d-vi-visible-sr"},"Ai",-1),O=e("span",{class:"d-badge__label"},"Notes",-1),J={class:"d-badge d-badge--ai"},U={class:"d-badge__icon-left"},K=e("span",{class:"d-vi-visible-sr"},"Ai",-1),Q=e("span",{class:"d-badge__label"},"Suggestion",-1),X={class:"d-badge d-badge--ai"},Z={class:"d-badge__icon-left"},ee=e("span",{class:"d-vi-visible-sr"},"Ai",-1),ae=e("span",{class:"d-badge__label"},"enabled",-1),se={class:"d-badge d-badge--ai"},de={class:"d-badge__icon-left"},te=e("span",{class:"d-vi-visible-sr"},"Ai",-1),ne=e("span",{class:"d-badge__label"},"Transcript",-1),oe=e("h3",{id:"count-badge-examples",tabindex:"-1",class:"d-docsite--header-3"},[a("Count Badge Examples "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#count-badge-examples","aria-hidden":"true"},"#")],-1),ie={class:"d-d-flex d-gg8 d-ai-center"},le={class:"d-badge d-badge--count d-badge--success"},ce={class:"d-badge__icon-left"},re=e("span",{class:"d-badge__label"},"5%",-1),he={class:"d-d-flex d-gg8 d-ai-center"},pe={class:"d-badge d-badge--count d-badge--critical"},_e={class:"d-badge__icon-left"},ge=e("span",{class:"d-badge__label"},"-12%",-1),be=e("div",null,[e("div",{class:"d-d-flex d-gg8 d-ai-center"},[e("span",{class:"d-badge d-badge--count d-badge--bulletin"},[e("span",{class:"d-badge__label"},"1")]),a(),e("span",{class:"d-badge d-badge--count d-badge--bulletin"},[e("span",{class:"d-badge__label"},"18")]),a(),e("span",{class:"d-badge d-badge--count d-badge--bulletin"},[e("span",{class:"d-badge__label"},"99+")])])],-1),ue=e("h3",{id:"styling-documentation-changes",tabindex:"-1",class:"d-docsite--header-3"},[a("Styling & documentation changes "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#styling-documentation-changes","aria-hidden":"true"},"#")],-1),me=e("ul",{class:"d-docsite--unordered-list"},[e("li",{class:"d-docsite--list-element"},"Visual styling updates."),a(),e("li",{class:"d-docsite--list-element"},[a('You no longer set a badge to a specific color, you set it to a "type" with a specific semantic intent. See '),e("a",{href:"https://dialpad.design/components/badge.html#type",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"badge documenatation"),a(" for all the possible types.")]),a(),e("li",{class:"d-docsite--list-element"},'Two different kinds of badge "label" which is meant for alphanumeric text and "count" which makes the badge circular and is intended for numerical text only.'),a(),e("li",{class:"d-docsite--list-element"},"Improved documentation for badge usage and best practices."),a(),e("li",{class:"d-docsite--list-element"},"Support for icons on either side of the badge.")],-1),fe=e("h3",{id:"vue-component-changes",tabindex:"-1",class:"d-docsite--header-3"},[a("Vue component changes "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#vue-component-changes","aria-hidden":"true"},"#")],-1),ve=e("ul",{class:"d-docsite--unordered-list"},[e("li",{class:"d-docsite--list-element"},[a("New iconLeft and iconRight prop on the vue component. pass in any icon name from the "),e("a",{href:"https://dialpad.design/components/icon.html",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"icon catalog"),a(" to set the icon.")]),a(),e("li",{class:"d-docsite--list-element"},'New prop "kind", set to "label" or "count".'),a(),e("li",{class:"d-docsite--list-element"},'New prop "type", replaces "color".'),a(),e("li",{class:"d-docsite--list-element"},"Special case: setting the type to 'ai' will automatically display the AI icon on the left. This can be overridden if desired by setting the iconLeft prop.")],-1),ke=e("h2",{id:"avatar",tabindex:"-1",class:"d-docsite--header-2"},[a("Avatar "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#avatar","aria-hidden":"true"},"#")],-1),ye=e("p",{class:"d-docsite--paragraph"},"We have also made some updates to the avatar component. You'll notice that when you use the component in initials or icon mode it will now display a randomly generated gradient for the background using multiple colors:",-1),xe=e("p",{class:"d-docsite--paragraph"},"Very fancy!! 🧐 Thanks to Francis and Jose for this one.",-1),we=e("p",{class:"d-docsite--paragraph"},[a("The new presence component has also been released and is integrated into the Avatar. You'll notice there is a new prop on the "),e("a",{href:"https://vue.dialpad.design/?path=/story/components-avatar--default",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Vue component"),a(" called presence in which you can set the presence state for the avatar.")],-1),De=e("h2",{id:"combobox",tabindex:"-1",class:"d-docsite--header-2"},[a("Combobox "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#combobox","aria-hidden":"true"},"#")],-1),Be=e("p",{class:"d-docsite--paragraph"},"You may have noticed that while our input component had a label on it, none of our combobox components which use input had labels, or had any way of setting the label.",-1),Ve=e("p",{class:"d-docsite--paragraph"},[a("All combobox components now have a required label prop. You do not have to set a label that shows up visually, but if you don't then you still have to label it for screenreaders. You can do so by setting the label prop and then setting the labelVisible prop to "),e("code",null,"false"),a(" in which case the aria-label will still be set even if it is not shown visually.")],-1),Te=e("p",{class:"d-docsite--paragraph"},"That's all for today have a great weekend all!",-1),ze={__name:"2022-12-9.html",setup(Ae){return(l,Ce)=>{const d=i("dt-badge"),o=i("code-well-header"),t=i("dt-icon"),c=i("dt-avatar");return _(),g("div",null,[b(" Note the date must be in this format YYYY-M-D and wrapped in single quotes "),a(),s(h,{author:l.$frontmatter.author,posted:u(r)(l.$frontmatter.posted,"y-M-d",new Date),heading:l.$frontmatter.heading},{default:n(()=>[m,a(),f,a(),v,a(),k,a(),y,a(),x,a(),w,a(),s(o,null,{default:n(()=>[e("div",D,[s(d,{text:"Default"}),a(),s(d,{type:"info",text:"Info"}),a(),s(d,{type:"success",text:"Success"}),a(),s(d,{type:"warning",text:"Warning"}),a(),s(d,{type:"critical",text:"Critical"}),a(),s(d,{type:"bulletin",text:"Bulletin"}),a(),s(d,{type:"ai",text:"Ai"}),a(),s(d,{kind:"count",text:"1"}),a(),s(d,{kind:"count",type:"info",text:"1"}),a(),s(d,{kind:"count",type:"success",text:"1"}),a(),s(d,{kind:"count",type:"warning",text:"1"}),a(),s(d,{kind:"count",type:"critical",text:"1"}),a(),s(d,{kind:"count",type:"bulletin",text:"1"})])]),_:1}),a(),B,a(),s(o,null,{default:n(()=>[e("div",null,[e("div",V,[T,a(),z,a(),e("span",A,[e("span",C,[s(t,{name:"lock",size:"200"})]),a(),N]),a(),e("span",Y,[e("span",I,[s(t,{name:"message",size:"200"})]),a(),S])])]),a(),L,a(),M,a(),E,a(),e("div",null,[e("div",P,[e("span",R,[e("span",G,[s(t,{name:"record-filled",size:"200"})]),a(),H])])]),a(),W,a(),e("div",null,[e("div",$,[e("span",j,[e("span",q,[s(t,{name:"dialpad-ai",size:"200"})]),a(),F,a(),O]),a(),e("span",J,[e("span",U,[s(t,{name:"dialpad-ai",size:"200"})]),a(),K,a(),Q]),a(),e("span",X,[e("span",Z,[s(t,{name:"dialpad-ai",size:"200"})]),a(),ee,a(),ae]),a(),e("span",se,[e("span",de,[s(t,{name:"dialpad-ai",size:"200"})]),a(),te,a(),ne])])])]),_:1}),a(),oe,a(),s(o,null,{default:n(()=>[e("div",null,[e("div",ie,[e("span",le,[e("span",ce,[s(t,{name:"arrow-up",size:"200"})]),a(),re])])]),a(),e("div",null,[e("div",he,[e("span",pe,[e("span",_e,[s(t,{name:"arrow-down",size:"200"})]),a(),ge])])]),a(),be]),_:1}),a(),ue,a(),me,a(),fe,a(),ve,a(),ke,a(),ye,a(),s(o,null,{default:n(()=>[s(c,null,{default:n(()=>[a("BP")]),_:1})]),_:1}),a(),xe,a(),we,a(),s(o,null,{default:n(()=>[s(c,{presence:"away"},{default:n(()=>[a("BP")]),_:1})]),_:1}),a(),De,a(),Be,a(),Ve,a(),Te]),_:1},8,["author","posted","heading"])])}}},Se=p(ze,[["__file","2022-12-9.html.vue"]]);export{Se as default};
