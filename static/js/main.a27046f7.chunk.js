(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(45)},36:function(e,t,a){},37:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),l=a.n(s),o=(a(36),a(14)),i=a(7),c=a(20),u=a(15),m=a(19),p=(a(37),a(60)),d=a(61),h=a(9),f=a(59),b=a(58);var g=function(e){var t=e.title,a=e.subtitle;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("h2",null,a))},E=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.xmlData,n=a?a.sec0+"\xb0C":"-",s=a?a.sec1+"\xb0C":"-",l=a?a.sec2+"\xb0C":"-",o=a?a.sec3+"\xb0C":"-",i=a?a.sec4+"\xb0C":"-",c=!(!a||"up"!==a.di0),u=!(!a||"up"!==a.di1),m=c?"PORNIT":"OPRIT",p=u?"PORNIT":"OPRIT",d=c?"lightseagreen":"lightcoral",h=u?"lightseagreen":"lightcoral";return r.a.createElement("div",{className:t.root},r.a.createElement(b.a,{container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{className:t.paper,style:{backgroundColor:"orange"}},r.a.createElement(g,{title:"Bazin 1",subtitle:n}))),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(f.a,{className:t.paper,style:{backgroundColor:"skyblue"}},r.a.createElement(g,{title:"Bazin 2",subtitle:s}))),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(f.a,{className:t.paper,style:{backgroundColor:"yellow"}},r.a.createElement(g,{title:"Bazin 3",subtitle:l}))),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(f.a,{className:t.paper,style:{backgroundColor:"palegoldenrod"}},r.a.createElement(g,{title:"Bazin 4",subtitle:o}))),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(f.a,{className:t.paper,style:{backgroundColor:"plum"}},r.a.createElement(g,{title:"Bazin 5",subtitle:i}))),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{className:t.paper,style:{backgroundColor:d}},r.a.createElement(g,{title:"Pompa 1",subtitle:m}))),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(f.a,{className:t.paper,style:{backgroundColor:h}},r.a.createElement(g,{title:"Pompa 2",subtitle:p})))))}}]),t}(n.Component),y=Object(h.a)(function(e){return{root:{flexGrow:1,maxWidth:"90vw"},paper:{padding:e.spacing(3),textAlign:"center",color:e.palette.text.primary}}})(E),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).useStyles=function(){return Object(p.a)(function(e){return{progress:{margin:e.spacing(2)}}})},a.loadAppData=function(){fetch("https://cors-anywhere.herokuapp.com/https://24systems.ro/xml-php/st0.xml").then(function(e){return e.text()}).then(function(e){return(new window.DOMParser).parseFromString(e,"application/xml")}).then(function(e){a.state.firstLoad&&(a.setState(function(e){return{isLoading:!1}}),a.setState(function(e){return{firstLoad:!1}})),a.setState(function(t){return{xmlData:a.xmlToJson(e).response}})})},a.state={isLoading:!0,firstLoad:!0},a.classes=a.useStyles(),a.loadAppData(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.isLoading?r.a.createElement(d.a,{className:this.classes.progress}):r.a.createElement(y,{xmlData:this.state.xmlData}))}},{key:"xmlToJson",value:function(e){var t={};if(1===e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var a=0;a<e.attributes.length;a++){var n=e.attributes.item(a);t["@attributes"][n.nodeName]=n.nodeValue}}}else 3===e.nodeType&&(t=e.nodeValue);if(e.hasChildNodes()&&1===e.childNodes.length&&3===e.childNodes[0].nodeType)t=e.childNodes[0].nodeValue;else if(e.hasChildNodes())for(var r=0;r<e.childNodes.length;r++){var s=e.childNodes.item(r),l=s.nodeName;if("undefined"==typeof t[l])t[l]=this.xmlToJson(s);else{if("undefined"==typeof t[l].push){var o=t[l];t[l]=[],t[l].push(o)}t[l].push(this.xmlToJson(s))}}return t}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.a27046f7.chunk.js.map