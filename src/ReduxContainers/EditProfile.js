import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import TextField from "../ReusableComps/TextField";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import Spinner from "../ReusableComps/Spinner";

function EditProfile(props) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const editProfileLoading = useSelector(
    state => state.EditProfileReducer.loading
  );
  const dispatch = useDispatch();
  const profileDetailData = props.profilePicture && props.profilePicture;

  const profileUpdate = () => {
    const token = localStorage.getItem("X-Auth-Token");
    const tokenApiCalls = () => {
      dispatch(
        userActions.editProfileApi({
          first_Name: firstName || profileDetailData.first_name,
          last_Name: lastName || profileDetailData.last_name,
          notification_email: email || profileDetailData.notification_email,
          phone: phone || profileDetailData.phone
        })
      );
    };
    token && tokenApiCalls();
  };

  const prop = props.details;

  const handleFirstName = e => {
    setFirstName(e.target.value);
  };
  const handleLastName = e => {
    setLastName(e.target.value);
  };
  const handlePhone = e => {
    setPhone(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  return (
    <Fragment>
      <div style={editProfileLoading ? { opacity: 0.5 } : { opacity: 1 }}>
        <div>
          <label>Change Profie Picture</label>
          <ImageUpload
            profilePicture={props.profilePicture}
            loading={props.loading}
          ></ImageUpload>
        </div>
        <div className="my-10">
          <TextField
            value={firstName || prop.first_name}
            text="First Name"
            placeholder={prop.first_name}
            onChange={handleFirstName}
          />
        </div>
        {editProfileLoading && (
          <Spinner
            fontSize="40px"
            marginLeft="40%"
            position="absolute"
          ></Spinner>
        )}
        <div className="my-10">
          <TextField
            value={lastName || prop.last_name}
            text="Last Name"
            placeholder={prop.last_name}
            onChange={handleLastName}
          />
        </div>
        <div className="my-10">
          <TextField
            text="Phone"
            placeholder={prop.phone}
            type="number"
            value={phone || prop.phone}
            onChange={handlePhone}
          />
        </div>
        <div className="my-10">
          <TextField
            value={email || prop.email}
            text="Email"
            placeholder={prop.email}
            type="email"
            onChange={handleEmail}
          />
        </div>
        <button onClick={profileUpdate}>Submit</button>
        {/* <div>
          <label>TimeZone</label>
          <DropDown
            value={timeZone}
            onChange={handleZoneChange}
            options={
              timeZoneLoading ? <option>Loading</option> : timeZoneoptions
            }
          ></DropDown>
        </div> */}
      </div>
    </Fragment>
  );
}
export default EditProfile;
