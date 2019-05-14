import React from "react";
import "../styles/App.css";
import logo from "../img/sos-logo.png";

function App() {
  return (
    <div className="App">
      <div className="sos-logo">
        <img src={logo} alt="sos logo" />
      </div>
      <div className="sos-teaser-video">
        <div className="sos-vid">Video</div>
      </div>
      <div className="sos-countdown-timer">COMING SOON</div>
      <div className="mid-size-text">Be the first to know about the launch</div>
      <div className="sos-buttons-section">
        <a className="sos-info-button link-button">MORE INFO</a>
        <a className="sos-noti-button link-button">GET NOTIFIED</a>
      </div>
    </div>
  );
}

export default App;
