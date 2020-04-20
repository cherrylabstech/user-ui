import React, { Fragment,useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import TextField from "../ReusableComps/TextField";

function EditProfile(props) {
  const [firstName,setFirstName]=useState();
  const [lastName,setLastName]=useState();
  const [phone,setPhone]=useState();
  const [email,setEmail]=useState();

  const dispatch = useDispatch();
  const profileDetailData = props.profilePicture && props.profilePicture;
  
  const profileUpdate =()=>{
    const token = localStorage.getItem("X-Auth-Token");
    const tokenApiCalls = () => {
      dispatch(userActions.profileDetailsApi());
        dispatch(
          userActions.editProfileApi({
            first_Name: firstName || profileDetailData.first_name,
            last_Name: lastName || profileDetailData.last_name,
            notification_email: phone || profileDetailData.notification_email,
            phone:email || profileDetailData.phone
          })
        );
    };
    token && tokenApiCalls();
  }

const prop=props.details
  
 const handleFirstName=(e)=>{
    setFirstName(e.target.value)
  }
  const handleLastName=(e)=>{
    setLastName(e.target.value)
  }
  const handlePhone=(e)=>{
    setPhone(e.target.value)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  console.log(firstName,lastName,phone,email)
  return (
    <Fragment>
      <div>
        <div>
          <label>Change Profie Picture</label>
          <ImageUpload
            profilePicture={props.profilePicture}
            loading={props.loading}
          ></ImageUpload>
        </div>
        <div className="my-10">
        <TextField text="First Name" placeholder={prop.first_name} onChange={handleFirstName} />
        </div>
        <div className="my-10">
        <TextField text="Last Name" placeholder={prop.last_name} onChange={handleLastName} />
        </div>
        <div className="my-10">
        <TextField text="Phone" placeholder={prop.phone} type="number" onChange={handlePhone} />
        </div>
        <div className="my-10">
        <TextField text="Email" placeholder={prop.email} type="email" onChange={handleEmail} />
        </div>
        <button onClick={profileUpdate}>Submit</button>
      </div>
    </Fragment>
  );
}
export default EditProfile;
