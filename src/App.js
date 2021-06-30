import React from "react";
import $ from "jquery";
import Contact from "./Contact";
import Projects from "./Projects";
import Home from "./Home";
import About from "./About";
import "./App.css";
import "./App.scss";

const ref = React.createRef();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: { home: true }
    };
  }

  handleMenu() {
    const $page = $(".page");
    const $body = $("body");
    const $menu_items = $(".menu_items");
    const $content_inner = $("content_inner");
    ref.current.scrollIntoView({
      block: "start",
    });
    $page.toggleClass("shazam");
    $body.toggleClass("overflow noscroll");
    setTimeout(function () {
      $menu_items.toggleClass("hidden");
    }, 500);

    $(".content").on("click", function () {
      $page.removeClass("shazam");
      $body.removeClass("noscroll");
      $content_inner.removeClass("noscroll");
      setTimeout(function () {
        $menu_items.addClass("hidden");
      }, 500);
    });

    $(".menu_items").on("click", function () {
      $page.removeClass("shazam");
      $body.removeClass("overflow noscroll");
      $content_inner.removeClass("noscroll");
      setTimeout(function () {
        $menu_items.addClass("hidden");
      }, 500);
    });
  }

  handlePage(page) {
    this.setState({ pages: { [page]: true } })
  }

  render() {
    return (
      <div className="App" ref={ref}>
        <div className="page">
          <span
            className="menu_toggle menu-top"
            id="menu-top"
            onClick={this.handleMenu}
          >
            <i className="menu_open fa fa-bars fa-lg"></i>
            <i className="menu_close fa fa-times fa-lg"></i>
          </span>
          <ul className="menu_items hidden">
            <li onClick={() => this.handlePage("home")}>
              <a><i className="icon fa fa-home fa-2x"></i>Home</a>
            </li>
            <li onClick={() => this.handlePage("projects")}>
              <a><i className="icon fa fa-coffee fa-2x"></i>Projects</a>
            </li>
            <li onClick={() => this.handlePage("about")}>
              <a><i className="icon fa fa-user fa-2x"></i>About</a>
            </li>
            <li onClick={() => this.handlePage("contact")}>
              <a><i className="icon fa fa-paper-plane fa-2x"></i>Contact</a>
            </li>
          </ul>
          <main className="content">
            {this.state.pages.home && <Home />}
            {this.state.pages.projects && <Projects />}
            {this.state.pages.about && <About />}
            {this.state.pages.contact && <Contact />}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
