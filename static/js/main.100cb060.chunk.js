(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(e,t,a){e.exports=a(423)},400:function(e,t,a){},423:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),o=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(51),c=a(15),s=a(10),u=a(60),m=a(61),d=a(63),p=a(62),g=a(64),h=a(30),E=a(22),f=a.n(E),b=a(17),y=a(45),v=a.n(y),O=a(42),k=a.n(O),x=a(27),j=a.n(x),S=a(103),T=a.n(S),C=a(23),w=a.n(C),I=a(11),N=a.n(I),A=a(5),_=a.n(A),R=a(76),D=a.n(R);a(366);var F=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},q=function(e,t,a){return function(n){n({type:"AUTH_START"});var r={email:e,password:t,returnSecureToken:!0},i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCc105jdNCASMJIslySAslIHCJF3zn7eFQ";a||(i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCc105jdNCASMJIslySAslIHCJF3zn7eFQ"),D.a.post(i,r).then(function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),n(F(e.data.idToken,e.data.localId)),n(H(e.data.expiresIn))}).catch(function(e){n(function(e){return{type:"AUTH_FAIL",error:e}}(e.response.data.error.message))})}},H=function(e){return function(t){setTimeout(function(){t(P())},1e3*e)}},P=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},L=D.a.create({baseURL:"https://ramen-app-60399.firebaseio.com/"}),M=function(e,t,a,n){return function(r){r(V());var i={userId:n,submissionTime:new Date,orders:Object(s.a)({},t),deliveryInfo:Object(s.a)({},a)};L.post("/orders.json?auth="+e,i).then(function(e){r(W(e.data.name))}).catch(function(e){r(U(e.response.data.error))})}},V=function(){return{type:"SEND_ORDERS_INIT"}},W=function(e){return{type:"SEND_ORDERS_SUCCESS",purchaseOrderId:e}},U=function(e){return{type:"SEND_ORDERS_FAIL",error:e}},B=a(50),G=a(89),J=a.n(G),z=a(93),Y=a.n(z),X=a(91),Q=a.n(X),K=a(92),Z=a.n(K),$=a(90),ee=a.n($),te=a(88),ae=a.n(te);function ne(e){return r.a.createElement(ae.a,Object.assign({direction:"up"},e))}var re=function(e){return r.a.createElement("div",null,r.a.createElement(J.a,{open:e.show,TransitionComponent:ne,keepMounted:!0,onClose:function(){return e.cancelAction()},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(ee.a,{id:"alert-dialog-slide-title"},e.title),r.a.createElement(Q.a,null,r.a.createElement(Z.a,{id:"alert-dialog-slide-description"}),e.content),r.a.createElement(Y.a,null,r.a.createElement(f.a,{onClick:function(){return e.cancelAction()},color:"primary",variant:"contained"},"Cancel"),r.a.createElement(f.a,{onClick:function(){return e.okAction()},color:"primary",variant:"contained"},"OK"))))},ie=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){var t=Object(s.a)({},a.state).formData;console.log(e.target.name,e.target.value),t[e.target.name]=e.target.value,a.setState({formData:t})},a.state={formData:{email:"",password:"",repeatPassword:""},submitted:!1},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.ValidatorForm.addValidationRule("isPasswordMatch",function(t){return t===e.state.formData.password}),b.ValidatorForm.addValidationRule("minLenghth7Chars",function(e){return e.length>=7})}},{key:"render",value:function(){var e=this,t=this.state,a=t.formData,n=t.submitted,i=this.props.classes,o=this.props.isAuthenticated?r.a.createElement(B.a,{to:"/orders"}):null,l=this.props.error?r.a.createElement(re,Object.assign({},this.state.props,{title:"Warning",content:this.props.error.toString().replace("_"," "),show:null!=this.props.error,okAction:function(){return e.props.logout()},cancelAction:function(){return e.props.logout()}})):null;return r.a.createElement("main",{className:i.main},o,r.a.createElement(k.a,null),r.a.createElement(w.a,{className:i.paper},r.a.createElement(v.a,{className:i.avatar},r.a.createElement(T.a,null)),r.a.createElement(N.a,{component:"h1",variant:"h5"},"Sign up"),l,r.a.createElement(b.ValidatorForm,{onSubmit:function(){return e.props.onAuth(a.email,a.password,!0)}},r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(b.TextValidator,{label:"Email",onChange:this.handleChange,name:"email",value:a.email,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]})),r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(b.TextValidator,{label:"Password",onChange:this.handleChange,name:"password",type:"password",validators:["required","minLenghth7Chars"],errorMessages:["this field is required","Password needs to be at least 7 characters"],value:a.password})),r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(b.TextValidator,{label:"Repeat password",onChange:this.handleChange,name:"repeatPassword",type:"password",validators:["isPasswordMatch","required"],errorMessages:["password mismatch","this field is required"],value:a.repeatPassword})),r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit",disabled:n},"SUBMIT")))))}}]),t}(r.a.Component),oe=Object(c.b)(function(e){return{loading:e.auth.loading,isAuthenticated:null!==e.auth.idToken,error:e.auth.error}},function(e){return{onAuth:function(t,a,n){return e(q(t,a,n))},logout:function(){return e(P())}}})(_()(function(e){return{main:Object(h.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(ie)),le=a(24),ce=a(37),se=a.n(ce);var ue=Object(c.b)(function(e){return{loading:e.auth.loading,error:e.auth.error}},function(e){return{onAuth:function(t,a,n){return e(q(t,a,n))},logout:function(){return e(P())}}})(_()(function(e){return{main:Object(h.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(function(e){var t=e.classes,a=Object(n.useState)({formData:{email:"",password:""}}),i=Object(le.a)(a,2),o=i[0],l=i[1],c=function(e){var t=Object(s.a)({},o).formData;t[e.target.name]=e.target.value,l({formData:t})},u=e.error?r.a.createElement(re,Object.assign({},e,{title:"Warning",content:e.error.toString().replace("_"," "),show:null!=e.error,okAction:function(){return e.logout()},cancelAction:function(){return e.logout()}})):null,m=e.loading?r.a.createElement(se.a,{className:t.progress}):r.a.createElement(T.a,null);return r.a.createElement("main",{className:t.main},r.a.createElement(k.a,null),r.a.createElement(w.a,{className:t.paper},r.a.createElement(v.a,{className:t.avatar},m),r.a.createElement(N.a,{component:"h1",variant:"h5"},"Sign in"),u,r.a.createElement(b.ValidatorForm,{onSubmit:function(){return e.onAuth(o.formData.email,o.formData.password,!1)}},r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(b.TextValidator,{label:"Email",onChange:c,name:"email",value:o.formData.email,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]})),r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(b.TextValidator,{label:"Password",onChange:c,name:"password",type:"password",validators:["required"],errorMessages:["this field is required"],value:o.formData.password})),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign in"))))})),me=a(12),de=a(94),pe=a.n(de),ge=a(95),he=a.n(ge),Ee=a(29),fe=a(8),be={"Pork Orginal":"sea salt, pork,seasoned egg,nori, scallion","Chicken Original":"sea salt, chicken breast, seasoned egg, white onion, nori, scallion","Pork Shoyu":"soy sauce, pork, bean sprouts, nori, scallion","Chicken Shoyu":"soy sauce, chicken breast, white onion, nori, scallion","Pork Miso":"soybean paste, pork, bean sprouts, corn, scallion, garlic oil","Chicken Miso":"soybean paste, chicken breast, white onion, nori, scallion","Pork Spicy Garlic":"chili pepper, pork, bean sprouts, grated garlic, scallion","Chicken Spicy Jalapeno":"jalapeno paste, chicken breast, white onion, nori, scallion","Vegetarian Ramen":"seasoned vegetables & tofu furai in a 100% vegetarian broth"},ye={"Pork Orginal":"/assets/images/pork_original.jpg","Chicken Original":"/assets/images/chicken_original.jpg","Pork Shoyu":"/assets/images/pork_shoyu.jpg","Chicken Shoyu":"/assets/images/chicken_shoyu.jpg","Pork Miso":"/assets/images/pork_miso.jpg","Chicken Miso":"/assets/images/chicken_miso.jpg","Pork Spicy Garlic":"/assets/images/pork_spicy_garlic.jpg","Chicken Spicy Jalapeno":"/assets/images/chicken_spicy_jalapeno.jpg","Vegetarian Ramen":"/assets/images/vegetarian.jpg","Thin Noodles":"/assets/images/thin_noodles.jpg","Thick Noodles":"/assets/images/thick_noodles.jpg"},ve={"Thin Noodles":"Thin Noodles","Thick Noodles":"Thick Noodles"},Oe=[{primary:"Sweet Corn",secondary:1},{primary:"Pork",secondary:1.5},{primary:"Butter",secondary:1},{primary:"Nori",secondary:1},{primary:"Chicken Breast",secondary:3.5},{primary:"Seasoned Egg",secondary:1.5},{primary:"Jalapeno Paste",secondary:1.5},{primary:"Grated Garlic",secondary:1},{primary:"Seaweed",secondary:1},{primary:"Bean Sprouts",secondary:1},{primary:"Swiss Cheese",secondary:3.5},{primary:"Seasoned Vegetables",secondary:3.5},{primary:"Scallion",secondary:1},{primary:"Garlic Oil",secondary:1}],ke={"Pork Orginal":12.99,"Chicken Original":12.99,"Pork Shoyu":13.99,"Chicken Shoyu":13.99,"Pork Miso":13.99,"Chicken Miso":13.99,"Pork Spicy Garlic":12.99,"Chicken Spicy Jalapeno":12.99,"Vegetarian Ramen":12.99,"Thin Noodles":0,"Thick Noodles":0,"Sweet Corn":1,Pork:1.5,Butter:1,Nori:1,"Chicken Breast":3.5,"Seasoned Egg":1.5,"Jalapeno Paste":1.5,"Grated Garlic":1,Seaweed:1,"Bean Sprouts":1,"Swiss Cheese":3.5,"Seasoned Vegetables":3.5,Scallion:1,"Garlic Oil":1},xe=a(178),je=a.n(xe),Se=(a(6),a(177)),Te=a.n(Se),Ce=Object(c.b)(function(e){return{isLoading:e.orders.sending}})(Object(me.withStyles)(function(e){return{main:Object(h.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(function(e){var t=e.classes,a=Object(n.useState)({firstName:"",lastName:"",address:"",email:"",deliveryMethod:""}),i=Object(le.a)(a,2),o=i[0],l=i[1],c=function(e){var t=Object(s.a)({},o);console.log(t),console.log(e.target.name),console.log(e.target.value),t[e.target.name]=e.target.value,l(t)},u=e.error?r.a.createElement(re,Object.assign({},e,{title:"Warning",content:e.error.toString().replace("_"," "),show:null!=e.error,okAction:function(){return e.logout()},cancelAction:function(){return e.logout()}})):null,m=e.loading?r.a.createElement(se.a,{className:t.progress}):r.a.createElement(Te.a,null);return r.a.createElement("div",{className:t.main},r.a.createElement(w.a,{className:t.paper},r.a.createElement(v.a,{className:t.avatar},m),r.a.createElement(N.a,{component:"h1",variant:"h5"},"Delivery"),u,r.a.createElement(b.ValidatorForm,{onSubmit:function(){return console.log("submit hit")}},r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(b.TextValidator,{label:"First Name",onChange:c,name:"firstName",value:o.email,validators:["required"],errorMessages:["this field is required"]})),r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(b.TextValidator,{label:"Last Name",onChange:c,name:"lastName",value:o.lastName,validators:["required"],errorMessages:["this field is required"]})),r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(b.TextValidator,{label:"Address",onChange:c,name:"address",value:o.address,validators:["required"],errorMessages:["this field is required"]})),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Submit"))))})),we=a(104),Ie=a.n(we),Ne=8.95,Ae=function(e){return(.07*e).toFixed(2)},_e=function(e){return(.07*e+e+Ne).toFixed(2)};Object(c.b)(function(e){return{orders:e.cart.orders,subTotal:e.cart.subTotal,token:e.auth.idToken}},function(e){return{removeOrderById:function(t){return e(function(e){return{type:"REMOVE_ORDER",id:e}}(t))},submitOrders:function(t,a){return e(M(t,a))}}})(Object(me.withStyles)(function(e){return{spacer:{padding:e.spacing.unit},paper:{width:"100%"}}})(function(e){var t=e.classes,a=e.orders;return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{container:!0},r.a.createElement(fe.a,{item:!0,container:!0,md:6},e.subTotal<=0?r.a.createElement(fe.b,{className:t.paper},r.a.createElement(fe.a,{item:!0,container:!0,xs:12,justify:"center",alignItems:"center",style:{height:"100%"}},"y",r.a.createElement(fe.a,{item:!0,xs:5},r.a.createElement("h1",null,"Please place an order")))):r.a.createElement(fe.b,{className:t.paper},r.a.createElement(fe.a,{item:!0,container:!0,xs:12},r.a.createElement(fe.a,{item:!0,xs:3}),r.a.createElement(fe.a,{item:!0,xs:3},"Ramen"),r.a.createElement(fe.a,{item:!0,xs:3},"Extras"),r.a.createElement(fe.a,{item:!0,xs:3},"Price"),a.map(function(a){var n=a.ramen,i=a.noodle,o=a.extras,l=a.id;return r.a.createElement(r.a.Fragment,{key:l},r.a.createElement(fe.a,{item:!0,xs:3},r.a.createElement(je.a,{onClick:function(){return e.removeOrderById(l)},className:t.icon})),r.a.createElement(fe.a,{item:!0,xs:3},n+" "+i),r.a.createElement(fe.a,{item:!0,xs:3}),r.a.createElement(fe.a,{item:!0,xs:3},ke[n]),o.map(function(e){return r.a.createElement(r.a.Fragment,{key:Ie()()},r.a.createElement(fe.a,{item:!0,xs:3}),r.a.createElement(fe.a,{item:!0,xs:3}),r.a.createElement(fe.a,{item:!0,xs:3},e),r.a.createElement(fe.a,{item:!0,xs:3},ke[e]))}),r.a.createElement(fe.a,{item:!0,xs:12,className:t.spacer}))}),r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{item:!0,xs:3}),r.a.createElement(fe.a,{item:!0,xs:3}),r.a.createElement(fe.a,{item:!0,xs:3},"Subtotal"),r.a.createElement(fe.a,{item:!0,xs:3},e.subTotal),r.a.createElement(fe.a,{item:!0,xs:3}),r.a.createElement(fe.a,{item:!0,xs:3}),r.a.createElement(fe.a,{item:!0,xs:3},"Delivery charges"),r.a.createElement(fe.a,{item:!0,xs:3},Ne),r.a.createElement(fe.a,{item:!0,xs:3}),r.a.createElement(fe.a,{item:!0,xs:3}),r.a.createElement(fe.a,{item:!0,xs:3},"Taxes"),r.a.createElement(fe.a,{item:!0,xs:3},Ae(e.subTotal)),r.a.createElement(fe.a,{item:!0,xs:3}),r.a.createElement(fe.a,{item:!0,xs:3}),r.a.createElement(fe.a,{item:!0,xs:3},"Total"),r.a.createElement(fe.a,{item:!0,xs:3},_e(e.subTotal)))))),r.a.createElement(fe.a,{item:!0,container:!0,xs:12,md:6},r.a.createElement(fe.a,{item:!0,container:!0,direction:"column",justify:"flex-start",alignItems:"center"},r.a.createElement(fe.a,{item:!0,xs:12},r.a.createElement(Ce,null))))))}));var Re=Object(me.withStyles)({root:{flexGrow:1,position:"sticky",top:0,zIndex:99},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(pe.a,{position:"static"},r.a.createElement(he.a,null,r.a.createElement(N.a,{variant:"h6",color:"inherit",className:t.grow},"KINTON RAMEN"),e.isAuthenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:Ee.b,to:"/menu",color:"inherit"},"Menu"),e.hasOrders?r.a.createElement(f.a,{component:Ee.b,to:"/orders/checkout",color:"inherit"},"Checkout"):null,e.hasOrders?r.a.createElement(f.a,{component:Ee.b,to:"/orders/history",color:"inherit"},"Order History"):null,r.a.createElement(f.a,{component:Ee.b,to:"/logout",color:"inherit"},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:Ee.b,to:"/signin",color:"inherit"},"SignIn"),r.a.createElement(f.a,{component:Ee.b,to:"/signup",color:"inherit"},"Sign up")))))}),De=(a(400),a(16)),Fe=a.n(De),qe=a(31),He=a.n(qe),Pe=a(57),Le=a.n(Pe),Me=a(58),Ve=a.n(Me),We=a(96),Ue=a.n(We),Be=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).getGridListCols=function(){return Object(qe.isWidthUp)("xl",a.props.width)?4:Object(qe.isWidthUp)("lg",a.props.width)?3:Object(qe.isWidthUp)("md",a.props.width)?2:(Object(qe.isWidthUp)("sm",a.props.width),1)},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(Le.a,{cellHeight:250,className:t.gridList,cols:this.getGridListCols()},this.props.options.map(function(a){return r.a.createElement(Ve.a,{key:a,cols:a.cols||1},r.a.createElement("img",{className:a===e.props.choice?t.Images+" "+t.Checked:t.Images,src:ye[a],onClick:function(){return e.props.choiceHandler(a)},alt:a}),r.a.createElement(Ue.a,{title:a,subtitle:r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr",justifyContent:"space-around"}},r.a.createElement("span",{style:{display:"inline-block",width:"100%"}},be[a]),r.a.createElement("span",{style:{display:"inline-block",width:"100%"}},ke[a]))}))})))}}]),t}(r.a.Component),Ge=Object(me.withStyles)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},Images:{"&:hover":{opacity:.65}},Checked:{opacity:.65}}})(He()()(Be)),Je=Object(c.b)(function(e){return{ramenChoice:e.menu.ramen}},function(e){return{ramenChoiceHandler:function(t){return e({type:"ADD_RAMEN_TYPE",ramenType:t})}}})(Object(me.withStyles)(function(e){return{root:Object(s.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}})(function(e){var t=e.classes,a=Object.keys(be);return r.a.createElement(w.a,{className:t.root},r.a.createElement(N.a,{variant:"h5",component:"h3"},"Ramen"),r.a.createElement(Ge,{options:a,choice:e.ramenChoice,choiceHandler:e.ramenChoiceHandler}))})),ze=Object(c.b)(function(e){return{noodleChoice:e.menu.noodle}},function(e){return{noodleChoiceHandler:function(t){return e({type:"ADD_NOODLE_TYPE",noodleType:t})}}})(Object(me.withStyles)(function(e){return{root:Object(s.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}})(function(e){var t=e.classes,a=Object.keys(ve);return r.a.createElement(w.a,{className:t.root},r.a.createElement(N.a,{variant:"h5",component:"h3"},"Noodle Type"),r.a.createElement(Ge,{options:a,choice:e.noodleChoice,choiceHandler:e.noodleChoiceHandler}))})),Ye=a(39),Xe=a.n(Ye),Qe=a(40),Ke=a.n(Qe),Ze=a(59),$e=a.n(Ze),et=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).getGridListCols=function(){return Object(qe.isWidthUp)("xl",a.props.width)?4:Object(qe.isWidthUp)("lg",a.props.width)?4:Object(qe.isWidthUp)("md",a.props.width)?3:2},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(Le.a,{className:t.gridList,cols:this.getGridListCols(),cellHeight:"auto"},this.props.options.map(function(t){return r.a.createElement(Ve.a,{key:t.primary,cols:1},r.a.createElement(Xe.a,{key:t.primary,role:void 0,dense:!0,button:!0,onClick:function(){return e.props.checkedAction(t.primary)}},r.a.createElement($e.a,{checked:-1!==e.props.checkedItems.indexOf(t.primary),tabIndex:-1,disableRipple:!0}),r.a.createElement(Ke.a,{primary:t.primary,secondary:t.secondary})))})))}}]),t}(r.a.Component),tt=Object(me.withStyles)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}})(He()()(et)),at=Object(c.b)(function(e){return{checkedExtras:e.menu.extras}},function(e){return{toggleExtraItem:function(t){return e(function(e){return{type:"TOGGLE_EXTRA_ITEM",extra:e}}(t))}}})(Object(me.withStyles)(function(e){return{root:Object(s.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}})(function(e){return r.a.createElement(w.a,{className:e.classes.root},r.a.createElement(N.a,{variant:"h5",component:"h3"},"Extra"),r.a.createElement(tt,{options:Oe,checkedAction:e.toggleExtraItem,checkedItems:e.checkedExtras}))})),nt=function(){return r.a.createElement(Fe.a,{container:!0,justify:"center"},r.a.createElement(Fe.a,{item:!0,xs:12},r.a.createElement(Je,null)),r.a.createElement(Fe.a,{item:!0,xs:12},r.a.createElement(ze,null)),r.a.createElement(Fe.a,{item:!0,xs:12},r.a.createElement(at,null)))},rt=a(105),it=a(97),ot=a.n(it),lt=a(179),ct=a.n(lt),st=Object(me.withStyles)({orderSummary:{display:"grid",gridTemplateColumns:"1fr 1fr",justifyContent:"space-between",span:{display:"block"},"&:nth-child(even)":{textAlign:"right"}}})(function(e){var t=e.classes,a=e.extras.map(function(e){return ke[e]}).reduce(function(e,t){return e+t},0),n=(ke[e.ramen]+a).toFixed(2);return r.a.createElement("div",{className:t.orderSummary},r.a.createElement("div",null,r.a.createElement("div",null,e.ramen),r.a.createElement("div",null,e.noodle),e.extras.length>0?e.extras.map(function(e){return r.a.createElement("div",{key:e},e)}):null,r.a.createElement("div",null,r.a.createElement("strong",null,"Price"))),r.a.createElement("div",null,r.a.createElement("div",null,ke[e.ramen]),r.a.createElement("div",null,ke[e.noodle]),e.extras.length>0?e.extras.map(function(e){return r.a.createElement("div",{key:e},ke[e])}):null,r.a.createElement("div",null,r.a.createElement("strong",null,"$",n))))}),ut=Object(c.b)(function(e){return{ramen:e.menu.ramen,noodle:e.menu.noodle,extras:e.menu.extras,orders:e.cart.orders,error:e.auth.error}},function(e){return{addOrder:function(t,a){return e(function(e,t){return{type:"ADD_ORDER",order:e,orderPrice:t}}(t,a))}}})(Object(me.withStyles)(function(e){return{fab:{margin:0,top:"auto",left:"auto",bottom:30,right:30,position:"fixed"}}})(function(e){var t=Object(n.useState)(!1),a=Object(le.a)(t,2),i=a[0],o=a[1];Object(n.useEffect)(function(){o(!1)},[]);var l=null!==e.ramen&&null!==e.noodle,c=e.classes,s=Object(rt.a)(e,["classes"]),u=e.extras.map(function(e){return ke[e]}).reduce(function(e,t){return e+t},0),m=ke[e.ramen]+u,d={id:Ie()(),ramen:e.ramen,noodle:e.noodle,extras:e.extras,orderPrice:m.toFixed(2)},p=function(){o(!i)},g=r.a.createElement(st,s);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ot.a,{onClick:function(){return p()},color:"primary","aria-label":"Add",disabled:!l,className:c.fab},r.a.createElement(ct.a,null)),r.a.createElement(re,Object.assign({},e,{title:"Add the following to your order?",content:g,show:i,okAction:function(){return t=d,a=m.toFixed(2),e.addOrder(t,a),void o(!i);var t,a},cancelAction:function(){return p()}})))})),mt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(nt,null),r.a.createElement(ut,null))},dt=Object(c.b)(null,function(e){return{logout:function(){return e(P())}}})(function(e){return e.logout(),r.a.createElement(B.a,{to:"/"})}),pt=a(99),gt=a.n(pt),ht=a(100),Et=a.n(ht),ft=a(101),bt=a.n(ft);var yt=function(){var e=Object(n.useContext)(wt),t=Object(le.a)(e,2),a=t[0],i=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{variant:"h6",gutterBottom:!0},"Delivery address"),r.a.createElement(Fe.a,{container:!0,spacing:24},r.a.createElement(Fe.a,{item:!0,xs:12,sm:6},r.a.createElement(b.TextValidator,{required:!0,id:"firstName",name:"firstName",label:"First name",validators:["required","lettersOnly"],errorMessages:["this field is required","Contains an invalid character"],fullWidth:!0,autoComplete:"fname",onChange:function(e){return i({type:"field",name:e.target.name,value:e.target.value})},value:a.firstName})),r.a.createElement(Fe.a,{item:!0,xs:12,sm:6},r.a.createElement(b.TextValidator,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0,validators:["required","lettersOnly"],errorMessages:["this field is required","Contains an invalid character"],autoComplete:"lname",onChange:function(e){return i({type:"field",name:e.target.name,value:e.target.value})},value:a.lastName})),r.a.createElement(Fe.a,{item:!0,xs:12},r.a.createElement(b.TextValidator,{required:!0,id:"address1",name:"address1",validators:["required"],errorMessages:["this field is required"],label:"Address line 1",fullWidth:!0,autoComplete:"billing address-line1",onChange:function(e){return i({type:"field",name:e.target.name,value:e.target.value})},value:a.address1})),r.a.createElement(Fe.a,{item:!0,xs:12},r.a.createElement(b.TextValidator,{id:"address2",name:"address2",label:"Address line 2",fullWidth:!0,autoComplete:"billing address-line2"})),r.a.createElement(Fe.a,{item:!0,xs:12,sm:6},r.a.createElement(b.TextValidator,{required:!0,id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"billing address-level2",validators:["required","lettersOnly"],errorMessages:["this field is required","Contains an invalid character"],onChange:function(e){return i({type:"field",name:e.target.name,value:e.target.value})},value:a.city})),r.a.createElement(Fe.a,{item:!0,xs:12,sm:6},r.a.createElement(b.TextValidator,{id:"state",name:"state",label:"State/Province/Region",validators:["required","lettersOnly"],errorMessages:["this field is required","Contains an invalid character"],fullWidth:!0,onChange:function(e){return i({type:"field",name:e.target.name,value:e.target.value})},value:a.state})),r.a.createElement(Fe.a,{item:!0,xs:12,sm:6},r.a.createElement(b.TextValidator,{required:!0,id:"zip",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"billing postal-code",validators:["required"],errorMessages:["this field is required"],onChange:function(e){return i({type:"field",name:e.target.name,value:e.target.value})},value:a.zip})),r.a.createElement(Fe.a,{item:!0,xs:12,sm:6},r.a.createElement(b.TextValidator,{required:!0,id:"country",name:"country",label:"Country",fullWidth:!0,autoComplete:"billing country",validators:["required","lettersOnly"],errorMessages:["this field is required","Contains an invalid character"],onChange:function(e){return i({type:"field",name:e.target.name,value:e.target.value})},value:a.country}))))};a(38),a(98);var vt=a(75),Ot=a.n(vt),kt=8.95,xt=.13;var jt=Object(c.b)(function(e){return{orders:e.cart.orders,subTotal:e.cart.subTotal}})(Object(me.withStyles)(function(e){return{listItem:{padding:"".concat(e.spacing.unit,"px 0")},total:{fontWeight:"700"},title:{marginTop:2*e.spacing.unit}}})(function(e){var t=Object(n.useContext)(wt),a=Object(le.a)(t,1)[0],i=a.firstName,o=a.lastName,l=Object(rt.a)(a,["firstName","lastName"]),c=e.classes,s=e.orders,u=e.subTotal,m=parseFloat(xt*u),d=parseFloat(m+u+kt);return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{variant:"h6",gutterBottom:!0},"Order summary:"),r.a.createElement(Ot.a,{disablePadding:!0},s.map(function(e){return r.a.createElement(Xe.a,{className:c.listItem,key:e.id},r.a.createElement(Ke.a,{primary:"".concat(e.ramen," ").concat(e.noodle),secondary:e.extras.toString()}),r.a.createElement(N.a,{variant:"body2"},e.orderPrice))}),r.a.createElement(Xe.a,{className:c.listItem},r.a.createElement(Ke.a,{primary:"Subtotal"}),r.a.createElement(N.a,{variant:"subtitle1",className:c.total},u.toFixed(2))),r.a.createElement(Xe.a,{className:c.listItem},r.a.createElement(Ke.a,{primary:"Delivery Fees"}),r.a.createElement(N.a,{variant:"subtitle1",className:c.total},kt)),r.a.createElement(Xe.a,{className:c.listItem},r.a.createElement(Ke.a,{primary:"Taxes"}),r.a.createElement(N.a,{variant:"subtitle1",className:c.total},m.toFixed(2))),r.a.createElement(Xe.a,{className:c.listItem},r.a.createElement(Ke.a,{primary:"Total"}),r.a.createElement(N.a,{variant:"subtitle1",className:c.total},d.toFixed(2)))),r.a.createElement(Fe.a,{container:!0,spacing:16},r.a.createElement(Fe.a,{item:!0,xs:12,sm:12},r.a.createElement(N.a,{variant:"h6",gutterBottom:!0,className:c.title},"Delivering to:"),r.a.createElement(N.a,{gutterBottom:!0},"".concat(i," ").concat(o)),r.a.createElement(N.a,{gutterBottom:!0},Object.values(l).join(", ")))))})),St=["Delivery address","Review your order"],Tt=function(e,t){switch(t.type){case"field":return Object(s.a)({},e,Object(h.a)({},t.name,t.value));case"reset":return t.payload;default:return e}},Ct={firstName:"",lastName:"",address1:"",city:"",state:"",zip:"",country:""},wt=r.a.createContext(),It=Object(c.b)(function(e){return{orders:e.cart.orders,userId:e.auth.userId,idToken:e.auth.idToken,sendingOrder:e.checkout.sending,purchaseOrderId:e.checkout.purchaseOrderId,checkoutError:e.checkout.error}},function(e){return{submitOrders:function(t,a,n,r){e(M(t,a,n,r))}}})(_()(function(e){return{appBar:{position:"relative"},layout:Object(h.a)({width:"auto",marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit},e.breakpoints.up(600+2*e.spacing.unit*2),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(h.a)({marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:6*e.spacing.unit,marginBottom:6*e.spacing.unit,padding:3*e.spacing.unit}),stepper:{padding:"".concat(3*e.spacing.unit,"px 0 ").concat(5*e.spacing.unit,"px")},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:3*e.spacing.unit,marginLeft:e.spacing.unit}}})(function(e){var t=Object(n.useState)(0),a=Object(le.a)(t,2),i=a[0],o=a[1],l=Object(n.useRef)(null),c=Object(n.useReducer)(Tt,Ct),s=Object(le.a)(c,2),u=s[0],m=s[1];Object(n.useEffect)(function(){var e=localStorage.getItem("ramenAppAddressFormData");return e&&m({type:"reset",payload:JSON.parse(e)}),function(){console.log("addressFormState",u),console.log("unmounting...")}},[]),Object(n.useEffect)(function(){localStorage.setItem("ramenAppAddressFormData",JSON.stringify(u)),console.log(u)},[u]);Object(n.useEffect)(function(){b.ValidatorForm.addValidationRule("lettersOnly",function(e){return!/[^a-zA-Z\s]/g.test(e)})},[]);var d=e.classes,p=e.sendingOrder?r.a.createElement(se.a,null):null,g=e.purchaseOrderId?r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{variant:"h5",gutterBottom:!0},"Thank you for your order."),r.a.createElement(N.a,{variant:"subtitle1"},"Your order ID is ",e.purchaseOrderId.replace(/-|_/g,""),". We have emailed your order confirmation, and will send you an update of the status of your delivery.")):null;console.log("checkout submit"),i!==St.length||e.purchaseOrderId||e.sendingOrder||e.checkoutError||e.submitOrders(e.idToken,e.orders,u,e.userId);var h=e.checkoutError?r.a.createElement("h1",null,e.checkoutError):null,E=i<St.length?r.a.createElement(r.a.Fragment,null,function(e){switch(e){case 0:return r.a.createElement(yt,null);case 1:return r.a.createElement(jt,null);default:throw new Error("Unknown step")}}(i),r.a.createElement("div",{className:d.buttons},0!==i&&r.a.createElement(f.a,{onClick:function(e){e.preventDefault(),o(i-1)},className:d.button},"Back"),r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),console.log(l),l.current.isFormValid(!1).then(function(e){e&&o(i+1)})},className:d.button},i===St.length-1?"Place order":"Next"))):null;return r.a.createElement(wt.Provider,{value:[u,m]},r.a.createElement(b.ValidatorForm,{ref:l,instantValidate:!0,onSubmit:function(){return console.log("submitting")}},r.a.createElement(k.a,null),r.a.createElement("main",{className:d.layout},r.a.createElement(w.a,{className:d.paper},r.a.createElement(N.a,{component:"h1",variant:"h4",align:"center"},"Checkout"),r.a.createElement(gt.a,{activeStep:i,className:d.stepper},St.map(function(e){return r.a.createElement(Et.a,{key:e},r.a.createElement(bt.a,null,e))})),h,p,g,E))))})),Nt=Object(c.b)(function(e){return{token:e.auth.idToken,userId:e.auth.userId,ordersHistory:e.ordersHistory.ordersHistory}},function(e){return{fetchOrdersHistory:function(t,a){return e(function(e,t){return function(a){a({type:"FETCH_ORDERS_HISTORY_INIT"}),L.get("/orders.json?auth="+e+'&orderBy="userId"&equalTo="'+t+'"').then(function(e){a({type:"FETCH_ORDERS_HISTORY_SUCCESS",ordersHistory:e.data})}).catch(function(e){a(function(e){return{type:"FETCH_ORDERS_HISTORY_FAIL",error:e}}(e))})}}(t,a))}}})(function(e){return Object(n.useEffect)(function(){e.fetchOrdersHistory(e.token,e.userId)},[]),console.log(e.ordersHistory),r.a.createElement("h1",null,"OrdersHistory")}),At=Object(c.b)(function(e){return{isAuthenticated:null!==e.auth.idToken,hasOrders:e.cart.orders.length>0,idToken:e.auth.idToken,userId:e.auth.userId}},function(e){return{validUserAlreadyLoggedIn:function(){return e(function(e){var t=localStorage.getItem("token");t||e(P());var a={idToken:t};D.a.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyCc105jdNCASMJIslySAslIHCJF3zn7eFQ",a).then(function(a){var n=a.data.users[0].localId;localStorage.setItem("userId",n),e(F(t,n))}).catch(function(t){e(P())})})}}})(function(e){localStorage.getItem("token")&&!e.isAuthenticated&&e.validUserAlreadyLoggedIn();var t=e.isAuthenticated?r.a.createElement(B.d,null,r.a.createElement(B.b,{path:"/",exact:!0,strict:!0,component:mt}),r.a.createElement(B.b,{path:"/menu",exact:!0,strict:!0,component:mt}),r.a.createElement(B.b,{path:"/logout",exact:!0,component:dt}),e.hasOrders?r.a.createElement(B.b,{path:"/orders/checkout",exact:!0,component:It}):null,e.hasOrders?r.a.createElement(B.b,{path:"/orders/history",exact:!0,component:Nt}):null,r.a.createElement(B.a,{to:"/",component:mt})):r.a.createElement(B.d,null,r.a.createElement(B.b,{path:"/signup",component:oe}),r.a.createElement(B.b,{path:"/signin",component:ue}),r.a.createElement(B.a,{to:"/signup",component:oe}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Re,{isAuthenticated:e.isAuthenticated,hasOrders:e.hasOrders}),t)}),_t=a(65),Rt={orders:[],subTotal:0,purchased:!1},Dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ORDER":var a=Object(_t.a)(e.orders),n=Object(s.a)({},t.order);a.push(n);var r=+e.subTotal+ +t.orderPrice;return Object(s.a)({},e,{orders:a,subTotal:r});case"REMOVE_ORDER":var i=e.orders.filter(function(e){return e.id===t.id}),o=Object(le.a)(i,1)[0],l=e.subTotal-+o.orderPrice,c=Object(_t.a)(e.orders).filter(function(e){return e.id!==t.id});return Object(s.a)({},e,{orders:c,subTotal:l});default:return e}},Ft={idToken:null,userId:null,error:null,loading:!1},qt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Object(s.a)({},e,{error:null,loading:!0});case"AUTH_SUCCESS":return Object(s.a)({},e,{loading:!1,idToken:t.idToken,userId:t.userId});case"AUTH_FAIL":return Object(s.a)({},e,{loading:!1,error:t.error});case"AUTH_LOGOUT":return Object(s.a)({},e,{loading:!1,idToken:null,userId:null,error:null});default:return console.log("auth reducer",t.type),e}},Ht={ramen:null,noodle:null,extras:[]},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_RAMEN_TYPE":return Object(s.a)({},e,{ramen:t.ramenType});case"ADD_NOODLE_TYPE":return Object(s.a)({},e,{noodle:t.noodleType});case"TOGGLE_EXTRA_ITEM":var a=e.extras.indexOf(t.extra),n=Object(_t.a)(e.extras);return-1===a?n.push(t.extra):n.splice(a,1),Object(s.a)({},e,{extras:Object(_t.a)(n)});case"ADD_ORDER":return Object(s.a)({},Ht);default:return e}},Lt={sending:!1,purchaseOrderId:null,error:null},Mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_ORDERS_INIT":return Object(s.a)({},e,{sending:!0});case"SEND_ORDERS_SUCCESS":return Object(s.a)({},e,{sending:!1,purchaseOrderId:t.purchaseOrderId});case"SEND_ORDERS_FAIL":return Object(s.a)({},e,{sending:!1,error:t.error});default:return e}},Vt={error:null,ordersHistory:null,isLoading:!1},Wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ORDERS_HISTORY_INIT":return Object(s.a)({},e,{isLoading:!0});case"FETCH_ORDERS_HISTORY_SUCCESS":return Object(s.a)({},e,{isLoading:!1,ordersHistory:t.ordersHistory});case"FETCH_ORDERS_HISTORY_FAIL":return Object(s.a)({},e,{isLoading:!1,error:t.error});default:return e}},Ut=a(180),Bt=Object(l.c)({menu:Pt,cart:Dt,auth:qt,checkout:Mt,ordersHistory:Wt}),Gt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,Jt=Object(l.e)(Bt,Gt(Object(l.a)(Ut.a)));o.a.render(r.a.createElement(c.a,{store:Jt},r.a.createElement(Ee.a,null,r.a.createElement(At,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[235,1,2]]]);
//# sourceMappingURL=main.100cb060.chunk.js.map