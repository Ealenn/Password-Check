(function(e){function t(t){for(var s,n,i=t[0],c=t[1],l=t[2],m=0,p=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={app:0},o=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="4678"},"49f8":function(e,t,a){var s={"./en.json":"edd4","./fr.json":"f693"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="49f8"},"61e3":function(e,t,a){},"6a5b":function(e,t,a){"use strict";var s=a("cf4e"),r=a.n(s);r.a},"8a0d":function(e,t,a){"use strict";var s=a("61e3"),r=a.n(s);r.a},"8f49":function(e,t,a){},"909f":function(e,t,a){},c593:function(e,t,a){"use strict";var s=a("8f49"),r=a.n(s);r.a},c867:function(e,t,a){},cccb:function(e,t,a){"use strict";var s=a("909f"),r=a.n(s);r.a},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{staticClass:"bg-primary text-white",attrs:{reveal:"",bordered:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"fas fa-bars"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v(" Password Check ")]),a("LanguagesButtons")],1)],1),a("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-2"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://github.com/ealenn/"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-code"}})],1),a("q-item-section",[a("q-item-label",[e._v("Github")]),a("q-item-label",{attrs:{caption:""}},[e._v("github.com/ealenn")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://twitter.com/Ealen_"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fab fa-twitter"}})],1),a("q-item-section",[a("q-item-label",[e._v("Twitter")]),a("q-item-label",{attrs:{caption:""}},[e._v("@Ealen_")])],1)],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},o=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-btn",{attrs:{flat:""},on:{click:function(t){return e.updateLocal("en")}}},[a("flag",{staticClass:"flag-text",attrs:{iso:"us"}}),e._v(" English")],1),a("q-btn",{attrs:{flat:""},on:{click:function(t){return e.updateLocal("fr")}}},[a("flag",{staticClass:"flag-text",attrs:{iso:"fr"}}),e._v(" Français")],1)],1)},i=[],c={name:"LanguagesButtons",methods:{updateLocal:function(e){this.$store.commit("EDIT_LOCAL",e)}}},l=c,u=(a("6a5b"),a("2877")),m=a("fe09"),p=Object(u["a"])(l,n,i,!1,null,null,null),d=p.exports;p.options.components=Object.assign(Object.create(p.options.components||null),p.options.components||{},{QBtn:m["b"]});var h={name:"LayoutDefault",data:function(){return{leftDrawerOpen:!1}},components:{LanguagesButtons:d}},f=h,b=Object(u["a"])(f,r,o,!1,null,null,null),y=b.exports;b.options.components=Object.assign(Object.create(b.options.components||null),b.options.components||{},{QLayout:m["l"],QHeader:m["f"],QToolbar:m["s"],QBtn:m["b"],QToolbarTitle:m["t"],QDrawer:m["e"],QList:m["n"],QItem:m["i"],QItemSection:m["k"],QIcon:m["g"],QItemLabel:m["j"],QPageContainer:m["p"]});var j=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex justify-center items-start",attrs:{padding:""}},[a("div",{staticClass:"q-pa-md",attrs:{id:"main"}},[a("div",{staticClass:"column"},[a("PasswordCard"),a("ScoreBar",{staticClass:"element"}),a("TimeCard",{staticClass:"element"}),a("StatsTable",{staticClass:"element"}),a("TimeTable",{staticClass:"element"})],1)])])},w=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"home-card",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("q-card-section",[a("q-input",{attrs:{id:"form-input-password",outlined:"",filled:"",type:e.isPwd?"password":"text",placeholder:e.$t("password.input.placeholder"),"aria-autocomplete":"false"},on:{input:e.updatePassword},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"fas fa-eye-slash":"fas fa-eye"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1)},C=[],k=a("f09f"),O=a("a370"),_={name:"PasswordCard",components:{QCard:k["a"],QCardSection:O["a"]},data:function(){return{password:"",isPwd:!0}},methods:{updatePassword:function(e){this.$store.commit("EDIT_PASSWORD",e)}}},q=_,T=(a("c593"),Object(u["a"])(q,g,C,!1,null,null,null)),S=T.exports;T.options.components=Object.assign(Object.create(T.options.components||null),T.options.components||{},{QCard:m["c"],QCardSection:m["d"],QInput:m["h"],QIcon:m["g"]});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"score-bar-card",attrs:{flat:""}},[a("q-card-section",{staticClass:"text-center"},[a("q-linear-progress",{staticClass:"q-mt-sm",attrs:{size:"25px",value:e.resume.Percent/100}},[a("div",{staticClass:"absolute-full flex flex-center"},[a("q-badge",{attrs:{color:"white","text-color":"accent",label:e.resume.Percent+"%"}})],1)]),a("strong",[e._v(e._s(e.resume.Score)+" / "+e._s(e.resume.ScoreMax))])],1)],1)},x=[],P={name:"ScoreBar",components:{QCard:k["a"],QCardSection:O["a"]},computed:{score:function(){return this.$store.state.score},resume:function(){return this.$store.state.score.Resume()}}},z=P,D=Object(u["a"])(z,M,x,!1,null,null,null),$=D.exports;D.options.components=Object.assign(Object.create(D.options.components||null),D.options.components||{},{QCard:m["c"],QCardSection:m["d"],QLinearProgress:m["m"],QBadge:m["a"]});var L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"score-bar-card",attrs:{flat:""}},[a("q-card-section",{staticClass:"text-center"},[a("p",[e._v(e._s(e.$t("timeto.time"))+" "+e._s(e.momentjs((new Date).getTime()+e.TimeOptimyze).fromNow()))]),a("p",[e._v(e._s(e.TimeTo.Seconds(e.TimeOptimyze/3600)[e.Local]))])])],1)},Q=[],A=a("c1df"),F=a.n(A),N=a("d4ec"),E=a("bee2"),R=function(){function e(){Object(N["a"])(this,e)}return Object(E["a"])(e,[{key:"Seconds",value:function(e){return e<=60?{fr:'Votre mot de passe pourrait être craqué avant même que vous n\'ayez le temps de dire "oups"',en:'Your password could be cracked before you even have seconds to say "oops"'}:e<=600?{fr:"C'est le temps qu'il faut à un escargot pour parcourir "+25*Math.floor(e/60)+" centimètres",en:"This is the seconds it takes a snail to travel "+25*Math.floor(e/60)+" censecondsters"}:e<=3600?{fr:"Le temps de regarder une vidéo de "+Math.floor(e/60)+" minutes sur internet",en:"seconds to watch a  "+Math.floor(e/60)+" minutes video on the internet"}:e<=10800?{fr:"Marchez environ "+Math.floor(e/3600*25)+" kilomètres et trouvez votre mot de passe craqué à votre retour",en:"Walk about "+Math.floor(e/3600*25)+" kilometers and find your password cracked when you return"}:e<=36e3?{fr:"Le temps de faire un voyage de "+Math.floor(e/3600*320)+"KM en TGV",en:"The seconds to make "+Math.floor(e/3600*320)+"KM in TGV"}:e<=86400?{fr:"C'est le temps pour télécharger un fichier de "+Math.floor(e/3600*24)+"Mo avec un modem 56K",en:"This is the seconds to download a "+Math.floor(e/3600*24)+"MB file with a 56K modem"}:e<=172800?{fr:"La Station Spacial Internationnal (ISS) aura fait "+Math.floor(e/5400)+" orbites autour de la terre",en:"The International Space Station (ISS) will have made "+Math.floor(e/5400)+" orbits around the earth"}:e<=604800?{fr:"C'est le temps pour télécharger "+Math.floor(e/3600*450/1e3)+" films légalement avec une connexion moyenne",en:"This is the seconds to download "+Math.floor(e/3600*450/1e3)+" movies legally with an average connection"}:e<=1209600?{fr:"C'est le temps nécessaire pour graver "+Math.floor(e/900)+" DVD",en:"This is the seconds to burn "+Math.floor(e/900)+" DVDs"}:e<=2419200?{fr:"C'est assez pour faire "+Math.floor(e/3e4*2)+" vols aller retour Paris - New York",en:"It's enough to make "+Math.floor(e/3e4*2)+" return flights Paris - New York"}:e<=14515200?{fr:"C'est le temps que met un romancier pour écrire "+Math.floor(e/25920)+" pages de son roman",en:"It is the seconds that a novelist puts to write "+Math.floor(e/25920)+" pages of his novel"}:e<=58060800?{fr:"C'est le temps nécessaire pour construire "+Math.floor(e/18408600)+" maisons",en:"This is the seconds needed to build "+Math.floor(e/18408600)+" houses"}:e<=145152e3?{fr:"Neil Armstrong et Buzz Aldrin auraient fait "+Math.floor(e/703080)+" aller retour Terre - Lune",en:"Neil Armstrong and Buzz Aldrin would have made "+Math.floor(e/703080)+" return Earth - Moon"}:e<=290304e3?{fr:"C'est le délai de construction de "+Math.abs(e/94608e3)+" RMS Titanic",en:"This is the seconds to build "+Math.abs(e/94608e3)+" RMS Titanic"}:e<=1161216e4?{fr:"C'est le temps qu'il faut pour réaliser "+Math.floor(e/378432e3)+" nouvelles fusées (de la fabrication des premiers prototypes jusqu'au premier lancement)",en:"This is the seconds it takes to make "+Math.floor(e/378432e3)+" new space rockets (from the manufacture of the first prototypes until the first launch)"}:e<=63072e7?{fr:"C'est le temps nécessaire pour envoyer des hommes faire "+Math.floor(e/22032e4)+" aller retour Terre - Mars",en:"This is the seconds it takes to send men to make "+Math.floor(e/22032e4)+" return Earth - Mars"}:{fr:"Vous pouvez trouver la réponse à la Grande Question sur la vie, l'univers et le reste sans avoir à vous préoccuper pour votre mot de passe.",en:"You can find the answer to the Great Question about life, the universe and the rest without having to worry about your password."}}}]),e}(),I={name:"TimeCard",created:function(){F.a.locale(this.$store.state.local)},data:function(){return{momentjs:F.a,TimeTo:new R}},computed:{Local:function(){return this.$store.state.local},TimeOptimyze:function(){var e=this.$store.state.operation.Comparator();return Math.floor(e[e.length-1].Time)}}},U=I,B=Object(u["a"])(U,L,Q,!1,null,null,null),G=B.exports;B.options.components=Object.assign(Object.create(B.options.components||null),B.options.components||{},{QCard:m["c"],QCardSection:m["d"]});var V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"home-card",attrs:{flat:""}},[a("q-card-section",[a("q-table",{attrs:{grid:"","hide-header":"","hide-bottom":"",data:e.tableData,columns:e.tableColumns,pagination:e.pagination,"row-key":"name"},scopedSlots:e._u([{key:"item",fn:function(t){return[a("div",{staticClass:"q-pa-xs col-xs-12 col-sm-6 col-md-3"},[a("q-card",[a("q-card-section",{staticClass:"text-center text-white",style:"background-color:"+e.ColorGenerator.GetHexByValues(t.row.number,t.row.recommendations,t.row.inverted)},[a("strong",[a("q-icon",{staticStyle:{"margin-rigth":"3px"},attrs:{name:t.row.check?"fas fa-check":"fas fa-exclamation-triangle"}}),e._v(" "+e._s(t.row.title)+" ")],1)]),a("q-separator"),a("q-card-section",{staticClass:"text-center"},[a("p",[e._v(" "+e._s(e.$t("stats.array.number"))+" / "+e._s(e.$t("stats.array.recommendations"))+" ")]),a("p",[e._v(e._s(t.row.number)+" / "+e._s(t.row.recommendations))])]),a("q-separator"),a("q-card-section",{staticClass:"text-center"},[a("p",[e._v(e._s(e.$t("stats.array.score")))]),a("strong",[e._v(e._s(t.row.score))])])],1)],1)]}}])})],1)],1)},H=[],Y=(a("99af"),function(){function e(){Object(N["a"])(this,e)}return Object(E["a"])(e,[{key:"GetHexByPercent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e<=10?t?"#4CAF50":"#DD2C00":e>10&&e<=20?t?"#8BC34A":"#FF3D00":e>20&&e<=30?t?"#00E676":"#FF6E40":e>30&&e<=40?t?"#69F0AE":"#FF6D00":e>40&&e<=50?t?"#FFD600":"#FF9100":e>50&&e<=60?t?"#FF6D00":"#FFD600":e>60&&e<=70?t?"#FF6D00":"#69F0AE":e>70&&e<=80?t?"#FF6E40":"#00E676":e>80&&e<=90?t?"#FF3D00":"#8BC34A":e>90&&t?"#DD2C00":"#4CAF50"}},{key:"GetHexByValues",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this.GetHexByPercent(Math.floor(100*e/t),a)}}]),e}()),W={name:"StatsTable",components:{QCard:k["a"],QCardSection:O["a"]},data:function(){return{ColorGenerator:new Y,pagination:{rowsPerPage:0}}},methods:{getIcon:function(e){return e?"icon checkmark":"icon close"}},computed:{score:function(){return this.$store.state.score},resume:function(){return this.$store.state.score.Resume()},stats:function(){return this.$store.state.stats},tableColumns:function(){return[{label:this.$t("stats.array.title"),name:"title",field:"title",align:"left"},{label:this.$t("stats.array.number"),name:"number",field:"number",sortable:!0},{label:this.$t("stats.array.recommendations"),name:"recommendations",field:"recommendations"},{label:this.$t("stats.array.score"),name:"score",field:"score"},{label:"",name:"inverted",field:"inverted"}]},tableData:function(){return[{title:this.$t("stats.array.character"),number:this.score.Characters().Total,recommendations:this.score.Characters().Recommend,score:"".concat(this.score.Characters().Score,"/").concat(this.score.Characters().ScoreMax),check:this.score.Characters().Check,inverted:!1},{title:this.$t("stats.array.unique"),number:this.score.Unique().Total,recommendations:this.score.Unique().Recommend,score:"".concat(this.score.Unique().Score,"/").concat(this.score.Unique().ScoreMax),check:this.score.Unique().Check,inverted:!1},{title:this.$t("stats.array.repeat"),number:this.score.Repeat().Total,recommendations:this.score.Repeat().Recommend,score:"".concat(this.score.Repeat().Score,"/").concat(this.score.Repeat().ScoreMax),check:this.score.Repeat().Check,inverted:!0},{title:this.$t("stats.array.upper"),number:this.score.UpperCase().Total,recommendations:this.score.UpperCase().Recommend,score:"".concat(this.score.UpperCase().Score,"/").concat(this.score.UpperCase().ScoreMax),check:this.score.UpperCase().Check,inverted:!1},{title:this.$t("stats.array.lower"),number:this.score.LowerCase().Total,recommendations:this.score.LowerCase().Recommend,score:"".concat(this.score.LowerCase().Score,"/").concat(this.score.LowerCase().ScoreMax),check:this.score.LowerCase().Check,inverted:!1},{title:this.$t("stats.array.digit"),number:this.score.Number().Total,recommendations:this.score.Number().Recommend,score:"".concat(this.score.Number().Score,"/").concat(this.score.Number().ScoreMax),check:this.score.Number().Check,inverted:!1},{title:this.$t("stats.array.special"),number:this.score.SpecialChar().Total,recommendations:this.score.SpecialChar().Recommend,score:"".concat(this.score.SpecialChar().Score,"/").concat(this.score.SpecialChar().ScoreMax),check:this.score.SpecialChar().Check,inverted:!1}]}}},J=W,K=(a("8a0d"),Object(u["a"])(J,V,H,!1,null,null,null)),Z=K.exports;K.options.components=Object.assign(Object.create(K.options.components||null),K.options.components||{},{QCard:m["c"],QCardSection:m["d"],QTable:m["r"],QIcon:m["g"],QSeparator:m["q"]});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"score-bar-card",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("time.title")))]),a("div",{staticClass:"text-subtitle2"},[e._v(e._s(e.$t("time.wikipedia")))])]),a("q-card-section",[a("q-list",[a("q-item",[a("q-item-section",[a("q-item-label",[e._v(e._s(e.humanizejs.numberFormat(e.possibilityAndOperations.Possibility,0,","," "))+" "+e._s(e.$t("time.bycharacters")))]),a("q-item-label",{attrs:{caption:"",lines:"2"}},[e._v(e._s(e.possibilityAndOperations.PossibilityAscii))])],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",[e._v(e._s(e.$t("time.maximumoperations")))]),a("q-item-label",{attrs:{caption:"",lines:"2"}},[e._v(e._s(e.humanizejs.numberFormat(e.possibilityAndOperations.Operations,0,","," ")))])],1)],1)],1)],1),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[a("q-table",{attrs:{flat:"","hide-bottom":"",data:e.tableData,columns:e.tableColumns,pagination:e.pagination,"row-key":"title"}})],1)],1)},ee=[],te=(a("4160"),a("159b"),a("3e6a")),ae=a.n(te),se={name:"TimeTable",created:function(){F.a.locale(this.$store.state.local)},components:{QCard:k["a"],QCardSection:O["a"]},data:function(){return{momentjs:F.a,humanizejs:ae.a,pagination:{rowsPerPage:0}}},computed:{Local:function(){return this.$store.state.local},tableColumns:function(){return[{label:this.$t("time.array.title"),name:"title",field:"title"},{label:this.$t("time.array.date"),name:"date",field:"date"},{label:this.$t("time.array.clock"),name:"clock",field:"clock"},{label:this.$t("time.array.parallelism"),name:"parallelism",field:"parallelism"},{label:this.$t("time.array.operations"),name:"operations",field:"operations"},{label:this.$t("time.array.time"),name:"time",field:"time"},{label:this.$t("time.array.optimizedtime"),name:"optimizedtime",field:"optimizedtime"}]},possibilityAndOperations:function(){return this.$store.state.operation.PossibilityAndOperations()},tableData:function(){var e=this,t=this.$store.state.operation.Comparator(),a=[];return t.forEach((function(t){a.push({title:t.Title,date:t.Date,clock:t.Cpu,parallelism:t.Para,operations:e.humanizejs.numberFormat(t.Unit,0,","," "),time:e.momentjs((new Date).getTime()+t.Time).fromNow(),optimizedtime:e.momentjs((new Date).getTime()+t.TimeOptimyze).fromNow()})})),a}}},re=se,oe=Object(u["a"])(re,X,ee,!1,null,null,null),ne=oe.exports;oe.options.components=Object.assign(Object.create(oe.options.components||null),oe.options.components||{},{QCard:m["c"],QCardSection:m["d"],QList:m["n"],QItem:m["i"],QItemSection:m["k"],QItemLabel:m["j"],QSeparator:m["q"],QTable:m["r"]});var ie={name:"Home",components:{PasswordCard:S,ScoreBar:$,TimeCard:G,StatsTable:Z,TimeTable:ne}},ce=ie,le=(a("cccb"),Object(u["a"])(ce,v,w,!1,null,null,null)),ue=le.exports;le.options.components=Object.assign(Object.create(le.options.components||null),le.options.components||{},{QPage:m["o"]}),s["a"].use(j["a"]);var me=[{path:"/",name:"Home",component:ue}],pe=new j["a"]({mode:"history",base:"/",routes:me}),de=pe,he=a("2f62"),fe=(a("d3b7"),a("ac1f"),a("466d"),a("ddb0"),a("a925"));function be(){var e=a("49f8"),t={};return e.keys().forEach((function(a){var s=a.match(/([A-Za-z0-9-_]+)\./i);if(s&&s.length>1){var r=s[1];t[r]=e(a)}})),t}s["a"].use(fe["a"]);var ye=new fe["a"]({locale:"en",fallbackLocale:"en",messages:be()}),je=(a("b64b"),a("38cf"),a("5319"),function(){function e(t){Object(N["a"])(this,e),this._element="",this._repeat=0,this._element=t}return Object(E["a"])(e,[{key:"element",get:function(){return this._element},set:function(e){this._element=e}},{key:"repeat",get:function(){return this._repeat},set:function(e){this._repeat=e}}]),e}()),ve=function(){function e(t){Object(N["a"])(this,e),this.password=t}return Object(E["a"])(e,[{key:"Total",value:function(){return this.password.length}},{key:"LowerCase",value:function(){return this.password.length-this.password.replace(/[a-z]/g,"").length}},{key:"UpperCase",value:function(){return this.password.length-this.password.replace(/[A-Z]/g,"").length}},{key:"Number",value:function(){return this.password.length-this.password.replace(/[0-9]/g,"").length}},{key:"SpecialChar",value:function(){return this.password.length-this.password.replace(/[@#$%^&*()_+\-=/[\]{};':"\\|,.`£¥€!éèàç°<>?]/g,"").length}},{key:"Repeat",value:function(){for(var e={},t=this.password.toLocaleLowerCase(),a=0;a<t.length;a++){var s=t.charAt(a),r=btoa(s);void 0===e[r]?e[r]=new je(s):e[r].repeat++}var o=new Array;return Object.keys(e).forEach((function(t){o.push(e[t])})),o}}]),e}(),we=function e(t,a,s,r,o){Object(N["a"])(this,e),this.Total=t,this.Recommend=a,this.Check=s,this.Score=r,this.ScoreMax=o},ge=function e(t,a,s){Object(N["a"])(this,e),this.Score=t,this.ScoreMax=a,this.Percent=s},Ce=function(){function e(t){Object(N["a"])(this,e),this._stats=t}return Object(E["a"])(e,[{key:"Resume",value:function(){var e=new Array;e.push(this.Characters()),e.push(this.Repeat()),e.push(this.Unique()),e.push(this.Number()),e.push(this.UpperCase()),e.push(this.LowerCase()),e.push(this.SpecialChar());var t=0,a=0;return e.forEach((function(e){t+=e.Score,a+=e.ScoreMax})),new ge(t,a,Math.floor(100*t/a))}},{key:"Characters",value:function(){var e=this._stats.Total();return new we(e,12,e>=12,e<12?e/5:3,3)}},{key:"Repeat",value:function(){var e=this._stats.Repeat(),t=0;e.forEach((function(e){e.repeat>t&&(t=e.repeat)}));var a=0;return a=t>0?t>5?0:5-t:5,new we(t,0,0===t,a,5)}},{key:"Unique",value:function(){var e=this._stats.Repeat(),t=e.length;return new we(t,12,t>=12,t<12?t/4:3,3)}},{key:"Number",value:function(){var e=this._stats.Number();return new we(e,2,e>=2,e<2?2*e:6,6)}},{key:"UpperCase",value:function(){var e=this._stats.UpperCase();return new we(e,2,e>=2,e<2?2*e:6,6)}},{key:"LowerCase",value:function(){var e=this._stats.LowerCase();return new we(e,2,e>=2,e<2?2*e:6,6)}},{key:"SpecialChar",value:function(){var e=this._stats.SpecialChar();return new we(e,2,e>=2,e<=2?2*e:6,6)}}]),e}(),ke=26,Oe=26,_e=10,qe=40,Te=function(){function e(t){Object(N["a"])(this,e),this.Operation=0,this.OperationOptim=0,this.Possibility=0,this.PossibilityAscii="",t.LowerCase()>0&&(this.Possibility+=ke,this.PossibilityAscii+="abcdefghijklmnopqrstuvwxyz"),t.UpperCase()>0&&(this.Possibility+=Oe,this.PossibilityAscii+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),t.SpecialChar()>0&&(this.Possibility+=qe,this.PossibilityAscii+='!@#$%^&*()-_+=~`[]{}|:;"<>,.?'),t.Number()>0&&(this.Possibility+=_e,this.PossibilityAscii+="0123456789"),this.OperationOptim=Math.pow(this.Possibility,t.Repeat().length),this.Operation=Math.pow(this.Possibility,t.Total())}return Object(E["a"])(e,[{key:"GetDate",value:function(e,t,a){var s=e/(t*Math.pow(10,6))/a+10;return s<=864e12?s:864e12}},{key:"PossibilityAndOperations",value:function(){return{Possibility:this.Possibility,PossibilityAscii:this.PossibilityAscii,Operations:this.Operation,OperationsOptim:this.OperationOptim}}},{key:"Comparator",value:function(){return[{Title:"Mac-Book-Pro",Date:"2017",Cpu:4,Unit:4*Math.pow(10,6),Para:4,TimeOptimyze:this.GetDate(this.OperationOptim,4,3),Time:this.GetDate(this.Operation,4,3)},{Title:"Web-Server",Date:"2017",Cpu:3.5,Unit:3.5*Math.pow(10,6),Para:8,TimeOptimyze:this.GetDate(this.OperationOptim,3.5,8),Time:this.GetDate(this.Operation,3.5,8)},{Title:"Tianhe-2",Date:"2013",Cpu:1.3,Unit:1.3*Math.pow(10,6),Para:312e4,TimeOptimyze:this.GetDate(this.OperationOptim,1.3,312e4),Time:this.GetDate(this.Operation,1.3,312e4)}]}}]),e}();s["a"].use(he["a"]);var Se="en",Me="",xe=new ve(Me),Pe=new Ce(xe),ze=new Te(xe),De=new he["a"].Store({state:{local:Se,password:Me,stats:xe,score:Pe,operation:ze},mutations:{EDIT_LOCAL:function(e,t){ye.locale=t,F.a.locale(t),e.local=t},EDIT_PASSWORD:function(e,t){e.password=t,e.stats=new ve(t),e.score=new Ce(e.stats),e.operation=new Te(e.stats)}},actions:{},modules:{}}),$e=(a("c867"),a("b3f7")),Le=(a("7d6e"),a("573e"),a("b05d"));s["a"].use(Le["a"],{config:{},components:{},directives:{},plugins:{},iconSet:$e["a"]});var Qe=a("d61f");s["a"].use(Qe["a"]),s["a"].config.productionTip=!1,new s["a"]({router:de,store:De,i18n:ye,render:function(e){return e(y)}}).$mount("#app")},cf4e:function(e,t,a){},edd4:function(e){e.exports=JSON.parse('{"password.input.placeholder":"Password","timeto.time":"Your password will be cracked","stats.modal.title":"Number of repetitions","stats.modal.row.character":"Character","stats.modal.row.repeat":"Repetition","stats.modal.row.risk":"Risk Assessment","stats.modal.close":"Close","stats.array.title":"Title","stats.array.number":"Number","stats.array.recommendations":"Recommandations","stats.array.score":"Score","stats.array.character":"Number of characters","stats.array.unique":"Number of unique characters","stats.array.repeat":"Number of repetitions","stats.array.more":"More information","stats.array.upper":"Capital letters","stats.array.lower":"Lowercase","stats.array.digit":"Digit","stats.array.special":"Special characters","stats.array.dangerous":"Dangerous keywords","time.title":"Calculate how long your password can be cracked via bruteforce","time.wikipedia":"In cryptography, a brute-force attack consists of an attacker trying many passwords or passphrases with the hope of eventually guessing correctly. The attacker systematically checks all possible passwords and passphrases until the correct one is found.","time.emptypassword.title":"You must enter a password to calculate:","time.emptypassword.line1":"The possibilities by characters","time.emptypassword.line2":"Maximum operations before finding the password","time.emptypassword.line3":"The calculation time","time.warning.title":"Warning: Your password is vulnerable","time.warning.line1":"Your password contains keywords that are available in password dictionaries.","time.warning.line2":"Do not take these calculation times into account.","time.warning.line3":"It is therefore much quicker to discover.","time.bycharacters":"Possibilities by characters","time.maximumoperations":"Maximum operations to find the password","time.array.title":"Title","time.array.date":"Date","time.array.clock":"Clock Frequency","time.array.parallelism":"Parallelism","time.array.operations":"Operations /s","time.array.time":"Time","time.array.optimizedtime":"Optimized Time"}')},f693:function(e){e.exports=JSON.parse('{"password.input.placeholder":"Mot de passe","timeto.time":"Votre mot de passe sera craqué","stats.modal.title":"Nombre de répétitions","stats.modal.row.character":"Caractère","stats.modal.row.repeat":"Répétition","stats.modal.row.risk":"Évaluation des risques","stats.modal.close":"Fermer","stats.array.title":"Titre","stats.array.number":"Nombre","stats.array.recommendations":"Recommandations","stats.array.score":"Score","stats.array.character":"Nombre de caractères","stats.array.unique":"Nombre de caractères unique","stats.array.repeat":"Nombre de répétitions","stats.array.more":"Plus d\'informations","stats.array.upper":"Lettres majuscules","stats.array.lower":"Lettres minuscules","stats.array.digit":"Chiffre","stats.array.special":"Caractères spéciaux","stats.array.dangerous":"Mots clés dangereux","time.title":"Calculez en combien de temps peut être cracké votre mot de passe via bruteforce ","time.wikipedia":"L\'attaque par force brute est une méthode utilisée en cryptanalyse pour trouver un mot de passe ou une clé. Il s\'agit de tester, une à une, toutes les combinaisons possibles.","time.emptypassword.title":"Vous devez saisir un mot de passe pour calculer :","time.emptypassword.line1":"Les possibilités par caractères","time.emptypassword.line2":"Les opérations maximum avant de trouver le mot de passe","time.emptypassword.line3":"Le temps de calcule","time.warning.title":"Attention : Votre mot de passe est vulnérable","time.warning.line1":"Votre mot de passe comporte des mots clefs disponible dans des dictionnaire de mot de passe.","time.warning.line2":"Ne prenez pas en compte ces temps de calcule.","time.warning.line3":"Il est donc beaucoup plus rapide à découvrir.","time.bycharacters":"Possibilités par caractères","time.maximumoperations":"Opérations maximum pour trouver le mot de passe","time.array.title":"Titre","time.array.date":"Date","time.array.clock":"Fréquence d\'horloge","time.array.parallelism":"Parallélisme","time.array.operations":"Opérations /s","time.array.time":"Temps","time.array.optimizedtime":"Temps optimisé"}')}});
//# sourceMappingURL=app.1dac42ee.js.map