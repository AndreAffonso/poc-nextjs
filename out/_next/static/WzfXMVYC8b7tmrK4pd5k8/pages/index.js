(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+iuc":function(e,n,t){t("wgeU"),t("FlQf"),t("bBy9"),t("B9jh"),t("dL40"),t("xvv9"),t("V+O7"),e.exports=t("WEpk").Set},"/0+H":function(e,n,t){"use strict";var o=t("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(n,"__esModule",{value:!0});var a=i(t("q1tI")),r=t("lwAK");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=void 0!==n&&n,o=e.hybrid,i=void 0!==o&&o,a=e.hasQuery;return t||i&&(void 0!==a&&a)}n.isInAmpMode=l,n.useAmp=function(){return l(a.default.useContext(r.AmpStateContext))}},"0tVQ":function(e,n,t){t("FlQf"),t("VJsP"),e.exports=t("WEpk").Array.from},"2PDY":function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(e,n,t){"use strict";var o=t("ttDY"),i=t("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};i(n,"__esModule",{value:!0});var r=a(t("q1tI")),l=a(t("Xuae")),s=t("lwAK"),c=t("FYa8"),d=t("/0+H");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[r.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return e||n.push(r.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),n}function f(e,n){return"string"===typeof n||"number"===typeof n?e:n.type===r.default.Fragment?e.concat(r.default.Children.toArray(n.props.children).reduce(function(e,n){return"string"===typeof n||"number"===typeof n?e:e.concat(n)},[])):e.concat(n)}n.defaultHead=u;var p=["name","httpEquiv","charSet","itemProp"];function m(e,n){return e.reduce(function(e,n){var t=r.default.Children.toArray(n.props.children);return e.concat(t)},[]).reduce(f,[]).reverse().concat(u(n.inAmpMode)).filter(function(){var e=new o,n=new o,t=new o,i={};return function(a){if(a.key&&"number"!==typeof a.key&&0===a.key.indexOf(".$"))return!e.has(a.key)&&(e.add(a.key),!0);switch(a.type){case"title":case"base":if(n.has(a.type))return!1;n.add(a.type);break;case"meta":for(var r=0,l=p.length;r<l;r++){var s=p[r];if(a.props.hasOwnProperty(s))if("charSet"===s){if(t.has(s))return!1;t.add(s)}else{var c=a.props[s],d=i[s]||new o;if(d.has(c))return!1;d.add(c),i[s]=d}}}return!0}}()).reverse().map(function(e,n){var t=e.key||n;return r.default.cloneElement(e,{key:t})})}var h=l.default();function g(e){var n=e.children;return r.default.createElement(s.AmpStateContext.Consumer,null,function(e){return r.default.createElement(c.HeadManagerContext.Consumer,null,function(t){return r.default.createElement(h,{reduceComponentsToState:m,handleStateChange:t,inAmpMode:d.isInAmpMode(e)},n)})})}g.rewind=h.rewind,n.default=g},B9jh:function(e,n,t){"use strict";var o=t("Wu5q"),i=t("n3ko");e.exports=t("raTm")("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return o.def(i(this,"Set"),e=0===e?0:e,e)}},o)},FYa8:function(e,n,t){"use strict";var o=t("hfKm"),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};o(n,"__esModule",{value:!0});var a=i(t("q1tI"));n.HeadManagerContext=a.createContext(null)},IP1Z:function(e,n,t){"use strict";var o=t("2faE"),i=t("rr1i");e.exports=function(e,n,t){n in e?o.f(e,n,i(0,t)):e[n]=t}},PQJW:function(e,n,t){var o=t("d04V"),i=t("yLu3");e.exports=function(e){if(i(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return o(e)}},RNiq:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),i=t.n(o),a=(t("YFqc"),t("a6RD")),r=t.n(a),l=t("vOnD"),s=t("CIUX"),c=i.a.createElement,d=r()(function(){return t.e(14).then(t.bind(null,"3IPM"))},{loadableGenerated:{webpack:function(){return["3IPM"]},modules:["../PhoneModelsModal"]}}),u=l.c.section.withConfig({displayName:"ChoosePhone__Container",componentId:"sc-19patmw-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;background:",";height:100vh;color:white;"],function(e){return e.theme.colors.primaryGradient}),f=l.c.div.withConfig({displayName:"ChoosePhone__Center",componentId:"sc-19patmw-1"})(["display:flex;align-items:center;height:100%;max-width:1200px;"]),p=l.c.div.withConfig({displayName:"ChoosePhone__LeftContent",componentId:"sc-19patmw-2"})([""]),m=l.c.div.withConfig({displayName:"ChoosePhone__RightContent",componentId:"sc-19patmw-3"})([""]),h="https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/tilted-phone-08da133986db03837a97f14174a23b0edb0f873f4ee2c671f08b0c68a33c487e.png",g=l.c.h1.withConfig({displayName:"ChoosePhone__Title",componentId:"sc-19patmw-4"})(["font-size:56px;line-height:64px;font-weight:600;letter-spacing:-1px;"]),w=l.c.p.withConfig({displayName:"ChoosePhone__Subtitle",componentId:"sc-19patmw-5"})(["max-width:100%;margin-top:48px;font-size:24px;line-height:32px;letter-spacing:0;"]);var b=function(e){e.fontSize,e.fontColor,e.children;var n=Object(o.useState)(!1),t=n[0],a=n[1];return c(i.a.Fragment,null,t&&c(d,{onClose:function(){return a(!1)}}),c(u,null,c(f,null,c(p,null,c(g,null,"Seu celular segurado por quem se importa"),c(w,null,"Porque tamb\xe9m amamos relacionamentos descomplicados"),c(s.a,{onClick:function(){return a(!0)}},"VER PRE\xc7OS")),c(m,null,c("img",{alt:"Celular Coberto pela Pier",src:h})))))},x=t("8Kt/"),y=t.n(x),v=t("VZbz"),_=i.a.createElement;n.default=function(){return _(i.a.Fragment,null,_(y.a,null,_("title",null,"Pier Digital"),_("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",key:"viewport"}),_("meta",{name:"description",content:"Seu celular segurado por quem se importa"})),_(v.a,null,_(b,null)))}},TbGu:function(e,n,t){var o=t("fGSI"),i=t("PQJW"),a=t("2PDY");e.exports=function(e){return o(e)||i(e)||a()}},"V+O7":function(e,n,t){t("aPfg")("Set")},VJsP:function(e,n,t){"use strict";var o=t("2GTP"),i=t("Y7ZC"),a=t("JB68"),r=t("sNwI"),l=t("NwJ3"),s=t("tEej"),c=t("IP1Z"),d=t("fNZA");i(i.S+i.F*!t("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var n,t,i,u,f=a(e),p="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,g=void 0!==h,w=0,b=d(f);if(g&&(h=o(h,m>2?arguments[2]:void 0,2)),void 0==b||p==Array&&l(b))for(t=new p(n=s(f.length));n>w;w++)c(t,w,g?h(f[w],w):f[w]);else for(u=b.call(f),t=new p;!(i=u.next()).done;w++)c(t,w,g?r(u,h,[i.value,w],!0):i.value);return t.length=w,t}})},VKFn:function(e,n,t){t("bBy9"),t("FlQf"),e.exports=t("ldVq")},VZbz:function(e,n,t){"use strict";var o=t("q1tI"),i=t.n(o),a=(t("YFqc"),t("wOhW")),r=t("vOnD"),l=i.a.createElement,s=r.c.h1.withConfig({displayName:"Title__StyledTitle",componentId:"sc-1lxg05l-0"})(["color:",";margin:0;margin-bottom:32px;font-size:56px;line-height:60px;"],function(e){return e.theme.colors.text});var c=function(e){e.fontSize,e.fontColor;var n=e.children;return l(s,null,n)},d=i.a.createElement,u=r.c.section.withConfig({displayName:"HowOurProtectionWorks__Container",componentId:"sc-19f14ex-0"})(["display:flex;width:100%;padding:96px 120px;align-items:flex-start;",""],function(e){return e.theme.colors.text}),f=r.c.div.withConfig({displayName:"HowOurProtectionWorks__LeftSection",componentId:"sc-19f14ex-1"})(["flex-basis:50%;"]),p=r.c.div.withConfig({displayName:"HowOurProtectionWorks__RightSection",componentId:"sc-19f14ex-2"})(["flex-basis:50%;display:flex;flex-direction:column;"]),m=r.c.p.withConfig({displayName:"HowOurProtectionWorks__P",componentId:"sc-19f14ex-3"})(["font-size:20px;line-height:32px;font-weight:normal;"]),h=r.c.div.withConfig({displayName:"HowOurProtectionWorks__Content",componentId:"sc-19f14ex-4"})(["width:75%;display:flex;align-items:center;justify-content:space-between;"]),g=r.c.span.withConfig({displayName:"HowOurProtectionWorks__Emoji",componentId:"sc-19f14ex-5"})(["font-size:45px;margin-right:40px;"]),w=r.c.div.withConfig({displayName:"HowOurProtectionWorks__Line",componentId:"sc-19f14ex-6"})(["height:1px;background-color:#e8e8e8;margin-top:56px;"]),b=r.c.h6.withConfig({displayName:"HowOurProtectionWorks__SubTitle",componentId:"sc-19f14ex-7"})(["margin-top:56px;text-align:left;font-size:16px;font-weight:bold;line-height:26px;letter-spacing:0.2px;"]),x=r.c.div.withConfig({displayName:"HowOurProtectionWorks__SubSection",componentId:"sc-19f14ex-8"})(["font-size:16px;line-height:24px;font-weight:normal;color:#303042;margin-bottom:24px;"]);c.defaultProps={fontColor:"#333",fontSize:"40px"};var y=function(e){return e.fontSize,e.fontColor,e.children,d(u,null,d(f,null,d(c,null,"Prote\xe7\xe3o contra roubo e todos os tipos de furtos")),d(p,null,d(h,null,d(g,null,"\ud83d\ude01")," ",d(m,null,"Cobrimos celulares usados, comprados no exterior e sem nota-fiscal.")),d(h,null,d(g,null,"\ud83d\ude09")," ",d(m,null,"Seu pagamento \xe9 mensal e voc\xea pode cancelar quando quiser!")),d(h,null,d(g,null,"\ud83d\ude0e")," ",d(m,null,"Contrata\xe7\xe3o em minutos. Ativou o aplicativo, voc\xea j\xe1 est\xe1 segurado.")),d(w,null),d("div",null,d(b,null,"O que n\xe3o cobrimos"),d(x,null,"Danos f\xedsicos (Quebrou a tela ou danificou o aparelho)"),d(x,null,"Perdas (Perdeu seu celular ou n\xe3o sabe onde colocou)"))))},v=t("vYYK"),_=i.a.createElement,C=r.c.section.withConfig({displayName:"SeeOurBlog__Container",componentId:"sc-7j1yx6-0"})(["display:flex;width:100%;padding:96px 120px;align-items:flex-start;background:",";"],function(e){return e.theme.colors.grayBackground}),I=r.c.div.withConfig({displayName:"SeeOurBlog__LeftSection",componentId:"sc-7j1yx6-1"})(["flex-basis:50%;"]),S=r.c.div.withConfig({displayName:"SeeOurBlog__RightSection",componentId:"sc-7j1yx6-2"})(["flex-basis:50%;display:flex;flex-direction:column;"]),N=r.c.p.withConfig({displayName:"SeeOurBlog__P",componentId:"sc-7j1yx6-3"})(["font-size:20px;line-height:32px;font-weight:normal;margin:32px 0;width:70%;"]),k=r.c.a.withConfig({displayName:"SeeOurBlog__A",componentId:"sc-7j1yx6-4"})(["display:block;font-size:17px;font-weight:600;line-height:24px;color:#5b5adb;"]);var P=function(e){var n;return e.fontSize,e.fontColor,e.children,_(C,null,_(I,null,_(c,null,"Somos descomplicados"),_(N,null,"A Pier \xe9 uma empresa de tecnologia que oferece uma nova gera\xe7\xe3o de seguros, sem car\xeancia, sem franquia e sem o excesso de burocracia"),_(k,{href:"https://blog.pier.digital"},"Conhe\xe7a nosso Blog")),_(S,null,_("img",(n={alt:"Mulher fazendo Yoga com celular da Pier na m\xe3o",id:"img-yoga",src:"https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-yoga-3c5427acc02cfcf199573d357cf7e7478d7cebd8538926fecc8a4e0fa9c3ac28.svg"},Object(v.a)(n,"alt","Img yoga"),Object(v.a)(n,"data-original","https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-yoga-3c5427acc02cfcf199573d357cf7e7478d7cebd8538926fecc8a4e0fa9c3ac28.svg"),n))))},z=i.a.createElement,q=r.c.section.withConfig({displayName:"Refund__Container",componentId:"sc-12gl29c-0"})(["display:flex;width:100%;padding:96px 120px;align-items:flex-start;"]),M=r.c.div.withConfig({displayName:"Refund__LeftSection",componentId:"sc-12gl29c-1"})(["flex-basis:50%;padding-right:6%;"]),O=r.c.div.withConfig({displayName:"Refund__RightSection",componentId:"sc-12gl29c-2"})(["flex-basis:50%;display:flex;flex-direction:column;"]),A=r.c.p.withConfig({displayName:"Refund__P",componentId:"sc-12gl29c-3"})(["font-size:20px;line-height:32px;font-weight:",";width:70%;"],function(e){return e.bold?"bold":"normal"}),j=r.c.a.withConfig({displayName:"Refund__A",componentId:"sc-12gl29c-4"})(["display:block;font-size:17px;font-weight:600;line-height:24px;color:#5b5adb;"]),E=r.c.div.withConfig({displayName:"Refund__Line",componentId:"sc-12gl29c-5"})(["height:1px;background-color:#e8e8e8;margin-top:56px;"]),T=r.c.h6.withConfig({displayName:"Refund__SubTitle",componentId:"sc-12gl29c-6"})(["font-size:20px;line-height:32px;font-weight:bold;width:70%;margin:0;"]);r.c.div.withConfig({displayName:"Refund__SubSection",componentId:"sc-12gl29c-7"})(["display:flex;"]);var R=function(e){return e.fontSize,e.fontColor,e.children,z(q,null,z(M,null,z(c,null,"Receba em dinheiro na sua conta corrente"),z(A,null,"9 a cada 10 pessoas recebem o pagamento em at\xe9 5 dias \xfateis ap\xf3s o envio do B.O e bloqueio do aparelho (IMEI)")),z(O,null,z("div",null,z("div",null,z(T,null,"Aplicativo instalado"),z(A,null,"Tenha o aplicativo instalado no seu celular no momento da ocorr\xeancia")),z(T,null,"B.O em m\xe3os"),z(A,null,"Registre e nos envie o boletim de ocorr\xeancia incluindo o n\xfamero \xfanico do celular (IMEI)"),z(T,null,"Bloqueio de Aparelho"),z(A,null,"O n\xfamero de identifica\xe7\xe3o do celular (IMEI) precisa estar bloqueado na Anatel")),z(E,null),z(A,null,"Em alguns casos at\xedpicos, esse prazo pode ser maior e documenta\xe7\xf5es adicionais poder\xe3o ser solicitadas."),z(j,{href:"https://blog.pier.digital"},"Pedir reembolso")))},F=i.a.createElement,D=r.c.section.withConfig({displayName:"MemberTestimonials__Container",componentId:"sc-1f440nw-0"})(["display:flex;width:100%;padding:96px 120px;align-items:flex-start;background:",";"],function(e){return e.theme.colors.grayBackground}),B=r.c.div.withConfig({displayName:"MemberTestimonials__LeftSection",componentId:"sc-1f440nw-1"})(["flex-basis:50%;padding-right:6%;"]),W=r.c.div.withConfig({displayName:"MemberTestimonials__RightSection",componentId:"sc-1f440nw-2"})(["flex-basis:50%;display:flex;flex-direction:column;"]),Q=r.c.p.withConfig({displayName:"MemberTestimonials__P",componentId:"sc-1f440nw-3"})(["font-size:20px;line-height:32px;font-weight:",";"],function(e){return e.bold?"bold":"normal"}),H=(r.c.a.withConfig({displayName:"MemberTestimonials__A",componentId:"sc-1f440nw-4"})(["display:block;font-size:17px;font-weight:600;line-height:24px;color:#5b5adb;"]),r.c.div.withConfig({displayName:"MemberTestimonials__Line",componentId:"sc-1f440nw-5"})(["height:1px;background-color:#e8e8e8;margin-top:56px;"]),r.c.h6.withConfig({displayName:"MemberTestimonials__SubTitle",componentId:"sc-1f440nw-6"})(["font-size:20px;line-height:32px;font-weight:bold;width:70%;margin:0;"]),r.c.div.withConfig({displayName:"MemberTestimonials__SubSection",componentId:"sc-1f440nw-7"})(["display:flex;"]),r.c.h2.withConfig({displayName:"MemberTestimonials__NumberOfMembers",componentId:"sc-1f440nw-8"})(["font-size:120px;line-height:100px;letter-spacing:-1.5px;margin:0;"])),V=r.c.div.withConfig({displayName:"MemberTestimonials__Card",componentId:"sc-1f440nw-9"})(["margin-right:24px;padding:24px;min-width:100%;background-color:white;border-radius:4px;border:1px solid #e8e8e8;box-sizing:border-box;display:flex;flex-direction:column;"]),K=r.c.div.withConfig({displayName:"MemberTestimonials__Header",componentId:"sc-1f440nw-10"})([""]),L=r.c.span.withConfig({displayName:"MemberTestimonials__Name",componentId:"sc-1f440nw-11"})(["font-weight:800;"]),Y=r.c.img.withConfig({displayName:"MemberTestimonials__Img",componentId:"sc-1f440nw-12"})(["border-radius:50%;margin-right:16px;"]),J=r.c.p.withConfig({displayName:"MemberTestimonials__Text",componentId:"sc-1f440nw-13"})([""]);var G=function(e){return e.fontSize,e.fontColor,e.children,F(D,null,F(B,null,F(H,null,"+ 7500"),F(Q,null,"Pessoas seguradas em nossa comunidade \ud83c\udf89")),F(W,null,F(V,null,F(K,null,F(Y,{alt:"Cliente da pier satisfeito",src:"https://d233wbzwz46uqm.cloudfront.net/assets/testimonials/dany_prado-6018aecef1c112764c208b2e79dc95fe9f5dc4d1d3a19f0317af0f45fb0fc047.jpg"}),F(L,null,"Dany Prado")),F(J,null,"Sem d\xfavidas, a melhor seguradora do mundo! Sem burocracia, sem nada sistem\xe1tico, tudo de uma maneira bem humana e direta! O reembolso foi o mais r\xe1pido que poderia ser, e o atendimento do Jo\xe3o foi simplesmente perfeito! Fica aqui meu agradecimento a empresa e ao Jo\xe3o que me atendeu super bem! Muito MUITO obrigado!"))))},Z=i.a.createElement,U=r.c.section.withConfig({displayName:"FrequentlyAskedQuestions__Container",componentId:"atjias-0"})(["display:flex;width:100%;padding:96px 120px;align-items:flex-start;"]),X=r.c.div.withConfig({displayName:"FrequentlyAskedQuestions__LeftSection",componentId:"atjias-1"})(["flex-basis:50%;padding-right:6%;"]),$=r.c.div.withConfig({displayName:"FrequentlyAskedQuestions__RightSection",componentId:"atjias-2"})(["flex-basis:50%;display:flex;flex-direction:column;"]),ee=r.c.p.withConfig({displayName:"FrequentlyAskedQuestions__P",componentId:"atjias-3"})(["font-size:20px;line-height:32px;font-weight:",";width:70%;"],function(e){return e.bold?"bold":"normal"}),ne=r.c.a.withConfig({displayName:"FrequentlyAskedQuestions__A",componentId:"atjias-4"})(["display:block;font-size:17px;font-weight:600;line-height:24px;color:#5b5adb;"]),te=r.c.div.withConfig({displayName:"FrequentlyAskedQuestions__Line",componentId:"atjias-5"})(["height:1px;background-color:#e8e8e8;margin:28px 0;"]);r.c.h6.withConfig({displayName:"FrequentlyAskedQuestions__SubTitle",componentId:"atjias-6"})(["font-size:20px;line-height:32px;font-weight:bold;width:70%;margin:0;"]),r.c.div.withConfig({displayName:"FrequentlyAskedQuestions__SubSection",componentId:"atjias-7"})(["display:flex;"]);var oe=function(e){return e.fontSize,e.fontColor,e.children,Z(U,null,Z(X,null,Z(c,null,"D\xfavidas"),Z(ee,null,"Respondemos as perguntas mais populares")),Z($,null,Z("div",null,Z(ee,null,"Posso pagar com boleto ou d\xe9bito autom\xe1tico?"),Z(te,null),Z(ee,null,"A Pier emite algum certificado da minha prote\xe7\xe3o?"),Z(te,null),Z(ee,null,"Existe fidelidade ou prazo m\xednimo de perman\xeancia?")),Z(te,null),Z(ne,{href:"https://blog.pier.digital"},"Veja mais respostas")))},ie=i.a.createElement,ae=r.c.section.withConfig({displayName:"Media__Container",componentId:"sc-1car6pa-0"})(["display:flex;width:100%;padding:96px 20%;align-items:center;justify-content:space-between;background:",";border-top:1px solid #e8e8e8;"],function(e){return e.theme.colors.grayBackground});r.c.img.withConfig({displayName:"Media__Img",componentId:"sc-1car6pa-1"})([""]);var re=function(e){return e.fontSize,e.fontColor,e.children,ie(ae,null,ie("img",{alt:"emoji",src:"https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-press-1-cc544924e8cda8eed5890cfb6105f9af900f98c6adcd03b4318dee631b363e82.svg"}),ie("img",{alt:"emoji",src:"https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-press-2-ed6ebd2960602c80a444f857458d84d4b7fe0739ad51a040be1a90e495f7af79.svg"}),ie("img",{src:"https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-press-3-ed53e454191be33fd124b56973e37f7d9c281d9b7879acb3a36783c12a18b721.svg",alt:"emoji","data-original":"https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-press-3-ed53e454191be33fd124b56973e37f7d9c281d9b7879acb3a36783c12a18b721.svg"}),ie("img",{src:"https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-press-4-86c7e6fb6a9b41c9dbce0c39dd5dc43c4109c4af786bdb97ee1545177282919e.svg",alt:"emoji","data-original":"https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-press-4-86c7e6fb6a9b41c9dbce0c39dd5dc43c4109c4af786bdb97ee1545177282919e.svg"}))},le=i.a.createElement;n.a=function(e){var n=e.children;return le(a.a,null,n,le(y,null),le(P,null),le(R,null),le(G,null),le(oe,null),le(re,null))}},Xuae:function(e,n,t){"use strict";var o=t("/HRN"),i=t("ZDA2"),a=t("/+P4"),r=t("K47E"),l=t("WaGi"),s=t("N9n2"),c=t("TbGu"),d=t("ttDY");t("hfKm")(n,"__esModule",{value:!0});var u=t("q1tI"),f=!1;n.default=function(){var e,n=new d;function t(t){e=t.props.reduceComponentsToState(c(n),t.props),t.props.handleStateChange&&t.props.handleStateChange(e)}return function(c){function d(e){var l;return o(this,d),l=i(this,a(d).call(this,e)),f&&(n.add(r(l)),t(r(l))),l}return s(d,c),l(d,null,[{key:"rewind",value:function(){var t=e;return e=void 0,n.clear(),t}}]),l(d,[{key:"componentDidMount",value:function(){n.add(this),t(this)}},{key:"componentDidUpdate",value:function(){t(this)}},{key:"componentWillUnmount",value:function(){n.delete(this),t(this)}},{key:"render",value:function(){return null}}]),d}(u.Component)}},d04V:function(e,n,t){e.exports=t("0tVQ")},dL40:function(e,n,t){var o=t("Y7ZC");o(o.P+o.R,"Set",{toJSON:t("8iia")("Set")})},fGSI:function(e,n,t){var o=t("p0XB");e.exports=function(e){if(o(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}},ldVq:function(e,n,t){var o=t("QMMT"),i=t("UWiX")("iterator"),a=t("SBuE");e.exports=t("WEpk").isIterable=function(e){var n=Object(e);return void 0!==n[i]||"@@iterator"in n||a.hasOwnProperty(o(n))}},lwAK:function(e,n,t){"use strict";var o=t("hfKm"),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};o(n,"__esModule",{value:!0});var a=i(t("q1tI"));n.AmpStateContext=a.createContext({})},ttDY:function(e,n,t){e.exports=t("+iuc")},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])},xvv9:function(e,n,t){t("cHUd")("Set")},yLu3:function(e,n,t){e.exports=t("VKFn")}},[["vlRD",1,0]]]);