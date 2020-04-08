import React, { Fragment } from "react";
import "./TopBar.css";
import { withRouter } from "react-router-dom";
function TopBar(props) {
  const token = localStorage.getItem("X-Auth-Token");
  const handleHome = () => {
    props.history.push("/home");
    window.location.reload();
  };
  return (
    <Fragment>
      <div className="top-bar">
        <div
          className="top-bar-item  top-bar-logo"
          style={token ? { width: "500px" } : { width: "700px" }}
        >
          <img
            src="https://asista-object-storage-dev1.s3.ap-south-1.amazonaws.com/dev/logo/logo.jpg"
            alt="logo"
            width="30px"
          ></img>
        </div>
        <div className="top-bar-item">
          <label>Submit Request</label>
        </div>
        {token && (
          <>
            <div className="top-bar-item">
              <label>My Request</label>
            </div>
            <div className="top-bar-item">
              <label>My Asset</label>
            </div>
          </>
        )}
        <div className="top-bar-item">
          <label>Knowledge Base</label>
        </div>
        {!token && (
          <>
            <div className="top-bar-item">
              <button>Sign Up</button>
            </div>
            <div className="top-bar-item">
              <button onClick={() => props.history.push("/auth/login")}>
                Login
              </button>
            </div>
          </>
        )}
        {token && (
          <>
            <div className="top-bar-item">
              <button onClick={handleHome}>Agent View</button>
            </div>
            <div className="top-bar-item">
              <img
                src="https://asista-object-storage-dev1.s3.ap-south-1.amazonaws.com/dev/logo/logo.jpg"
                alt="logo"
                width="30px"
              ></img>
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
}

export default withRouter(TopBar);
