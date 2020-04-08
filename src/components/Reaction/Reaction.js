import React from "react";
import { connect } from "react-redux";
import "./Reaction.css";
import LikeReaction from "../../images/reactions/LikeReaction.svg";
import HeartReaction from "../../images/reactions/HeartReaction.svg";
import ClapReaction from "../../images/reactions/ClapReaction.svg";
import SuperbReaction from "../../images/reactions/SuperbReaction.svg";
import DislikeReaction from "../../images/reactions/DislikeReaction.svg";
import {
  likePost,
  lovePost,
  clapPost,
  superPost,
  dislikePost
} from "../../actions/postAction";

class Reaction extends React.Component {
  //Like the post
  handleLikeClick = () => {
    this.props.dispatch(likePost(this.props.post.id));
  };

  //Love the post
  handleLoveClick = () => {
    this.props.dispatch(lovePost(this.props.post.id));
  };

  //Clap the post
  handleClapClick = () => {
    this.props.dispatch(clapPost(this.props.post.id));
  };

  //super the post
  handleSuperClick = () => {
    this.props.dispatch(superPost(this.props.post.id));
  };

  //dislike the post
  handleDislikeClick = () => {
    this.props.dispatch(dislikePost(this.props.post.id));
  };
  render() {
    return (
      <div className="reaction-container">
        <div
          className="reaction-icon-container inline-block cursor-pointer"
          onClick={this.handleLikeClick}
        >
          <img src={LikeReaction} alt="like" />
        </div>
        <div
          className="reaction-icon-container inline-block cursor-pointer"
          onClick={this.handleLoveClick}
        >
          <img src={HeartReaction} alt="heart" />
        </div>
        <div
          className="reaction-icon-container inline-block cursor-pointer"
          onClick={this.handleClapClick}
        >
          <img src={ClapReaction} alt="clap" />
        </div>
        <div
          className="reaction-icon-container inline-block cursor-pointer"
          onClick={this.handleSuperClick}
        >
          <img src={SuperbReaction} alt="super" />
        </div>
        <div
          className="reaction-icon-container inline-block cursor-pointer"
          onClick={this.handleDislikeClick}
        >
          <img src={DislikeReaction} alt="dislike" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

export default connect(mapStateToProps)(Reaction);
