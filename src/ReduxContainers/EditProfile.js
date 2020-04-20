import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import ImageUpload from "../components/ImageUpload/ImageUpload";
function EditProfile(props) {
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
      <div className="main">
        <div>
          <label>Change Profie Picture</label>
          <ImageUpload
            profilePicture={props.profilePicture}
            loading={props.loading}
          ></ImageUpload>
        </div>
      </div>
    </Fragment>
  );
}
export default EditProfile;
