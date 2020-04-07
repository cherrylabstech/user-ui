import React from "react";
import PropTypes from "prop-types";
import "./Tag.css";

const Tag = ({ tags }) => {
  return (
    <div className="tag-container">
      {tags.length
        ? tags.slice(0, 2).map((tag, index) => {
            return (
              <span className="tag" key={index}>
                #{tag}
              </span>
            );
          })
        : ""}
    </div>
  );
};

Tag.propTypes = {
  tags: PropTypes.array
};

export default Tag;
