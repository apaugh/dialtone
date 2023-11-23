import{_ as l,s as c,v as i,x as p,D as s,y as t,z as o,G as a,K as n}from"./framework-4ea48d0d.js";const d={},r=a("h2",{id:"adding-dialtone-to-your-project",tabindex:"-1",class:"d-docsite--header-2"},[s("Adding Dialtone to your project "),a("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#adding-dialtone-to-your-project","aria-hidden":"true"},"#")],-1),u=a("p",{class:"d-docsite--paragraph"},[s("To take advantage of Dialtone's customizations, classes, and variables in your project, you will want to install Dialtone via "),a("a",{href:"https://www.npmjs.com/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"npm"),s(".")],-1),h=n(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @dialpad/dialtone
</code></pre></div><p class="d-docsite--paragraph">Add the following line in your Less file:</p>`,2),k=n(`<div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&quot;node_modules/@dialpad/dialtone/lib/build/less/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p class="d-docsite--paragraph">If you only need access to Dialtone&#39;s variables and customizations to build a file and don&#39;t need the whole library exported, use this line instead in your Less file:</p>`,2),g=n(`<div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">)</span> <span class="token string">&quot;node_modules/@dialpad/dialtone/lib/build/less/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="usage" tabindex="-1" class="d-docsite--header-2">Usage <a class="header-anchor d-link d-docsite--link d-link" href="#usage" aria-hidden="true">#</a></h2>`,2),m=a("p",{class:"d-docsite--paragraph"},"A general overview of Dialtone's utility classes, CSS components, and Vue components.",-1),f=a("h3",{id:"utility-first",tabindex:"-1",class:"d-docsite--header-3"},[s("Utility-first "),a("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#utility-first","aria-hidden":"true"},"#")],-1),b=a("p",{class:"d-docsite--paragraph"},[s("Dialtone's CSS library offers a framework of utility-first classes. Each class is a small, "),a("a",{href:"https://css-tricks.com/lets-define-exactly-atomic-css/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"atomic style"),s(" declaration that, when chained together, should mitigate most situations in which custom CSS must be written. Just write these classes right in your mark-up and you're all set!")],-1),_=a("div",{class:"d-p16 d-bgc-black-600 d-fc-primary-inverted"},"Box",-1),y=n(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-p16 d-bgc-black-600 d-fc-primary-inverted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p class="d-docsite--paragraph">In the above example, we used:</p>`,2),v=n('<ul class="d-docsite--unordered-list"><li class="d-docsite--list-element">Our <a href="/utilities/spacing/padding/" class="d-docsite--link d-link" target="_blank" rel="noopener noreferrer">padding utility class</a> <code>.d-p16</code> to add 16px of padding</li> <li class="d-docsite--list-element">Our <a href="/utilities/backgrounds/color/" class="d-docsite--link d-link" target="_blank" rel="noopener noreferrer">background color utility class</a> <code>.d-bgc-black-600</code> to add a purple background</li> <li class="d-docsite--list-element">Our <a href="/utilities/typography/color/" class="d-docsite--link d-link" target="_blank" rel="noopener noreferrer">font color utility class</a> <code>.d-fc-primary-inverted</code> to change the font color to the inverted primary text color</li></ul>',1),w=a("p",{class:"d-docsite--paragraph"},"Though an atomic CSS approach comes with many advantages, we know it also offers a notable disadvantage: reducing the CSS cascade. This is especially true for repeated UI elements, which can end up creating redundant mark-up. For these instances, Dialtone offers components.",-1),x=a("h3",{id:"components",tabindex:"-1",class:"d-docsite--header-3"},[s("Components "),a("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#components","aria-hidden":"true"},"#")],-1),D=a("p",{class:"d-docsite--paragraph"},[s("There are two methods to implement Dialtone components: Vue (recommended) and CSS. Vue is the preferred method as it's more robust and readily accessible out-of-the-box. "),a("a",{href:"https://vue.dialpad.design/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Get started with Vue components"),s(`.
In the event Dialtone Vue doesn't suit your needs, Dialtone's CSS library offers the same set of components. These may require more work to implement and make accessible, but will work in a pinch.`)],-1),S=a("button",{class:"d-btn d-btn--primary"},"Primary Button",-1),q=n(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Primary Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="writing-css" tabindex="-1" class="d-docsite--header-3">Writing CSS <a class="header-anchor d-link d-docsite--link d-link" href="#writing-css" aria-hidden="true">#</a></h3>`,2),B=a("p",{class:"d-docsite--paragraph"},[s("In the event you need to write CSS, use "),a("a",{href:"http://getbem.com/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"BEM (Block Element Modifier)"),s(". This is a simple, common naming convention that helps make our CSS easier to read and understand. If you aren't familiar with the approach, here's a "),a("a",{href:"http://getbem.com/introduction/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"quick synposis"),s(":")],-1),C=n('<ul class="d-docsite--unordered-list"><li class="d-docsite--list-element"><strong>Block:</strong> A parent entity that is meaningful on its own. For example: <code>.card</code></li> <li class="d-docsite--list-element"><strong>Element:</strong> A child that is meaningful only in relation to its parent. For example: <code>.card__header</code></li> <li class="d-docsite--list-element"><strong>Modifier:</strong> A modifying flag on a Block or Element that changes appearance or behavior. For example: <code>.card--featured</code></li></ul>',1),T=a("h3",{id:"html",tabindex:"-1",class:"d-docsite--header-3"},[s("HTML "),a("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#html","aria-hidden":"true"},"#")],-1),I=n(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card card--featured<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card__header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card__body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card__footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="css" tabindex="-1" class="d-docsite--header-3">CSS <a class="header-anchor d-link d-docsite--link d-link" href="#css" aria-hidden="true">#</a></h3>`,2),N=n(`<div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token selector">.card</span> <span class="token punctuation">{</span>
  <span class="token comment">// Local CSS Custom Properties</span>
  <span class="token property">--card-color-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token operator">-</span>dt<span class="token operator">-</span>color<span class="token operator">-</span>surface<span class="token operator">-</span>primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Default block styles</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token operator">-</span>card<span class="token operator">-</span>color<span class="token operator">-</span>background<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Modifier for block</span>
  <span class="token selector">&amp;--featured</span> <span class="token punctuation">{</span>
    <span class="token property">--card-color-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token operator">-</span>dt<span class="token operator">-</span>color<span class="token operator">-</span>surface<span class="token operator">-</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Elements within block</span>
  <span class="token selector">&amp;__header</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token operator">-</span>dt<span class="token operator">-</span>space<span class="token operator">-</span>500<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;__body</span> <span class="token punctuation">{</span>
    <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token operator">-</span>dt<span class="token operator">-</span>space<span class="token operator">-</span>500<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;__footer</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token operator">-</span>dt<span class="token operator">-</span>space<span class="token operator">-</span>500<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="backbone" tabindex="-1" class="d-docsite--header-3">Backbone <a class="header-anchor d-link d-docsite--link d-link" href="#backbone" aria-hidden="true">#</a></h3>`,2),j=a("p",{class:"d-docsite--paragraph"},"For internal Dialpad projects, using Dialtone in Backbone should be rare, since most front end changes are now being implemented using Vue. Regardless, if you find yourself needing to use Dialtone in Backbone, there are a few steps:",-1),V=n('<ol class="d-docsite--ordered-list"><li class="d-docsite--list-element">Create a <code>.less</code> file for your feature, if one does not yet exist.</li> <li class="d-docsite--list-element">Import this <code>.less</code> file into the relevant base less file e.g. <code>single.less</code>, <code>web.less</code> etc.</li> <li class="d-docsite--list-element">Import Dialtone into your <code>.less</code> file and compose your styles like shown in the example above.</li></ol>',1),P=a("h3",{id:"polyfills",tabindex:"-1",class:"d-docsite--header-3"},[s("Polyfills "),a("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#polyfills","aria-hidden":"true"},"#")],-1),z=a("p",{class:"d-docsite--paragraph"},[s("In order to make Dialtone work across our supported browsers you need to manually install "),a("strong",null,"focus-visible"),s(" polyfill and "),a("strong",null,"postcss-focus-visible"),s(" plugin.")],-1),A=n('<ol class="d-docsite--ordered-list"><li class="d-docsite--list-element">Focus-visible adds a listener to every element that should be keyboard-focused only and when the element is focused, it adds the .focus-visible class to it, follow the <a href="https://github.com/WICG/focus-visible#installation" class="d-docsite--link d-link" target="_blank" rel="noopener noreferrer">focus-visible</a> installation instructions.</li> <li class="d-docsite--list-element">Postcss focus-visible plugin adds a .focus-visible class for every :focus-visible class found in your css, follow the <a href="https://www.npmjs.com/package/postcss-focus-visible" class="d-docsite--link d-link" target="_blank" rel="noopener noreferrer">postcss-focus-visible</a> installation instructions.</li></ol>',1),M=a("h3",{id:"box-sizing",tabindex:"-1",class:"d-docsite--header-3"},[s("Box-sizing "),a("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#box-sizing","aria-hidden":"true"},"#")],-1),E=a("p",{class:"d-docsite--paragraph"},[s("All Dialtone components are implemented with "),a("code",null,"box-sizing: border-box;"),s(" applied. To understand why we prefer "),a("code",null,"border-box"),s(" over "),a("code",null,"content-box"),s(", please visit this "),a("a",{href:"https://stackoverflow.com/c/dialpad/questions/121",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Stack Overflow Teams question"),s(".")],-1),O=a("p",{class:"d-docsite--paragraph"},[s("In "),a("code",null,"Vue"),s(", we apply "),a("code",null,"border-box"),s(" globally at the "),a("code",null,"VueView"),s(" level, ensuring all child elements use this style. As such, Dialtone styles will work correctly in Vue with respect to element sizing.")],-1),F=a("p",{class:"d-docsite--paragraph"},[s("In "),a("code",null,"Backbone"),s(" we are not using "),a("code",null,"border-box"),s(" by default. Because Dialtone expects this, anytime we wish to use Dialtone styles in Backbone we must ensure to apply the "),a("code",null,"border-box"),s(" style to all affected elements.")],-1),G=a("h2",{id:"build-dialtone-locally",tabindex:"-1",class:"d-docsite--header-2"},[s("Build Dialtone Locally "),a("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#build-dialtone-locally","aria-hidden":"true"},"#")],-1),L=a("p",{class:"d-docsite--paragraph"},[s("We're excited you want to install Dialtone locally as this most likely means you'll be contributing soon! Before you get to get started though,  "),a("strong",null,[s("please make sure you've read our "),a("a",{href:"https://github.com/dialpad/dialtone/blob/master/.github/CONTRIBUTING.md",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"contributing docs")]),s(".")],-1),U=a("h3",{id:"install-node-npm",tabindex:"-1",class:"d-docsite--header-3"},[s("Install Node & npm "),a("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#install-node-npm","aria-hidden":"true"},"#")],-1),H=a("p",{class:"d-docsite--paragraph"},[s("To run Dialtone locally, you must have Node and NPM (Node Package Manager) installed. "),a("a",{href:"https://nodejs.org/en/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Click here to download Node"),s(". The recommended Node version is fine. NPM is included with Node. If you already have Node installed, you may move onto the next step.")],-1),R=a("p",{class:"d-docsite--paragraph"},"Once Node finishes installing, ensure it is installed properly by typing the following command in your Terminal window:",-1),W=n(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
</code></pre></div><p class="d-docsite--paragraph">You should see the following response:</p>`,2),Y=a("div",{class:"language-bash","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,`v16.x.x
`)])],-1),J=a("h3",{id:"clone-project",tabindex:"-1",class:"d-docsite--header-3"},[s("Clone project "),a("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#clone-project","aria-hidden":"true"},"#")],-1),K=a("p",{class:"d-docsite--paragraph"},"Download the project:",-1),Q=n(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>// SSH
<span class="token function">git</span> clone git@github.com:dialpad/dialtone.git

// HTTPS
<span class="token function">git</span> clone https://github.com/dialpad/dialtone.git
</code></pre></div><p class="d-docsite--paragraph">Then <code>cd</code> into the Dialtone directory:</p>`,2),X=n(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./path/to/dialtone
</code></pre></div><h3 id="install-dependencies" tabindex="-1" class="d-docsite--header-3">Install dependencies <a class="header-anchor d-link d-docsite--link d-link" href="#install-dependencies" aria-hidden="true">#</a></h3>`,2),Z=a("p",{class:"d-docsite--paragraph"},[s("Dialtone uses "),a("a",{href:"https://gulpjs.com/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Gulp"),s(" to automate its various workflows. Run the following command to install Gulp and all other project dependencies:")],-1),$=n(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div><h3 id="building-dialtone" tabindex="-1" class="d-docsite--header-3">Building Dialtone <a class="header-anchor d-link d-docsite--link d-link" href="#building-dialtone" aria-hidden="true">#</a></h3>`,2),ss=a("p",{class:"d-docsite--paragraph"},"You're now ready to build Dialtone! To build and run the development server:",-1),as=n(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">npm</span> start
</code></pre></div><p class="d-docsite--paragraph">Once finished, visit <a href="http://localhost:4000/" class="d-docsite--link d-link" target="_blank" rel="noopener noreferrer">http://localhost:4000/</a>.</p>`,2);function ns(es,ts){const e=c("code-well-header");return i(),p("div",null,[r,s(),u,s(),h,s(),k,s(),g,s(),m,s(),f,s(),b,s(),t(e,null,{default:o(()=>[_]),_:1}),s(),y,s(),v,s(),w,s(),x,s(),D,s(),t(e,null,{default:o(()=>[S]),_:1}),s(),q,s(),B,s(),C,s(),T,s(),I,s(),N,s(),j,s(),V,s(),P,s(),z,s(),A,s(),M,s(),E,s(),O,s(),F,s(),G,s(),L,s(),U,s(),H,s(),R,s(),W,s(),Y,J,s(),K,s(),Q,s(),X,s(),Z,s(),$,s(),ss,s(),as])}const ls=l(d,[["render",ns],["__file","index.html.vue"]]);export{ls as default};
