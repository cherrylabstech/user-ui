import React from "react";
import Tag from "../Tag/Tag";
import ReactionCount from "../ReactionCount/ReactionCount";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ post }) => {
  return (
    <div className="post-footer">
      <Tag tags={post.tags} />
      <ReactionCount post={post} />
    </div>
  );
};

Footer.propTypes = {
  post: PropTypes.object,
  Tag: PropTypes.element,
  ReactionCount: PropTypes.element
};

export default Footer;
