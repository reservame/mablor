(this.webpackJsonpmablor=this.webpackJsonpmablor||[]).push([[0],{61:function(e,t,a){e.exports=a(92)},66:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=a(6),i=a(7),s=a(9),m=a(8),u=(a(66),a(22)),h=a(41),d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).refreshOnClick=function(){},e.lastOnChange=function(){},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Shares",r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"charts2"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last days: "),r.a.createElement("input",{id:"last",name:"last",value:"30",type:"text",width:"3",onChange:this.lastOnChange}),r.a.createElement("button",{id:"refresh",className:"btn btn-primary",onClick:this.refreshOnClick},r.a.createElement("span",{className:"glyphicon glyphicon-refresh"}))),r.a.createElement("div",{id:"charts"})),r.a.createElement("div",{id:"symbols_report",style:{position:"static",float:"left",width:"100%"}})))}}]),a}(n.Component),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).refreshOnClick=function(){},e.lastOnChange=function(){},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Shares",r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"charts2"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last days: "),r.a.createElement("input",{id:"last",name:"last",value:"30",type:"text",width:"3",onChange:this.lastOnChange}),r.a.createElement("button",{id:"refresh",className:"btn btn-primary",onClick:this.refreshOnClick},r.a.createElement("span",{className:"glyphicon glyphicon-refresh"}))),r.a.createElement("div",{id:"charts"})),r.a.createElement("div",{id:"symbols_report",style:{position:"static",float:"left",width:"100%"}})))}}]),a}(n.Component),g=a(28),v=a(27),f=a(12),b=a.n(f),E=a(54),y=a(56),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={ready:!1,timers:{}},e.tds=0,e.serviceURL=function(){return""},e.update=function(t){var a=t.data;e.setState({timers:Object(g.a)({},a)}),e.setState({ready:!0})},e.update1=function(e){},e.refresh=function(){b.a.get(e.serviceURL()+"/timers-api/list",{headers:{"Access-Control-Allow-Origin":" *"}}).then(e.update).catch((function(e){console.log(e)}))},e.onClickTimer=function(t,a,n){var r=e.state.timers,l="on"===r[t].state?"off":"on";r[t].state=l,r[t].started=a,e.setState({timers:Object(g.a)({},r)}),b.a.put(e.serviceURL()+"/timers-api/switch/"+t+"/"+a,{headers:{"Access-Control-Allow-Origin":" *"}}).then(e.update1).catch((function(e){console.log(e)}))},e.move=function(t,a,n){var r=e.state.timers,l="+"===a?18e5:-18e5;r[t].started=Math.round(r[t].started)+l,e.setState({timers:Object(g.a)({},r)}),b.a.put(e.serviceURL()+"/timers-api/move/"+t+"/"+l,{headers:{"Access-Control-Allow-Origin":" *"}}).then(e.update1).catch((function(e){console.log(e)}))},e.timer=function(t,a,n){0===a.started&&(a.started=n);var l=a.red<a.yellow,c="on"===a.state,o=a.max,i=c?Math.round(100*(n-a.started)/a.units)/100:0;return i=o>100?Math.round(i):i,r.a.createElement("td",{id:t,key:t},r.a.createElement("div",{onClick:e.onClickTimer.bind(Object(v.a)(e),t,n)},r.a.createElement(E.a,{width:"150px",height:"150px",chartType:"Gauge",loader:"Loading data ...",data:[["Label","Value"],[c?t:"#"+t+"#",i]],options:{minorTicks:c?4:0,redFrom:c?l?0:a.red:0,redTo:c?l?a.red:o:0,yellowFrom:c?l?a.red:a.yellow:0,yellowTo:c?l?a.yellow:a.red:0,greenFrom:c&&l?a.yellow:0,greenTo:c?l?o:a.yellow:0,min:0,max:c?o:1},rootProps:{"data-test":"2"}})),r.a.createElement(y.a,{onClick:e.move.bind(Object(v.a)(e),t,"-"),value:"-"},"-"),"\xa0",r.a.createElement(y.a,{onClick:e.move.bind(Object(v.a)(e),t,"+"),value:"+"},"+"))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=setInterval((function(){e.setState({intervalID:t})}),3e3);this.refresh()}},{key:"render",value:function(){var e=this,t=[],a=[];if(this.state.ready){var n=new Date;Object.keys(this.state.timers).sort().forEach((function(a){t.push(e.timer(a,e.state.timers[a],n.getTime()))}));for(var l=0;l<t.length;l+=2){var c=l<t.length?t[l+1]:r.a.createElement("td",{key:l});a.push(r.a.createElement("tr",{key:l},t[l],c))}}else a=r.a.createElement("tr",null,r.a.createElement("td",null,"Loading . . ."));return r.a.createElement("table",null,r.a.createElement("tbody",null,a))}}]),a}(n.Component),C=(a(51),a(97)),O=a(102),w=a(98),j=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={ready:!1,cuentas:[],cuentasOptions:[{label:"A",value:1},{label:"B",value:2}],ASelected:2,DeSelected:2,amount:"",detalle:"",mydate:"2020-01-01",saving:!1},e.init=function(t){var a=t.data,n=[];a.forEach((function(e){n.push({label:e.detalle,value:e.id})}));var r=(new Date).toISOString();e.setState({mydate:r.substr(0,10),DeSelected:2,ASelected:1,amount:"",detalle:"",cuentasOptions:n,cuentas:Object(g.a)({},a),ready:!0})},e.serviceURL=function(){return""},e.dateChange=function(t){e.setState({mydate:t.target.value})},e.deChange=function(t){e.setState({DeSelected:parseInt(t.target.value,10)})},e.aChange=function(t){e.setState({ASelected:parseInt(t.target.value,10)})},e.amountChange=function(t){e.setState({amount:t.target.value})},e.detalleChange=function(t){e.setState({detalle:t.target.value})},e.getCuentas=function(t){var a=e.state.cuentasOptions,n=[];return a.forEach((function(e){e.value,n.push(r.a.createElement("option",{key:e.value,value:e.value},e.label))})),n},e.save=function(t){e.setState({saving:!0}),b.a.put(e.serviceURL()+"/caja-api/renglones",{headers:{"Access-Control-Allow-Origin":" *"},data:{date:e.state.mydate,amount:e.state.amount,de:e.state.DeSelected,a:e.state.ASelected,detalle:e.state.detalle}}).then(e.saved).catch((function(e){console.log(e),alert(e,[],{})}))},e.saved=function(t){e.setState({amount:"",detalle:"",saving:!1})},e.clickTag=function(t){e.setState({detalle:t.target.value})},e.btag=function(t){return r.a.createElement(y.a,{onClick:e.clickTag,value:t,style:{width:"100px",height:"25px",padding:"0px"},variant:"primary",className:"btn btn-primary"},t)},e.rowtag=function(t,a){return r.a.createElement("div",{style:{padding:"1px"}},e.btag(t),"\xa0",e.btag(a),r.a.createElement("br",null))},e.celltag=function(){var t=["aaa","bbb","ccc","ddd","eee","fff","ggg","hhh","iii","jjj","kkk","lll","mmm","nnn","ooo","ppp"];return r.a.createElement("td",{style:{padding:"50px"}},e.rowtag(t[0],t[1]),e.rowtag(t[2],t[3]),e.rowtag(t[4],t[5]),e.rowtag(t[6],t[7]),e.rowtag(t[8],t[9]),e.rowtag(t[10],t[11]),e.rowtag(t[12],t[13]),e.rowtag(t[14],t[15]))},e.clickNum=function(t){var a=e.state.amount,n=t.target.value,r=a+n;"<<"===n&&(r=a.substr(0,a.length-1)),e.setState({amount:r})},e.bnum=function(t){return r.a.createElement(y.a,{onClick:e.clickNum.bind(t),value:t,style:{width:"50px",height:"50px",padding:"0px"},size:"lg",variant:"primary",className:"btn btn-primary"},t)},e.rownum=function(t,a,n){return r.a.createElement("div",{style:{padding:"2px"}},e.bnum(t),"\xa0",e.bnum(a),"\xa0",e.bnum(n),r.a.createElement("br",null))},e.cellnum=function(){return r.a.createElement("td",{style:{padding:"50px"}},e.rownum(1,2,3),e.rownum(4,5,6),e.rownum(7,8,9),e.rownum(".",0,"<<"))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){b.a.get(this.serviceURL()+"/caja-api/cuentas",{headers:{"Access-Control-Allow-Origin":" *"}}).then(this.init).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,"\xa0"),r.a.createElement(C.a,{size:"sm",className:"mb-3"},r.a.createElement(C.a.Prepend,null,r.a.createElement(C.a.Text,{id:"basic-addon1"},"Fecha:")),r.a.createElement(O.a,{type:"date",placeholder:"","aria-label":"Fecha","aria-describedby":"basic-addon1",value:this.state.mydate,onChange:this.dateChange})),r.a.createElement(C.a,{size:"sm",className:"mb-3"},r.a.createElement(C.a.Prepend,null,r.a.createElement(C.a.Text,{id:"basic-addon1"},"Importe:")),r.a.createElement(O.a,{value:this.state.amount,onChange:this.amountChange,autoFocus:!0,"aria-label":"amount","aria-describedby":"basic-addon1"})),r.a.createElement(C.a,{size:"sm",className:"mb-3"},r.a.createElement(C.a.Prepend,null,r.a.createElement(C.a.Text,{id:"basic-addon1"},"Detalle:")),r.a.createElement(O.a,{value:this.state.detalle,onChange:this.detalleChange,"aria-label":"","aria-describedby":"basic-addon1"})),r.a.createElement(C.a,{size:"sm",className:"mb-3"},r.a.createElement(C.a.Prepend,null,r.a.createElement(C.a.Text,{id:"basic-addon1"},"De:")),r.a.createElement(O.a,{as:"select",value:this.state.DeSelected,onChange:this.deChange,"aria-describedby":"basic-addon1"},this.getCuentas(0))),r.a.createElement(C.a,{size:"sm",className:"mb-3"},r.a.createElement(C.a.Prepend,null,r.a.createElement(C.a.Text,{id:"basic-addon1"},"A:")),r.a.createElement(O.a,{as:"select",value:this.state.ASelected,onChange:this.aChange,"aria-describedby":"basic-addon1"},this.getCuentas(0))),r.a.createElement(y.a,{size:"sm",disabled:this.state.saving,block:!0,variant:"primary",id:"grabar",onClick:this.save,value:"grabar",name:"grabar",className:"btn btn-primary"},"Save"),r.a.createElement(w.a,{borderless:!0},r.a.createElement("tbody",null,r.a.createElement("tr",null,this.cellnum(),this.celltag()))))}}]),a}(n.Component),x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={photo:{},paused:!1},e.serviceURL=function(){return""},e.update=function(t){e.setState({photo:t.data})},e.switchPause=function(t){var a=!e.state.paused;e.setState({paused:a})},e.changePhoto=function(t){(!e.state.paused||null!=t&&"bNext"===t.target.id)&&b.a.get(e.serviceURL()+"/photos-api/random",{headers:{"Access-Control-Allow-Origin":" *"}}).then(e.update).catch((function(e){console.log(e)}))},e.keyPress=function(e){alert("x"),console.log(e)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.changePhoto(),setInterval(this.changePhoto,2e4)}},{key:"render",value:function(){return r.a.createElement("div",{onKeyPress:this.keyPress},r.a.createElement("img",{onKeyPress:this.keyPress,src:this.state.photo.url,style:{height:"100%"},onClick:this.switchPause,alt:this.state.photo.imgId}),r.a.createElement("br",null),r.a.createElement("a",{href:this.state.photo.albumUrl,target:"_blank",rel:"noopener noreferrer"},this.state.photo.albumTitle),"\xa0//\xa0",r.a.createElement("a",{href:this.state.photo.url,target:"_blank",rel:"noopener noreferrer"},this.state.photo.filename),"\xa0//\xa0",r.a.createElement("button",{id:"bNext",onClick:this.changePhoto},this.state.photo.date))}}]),a}(n.Component),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={photos:[]},e.serviceURL=function(){return""},e.update=function(t){e.setState({photos:t.data.orphans})},e.refresh=function(){b.a.get(e.serviceURL()+"/photos-api/orphans",{headers:{"Access-Control-Allow-Origin":" *"}}).then(e.update).catch((function(e){console.log(e)}))},e.nothing=function(e){},e.startOrphans=function(){b.a.get(e.serviceURL()+"/photos-api/startorphans",{headers:{"Access-Control-Allow-Origin":" *"}}).then(e.nothing).catch((function(e){console.log(e)}))},e.images=function(){var t={height:"100%"},a=[];return e.state.photos.forEach((function(e){a.push(r.a.createElement("a",{href:"https://photos.google.com/search/"+e.filename,target:"_blank",rel:"noopener noreferrer",key:e.imgId},r.a.createElement("img",{src:e.url,style:t,alt:e.imgId}),"\xa0"))})),r.a.createElement("div",null,a)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.refresh()}},{key:"render",value:function(){return r.a.createElement("div",null,this.images(),r.a.createElement(y.a,{onClick:this.startOrphans},"Start Orphans"))}}]),a}(n.Component),A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={photos:[]},e.serviceURL=function(){return""},e.update=function(t){e.setState({photos:t.data.today})},e.refresh=function(){var t=window.location.href,a=t.split("/");t="today"===(t=a[a.length-1])?"":"/"+t,console.log(t),b.a.get(e.serviceURL()+"/photos-api/day"+t,{headers:{"Access-Control-Allow-Origin":" *"}}).then(e.update).catch((function(e){console.log(e)}))},e.images=function(){var t={height:"100%"},a=[];return e.state.photos.forEach((function(e){a.push(r.a.createElement("a",{href:"https://photos.google.com/search/"+e.filename,target:"_blank",rel:"noopener noreferrer",key:e.imgId},r.a.createElement("img",{src:e.url,style:t,alt:e.imgId,title:e.albumTitle+" // "+e.date}),"\xa0"))})),r.a.createElement("div",null,a)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.refresh()}},{key:"render",value:function(){return r.a.createElement("div",null,this.images())}}]),a}(n.Component),N=a(100),I=a(101),L=a(99),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={redirect:!1},e.redirect=function(t){e.setState({url:t.target.value,redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return r.a.createElement(u.a,{to:e.state.url})},e.menu=function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(w.a,{borderless:!0},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(y.a,{size:"lg",onClick:e.redirect,value:"/timers",variant:"primary",className:"btn btn-primary"},"Timers"),"\xa0"),r.a.createElement("td",null,r.a.createElement(y.a,{size:"lg",onClick:e.redirect,value:"caja2/gasto",variant:"primary",className:"btn btn-primary"},"Gasto")),r.a.createElement("td",null,r.a.createElement(y.a,{size:"lg",onClick:e.redirect,value:"/photos",variant:"primary",className:"btn btn-primary"},"Photos"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(y.a,{size:"lg",onClick:e.redirect,value:"/photos/today",variant:"primary",className:"btn btn-primary"},"Photos Today"),"\xa0"),r.a.createElement("td",null,r.a.createElement(y.a,{size:"lg",onClick:e.redirect,value:"/photos/orphans",variant:"primary",className:"btn btn-primary"},"Orphan Photos")),r.a.createElement("td",null,r.a.createElement(y.a,{size:"lg",onClick:e.redirect,value:"caja2/gasto",variant:"primary",className:"btn btn-primary"},"Gasto"))))))},e.routes=[{exact:!0,path:"/home",component:e.menu},{exact:!0,path:"/react-mablor",component:e.menu},{exact:!1,path:"/shares",component:d},{exact:!1,path:"/shares/charts2",component:p},{exact:!1,path:"/timers",component:k},{exact:!0,path:"/photos",component:x},{exact:!0,path:"/photos/random",component:x},{exact:!0,path:"/photos/orphans",component:S},{exact:!1,path:"/photos/today",component:A},{exact:!1,path:"/caja2/gasto",component:j}],e.hRouter=function(){return r.a.createElement(h.b,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",component:e.menu,exact:!0,key:"root"}),e.routes.map((function(e){return r.a.createElement(u.b,{path:e.path,component:e.component,exact:e.exact,key:e.path})}))))},e.navBar=function(){return r.a.createElement(N.a,{expand:"lg",variant:"dark",bg:"dark"},r.a.createElement(N.a.Brand,{href:"#home"},"Mablor"),r.a.createElement(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(N.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(I.a,{className:"mr-auto"},r.a.createElement(I.a.Link,{href:"#home"},"Home"),r.a.createElement(I.a.Link,{href:"#timers"},"Timers"),r.a.createElement(I.a.Link,{href:"#photos"},"Photos"),r.a.createElement(L.a,{title:"Photos",id:"basic-nav-dropdown"},r.a.createElement(L.a.Item,{href:"#photos/random"},"Random"),r.a.createElement(L.a.Item,{href:"#photos/orphans"},"Orphans"),r.a.createElement(L.a.Item,{href:"#photos/today"},"Today"),r.a.createElement(L.a.Divider,null),r.a.createElement(L.a.Item,{href:"#action/3.4"},"Separated link")),r.a.createElement(L.a,{title:"Caja",id:"basic-nav-dropdown"},r.a.createElement(L.a.Item,{href:"#caja2/gasto"},"Gasto"),r.a.createElement(L.a.Item,{href:"#caja2/gasto"},"Gasto"),r.a.createElement(L.a.Divider,null),r.a.createElement(L.a.Item,{href:"#action/3.4"},"Separated link")),r.a.createElement(L.a,{title:"Shares",id:"basic-nav-dropdown"},r.a.createElement(L.a.Item,null,"Charts"),r.a.createElement(L.a.Item,null,"Another action"),r.a.createElement(L.a.Item,null,"Something"),r.a.createElement(L.a.Divider,null),r.a.createElement(L.a.Item,{href:"#action/3.4"},"Separated link")))))},e}return Object(i.a)(a,[{key:"render",value:function(){var e="/photos"===window.location.pathname?"":this.navBar();return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,this.renderRedirect(),e,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",component:this.hRouter,exact:!0,key:"root"}),this.routes.map((function(e){return r.a.createElement(u.b,{path:e.path,component:e.component,exact:e.exact,key:e.path})})))))}}]),a}(n.Component);a(91);c.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.2db47733.chunk.js.map