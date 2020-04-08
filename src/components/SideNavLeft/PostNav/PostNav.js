import React from "react";
import { withRouter } from "react-router-dom";
import BackButtonImage from "../../../images/CurrentSelection.svg";
import "./PostNav.css";

const BackToFeed = props => {
  return (
    <div
      className="cursor-pointer back-to-feed-block"
      onClick={() => props.history.push("/")}
    >
      <img src={BackButtonImage} alt="back" className="back-to-feed-image" />
      <span className="back-to-feed-label">Go to Feed</span>
    </div>
  );
};

export default withRouter(BackToFeed);
