(function(){"use strict";var t={7956:function(t,e,i){var n=i(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",[e("b-navbar",{attrs:{id:"nav",toggleable:"lg",type:"dark"}},[e("b-navbar-brand",{attrs:{to:"/"}},[t._v("Rent-a-film")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":"","screen-left":"true"}},[e("b-navbar-nav",[e("b-nav-item-dropdown",{attrs:{text:"Zanrovi"}},t._l(t.zanrovi,(function(i){return e("b-dropdown-item",{key:i.id,attrs:{to:`/zanr/${i.id}/${i.tipZanra}`},on:{clicked:function(e){return t.PromenaZanr()}}},[t._v(" "+t._s(i.tipZanra)+" ")])})),1),e("b-nav-item",{attrs:{to:"/films"}},[t._v("Filmovi")])],1),e("b-navbar-nav",{staticClass:"ml-auto"},[t.token?e("b-nav-item",{attrs:{to:"/profile"}},[t._v("Profil")]):t._e(),t.token?e("b-nav-item",{on:{click:function(e){return t.logout()}}},[t._v("Log Out")]):e("b-nav-item",{attrs:{to:"/login"}},[t._v("Log In")])],1)],1)],1)],1),e("router-view")],1)},r=[],a=i(3822),s={name:"App",computed:{...(0,a.rn)(["token","zanrovi","initialState"])},mounted(){this.fetchFilms(),this.fetchZanrs(),this.fetchUsers(),this.fetchRoles(),localStorage.token&&this.setToken(localStorage.token)},methods:{...(0,a.OI)(["removeToken","setToken"]),PromenaZanr:function(){alert("ovde sam")},...(0,a.nv)(["fetchFilms","fetchZanrs","fetchUsers","fetchRoles"]),logout(){this.removeToken(),"/"!==this.$route.path&&this.$router.push("/")}}},l=s,m=i(1001),c=(0,m.Z)(l,o,r,!1,null,null,null),u=c.exports,f=i(2631),h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("img",{staticClass:"mt-5 mb-3",attrs:{alt:"Vue logo",src:"https://www.flixicam.com/img/blog/copy-netflix-download.jpg"}}),e("HelloWorld",{attrs:{msg:"Rent-a-Film"}})],1)},d=[],p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),e("form",{attrs:{action:"sad",id:"form"}},[e("div",{staticClass:"d-inline-flex"},[e("b-form-input",{staticStyle:{width:"500px","margin-right":"15px"},attrs:{placeholder:"Search..."},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),e("b-button",{staticStyle:{width:"100px"},attrs:{variant:"success"},on:{click:t.SearchFilm}},[t._v("Submit")])],1)])])},v=[];n["default"].use(a.ZP);var g=new a.ZP.Store({state:{items:[],slike:[],filmovi:[],filmoviZaPrikaz:[],film:[],zanrovi:[],zanr:[],useri:[],user:[],rolovi:[],filmClicked:[],movieID:-1,admin:!1,initialState:!0,ulogovan:!1,token:"",username:"",uso:!1},getters:{},mutations:{searchFilm(t,e){if(""!==e){t.filmoviZaPrikaz=[];for(let i=0;i<t.filmovi.length;i++)t.filmovi[i].name.toLowerCase().includes(e.toLowerCase())&&t.filmoviZaPrikaz.push(t.filmovi[i])}else t.filmoviZaPrikaz=t.filmovi},addFilms(t,e){t.filmovi=e,t.filmoviZaPrikaz=e},initMovie(t,e){t.filmClicked=e},changeId(t,e){t.movieID=e},addZanrs(t,e){t.zanrovi=e},addUsers(t,e){t.useri=e},addRoles(t,e){t.rolovi=e},getZanrByID(t,e){t.zanr=e},getFilmByID(t,e){t.film=e,console.log(t.film)},getUserByID(t,e){t.user=e},getZanrFilm(t,e){for(let i=0;i<t.zanrovi.length;i++)t.zanrovi[i].id==e&&(t.zanr=t.zanrovi[i]);for(let i=0;i<t.filmovi.length;i++)if(t.filmovi[i].id==t.zanr.FilmId)return void(t.film=t.filmovi[i]);alert("nema filmova iz ovog zanra")},setToken(t,e){if(t.token=e[0],localStorage.token=e[0],!t.ulogovan){t.username=e[1].username,t.ulogovan=!0;for(let e=0;e<t.useri.length;e++)if(t.useri[e].username==t.username){for(let i=0;i<t.rolovi.length;i++)t.rolovi[i].UserId==t.useri[e].id&&(t.admin=!0);t.user=t.useri[e]}}},removeToken(t){t.token="",localStorage.token="",t.admin=!1,t.user=null,t.username="",t.ulogovan=!1}},actions:{fetchFilms({commit:t}){fetch("http://localhost:8090/admin/films",{headers:{Authorization:`Bearer ${localStorage.token}`}}).then((t=>t.json())).then((e=>t("addFilms",e)))},fetchZanrs({commit:t}){fetch("http://localhost:8090/admin/zanrs",{headers:{Authorization:`Bearer ${localStorage.token}`}}).then((t=>t.json())).then((e=>t("addZanrs",e)))},fetchUsers({commit:t}){fetch("http://localhost:8090/admin/users",{headers:{Authorization:`Bearer ${localStorage.token}`}}).then((t=>t.json())).then((e=>t("addUsers",e)))},fetchRoles({commit:t}){fetch("http://localhost:8090/admin/roles",{headers:{Authorization:`Bearer ${localStorage.token}`}}).then((t=>t.json())).then((e=>t("addRoles",e)))},fetchZanrByID({commit:t},e){fetch(`http://localhost:8090/admin/zanrs/${e}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}).then((t=>t.json())).then((e=>t("getZanrByID",e)))},fetchUserByID({commit:t},e){fetch(`http://localhost:8090/admin/users/${e}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}).then((t=>t.json())).then((e=>t("getUserByID",e)))},fetchFilmByID({commit:t},e){fetch(`http://localhost:8090/admin/films/${e}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}).then((t=>t.json())).then((e=>t("getFilmByID",e)))},login({commit:t},e){fetch("http://localhost:9000/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>t.json())).then((i=>{i.msg?alert(i.msg):t("setToken",[i.token,e])}))},putFilm(t){fetch(`http://localhost:8090/admin/films/${this.state.movieID}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.token}`},body:JSON.stringify({description:t.state.filmClicked.description,rating:t.state.filmClicked.rating})}).then((t=>t.json())).then((e=>{alert(JSON.stringify({description:t.state.filmClicked.description,rating:t.state.filmClicked.rating})),e.msg&&alert(e.msg)}))}},modules:{}}),b={name:"HelloWorld",data(){return{text:""}},mounted(){document.getElementById("form").addEventListener("keypress",(t=>{13===t.keyCode&&(t.preventDefault(),this.SearchFilm())}))},props:{msg:String},methods:{...(0,a.OI)(["searchFilm"]),FetchFilms:function(){g()},SearchFilm:function(){if("/zanr/:id/:name"!==this.$route.path)return this.searchFilm(this.text),void("/films"!==this.$route.path&&this.$router.push("/films"))}}},k=b,x=(0,m.Z)(k,p,v,!1,null,"5c3769f2",null),_=x.exports,w={name:"HomeView",components:{HelloWorld:_}},y=w,C=(0,m.Z)(y,h,d,!1,null,null,null),z=C.exports,S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"films mt-3"},[e("HelloWorld",{attrs:{msg:"Filmovi"}}),t._l(t.filmoviZaPrikaz.length<10?t.filmoviZaPrikaz.length:10,(function(i){return e("div",{key:i},[e("FilmComponent",{attrs:{film:t.filmoviZaPrikaz[i-1]}})],1)})),e("b-button",{on:{click:function(e){return t.prev()}}},[t._v("Previous")]),e("span",[t._v("...")]),e("b-button",{on:{click:function(e){return t.next()}}},[t._v("Next")])],2)},F=[],Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"film d-flex mt-5 mb-5"},[e("img",{staticStyle:{width:"570px",height:"400px","margin-left":"30px","margin-right":"30px"},attrs:{alt:"Vue logo",src:t.film.trajanje}}),e("div",{staticClass:"text-center w-25"},[e("h1",[e("u",[t._v(" "+t._s(t.film.name))])]),e("h2",[t._v(t._s(t.film.description))]),e("p",[t._v(" "+t._s(t.film.rating))])]),e("div",{staticClass:"d-flex mx-auto mb-2 w-25"},[t.ulogovan?e("b-button",{staticClass:"mx-3 w-25",staticStyle:{height:"40px"},on:{click:t.WatchMovie}},[t._v("Gledaj")]):t._e(),e("b-button",{staticClass:"mx-3 w-25",staticStyle:{height:"40px"},on:{click:t.AboutMovie}},[t._v("Opsirnije")]),t.admin?e("b-button",{staticClass:"mx-3 w-25",staticStyle:{height:"40px"},on:{click:t.IzmenaMovie}},[t._v("Izmena")]):t._e()],1)])},j=[],I={name:"Film-Comp",props:{film:Object},data(){return{title:"a",admins:!0}},methods:{...(0,a.OI)(["initMovie"]),WatchMovie:function(){this.initMovie(this.film),"/watch"!==this.$route.path&&this.$router.push("/watch")},IzmenaMovie:function(){this.initMovie(this.film),"/izmena"!==this.$route.path&&this.$router.push("/izmena")},AboutMovie:function(){this.initMovie(this.film),"/about"!==this.$route.path&&this.$router.push("/about")}},computed:{...(0,a.rn)(["admin","ulogovan"])}},$=I,P=(0,m.Z)($,Z,j,!1,null,null,null),O=P.exports,B={name:"Filmovi-view",data(){return{current:10,items:[{message:"Foo"},{message:"Bar"}],n:0}},mounted(){},computed:{...(0,a.rn)(["filmoviZaPrikaz"])},methods:{next(){10*this.current==0&&this.current++},prev(){1==this.current&&this.current--},linkGen(t){return 1===t?"?":`?page=${t}`}},components:{HelloWorld:_,FilmComponent:O}},T=B,A=(0,m.Z)(T,S,F,!1,null,null,null),D=A.exports,M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"watch mt-5"},[e("h1",[t._v(t._s(t.filmClicked.name))]),e("img",{staticStyle:{width:"50%",height:"500px","margin-bottom":"30px","margin-top":"30px"},attrs:{alt:"Vue logo",src:t.filmClicked.trajanje}})])},U=[],N={name:"Gledanje-view",computed:{...(0,a.rn)(["filmClicked"])}},L=N,E=(0,m.Z)(L,M,U,!1,null,null,null),R=E.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile"},[e("h1",[t._v("Profil")]),e("p",[t._v(" Username: "+t._s(t.user.username))]),e("p",[t._v(" Name: "+t._s(t.user.name))]),e("p",[t._v(" Last name: "+t._s(t.user.lastname))])])},H=[],G={name:"Profil-view",data(){return{current:0}},mounted(){},computed:{...(0,a.rn)(["user"])},methods:{...(0,a.nv)(["fetchUsers"])}},V=G,q=(0,m.Z)(V,W,H,!1,null,null,null),J=q.exports,X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid mt-3",attrs:{id:"app"}},[e("h1",[t._v("Log In")]),e("b-form",{on:{submit:t.onSubmit}},[e("div",{staticClass:"align-middle mb-3 mt-3"},[e("b-form-group",{staticClass:"d-flex justify-content-center mb-3",attrs:{label:"Username:","label-for":"username"}},[e("b-form-input",{staticStyle:{"margin-left":"50px",width:"270px"},attrs:{id:"username",placeholder:"Enter username...",required:""},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),e("b-form-group",{staticClass:"d-flex justify-content-center",attrs:{label:"Password:","label-for":"password"}},[e("b-form-input",{staticStyle:{"margin-left":"53px",width:"270px"},attrs:{id:"password",type:"password",placeholder:"Enter password...",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),e("b-button",{staticStyle:{width:"170px"},attrs:{type:"submit",variant:"dark"}},[t._v("Submit")])],1)],1)},K=[],Q={name:"Login-view",data(){return{form:{username:"",password:""}}},methods:{...(0,a.nv)(["login"]),onSubmit(t){t.preventDefault(),this.login(this.form),this.$router.push({name:"home"})}}},Y=Q,tt=(0,m.Z)(Y,X,K,!1,null,"5e4a9534",null),et=tt.exports,it=function(){var t=this,e=t._self._c;return e("div",{staticClass:"izmena"},[e("h1",[t._v("Izmena filmova page")]),e("h2",[t._v(t._s(t.filmClicked.name))]),e("p",{staticStyle:{width:"500px","word-wrap":"break-word","margin-left":"auto","margin-right":"auto","margin-bottom":"30px"}},[t._v("Film Description: "+t._s(t.filmClicked.description))]),e("div",{staticClass:"mx-auto text-center"},[e("b-form-textarea",{staticStyle:{width:"500px",height:"160px","margin-left":"auto","margin-right":"auto","margin-bottom":"30px"},attrs:{id:"textarea-no-resize",rows:"1","no-resize":""},model:{value:t.filmClicked.description,callback:function(e){t.$set(t.filmClicked,"description",e)},expression:"filmClicked.description"}})],1),e("p",{staticStyle:{width:"500px","word-wrap":"break-word","margin-left":"auto","margin-right":"auto","margin-bottom":"30px"}},[t._v("Film rating: "+t._s(t.filmClicked.rating))]),e("div",{staticClass:"mx-auto text-center"},[e("b-form-textarea",{staticStyle:{width:"500px",height:"160px","margin-left":"auto","margin-right":"auto","margin-bottom":"30px"},attrs:{id:"textarea-no-resize",rows:"1","no-resize":""},model:{value:t.filmClicked.rating,callback:function(e){t.$set(t.filmClicked,"rating",e)},expression:"filmClicked.rating"}})],1),e("b-button",{on:{click:function(e){return t.changeFilm()}}},[t._v("Izvrsi promene")])],1)},nt=[],ot={name:"Izmena-view",computed:{...(0,a.rn)(["filmClicked"])},actions:{},methods:{...(0,a.nv)(["putFilm"]),...(0,a.OI)(["changeId"]),changeFilm:function(){const t={description:this.filmClicked.description,rating:this.filmClicked.rating};this.changeId(this.filmClicked.id),this.putFilm(t)}}},rt=ot,at=(0,m.Z)(rt,it,nt,!1,null,null,null),st=at.exports,lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"zanr mt-3"},[e("h1",[t._v(t._s(this.zanrName))]),e("FilmComponent",{attrs:{film:t.film}}),e("b-button",{on:{click:function(e){return t.prev()}}},[t._v("Previous")]),e("span",[t._v("...")]),e("b-button",{on:{click:function(e){return t.next()}}},[t._v("Next")])],1)},mt=[],ct={name:"Filmovi-view",data(){return{zanrName:String,zanrId:Number}},mounted(){this.$forceUpdate();let t=this.$route.path.split("/");this.zanrId=t[2],this.zanrName=t[3],this.fetchFilms(),this.fetchZanrs(),this.getZanrFilm(this.zanrId)},computed:{...(0,a.rn)(["film"])},methods:{...(0,a.nv)(["fetchZanrs","fetchFilms"]),...(0,a.OI)(["getZanrFilm"]),next(){10*this.current==0&&this.current++},prev(){1==this.current&&this.current--}},components:{FilmComponent:O}},ut=ct,ft=(0,m.Z)(ut,lt,mt,!1,null,null,null),ht=ft.exports;n["default"].use(f.Z);const dt=[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:()=>i.e(443).then(i.bind(i,9555))},{path:"/films",name:"films",component:D},{path:"/watch",name:"watch",component:R},{path:"/izmena",name:"izmena",component:st},{path:"/profile",name:"profile",component:J},{path:"/login",name:"Login",component:et},{path:"/zanr/:id/:name",name:"Zanr",component:ht}],pt=new f.Z({mode:"history",base:"/",routes:dt});var vt=pt,gt=i(5996),bt=i(9425);i(7024);n["default"].use(gt.XG7),n["default"].use(bt.A7),n["default"].config.productionTip=!1,new n["default"]({router:vt,store:g,render:t=>t(u)}).$mount("#app")}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,n,o,r){if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],o=t[c][1],r=t[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(i.O).every((function(t){return i.O[t](n[l])}))?n.splice(l--,1):(s=!1,r<a&&(a=r));if(s){t.splice(c--,1);var m=o();void 0!==m&&(e=m)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,o,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.f={},i.e=function(t){return Promise.all(Object.keys(i.f).reduce((function(e,n){return i.f[n](t,e),e}),[]))}}(),function(){i.u=function(t){return"js/about.052737b3.js"}}(),function(){i.miniCssF=function(t){}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="peoj:";i.l=function(n,o,r,a){if(t[n])t[n].push(o);else{var s,l;if(void 0!==r)for(var m=document.getElementsByTagName("script"),c=0;c<m.length;c++){var u=m[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==e+r){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",e+r),s.src=n),t[n]=[o];var f=function(e,i){s.onerror=s.onload=null,clearTimeout(h);var o=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(i)})),e)return e(i)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){var t={143:0};i.f.j=function(e,n){var o=i.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(i,n){o=t[e]=[i,n]}));n.push(o[2]=r);var a=i.p+i.u(e),s=new Error,l=function(n){if(i.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,o[1](s)}};i.l(a,l,"chunk-"+e,e)}},i.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,r,a=n[0],s=n[1],l=n[2],m=0;if(a.some((function(e){return 0!==t[e]}))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var c=l(i)}for(e&&e(n);m<a.length;m++)r=a[m],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(c)},n=self["webpackChunkpeoj"]=self["webpackChunkpeoj"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(7956)}));n=i.O(n)})();
//# sourceMappingURL=app.187c4cca.js.map