(this["webpackJsonpmega-hack"]=this["webpackJsonpmega-hack"]||[]).push([[0],{125:function(e,a,t){e.exports=t(142)},130:function(e,a,t){},131:function(e,a,t){},141:function(e,a,t){},142:function(e,a,t){"use strict";t.r(a);var n,r=t(0),l=t.n(r),c=t(16),o=t.n(c),i=(t(130),t(21)),m=t(29),s=t(22),u=t(23),d=t(20),p={scene1:function(){var e=new d.f,a=new d.d(75,window.innerWidth/window.innerHeight,.1,1e3),t=new d.h;t.setSize(window.innerWidth-200,window.innerHeight-200),document.getElementById("canvas").appendChild(t.domElement);var n=new d.a(1,1,1),r=new d.c({color:65280}),l=new d.b(n,r);e.add(l),a.position.z=5;!function n(){requestAnimationFrame(n),l.rotation.x+=.01,l.rotation.y+=.01,t.render(e,a)}()},scene2:function(){var e,a,t;function n(a){a.preventDefault(),e.position.y-=.005*a.deltaY,console.log(e.position.y),e.position.clampScalar(0,10)}function r(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}!function(){(e=new d.d(70,window.innerWidth/window.innerHeight,.01,10)).position.set(0,5,2),a=new d.f;for(var l=new d.e(.5,.5),c=new d.c({map:(new d.g).load("/mega-hack-3/loliWisky.jpg")}),o=0;o<=10;o++){var i=new d.b(l,c);i.position.y=o,a.add(i)}(t=new d.h({antialias:!0})).setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),document.getElementById("canvas").appendChild(t.domElement),t.setClearColor(4286945),window.addEventListener("wheel",n,!1),window.addEventListener("resize",r,!1)}(),function n(){requestAnimationFrame(n),t.render(a,e)}()}},E=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){p.scene2()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"webgl"}),l.a.createElement("div",{id:"canvas"}),l.a.createElement("div",{id:"container"}))}}]),t}(r.Component),h=t(40),g=t(17),f=(t(131),t(210)),b=t(207),v=t(175),y=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={email:"",password:"",auth:0},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleChange1=n.handleChange1.bind(Object(h.a)(n)),n}return Object(m.a)(t,[{key:"handleChange",value:function(e){var a=e.target;this.setState({email:a.value})}},{key:"handleChange1",value:function(e){var a=e.target;this.setState({password:a.value})}},{key:"handleSubmit",value:function(e){console.log(this.state.email,this.state.password),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"top"},l.a.createElement("div",{className:"letra"},"AIr Toon"),l.a.createElement("div",null,l.a.createElement("h2",{style:{color:"#48d1cc",WebkitTextStroke:"2px black"}},"Explore uma aventura em cada CLICK"))),l.a.createElement("div",{className:"col meio"},l.a.createElement(f.a,{style:{backgroundColor:"#4682B4"},className:"alerta"},l.a.createElement(b.a,{onSubmit:this.handleSubmit},l.a.createElement(b.a.Group,{controlId:"formBasicEmail"},l.a.createElement(b.a.Label,null,"Email"),l.a.createElement(b.a.Control,{type:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(b.a.Group,{controlId:"formBasicPassword"},l.a.createElement(b.a.Label,null,"Senha"),l.a.createElement(b.a.Control,{type:"password",value:this.state.password,placeholder:"Password",onChange:this.handleChange1})),l.a.createElement(g.b,{to:"/mega-hack-3/dashboard/"},l.a.createElement(v.a,{variant:"dark"},"Logar")),l.a.createElement(g.b,{to:"/mega-hack-3/anima"},"Pass Rapido")))),l.a.createElement("div",{className:"bottom"}))}}]),t}(r.Component),x=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement(g.b,{to:"/mega-hack-3/login"},"Login page"),l.a.createElement(g.b,{to:"/mega-hack-3/dashboard/Conquista"},"Card Page"))}}]),t}(r.Component),w=(t(138),function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f.a,{variant:"danger"},l.a.createElement("img",{src:"/mega-hack-3/pandinha.gif",alt:""}),l.a.createElement(f.a.Heading,null,"Opa Houve um Erro"),l.a.createElement("p",null,"Essa p\xe1gina N\xe3o existe."),l.a.createElement(g.b,{to:"/mega-hack-3/"},"Clique Aqui para voltar")))}}]),t}(r.Component)),k=t(36),j=t.n(k),C=t(46),O=t(32),N=t(15),S=t(3),B=t(185),W=t(105),I=t(187),P=t(208),H=t(209),L=t(188),A=t(189),M=t(197),D=t(52),q=t(184),F=t(193),z=t(196),T=t(190),R=t(212),G=t(66),Y=t.n(G),_=t(68),J=t.n(_),K=t(67),V=t.n(K),X=t(198),$=t(199),Q=t(200),U=t(71),Z=t.n(U),ee=t(72),ae=t.n(ee),te=t(73),ne=t.n(te),re=t(70),le=t.n(re),ce=t(69),oe=t.n(ce),ie=t(48),me=t.n(ie),se=t(194),ue=t(195),de=t(211),pe=t(8),Ee=t(176),he=t(177),ge=t(179),fe=t(181),be=t(180),ve=Object(Ee.a)({root:{maxWidth:180},text:{display:"fixed"},color:(n={display:"flex",border:"1px solid black",padding:"1px",color:"#4169E1"},Object(pe.a)(n,"display","inline"),Object(pe.a)(n,"borderRadius","5px"),Object(pe.a)(n,"width","min-content"),Object(pe.a)(n,"flexFlow","row wrap"),Object(pe.a)(n,"margin","2px"),Object(pe.a)(n,"flexWrap","wrap"),Object(pe.a)(n,"justifyContent","space-between"),n)});function ye(e){var a=ve();return l.a.createElement(he.a,{className:a.root,id:e.id},l.a.createElement(ge.a,null,l.a.createElement(be.a,{component:"img",alt:e.alt,height:"170px",image:e.image,title:e.alt}),l.a.createElement(fe.a,null,l.a.createElement(D.a,{variant:"body2",color:"textSecondary",component:"p"},e.tags.map((function(e){return l.a.createElement("span",{className:a.color},e)}))),l.a.createElement(D.a,{variant:"body2",color:"textSecondary",component:"h6"},e.name),l.a.createElement(D.a,{variant:"body2",color:"textSecondary",component:"p"},"by ",e.autor),l.a.createElement(D.a,{variant:"body2",color:"textSecondary",component:"p"},"Avalia\xe7\xe3o: ",e.nota))))}var xe=t(182),we=t(183),ke=t(78),je=Object(Ee.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",flexDirection:"row"},gridList:{width:1e3},icon:{color:"rgba(255, 255, 255, 0.54)"}}})),Ce=[{img:"https://www.sbs.com.au/theboat/images/fb-image.jpg",tipo:"Hist\xf3ria Animada",author:"2 Livros"},{img:"https://img.ibxk.com.br/2014/05/19/19185013492726.jpg?w=1120&h=420&mode=crop&scale=both",tipo:"PDF",author:"10 Livros"},{img:"https://icons.iconarchive.com/icons/carlosjj/microsoft-office-2013/256/Word-icon.png",tipo:"WORD",author:"14 Livros"},{img:"https://www.oficinadanet.com.br/imagens/post/25102/www_750x469_5c87bcdb85fab.jpg",tipo:"Web",author:"10 Livros"}];function Oe(){var e=je();return l.a.createElement("div",{className:e.root},l.a.createElement(xe.a,{cellHeight:180,className:e.gridList},l.a.createElement(we.a,{key:"Subheader",cols:2,style:{height:"auto"}},l.a.createElement(q.a,{style:{marginBottom:"30px"}})),Ce.map((function(e){return l.a.createElement(Se,{image:e.img,title:e.title,autor:e.tipo})}))),l.a.createElement(q.a,{style:{margin:"100px"}}))}var Ne=Object(Ee.a)((function(e){return{root:{flex:1},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}}}));function Se(e){var a=Ne();return l.a.createElement("div",{className:a.root},l.a.createElement(W.a,{className:a.paper},l.a.createElement(B.a,{container:!0,spacing:2},l.a.createElement(B.a,{item:!0},l.a.createElement(ke.a,{className:a.image},l.a.createElement("img",{className:a.img,alt:"complex",src:e.image}))),l.a.createElement(B.a,{item:!0,xs:12,sm:!0,container:!0},l.a.createElement(B.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},l.a.createElement(B.a,{item:!0,xs:!0},l.a.createElement(D.a,{gutterBottom:!0,variant:"subtitle1"},e.title),l.a.createElement(D.a,{variant:"body2",gutterBottom:!0},e.tipo)))))))}var Be=t(192),We=t(191),Ie=t(186);function Pe(){return l.a.createElement(D.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",l.a.createElement(Ie.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var He=Object(Ee.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),Le=[1,2,3,4,5,6,7,8,9],Ae=1;function Me(){var e=He();return l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,null),l.a.createElement(L.a,{position:"relative"},l.a.createElement(A.a,null,l.a.createElement(me.a,{className:e.icon}),l.a.createElement(D.a,{variant:"h6",color:"inherit",noWrap:!0},"Cole\xe7\xe3o de Cartas"))),l.a.createElement("main",null,l.a.createElement("div",{className:e.heroContent},l.a.createElement(T.a,{maxWidth:"sm"},l.a.createElement(D.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Cole\xe7\xe3o"),l.a.createElement(D.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Suas cartas desbloqueada at\xe9 o momento. Continue lendo e desbloqueando mais conquistas."))),l.a.createElement(T.a,{className:e.cardGrid,maxWidth:"md"},l.a.createElement(B.a,{container:!0,spacing:4},Le.map((function(a){return l.a.createElement(B.a,{item:!0,key:a,xs:12,sm:6,md:4},l.a.createElement(he.a,{className:e.card},l.a.createElement(be.a,{className:e.cardMedia,image:"https://servercards.herokuapp.com/user-api/img/cards/"+(++Ae-10)+"/",title:"Image title"}),l.a.createElement(fe.a,{className:e.cardContent},l.a.createElement(D.a,{gutterBottom:!0,variant:"h5",component:"h2"},"nome da carta"),l.a.createElement(D.a,null,"Depending on your situation, you might need to add certain headers to your request. With axios, this task is quite easy. All we need to do is to add a headers section to the config object:")),l.a.createElement("center",null,l.a.createElement(We.a,null,l.a.createElement(Be.a,{size:"small",color:"primary"},"View"),l.a.createElement(Be.a,{size:"small",color:"primary"},"Edit")))))}))))),l.a.createElement("footer",{className:e.footer},l.a.createElement(D.a,{variant:"h6",align:"center",gutterBottom:!0},"Footer"),l.a.createElement(D.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Something here to give the footer a purpose!"),l.a.createElement(Pe,null)))}var De=Object(Ee.a)((function(e){return{image:{maxWidth:250}}}));function qe(){var e=l.a.useState([]),a=Object(O.a)(e,2),t=a[0],n=a[1],r=De();function c(){try{return window.location.href.split("#")[1]}catch(e){return 0}}function c(){return window.location.href.split("#")[1]}return l.a.useEffect((function(){function e(){return(e=Object(C.a)(j.a.mark((function e(){var a,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://back-airtoon.herokuapp.com/books/".concat(c()));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,n(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),l.a.createElement(T.a,{maxWidth:"lg"},l.a.createElement(B.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:2},l.a.createElement(B.a,{item:!0,xs:7,md:7,lg:9},l.a.createElement(W.a,null,l.a.createElement("img",{className:r.image,src:t.image,alt:""}))),l.a.createElement(B.a,{item:!0,xs:7,md:4,lg:9},l.a.createElement(W.a,{style:{display:"relative",textAlign:"left",margin:"20px",padding:"10px"}},l.a.createElement(W.a,{style:{margin:"20px"}},l.a.createElement("strong",null,"T\xedtulo:"),"  ",t.nome),l.a.createElement(W.a,{style:{margin:"20px"}},l.a.createElement("strong",null,"Formato:"),"  ",t.tipo),l.a.createElement(W.a,{style:{margin:"20px"}},l.a.createElement("strong",null," P\xe1ginas:")," ",t.paginas))),l.a.createElement(B.a,{item:!0,xs:7,md:12,lg:9},l.a.createElement(W.a,{style:{display:"relative",textAlign:"left",marginBottom:"20px"}},"Resumo: ",t.desc)),l.a.createElement(B.a,{item:!0,xs:7,md:6,lg:9},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(Be.a,{variant:"contained",color:"secondary",href:"online#".concat(c())},"Ler Online"),l.a.createElement(Be.a,{variant:"contained",color:"secondary",href:t.compra},"Adquirir C\xf3pia F\xedsica")))))}var Fe=Object(Ee.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:25},toolbarIcon:{display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:ze,width:"calc(100% - ".concat(ze,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:ze,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(pe.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto",width:"100%",wordWrap:"nowrap"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4),color:"black",backgroundImage:"url('https://i.pinimg.com/originals/78/df/8a/78df8a1b2d0f5dc55db7daff161f0f83.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"max-heiht"},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:350},avatar:{height:"10vh",width:"10vh",border:"20px",borderColor:"black"},localavatar:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"25px"},topMenuSelect:{backgroundImage:"url('https://image.freepik.com/vetores-gratis/fundo-azul-triangulo-com-cores-vivas_23-2148400226.jpg')",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},name:{display:"flex",textAlign:"center",border:" gray 5px",marginLeft:"25px"},text:{fontFamily:'"lucida sans unicode", "lucida grande", sans-serif',fontsize:"12px",fontweight:"bold",fontstyle:"italic",fontvariant:"small-caps",letterspacing:"2.8pt",wordspacing:"8.2pt",lineheight:"1.7"}}})),ze=240;function Te(){return l.a.createElement(D.a,{variant:"body2",color:"textSecondary",align:"center"}," \xa9 ",l.a.createElement(g.b,{color:"inherit",to:"/mega-hack-3/"},"NeoGuar\xe1")," ",(new Date).getFullYear(),".")}function Re(e){var a=Fe(),t=Object(r.useState)([]),n=Object(O.a)(t,2),c=n[0],o=n[1];l.a.useEffect((function(){function e(){return(e=Object(C.a)(j.a.mark((function e(){var a,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://back-airtoon.herokuapp.com/books");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,o(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}));var i=l.a.useState(!1),m=Object(O.a)(i,2),s=m[0],u=m[1],d=Object(S.a)(a.paper,a.fixedHeight),p=Object(N.f)(),E=function(e){var a="livro#".concat(e.target.alt);p.push(a)};return l.a.createElement("div",{className:a.root},l.a.createElement(I.a,null),l.a.createElement(L.a,{position:"absolute",className:Object(S.a)(a.appBar,s&&a.appBarShift),style:{backgroundColor:"white"}},l.a.createElement(A.a,{className:a.toolbar},l.a.createElement(F.a,{edge:"start",color:"secontary","aria-label":"open drawer",onClick:function(){u(!0)},className:Object(S.a)(a.menuButton,s&&a.menuButtonHidden)},l.a.createElement(Y.a,null)),l.a.createElement(D.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:a.title},l.a.createElement(se.a,{fullWidth:!0,variant:"outlined"},l.a.createElement(de.a,{id:"outlined-adornment-amount",startAdornment:l.a.createElement(ue.a,{position:"start"}," ",l.a.createElement("strong",null,"Pesquisa:"),"  "),labelWidth:60}))),l.a.createElement(F.a,{color:"inherit"},l.a.createElement(z.a,{badgeContent:4,color:"secondary"},l.a.createElement(V.a,{color:"action"}))))),l.a.createElement(P.a,{variant:"permanent",classes:{paper:Object(S.a)(a.drawerPaper,!s&&a.drawerPaperClose)},open:s},l.a.createElement("div",{className:a.topMenuSelect},l.a.createElement("div",null,l.a.createElement("div",{style:{justifyContent:"flex-end"},className:a.toolbarIcon},l.a.createElement(F.a,{onClick:function(){u(!1)}},l.a.createElement(J.a,{color:"action"})))),l.a.createElement(g.b,{to:"/mega-hack-3/perfil"},l.a.createElement("div",{className:a.localavatar},l.a.createElement(R.a,{className:a.avatar,alt:"Loli Dan\xe7ante",src:"https://media.tenor.com/images/74a2b4b0fc38bc87c81f68b0bb24572d/tenor.gif"})))),l.a.createElement(q.a,null),l.a.createElement(M.a,null,l.a.createElement("div",null,l.a.createElement(g.b,{color:"inherit",to:"/mega-hack-3/dashboard/populares"},l.a.createElement(X.a,{button:!0},l.a.createElement($.a,null,l.a.createElement(me.a,null)),l.a.createElement(Q.a,{primary:"Popular"}))),l.a.createElement(g.b,{color:"inherit",to:"/mega-hack-3/dashboard/formato"},l.a.createElement(X.a,{button:!0},l.a.createElement($.a,null,l.a.createElement(oe.a,null)),l.a.createElement(Q.a,{primary:"Formatos"}))),l.a.createElement(g.b,{color:"inherit",to:"/mega-hack-3/dashboard/conquista"},l.a.createElement(X.a,{button:!0},l.a.createElement($.a,null,l.a.createElement(le.a,null)),l.a.createElement(Q.a,{primary:"Minhas Cartas"}))))),l.a.createElement(q.a,null),l.a.createElement(M.a,null,l.a.createElement("div",null,l.a.createElement(X.a,{button:!0},l.a.createElement($.a,null,l.a.createElement(Z.a,null)),l.a.createElement(Q.a,{primary:"Configura\xe7\xf5es"})),l.a.createElement(X.a,{button:!0},l.a.createElement($.a,null,l.a.createElement(ae.a,null)),l.a.createElement(Q.a,{primary:"Ajuda"})),l.a.createElement(g.b,{color:"inherit",to:"/mega-hack-3/login"},l.a.createElement(X.a,{button:!0},l.a.createElement($.a,null,l.a.createElement(ne.a,null)),l.a.createElement(Q.a,{primary:"Sair"})))))),l.a.createElement("main",{className:a.content},l.a.createElement("div",{className:a.appBarSpacer}),l.a.createElement(T.a,{maxWidth:"lg",className:a.container},l.a.createElement(N.c,null,l.a.createElement(N.a,{exact:!0,path:"/mega-hack-3/dashboard/populares"},l.a.createElement("h2",{className:a.text,style:{display:"flex"}},"Populares"),l.a.createElement(q.a,{style:{marginBottom:"20px"}}),l.a.createElement(B.a,{container:!0,direction:"row",justify:"center",alignItems:"baseline",spacing:2},c.map((function(e){return l.a.createElement(B.a,{item:!0,xs:7,md:3,lg:9},l.a.createElement(W.a,{className:d,onClick:E},l.a.createElement(ye,{name:e.nome,alt:e.id,image:e.image,autor:e.autor,tipo:e.tipo,nota:e.nota,link:e.compra,tags:e.tags})))})))),l.a.createElement(N.a,{exact:!0,path:"/mega-hack-3/dashboard/formato"},l.a.createElement("h1",null,"Formatos"),l.a.createElement(Oe,null)),l.a.createElement(N.a,{exact:!0,path:"/mega-hack-3/dashboard/conquista"},l.a.createElement(Me,null)),l.a.createElement(N.a,{exact:!0,path:"/mega-hack-3/dashboard/livro"},l.a.createElement(qe,null)),l.a.createElement(N.a,{exact:!0,path:"/mega-hack-3/dashboard/config"},l.a.createElement("h1",null,"/config")),l.a.createElement(N.a,{exact:!0,path:"/mega-hack-3/dashboard/ajuda"},l.a.createElement("h1",null,"/Ajuda")),l.a.createElement(N.a,{path:"/mega-hack-3/dashboard"},l.a.createElement("h2",{className:a.text,style:{display:"flex"}},"Populares"),l.a.createElement(q.a,{style:{marginBottom:"10px"}}),l.a.createElement(B.a,{container:!0,direction:"row",justify:"center",alignItems:"baseline",spacing:2},c.map((function(e){return l.a.createElement(B.a,{item:!0,xs:7,md:3,lg:9},l.a.createElement(W.a,{className:d,onClick:E,id:"teste1"},l.a.createElement(ye,{name:e.nome,alt:e.id,image:e.image,autor:e.autor,tipo:e.tipo,nota:e.nota,link:e.compra,tags:e.tags})))}))))),l.a.createElement(H.a,{pt:4,style:{bottom:0}},l.a.createElement(Te,null)))))}var Ge=Object(Ee.a)((function(e){return{root:{display:"flex",flexDirection:"row",width:"100%"},fundo:{minHeight:300,width:"100%",backgroundImage:"url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",backgroundSize:"cover",backgroundRepeat:"no-repeat"},avatar:{display:"flex",height:"200px",width:"200px",marginTop:"30px"}}}));function Ye(){var e=Ge();return l.a.createElement("div",{className:e.root},l.a.createElement("div",{className:e.fundo},l.a.createElement(R.a,{className:e.avatar,alt:"Loli Dan\xe7ante",src:"https://media.tenor.com/images/74a2b4b0fc38bc87c81f68b0bb24572d/tenor.gif"}),l.a.createElement("h1",{style:{display:"flex",justifyContent:"center"}},"Wesley")))}var _e=t(202),Je=t(206),Ke=t(205),Ve=t(203),Xe=t(204),$e=t(201);function Qe(e){return l.a.createElement(D.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function Ue(e,a,t,n,r,l){return{id:e,date:a,name:t,shipTo:n,paymentMethod:r,amount:l}}var Ze=l.a.createElement(H.a,{display:"flex",alignItems:"center"},l.a.createElement(H.a,{width:"100%",mr:1},l.a.createElement($e.a,{variant:"determinate"})),l.a.createElement(H.a,{minWidth:35},l.a.createElement(D.a,{variant:"body2",color:"textSecondary"},"".concat(100,"%")))),ea=[Ue(0,"16 Mar, 2019","Senhor dos Aneis",Ze,"1/12"),Ue(1,"16 Mar, 2019","For\xe7a do H\xe1bito",Ze,"0/12"),Ue(2,"16 Mar, 2019","O medo da Bia",Ze,"2/23"),Ue(3,"16 Mar, 2019","Amigoss",Ze,"2/6"),Ue(4,"15 Mar, 2019","O Menino que Olhava para o Ceu",Ze,"2/6")];var aa=Object(Ee.a)((function(e){return{seeMore:{marginTop:e.spacing(5)}}}));function ta(){aa();return l.a.createElement(W.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(Qe,{style:{marginTop:"40px"}},"Hist\xf3rico de Leitura"),l.a.createElement(_e.a,{size:"small"},l.a.createElement(Ve.a,null,l.a.createElement(Xe.a,null,l.a.createElement(Ke.a,null,"Data"),l.a.createElement(Ke.a,null,"Nome"),l.a.createElement(Ke.a,null,"Progresso de Leitura"),l.a.createElement(Ke.a,null,"Cards Encontrados"))),l.a.createElement(Je.a,null,ea.map((function(e){return l.a.createElement(Xe.a,{key:e.id},l.a.createElement(Ke.a,null,e.date),l.a.createElement(Ke.a,null,e.name),l.a.createElement(Ke.a,null,e.shipTo),l.a.createElement(Ke.a,null,e.paymentMethod),l.a.createElement(Ke.a,{align:"right"},e.amount))}))))))}function na(){Fe();var e=l.a.useState({name:"Wesley Benicio",email:"wesleybenicio4@gmail.com",idade:"20"}),a=Object(O.a)(e,2),t=a[0];a[1];return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,null,l.a.createElement(Qe,null,"Dados"),l.a.createElement(D.a,{component:"p",variant:"h6"},l.a.createElement("strong",null,"Nome Completo:")," ",t.name),l.a.createElement(D.a,{component:"p",variant:"h6"},l.a.createElement("strong",null,"Email:")," ",t.email),l.a.createElement(D.a,{component:"p",variant:"h6"},l.a.createElement("strong",null,"Idade:")," ",t.idade))))}function ra(){var e=Fe(),a=Object(r.useState)([]),t=Object(O.a)(a,2),n=(t[0],t[1]);l.a.useEffect((function(){function e(){return(e=Object(C.a)(j.a.mark((function e(){var a,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://back-airtoon.herokuapp.com/books");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,n(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}));var c=l.a.useState(!1),o=Object(O.a)(c,2),i=o[0],m=o[1];Object(S.a)(e.paper,e.fixedHeight);return l.a.createElement("div",{className:e.root},l.a.createElement(I.a,null),l.a.createElement(L.a,{position:"absolute",className:Object(S.a)(e.appBar,i&&e.appBarShift),style:{backgroundColor:"white"}},l.a.createElement(A.a,{className:e.toolbar},l.a.createElement(F.a,{edge:"start",color:"secontary","aria-label":"open drawer",onClick:function(){m(!0)},className:Object(S.a)(e.menuButton,i&&e.menuButtonHidden)},l.a.createElement(Y.a,null)),l.a.createElement(D.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title}),l.a.createElement(F.a,{color:"inherit"},l.a.createElement(z.a,{badgeContent:4,color:"secondary"},l.a.createElement(V.a,{color:"action"}))))),l.a.createElement(P.a,{variant:"permanent",classes:{paper:Object(S.a)(e.drawerPaper,!i&&e.drawerPaperClose)},open:i},l.a.createElement("div",{className:e.topMenuSelect},l.a.createElement("div",null,l.a.createElement("div",{style:{justifyContent:"flex-end"},className:e.toolbarIcon},l.a.createElement(F.a,{onClick:function(){m(!1)}},l.a.createElement(J.a,{color:"action"})))),l.a.createElement(Ie.a,{href:"perfil"},l.a.createElement("div",{className:e.localavatar},l.a.createElement(R.a,{className:e.avatar,alt:"Loli Dan\xe7ante",src:"https://media.tenor.com/images/74a2b4b0fc38bc87c81f68b0bb24572d/tenor.gif"})))),l.a.createElement(q.a,null),l.a.createElement(M.a,null,l.a.createElement("div",null,l.a.createElement(Ie.a,{color:"inherit",href:"/mega-hack-3/dashboard/popular"},l.a.createElement(X.a,{button:!0},l.a.createElement($.a,null,l.a.createElement(me.a,null)),l.a.createElement(Q.a,{primary:"Populares"}))),l.a.createElement(Ie.a,{color:"inherit",href:"/mega-hack-3/dashboard/formatos"},l.a.createElement(X.a,{button:!0},l.a.createElement($.a,null,l.a.createElement(oe.a,null)),l.a.createElement(Q.a,{primary:"Formatos"}))),l.a.createElement(Ie.a,{color:"inherit",href:"/mega-hack-3/dashboard/conquistas"},l.a.createElement(X.a,{button:!0},l.a.createElement($.a,null,l.a.createElement(le.a,null)),l.a.createElement(Q.a,{primary:"Minhas Cartas"}))))),l.a.createElement(q.a,null),l.a.createElement(M.a,null,l.a.createElement("div",null,l.a.createElement(Ie.a,{color:"inherit",href:""},l.a.createElement(X.a,{button:!0},l.a.createElement($.a,null,l.a.createElement(Z.a,null)),l.a.createElement(Q.a,{primary:"Configura\xe7\xf5es"}))),l.a.createElement(Ie.a,{color:"inherit",href:""},l.a.createElement(X.a,{button:!0},l.a.createElement($.a,null,l.a.createElement(ae.a,null)),l.a.createElement(Q.a,{primary:"Ajuda"}))),l.a.createElement(Ie.a,{color:"inherit",href:"/mega-hack-3/login"},l.a.createElement(X.a,{button:!0},l.a.createElement($.a,null,l.a.createElement(ne.a,null)),l.a.createElement(Q.a,{primary:"Sair"})))))),l.a.createElement("div",{className:e.appBarSpacer}),l.a.createElement(T.a,{maxWidth:"lg",className:e.container},l.a.createElement(B.a,{container:!0,direction:"column",justify:"center",alignItems:"flex",spacing:2},l.a.createElement(Ye,null),l.a.createElement(q.a,{style:{margin:"40px"}}),l.a.createElement(W.a,{style:{padding:"20px"}},l.a.createElement(H.a,null," Seu HANK : #20")),l.a.createElement(q.a,{style:{margin:"40px"}}),l.a.createElement(na,null),l.a.createElement(q.a,{style:{margin:"40px"}}),l.a.createElement(ta,null))))}function la(){return l.a.createElement("div",null,"livrin aqui")}t(141);var ca=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,{baseline:"/mega-hack-3/"},l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(N.c,null,l.a.createElement(N.a,{exact:!0,path:"/"},l.a.createElement(x,null)),l.a.createElement(N.a,{exact:!0,path:"/mega-hack-3/dashboard/online/"},l.a.createElement(la,null)),l.a.createElement(N.a,{exact:!0,path:"/mega-hack-3/dashboard/"},l.a.createElement(Re,null)),l.a.createElement(N.a,{exact:!0,path:"/mega-hack-3/perfil/"},l.a.createElement(ra,null)),l.a.createElement(N.a,{exact:!0,path:"/mega-hack-3/login/"},l.a.createElement(y,null)),l.a.createElement(N.a,{exact:!0,path:"/mega-hack-3/anima/"},l.a.createElement(E,null)),l.a.createElement(N.a,{exact:!0,path:"/mega-hack-3/"},l.a.createElement(x,null)),l.a.createElement(N.a,{path:"*",component:w})))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ca,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.99ec1a20.chunk.js.map