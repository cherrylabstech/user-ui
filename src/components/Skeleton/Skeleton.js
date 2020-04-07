import React from "react";
import "./Skeleton.css";

const Skeleton = ({ count }) => {
  return [...Array(count)].map((e, i) => (
    <div className="post-container" key={i}>
      <div className="post-skeleton">
        <div className="avatar-skeleton">
          <div className="avatar"></div>
          <div className="avatar-line"></div>
          <div className="avatar-line"></div>
        </div>
        <div className="description-skeleton">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line-space"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  ));
};

export default Skeleton;
