import React, { useRef } from 'react';
import './Projects.css';
import $ from 'jquery';
import { isMobile } from 'react-device-detect';
const ref = React.createRef();

class Projects extends React.Component {
    state = {};
    componentDidMount() {
        $('button').on('mouseenter', function() {
            $('button').addClass('info')
        })
        $('button').on('mouseleave', function() {
            $('button').removeClass('info')
        })
    }
render() {
    return (
        <div className="projects" ref={ref}>
            <h1>Projects</h1>
            <br />
            <img className="coding" id="coding" src="/pictures/undraw_programming_2svr.svg" />
            <div className="project">
                <br />
                <div className="containerr">
                    <div className="card">
                        <div className="imgBox">
                            <img src="/pictures/projects/socialmedia.png" alt="socialnetwork" />
                        </div>
                        <div className="details">
                            <h1>Social Network</h1>
                            <br />
                            <h4>A social media platform to find people, connect with them, live chat, read the news, share albums and more.
              Built with React.JS</h4>
                            <br />
                            <button className="btn">Visit</button>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="containerr">
                    <div className="card">
                        <div className="imgBox">
                            <img src="/pictures/projects/imageboard.png" alt="socialnetwork" />
                        </div>
                        <div className="details">
                            <h1 className="padding-bottom-dbl">Imageboard</h1>
                            <br />
                            <h4>A Platform to share images between people with an option to comment on pictures.
              Built with Vue.JS</h4>
                            <br />
                            <button className="btn">Visit</button>
                        </div>
                    </div>
                </div>
                <div className="containerr">
                    <div className="card">
                        <div className="imgBox">
                            <img src="/pictures/projects/covid-19.png" alt="socialnetwork" />
                        </div>
                        <div className="details">
                            <h1>Covid-19 status</h1>
                            <br />
                            <h4>A website to keep track of corona virus cases status worldwide with an option to filter confirmed / recovered / deaths cases.
              Built with React.JS</h4>
                            <button className="btn">Visit</button>
                        </div>
                    </div>
                </div>
                <div className="containerr">
                    <div className="card">
                        <div className="imgBox">
                            <img src="/pictures/projects/petition.png" alt="socialnetwork" />
                        </div>
                        <div className="details">
                            <h1 className="padding-bottom">Petition</h1>
                            <br />
                            <h4>Platform that enables gathering signatures from people for a cause with the analytical options.
              Built with Handlebars</h4>
                            <br />
                            <button className="btn">Visit</button>
                        </div>
                    </div>
                </div>
                <div className="containerr">
                    <div className="card">
                        <div className="imgBox">
                            <img src="/pictures/projects/spotify-search.png" alt="socialnetwork" />
                        </div>
                        <div className="details">
                            <h1>Spotify Search</h1>
                            <br />
                            <h4>Spotify Search is a search enginge for spotify music with option to listen tracks preview without registration.
                        Built with Handlebars</h4>
                            <button className="btn">Visit</button>
                        </div>
                    </div>
                </div>
                <div className="containerr">
                    <div className="card">
                        <div className="imgBox">
                            <img src="/pictures/projects/vinyls.png" alt="socialnetwork" />
                        </div>
                        <div className="details">
                            <h1>Music collection</h1>
                            <br />
                            <h4>Platform to create your own music collection to keep track of your music by adding / editing / deleting and searching options.
                        Built with Handlebars</h4>
                            <button className="btn">Visit</button>
                        </div>
                    </div>
                </div>
                <div className="containerr">
                    <div className="card">
                        <div className="imgBox">
                            <img src="/pictures/projects/connectfour.png" alt="socialnetwork" />
                        </div>
                        <div className="details">
                            <h1 className="padding-bottom-dbl">Connect Four</h1>
                            <br />
                            <h4>Connect four is a two player connection game.
                        Built with Jquery</h4>
                            <br />
                            <button className="btn">Visit</button>
                        </div>
                    </div>
                </div>
                <div className="containerr">
                    <div className="card">
                        <div className="imgBox">
                            <img src="/pictures/projects/weather.png" alt="socialnetwork" />
                        </div>
                        <div className="details">
                            <h1 className="padding-bottom-dbl">Weather</h1>
                            <br />
                            <h4>Weather app provides a real time forcast for any location in the world.
                            Built with React.JS</h4>
                            <br />
                            <button className="btn">Visit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-to-top cursor-pointer text-center" onClick={() => ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })}>
                <i className="icon fa fa-chevron-up" ></i>
            </div>
        </div>
    )
}
}

export default Projects;