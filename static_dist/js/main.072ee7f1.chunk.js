(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{144:function(e,t,n){e.exports=n(208)},149:function(e,t,n){},161:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),l=n.n(r);n(149),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(14),c=n(33),s=n(15),u=n(16),m=n(18),d=n(17),h=n(256),p=n(248),f=n(132),g="https://plat-chat.herokuapp.com",E=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:""},e.handle_change=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e.handle_login=function(t,n){t.preventDefault(),fetch("".concat(g,"/token-auth/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){localStorage.setItem("token",t.token),e.setState({logged_in:!0,username:t.token}),i.d.push("/")}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(f.a,{style:{alignText:"center",padding:"2em"}},o.a.createElement(h.a,{type:"text",label:"email",name:"email",value:this.state.email,onChange:this.handle_change,fullWidth:!0}),o.a.createElement("br",null),o.a.createElement(h.a,{type:"password",label:"password",name:"password",value:this.state.password,onChange:this.handle_change,fullWidth:!0}),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(p.a,{color:"primary",style:{marginLeft:"auto",marginRight:"auto",display:"block"},onClick:function(t){return e.handle_login(t,e.state)}},"Login")))}}]),n}(o.a.Component),b=(n(161),n(98)),v=n(249),y=n(13),k=n(250),C=n(251),j=n(252),O=n(209),S=n(211),x=n(258),w=n(131),_=n(95),P=n.n(_),T=n(121),N=n.n(T),D=n(122),I=n.n(D),L=n(123),W=n.n(L),A=Object(v.a)((function(e){return{toot:{flexGrow:1},grow:{flexGrow:1},titlee:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(c.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(c.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(y.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(y.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(c.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(c.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(c.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function B(e){var t=A(),n=o.a.useState(null),a=Object(b.a)(n,2),r=a[0],l=a[1],c=o.a.useState(null),s=Object(b.a)(c,2),u=s[0],m=s[1],d=Boolean(r),h=(Boolean(u),function(){l(null),m(null)}),f="primary-search-account-menu",g=o.a.createElement(w.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},id:f,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:h},o.a.createElement(x.a,{onClick:h},"Profile"),o.a.createElement(x.a,{onClick:h},"Profile"),o.a.createElement(x.a,{onClick:e.handle_logout},"Logout"));return o.a.createElement("div",{className:t.grow},e.logged_in?o.a.createElement(k.a,{position:"static"},o.a.createElement(C.a,null,o.a.createElement(j.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"},o.a.createElement(P.a,null)),o.a.createElement("div",{className:t.search},o.a.createElement("div",{className:t.searchIcon},o.a.createElement(N.a,null)),o.a.createElement(S.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})),o.a.createElement("div",{className:t.grow}),o.a.createElement("div",{className:t.sectionDesktop},o.a.createElement(j.a,{edge:"end","aria-label":"account of current user","aria-controls":f,"aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit"},o.a.createElement(I.a,null))),o.a.createElement("div",{className:t.sectionMobile},o.a.createElement(j.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},o.a.createElement(W.a,null))))):o.a.createElement("div",{className:t.toot},o.a.createElement(k.a,{position:"static"},o.a.createElement(C.a,null,o.a.createElement(j.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(P.a,null)),o.a.createElement(O.a,{variant:"h6",className:t.titlee}),o.a.createElement(p.a,{onClick:function(){i.d.push("/login")},color:"inherit"},"Login"),o.a.createElement(p.a,{onClick:function(){i.d.push("/signup")},color:"inherit"},"Signup")))),g)}var F=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handle_logout=function(){localStorage.removeItem("token"),a.setState({logged_in:!1,username:""}),i.d.push("/")},a.state={posts:[],logged_in:!!localStorage.getItem("token")},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(B,{logged_in:this.state.logged_in,handle_logout:this.handle_logout}),this.props.children)}}]),n}(a.Component),J=n(38),R=n(39),z=n(253),M=n(126),G=n.n(M),q=n(74),V=n.n(q);function Y(){var e=Object(J.a)(["\n\tposition: relative;\n\tcursor: pointer;\n\tright: 15px;\n\ttop: 9px;\n\tfloat:right;\n"]);return Y=function(){return e},e}function $(){var e=Object(J.a)(["\n\tmargin: 5px;\n"]);return $=function(){return e},e}var H=R.a.div($()),K=Object(R.a)(G.a)(Y()),Q=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.post,n=e.deletePost;return o.a.createElement(H,null,o.a.createElement(z.a,{container:!0,style:{margin:10}},o.a.createElement(z.a,{item:!0,xs:10,sm:10,md:10},o.a.createElement(O.a,{style:{fontSize:18}},t.body)),o.a.createElement(z.a,{item:!0,xs:2,sm:2,md:2},o.a.createElement(K,{nativeColor:V.a[600],onClick:function(){return n(t.id)}}))))}}]),n}(a.Component),U=n(255),X=n(128),Z=n.n(X),ee=n(127),te=n.n(ee),ne=n(254);function ae(){var e=Object(J.a)(["\n\twidth: 95%;\n\tpadding: 8px 15px 5px 15px;\n\tflex: 1;\n"]);return ae=function(){return e},e}function oe(){var e=Object(J.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\tpadding: 10px 0;\n\tmargin: 10px 0;\n\tbackground-color: #f6f6f6;\n\tborder-radius: 5px;\n"]);return oe=function(){return e},e}function re(){var e=Object(J.a)(["\n\tmargin: 5px;\n"]);return re=function(){return e},e}var le=R.a.div(re()),ie=R.a.div(oe()),ce=Object(R.a)(O.a)(ae()),se=function(e){var t=e.comment,n=(e.open,e.anchorEl,e.handleClick,e.handleClose,e.handleDelete),a=e.handleEdit;return o.a.createElement(ie,null,o.a.createElement(ce,null,t.body,o.a.createElement("span",{style:{float:"right",fontSize:10,color:"#A9A9A9"}})),o.a.createElement(O.a,{style:{padding:10,cursor:"pointer",display:"inline-block"},onClick:function(){return a(t)}},"Edit"),o.a.createElement(O.a,{style:{padding:10,color:V.a[500],cursor:"pointer",display:"inline-block"},onClick:function(){return n(t.id)}},"Delete"))},ue=function(e){return e.comments.map((function(t){return o.a.createElement(se,{key:t.id,comment:t,open:e.open,anchorEl:e.anchorEl,handleClick:e.handleClick,handleClose:e.handleClose,handleDelete:e.handleDelete,handleEdit:e.handleEdit})}))},me=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.onSubmit=function(e){e.preventDefault(),a.state.comment&&a.state.comment_id},a.handleChange=function(e){a.setState({comment:e.target.value})},a.handleEdit=function(e){a.setState({comment:e.text,comment_id:e.id})},a.handleDelete=function(e){},a.resetTextField=function(){a.setState({comment:"",comment_id:null})},a.state={anchorEl:null,comment:"",comment_id:null,comments:e.comments,post_id:e.post_id},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.anchorEl,t=Boolean(e);return o.a.createElement(le,null,o.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.onSubmit},o.a.createElement(h.a,{id:"comment".concat(this.state.post_id),name:"comment",fullWidth:!0,placeholder:"Comment here",margin:"normal",value:this.state.comment,onChange:this.handleChange,InputProps:{endAdornment:o.a.createElement(a.Fragment,null,o.a.createElement(ne.a,{position:"end"},o.a.createElement(j.a,{onClick:this.onSubmit,title:"Save"},o.a.createElement(te.a,null))),o.a.createElement(ne.a,{position:"end"},o.a.createElement(j.a,{onClick:this.resetTextField,title:"Clear"},o.a.createElement(Z.a,null))))}})),this.state.comments&&this.state.comments.length>0&&o.a.createElement(ue,{comments:this.state.comments,open:t,anchorEl:this.state.anchorEl,handleClick:this.handleClick,handleClose:this.handleClose,handleDelete:this.handleDelete,handleEdit:this.handleEdit}))}}]),n}(a.Component),de=function(e){var t=e.post,n=e.deletePost;return console.log(t),o.a.createElement(U.a,{style:{margin:"25px 0"},square:!0},o.a.createElement(Q,{post:t,deletePost:n}),o.a.createElement(me,{post_id:t.id,comments:t.comments}))},he=n(5),pe=n(247),fe=n(246),ge=n(257),Ee=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({post:e.target.value})},a.handleSubmit=function(e){var t="".concat(g,"/posts");e.preventDefault();var n={body:a.state.post,user:1};fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){a.setState({post:""}),a.props.updatePosts(e)}))},a.state={post:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("form",{onSubmit:this.handleSubmit,className:e.form,encType:"multipart/form-data"},o.a.createElement(pe.a,{className:e.formControl},o.a.createElement(ge.a,{htmlFor:"new_post"},"What's on your mind?"),o.a.createElement(fe.a,{type:"text",autoComplete:"off",id:"text",name:"text",value:this.state.post,onChange:this.handleChange}),o.a.createElement(p.a,{type:"submit",disabled:!this.state.post,variant:"outlined",className:e.button},"Create Post")))}}]),n}(a.Component),be=Object(he.a)({form:{width:"100%",margin:"0 auto",display:"flex",paddingTop:20},formControl:{margin:"0 auto",width:500},button:{width:200,margin:"10px 0"}})(Ee),ve=n(129),ye=n.n(ve),ke=n(130),Ce=n.n(ke),je=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).deletePost=function(e){fetch("".concat(g,"/posts/")+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){a.setState({posts:e})}))},a.updatePosts=function(e){a.setState({posts:e})},a.renderPosts=function(e){return e.map((function(e){return o.a.createElement(de,{post:e,deletePost:a.deletePost})}))},a.state={posts:[],loadingFeed:!0},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(g,"/posts/"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("token"))},body:JSON.stringify()}).then((function(e){return e.json()})).then((function(t){e.setState({posts:t})})).finally((function(){return e.setState({loadingFeed:!1})}))}},{key:"render",value:function(){return o.a.createElement("div",{style:{padding:10}},o.a.createElement(be,{updatePosts:this.updatePosts}),o.a.createElement("div",{style:{maxWidth:"500px",margin:"0 auto",paddingTop:"20px"}},this.state.loadingFeed?o.a.createElement(O.a,{variant:"headline"},"Loading posts..."):this.state.posts.length?this.renderPosts(this.state.posts):o.a.createElement(O.a,{variant:"headline"},o.a.createElement(ye.a,{style:{position:"relative",top:"3px"},nativeColor:Ce.a[500]}),"\xa0\xa0No Posts Yet.")))}}]),n}(a.Component);var Oe=o.a.createElement(i.c,{history:i.d},o.a.createElement(i.b,{path:"/",component:F},o.a.createElement(i.a,{component:je})),o.a.createElement(i.b,{path:"login",component:E}));sessionStorage.getItem("token");l.a.render(o.a.createElement(o.a.StrictMode,null,Oe),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[144,1,2]]]);
//# sourceMappingURL=main.072ee7f1.chunk.js.map