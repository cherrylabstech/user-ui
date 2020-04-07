import React from "react";
import { withRouter } from "react-router-dom";
import HomeIcon from "../../../images/HomeIcon.svg";
import PopularIcon from "../../../images/PopularIcon.svg";
import KbIcon from "../../../images/KbIcon.png"
import "./HomeNav.css";
import { Link } from "react-router-dom";
const HomeNav = props => {
  return (
    <div className="feed-group">
      <div
        className={
          props.location.pathname === "/"
            ? "active-tab channel cursor-pointer"
            : "channel cursor-pointer"
        }
        onClick={() => props.history.push("/")}
      >
        <img src={HomeIcon} alt="Home" className="channel-logo" />
        <span className="channel-name">Home</span>
      </div>
     
      <Link to="/KnowledgeBase">
        <div className="channel cursor-pointer">
          <img src={KbIcon} alt="Popular" className="channel-logo" />
          <span className="channel-name">Knowledge Base</span>
        </div>
      </Link>
     
      <Link to="/MyRequest">
        <div className="channel cursor-pointer">
          <img src={PopularIcon} alt="Popular" className="channel-logo" />
          <span className="channel-name">My Request</span>
        </div>
      </Link>
      <Link to="/MyRequest">
        <div className="channel cursor-pointer">
          <img src={PopularIcon} alt="Popular" className="channel-logo" />
          <span className="channel-name">My Assets</span>
        </div>
      </Link>
    </div>
  );
};

export default withRouter(HomeNav);
