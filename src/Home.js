import React from 'react';
import './App.css';
import './App.scss';
import './Home.css';

function Home() {
  return (
    <div className="content_inner home">
      <div className="inner">
        <div className="titles">
          <h1 className="home-title">Hi, I am Adir,</h1>
          <h1 className="home-title">Web Developer.</h1>
          <h2 className="home-title-small mt-5">Full Stack Developer</h2>
        </div>
        <br />
        <img className="coding-main" src="/pictures/undraw_coding_6mjf.svg" alt="coding-logo" />
      </div>
    </div>
  )
}

export default Home;