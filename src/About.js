import React from 'react';
import MoveStuffAround from './Ticker';
import './About.css'

function About() {
    return (
        <div className="content_inner padding about">
            <h1 className="about-title">About Me</h1>
            <br />
            <h4 className="about-text">I am looking for a junior Full-Stack developer position in Berlin, Germany.<br />
            I am also available for freelance work to build a custom website.<br />
            Discover my abilities and skills in this portfolio.<br />
        I studied at Spiced Academy in Berlin, Germany.<br />
        I work with Javascript language, with frameworks such as</h4><br />
                <MoveStuffAround />
            <br /><br />
            <div className="grid">
                <div className="front">
                    <h2 className="black"><strong>Frontend</strong></h2><br />
                    <h6>HTML5, CSS3, SVG, Javascript ES6, jQuery, Handlebars, Vue.js, React, Redux, Bootstrap, Axios</h6>
                </div>
                <div className="back">
                    <h2 className="black"><strong>Backend</strong></h2><br />
                    <h6>HTTP, Node.js, Socket.io, Express, PostgreSQL, Redis, WebPack, AWS(SES, S3, Route-53, Lambda), Csurf</h6>
                </div>
                <div className="tools">
                    <h2 className="black"><strong>System tools</strong></h2><br />
                    <h6>Git, Github, Bash-Scripting, Hotjar, Heroku, Zeit, Surge, Jest, NPM, Yarn</h6>
                </div>
            </div>


        </div>
    )
}

export default About;