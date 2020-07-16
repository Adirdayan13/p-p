import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserView, isMobile } from "react-device-detect";
import DeviceOrientation, { Orientation } from 'react-screen-orientation';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserView>
      <App />
    </BrowserView>
    {isMobile ?
      <DeviceOrientation lockOrientation={'landscape'}>
        <Orientation orientation='landscape' alwaysRender={false}>
          <div className="phone-div">
            <h1 style={{ color: "#c07eb1" }}>I like to be vertical</h1>
            <img className="phone" src="/pictures/rotating-phone.svg" alt="phone-rotation" />
          </div>
        </Orientation>
        <Orientation orientation='portrait' alwaysRender={false}>
          <App />
        </Orientation>
      </DeviceOrientation>
      : null}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
