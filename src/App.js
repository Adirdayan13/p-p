import React, { useRef } from 'react';
import './App.css';
import './App.scss';
import $ from 'jquery';
import Contact from './Contact';
import Projects from './Projects'
import About from './About'
import { isMobile } from 'react-device-detect';
const ref = React.createRef();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { home: true, projects: false, about: false, contact: false }
  }

  handleMenu() {
    const $page = $('.page');
    const $body = $('body');
    const $content_inner = $('content_inner');
    ref.current.scrollIntoView({
      block: 'start'
    });
    if ($('.menu_items').hasClass('none')) {
      $('.menu_items').removeClass('none');
    } else {
      setTimeout(function () {
        $('.menu_items').addClass('none');
      }, 500);
    }
    $page.toggleClass('shazam');
    $body.toggleClass('overflow noscroll');
    $content_inner.addClass('noscroll');

    $('.content').on('click', function () {
      $page.removeClass('shazam');
      $body.removeClass('noscroll');
      $content_inner.removeClass('noscroll');
      setTimeout(function () {
        $('.menu_items').addClass('none');
      }, 500);
    });
    $('.menu_items').on('click', function () {
      $page.removeClass('shazam');
      $body.removeClass('overflow noscroll');
      $content_inner.removeClass('noscroll');
      setTimeout(function () {
        $('.menu_items').addClass('none');
      }, 500);
      
    });
  }

  render() {
    return (
      <div className="App" ref={ref}>
        <div className="page">
          <span className="menu_toggle menu-top" id="menu-top" onClick={this.handleMenu}>
            <i className="menu_open fa fa-bars fa-lg"></i>
            <i className="menu_close fa fa-times fa-lg"></i>
          </span>
          <ul className="menu_items none">
            <li onClick={() => this.setState({ home: true, projects: false, about: false, contact: false })}><a><i className="icon fa fa-home fa-2x"></i> Home</a></li>
            <li onClick={() => this.setState({ projects: true, home: false, about: false, contact: false })}><a><i className="icon fa fa-coffee fa-2x"></i> Projects</a></li>
            <li onClick={() => this.setState({ about: true, home: false, projects: false, contact: false })}><a><i className="icon fa fa-user fa-2x"></i> About</a></li>
            <li onClick={() => this.setState({ contact: true, home: false, projects: false, about: false })}><a><i className="icon fa fa-paper-plane fa-2x"></i> Contact</a></li>
          </ul>
          <main className="content" style={{ height: '0px' }}>
            {this.state.home && (
              <div className="content_inner">
                <h1>Hi, I am Adir,</h1>
                <h1>Web Developer.</h1>
                <h2>Full Stack Developer</h2>
                <br />
                <img className="coding-main" src="./pictures/undraw_coding_6mjf.svg" />
              </div>
            )}
            {this.state.projects && (
              <div className="content_inner">
                <Projects />
              </div>
            )}
            {this.state.about && (
              <About />
            )}
            {this.state.contact && (
              <div className="content_inner">
                <Contact />
              </div>
            )}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
