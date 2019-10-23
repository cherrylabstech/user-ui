import React from "react";
import HomeIcon from "../../../images/HomeIcon.svg";
import PopularIcon from "../../../images/PopularIcon.svg";
import "./MobileNavbar.css";

const MobileNavbar = props => {
  return (
    <React.Fragment>
      <div className="mobile-nav-icon-container">
        <div id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav-label">
          <label className="navbar-home-label">Home</label>
        </div>
      </div>
      <div id="menu" className="menu">
        <label className="hush-feed-label">HUSH FEED</label>
        <div className="channel mobile-nav">
          <img src={HomeIcon} alt="Popular" className="channel-logo" />
          <a href="/" className="channel-name">
            Home
          </a>
        </div>
        <div className="channel mobile-nav">
          <img src={PopularIcon} alt="Popular" className="channel-logo" />
          <a href="/" className="channel-name">
            Popular
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileNavbar;
