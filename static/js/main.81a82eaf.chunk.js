(this.webpackJsonpScribeAR=this.webpackJsonpScribeAR||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(36)},,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(6),a=n.n(c),o=(n(22),n(1)),s=n(7),u=n(8),l=n(10),d=n(9),m=n(2),h=n(11);n(28),n(29);function E(e){var t=Object(o.b)();return r.a.createElement("div",null,e.item,r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",onChange:function(){return t(e.action())}}),r.a.createElement("span",{className:"slider"})))}n(30);function p(e){var t=Object(o.c)(e.setting),n=Object(o.b)();return r.a.createElement("div",null,e.item,r.a.createElement("div",{className:"setting-wrapper"},r.a.createElement("button",{className:"minus",onClick:function(){return n(e.decrement())}},"-"),r.a.createElement("div",{className:"setting"},t),r.a.createElement("button",{className:"plus",onClick:function(){return n(e.increment())}},"+")))}n(31);var v=function(){return{type:"INCREMENT_TEXTSIZE"}},f=function(){return{type:"DECREMENT_TEXTSIZE"}},b=function(){return{type:"INCREMENT_LINEWIDTH"}},g=function(){return{type:"DECREMENT_LINEWIDTH"}},N=function(){return{type:"INCREMENT_NUMLINES"}},w=function(){return{type:"DECREMENT_NUMLINES"}},y=function(){return{type:"FLIP_INVERTCOLORS"}},I=function(){return{type:"FLIP_RECORDING"}};function T(e){var t=Object(o.c)((function(e){return e.recording})),n=Object(o.b)();return document.body.onkeyup=function(e){32===e.keyCode&&n(I())},r.a.createElement("div",null,t?"Recording":"Record",r.a.createElement("div",{className:"record-btn-wrapper"},r.a.createElement("div",{className:t?"record-btn hidden":"record-btn shown",onClick:function(){return n(I())}}),r.a.createElement("div",{className:t?"stop-btn shown":"stop-btn hidden",onClick:function(){return n(I())}})))}n(32);function O(e){var t=Object(o.c)(e.setting),n=Object(o.b)();return r.a.createElement("div",null,e.item,r.a.createElement("div",{className:"setting-wrapper"},r.a.createElement("button",{className:"minus",onClick:function(){return n(e.decrement())}},"-"),r.a.createElement("div",{className:"setting"},t),r.a.createElement("button",{className:"plus",onClick:function(){return n(e.increment())}},"+")))}n(33);function C(){return r.a.createElement("div",{className:"Options",id:"options-space"},r.a.createElement("h1",null,"Options"),r.a.createElement("div",{className:"item-wrapper"},r.a.createElement(O,{item:"Text size",setting:function(e){return e.textSize},increment:v,decrement:f})),r.a.createElement("div",{className:"item-wrapper"},r.a.createElement(O,{item:"Line width",setting:function(e){return e.lineWidth},increment:b,decrement:g})),r.a.createElement("div",{className:"item-wrapper"},r.a.createElement(p,{item:"Number of lines",setting:function(e){return e.numLines},increment:N,decrement:w})),r.a.createElement("div",{className:"item-wrapper"},r.a.createElement(E,{item:"Invert colors",setting:function(e){return e.invertColors},action:y})),r.a.createElement("div",{className:"item-wrapper"},r.a.createElement(T,null)))}var S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={shown:!0,timeoutId:setTimeout(n.hide.bind(Object(m.a)(n)),15e3)},n.hide=n.hide.bind(Object(m.a)(n)),n.show=n.show.bind(Object(m.a)(n)),n.resetTimeout=n.resetTimeout.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"hide",value:function(){this.setState({shown:!1}),document.getElementById("outer").addEventListener("click",this.show)}},{key:"show",value:function(){this.setState({shown:!0}),document.getElementById("outer").removeEventListener("click",this.show),this.resetTimeout()}},{key:"resetTimeout",value:function(){clearTimeout(this.state.timeoutId);var e=setTimeout(this.hide,15e3);this.setState({timeoutId:e})}},{key:"componentDidMount",value:function(){document.getElementById("optionsSpace").addEventListener("click",this.show)}},{key:"render",value:function(){return r.a.createElement("div",{className:"TopSpace",id:"outer",style:{height:"64vh"}},r.a.createElement("div",{className:"Container "+(this.state.shown?"shown":"hidden")},r.a.createElement("div",{id:"optionsSpace"},r.a.createElement(C,{resetTimeout:this.resetTimeout})),r.a.createElement("div",{id:"hideSpace",onClick:this.hide},"Hide")))}}]),t}(r.a.Component),k=(n(34),new(window.SpeechRecognition||window.webkitSpeechRecognition));k.lang="en-US",k.continuous=!1,k.interimResults=!0;var R=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).state={line:""},e.appendLine=e.appendLine.bind(Object(m.a)(e)),e.start=e.start.bind(Object(m.a)(e)),e.stop=e.stop.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.start()}},{key:"componentDidUpdate",value:function(e,t){e.isRecording!==this.props.isRecording&&(this.props.isRecording?this.start():this.stop())}},{key:"start",value:function(){var e=this;k.start(),k.onresult=function(t){var n=Array.from(t.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");n=n.charAt(0).toUpperCase()+n.slice(1),t.results[0].isFinal?e.appendLine(n+"."):e.updateCurrentLine(n)},k.onend=k.start}},{key:"stop",value:function(){k.onresult=function(){},k.onend=function(){},k.stop()}},{key:"updateCurrentLine",value:function(e){var t=document.getElementById("captionsSpace"),n=t.scrollHeight-t.clientHeight<=t.scrollTop+1;this.setState({line:e}),n&&(t.scrollTop=t.scrollHeight-t.clientHeight)}},{key:"appendLine",value:function(e){var t=document.getElementById("captionsSpace"),n=document.getElementById("out"),i=t.scrollHeight-t.clientHeight<=t.scrollTop+1,r=document.createElement("div");r.textContent=e,n.appendChild(r),this.setState({line:""}),i&&(t.scrollTop=t.scrollHeight-t.clientHeight)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"out"}),r.a.createElement("div",{id:"curr"},this.state.line))}}]),t}(r.a.PureComponent);function j(e){var t=Object(o.c)((function(e){return e.lineWidth})),n=Object(o.c)((function(e){return e.recording})),i=3*(11-t)+"vw",c=e.height,a=e.textSize;return r.a.createElement("div",{className:"captionsSpace",id:"captionsSpace",style:{fontSize:a,height:c,width:"calc(100vh - 2 * "+i+")",paddingLeft:i,paddingRight:i}},r.a.createElement(R,{isRecording:n}))}n(35);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(5),M=Object(L.b)({textSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_TEXTSIZE":return e+1;case"DECREMENT_TEXTSIZE":return Math.max(1,e-1);default:return e}},lineWidth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_LINEWIDTH":return Math.min(10,e+1);case"DECREMENT_LINEWIDTH":return Math.max(1,e-1);default:return e}},numLines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_NUMLINES":return e+1;case"DECREMENT_NUMLINES":return Math.max(1,e-1);default:return e}},lockScreen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"FLIP_LOCKSCREEN"===t.type?!e:e},invertColors:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"FLIP_INVERTCOLORS"===t.type?!e:e},recording:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"FLIP_RECORDING"===t.type?!e:e}}),_=Object(L.c)(M);a.a.render(r.a.createElement(o.a,{store:_},r.a.createElement((function(){var e=Object(o.c)((function(e){return e.textSize})),t=Object(o.c)((function(e){return e.numLines})),n=Object(o.c)((function(e){return e.invertColors})),i=e+"vh",c=e*t*1.5,a=100-c+"vh";c+="vh";var s=n?"white":"black",u=n?"black":"white";return r.a.createElement("div",{className:"App",style:{backgroundColor:s,color:u}},r.a.createElement(S,{height:a}),r.a.createElement(j,{height:c,textSize:i}))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[17,1,2]]]);
//# sourceMappingURL=main.81a82eaf.chunk.js.map