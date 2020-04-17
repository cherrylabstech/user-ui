import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import FileUpload from "../components/FileUpload/FileUpload";
function Profile() {
  const dispatch = useDispatch();
  const assetCount = useSelector(state => state);
  console.log(assetCount);
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
