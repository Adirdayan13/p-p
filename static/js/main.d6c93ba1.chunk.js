(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},25:function(e,t,a){e.exports=a(59)},30:function(e,t,a){},32:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(22),r=a.n(l),s=(a(30),a(7)),i=a(3),o=a(4),m=a(6),u=a(5),d=a(2),p=a.n(d),E=a(9),h=a.n(E),f=a(23),g=(a(32),a(24)),v=a.n(g),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={loading:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleContact",value:function(e,t){e.preventDefault(),setTimeout((function(){window.open("github"===t?"https://github.com/adirdayan13":"https://www.linkedin.com/in/adir-dayan","_blank")}),700)}},{key:"handleSubmit",value:function(){var e=Object(f.a)(h.a.mark((function e(t){var a=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({loading:!0}),e.prev=2,e.next=5,v.a.post("https://ovjkzf0d1j.execute-api.us-east-1.amazonaws.com/prod",{first:this.state.first,last:this.state.last,subject:this.state.subject,email:this.state.email,message:this.state.message});case 5:setTimeout((function(){a.setState({success:!0,loading:!1})}),2e3),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("error in send email: ",e.t0),setTimeout((function(){a.setState({fail:!0,loading:!1})}),2e3);case 12:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log(this.state),c.a.createElement("div",{className:"contact-wrapper"},c.a.createElement("div",{className:"title-first"},c.a.createElement("br",null),c.a.createElement("h1",null,"Contact Me"),c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement("div",{className:"contact-div mb-2"},c.a.createElement("div",{className:"container"},!this.state.success&&c.a.createElement("div",{className:"title-second"},c.a.createElement("h4",null,"For any further intrigues don't hesitate to",c.a.createElement("br",null),"contact me using the form below:")),!this.state.success&&c.a.createElement("form",{method:"POST",autoComplete:"off",onSubmit:function(t){return e.handleSubmit(t)},id:"contact-form"},c.a.createElement("input",{id:"username",style:{display:"none"},type:"tell",name:"username",autoComplete:"off"}),c.a.createElement("input",{id:"password",style:{display:"none"},type:"password",name:"password",autoComplete:"off"}),c.a.createElement("div",{className:"row100"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"inputBox"},c.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"text",name:"first",required:"required",autoComplete:"new-password"}),c.a.createElement("span",{className:"text"},"First Name"),c.a.createElement("span",{className:"line"}))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"inputBox"},c.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"text",name:"last",required:"required",autoComplete:"new-password"}),c.a.createElement("span",{className:"text"},"Last Name"),c.a.createElement("span",{className:"line"})))),c.a.createElement("div",{className:"row100"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"inputBox"},c.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"text",name:"email",required:"required"}),c.a.createElement("span",{className:"text"},"Email"),c.a.createElement("span",{className:"line"}))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"inputBox"},c.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"text",name:"subject",required:"required"}),c.a.createElement("span",{className:"text"},"Subject"),c.a.createElement("span",{className:"line"})))),c.a.createElement("div",{className:"row100"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"inputBox textarea"},c.a.createElement("textarea",{onChange:function(t){return e.handleChange(t)},required:"required",name:"message"}),c.a.createElement("span",{className:"text"},"Type your message Here..."),c.a.createElement("span",{className:"line"})))),!this.state.loading&&c.a.createElement("div",{className:"row100"},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"submit",value:"Send"}))),this.state.loading&&c.a.createElement("img",{src:"./pictures/loading.svg",alt:"loading",style:{width:"50px"}})),this.state.success&&c.a.createElement("div",{id:"mailSent"},c.a.createElement("img",{alt:"success",style:{width:"100px"},src:"./pictures/check.svg"}),c.a.createElement("h1",null,"Your Email was sent successfully.")),this.state.fail&&c.a.createElement("h1",null,"Something went wrong, please try again."))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"icons"},c.a.createElement("a",{className:"pointer",onClick:function(t){return e.handleContact(t,"github")}},c.a.createElement("i",{value:"github",className:"github icon fa fa-github fa-2x"})),c.a.createElement("a",{className:"pointer",onClick:function(t){return e.handleContact(t,"linkedin")}},c.a.createElement("i",{className:"linkedin icon fa fa-linkedin fa-2x"}))))}}]),a}(c.a.Component),N=(a(50),c.a.createRef()),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){p()("button").on("mouseenter",(function(){p()("button").addClass("info")})),p()("button").on("mouseleave",(function(){p()("button").removeClass("info")}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"projects"},c.a.createElement("div",{className:"projects-head"},c.a.createElement("h1",{className:"title-projects"},"Projects"),c.a.createElement("br",null),c.a.createElement("img",{className:"coding",id:"coding",src:"./pictures/undraw_programming_2svr.svg",alt:"coding-logo"})),c.a.createElement("div",{className:"containerr",ref:N},c.a.createElement("div",{className:"cardd"},c.a.createElement("div",{className:"face face1"},c.a.createElement("div",{className:"contentt"},c.a.createElement("img",{src:"/pictures/projects/socialmedia.png",alt:"social-network"}),c.a.createElement("h3",null,"Social network"))),c.a.createElement("div",{className:"face face2"},c.a.createElement("div",{className:"contentt"},c.a.createElement("h4",null,"A social media platform to find people, connect with them, live chat, read the news, share albums and more.",c.a.createElement("br",null),"Built with React.JS"),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"btn btn-dark",onClick:function(){return window.open("https://adirsocialnetwork.herokuapp.com","_blank")}},"Visit"),c.a.createElement("i",{onClick:function(){return window.open("https://github.com/Adirdayan13/Social-Network","_blank")},className:"github-btn icon fa fa-github fa-2x"}))))),c.a.createElement("div",{className:"cardd"},c.a.createElement("div",{className:"face face1"},c.a.createElement("div",{className:"contentt"},c.a.createElement("img",{src:"/pictures/projects/covid-19.png",alt:"covid-19"}),c.a.createElement("h3",null,"Covid-19"))),c.a.createElement("div",{className:"face face2"},c.a.createElement("div",{className:"contentt"},c.a.createElement("h4",null,"A website to keep track of corona virus cases status worldwide with an option to filter confirmed / recovered / deaths cases.",c.a.createElement("br",null),"Built with React.JS"),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"btn btn-dark",onClick:function(){return window.open("https://covid-19status.herokuapp.com","_blank")}},"Visit"),c.a.createElement("i",{onClick:function(){return window.open("https://github.com/Adirdayan13/COVID-19","_blank")},className:"github-btn icon fa fa-github fa-2x"}))))),c.a.createElement("div",{className:"cardd"},c.a.createElement("div",{className:"face face1"},c.a.createElement("div",{className:"contentt"},c.a.createElement("img",{src:"/pictures/projects/bapaume.png",alt:"bapaume"}),c.a.createElement("h3",null,"Souterrains Bapaume"))),c.a.createElement("div",{className:"face face2"},c.a.createElement("div",{className:"contentt"},c.a.createElement("h4",null,"Underground tunnels of Bapaume city from World War II.",c.a.createElement("br",null),"The website is in french.",c.a.createElement("br",null),"Built with React.JS"),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"btn btn-dark",onClick:function(){return window.open("https://www.souterrains-bapaume.com","_blank")}},"Visit"),c.a.createElement("i",{onClick:function(){return window.open("https://github.com/Adirdayan13/bapaume","_blank")},className:"github-btn icon fa fa-github fa-2x"}))))),c.a.createElement("div",{className:"cardd"},c.a.createElement("div",{className:"face face1"},c.a.createElement("div",{className:"contentt"},c.a.createElement("img",{src:"/pictures/projects/imageboard.png",alt:"imageboard"}),c.a.createElement("h3",null,"Imageboard"))),c.a.createElement("div",{className:"face face2"},c.a.createElement("div",{className:"contentt"},c.a.createElement("h4",null,"A Platform to share images between people with an option to comment on pictures.",c.a.createElement("br",null),"Built with Vue.JS"),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"btn btn-dark",onClick:function(){return window.open("https://adir-imageboard.herokuapp.com","_blank")}},"Visit"),c.a.createElement("i",{onClick:function(){return window.open("https://github.com/Adirdayan13/Imageboard","_blank")},className:"github-btn icon fa fa-github fa-2x"}))))),c.a.createElement("div",{className:"cardd"},c.a.createElement("div",{className:"face face1"},c.a.createElement("div",{className:"contentt"},c.a.createElement("img",{src:"/pictures/projects/petition.png",alt:"petition"}),c.a.createElement("h3",null,"Petition"))),c.a.createElement("div",{className:"face face2"},c.a.createElement("div",{className:"contentt"},c.a.createElement("h4",null,"A Platform that enables gathering signatures from people for a cause with the analytical options.",c.a.createElement("br",null),"Built with Handlebars"),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"btn btn-dark",onClick:function(){return window.open("https://adir-petition.herokuapp.com","_blank")}},"Visit"))))),c.a.createElement("div",{className:"cardd"},c.a.createElement("div",{className:"face face1"},c.a.createElement("div",{className:"contentt"},c.a.createElement("img",{src:"/pictures/projects/spotify-search.png",alt:"spotify"}),c.a.createElement("h3",null,"Spotify Search"))),c.a.createElement("div",{className:"face face2"},c.a.createElement("div",{className:"contentt"},c.a.createElement("h4",null,"Spotify Search is a search enginge for spotify music with option to listen tracks preview without registration.",c.a.createElement("br",null)," Built with Handlebars"),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"btn btn-dark",onClick:function(){return window.open("https://spotify4search.herokuapp.com","_blank")}},"Visit"),c.a.createElement("i",{onClick:function(){return window.open("https://github.com/Adirdayan13/Spotify-Search","_blank")},className:"github-btn icon fa fa-github fa-2x"}))))),c.a.createElement("div",{className:"cardd"},c.a.createElement("div",{className:"face face1"},c.a.createElement("div",{className:"contentt"},c.a.createElement("img",{src:"/pictures/projects/vinyls.png",alt:"vinyls"}),c.a.createElement("h3",null,"Music Collection"))),c.a.createElement("div",{className:"face face2"},c.a.createElement("div",{className:"contentt"},c.a.createElement("h4",null,"A Platform to create your own music collection to keep track of your music by adding / editing / deleting and searching options.",c.a.createElement("br",null),"Built with Handlebars"),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"btn btn-dark",onClick:function(){return window.open("https://vinyls-collection.herokuapp.com","_blank")}},"Visit"),c.a.createElement("i",{onClick:function(){return window.open("https://github.com/Adirdayan13/Music-collection","_blank")},className:"github-btn icon fa fa-github fa-2x"}))))),c.a.createElement("div",{className:"cardd"},c.a.createElement("div",{className:"face face1"},c.a.createElement("div",{className:"contentt"},c.a.createElement("img",{src:"/pictures/projects/connectfour.png",alt:"connect-four"}),c.a.createElement("h3",null,"Connect Four"))),c.a.createElement("div",{className:"face face2"},c.a.createElement("div",{className:"contentt"},c.a.createElement("h4",null,"Connect four is a two player connection game.",c.a.createElement("br",null),"Built with Jquery"),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"btn btn-dark",onClick:function(){return window.open("https://adir-connect-four.s3.amazonaws.com/connect-four/index.html","_blank")}},"Visit"))))),c.a.createElement("div",{className:"cardd"},c.a.createElement("div",{className:"face face1"},c.a.createElement("div",{className:"contentt"},c.a.createElement("img",{src:"/pictures/projects/weather.png",alt:"weather"}),c.a.createElement("h3",null,"Weather"))),c.a.createElement("div",{className:"face face2"},c.a.createElement("div",{className:"contentt"},c.a.createElement("h4",null,"Weather app provides a real time forcast for any location in the world.",c.a.createElement("br",null),"Built with React.JS"),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"btn btn-dark",onClick:function(){return window.open("https://adir-weather.herokuapp.com","_blank")}},"Visit")))))),c.a.createElement("div",{className:"up-wrapper"},c.a.createElement("div",{className:"scroll-to-top cursor-pointer text-center",onClick:function(){return N.current.scrollIntoView({behavior:"smooth",block:"start"})}},c.a.createElement("i",{className:"fa fa-chevron-up"}))))}}]),a}(c.a.Component);a(20),a(21),a(51);var k=function(){return c.a.createElement("div",{className:"content_inner home"},c.a.createElement("div",{className:"inner"},c.a.createElement("div",{className:"titles"},c.a.createElement("h1",{className:"home-title"},"Hi, I am Adir,"),c.a.createElement("h1",{className:"home-title"},"Web Developer."),c.a.createElement("h2",{className:"home-title-small mt-5"},"Full Stack Developer")),c.a.createElement("br",null),c.a.createElement("img",{className:"coding-main",src:"/pictures/undraw_coding_6mjf.svg",alt:"coding-logo"})))},y=(a(52),function(){return c.a.createElement("div",{className:"ticker-wrap"},c.a.createElement("div",{className:"ticker"},c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/html-5.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/css.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/javascript.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/node.png",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/jquery.svg",alt:""})),c.a.createElement("div",{className:"ticker__item react-logo"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-react.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/vue-js.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/handlebars.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/postgresql.png",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-aws.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-git.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-heroku.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-bootstrap.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/hotjar.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-npm.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/yarn.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/icons8-surge-logo.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/socketio.svg",alt:""})),c.a.createElement("div",{className:"ticker__item"},c.a.createElement("img",{style:{width:"50px"},src:"./pictures/logos/jest.svg",alt:""}))))});a(53);var C=function(){return c.a.createElement("div",{className:"content_inner padding about"},c.a.createElement("h1",{className:"about-title"},"About Me"),c.a.createElement("h3",{className:"about-text"},"I studied Full Stack Web Development at Spiced Academy in Berlin, Germany.",c.a.createElement("br",null),"Currently working as a frontend developer for ",c.a.createElement("a",{href:"http://www.m-events.com/",target:"_blank"},'"M-Events"'),".",c.a.createElement("br",null),"Discover my abilities and skills in this portfolio.",c.a.createElement("br",null),"I work with Javascript language, with frameworks such as"),c.a.createElement(y,null),c.a.createElement("div",{className:"grid"},c.a.createElement("div",{className:"front"},c.a.createElement("h2",null,c.a.createElement("strong",null,"Frontend")),c.a.createElement("br",null),c.a.createElement("h6",null,"HTML5, CSS3, SVG, Javascript ES6, jQuery, Handlebars, Vue.js, React, Redux, Bootstrap, Axios")),c.a.createElement("div",{className:"back"},c.a.createElement("h2",null,c.a.createElement("strong",null,"Backend")),c.a.createElement("br",null),c.a.createElement("h6",null,"HTTP, Node.js, Socket.io, Express, PostgreSQL, Redis, WebPack, AWS(SES, S3, Route-53, Lambda), Csurf")),c.a.createElement("div",{className:"tools"},c.a.createElement("h2",null,c.a.createElement("strong",null,"System tools")),c.a.createElement("br",null),c.a.createElement("h6",null,"Git, Github, Bash-Scripting, Hotjar, Heroku, Zeit, Surge, Jest, NPM, Yarn"))))},_=c.a.createRef(),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={pages:{home:!0}},n}return Object(o.a)(a,[{key:"handleMenu",value:function(){var e=p()(".page"),t=p()("body"),a=p()(".menu_items"),n=p()("content_inner");_.current.scrollIntoView({block:"start"}),e.toggleClass("shazam"),t.toggleClass("overflow noscroll"),setTimeout((function(){a.toggleClass("hidden")}),500),p()(".content").on("click",(function(){e.removeClass("shazam"),t.removeClass("noscroll"),n.removeClass("noscroll"),setTimeout((function(){a.addClass("hidden")}),500)})),p()(".menu_items").on("click",(function(){e.removeClass("shazam"),t.removeClass("overflow noscroll"),n.removeClass("noscroll"),setTimeout((function(){a.addClass("hidden")}),500)}))}},{key:"handlePage",value:function(e){this.setState({pages:Object(s.a)({},e,!0)})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App",ref:_},c.a.createElement("div",{className:"page"},c.a.createElement("span",{className:"menu_toggle menu-top",id:"menu-top",onClick:this.handleMenu},c.a.createElement("i",{className:"menu_open fa fa-bars fa-lg"}),c.a.createElement("i",{className:"menu_close fa fa-times fa-lg"})),c.a.createElement("ul",{className:"menu_items hidden"},c.a.createElement("li",{onClick:function(){return e.handlePage("home")}},c.a.createElement("a",null,c.a.createElement("i",{className:"icon fa fa-home fa-2x"}),"Home")),c.a.createElement("li",{onClick:function(){return e.handlePage("projects")}},c.a.createElement("a",null,c.a.createElement("i",{className:"icon fa fa-coffee fa-2x"}),"Projects")),c.a.createElement("li",{onClick:function(){return e.handlePage("about")}},c.a.createElement("a",null,c.a.createElement("i",{className:"icon fa fa-user fa-2x"}),"About")),c.a.createElement("li",{onClick:function(){return e.handlePage("contact")}},c.a.createElement("a",null,c.a.createElement("i",{className:"icon fa fa-paper-plane fa-2x"}),"Contact"))),c.a.createElement("main",{className:"content"},this.state.pages.home&&c.a.createElement(k,null),this.state.pages.projects&&c.a.createElement(w,null),this.state.pages.about&&c.a.createElement(C,null),this.state.pages.contact&&c.a.createElement(b,null))))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(10),S=a(8),B=a.n(S);a(58);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j.BrowserView,null,c.a.createElement(x,null)),j.isMobile?c.a.createElement(B.a,{lockOrientation:"landscape"},c.a.createElement(S.Orientation,{orientation:"landscape",alwaysRender:!1},c.a.createElement("div",{className:"phone-div"},c.a.createElement("h1",{style:{color:"#c07eb1"}},"I like to be vertical"),c.a.createElement("img",{className:"phone",src:"/pictures/rotating-phone.svg",alt:"phone-rotation"}))),c.a.createElement(S.Orientation,{orientation:"portrait",alwaysRender:!1},c.a.createElement(x,null))):null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.d6c93ba1.chunk.js.map