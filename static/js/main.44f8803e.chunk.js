(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{23:function(e,a,t){e.exports=t(58)},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},32:function(e,a,t){},51:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),c=t.n(r),s=(t(28),t(3)),i=t(4),o=t(6),m=t(5),u=(t(29),t(30),t(1)),d=t.n(u),E=t(9),h=t.n(E),p=t(20),g=t(21),f=(t(32),t(22)),v=t.n(f),b=(t(50),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={loading:!1},n}return Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(p.a)(h.a.mark((function e(a){var t=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d()("input"),a.preventDefault(),this.setState({loading:!0}),e.prev=3,e.next=6,v.a.post("https://ovjkzf0d1j.execute-api.us-east-1.amazonaws.com/prod",{name:this.state.name,email:this.state.email,subject:this.state.subject,message:this.state.message});case 6:setTimeout((function(){t.setState({success:!0,loading:!1})}),2e3),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("error in send email: ",e.t0),setTimeout((function(){t.setState({fail:!0,loading:!1})}),2e3);case 13:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Let's stay in touch"),l.a.createElement("br",null),l.a.createElement("h4",null,"For any further intrigues don't hesitate to contact me using the form below:"),l.a.createElement("br",null),!this.state.success&&l.a.createElement("form",{method:"POST",onSubmit:function(a){return e.handleSubmit(a)}},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{onChange:function(a){return e.handleChange(a)},name:"name",type:"text",id:"name",className:"form-control",required:!0}),l.a.createElement("label",{htmlFor:"name",className:"ph-area"},"Name")),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{onChange:function(a){return e.handleChange(a)},name:"email",type:"email",id:"email",className:"form-control",required:!0}),l.a.createElement("label",{htmlFor:"email",className:"ph-area"},"Email")),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{onChange:function(a){return e.handleChange(a)},name:"subject",type:"text",id:"subject",className:"form-control",required:!0}),l.a.createElement("label",{htmlFor:"subject",className:"ph-area"},"Subject")),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{onChange:function(a){return e.handleChange(a)},name:"message",rows:"5",type:"text",id:"message",className:"form-control",required:!0}),l.a.createElement("label",{htmlFor:"message",className:"ph-area"},"Message")))),!this.state.loading&&l.a.createElement("button",{className:"btn btn-info"},"Submit"),this.state.loading&&l.a.createElement("img",{src:"./pictures/loading.svg",alt:"loading",style:{width:"50px"}}))),this.state.success&&l.a.createElement("div",{id:"mailSent"},l.a.createElement("img",{alt:"success",style:{width:"100px"},src:"./pictures/check.svg"}),l.a.createElement("h1",null,"Your Email was sent successfully.")),this.state.fail&&l.a.createElement("h1",null,"Something went wrong, please try again."),l.a.createElement("br",null),l.a.createElement("div",{className:"icons"},l.a.createElement("a",{href:"https://github.com/adirdayan13",target:"_blank"},l.a.createElement("i",{className:"github icon fa fa-github fa-2x"})),l.a.createElement("a",{href:"www.linkedin.com/in/adir-dayan",target:"_blank"},l.a.createElement("i",{className:"linkedin icon fa fa-linkedin fa-2x"}))))}}]),t}(l.a.Component)),N=(t(51),t(7)),k=l.a.createRef(),w=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){d()("button").on("mouseenter",(function(){d()("button").addClass("info")})),d()("button").on("mouseleave",(function(){d()("button").removeClass("info")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"projects",ref:k},l.a.createElement("h1",null,"Projects"),l.a.createElement("br",null),l.a.createElement("img",{className:"coding",id:"coding",src:"./pictures/undraw_programming_2svr.svg"}),l.a.createElement("div",{className:"project"},l.a.createElement("br",null),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/socialmedia.png",alt:"socialnetwork"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",null,"Social Network"),l.a.createElement("br",null),l.a.createElement("h4",null,"A social media platform to find people, connect with them, live chat, read the news, share albums and more. Built with React.JS"),l.a.createElement("br",null),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"http://adirsocialnetwork.herokuapp.com"},"Visit"),l.a.createElement("br",null)))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/imageboard.png",alt:"imageboard"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",{className:"padding-bottom-dbl"},"Imageboard"),l.a.createElement("br",null),l.a.createElement("h4",null,"A Platform to share images between people with an option to comment on pictures. Built with Vue.JS"),l.a.createElement("br",null),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"https://adir-imageboard.herokuapp.com"},"Visit")))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/covid-19.png",alt:"covid-19"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",null,"Covid-19 status"),l.a.createElement("br",null),l.a.createElement("h4",null,"A website to keep track of corona virus cases status worldwide with an option to filter confirmed / recovered / deaths cases. Built with React.JS"),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"https://covid-19status.herokuapp.com"},"Visit")))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/petition.png",alt:"petition"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",{className:"padding-bottom"},"Petition"),l.a.createElement("br",null),l.a.createElement("h4",null,"Platform that enables gathering signatures from people for a cause with the analytical options. Built with Handlebars"),l.a.createElement("br",null),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"http://adir-petition.herokuapp.com"},"Visit")))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/spotify-search.png",alt:"spotify"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",null,"Spotify Search"),l.a.createElement("br",null),l.a.createElement("h4",null,"Spotify Search is a search enginge for spotify music with option to listen tracks preview without registration. Built with Handlebars"),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"https://spotify4search.herokuapp.com"},"Visit")))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/vinyls.png",alt:"vinyls"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",null,"Music collection"),l.a.createElement("br",null),l.a.createElement("h4",null,"Platform to create your own music collection to keep track of your music by adding / editing / deleting and searching options. Built with Handlebars"),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"https://vinyls-collection.herokuapp.com"},"Visit")))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/connectfour.png",alt:"connect four"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",{className:"padding-bottom-dbl"},"Connect Four"),l.a.createElement("br",null),l.a.createElement("h4",null,"Connect four is a two player connection game. Built with Jquery"),l.a.createElement("br",null),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"https://adir-connect-four.s3.amazonaws.com/connect-four/index.html"},"Visit")))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"/pictures/projects/weather.png",alt:"weather"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",{className:"padding-bottom-dbl"},"Weather"),l.a.createElement("br",null),l.a.createElement("h4",null,"Weather app provides a real time forcast for any location in the world. Built with React.JS"),l.a.createElement("br",null),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"https://adir-weather.herokuapp.com"},"Visit"))))),l.a.createElement("div",{className:"scroll-to-top cursor-pointer text-center",onClick:function(){return k.current.scrollIntoView({behavior:"smooth",block:"start"})}},l.a.createElement("i",{className:"icon fa fa-chevron-up"})))}}]),t}(l.a.Component),y=(t(53),function(){return l.a.createElement("div",{className:"ticker-wrap"},l.a.createElement("div",{className:"ticker"},l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/javascript.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/html-5.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/css.svg",alt:""})),l.a.createElement("div",{className:"ticker__item react-logo"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-react.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/vue-js.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/jquery.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/node.png",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/handlebars.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/postgresql.png",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-aws.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-bootstrap.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/socketio.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/jest.svg",alt:""}))))});t(54);var _=function(){return l.a.createElement("div",{className:"content_inner"},l.a.createElement("h1",null,"About Me"),l.a.createElement("br",null),l.a.createElement("h3",null,"I am looking for a junior Full-Stack developer position in Berlin, Germany.",l.a.createElement("br",null),"I am also available for freelance work to build a custom website.",l.a.createElement("br",null),"Discover my abilities and skills in this portfolio.",l.a.createElement("br",null),"I studied at Spiced Academy in Berlin, Germany.",l.a.createElement("br",null),"I work with Javascript language, with frameworks such as"),l.a.createElement("br",null),l.a.createElement(y,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"grid"},l.a.createElement("div",{className:"front"},l.a.createElement("h2",{className:"black"},l.a.createElement("strong",null,"Frontend")),l.a.createElement("br",null),l.a.createElement("h6",null,"HTML5, CSS3, SVG, Javascript ES6, jQuery, Handlebars, Vue.js, React, Redux, Bootstrap, Axios")),l.a.createElement("div",{className:"back"},l.a.createElement("h2",{className:"black"},l.a.createElement("strong",null,"Backend")),l.a.createElement("br",null),l.a.createElement("h6",null,"HTTP, Node.js, Socket.io, Express, PostgreSQL, Redis, WebPack, AWS(SES, S3, Route-53, Lambda), Csurf")),l.a.createElement("div",{className:"tools"},l.a.createElement("h2",{className:"black"},l.a.createElement("strong",null,"System tools")),l.a.createElement("br",null),l.a.createElement("h6",null,"Git, Github, Bash-Scripting, Heroku, Zeit, Surge, Jest, NPM, Yarn"))))},j=l.a.createRef(),x=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={home:!0,projects:!1,about:!1,contact:!1},n}return Object(i.a)(t,[{key:"handleMenu",value:function(){var e=d()(".page"),a=d()("body"),t=d()("content_inner");j.current.scrollIntoView({block:"start"}),d()(".menu_items").hasClass("none")?d()(".menu_items").removeClass("none"):setTimeout((function(){d()(".menu_items").addClass("none")}),500),e.toggleClass("shazam"),a.toggleClass("overflow noscroll"),t.addClass("noscroll"),d()(".content").on("click",(function(){e.removeClass("shazam"),a.removeClass("noscroll"),t.removeClass("noscroll"),setTimeout((function(){d()(".menu_items").addClass("none")}),500)})),d()(".menu_items").on("click",(function(){e.removeClass("shazam"),a.removeClass("overflow noscroll"),t.removeClass("noscroll"),setTimeout((function(){d()(".menu_items").addClass("none")}),500)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App",ref:j},l.a.createElement("div",{className:"page"},l.a.createElement("span",{className:"menu_toggle menu-top",id:"menu-top",onClick:this.handleMenu},l.a.createElement("i",{className:"menu_open fa fa-bars fa-lg"}),l.a.createElement("i",{className:"menu_close fa fa-times fa-lg"})),l.a.createElement("ul",{className:"menu_items none"},l.a.createElement("li",{onClick:function(){return e.setState({home:!0,projects:!1,about:!1,contact:!1})}},l.a.createElement("a",null,l.a.createElement("i",{className:"icon fa fa-home fa-2x"})," Home")),l.a.createElement("li",{onClick:function(){return e.setState({projects:!0,home:!1,about:!1,contact:!1})}},l.a.createElement("a",null,l.a.createElement("i",{className:"icon fa fa-coffee fa-2x"})," Projects")),l.a.createElement("li",{onClick:function(){return e.setState({about:!0,home:!1,projects:!1,contact:!1})}},l.a.createElement("a",null,l.a.createElement("i",{className:"icon fa fa-user fa-2x"})," About")),l.a.createElement("li",{onClick:function(){return e.setState({contact:!0,home:!1,projects:!1,about:!1})}},l.a.createElement("a",null,l.a.createElement("i",{className:"icon fa fa-paper-plane fa-2x"})," Contact"))),l.a.createElement("main",{className:"content",style:{height:"0px"}},this.state.home&&l.a.createElement("div",{className:"content_inner"},l.a.createElement("h1",null,"Hi, I am Adir,"),l.a.createElement("h1",null,"Web Developer."),l.a.createElement("h2",null,"Full Stack Developer"),l.a.createElement("br",null),l.a.createElement("img",{className:"coding-main",src:"./pictures/undraw_coding_6mjf.svg"})),this.state.projects&&l.a.createElement("div",{className:"content_inner"},l.a.createElement(w,null)),this.state.about&&l.a.createElement(_,null),this.state.contact&&l.a.createElement("div",{className:"content_inner"},l.a.createElement(b,null)))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=t(8),C=t.n(S);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N.BrowserView,null,l.a.createElement(x,null)),N.isMobile?l.a.createElement(C.a,{lockOrientation:"landscape"},l.a.createElement(S.Orientation,{orientation:"landscape",alwaysRender:!1},l.a.createElement("div",{className:"phone-div"},l.a.createElement("h1",{style:{color:"#c07eb1"}},"I like to be vertical"),l.a.createElement("img",{className:"phone",src:"/pictures/rotating-phone.svg"}))),l.a.createElement(S.Orientation,{orientation:"portrait",alwaysRender:!1},l.a.createElement(x,null))):null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.44f8803e.chunk.js.map