import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import ShowMoreText from "react-show-more-text";
import "./Title.css";

const Title = props => {
  const { title, description, url } = props.post;
  return (
    <React.Fragment>
      <div
        className="cursor-pointer post-title"
        onClick={() => props.history.push("/post/" + url)}
      >
        {title}
      </div>
      <div className="post-description">
        <ShowMoreText
          lines={3}
          more="more"
          less="less"
          anchorClass="truncate-text"
        >
          {description}
        </ShowMoreText>
      </div>
    </React.Fragment>
  );
};

Title.protoTypes = {
  post: PropTypes.object
};

export default withRouter(Title);
