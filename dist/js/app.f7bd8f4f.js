(function(){"use strict";var t={2961:function(t,e,a){var n=a(9242),s=a(3396);function o(t,e,a,o,r,c){const l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l,{name:"Nav"}),(0,s.Wm)(l,{name:"Header"}),(0,s.Wm)(l,{name:"HeaderSub"}),(0,s.Wm)(l,{class:"router"},{default:(0,s.w5)((({Component:t})=>[(0,s.Wm)(n.uT,{name:"fade",mode:"out-in"},{default:(0,s.w5)((()=>[((0,s.wg)(),(0,s.j4)((0,s.LL)(t)))])),_:2},1024)])),_:1})],64)}const r=t=>((0,s.dD)("data-v-164428cb"),t=t(),(0,s.Cn)(),t),c={class:"container home"},l=r((()=>(0,s._)("main",{class:"contents"},[(0,s._)("h1",null,"홈")],-1))),i=[l];function d(t,e,a,n,o,r){return(0,s.wg)(),(0,s.iD)("div",c,i)}var u={name:"HomeItem",props:{msg:String},data(){return{}},created(){console.log("home created")},methods:{}},m=a(89);const p=(0,m.Z)(u,[["render",d],["__scopeId","data-v-164428cb"]]);var v=p;const _={id:"menubar",class:"menubar"},b={class:"inr"},f={class:"menu"},h={class:"home"},w={class:"adds"},y={class:"look"},g={class:"look"};function k(t,e,a,n,o,r){const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",_,[(0,s._)("div",b,[(0,s._)("ul",f,[(0,s._)("li",h,[(0,s.Wm)(c,{class:"bt",to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1})]),(0,s._)("li",w,[(0,s.Wm)(c,{class:"bt",to:"/list"},{default:(0,s.w5)((()=>[(0,s.Uk)("Board")])),_:1})]),(0,s._)("li",y,[(0,s.Wm)(c,{class:"bt",to:"/list"},{default:(0,s.w5)((()=>[(0,s.Uk)("List")])),_:1})]),(0,s._)("li",g,[(0,s.Wm)(c,{class:"bt",to:"/list"},{default:(0,s.w5)((()=>[(0,s.Uk)("List")])),_:1})])])])])}var S={name:"NavItem",props:{},data(){return{}},created(){},methods:{}};const I=(0,m.Z)(S,[["render",k],["__scopeId","data-v-2edf62f8"]]);var D=I;const x=t=>((0,s.dD)("data-v-0a910fbf"),t=t(),(0,s.Cn)(),t),H={class:"header"},V={class:"inr"},W={class:"ldt"},C={class:"logo"},U=x((()=>(0,s._)("div",{class:"rdt"},[(0,s._)("button",{type:"button",class:"bt",onclick:"history.back(-1)"},[(0,s._)("b",null,"뒤로")]),(0,s._)("button",{type:"button",class:"bt gnb"},[(0,s._)("b",null,"메뉴")])],-1)));function z(t,e,a,n,o,r){const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("header",H,[(0,s._)("div",V,[(0,s._)("div",W,[(0,s._)("h1",C,[(0,s.Wm)(c,{class:"btlogo",to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1})])]),U])])}var O={name:"HeaderItem",props:{},data(){return{}},created(){},methods:{}};const j=(0,m.Z)(O,[["render",z],["__scopeId","data-v-0a910fbf"]]);var q=j,T={name:"App",components:{Header:q,Nav:D,Home:v}};const Z=(0,m.Z)(T,[["render",o],["__scopeId","data-v-5c0be4e0"]]);var B=Z,J=a(2483);const N=t=>((0,s.dD)("data-v-3b97c713"),t=t(),(0,s.Cn)(),t),E={class:"header sub"},K=N((()=>(0,s._)("div",{class:"inr"},[(0,s._)("div",{class:"ldt"},[(0,s._)("button",{type:"button",class:"bt back",onclick:"history.back(-1)"},"뒤로")]),(0,s._)("div",{class:"cdt"},[(0,s._)("h3",{class:"tit"},"목록")]),(0,s._)("div",{class:"rdt"},[(0,s._)("button",{type:"button",class:"bt gnb"},[(0,s._)("b",null,"메뉴")])])],-1))),L=[K];function $(t,e,a,n,o,r){return(0,s.wg)(),(0,s.iD)("header",E,L)}var F={name:"HeaderSubItem",props:{},data(){return{}},created(){},methods:{}};const P=(0,m.Z)(F,[["render",$],["__scopeId","data-v-3b97c713"]]);var R=P,Y=a(7139);const A={class:"container board"},M={class:"contents"},Q={class:"board-list"},G={class:"tot"},X={class:"list"},tt={class:"tits"},et={class:"cont"},at={class:"text"},nt={class:"date"},st={class:"floatnav"};function ot(t,e,a,n,o,r){const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",A,[(0,s._)("main",M,[(0,s._)("h1",null,(0,Y.zw)(a.msg),1),(0,s._)("div",Q,[(0,s._)("p",G,"게시물 : "+(0,Y.zw)(o.Boards.length)+" 개",1),(0,s._)("ul",X,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.Boards,(t=>((0,s.wg)(),(0,s.iD)("li",{key:t.key},[(0,s.Wm)(c,{class:"box",to:{name:"view",params:{id:t.key}}},{default:(0,s.w5)((()=>[(0,s._)("h4",tt,(0,Y.zw)(t.title)+" : "+(0,Y.zw)(t.key),1),(0,s._)("div",et,[(0,s._)("div",at,(0,Y.zw)(t.content),1)]),(0,s._)("div",nt,(0,Y.zw)(t.timestamp),1)])),_:2},1032,["to"])])))),128))])]),(0,s._)("div",st,[(0,s.Wm)(c,{class:"bt reg",to:"/write"},{default:(0,s.w5)((()=>[(0,s.Uk)("게시글동록")])),_:1})])])])}a(7658);var rt=a(7795),ct=a(36);const lt={apiKey:"AIzaSyCnYJTa63-PRm899pb_va79ndU68Jkt_r8",authDomain:"myworks-f1205.firebaseapp.com",projectId:"myworks-f1205",storageBucket:"myworks-f1205.appspot.com",messagingSenderId:"248734016315",appId:"1:248734016315:web:2259b601c7bd4ea68bcd1e",measurementId:"G-KE1P2B2HB8"},it=(0,rt.ZF)(lt),dt=(0,ct.ad)(it);var ut=dt,mt={name:"ListItem",props:{msg:String},data(){return{Boards:[]}},created(){console.log("list created"),this.read()},mounted(){document.querySelector(".header .cdt .tit").textContent="목록"},methods:{async read(){const t=(0,ct.IO)((0,ct.hJ)(ut,"test"),(0,ct.Xo)("timestamp","desc"),(0,ct.b9)(),(0,ct.vh)()),e=await(0,ct.PL)(t);this.Boards=[],e.forEach((t=>{console.log(t.data().title),this.Boards.push({key:t.id,title:t.data().title,content:t.data().content,timestamp:new Intl.DateTimeFormat("ko-KR",{dateStyle:"full",timeStyle:"medium"}).format(t.data().timestamp.toDate())})}))}}};const pt=(0,m.Z)(mt,[["render",ot],["__scopeId","data-v-060babda"]]);var vt=pt;const _t={class:"container board"},bt={class:"contents"},ft={class:"board-write"},ht=(0,s.uE)('<ul class="list" data-v-1d01e602><li data-v-1d01e602><label class="dt" data-v-1d01e602>제목</label><div class="dd" data-v-1d01e602><span class="input" data-v-1d01e602><input type="text" id="title" placeholder="입력하세요" data-v-1d01e602></span></div></li><li data-v-1d01e602><label class="dt" data-v-1d01e602>내용</label><div class="dd" data-v-1d01e602><span class="textarea" data-v-1d01e602><textarea class="reply" id="content" data-ui="autoheight" placeholder="입력하세요" data-v-1d01e602></textarea></span></div></li></ul><br data-v-1d01e602><br data-v-1d01e602>',3),wt={class:"btn-set"};function yt(t,e,a,n,o,r){return(0,s.wg)(),(0,s.iD)("div",_t,[(0,s._)("main",bt,[(0,s._)("h1",null,(0,Y.zw)(a.msg),1),(0,s._)("div",ft,[ht,(0,s._)("div",wt,[(0,s._)("button",{type:"button",class:"btn",onClick:e[0]||(e[0]=(...t)=>r.write&&r.write(...t))},"쓰기")])])])])}var gt={name:"WriteItem",props:{msg:String},data(){return{}},created(){},mounted(){document.querySelector("input#title").value="",document.querySelector("textarea#content").value="",document.querySelector(".header .cdt .tit").textContent="글 쓰기"},methods:{write(){console.log("쓰기");const t=document.querySelector("input#title"),e=document.querySelector("textarea#content"),a=new Date;try{const n=(0,ct.ET)((0,ct.hJ)(ut,"test"),{title:t.value,content:e.value,timestamp:a});console.log("쓰기 성공: ",n.title,n.content,n),this.$router.push("/list")}catch(n){console.error("Error adding document: ",n)}}}};const kt=(0,m.Z)(gt,[["render",yt],["__scopeId","data-v-1d01e602"]]);var St=kt;const It=t=>((0,s.dD)("data-v-15e0afa1"),t=t(),(0,s.Cn)(),t),Dt={class:"container board"},xt={class:"contents"},Ht={class:"board-write"},Vt={class:"list"},Wt=It((()=>(0,s._)("label",{class:"dt"},"제목",-1))),Ct={class:"dd"},Ut={class:"input"},zt=["value"],Ot=It((()=>(0,s._)("label",{class:"dt"},"내용",-1))),jt={class:"dd"},qt={class:"textarea"},Tt={class:"btn-set"};function Zt(t,e,a,o,r,c){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",Dt,[(0,s._)("main",xt,[(0,s._)("h1",null,(0,Y.zw)(a.msg),1),(0,s._)("div",Ht,[(0,s._)("ul",Vt,[(0,s._)("li",null,[Wt,(0,s._)("div",Ct,[(0,s._)("span",Ut,[(0,s._)("input",{type:"text",id:"title",placeholder:"입력하세요",value:r.Views.title},null,8,zt)])])]),(0,s._)("li",null,[Ot,(0,s._)("div",jt,[(0,s._)("span",qt,[(0,s.wy)((0,s._)("textarea",{class:"reply",id:"content","data-ui":"autoheight",placeholder:"입력하세요","onUpdate:modelValue":e[0]||(e[0]=t=>r.Views.content=t)},null,512),[[n.nr,r.Views.content]])])])])]),(0,s._)("div",Tt,[(0,s.Wm)(l,{class:"btn sm",to:"/list"},{default:(0,s.w5)((()=>[(0,s.Uk)("목록")])),_:1}),(0,s._)("button",{type:"button",class:"btn sm",onClick:e[1]||(e[1]=(...t)=>c.modify&&c.modify(...t))},"수정")])])])])}var Bt={name:"ModifyItem",props:{msg:String},data(){return{Views:{}}},created(){const t=(0,J.yj)(),e=t.params.id;this.read(e),this.pram=e},mounted(){document.querySelector(".header .cdt .tit").textContent="글 수정"},methods:{async read(t){const e=(0,ct.JU)(ut,"test",t);try{const t=await(0,ct.QT)(e);this.Views.title=t.data().title,this.Views.content=t.data().content,this.Views.timestamp=new Intl.DateTimeFormat("ko-KR",{dateStyle:"full",timeStyle:"medium"}).format(t.data().timestamp.toDate())}catch(a){console.log(a)}},async modify(){console.log("수정");const t=document.querySelector("input#title"),e=document.querySelector("textarea#content");try{console.log(this.pram);const a=(0,ct.JU)(ut,"test",this.pram);await(0,ct.r7)(a,{title:t.value,content:e.value}),console.log("수정 성공: "),this.$router.push("/view/"+this.pram)}catch(a){console.error("Error adding document: ",a)}}}};const Jt=(0,m.Z)(Bt,[["render",Zt],["__scopeId","data-v-15e0afa1"]]);var Nt=Jt;const Et={class:"container board"},Kt={class:"contents"},Lt={class:"board-view"},$t={class:"dt"},Ft={class:"tits"},Pt={class:"dd"},Rt={class:"cont"},Yt={class:"date"},At={class:"btn-set"};function Mt(t,e,a,n,o,r){const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",Et,[(0,s._)("main",Kt,[(0,s._)("h1",null,(0,Y.zw)(a.msg),1),(0,s._)("div",Lt,[(0,s._)("div",$t,[(0,s._)("h4",Ft,(0,Y.zw)(o.Views.title),1)]),(0,s._)("dd",Pt,[(0,s._)("div",Rt,(0,Y.zw)(o.Views.content),1),(0,s._)("p",Yt,"작성일 : "+(0,Y.zw)(o.Views.timestamp),1)]),(0,s._)("div",At,[(0,s.Wm)(c,{class:"btn sm",to:"/list"},{default:(0,s.w5)((()=>[(0,s.Uk)("목록")])),_:1}),(0,s.Wm)(c,{class:"btn sm",to:`/modify/${this.pram}`},{default:(0,s.w5)((()=>[(0,s.Uk)("수정")])),_:1},8,["to"]),(0,s._)("button",{type:"button",class:"btn sm",onClick:e[0]||(e[0]=(...t)=>r.delpost&&r.delpost(...t))},"삭제")])])])])}var Qt={name:"ViewItem",props:{msg:String},data(){return{Views:{}}},created(){console.log("view created"),console.clear();const t=(0,J.yj)(),e=t.params.id;this.view(e),this.pram=e},mounted(){document.querySelector(".header .cdt .tit").textContent="보기"},methods:{async view(t){const e=(0,ct.JU)(ut,"test",t);try{const t=await(0,ct.QT)(e);console.log(`\n          제목 : ${t.data().title} \n          내용 : ${t.data().content}\n        `),this.Views.title=t.data().title,this.Views.content=t.data().content,this.Views.timestamp=new Intl.DateTimeFormat("ko-KR",{dateStyle:"full",timeStyle:"medium"}).format(t.data().timestamp.toDate())}catch(a){console.log(a)}},async delpost(){confirm("이 글을 작세하시겠습니까?")?(await(0,ct.oe)((0,ct.JU)(ut,"test",this.pram)),console.log("삭제 성공: "),this.$router.push("/list")):console.log("안지움 ㄷㄷㄷ")}}};const Gt=(0,m.Z)(Qt,[["render",Mt],["__scopeId","data-v-00ee0f96"]]);var Xt=Gt;const te=(0,J.p7)({history:(0,J.r5)(),routes:[{path:"/",components:{default:v,Header:q,Nav:D}},{path:"/list",components:{default:vt,HeaderSub:R,Nav:D}},{path:"/write",components:{default:St,HeaderSub:R,Nav:D}},{path:"/modify/:id",components:{default:Nt,HeaderSub:R,Nav:D}},{path:"/view/:id",name:"view",components:{default:Xt,HeaderSub:R,Nav:D}}]});var ee=te;const ae=(0,n.ri)(B);ae.use(ee).mount("#app"),console.log("0000")}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,s,o){if(!n){var r=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],o=t[d][2];for(var c=!0,l=0;l<n.length;l++)(!1&o||r>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(c=!1,o<r&&(r=o));if(c){t.splice(d--,1);var i=s();void 0!==i&&(e=i)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,s,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,o,r=n[0],c=n[1],l=n[2],i=0;if(r.some((function(e){return 0!==t[e]}))){for(s in c)a.o(c,s)&&(a.m[s]=c[s]);if(l)var d=l(a)}for(e&&e(n);i<r.length;i++)o=r[i],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},n=self["webpackChunkvue_cli"]=self["webpackChunkvue_cli"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(2961)}));n=a.O(n)})();
//# sourceMappingURL=app.f7bd8f4f.js.map