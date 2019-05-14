import React from "react";
import "../styles/App.css";
import logo from "../img/sos-logo.png";
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
            <div className="sos-vid">Video</div>
          </div>
          <div className="sos-countdown-timer">COMING SOON</div>
          <div className="mid-size-text">
            Be the first to know about the launch
          </div>
          <div className="sos-buttons-section">
            <a className="sos-info-button link-button">MORE INFO</a>
            <a className="sos-noti-button link-button" onClick={this.openModal}>
              GET NOTIFIED
            </a>
          </div>
          <footer>
            <Facebook />
            <Instagram />
            <Twitter />
          </footer>
        </div>
        {this.state.modalDisplay && (
          <div className="newsletter-modal" onClick={this.outsideModalClick}>
            <div className="newsletter-modal-content">
              <span className="close" onClick={this.closeModal}>
                &times;
              </span>
              <div className="modal-icon" />
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
