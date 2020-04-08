import React from "react";
import { withRouter } from "react-router-dom";
import HomeIcon from "../../../images/HomeIcon.svg";
import PopularIcon from "../../../images/PopularIcon.svg";
import "./HomeNav.css";
import { Link } from "react-router-dom";
const HomeNav = props => {
  const sideNavLeftArray = [
    {
      id: 1,
      label: "Home",
      pathname: "/",
      icon: HomeIcon
    },
    {
      id: 2,
      label: "Knowledge Base",
      pathname: "/KnowledgeBase",
      icon: PopularIcon
    },
    {
      id: 3,
      label: "Profile",
      pathname: "/Profile",
      icon: HomeIcon
    },
    {
      id: 4,
      label: "MyRequest",
      pathname: "/MyRequest",
      icon: PopularIcon
    }
  ];
  return (
    <div className="feed-group">
      <div className="hush-feed-label">HUSH FEED</div>
      {sideNavLeftArray.map(data => (
        <Link key={data.id} to={data.pathname}>
          <div
            className={
              props.location.pathname === data.pathname
                ? "active-tab channel cursor-pointer"
                : "channel cursor-pointer"
            }
          >
            <img src={data.icon} alt="Popular" className="channel-logo" />
            <span className="channel-name">{data.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default withRouter(HomeNav);
