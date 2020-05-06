import React from "react";
import { Link, withRouter } from "react-router-dom";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import Logo from "../../images/hush-logo.svg";
import ProfileUser from "../../images/ProfileUser.jpg";
import "./Navbar.css";
import Button from "../../ReusableComps/Button";

const Navbar = props => {
  const token = localStorage.getItem("X-Auth-Token");
  const handleLogin = () => {
    props.history.push("/login");
  };
  const handleLogout = () => {
    localStorage.clear();
    props.history.push("/login");
  };
  const handleCreateTicket = () => {
    props.history.push("/CreateTicket");
  };
  return (
    <div className="header-wrapper">
      <header>
        <div className="header">
          <div className="logo-block">
            <Link to="/home">
              <img src={"https://www.asista.com/static/media/asista-logo.png"} alt="logo" className="brand-logo" />
            </Link>
          </div>
          <div className="search-block">
            <form
              action=""
              id="search"
              role="search"
              autoComplete="off"
              className="search-form"
            >
              <input
                type="text"
                placeholder="Search Hush"
                className="search-box"
              />
            </form>
          </div>
          <div className="user-profile-block cursor-pointer">
            <div className="nav-features">
            
              {token ? (
                <div className="logout-btn">
                  {props.profilePicture && (
                    <img
                      src={props.profilePicture.thumbnail || ProfileUser}
                      alt="logo"
                      className="brand-logo profile-pic"
                    />
                  )}
                  {/*
                  <label onClick={handleLogout} className="logout-label">
                    Logout
                  </label>
*/}
                  
                </div>
              ) : (
                <div className="nav-features">
                  <Button
                    className="primary-btn btn-wide btn-height"
                    onClick={handleLogin}
                    text="Login"
                  ></Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mobile-nav-block">
          <MobileNavbar />
        </div>
      </header>
    </div>
  );
};

export default withRouter(Navbar);
