import React, {Component} from 'react';
import './scrollToTop.css';
import { Link } from 'react-scroll';
// import { useScrollBy } from 'react-use-window-scroll';
class ScrollToTop extends Component {
    state = {};
    render() {
        return (

            <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            >MAIN</Link>

        );
    }
};

export default ScrollToTop;

// <i className="icon fas fa-chevron-up"></i>