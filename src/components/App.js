import React from "react";
import "../styles/App.css";
import logo from "../img/sos-logo.png";
import { ReactComponent as SubLogo } from "../img/sos-sub-logo.svg";
import Countdown from "./Countdown";
import { ReactComponent as Facebook } from "../img/Facebook.svg";
import { ReactComponent as Instagram } from "../img/Instagram.svg";
import { ReactComponent as Twitter } from "../img/Twitter.svg";
class App extends React.Component {
  state = { modalDisplay: false };
  openModal = () => {
    this.setState({ modalDisplay: true });
  };
  closeModal = () => {
    this.setState({ modalDisplay: false });
  };
  outsideModalClick = e => {
    if (e.target.className === "newsletter-modal") {
      this.setState({ modalDisplay: false });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="landing-page">
          <div className="sos-logo">
            <img src={logo} alt="sos logo" />
          </div>
          <div className="sos-teaser-video">
            <video className="sos-vid" autoPlay loop muted>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="sos-countdown-timer">
            <Countdown />
          </div>
          <div className="mid-size-text">
            Be the first to know about the launch
          </div>
          <div className="sos-buttons-section">
            <a
              className="sos-info-button link-button"
              href="https://theshortcut.org/our-activities-2/school-of-startups-2019/"
            >
              MORE INFO
            </a>
            <a className="sos-noti-button link-button" onClick={this.openModal}>
              GET NOTIFIED
            </a>
          </div>
          <footer>
            <a href="https://www.facebook.com/theshortcut/">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/theshortcutorg/">
              <Instagram />
            </a>
            <a href="https://twitter.com/theshortcutorg">
              <Twitter />
            </a>
          </footer>
        </div>
        {this.state.modalDisplay && (
          <div className="newsletter-modal" onClick={this.outsideModalClick}>
            <div className="newsletter-modal-content">
              <span className="close" onClick={this.closeModal}>
                &times;
              </span>
              <div className="modal-icon">
                <SubLogo />
              </div>
              <div className="modal-title">SUBSCRIBE</div>
              <div className="modal-subtitle">
                Enter your email address to get notified
              </div>
              <input
                className="modal-input"
                type="text"
                placeholder="Write your email address here"
              />
              <button className="modal-button">Submit</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
