import React, { Fragment } from "react";
import "./TopBar.css";
function TopBar() {
  return (
    <Fragment>
      <div className="top-bar">
        <div className="top-bar-logo">
          <img
            src="https://asista-object-storage-dev1.s3.ap-south-1.amazonaws.com/dev/logo/logo.jpg"
            alt="logo"
            width="30px"
          ></img>
        </div>
        <div className="top-bar-logo">
          <img
            src="https://asista-object-storage-dev1.s3.ap-south-1.amazonaws.com/dev/logo/logo.jpg"
            alt="logo"
            width="30px"
          ></img>
        </div>
      </div>
    </Fragment>
  );
}

export default TopBar;
