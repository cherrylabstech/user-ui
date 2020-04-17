import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("X-Auth-Token");
    const tokenApiCalls = () => {
      dispatch(userActions.profileDetailsApi());
    };
    token && tokenApiCalls();
  }, [dispatch]);
  return (
    <Fragment>
      <div className="main">My Profile</div>
    </Fragment>
  );
}
export default Profile;
