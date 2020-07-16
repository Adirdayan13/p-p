import React from 'react';
import './Projects.css';
import $ from 'jquery';
const ref = React.createRef();

class Projects extends React.Component {
    state = {};
    componentDidMount() {
        $('button').on('mouseenter', function () {
            $('button').addClass('info')
        })
        $('button').on('mouseleave', function () {
            $('button').removeClass('info')
        })
    }
    render() {
        return (
                <div className="projects">
                    <div className="projects-head">
                        <h1 className="title-projects">Projects</h1>
                        <br />
                        <img className="coding" id="coding" src="./pictures/undraw_programming_2svr.svg" alt="coding-logo" />
                    </div>
                    <div className="containerr" ref={ref}>
                        <div className="cardd">
                            <div className="face face1">
                                <div className="contentt">
                                    <img src="/pictures/projects/socialmedia.png" alt="social-network" />
                                    <h3>Social network</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="contentt">
                                    <h4>A social media platform to find people, connect with them, live chat, read the news, share albums
                                and more.<br />
                        Built with React.JS</h4>
                                    <div className="buttons">
                                        <button
                                            className="btn btn-dark"
                                            onClick={() => window.open("https://adirsocialnetwork.herokuapp.com", "_blank")}
                                        >Visit</button>
                                        <i onClick={() => window.open("https://github.com/Adirdayan13/Social-Network", "_blank")} className="github-btn icon fa fa-github fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardd">
                            <div className="face face1">
                                <div className="contentt">
                                    <img src="/pictures/projects/covid-19.png" alt="covid-19" />
                                    <h3>Covid-19</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="contentt">
                                    <h4>A website to keep track of corona virus cases status worldwide with an option to filter confirmed
                                / recovered / deaths cases.<br />
                        Built with React.JS</h4>
                                    <div className="buttons">
                                        <button
                                            className="btn btn-dark"
                                            onClick={() => window.open("https://covid-19status.herokuapp.com", "_blank")}
                                        >Visit</button>
                                        <i onClick={() => window.open("https://github.com/Adirdayan13/COVID-19", "_blank")} className="github-btn icon fa fa-github fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardd">
                            <div className="face face1">
                                <div className="contentt">
                                    <img src="/pictures/projects/bapaume.png" alt="bapaume" />
                                    <h3>Souterrains Bapaume</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="contentt">
                                    <h4>Underground tunnels of Bapaume city from World War II.<br />
                                The website is in french.<br />
                        Built with React.JS</h4>
                                    <div className="buttons">
                                        <button
                                            className="btn btn-dark"
                                            onClick={() => window.open("https://www.souterrains-bapaume.com", "_blank")}
                                        >Visit</button>
                                        <i onClick={() => window.open("https://github.com/Adirdayan13/bapaume", "_blank")} className="github-btn icon fa fa-github fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardd">
                            <div className="face face1">
                                <div className="contentt">
                                    <img src="/pictures/projects/imageboard.png" alt="imageboard" />
                                    <h3>Imageboard</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="contentt">
                                    <h4>A Platform to share images between people with an option to comment on pictures.<br />
                                Built with Vue.JS</h4>
                                    <div className="buttons">
                                        <button
                                            className="btn btn-dark"
                                            onClick={() => window.open("https://adir-imageboard.herokuapp.com", "_blank")}
                                        >Visit</button>
                                        <i onClick={() => window.open("https://github.com/Adirdayan13/Imageboard", "_blank")} className="github-btn icon fa fa-github fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardd">
                            <div className="face face1">
                                <div className="contentt">
                                    <img src="/pictures/projects/petition.png" alt="petition" />
                                    <h3>Petition</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="contentt">
                                    <h4>A Platform that enables gathering signatures from people for a cause with the analytical options.<br />
                        Built with Handlebars</h4>
                                    <div className="buttons">
                                        <button
                                            className="btn btn-dark"
                                            onClick={() => window.open("https://adir-petition.herokuapp.com", "_blank")}
                                        >Visit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardd">
                            <div className="face face1">
                                <div className="contentt">
                                    <img src="/pictures/projects/spotify-search.png" alt="spotify" />
                                    <h3>Spotify Search</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="contentt">
                                    <h4>Spotify Search is a search enginge for spotify music with option to listen tracks preview without registration.<br />
                        Built with Handlebars</h4>
                                    <div className="buttons">
                                        <button
                                            className="btn btn-dark"
                                            onClick={() => window.open("https://spotify4search.herokuapp.com", "_blank")}
                                        >Visit</button>
                                        <i onClick={() => window.open("https://github.com/Adirdayan13/Spotify-Search", "_blank")} className="github-btn icon fa fa-github fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardd">
                            <div className="face face1">
                                <div className="contentt">
                                    <img src="/pictures/projects/vinyls.png" alt="vinyls" />
                                    <h3>Music Collection</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="contentt">
                                    <h4>A Platform to create your own music collection to keep track of your music by adding / editing / deleting and searching options.<br />
                            Built with Handlebars</h4>
                                    <div className="buttons">
                                        <button
                                            className="btn btn-dark"
                                            onClick={() => window.open("https://vinyls-collection.herokuapp.com", "_blank")}
                                        >Visit</button>
                                        <i onClick={() => window.open("https://github.com/Adirdayan13/Music-collection", "_blank")} className="github-btn icon fa fa-github fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardd">
                            <div className="face face1">
                                <div className="contentt">
                                    <img src="/pictures/projects/connectfour.png" alt="connect-four" />
                                    <h3>Connect Four</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="contentt">
                                    <h4>Connect four is a two player connection game.<br />
                        Built with Jquery</h4>
                                    <div className="buttons">
                                        <button
                                            className="btn btn-dark"
                                            onClick={() => window.open("https://adir-connect-four.s3.amazonaws.com/connect-four/index.html", "_blank")}
                                        >Visit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardd">
                            <div className="face face1">
                                <div className="contentt">
                                    <img src="/pictures/projects/weather.png" alt="weather" />
                                    <h3>Weather</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="contentt">
                                    <h4>Weather app provides a real time forcast for any location in the world.<br />
                            Built with React.JS</h4>
                                    <div className="buttons">
                                        <button
                                            className="btn btn-dark"
                                            onClick={() => window.open("https://adir-weather.herokuapp.com", "_blank")}
                                        >Visit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="up-wrapper">
                        <div className="scroll-to-top cursor-pointer text-center" onClick={() => ref.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        })}>
                            <i className="fa fa-chevron-up" ></i>
                        </div>
                    </div>
                </div>
        )
    }
};

export default Projects;