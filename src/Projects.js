import React, { useRef } from 'react';
import './Projects.css';
import $ from 'jquery';
import { isMobile } from 'react-device-detect';
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
    handleClick(e, name) {
        console.log("name: ", name);

        e.preventDefault();
        if (name === "socialnetwork") {
            window.open("http://adirsocialnetwork.herokuapp.com", "_blank");
        } else if (name === "souterrains") {
            window.open("https://www.souterrains-bapaume.com", "_blank");
        } else if (name === "covid-19") {
            window.open("https://covid-19status.herokuapp.com", "_blank");
        } else if (name === "imageboard") {
            window.open("https://adir-imageboard.herokuapp.com", "_blank");
        } else if (name === "petition") {
            window.open("http://adir-petition.herokuapp.com", "_blank");
        } else if (name === "spotify") {
            window.open("https://spotify4search.herokuapp.com", "_blank");
        } else if (name === "vinyls") {
            window.open("https://vinyls-collection.herokuapp.com", "_blank");
        } else if (name === "connect-four") {
            window.open("https://adir-connect-four.s3.amazonaws.com/connect-four/index.html", "_blank");
        } else if (name === "weather") {
            window.open("https://adir-weather.herokuapp.com", "_blank");
        }
    }

    render() {
        return (
            <div className="content_inner">
                <div className="projects" ref={ref}>
                    <h1 className="title-projects">Projects</h1>
                    <br />
                    <img className="coding" id="coding" src="./pictures/undraw_programming_2svr.svg" />
                    <div className="project">
                        <br />
                        <div className="containerr">
                            <div className="card">
                                <div className="imgBox">
                                    <img src="./pictures/projects/socialmedia.png" alt="socialnetwork" />
                                </div>
                                <div className="details">
                                    <h1>Social Network</h1>
                                    <br />
                                    <h3>A social media platform to find people, connect with them, live chat, read the news, share albums and more.
              Built with React.JS</h3>
                                    <br /><br />
                                    <button
                                        className="btn"
                                        onClick={e => this.handleClick(e, "socialnetwork")}
                                    >Visit</button>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="containerr">
                            <div className="card">
                                <div className="imgBox">
                                    <img src="./pictures/projects/bapaume.png" alt="imageboard" />
                                </div>
                                <div className="details">
                                    <h1 className="padding-bottom">Souterrains Bapaume</h1>
                                    <br />
                                    <h3>Personal Website. Underground tunnels of Bapaume city from World War II.<br />
                                    Built with React.JS</h3>
                                    <br />
                                    <button
                                        className="btn"
                                        onClick={e => this.handleClick(e, "souterrains")}
                                    >Visit</button>

                                </div>
                            </div>
                        </div>
                        <div className="containerr">
                            <div className="card">
                                <div className="imgBox">
                                    <img src="./pictures/projects/covid-19.png" alt="covid-19" />
                                </div>
                                <div className="details">
                                    <h1>Covid-19 status</h1>
                                    <br /><br />
                                    <h3>A website to keep track of corona virus cases status worldwide with an option to filter confirmed / recovered / deaths cases.
              Built with React.JS</h3>
                                    <br />
                                    <button
                                        className="btn"
                                        onClick={e => this.handleClick(e, "covid-19")}
                                    >Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="containerr">
                            <div className="card">
                                <div className="imgBox">
                                    <img src="./pictures/projects/imageboard.png" alt="imageboard" />
                                </div>
                                <div className="details">
                                    <h1 className="padding-bottom-dbl">Imageboard</h1>
                                    <br />
                                    <h3>A Platform to share images between people with an option to comment on pictures.
          Built with Vue.JS</h3>
                                    <br />
                                    <button
                                        className="btn"
                                        onClick={e => this.handleClick(e, "imageboard")}
                                    >Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="containerr">
                            <div className="card">
                                <div className="imgBox">
                                    <img src="./pictures/projects/petition.png" alt="petition" />
                                </div>
                                <div className="details">
                                    <h1 className="padding-bottom">Petition</h1>
                                    <br />
                                    <h3>Platform that enables gathering signatures from people for a cause with the analytical options.
              Built with Handlebars</h3>
                                    <br /><br />
                                    <button
                                        className="btn"
                                        onClick={e => this.handleClick(e, "petition")}
                                    >Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="containerr">
                            <div className="card">
                                <div className="imgBox">
                                    <img src="./pictures/projects/spotify-search.png" alt="spotify" />
                                </div>
                                <div className="details">
                                    <h1>Spotify Search</h1>
                                    <br /><br />
                                    <h3>Spotify Search is a search enginge for spotify music with option to listen tracks preview without registration.
                        Built with Handlebars</h3>
                                    <br />
                                    <button
                                        className="btn"
                                        onClick={e => this.handleClick(e, "spotify")}
                                    >Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="containerr">
                            <div className="card">
                                <div className="imgBox">
                                    <img src="./pictures/projects/vinyls.png" alt="vinyls" />
                                </div>
                                <div className="details">
                                    <h1>Music collection</h1>
                                    <br />
                                    <h3>Platform to create your own music collection to keep track of your music by adding / editing / deleting and searching options.
                        Built with Handlebars</h3>
                                    <br />
                                    <button
                                        className="btn"
                                        onClick={e => this.handleClick(e, "vinyls")}
                                    >Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="containerr">
                            <div className="card">
                                <div className="imgBox">
                                    <img src="./pictures/projects/connectfour.png" alt="connect four" />
                                </div>
                                <div className="details">
                                    <h1 className="padding-bottom-dbl">Connect Four</h1>
                                    <br />
                                    <h3>Connect four is a two player connection game.
                        Built with Jquery</h3>
                                    <br />
                                    <button
                                        className="btn"
                                        onClick={e => this.handleClick(e, "connect-four")}
                                    >Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="containerr">
                            <div className="card">
                                <div className="imgBox">
                                    <img src="/pictures/projects/weather.png" alt="weather" />
                                </div>
                                <div className="details">
                                    <h1 className="padding-bottom-dbl">Weather</h1>
                                    <br />
                                    <h3>Weather app provides a real time forcast for any location in the world.
                            Built with React.JS</h3>
                                    <br /><br />
                                    <button
                                        className="btn"
                                        onClick={e => this.handleClick(e, "weather")}
                                    >Visit</button>
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
            </div>
        )
    }
}

export default Projects;