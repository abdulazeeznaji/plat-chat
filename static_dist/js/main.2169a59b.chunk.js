(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{135:function(e,t,n){e.exports=n(199)},140:function(e,t,n){},152:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),l=n.n(r);n(140),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(13),c=n(113),s=n(14),u=n(15),m=n(17),d=n(16),h=n(242),p=n(234),f=n(122),g=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:""},e.handle_change=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e.handle_login=function(t,n){t.preventDefault(),fetch(" http://127.0.0.1:8000/token-auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){localStorage.setItem("token",t.token),e.setState({logged_in:!0,username:t.token})})),i.d.push("/feed")},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(f.a,{style:{alignText:"center",padding:"2em"}},o.a.createElement(h.a,{type:"text",label:"email",name:"email",value:this.state.email,onChange:this.handle_change,fullWidth:!0}),o.a.createElement("br",null),o.a.createElement(h.a,{type:"password",label:"password",name:"password",value:this.state.password,onChange:this.handle_change,fullWidth:!0}),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(p.a,{color:"primary",style:{marginLeft:"auto",marginRight:"auto",display:"block"},onClick:function(t){return e.handle_login(t,e.state)}},"Login")))}}]),n}(o.a.Component),E=(n(152),n(236)),v=n(237),b=n(200),y=n(238),C=n(235),j=n(114),k=n.n(j),O=Object(C.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function S(e){var t=O();return o.a.createElement("div",{className:t.root},o.a.createElement(E.a,{position:"static"},o.a.createElement(v.a,null,o.a.createElement(y.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(k.a,null)),o.a.createElement(b.a,{variant:"h6",className:t.title},"Plat-Chat"),e.logged_in?o.a.createElement(p.a,{onClick:e.handle_logout,color:"inherit"},"Logout"):o.a.createElement("div",null,o.a.createElement(p.a,{onClick:function(){i.d.push("/login")},color:"inherit"},"Login"),o.a.createElement(p.a,{onClick:function(){i.d.push("/signup")},color:"inherit"},"Signup")))))}var x=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handle_logout=function(){localStorage.removeItem("token"),a.setState({logged_in:!1,username:""}),i.d.push("/login")},a.state={posts:[],logged_in:!!localStorage.getItem("token")},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(S,{logged_in:this.state.logged_in,handle_logout:this.handle_logout}),this.props.children)}}]),n}(a.Component),_=n(34),w=n(35),P=n(239),T=n(117),D=n.n(T),N=n(69),W=n.n(N);function A(){var e=Object(_.a)(["\n\tposition: relative;\n\tcursor: pointer;\n\tright: 15px;\n\ttop: 9px;\n\tfloat:right;\n"]);return A=function(){return e},e}function I(){var e=Object(_.a)(["\n\tmargin: 5px;\n"]);return I=function(){return e},e}var F=w.a.div(I()),J=Object(w.a)(D.a)(A()),L=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.post,n=e.deletePost;return o.a.createElement(F,null,o.a.createElement(P.a,{container:!0,style:{margin:10}},o.a.createElement(P.a,{item:!0,xs:10,sm:10,md:10},o.a.createElement(b.a,{style:{fontSize:18}},t.body)),o.a.createElement(P.a,{item:!0,xs:2,sm:2,md:2},o.a.createElement(J,{nativeColor:W.a[600],onClick:function(){return n(t.id)}}))))}}]),n}(a.Component),B=n(241),z=n(119),G=n.n(z),M=n(118),R=n.n(M),q=n(240);function V(){var e=Object(_.a)(["\n\twidth: 95%;\n\tpadding: 8px 15px 5px 15px;\n\tflex: 1;\n"]);return V=function(){return e},e}function Y(){var e=Object(_.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\tpadding: 10px 0;\n\tmargin: 10px 0;\n\tbackground-color: #f6f6f6;\n\tborder-radius: 5px;\n"]);return Y=function(){return e},e}function $(){var e=Object(_.a)(["\n\tmargin: 5px;\n"]);return $=function(){return e},e}var H=w.a.div($()),K=w.a.div(Y()),Q=Object(w.a)(b.a)(V()),U=function(e){var t=e.comment,n=(e.open,e.anchorEl,e.handleClick,e.handleClose,e.handleDelete),a=e.handleEdit;return o.a.createElement(K,null,o.a.createElement(Q,null,t.body,o.a.createElement("span",{style:{float:"right",fontSize:10,color:"#A9A9A9"}})),o.a.createElement(b.a,{style:{padding:10,cursor:"pointer",display:"inline-block"},onClick:function(){return a(t)}},"Edit"),o.a.createElement(b.a,{style:{padding:10,color:W.a[500],cursor:"pointer",display:"inline-block"},onClick:function(){return n(t.id)}},"Delete"))},X=function(e){return e.comments.map((function(t){return o.a.createElement(U,{key:t.id,comment:t,open:e.open,anchorEl:e.anchorEl,handleClick:e.handleClick,handleClose:e.handleClose,handleDelete:e.handleDelete,handleEdit:e.handleEdit})}))},Z=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.onSubmit=function(e){e.preventDefault(),a.state.comment&&a.state.comment_id},a.handleChange=function(e){a.setState({comment:e.target.value})},a.handleEdit=function(e){a.setState({comment:e.text,comment_id:e.id})},a.handleDelete=function(e){},a.resetTextField=function(){a.setState({comment:"",comment_id:null})},a.state={anchorEl:null,comment:"",comment_id:null,comments:e.comments,post_id:e.post_id},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.anchorEl,t=Boolean(e);return o.a.createElement(H,null,o.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.onSubmit},o.a.createElement(h.a,{id:"comment".concat(this.state.post_id),name:"comment",fullWidth:!0,placeholder:"Comment here",margin:"normal",value:this.state.comment,onChange:this.handleChange,InputProps:{endAdornment:o.a.createElement(a.Fragment,null,o.a.createElement(q.a,{position:"end"},o.a.createElement(y.a,{onClick:this.onSubmit,title:"Save"},o.a.createElement(R.a,null))),o.a.createElement(q.a,{position:"end"},o.a.createElement(y.a,{onClick:this.resetTextField,title:"Clear"},o.a.createElement(G.a,null))))}})),this.state.comments&&this.state.comments.length>0&&o.a.createElement(X,{comments:this.state.comments,open:t,anchorEl:this.state.anchorEl,handleClick:this.handleClick,handleClose:this.handleClose,handleDelete:this.handleDelete,handleEdit:this.handleEdit}))}}]),n}(a.Component),ee=function(e){var t=e.post,n=e.deletePost;return console.log(t),o.a.createElement(B.a,{style:{margin:"25px 0"},square:!0},o.a.createElement(L,{post:t,deletePost:n}),o.a.createElement(Z,{post_id:t.id,comments:t.comments}))},te=n(5),ne=n(243),ae=n(233),oe=n(244),re=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({post:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t={body:a.state.post,user:1};fetch("http://127.0.0.1:8000/posts/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){a.setState({post:""}),a.props.updatePosts(e)}))},a.state={post:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("form",{onSubmit:this.handleSubmit,className:e.form,encType:"multipart/form-data"},o.a.createElement(ne.a,{className:e.formControl},o.a.createElement(oe.a,{htmlFor:"new_post"},"What's on your mind?"),o.a.createElement(ae.a,{type:"text",autoComplete:"off",id:"text",name:"text",value:this.state.post,onChange:this.handleChange}),o.a.createElement(p.a,{type:"submit",disabled:!this.state.post,variant:"outlined",className:e.button},"Create Post")))}}]),n}(a.Component),le=Object(te.a)({form:{width:"100%",margin:"0 auto",display:"flex",paddingTop:20},formControl:{margin:"0 auto",width:500},button:{width:200,margin:"10px 0"}})(re),ie=n(120),ce=n.n(ie),se=n(121),ue=n.n(se),me=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).deletePost=function(e){fetch(" http://127.0.0.1:8000/posts/"+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){a.setState({posts:e})}))},a.updatePosts=function(e){a.setState({posts:e})},a.renderPosts=function(e){return e.map((function(e){return o.a.createElement(ee,{post:e,deletePost:a.deletePost})}))},a.state={posts:[],loadingFeed:!0},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(" http://127.0.0.1:8000/posts/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("token"))},body:JSON.stringify()}).then((function(e){return e.json()})).then((function(t){e.setState({posts:t})})).finally((function(){return e.setState({loadingFeed:!1})}))}},{key:"render",value:function(){return o.a.createElement("div",{style:{padding:10}},o.a.createElement(le,{updatePosts:this.updatePosts}),o.a.createElement("div",{style:{maxWidth:"500px",margin:"0 auto",paddingTop:"20px"}},this.state.loadingFeed?o.a.createElement(b.a,{variant:"headline"},"Loading posts..."):this.state.posts.length?this.renderPosts(this.state.posts):o.a.createElement(b.a,{variant:"headline"},o.a.createElement(ce.a,{style:{position:"relative",top:"3px"},nativeColor:ue.a[500]}),"\xa0\xa0No Posts Yet.")))}}]),n}(a.Component);var de=o.a.createElement(i.c,{history:i.d},o.a.createElement(i.b,{path:"/",component:x},o.a.createElement(i.a,{component:me})),o.a.createElement(i.b,{path:"login",component:g}));sessionStorage.getItem("token");l.a.render(o.a.createElement(o.a.StrictMode,null,de),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.2169a59b.chunk.js.map