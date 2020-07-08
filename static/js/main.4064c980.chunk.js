(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},25:function(e,t,a){e.exports=a(58)},30:function(e,t,a){},32:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),s=(a(30),a(3)),i=a(4),o=a(6),m=a(5),u=(a(11),a(12),a(1)),d=a.n(u),E=a(9),p=a.n(E),h=a(22),g=a(23),v=(a(32),a(24)),f=a.n(v),b=(a(50),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={loading:!1},n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleContact",value:function(e,t){e.preventDefault(),setTimeout((function(){window.open("github"===t?"https://github.com/adirdayan13":"https://www.linkedin.com/in/adir-dayan","_blank")}),700)}},{key:"handleSubmit",value:function(){var e=Object(h.a)(p.a.mark((function e(t){var a=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d()("input"),t.preventDefault(),this.setState({loading:!0}),e.prev=3,e.next=6,f.a.post("https://ovjkzf0d1j.execute-api.us-east-1.amazonaws.com/prod",{name:this.state.name,email:this.state.email,subject:this.state.subject,message:this.state.message});case 6:setTimeout((function(){a.setState({success:!0,loading:!1})}),2e3),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("error in send email: ",e.t0),setTimeout((function(){a.setState({fail:!0,loading:!1})}),2e3);case 13:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content_inner contact"},l.a.createElement("h1",{className:"contact-title"},"Let's stay in touch"),l.a.createElement("br",null),l.a.createElement("h4",{className:"contact-text"},"For any further intrigues don't hesitate to contact me using the form below:"),l.a.createElement("br",null),!this.state.success&&l.a.createElement("form",{method:"POST",onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{onChange:function(t){return e.handleChange(t)},name:"name",type:"text",id:"name",className:"form-control",required:!0}),l.a.createElement("label",{htmlFor:"name",className:"ph-area"},"Name")),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{onChange:function(t){return e.handleChange(t)},name:"email",type:"text",id:"email",className:"form-control",required:!0}),l.a.createElement("label",{htmlFor:"email",className:"ph-area"},"Email")),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{onChange:function(t){return e.handleChange(t)},name:"subject",type:"text",id:"subject",className:"form-control",required:!0}),l.a.createElement("label",{htmlFor:"subject",className:"ph-area"},"Subject")),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{onChange:function(t){return e.handleChange(t)},name:"message",rows:"5",type:"text",id:"message",className:"form-control",required:!0}),l.a.createElement("label",{htmlFor:"message",className:"ph-area"},"Message")))),!this.state.loading&&l.a.createElement("button",{className:"btn btn-info"},"Submit"),this.state.loading&&l.a.createElement("img",{src:"./pictures/loading.svg",alt:"loading",style:{width:"50px"}}))),this.state.success&&l.a.createElement("div",{id:"mailSent"},l.a.createElement("img",{alt:"success",style:{width:"100px"},src:"./pictures/check.svg"}),l.a.createElement("h1",null,"Your Email was sent successfully.")),this.state.fail&&l.a.createElement("h1",null,"Something went wrong, please try again."),l.a.createElement("br",null),l.a.createElement("div",{className:"icons"},l.a.createElement("a",{className:"pointer",onClick:function(t){return e.handleContact(t,"github")}},l.a.createElement("i",{value:"github",className:"github icon fa fa-github fa-2x"})),l.a.createElement("a",{className:"pointer",onClick:function(t){return e.handleContact(t,"linkedin")}},l.a.createElement("i",{className:"linkedin icon fa fa-linkedin fa-2x"})))))}}]),a}(l.a.Component)),N=(a(51),a(7)),k=l.a.createRef(),w=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){d()("button").on("mouseenter",(function(){d()("button").addClass("info")})),d()("button").on("mouseleave",(function(){d()("button").removeClass("info")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"content_inner"},l.a.createElement("div",{className:"projects",ref:k},l.a.createElement("h1",{className:"title-projects"},"Projects"),l.a.createElement("br",null),l.a.createElement("img",{className:"coding",id:"coding",src:"./pictures/undraw_programming_2svr.svg"}),l.a.createElement("div",{className:"project"},l.a.createElement("br",null),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/socialmedia.png",alt:"socialnetwork"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",null,"Social Network"),l.a.createElement("br",null),l.a.createElement("h4",null,"A social media platform to find people, connect with them, live chat, read the news, share albums and more. Built with React.JS"),l.a.createElement("br",null),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"http://adirsocialnetwork.herokuapp.com"},"Visit"),l.a.createElement("br",null)))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/bapaume.png",alt:"imageboard"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",{className:"padding-bottom"},"Souterrains Bapaume"),l.a.createElement("br",null),l.a.createElement("h4",null,"Personal Website. Underground tunnels of Bapaume city from World War II.",l.a.createElement("br",null),"Built with React.JS"),l.a.createElement("br",null),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"https://www.souterrains-bapaume.com"},"Visit")))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/covid-19.png",alt:"covid-19"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",null,"Covid-19 status"),l.a.createElement("br",null),l.a.createElement("h4",null,"A website to keep track of corona virus cases status worldwide with an option to filter confirmed / recovered / deaths cases. Built with React.JS"),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"https://covid-19status.herokuapp.com"},"Visit")))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/imageboard.png",alt:"imageboard"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",{className:"padding-bottom-dbl"},"Imageboard"),l.a.createElement("br",null),l.a.createElement("h4",null,"A Platform to share images between people with an option to comment on pictures. Built with Vue.JS"),l.a.createElement("br",null),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"https://adir-imageboard.herokuapp.com"},"Visit")))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/petition.png",alt:"petition"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",{className:"padding-bottom"},"Petition"),l.a.createElement("br",null),l.a.createElement("h4",null,"Platform that enables gathering signatures from people for a cause with the analytical options. Built with Handlebars"),l.a.createElement("br",null),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"http://adir-petition.herokuapp.com"},"Visit")))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/spotify-search.png",alt:"spotify"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",null,"Spotify Search"),l.a.createElement("br",null),l.a.createElement("h4",null,"Spotify Search is a search enginge for spotify music with option to listen tracks preview without registration. Built with Handlebars"),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"https://spotify4search.herokuapp.com"},"Visit")))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/vinyls.png",alt:"vinyls"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",null,"Music collection"),l.a.createElement("br",null),l.a.createElement("h4",null,"Platform to create your own music collection to keep track of your music by adding / editing / deleting and searching options. Built with Handlebars"),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"https://vinyls-collection.herokuapp.com"},"Visit")))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"./pictures/projects/connectfour.png",alt:"connect four"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",{className:"padding-bottom-dbl"},"Connect Four"),l.a.createElement("br",null),l.a.createElement("h4",null,"Connect four is a two player connection game. Built with Jquery"),l.a.createElement("br",null),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"https://adir-connect-four.s3.amazonaws.com/connect-four/index.html"},"Visit")))),l.a.createElement("div",{className:"containerr"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"/pictures/projects/weather.png",alt:"weather"})),l.a.createElement("div",{className:"details"},l.a.createElement("h1",{className:"padding-bottom-dbl"},"Weather"),l.a.createElement("br",null),l.a.createElement("h4",null,"Weather app provides a real time forcast for any location in the world. Built with React.JS"),l.a.createElement("br",null),l.a.createElement("a",{className:"btn",rel:"noopener noreferrer",target:"_blank",href:"https://adir-weather.herokuapp.com"},"Visit"))))),l.a.createElement("div",{className:"scroll-to-top cursor-pointer text-center",onClick:function(){return k.current.scrollIntoView({behavior:"smooth",block:"start"})}},l.a.createElement("i",{className:"icon fa fa-chevron-up"}))))}}]),a}(l.a.Component);var y=function(){return l.a.createElement("div",{className:"content_inner home"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",{className:"home-title"},"Hi, I am Adir,"),l.a.createElement("h1",{className:"home-title"},"Web Developer."),l.a.createElement("h2",{className:"home-title-small"},"Full Stack Developer"),l.a.createElement("br",null),l.a.createElement("img",{className:"coding-main",src:"./pictures/undraw_coding_6mjf.svg"})))},_=(a(53),function(){return l.a.createElement("div",{className:"ticker-wrap"},l.a.createElement("div",{className:"ticker"},l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/html-5.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/css.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/javascript.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/node.png",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/jquery.svg",alt:""})),l.a.createElement("div",{className:"ticker__item react-logo"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-react.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/vue-js.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/handlebars.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/postgresql.png",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-aws.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-git.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-heroku.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-bootstrap.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/hotjar.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-npm.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/yarn.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-surge-logo.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/socketio.svg",alt:""})),l.a.createElement("div",{className:"ticker__item"},l.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/jest.svg",alt:""}))))});a(54);var x=function(){return l.a.createElement("div",{className:"content_inner padding about"},l.a.createElement("h1",{className:"about-title"},"About Me"),l.a.createElement("br",null),l.a.createElement("h4",{className:"about-text"},"I am looking for a junior Full-Stack developer position in Berlin, Germany.",l.a.createElement("br",null),"I am also available for freelance work to build a custom website.",l.a.createElement("br",null),"Discover my abilities and skills in this portfolio.",l.a.createElement("br",null),"I studied at Spiced Academy in Berlin, Germany.",l.a.createElement("br",null),"I work with Javascript language, with frameworks such as"),l.a.createElement("br",null),l.a.createElement(_,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"grid"},l.a.createElement("div",{className:"front"},l.a.createElement("h2",{className:"black"},l.a.createElement("strong",null,"Frontend")),l.a.createElement("br",null),l.a.createElement("h6",null,"HTML5, CSS3, SVG, Javascript ES6, jQuery, Handlebars, Vue.js, React, Redux, Bootstrap, Axios")),l.a.createElement("div",{className:"back"},l.a.createElement("h2",{className:"black"},l.a.createElement("strong",null,"Backend")),l.a.createElement("br",null),l.a.createElement("h6",null,"HTTP, Node.js, Socket.io, Express, PostgreSQL, Redis, WebPack, AWS(SES, S3, Route-53, Lambda), Csurf")),l.a.createElement("div",{className:"tools"},l.a.createElement("h2",{className:"black"},l.a.createElement("strong",null,"System tools")),l.a.createElement("br",null),l.a.createElement("h6",null,"Git, Github, Bash-Scripting, Hotjar, Heroku, Zeit, Surge, Jest, NPM, Yarn"))))},j=l.a.createRef(),S=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={home:!0,projects:!1,about:!1,contact:!1},n}return Object(i.a)(a,[{key:"handleMenu",value:function(){var e=d()(".page"),t=d()("body"),a=d()(".menu_items"),n=d()("content_inner");j.current.scrollIntoView({block:"start"}),e.toggleClass("shazam"),t.toggleClass("overflow noscroll"),setTimeout((function(){a.toggleClass("hidden")}),500),d()(".content").on("click",(function(){e.removeClass("shazam"),t.removeClass("noscroll"),n.removeClass("noscroll"),setTimeout((function(){a.addClass("hidden")}),500)})),d()(".menu_items").on("click",(function(){e.removeClass("shazam"),t.removeClass("overflow noscroll"),n.removeClass("noscroll"),setTimeout((function(){a.addClass("hidden")}),500)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App",ref:j},l.a.createElement("div",{className:"page"},l.a.createElement("span",{className:"menu_toggle menu-top",id:"menu-top",onClick:this.handleMenu},l.a.createElement("i",{className:"menu_open fa fa-bars fa-lg"}),l.a.createElement("i",{className:"menu_close fa fa-times fa-lg"})),l.a.createElement("ul",{className:"menu_items hidden"},l.a.createElement("li",{onClick:function(){return e.setState({home:!0,projects:!1,about:!1,contact:!1})}},l.a.createElement("a",null,l.a.createElement("i",{className:"icon fa fa-home fa-2x"})," Home")),l.a.createElement("li",{onClick:function(){return e.setState({projects:!0,home:!1,about:!1,contact:!1})}},l.a.createElement("a",null,l.a.createElement("i",{className:"icon fa fa-coffee fa-2x"})," Projects")),l.a.createElement("li",{onClick:function(){return e.setState({about:!0,home:!1,projects:!1,contact:!1})}},l.a.createElement("a",null,l.a.createElement("i",{className:"icon fa fa-user fa-2x"})," About")),l.a.createElement("li",{onClick:function(){return e.setState({contact:!0,home:!1,projects:!1,about:!1})}},l.a.createElement("a",null,l.a.createElement("i",{className:"icon fa fa-paper-plane fa-2x"})," Contact"))),l.a.createElement("main",{className:"content",style:{height:"0px"}},this.state.home&&l.a.createElement(y,null),this.state.projects&&l.a.createElement(w,null),this.state.about&&l.a.createElement(x,null),this.state.contact&&l.a.createElement(b,null))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(8),B=a.n(C);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N.BrowserView,null,l.a.createElement(S,null)),N.isMobile?l.a.createElement(B.a,{lockOrientation:"landscape"},l.a.createElement(C.Orientation,{orientation:"landscape",alwaysRender:!1},l.a.createElement("div",{className:"phone-div"},l.a.createElement("h1",{style:{color:"#c07eb1"}},"I like to be vertical"),l.a.createElement("img",{className:"phone",src:"/pictures/rotating-phone.svg"}))),l.a.createElement(C.Orientation,{orientation:"portrait",alwaysRender:!1},l.a.createElement(S,null))):null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.4064c980.chunk.js.map