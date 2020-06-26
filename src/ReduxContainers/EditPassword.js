import React, { Fragment, useState } from "react";
import TextField from "../ReusableComps/TextField";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import Spinner from "../ReusableComps/Spinner";
function EditPassword() {
  const [current, setCurrent] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const dispatch = useDispatch();
  const passwordUpdating = useSelector(state => state.passwordReducer.loading);
  console.log(passwordUpdating);
  const handleCurrent = e => {
    setCurrent(e.target.value);
  };
  // newPassword: newPassword,
  //           oldPassword: oldPassword
  const handleNewPass = e => {
    setNewPassword(e.target.value);
  };
  const handleConformPass = e => {
    setConfPassword(e.target.value);
  };
  const handleChangePassword = () => {
    if ((current, newPassword, confPassword === undefined)) {
      alert("please enter all fields");
    } else if ((current, newPassword, confPassword === "")) {
      alert("please enter all fields");
    } else if (newPassword !== confPassword) {
      alert("New Password and Confirm password not match");
    } else if (newPassword.length <= 6) {
      alert("New Password must be greater than 6 letters");
    } else
      dispatch(
        userActions.PasswordApi({
          newPassword: newPassword,
          oldPassword: current
        })
      );
  };
  return (
    <Fragment>
      <div
        className="my-10"
        style={passwordUpdating ? { opacity: 0.5 } : { opacity: 1 }}
      >
        <TextField
          type="password"
          value={current}
          text="Current Password"
          placeholder="Type Current Password"
          onChange={handleCurrent}
        />
      </div>
      {passwordUpdating && (
        <Spinner
          fontSize="40px"
          position="absolute"
          marginLeft="40%"
          marginTop="5%"
        ></Spinner>
      )}

      <div className="my-10">
        <TextField
          type="password"
          value={newPassword}
          text="New Password"
          placeholder="Type New Password"
          onChange={handleNewPass}
        />
      </div>
      <div className="my-10">
        <TextField
          type="password"
          value={confPassword}
          text="Conform New Password"
          placeholder="Conform New Password"
          onChange={handleConformPass}
        />
      </div>
      <button onClick={handleChangePassword}>Change Password</button>
    </Fragment>
  );
}
export default EditPassword;
