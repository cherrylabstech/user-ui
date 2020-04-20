import React, { Fragment, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import "../css/myProfile.css"
function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("X-Auth-Token");
    const tokenApiCalls = () => {
      dispatch(userActions.profileDetailsApi());
    };
    token && tokenApiCalls();
  }, [dispatch]);

  const proDetails = useSelector(state=>state.profileDetailsReducer.profileDetailsData)
   
   const userDetails = proDetails || []
   console.log(userDetails)
  return (
    <Fragment>
      <div className="main">My Profile<div><img
                    src={
                      userDetails.image === null || userDetails.image === ""
                        ? "https://www.peninsula.org/sites/default/files/physician-default.png"
                        : userDetails.image
                    }
                    alt="profile"
                    className="profile-image rounded-circle"
                  />
                  </div>
                  <div className="cover-box">
                  First Name
                  <div className="d-box">{userDetails.first_name}</div>
                  </div>
                  </div>
    </Fragment>
  );
}
export default Profile;
