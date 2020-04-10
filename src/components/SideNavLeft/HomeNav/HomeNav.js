import React from "react";
import { withRouter } from "react-router-dom";
import HomeIcon from "../../../images/HomeIcon.svg";
import PopularIcon from "../../../images/PopularIcon.svg";
import "./HomeNav.css";
import { Link } from "react-router-dom";
import { filterArray } from "../../../helpers/filterArray";
const HomeNav = props => {
  const token = localStorage.getItem("X-Auth-Token");
  const authorizedSideNavLeft = [
    {
      id: 3,
      label: "Profile",
      pathname: "/Profile",
      icon: HomeIcon
    },
    {
      id: 4,
      label: "MyRequest",
      pathname: "/request",
      icon: PopularIcon
    },
    {
      id: 5,
      label: "MyRequest Detail",
      pathname: "/request/detail",
      icon: PopularIcon
    },
    {
      id: 6,
      label: "Asset",
      pathname: "/asset",
      icon: PopularIcon
    },
    {
      id: 7,
      label: "Asset Detail",
      pathname: "/asset/detail",
      icon: PopularIcon
    }
  ];
  const nonAuthorizedSideNav = [
    {
      id: 1,
      label: "Home",
      pathname: "/home",
      icon: HomeIcon
    },
    {
      id: 2,
      label: "Knowledge Base",
      pathname: "/KnowledgeBase",
      icon: PopularIcon
    }
  ];
  const sideNavLeftArray = nonAuthorizedSideNav.concat(
    token && authorizedSideNavLeft
  );
  const sideNavArray = filterArray(sideNavLeftArray);
  return (
    <div className="feed-group">
      <div className="hush-feed-label">HUSH FEED</div>
      {sideNavArray.map(data => (
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
