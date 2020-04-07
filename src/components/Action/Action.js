import React from "react";
import "./Action.css";
import HelpfullIcon from "../../images/HelpfullIcon.svg";
import AnswerIcon from "../../images/AnswerIcon.svg";
import FbIcon from "../../images/FbIcon.svg";
import TwitterIcon from "../../images/TwitterIcon.svg";
import ShareIcon from "../../images/ShareIcon.svg";
import MoreIcon from "../../images/MoreIcon.svg";
import Reaction from "../Reaction/Reaction";

class ActionBar extends React.Component {
  state = {
    visibility: false
  };
  render() {
    const post = this.props.post;

    this.handleDisplayReaction = () => {
      this.setState(prevState => ({
        visibility: !prevState.visibility
      }));
    };
    this.handleCloseReaction = () => {
      this.setState(prevState => ({
        visibility: false
      }));
    };
    return (
      <div className="action-container">
        <div
          className="action-item cursor-pointer helpfull-block"
          onMouseEnter={this.handleDisplayReaction}
          onMouseLeave={this.handleDisplayReaction}
        >
          {this.state.visibility ? (
            <div
              className="action-reaction-block"
              onClick={this.handleCloseReaction}
            >
              <Reaction post={post} />
            </div>
          ) : (
            ""
          )}

          <img src={HelpfullIcon} alt="" className="help-icon" />
          <span className="helpicon-text">Helpfull</span>
        </div>
        <div className="action-item cursor-pointer answer-block ">
          <img src={AnswerIcon} alt="" className="answer-icon" />
          <span className="answericon-text">Answer</span>
        </div>
        <div className="action-item share-icon-block">
          <div className="social-icon-block-desktop">
            <img
              src={FbIcon}
              alt="fb icon"
              className="help-icon cursor-pointer"
            />
            <img
              src={TwitterIcon}
              alt="twitter icon"
              className="help-icon cursor-pointer"
            />
            <img
              src={ShareIcon}
              alt="share icon"
              className="help-icon cursor-pointer"
            />
          </div>
          <div className="social-icon-block-mobile">
            <div className="share-item cursor-pointer answer-block ">
              <img src={ShareIcon} alt="" className="share-icon" />
              <span className="share-icon-text">Share</span>
            </div>
          </div>

          <img
            src={MoreIcon}
            alt="more icon"
            className="more-icon cursor-pointer"
          />
        </div>
      </div>
    );
  }
}

export default ActionBar;
