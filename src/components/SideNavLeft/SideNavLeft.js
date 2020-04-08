import React from "react";
import { withRouter } from "react-router-dom";
import HomeNav from "./HomeNav/HomeNav";
//import PostNav from "./PostNav/PostNav";
import PropTypes from "prop-types";
import "./SideNavLeft.css";

const SideNavLeft = props => {
  return (
    <div className="sidenav-left">
      {/* {props.location.pathname === "/" ? <HomeNav /> : <PostNav />} */}
      <HomeNav></HomeNav>
    </div>
  );
};

SideNavLeft.propTypes = {
  HomeNav: PropTypes.element,
  PostNav: PropTypes.element
};

export default withRouter(SideNavLeft);
