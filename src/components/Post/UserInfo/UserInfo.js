import React from "react";
import VerifiedIcon from "../../../images/VerifiedIcon.svg";
import PropTypes from "prop-types";
import "./UserInfo.css";

const UserInfo = ({ post }) => {
  return (
    <div className="user-info">
      <img src={post.userImage} alt="user" className="user-dp" />
      <div className="no-margin inline-block" style={{ margin: "auto 0" }}>
        <div className="username-block">
          <span className="nickname">{post.userName}</span>
          {post.userVerified === 1 && (
            <img src={VerifiedIcon} alt="verified" className="verified-icon" />
          )}
        </div>
        <span className="block text-left company-name">{post.companyName}</span>
      </div>
      <div className="pull-right padding-10 create-time-container">
        <span className="created-time">Asked 3 hours ago</span>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  post: PropTypes.object
};

export default UserInfo;
