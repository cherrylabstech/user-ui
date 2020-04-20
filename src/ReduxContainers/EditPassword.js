import React, { Fragment, useState } from "react";
import TextField from "../ReusableComps/TextField";
function EditPassword() {
  const [current,setCurrent]=useState()
  const [newPassword,setNewPassword]=useState()
  const [confPassword,setConfPassword]=useState()

  const handleCurrent= (e)=>{
setCurrent(e.target.value)
  }
  const handleNewPass= (e)=>{
setNewPassword(e.target.value)
  }
  const handleConformPass= (e)=>{
setConfPassword(e.target.value)
  }

  return (
    <Fragment>
      <div className="my-10"><TextField text="Current Password" placeholder="Type Current Password" onChange={handleCurrent}/></div>
      <div className="my-10"><TextField text="New Password" placeholder="Type New Password" onChange={handleNewPass}/></div>
     <div className="my-10"><TextField text="Conform New Password" placeholder="Conform New Password" onChange={handleConformPass}/></div>
    </Fragment>
  );
}
export default EditPassword;
