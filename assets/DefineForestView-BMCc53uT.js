import{F as P}from"./@fortawesome-DKljILeY.js";import{_ as x,u,a as g,F as B}from"./index-BrBRgrAk.js";import{e as p}from"./vue-gtag-CcRHk7_p.js";import{R as b,J as i,K as l,U as s,W as c,S as y,M as v,F as w,_ as C,G as d,V as k,P as G,a5 as T,a3 as E,a4 as A,N as j}from"./@vue-AvP_IorH.js";import{O as R,M as $}from"./bootstrap-SC8BV6mU.js";import"./register-service-worker-TYP_X6yW.js";import"./vue-router-Bmx0rSJy.js";import"./vue-toastification-D0LTT1LP.js";import"./pinia-DjfVaXg1.js";import"./vue-i18n-xdeHclp_.js";import"./@intlify-Y34EtYYP.js";import"./@vueuse-C7VxYZ8Y.js";import"./@unhead-D5KD6dbc.js";import"./unhead-CJOjMzX7.js";import"./hookable-B8xFkYCm.js";import"./@popperjs-WhmJkuoZ.js";const U={name:"CardAmountEditor",components:{FontAwesomeIcon:P},props:{card:Object,forest:Object},computed:{playerName(){return this.forest.playerName},distributedScoring(){return u().distributedScoring}},methods:{addCard(){g().addCard(this.playerName,this.card.name);const e=this.$t(this.card.name,"en");p("cardAdded",{card:e})},removeCard(){g().removeCard(this.playerName,this.card.name)},paramAdd(e){e.type==="number"?g().addParam(this.playerName,this.card.name,e.name):e.type==="type"?g().addSymbolCount(this.playerName,e.symbol):e.type==="boolean"&&g().toggleParam(this.playerName,this.card.name,e.name)},paramSub(e){e.type==="number"?g().subParam(this.playerName,this.card.name,e.name):e.type==="type"&&g().subSymbolCount(this.playerName,e.symbol)}}},z={class:"row mt-2"},L={class:"fw-bold col-1"},V={key:0},K={class:"col-9 pe-0 text-nowrap overflow-x-hidden"},H=["src"],W=["src"],J={class:"ms-2"},q={class:"col-1 ps-0"},Y={class:"col-1 text-start overflow-x-hidden"},Q={key:0},X={class:"fw-bold offset-1 col-1 d-flex align-items-center"},Z={key:0},ee={key:1},te={key:2},se={key:0,class:"text-success"},ne={key:1,class:"text-danger"},re={class:"col-8 text-nowrap pe-0"},ae=["onClick"],oe=["src","alt"],ie={class:"ps-2"},le={class:"col-1 ps-0"},de=["onClick"];function ce(e,n,r,f,h,t){const m=b("font-awesome-icon");return i(),l(w,null,[s("div",z,[s("div",L,[r.card.count>0?(i(),l("span",V,c(r.card.count)+"×",1)):y("",!0)]),s("div",K,[s("button",{onClick:n[0]||(n[0]=(...o)=>t.addCard&&t.addCard(...o)),class:v(["btn-"+r.card.symbols[0],"w-100 btn btn-primary btn-sm text-start"])},[(i(!0),l(w,null,C(r.card.symbols,(o,a)=>(i(),l("img",{src:"./img/symbols/"+o+".png",height:"20",class:v({"ms-1":a>0})},null,10,H))),256)),r.card.name.startsWith("roe")?(i(),l("img",{key:0,src:"./img/symbols/"+r.card.type+".png",height:"20",class:"ms-1"},null,8,W)):y("",!0),s("span",J,c(e.$t(r.card.name)),1)],2)]),s("div",q,[s("button",{class:"ms-1 btn btn-outline-danger btn-sm",onClick:n[1]||(n[1]=(...o)=>t.removeCard&&t.removeCard(...o))},"×")]),s("div",Y,[r.card.count>0&&r.card.symbols.indexOf("butterfly")<0?(i(),l("span",Q,c(r.card.points),1)):y("",!0)])]),(i(!0),l(w,null,C(r.card.params,(o,a)=>(i(),l("div",{key:o.name},[!o.distributed||t.distributedScoring?(i(),l("div",{key:0,class:v(["mt-1 row",{"mb-3":r.card.params.length===a+1}])},[s("div",X,[r.card.count>0&&o.type==="number"?(i(),l("span",Z,c(o.value),1)):y("",!0),r.card.count>0&&o.type==="type"?(i(),l("span",ee,c(r.forest[o.symbol+"Count"]),1)):y("",!0),r.card.count>0&&o.type==="boolean"?(i(),l("span",te,[o.value?(i(),l("span",se,[d(m,{icon:"check",size:"lg"})])):(i(),l("span",ne,[d(m,{icon:"xmark",size:"lg"})]))])):y("",!0)]),s("div",re,[s("button",{onClick:N=>t.paramAdd(o),class:v(["btn-"+r.card.symbols[0],"btn btn-sm btn-primary text-start w-100"])},[o.type==="type"?(i(),l("img",{key:0,src:"./img/symbols/"+o.symbol+".png",alt:e.$t(o.symbol),height:"20"},null,8,oe)):y("",!0),s("span",ie,c(e.$t(o.name)),1)],10,ae)]),s("div",le,[o.type!=="boolean"?(i(),l("button",{key:0,class:"ms-1 btn btn-outline-danger btn-sm",onClick:N=>t.paramSub(o)}," × ",8,de)):y("",!0)])],2)):y("",!0)]))),128))],64)}const M=x(U,[["render",ce],["__scopeId","data-v-5be2f6d9"]]),S="/forestshuffle/img/points.png",me={name:"CardAmountEditorList",components:{CardAmountEditor:M},props:{cards:Array,forest:B,symbol:String,symbol2:String,heading:String},computed:{totalPoints(){return this.symbol==="butterfly"?this.forest.butterflyPoints:this.cards.map(e=>e.points).reduce((e,n)=>n+=e,0)},filteredCards(){return u().alpineExpansion?this.cards:this.cards.filter(e=>e.symbols.indexOf("alps")<0)}}},ue={key:0},ge=["src","alt"],fe=["src","alt"],ye={class:"ms-1 fs-5 flex-grow-1"},he={class:"fs-5 fw-bold"},be=s("img",{src:S,alt:"points",height:"28"},null,-1);function pe(e,n,r,f,h,t){const m=b("CardAmountEditor");return t.filteredCards.length>0?(i(),l("div",ue,[s("div",G(e.$attrs,{class:"d-flex align-items-center"}),[s("img",{src:"./img/symbols/"+r.symbol+".png",height:"24",alt:e.$t(r.heading)},null,8,ge),r.symbol2?(i(),l("img",{key:0,src:"./img/symbols/"+r.symbol2+".png",height:"24",alt:e.$t(r.heading)},null,8,fe)):y("",!0),s("div",ye,c(e.$t(r.heading)),1),s("div",he,[be,k(" "+c(t.totalPoints),1)])],16),(i(!0),l(w,null,C(t.filteredCards,o=>(i(),l("div",{key:"cae_"+o.name,class:"d-block"},[d(m,{card:o,forest:r.forest},null,8,["card","forest"])]))),128))])):y("",!0)}const _e=x(me,[["render",pe]]),ve={name:"FloatingButtons",components:{FontAwesomeIcon:P},emits:["addPlayer","toggleStandings"],computed:{playerCount(){return u().players.length}}},we={class:"wrapper"},xe={class:"d-flex justify-content-around align-items-center"},ke={class:"button-group"};function Ce(e,n,r,f,h,t){const m=b("font-awesome-icon");return i(),l("div",we,[s("div",xe,[s("div",ke,[d(m,{class:v(["btn btn-primary rounded-5 py-2 shadow",{disabled:t.playerCount>=5}]),icon:"user-plus",size:"1x",onClick:n[0]||(n[0]=o=>e.$emit("addPlayer"))},null,8,["class"]),d(m,{class:"ms-1 btn btn-primary rounded-5 py-2 shadow",icon:"list-ol",size:"1x",onClick:n[1]||(n[1]=o=>e.$emit("toggleStandings"))})])])])}const O=x(ve,[["render",Ce],["__scopeId","data-v-60ea775f"]]),Pe="/forestshuffle/img/symbols/alps.png",Se={name:"NavigationAndButtons",components:{FloatingButtons:O,FontAwesomeIcon:P},emits:["toggleStandings","startNewGame","resetPlayers"],data(){return{editing:!1}},computed:{distributedScoring(){return u().distributedScoring},alpineExpansion(){return u().alpineExpansion},duererExpansion(){return u().duererExpansion},forests(){return g().forests},players(){return u().players.map(e=>({...e,points:g().getForestByPlayerName(e.name).points}))},currentPlayer(){return u().currentPlayer},playerNumber(){return u().players.findIndex(e=>e.name===this.currentPlayer.name)+1},points(){return g().getForestByPlayerName(this.currentPlayer.name).points}},methods:{toggleDistributedScoring(){return g().toggleDistributedScoring()},closeMenu(){const e=R.getInstance(document.getElementById("navigation"));e&&e.hide()},addPlayer(){const e=this.$t("player")+" "+(this.players.length+1);g().addForest(e),u().addPlayer(e),this.selectPlayer(e),p("playerAdded",{totalPlayers:u().players.length})},selectPlayer(e){u().selectPlayer(e),this.closeMenu()},updatePlayerName(){this.editing=!1;const e=this.currentPlayer.name,n=document.getElementById("playerNameInput").value;u().updatePlayerName(e,n),g().getForestByPlayerName(e).playerName=n,p("playerNameUpdated",{name:n})},startNewGame(){this.$emit("startNewGame"),this.closeMenu()},resetPlayers(){this.$emit("resetPlayers"),this.closeMenu()},toggleAlpineExpansion(){u().toggleAlpineExpansion(),p("alpineExpansionToggled",{newState:this.alpineExpansion})},toggleDuererExpansion(){u().toggleDuererExpansion(),p("duererExpansionToggled",{newState:this.duererExpansion})},changeLanguage(e){this.$i18n.locale=e,p("languageChanged",{language:e})}}},F=e=>(E("data-v-84e085d4"),e=e(),A(),e),Ne={class:"header d-flex align-items-center py-2 px-3"},Ee={key:0,class:"d-flex justify-content-between align-items-center w-100 pe-2"},Ae={key:0},Fe={class:"ms-1 text-light cursor-pointer"},Ie={key:1,class:"d-flex"},$e=["value"],Be={class:"current-player-text fs-1 d-flex align-items-center"},Me=F(()=>s("img",{src:S,alt:"points",height:"34"},null,-1)),Oe={id:"navigation",class:"offcanvas offcanvas-start z-9999",tabindex:"-1"},De={class:"offcanvas-header"},Ge={class:"offcanvas-body"},Te={class:"list-group"},je=["onClick"],Re={class:"ms-2 flex-grow-1 text-end fw-bold text-decoration-none"},Ue=F(()=>s("img",{src:S,alt:"points",height:"28"},null,-1)),ze={class:"mt-2 mb-2 text-center"},Le={class:"d-flex w-100 justify-content-start align-items-center px-5"},Ve=["checked"],Ke={class:"d-flex mt-5 w-100 justify-content-left align-items-center px-5"},He=["checked"],We=F(()=>s("img",{src:Pe,alt:"alps",height:"24"},null,-1)),Je={class:"d-flex mt-3 w-100 justify-content-start align-items-center px-5"},qe=["checked"],Ye={class:"d-flex justify-content-center w-100 mt-5"};function Qe(e,n,r,f,h,t){const m=b("font-awesome-icon"),o=b("FloatingButtons");return i(),l(w,null,[s("div",Ne,[s("div",{class:"pe-2 mx-auto d-flex align-items-center","data-bs-toggle":"offcanvas","data-bs-target":"#navigation",onClick:n[0]||(n[0]=(...a)=>e.openMenu&&e.openMenu(...a))},[d(m,{icon:"bars",class:"text-light p-1 border border-light rounded-1"})]),t.currentPlayer?(i(),l("div",Ee,[h.editing?(i(),l("div",Ie,[s("input",{id:"playerNameInput",type:"text",value:t.currentPlayer.name,class:"form-control",onfocus:"this.select();",onclick:"this.select();",onKeydown:n[3]||(n[3]=T((...a)=>t.updatePlayerName&&t.updatePlayerName(...a),["enter"]))},null,40,$e),s("button",{class:"btn btn-outline-light btn-sm ms-1",onClick:n[4]||(n[4]=(...a)=>t.updatePlayerName&&t.updatePlayerName(...a))},"OK")])):(i(),l("div",Ae,[s("span",{class:"current-player-text fs-1",onClick:n[1]||(n[1]=a=>h.editing=!0)},c(t.currentPlayer.name),1),s("span",Fe,[d(m,{icon:"edit",size:"xs",onClick:n[2]||(n[2]=a=>h.editing=!0)})])])),s("div",Be,[Me,k(" "+c(t.points),1)])])):y("",!0)]),s("div",Oe,[s("div",De,[s("button",{type:"button",class:"btn-close text-reset",onClick:n[5]||(n[5]=(...a)=>t.closeMenu&&t.closeMenu(...a)),"aria-label":"Close"})]),s("div",Ge,[s("div",Te,[(i(!0),l(w,null,C(t.forests,(a,N)=>(i(),l("div",{class:v(["list-group-item d-flex align-items-center",{active:a.playerName===t.currentPlayer.name}]),onClick:I=>t.selectPlayer(a.playerName)},[s("span",null,c(a.playerName),1),s("span",Re,[Ue,k(" "+c(a.points),1)])],10,je))),256))]),s("div",ze,[t.players.length<5?(i(),l("button",{key:0,class:"btn btn-sm btn-primary",onClick:n[6]||(n[6]=(...a)=>t.addPlayer&&t.addPlayer(...a))},[d(m,{icon:"user-plus"})])):y("",!0)]),s("div",Le,[s("input",{class:"form-check form-check-input bg-primary",type:"checkbox",checked:t.distributedScoring,onInput:n[7]||(n[7]=(...a)=>t.toggleDistributedScoring&&t.toggleDistributedScoring(...a))},null,40,Ve),s("div",{class:"form-check-label ms-2 user-select-none text-wrap",onClick:n[8]||(n[8]=(...a)=>t.toggleDistributedScoring&&t.toggleDistributedScoring(...a))},c(e.$t("distributedScoring")),1)]),s("div",Ke,[s("input",{class:"form-check form-check-input bg-primary",type:"checkbox",checked:t.alpineExpansion,onInput:n[9]||(n[9]=(...a)=>t.toggleAlpineExpansion&&t.toggleAlpineExpansion(...a))},null,40,He),s("div",{class:"form-check-label ms-2 user-select-none",onClick:n[10]||(n[10]=(...a)=>t.toggleAlpineExpansion&&t.toggleAlpineExpansion(...a))},[We,k(c(e.$t("alpineExpansion")),1)])]),s("div",Je,[s("input",{class:"form-check form-check-input bg-primary",type:"checkbox",checked:t.duererExpansion,onInput:n[11]||(n[11]=(...a)=>t.toggleDuererExpansion&&t.toggleDuererExpansion(...a))},null,40,qe),s("div",{class:"form-check-label ms-2 user-select-none text-wrap",onClick:n[12]||(n[12]=(...a)=>t.toggleDuererExpansion&&t.toggleDuererExpansion(...a))},c(e.$t("duererExpansion")),1)]),s("div",Ye,[s("span",{class:"flag-icon flag-icon-gb-eng cursor-pointer",onClick:n[13]||(n[13]=a=>t.changeLanguage("en"))}),s("span",{class:"ms-2 flag-icon flag-icon-de cursor-pointer",onClick:n[14]||(n[14]=a=>t.changeLanguage("de"))}),s("span",{class:"ms-2 flag-icon flag-icon-fr cursor-pointer",onClick:n[15]||(n[15]=a=>t.changeLanguage("fr"))}),s("span",{class:"ms-2 flag-icon flag-icon-it cursor-pointer",onClick:n[16]||(n[16]=a=>t.changeLanguage("it"))})]),s("div",{class:"mt-5 d-block btn btn-danger cursor-pointer",onClick:n[17]||(n[17]=(...a)=>t.startNewGame&&t.startNewGame(...a))},c(e.$t("startNewGame")),1),s("div",{class:"mt-2 d-block btn btn-danger",onClick:n[18]||(n[18]=(...a)=>t.resetPlayers&&t.resetPlayers(...a))},c(e.$t("resetPlayers")),1)])]),d(o,{onAddPlayer:t.addPlayer,onToggleStandings:n[19]||(n[19]=a=>e.$emit("toggleStandings"))},null,8,["onAddPlayer"])],64)}const Xe=x(Se,[["render",Qe],["__scopeId","data-v-84e085d4"]]),Ze={name:"Ranking",components:{FontAwesomeIcon:P},emits:["toggleStandings","startNewGame","resetPlayers"],data(){return{time:new Date,interval:null}},computed:{forests(){const e=[...g().forests].sort((f,h)=>h.points-f.points);let n=1,r=9999;return e.map(f=>(f.points<r&&(n=e.findIndex(h=>h.playerName===f.playerName)+1),r=f.points,{...f,rank:n}))},playingTimeInMinutes(){return Math.trunc((this.time.getTime()-u().startTime.getTime())/1e3/60)},bgStatsData(){const e=new Date,n=[];for(let f of g().forests)n.push({startPlayer:g().forests.indexOf(f)===0,name:f.playerName,rank:f.rank,score:f.points,winner:f.rank===1,sourcePlayerId:f.playerName});const r={board:"",durationMin:this.playingTimeInMinutes,comments:"",game:{bggId:391163,highestWins:!0,name:this.$t("forestShuffle"),noPoints:!1,sourceGameId:"Forest Shuffle"},players:n,playDate:e.getUTCFullYear()+"-"+(e.getUTCMonth()+1)+"-"+e.getUTCDate()+"-"+e.getUTCHours()+":"+e.getUTCMinutes()+":"+e.getUTCSeconds(),sourceName:this.$t("meta.title"),sourcePlayId:new Date().getTime()};return encodeURIComponent(JSON.stringify(r))}},methods:{selectPlayer(e){u().selectPlayer(e),this.$emit("toggleStandings")}},mounted(){this.interval=setInterval(()=>{this.time=new Date},1e4)},beforeDestroy(){clearInterval(this.interval)}},D=e=>(E("data-v-c8623617"),e=e(),A(),e),et={class:"container"},tt={class:"list-group mt-2"},st={class:"list-group-item"},nt={class:"d-flex justify-content-between"},rt={class:"pe-2 rank"},at=["onClick"],ot={class:"d-flex align-items-center justify-content-center ps-2 text-end"},it=D(()=>s("img",{src:S,height:"20"},null,-1)),lt={class:"text-center mt-2"},dt=["href"],ct=D(()=>s("img",{src:"https://i0.wp.com/www.bgstatsapp.com/wp-content/uploads/2020/11/Post-to-BG-Stats.png?resize=133%2C34&ssl=1",alt:"",width:"133",height:"34",srcset:"https://i0.wp.com/www.bgstatsapp.com/wp-content/uploads/2020/11/Post-to-BG-Stats.png?w=548&ssl=1 548w, https://i0.wp.com/www.bgstatsapp.com/wp-content/uploads/2020/11/Post-to-BG-Stats.png?resize=300%2C77&ssl=1 300w",sizes:"(max-width: 133px) 100vw, 133px"},null,-1)),mt=[ct];function ut(e,n,r,f,h,t){return i(),l("div",et,[s("div",tt,[(i(!0),l(w,null,C(t.forests,(m,o)=>(i(),l("div",st,[s("div",nt,[s("div",rt,c(m.rank>o?`${m.rank}.`:""),1),s("div",{onClick:a=>t.selectPlayer(m.playerName),class:"flex-grow-1 fw-bold"},c(m.playerName),9,at),s("div",ot,[it,k("  "+c(m.points),1)])])]))),256))]),s("div",lt,[s("a",{href:"https://app.bgstatsapp.com/createPlay.html?data="+t.bgStatsData,target:"_bgStats"},mt,8,dt)])])}const gt=x(Ze,[["render",ut],["__scopeId","data-v-c8623617"]]),ft={name:"ForestSummaryPointsEntry",props:{count:Number,points:Number,isFas:Boolean,bgColor:String,icon:String,border:Boolean},computed:{iconUrl(){return"https://glaures.github.io/forestshuffle/img/symbols/tree.png"},bgColorClass(){return"bg-"+this.bgColor}}},yt={class:"d-flex align-items-center"},ht=["src","alt"],bt={class:"d-flex justify-content-center mt-2"},pt=s("img",{src:S,height:"22"},null,-1);function _t(e,n,r,f,h,t){const m=b("font-awesome-icon");return i(),l("div",{class:v(["d-block",{"pe-3 border-end border-light":r.border}])},[s("div",yt,[r.isFas?(i(),l("div",{key:1,class:v(t.bgColorClass+" border border-2 text-light border-light rounded justify-content-center align-items-center d-flex me-2"),style:{"min-width":"24px","min-height":"24px"}},[d(m,{icon:r.icon},null,8,["icon"])],2)):(i(),l("img",{key:0,src:t.iconUrl,alt:e.$t(r.icon),height:"24",class:"me-2"},null,8,ht)),k(" "+c(r.count),1)]),s("div",bt,[pt,k(" "+c(r.points),1)])],2)}const vt=x(ft,[["render",_t]]),wt={name:"ForestSummary",components:{ForestSummaryPointsEntry:vt,FontAwesomeIcon:P},props:{forest:B},computed:{}},xt={class:"card"},kt={class:"card-header fs-5"},Ct={class:"card-body"},Pt={class:"d-flex justify-content-around align-items-center"};function St(e,n,r,f,h,t){const m=b("ForestSummaryPointsEntry");return i(),l("div",xt,[s("div",kt,c(e.$t("summary")),1),s("div",Ct,[s("div",Pt,[d(m,{icon:"tree","is-fas":!1,points:r.forest.treePoints(),count:r.forest.treeCount(),border:!0},null,8,["points","count"]),d(m,{"bg-color":"secondary",icon:"arrow-up","is-fas":!0,points:r.forest.topPoints(),count:r.forest.topCount(),border:!0},null,8,["points","count"]),d(m,{"bg-color":"warning",icon:"arrow-down","is-fas":!0,points:r.forest.bottomPoints(),count:r.forest.bottomCount(),border:!0},null,8,["points","count"]),d(m,{"bg-color":"info",icon:"arrows-left-right","is-fas":!0,points:r.forest.sidePoints(),count:r.forest.sideCount(),border:!1},null,8,["points","count"])])])])}const Nt=x(wt,[["render",St]]),Et={components:{ForestSummary:Nt,Ranking:gt,FloatingButtons:O,NavigationAndButtons:Xe,CardAmountEditorList:_e,CardAmountEditor:M},computed:{playerName(){var e;return(e=u().currentPlayer)==null?void 0:e.name},forest(){return g().getForestByPlayerName(this.playerName)},cards(){return g().getForestByPlayerName(this.playerName).cards},trees(){return this.cards.filter(e=>e.symbols.indexOf("tree")>=0)},birds(){return this.cards.filter(e=>e.symbols.indexOf("bird")>=0&&e.position==="top")},butterflies(){return this.cards.filter(e=>e.symbols.indexOf("butterfly")>=0)},others(){return this.forest.cards.filter(e=>e.name==="redSquirrel")},plants(){return this.cards.filter(e=>e.symbols.indexOf("plant")>=0)},mushrooms(){return this.cards.filter(e=>e.symbols.indexOf("mushroom")>=0)},amphibians(){return this.cards.filter(e=>e.symbols.indexOf("amphibian")>=0)},insectsBottom(){return this.cards.filter(e=>e.symbols.indexOf("insect")>=0&&e.position==="bottom")},pawedBottom(){return this.cards.filter(e=>e.symbols.indexOf("pawedAnimal")>=0&&e.position==="bottom")},birdsSide(){return this.cards.filter(e=>e.symbols.indexOf("bird")>=0&&e.position==="side")},insectsSide(){return this.cards.filter(e=>e.symbols.indexOf("insect")>=0&&e.position==="side")},bats(){return this.cards.filter(e=>e.symbols.indexOf("bat")>=0&&!(e.hide&&e.hide(u())))},deerAndCloven(){return this.cards.filter(e=>e.symbols.indexOf("deer")>=0||e.symbols.indexOf("clovenHoofedAnimal")>=0)},pawedSide(){return this.cards.filter(e=>e.symbols.indexOf("pawedAnimal")>=0&&e.position==="side")},points(){return g().getForestByPlayerName(this.playerName).points}},methods:{setCaveCount(e){g().setCaveCount(this.playerName,e)},toggleRankingsModal(e){const n=document.getElementById("standingsModal");n&&(n.classList.contains("show")?$.getOrCreateInstance(n).hide():e||$.getOrCreateInstance(n).show())},startNewGame(){u().players.length>1&&g().forests.reduce((e,n)=>e+=n.points,0)>=50&&p("gameFinished",{playerCount:u().players.length,maxPoints:g().forests.reduce((e,n)=>e=n.points>e?n.points:e,0)}),g().reset(),u().selectPlayer(u().players[0].name),this.toggleRankingsModal(!0),p("newGameStarted")},resetPlayers(){u().resetPlayers(),u().addPlayer(`${this.$t("player")} 1`),g().reinit(),this.startNewGame(),p("playerReset")}},watch:{playerName:{handler(e){if(!e){const n=u();if(n.players.length===0){const r=this.$t("player")+" 1";n.addPlayer(r),n.selectPlayer(r),g().addForest(r)}else n.selectPlayer(n.players[0].name)}},immediate:!0}},mounted(){p("newGameStarted")}},At=e=>(E("data-v-33eac3aa"),e=e(),A(),e),Ft={key:0,class:"container mb-5"},It=At(()=>s("div",{class:"distance-keeper position-relative"},null,-1)),$t={class:"d-flex align-items-center mt-4 border-primary border-bottom"},Bt={class:"border border-2 bg-secondary text-light border-light rounded justify-content-center align-items-center d-flex me-1 position-icon"},Mt={class:"ms-2 fs-2"},Ot={class:"d-flex align-items-center mt-4 border-primary border-bottom"},Dt={class:"border border-2 bg-warning text-light border-light rounded justify-content-center align-items-center d-flex me-1 position-icon"},Gt={class:"ms-2 fs-2"},Tt={class:"d-flex align-items-center mt-4 border-primary border-bottom"},jt={class:"border border-2 bg-info text-light border-light rounded justify-content-center align-items-center d-flex me-1 position-icon"},Rt={class:"ms-2 fs-2"},Ut={class:"mt-4"},zt={class:"text-center"},Lt=["alt"],Vt={class:"text-center"},Kt=["value"],Ht={class:"px-4 mt-3"},Wt={id:"standingsModal",class:"modal fade",tabindex:"-1"},Jt={class:"modal-dialog"},qt={class:"modal-content"},Yt={class:"modal-header"},Qt={class:"fs-1"},Xt={class:"modal-body"},Zt={class:"modal-footer d-flex justify-content-between"},es={class:"flex-grow-1 text-end"};function ts(e,n,r,f,h,t){const m=b("NavigationAndButtons"),o=b("CardAmountEditorList"),a=b("font-awesome-icon"),N=b("ForestSummary"),I=b("Ranking");return i(),l(w,null,[d(m,{onToggleStandings:t.toggleRankingsModal,onStartNewGame:t.startNewGame,onResetPlayers:t.resetPlayers},null,8,["onToggleStandings","onStartNewGame","onResetPlayers"]),t.forest?(i(),l("div",Ft,[It,d(o,{cards:t.trees,forest:t.forest,symbol:"tree",heading:"trees"},null,8,["cards","forest"]),s("div",$t,[s("div",Bt,[d(a,{icon:"arrow-up"})]),s("span",Mt,c(e.$t("tops")),1)]),d(o,{class:"mt-1",cards:t.birds,forest:t.forest,symbol:"bird",heading:"birds"},null,8,["cards","forest"]),d(o,{class:"mt-4",cards:t.butterflies,forest:t.forest,symbol:"butterfly",heading:"butterflies"},null,8,["cards","forest"]),d(o,{class:"mt-4",cards:t.others,forest:t.forest,symbol:"pawedAnimal",heading:"pawedAnimals"},null,8,["cards","forest"]),s("div",Ot,[s("div",Dt,[d(a,{icon:"arrow-down"})]),s("span",Gt,c(e.$t("bottoms")),1)]),d(o,{class:"mt-1",cards:t.plants,forest:t.forest,symbol:"plant",heading:"plants"},null,8,["cards","forest"]),d(o,{class:"mt-4",cards:t.mushrooms,forest:t.forest,symbol:"mushroom",heading:"mushrooms"},null,8,["cards","forest"]),d(o,{class:"mt-4",cards:t.amphibians,forest:t.forest,symbol:"amphibian",heading:"amphibians"},null,8,["cards","forest"]),d(o,{class:"mt-4",cards:t.insectsBottom,forest:t.forest,symbol:"insect",heading:"insects"},null,8,["cards","forest"]),d(o,{class:"mt-4",cards:t.pawedBottom,forest:t.forest,symbol:"pawedAnimal",heading:"pawedAnimals"},null,8,["cards","forest"]),s("div",Tt,[s("div",jt,[d(a,{icon:"arrows-left-right"})]),s("span",Rt,c(e.$t("sides")),1)]),t.birdsSide.length>0?(i(),j(o,{key:0,class:"mt-2",cards:t.birdsSide,forest:t.forest,symbol:"bird",heading:"birds"},null,8,["cards","forest"])):y("",!0),d(o,{class:"mt-2",cards:t.insectsSide,forest:t.forest,symbol:"insect",heading:"insects"},null,8,["cards","forest"]),d(o,{class:"mt-4",cards:t.bats,forest:t.forest,symbol:"bat",heading:"bats"},null,8,["cards","forest"]),d(o,{class:"mt-4",cards:t.deerAndCloven,forest:t.forest,symbol:"deer",symbol2:"clovenHoofedAnimal",heading:"deerAndCloven"},null,8,["cards","forest"]),d(o,{class:"mt-4",cards:t.pawedSide,forest:t.forest,symbol:"pawedAnimal",heading:"pawedAnimals"},null,8,["cards","forest"]),s("div",Ut,[s("div",zt,[s("img",{src:"./img/cave.png",alt:e.$t("cave"),onClick:n[0]||(n[0]=_=>t.setCaveCount(t.forest.caveCount+1))},null,8,Lt)]),s("div",Vt,[s("input",{value:t.forest.caveCount,onInput:n[1]||(n[1]=_=>t.setCaveCount(Number(_.target.value))),type:"number",class:"form-control text-center fs-5",min:"0",onfocus:"this.select();",onclick:"this.select();"},null,40,Kt)])]),s("div",Ht,[d(N,{forest:t.forest},null,8,["forest"])])])):y("",!0),s("div",Wt,[s("div",Jt,[s("div",qt,[s("div",Yt,[s("div",Qt,c(e.$t("ranking")),1),s("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n[2]||(n[2]=_=>t.toggleRankingsModal(!0))})]),s("div",Xt,[d(I,{onToggleStandings:t.toggleRankingsModal},null,8,["onToggleStandings"])]),s("div",Zt,[s("div",null,[s("button",{class:"d-block btn btn-danger btn-sm",onClick:n[3]||(n[3]=(..._)=>t.startNewGame&&t.startNewGame(..._))},c(e.$t("startNewGame")),1),s("button",{class:"mt-1 btn btn-danger btn-sm",onClick:n[4]||(n[4]=(..._)=>t.resetPlayers&&t.resetPlayers(..._))},c(e.$t("resetPlayers")),1)]),s("div",es,[s("button",{class:"btn btn-primary",onClick:n[5]||(n[5]=_=>t.toggleRankingsModal(!0))},"OK")])])])])])],64)}const ps=x(Et,[["render",ts],["__scopeId","data-v-33eac3aa"]]);export{ps as default};