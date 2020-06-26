import React from "react";
import { withRouter } from "react-router-dom";
import HomeNav from "./HomeNav/HomeNav";
//import PostNav from "./PostNav/PostNav";
import PropTypes from "prop-types";
import "./SideNavLeft.css";

const SideNavLeft = props => {
  return (
    <div className="flex-item" className="sidenav-left">
      {/* {props.location.pathname === "/" ? <HomeNav /> : <PostNav />} */}
      <div className="sidenav-left-fixed">
      <HomeNav></HomeNav>
      </div>
     
    </div>
  );
};

SideNavLeft.propTypes = {
  HomeNav: PropTypes.element,
  PostNav: PropTypes.element
};

export default withRouter(SideNavLeft);
