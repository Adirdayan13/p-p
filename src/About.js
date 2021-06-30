import React from 'react';
import MoveStuffAround from './Ticker';
import './About.css'

function About() {
  return (
    <div className="content_inner padding about">
      <h1 className="about-title">About Me</h1>
      <h3 className="about-text">
        I studied Full Stack Web Development at Spiced Academy in Berlin, Germany.<br />
        Currently working as a frontend developer for <a href="http://www.m-events.com/" target="_blank">"M-Events"</a>.<br />
        {/* I am also available for freelance work to build a custom website.<br /> */}
        Discover my abilities and skills in this portfolio.<br />

        I work with Javascript language, with frameworks such as
      </h3>
      <MoveStuffAround />
      <div className="grid">
        <div className="front">
            <h2><strong>Frontend</strong></h2><br />
            <h6>HTML5, CSS3, SVG, Javascript ES6, jQuery, Handlebars, Vue.js, React, Redux, Bootstrap, Axios</h6>
        </div>
        <div className="back">
            <h2><strong>Backend</strong></h2><br />
            <h6>HTTP, Node.js, Socket.io, Express, PostgreSQL, Redis, WebPack, AWS(SES, S3, Route-53, Lambda), Csurf</h6>
        </div>
        <div className="tools">
            <h2><strong>System tools</strong></h2><br />
            <h6>Git, Github, Bash-Scripting, Hotjar, Heroku, Zeit, Surge, Jest, NPM, Yarn</h6>
        </div>
      </div>
    </div>
  )
}

export default About;