import React from "react";
import { Link, withRouter } from "react-router-dom";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import Logo from "../../images/hush-logo.svg";
import ProfileUser from "../../images/ProfileUser.jpg";
import "./Navbar.css";
import { Button } from "../Button/Button";

const Navbar = props => {
  const token = localStorage.getItem("X-Auth-Token");
  const handleLogin = () => {
    props.history.push("/login");
    window.location.reload();
  };
  const handleLogout = () => {
    localStorage.clear();
    props.history.push("/login");
    window.location.reload();
  };
  return (
    <div className="header-wrapper">
      <header>
        <div className="header">
          <div className="logo-block">
            <Link to="/home">
              <img src={Logo} alt="logo" className="brand-logo" />
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
            {token ? (
              <>
                <img
                  src={ProfileUser}
                  alt="logo"
                  className="brand-logo profile-pic"
                />
                <label onClick={handleLogout} className="logout-label">
                  Logout
                </label>
              </>
            ) : (
              <Button
                className="primary-btn btn-wide btn-height"
                onClick={handleLogin}
                text="Login"
              ></Button>
            )}
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
