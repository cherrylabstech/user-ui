import React from "react";
import Footer from "./Footer/Footer";
import ActionBar from "../Action/Action";
import UserInfo from "./UserInfo/UserInfo";
import CompanyInfo from "./Company/Company";
import Title from "./Title/Title";
import PropTypes from "prop-types";

import "./Post.css";

const Post = props => {
  const post = props.post;
  return (
    <div className="post-container" key={post.id}>
      {post.companyName && <CompanyInfo companyName={post.companyName} />}
      <UserInfo post={post} />
      <Title post={post} />
      <ActionBar post={post} />
      <div className="break-line"></div>
      <Footer post={post} />
    </div>
  );
};

Post.protoTypes = {
  post: PropTypes.object.isRequired,
  Footer: PropTypes.elementType,
  ActionBar: PropTypes.elementType,
  UserInfo: PropTypes.elementType,
  CompanyInfo: PropTypes.elementType
};

export default Post;
