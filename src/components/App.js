import React from "react";
import "../styles/App.css";
import logo from "../img/sos-logo.png";
import axios from "axios";
import { ReactComponent as SubLogo } from "../img/sos-sub-logo.svg";
import Countdown from "./Countdown";
import { ReactComponent as Facebook } from "../img/Facebook.svg";
import { ReactComponent as Instagram } from "../img/Instagram.svg";
import { ReactComponent as Twitter } from "../img/Twitter.svg";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};
class App extends React.Component {
  state = { modalDisplay: false, email: "", msg: "" };

  openModal = () => {
    this.setState({ modalDisplay: true });
  };

  closeModal = () => {
    this.setState({ modalDisplay: false, msg: "" });
  };

  outsideModalClick = e => {
    if (e.target.className === "newsletter-modal") {
      this.closeModal();
    }
  };

  handleSubmit = e => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const mail_chimp =
      "https://theshortcut.us12.list-manage.com/subscribe/post-json?u=4dd5200f27d975e60d3f59cd1&id=e34bc78430&EMAIL=";
    e.preventDefault();
    axios
      .post(`${proxy}${mail_chimp}${this.state.email}`, {}, axiosConfig)
      .then(res => {
        if (res.data.result === "success") {
          // If result is success
          this.setState({ email: "", msg: res.data.msg });
        } else {
          // If not success
          this.setState({
            email: "",
            msg: "This email address has already been subscribed"
          });
        }
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className='App'>
        <div className='landing-page'>
          <div className='sos-logo'>
            <img src={logo} alt='sos logo' />
          </div>
          <div className='sos-teaser-video'>
            <div className='sos-vid-wrapper'>
              <video className='sos-vid' autoPlay loop muted>
                <source src='video.webm' type='video/webm' />
              </video>
            </div>
          </div>
          <div className='sos-countdown-timer'>
            <Countdown />
          </div>
          <div className='mid-size-text'>
            Be the first to know about the launch
          </div>
          <div className='sos-buttons-section'>
            <a
              className='sos-info-button link-button'
              href='https://theshortcut.org/our-activities-2/school-of-startups-2019/'
            >
              MORE INFO
            </a>
            <a
              href='#'
              className='sos-noti-button link-button'
              onClick={this.openModal}
            >
              GET NOTIFIED
            </a>
          </div>
          <footer>
            <a href='https://www.facebook.com/theshortcut/'>
              <Facebook />
            </a>
            <a href='https://www.instagram.com/theshortcutorg/'>
              <Instagram />
            </a>
            <a href='https://twitter.com/theshortcutorg'>
              <Twitter />
            </a>
          </footer>
        </div>
        {this.state.modalDisplay && (
          <div className='newsletter-modal' onClick={this.outsideModalClick}>
            <div className='newsletter-modal-content'>
              <span className='close' onClick={this.closeModal}>
                &times;
              </span>
              <div className='modal-icon'>
                <SubLogo />
              </div>
              <div id='mc_embed_signup'>
                <form onSubmit={this.handleSubmit}>
                  <div id='mc_embed_signup_scroll'>
                    <div className='modal-title'>Subscribe</div>
                    <div className='modal-subtitle'>
                      {this.state.msg === ""
                        ? "Enter your email to get notified"
                        : this.state.msg}
                    </div>
                    <div className='mc-field-group'>
                      <input
                        type='email'
                        value={this.state.email}
                        onChange={e => {
                          this.setState({ email: e.target.value });
                        }}
                        name='MERGE0'
                        className='required email modal-input'
                        placeholder='Write your email address here'
                      />
                    </div>
                    <div className='clear'>
                      <input
                        type='submit'
                        value='Subscribe'
                        name='subscribe'
                        id='mc-embedded-subscribe'
                        className='button modal-button'
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
