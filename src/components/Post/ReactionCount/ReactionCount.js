import React from "react";
import LikeReaction from "../../../images/reactions/LikeReaction.svg";
import HeartReaction from "../../../images/reactions/HeartReaction.svg";
import ClapReaction from "../../../images/reactions/ClapReaction.svg";
import SuperbReaction from "../../../images/reactions/SuperbReaction.svg";
import DislikeReaction from "../../../images/reactions/DislikeReaction.svg";
import PropTypes from "prop-types";
import "./ReactionCount.css";

const ReactionCount = ({ post }) => {
  return (
    <div className="reaction-count-container">
      {!!post.likeCount && (
        <div className="reaction-count-icon-container inline-block">
          <img src={LikeReaction} alt="like" />
          <span className="like-count">{post.likeCount}</span>
        </div>
      )}
      {!!post.heartCount && (
        <div className="reaction-count-icon-container inline-block">
          <img src={HeartReaction} alt="heart" />
          <span className="heart-count">{post.heartCount}</span>
        </div>
      )}
      {!!post.clapCount && (
        <div className="reaction-count-icon-container inline-block">
          <img src={ClapReaction} alt="clap" />
          <span className="clap-count">{post.clapCount}</span>
        </div>
      )}

      {!!post.superbCount && (
        <div className="reaction-count-icon-container inline-block">
          <img src={SuperbReaction} alt="super" />
          <span className="superb-count">{post.superbCount}</span>
        </div>
      )}
      {!!post.dislikeCount && (
        <div className="reaction-count-icon-container inline-block">
          <img src={DislikeReaction} alt="dislike" />
          <span className="dislike-count">{post.dislikeCount}</span>
        </div>
      )}

      {!!post.commentCount && (
        <div className="comment-count-container">
          <span className="oval-3"></span>
          <span className="comment-count">{post.commentCount} </span>
          <span className="answer-label-mobile"> ans</span>
          <span className="answer-label-desktop"> answer</span>
        </div>
      )}
    </div>
  );
};

ReactionCount.propType = {
  post: PropTypes.object
};

export default ReactionCount;
