(this["webpackJsonpen-questas_uno"]=this["webpackJsonpen-questas_uno"]||[]).push([[0],{113:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(22),r=n.n(c),i=(n(75),n(27),n(120)),o=n(115),l=n(121),d=n(15),j=n.p+"static/media/logo777.9b9ac589.png",u=n(0);var b=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(i.a,{className:"navegacion",children:Object(u.jsxs)(o.a,{children:[Object(u.jsxs)(d.b,{to:"/en-questas_uno/",children:[Object(u.jsx)("img",{src:j,width:"50px"}),Object(u.jsx)(i.a.Brand,{href:"/en-questas_uno/",children:"EnQestas"})]}),Object(u.jsxs)(l.a,{className:"mx-auto",children:[Object(u.jsx)(d.b,{to:"/en-questas_uno/encuesta",children:Object(u.jsx)(l.a.Link,{href:"#Encuesta",children:"Quiz"})}),Object(u.jsx)(d.b,{to:"/en-questas_uno/register",children:Object(u.jsx)(l.a.Link,{href:"#Register",children:"Register"})}),Object(u.jsx)(d.b,{to:"/en-questas_uno/login",children:Object(u.jsx)(l.a.Link,{href:"#Login",children:"Login"})}),Object(u.jsx)(d.b,{to:"/en-questas_uno/logout",children:Object(u.jsx)(l.a.Link,{href:"#Logout",children:"Logout"})})]})]})})})};var m=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)(i.a,{children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(i.a.Brand,{href:"#home",children:"Footer"}),Object(u.jsx)(l.a,{className:"me-auto",children:Object(u.jsx)(l.a.Link,{href:"#home",children:"Development with \u2764\ufe0f by Norn"})})]})})})})},p=n(10),h=n.n(p),O=n(14),x=n(9),g=n(23),f=n(24),v=n(26),N=n(25),y=n(122),C=n(69),_=n.n(C).a.create({baseURL:"https://encuestaspythonflask.herokuapp.com/"}),I=function(e){Object(v.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={nombre:"",contrasenia:"",errors:{usermsg:""}},e.handleChange=function(t){e.setState(Object(x.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(O.a)(h.a.mark((function t(n){var a,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={nombre:e.state.nombre,contrasenia:e.state.contrasenia},console.log(e.state.nombre),console.log(e.state.contrasenia),s="",t.next=7,_.post("api/login",{user:a}).then((function(t){s="",console.log(t),console.log(t.data),localStorage.setItem("usuario",JSON.stringify(t.data)),e.setState({errors:{usermsg:s}}),e.props.history.push("/en-questas_uno/encuesta")})).catch((function(e){e.response?(console.log("here in cath erormsg"),s=e.response.data,console.log(e.response.data)):e.request?console.log(e.request):console.log("Error",e.message)}));case 7:""!==s&&e.setState({errors:{usermsg:s}});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"grid-login",children:Object(u.jsx)("div",{className:"container-grid-login",children:Object(u.jsx)("div",{className:"container-formulario-login position-absolute top-50 start-50 translate-middle",children:Object(u.jsxs)(y.a,{method:"POST",onSubmit:this.handleSubmit,children:[Object(u.jsx)("div",{className:"error-msg",children:this.state.errors.usermsg}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"formBasicInput",children:[Object(u.jsx)(y.a.Label,{children:"Email"}),Object(u.jsx)(y.a.Control,{type:"text",name:"nombre",placeholder:"Ingresa tu email",onChange:this.handleChange}),Object(u.jsx)(y.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(y.a.Label,{children:"Contrase\xf1a"}),Object(u.jsx)(y.a.Control,{type:"password",name:"contrasenia",placeholder:"Ingresa tu contrase\xf1a",onChange:this.handleChange})]}),Object(u.jsx)("button",{className:"boton-login",type:"submit",children:"Iniciar Sesi\xf3n"}),Object(u.jsx)("img",{src:"./carita-feliz.png",alt:""})]})})})})}}]),n}(s.a.Component),k=n(11),S=function(){var e=Object(k.f)();return Object(a.useEffect)((function(){localStorage.getItem("usuario")&&(localStorage.clear(),e.push("/en-questas/"))})),Object(u.jsx)(u.Fragment,{})},w=function(e){Object(v.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={nombre:"",email:"",contrasenia:"",errors:{usermsg:""}},e.handleChange=function(t){e.setState(Object(x.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(O.a)(h.a.mark((function t(n){var a,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={nombre:e.state.nombre,email:e.state.email,contrasenia:e.state.contrasenia},console.log(e.state.nombre),console.log(e.state.email),console.log(e.state.contrasenia),s={},t.next=8,_.post("api/register",{user:a}).then((function(e){console.log(e),console.log(e.data),s.usermsg=e.data})).catch((function(e){e.response?(console.log("here in cath erormsg"),s.usermsg=e.response.data,console.log(e.response.data)):e.request?console.log(e.request):console.log("Error",e.message)}));case 8:e.setState({errors:s});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(n,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"grid-register",children:Object(u.jsx)("div",{className:"container-grid-register",children:Object(u.jsx)("div",{className:"container-formulario-register position-absolute top-50 start-50 translate-middle",children:Object(u.jsxs)(y.a,{className:"formulario-registro",method:"POST",onSubmit:this.handleSubmit,children:[Object(u.jsx)("div",{className:"error-msg",children:this.state.errors.usermsg}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"formBasicInput",children:[Object(u.jsx)(y.a.Label,{children:"Username"}),Object(u.jsx)(y.a.Control,{type:"text",name:"nombre",placeholder:"Enter username",onChange:this.handleChange})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"formBasicInput",children:[Object(u.jsx)(y.a.Label,{children:"Email"}),Object(u.jsx)(y.a.Control,{type:"email",name:"email",placeholder:"Enter username",onChange:this.handleChange}),Object(u.jsx)(y.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(u.jsxs)(y.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(y.a.Label,{children:"Password"}),Object(u.jsx)(y.a.Control,{type:"password",name:"contrasenia",placeholder:"Password",onChange:this.handleChange})]}),Object(u.jsx)("button",{className:"boton-registro",type:"submit",children:"Registrarse"})]})})})})})}}]),n}(s.a.Component),E=n(3),q=(n(32),n(16)),D=n(17),P=n(123),F=n(117),A=n(118),G=n(119),M=n(116),L=n(70),z=n(124),B=n(40),T=function(e){Object(v.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={data:[],modalInsertar:!1,modalEliminar:!1,form:{id:"",nombre:"",descripcion:"",img:"",user_id:"",tipoModal:""},file:null},e.handleInputChange=function(){var t=Object(O.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({file:n.target.files[0]});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.peticionGet=function(){var t=localStorage.getItem("usuario"),n=Object(B.a)(t);t&&(e.state.form.user_id=n.sub),_.get("encuestas_usuario?id=".concat(e.state.form.user_id)).then((function(t){e.setState({data:t.data})})).catch((function(e){console.log(e.message)}))},e.peticionPost=Object(O.a)(h.a.mark((function t(){var n,a,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("usuario"),a=Object(B.a)(n),n&&(e.state.form.user_id=a.sub),(s=new FormData).append("img",e.state.file),s.append("user_id",e.state.form.user_id),s.append("descripcion",e.state.form.descripcion),s.append("nombre",e.state.form.nombre),console.warn(s),delete e.state.form.id,t.next=12,_.post("encuesta",s).then((function(t){e.modalInsertar(),e.peticionGet()})).catch((function(e){console.log(e.message)}));case 12:case"end":return t.stop()}}),t)}))),e.peticionPut=function(){var t=new FormData;t.append("img",e.state.file),t.append("id",e.state.form.id),t.append("descripcion",e.state.form.descripcion),t.append("nombre",e.state.form.nombre),_.put("encuesta",t).then((function(t){e.modalInsertar(),e.peticionGet()}))},e.peticionDelete=function(){_.delete("encuesta?id="+e.state.form.id).then((function(t){e.setState({modalEliminar:!1}),e.peticionGet()}))},e.modalInsertar=function(){e.setState({modalInsertar:!e.state.modalInsertar})},e.seleccionarencuesta=function(t){e.setState({tipoModal:"actualizar",form:{id:t.id,nombre:t.nombre,descripcion:t.descripcion,img:t.img}})},e.handleChange=function(){var t=Object(O.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.persist(),t.next=3,e.setState({form:Object(E.a)(Object(E.a)({},e.state.form),{},Object(x.a)({},n.target.name,n.target.value))});case 3:console.log(e.state.form);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("usuario"),t=Object(B.a)(e);console.log(t.sub),e&&(this.state.form.user_id=parseInt(t.sub),console.log("this is the user id: "),console.log(this.state.form.user_id)),this.peticionGet()}},{key:"render",value:function(){var e=this,t=this.state.form;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"btn-agregar-encuesta",onClick:function(){e.setState({form:null,tipoModal:"insertar"}),e.modalInsertar()},children:"Agregar encuesta"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a,{children:Object(u.jsx)(M.a,{children:Object(u.jsx)("div",{className:"card-columns",children:this.state.data.map((function(t){return Object(u.jsx)(L.a,{children:Object(u.jsxs)(z.a,{className:"card-block",children:[Object(u.jsx)("img",{className:"card-img-top img-fluid",src:t.img,alt:t.nombre}),Object(u.jsxs)(z.a.Body,{children:[Object(u.jsx)(z.a.Title,{children:t.nombre}),Object(u.jsx)(z.a.Text,{children:t.descripcion})]}),Object(u.jsxs)(z.a.Body,{children:[Object(u.jsx)(d.b,{to:"/en-questas_uno/encuesta/seccion/".concat(t.id),children:Object(u.jsx)("button",{className:"btn btn-info",children:Object(u.jsx)(q.a,{icon:D.c})})}),"   ",Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){e.seleccionarencuesta(t),e.modalInsertar()},children:Object(u.jsx)(q.a,{icon:D.b})}),"   ",Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){e.seleccionarencuesta(t),e.setState({modalEliminar:!0})},children:Object(u.jsx)(q.a,{icon:D.e})})]})]})})}))})})}),Object(u.jsxs)(P.a,{isOpen:this.state.modalInsertar,children:[Object(u.jsx)(F.a,{style:{display:"block"},children:Object(u.jsx)("span",{style:{float:"right"},onClick:function(){return e.modalInsertar()},children:"x"})}),Object(u.jsx)(A.a,{children:Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"id",children:"ID"}),Object(u.jsx)("input",{className:"form-control",type:"text",name:"id",id:"id",readOnly:!0,onChange:this.handleChange,value:t?t.id:this.state.data.length+1}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"nombre",children:"Name"}),Object(u.jsx)("input",{className:"form-control",type:"text",name:"nombre",id:"nombre",onChange:this.handleChange,value:t?t.nombre:""}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"descripcion",children:"Description"}),Object(u.jsx)("input",{className:"form-control",type:"text",name:"descripcion",id:"descripcion",onChange:this.handleChange,value:t?t.descripcion:""}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"img",children:"Img"}),Object(u.jsx)("input",{className:"form-control",type:"file",name:"img",id:"img",onChange:this.handleInputChange})]})}),Object(u.jsxs)(G.a,{children:["insertar"==this.state.tipoModal?Object(u.jsx)("button",{className:"btn btn-success",onClick:function(){return e.peticionPost()},children:"Insertar"}):Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.peticionPut()},children:"Actualizar"}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.modalInsertar()},children:"Cancelar"})]})]}),Object(u.jsxs)(P.a,{isOpen:this.state.modalEliminar,children:[Object(u.jsxs)(A.a,{children:["Est\xe1s seguro que deseas eliminar a la encuesta ",t&&t.nombre]}),Object(u.jsxs)(G.a,{children:[Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.peticionDelete()},children:"S\xed"}),Object(u.jsx)("button",{className:"btn btn-secundary",onClick:function(){return e.setState({modalEliminar:!1})},children:"No"})]})]})]})}}]),n}(a.Component),R=T,J=function(e){Object(v.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={data:[],modalInsertar:!1,modalEliminar:!1,form:{id:"",nombre:"",id_encuesta:""}},e.peticionGet=function(){e.state.form.id_encuesta=e.props.match.params.id,_.get("secciones_encuesta?id=".concat(e.state.form.id_encuesta)).then((function(t){e.setState({data:t.data})})).catch((function(e){console.log(e.message)}))},e.peticionPost=Object(O.a)(h.a.mark((function t(){var n,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.match.params.id,(a=new FormData).append("nombre",e.state.form.nombre),a.append("id_encuesta",n),t.next=6,_.post("seccion",a).then((function(t){e.modalInsertar(),e.peticionGet()})).catch((function(e){console.log(e.message)}));case 6:case"end":return t.stop()}}),t)}))),e.peticionPut=function(){var t=new FormData;t.append("id",e.state.form.id),t.append("nombre",e.state.form.nombre),_.put("seccion",t).then((function(t){e.modalInsertar(),e.peticionGet()}))},e.peticionDelete=function(){_.delete("seccion?id="+e.state.form.id).then((function(t){e.setState({modalEliminar:!1}),e.peticionGet()}))},e.modalInsertar=function(){e.setState({modalInsertar:!e.state.modalInsertar})},e.seleccionarseccion=function(t){e.setState({tipoModal:"actualizar",form:{id:t.id,nombre:t.nombre,id_encuesta:e.props.match.params.id}})},e.handleChange=function(){var t=Object(O.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.persist(),t.next=3,e.setState({form:Object(E.a)(Object(E.a)({},e.state.form),{},Object(x.a)({},n.target.name,n.target.value))});case 3:console.log(e.state.form);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.state.form.id_encuesta=this.props.match.params.id,console.log(this.state.form.id_encuesta),this.peticionGet()}},{key:"render",value:function(){var e=this,t=this.state.form;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"btn btn-success",onClick:function(){e.setState({form:null,tipoModal:"insertar"}),e.modalInsertar()},children:"Agregar seccion"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("table",{className:"table ",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"ID"}),Object(u.jsx)("th",{children:"Nombre"}),Object(u.jsx)("th",{children:"Acciones"})]})}),Object(u.jsx)("tbody",{children:this.state.data.map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.id}),Object(u.jsx)("td",{children:t.nombre}),Object(u.jsxs)("td",{children:[Object(u.jsx)(d.b,{to:"/en-questas_uno/encuesta/seccion/preguntas/".concat(t.id),children:Object(u.jsx)("button",{className:"btn btn-info",children:Object(u.jsx)(q.a,{icon:D.d})})}),"   ",Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){e.seleccionarseccion(t),e.modalInsertar()},children:Object(u.jsx)(q.a,{icon:D.b})}),"   ",Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){e.seleccionarseccion(t),e.setState({modalEliminar:!0})},children:Object(u.jsx)(q.a,{icon:D.e})})]})]})}))})]}),Object(u.jsxs)(P.a,{isOpen:this.state.modalInsertar,children:[Object(u.jsx)(F.a,{style:{display:"block"},children:Object(u.jsx)("span",{style:{float:"right"},onClick:function(){return e.modalInsertar()},children:"x"})}),Object(u.jsx)(A.a,{children:Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"id",children:"ID"}),Object(u.jsx)("input",{className:"form-control",type:"text",name:"id",id:"id",readOnly:!0,onChange:this.handleChange,value:t?t.id:this.state.data.length+1}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"nombre",children:"Name"}),Object(u.jsx)("input",{className:"form-control",type:"text",name:"nombre",id:"nombre",onChange:this.handleChange,value:t?t.nombre:""}),Object(u.jsx)("br",{})]})}),Object(u.jsxs)(G.a,{children:["insertar"==this.state.tipoModal?Object(u.jsx)("button",{className:"btn btn-success",onClick:function(){return e.peticionPost()},children:"Insertar"}):Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.peticionPut()},children:"Actualizar"}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.modalInsertar()},children:"Cancelar"})]})]}),Object(u.jsxs)(P.a,{isOpen:this.state.modalEliminar,children:[Object(u.jsxs)(A.a,{children:["Est\xe1s seguro que deseas eliminar a la seccion ",t&&t.nombre]}),Object(u.jsxs)(G.a,{children:[Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.peticionDelete()},children:"S\xed"}),Object(u.jsx)("button",{className:"btn btn-secundary",onClick:function(){return e.setState({modalEliminar:!1})},children:"No"})]})]})]})}}]),n}(a.Component),H=J,Q=function(e){Object(v.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={data:[],modalInsertar:!1,modalEliminar:!1,form:{id:"",pregunta:"",id_seccion:"",id_tipo_pregunta:""},tipos_de_preguntas:[]},e.getTiposdePreguntas=function(){_.get("tipo_preguntas").then((function(t){console.log("this is response de tipos de preguntas: "),console.log(t.data),e.setState({tipos_de_preguntas:t.data}),console.log("lista de tipos de preguntas: "),console.log(e.state.tipos_de_preguntas)})).catch((function(e){console.log(e.message)}))},e.peticionGet=Object(O.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.state.form.id_seccion=e.props.match.params.id,_.get("preguntas_seccion?id=".concat(e.state.form.id_seccion)).then((function(t){e.setState({data:t.data})})).catch((function(e){console.log(e.message)}));case 2:case"end":return t.stop()}}),t)}))),e.peticionPost=Object(O.a)(h.a.mark((function t(){var n,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.match.params.id,a=new FormData,null==e.state.form.id_tipo_pregunta?a.append("id_tipo_pregunta",1):a.append("id_tipo_pregunta",e.state.form.id_tipo_pregunta),a.append("pregunta",e.state.form.pregunta),a.append("id_seccion",n),t.next=7,_.post("pregunta",a).then((function(t){e.modalInsertar(),e.peticionGet()})).catch((function(e){console.log(e.message)}));case 7:case"end":return t.stop()}}),t)}))),e.peticionPut=function(){var t=new FormData;t.append("id",e.state.form.id),t.append("pregunta",e.state.form.pregunta),t.append("id_tipo_pregunta",e.state.form.id_tipo_pregunta),_.put("pregunta",t).then((function(t){e.modalInsertar(),e.peticionGet()}))},e.peticionDelete=function(){_.delete("pregunta?id="+e.state.form.id).then((function(t){e.setState({modalEliminar:!1}),e.peticionGet()}))},e.modalInsertar=function(){e.setState({modalInsertar:!e.state.modalInsertar})},e.seleccionarpregunta=function(t){e.setState({tipoModal:"actualizar",form:{id:t.id,pregunta:t.pregunta,id_tipo_pregunta:t.id_tipo_pregunta}})},e.handleChange=function(){var t=Object(O.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.persist(),t.next=3,e.setState({form:Object(E.a)(Object(E.a)({},e.state.form),{},Object(x.a)({},n.target.name,n.target.value))});case 3:console.log(e.state.form);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.state.form.id_seccion=this.props.match.params.id,this.peticionGet(),this.getTiposdePreguntas()}},{key:"render",value:function(){var e=this,t=this.state.form,n=this.state.tipos_de_preguntas;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"btn btn-success",onClick:function(){e.setState({form:null,tipoModal:"insertar"}),e.modalInsertar()},children:"Agregar pregunta"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("table",{className:"table ",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"ID"}),Object(u.jsx)("th",{children:"Pregunta"}),Object(u.jsx)("th",{children:"Tipo pregunta"}),Object(u.jsx)("th",{children:"Acciones"})]})}),Object(u.jsx)("tbody",{children:this.state.data.map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.id}),Object(u.jsx)("td",{children:t.pregunta}),Object(u.jsx)("td",{children:n.map((function(e){if(e.id==t.id_tipo_pregunta)return e.nombre}))}),Object(u.jsxs)("td",{children:[Object(u.jsx)(d.b,{to:"/en-questas_uno/encuesta/seccion/preguntas/opciones/".concat(t.id),children:Object(u.jsx)("button",{className:"btn btn-info",children:Object(u.jsx)(q.a,{icon:D.a})})}),"   ",Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){e.seleccionarpregunta(t),e.modalInsertar()},children:Object(u.jsx)(q.a,{icon:D.b})}),"   ",Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){e.seleccionarpregunta(t),e.setState({modalEliminar:!0})},children:Object(u.jsx)(q.a,{icon:D.e})})]})]})}))})]}),Object(u.jsxs)(P.a,{isOpen:this.state.modalInsertar,children:[Object(u.jsx)(F.a,{style:{display:"block"},children:Object(u.jsx)("span",{style:{float:"right"},onClick:function(){return e.modalInsertar()},children:"x"})}),Object(u.jsx)(A.a,{children:Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"id",children:"ID"}),Object(u.jsx)("input",{className:"form-control",type:"text",name:"id",id:"id",readOnly:!0,onChange:this.handleChange,value:t?t.id:this.state.data.length+1}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"pregunta",children:"Pregunta"}),Object(u.jsx)("input",{className:"form-control",type:"text",name:"pregunta",id:"pregunta",onChange:this.handleChange,value:t?t.pregunta:""}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"pregunta",children:"TipoPregunta"}),Object(u.jsx)("select",{name:"id_tipo_pregunta",id:"id_tipo_pregunta",className:"form-control",onChange:this.handleChange,value:t?t.id_tipo_pregunta:"",children:this.state.tipos_de_preguntas.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.nombre})}))})]})}),Object(u.jsxs)(G.a,{children:["insertar"==this.state.tipoModal?Object(u.jsx)("button",{className:"btn btn-success",onClick:function(){return e.peticionPost()},children:"Insertar"}):Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.peticionPut()},children:"Actualizar"}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.modalInsertar()},children:"Cancelar"})]})]}),Object(u.jsxs)(P.a,{isOpen:this.state.modalEliminar,children:[Object(u.jsxs)(A.a,{children:["Est\xe1s seguro que deseas eliminar a la pregunta ",t&&t.pregunta]}),Object(u.jsxs)(G.a,{children:[Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.peticionDelete()},children:"S\xed"}),Object(u.jsx)("button",{className:"btn btn-secundary",onClick:function(){return e.setState({modalEliminar:!1})},children:"No"})]})]})]})}}]),n}(a.Component),U=Q,W=function(e){Object(v.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={data:[],modalInsertar:!1,modalEliminar:!1,form:{id:"",descripcion:"",id_pregunta:""}},e.peticionGet=function(){e.state.form.id_pregunta=e.props.match.params.id,_.get("opciones_pregunta?id=".concat(e.state.form.id_pregunta)).then((function(t){e.setState({data:t.data})})).catch((function(e){console.log(e.message)}))},e.peticionPost=Object(O.a)(h.a.mark((function t(){var n,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.match.params.id,(a=new FormData).append("descripcion",e.state.form.descripcion),a.append("id_pregunta",n),t.next=6,_.post("opcion",a).then((function(t){e.modalInsertar(),e.peticionGet()})).catch((function(e){console.log(e.message)}));case 6:case"end":return t.stop()}}),t)}))),e.peticionPut=function(){var t=new FormData;t.append("id",e.state.form.id),t.append("descripcion",e.state.form.descripcion),_.put("opcion",t).then((function(t){e.modalInsertar(),e.peticionGet()}))},e.peticionDelete=function(){_.delete("opcion?id="+e.state.form.id).then((function(t){e.setState({modalEliminar:!1}),e.peticionGet()}))},e.modalInsertar=function(){e.setState({modalInsertar:!e.state.modalInsertar})},e.seleccionarOpcion=function(t){e.setState({tipoModal:"actualizar",form:{id:t.id,descripcion:t.descripcion,id_pregunta:e.props.match.params.id}})},e.handleChange=function(){var t=Object(O.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.persist(),t.next=3,e.setState({form:Object(E.a)(Object(E.a)({},e.state.form),{},Object(x.a)({},n.target.name,n.target.value))});case 3:console.log(e.state.form);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.state.form.id_pregunta=this.props.match.params.id,console.log(this.state.form.id_pregunta),this.peticionGet()}},{key:"render",value:function(){var e=this,t=this.state.form;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"btn btn-success",onClick:function(){e.setState({form:null,tipoModal:"insertar"}),e.modalInsertar()},children:"Agregar Opcion"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("table",{className:"table ",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"ID"}),Object(u.jsx)("th",{children:"descripcion"}),Object(u.jsx)("th",{children:"Acciones"})]})}),Object(u.jsx)("tbody",{children:this.state.data.map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.id}),Object(u.jsx)("td",{children:t.descripcion}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){e.seleccionarOpcion(t),e.modalInsertar()},children:Object(u.jsx)(q.a,{icon:D.b})}),"   ",Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){e.seleccionarOpcion(t),e.setState({modalEliminar:!0})},children:Object(u.jsx)(q.a,{icon:D.e})})]})]})}))})]}),Object(u.jsxs)(P.a,{isOpen:this.state.modalInsertar,children:[Object(u.jsx)(F.a,{style:{display:"block"},children:Object(u.jsx)("span",{style:{float:"right"},onClick:function(){return e.modalInsertar()},children:"x"})}),Object(u.jsx)(A.a,{children:Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"id",children:"ID"}),Object(u.jsx)("input",{className:"form-control",type:"text",name:"id",id:"id",readOnly:!0,onChange:this.handleChange,value:t?t.id:this.state.data.length+1}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"descripcion",children:"Description"}),Object(u.jsx)("input",{className:"form-control",type:"text",name:"descripcion",id:"descripcion",onChange:this.handleChange,value:t?t.descripcion:""}),Object(u.jsx)("br",{})]})}),Object(u.jsxs)(G.a,{children:["insertar"==this.state.tipoModal?Object(u.jsx)("button",{className:"btn btn-success",onClick:function(){return e.peticionPost()},children:"Insertar"}):Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.peticionPut()},children:"Actualizar"}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.modalInsertar()},children:"Cancelar"})]})]}),Object(u.jsxs)(P.a,{isOpen:this.state.modalEliminar,children:[Object(u.jsxs)(A.a,{children:["Est\xe1s seguro que deseas eliminar a la Opcion ",t&&t.descripcion]}),Object(u.jsxs)(G.a,{children:[Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.peticionDelete()},children:"S\xed"}),Object(u.jsx)("button",{className:"btn btn-secundary",onClick:function(){return e.setState({modalEliminar:!1})},children:"No"})]})]})]})}}]),n}(a.Component),Y=W;var K=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"grid",children:[Object(u.jsxs)("div",{className:"grid-uno",children:[Object(u.jsx)("div",{className:"grid-anidado-uno",children:Object(u.jsxs)("h1",{children:["Registrate ",Object(u.jsx)("span",{children:"y Opina "})," contestando encuestas"]})}),Object(u.jsx)("div",{className:"grid-anidado-dos",children:Object(u.jsx)("img",{src:"./mujer-encuesta.png",alt:""})})]}),Object(u.jsx)("div",{className:"grid-dos",children:Object(u.jsx)("div",{className:"container-grid-dos border m-4 position-relative",children:Object(u.jsxs)("div",{className:"container-formulario position-absolute top-50 start-50 translate-middle",children:[Object(u.jsx)("p",{children:" \xa1Reg\xedstrate YA!"}),Object(u.jsxs)("form",{className:"formulario-home",children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{for:"exampleInputName",children:"\xbfCu\xe1l es tu primer nombre?"}),Object(u.jsx)("input",{type:"name",className:"form-control",id:"exampleInputEmail1","aria-describedby":"NameHelp",placeholder:"Enter first name"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{for:"exampleInputLastName",children:"\xbfCu\xe1l es tu primer apellido?"}),Object(u.jsx)("input",{type:"lastname",className:"form-control",id:"exampleInputLastName",placeholder:"Enter first lastname"})]}),Object(u.jsx)("button",{type:"submit",className:"boton-registro2",children:"\xa1Me voy a Registrar!"})]})]})})}),Object(u.jsxs)("div",{className:"grid-tres",children:[Object(u.jsx)("div",{className:"rounded-pill grid-anidado-tres-uno",children:Object(u.jsx)("h2",{children:"\xa1\xdanete a la MEJOR comunidad de Opini\xf3n Online!"})}),Object(u.jsxs)("div",{className:"grid-anidado-tres-dos",children:[Object(u.jsxs)("div",{className:"rounded-pill grid-anidado-tres-seccion1",children:[Object(u.jsx)("div",{className:"gats1-nombre-seccion1",children:Object(u.jsx)("p",{children:"M\xe1rketin Digital"})}),Object(u.jsxs)("div",{className:"gats1-descripcion-seccion1",children:[Object(u.jsx)("div",{className:"gats1-imagen-seccion1",children:Object(u.jsx)("img",{src:"./sonreir.png",alt:""})}),Object(u.jsx)("div",{className:"gats1-contenido-imagen-seccion1",children:Object(u.jsx)("p",{children:"Encuestas de Satisfacci\xf3n del Cliente"})})]})]}),Object(u.jsxs)("div",{className:"rounded-pill grid-anidado-tres-seccion2",children:[Object(u.jsx)("div",{className:"gats2-nombre-seccion2",children:Object(u.jsx)("p",{children:"Organizaci\xf3n Social"})}),Object(u.jsxs)("div",{className:"gats2-descripcion-seccion2",children:[Object(u.jsx)("div",{className:"gats2-imagen-seccion2",children:Object(u.jsx)("img",{src:"./trabajo-en-equipo.png",alt:""})}),Object(u.jsx)("div",{className:"gats2-contenido-imagen-seccion2",children:Object(u.jsx)("p",{children:"Familiares y Amigos"})})]})]}),Object(u.jsxs)("div",{className:"rounded-pill grid-anidado-tres-seccion3",children:[Object(u.jsx)("div",{className:"gats3-nombre-seccion3",children:Object(u.jsx)("p",{children:"Recursos Humanos"})}),Object(u.jsxs)("div",{className:"gats3-descripcion-seccion3",children:[Object(u.jsx)("div",{className:"gats3-imagen-seccion3",children:Object(u.jsx)("img",{src:"./gerente-de-recursos-humanos.png",alt:""})}),Object(u.jsx)("div",{className:"gats3-contenido-imagen-seccion3",children:Object(u.jsx)("p",{children:"Encuestas de Ambiente Laboral"})})]})]})]})]}),Object(u.jsx)("div",{className:"grid-cuatro",children:Object(u.jsxs)("div",{className:"rounded-3 g4-contenido",children:[Object(u.jsx)("div",{className:"g4-info1",children:Object(u.jsx)("p",{children:"Para ti"})}),Object(u.jsx)("div",{className:"g4-info2",children:Object(u.jsx)("p",{children:"Obt\xe9n una plataforma que pueda crecer y evolucionar junto con las necesidades de tus encuestas. Explora nuestros planes para saber m\xe1s acerca de funciones espec\xedficas."})})]})}),Object(u.jsx)("div",{className:"grid-cinco",children:Object(u.jsxs)("div",{className:"rounded-3 g5-contenido",children:[Object(u.jsx)("div",{className:"g5-info1",children:Object(u.jsx)("p",{children:"Para tu organizaci\xf3n"})}),Object(u.jsx)("div",{className:"g5-info2",children:Object(u.jsx)("p",{children:"Administra los datos de tu empresa con funciones avanzadas de seguridad y control para que puedas permitir que tus equipos compartan y colaboren sin problemas."})})]})})]})})};var V=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(k.c,{children:[Object(u.jsx)(k.a,{path:"/en-questas_uno/",exact:!0,component:K}),Object(u.jsx)(k.a,{path:"/en-questas_uno/encuesta",exact:!0,component:R}),Object(u.jsx)(k.a,{path:"/en-questas_uno/encuesta/seccion/:id",exact:!0,component:H}),Object(u.jsx)(k.a,{path:"/en-questas_uno/encuesta/seccion/preguntas/:id",exact:!0,component:U}),Object(u.jsx)(k.a,{path:"/en-questas_uno/encuesta/seccion/preguntas/opciones/:id",exact:!0,component:Y}),Object(u.jsx)(k.a,{path:"/en-questas_uno/login",exact:!0,component:I}),Object(u.jsx)(k.a,{path:"/en-questas_uno/logout",exact:!0,component:S}),Object(u.jsx)(k.a,{path:"/en-questas_uno/register",exact:!0,component:w})]})})};var X=function(){return Object(u.jsx)(d.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{}),Object(u.jsx)(V,{}),Object(u.jsx)(m,{})]})})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(X,{})}),document.getElementById("root"))},27:function(e,t,n){},75:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.3fc33fdb.chunk.js.map