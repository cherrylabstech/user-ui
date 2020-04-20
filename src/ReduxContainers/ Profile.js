import React, { Fragment, useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { profile } from "../Routes/routes";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import EditProfile from "./EditProfile";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../css/myProfile.css"
import EditPassword from "./EditPassword";
function Profile(props) {
  const dispatch = useDispatch();
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [isPasswordPaneOpen, setIsPasswordPaneOpen] = useState(false);
  let el = React.createRef();
  useEffect(() => {
    Modal.setAppElement(el);
  }, [el]);
  
  useEffect(() => {
    const token = localStorage.getItem("X-Auth-Token");
    const tokenApiCalls = () => {
      dispatch(userActions.profileDetailsApi());
    };
    token && tokenApiCalls();
  }, [dispatch]);

  const closeSlidingpane = () => {
    setIsPaneOpen(false);
  };
  const openSlidePane = () => {
    setIsPaneOpen(true);
  };

  const proDetails = useSelector(state=>state.profileDetailsReducer.profileDetailsData)
   
   const userDetails = proDetails || []
   
   console.log(profile)
  const closeSlidingPasswordPane = () => {
    setIsPasswordPaneOpen(false);
  };
  const openPasswordSlidePane = () => {
    setIsPasswordPaneOpen(true);
  };
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
                  <div className="cover-box">
                  Last Name
                  <div className="d-box">{userDetails.last_name}</div>
                  </div>
                  <div className="cover-box">
               Phone Number
                  <div className="d-box">{userDetails.phone}</div>
                  </div>
                  <div className="cover-box">
                  Username/Email ID
                  <div className="d-box">{userDetails.email}</div>
                  </div>
                   <div className="cover-box">
                  Timezone
                  <div className="d-box">{profile.timezone}</div>
                  </div>
                   <div ref={ref => (el = ref)}>
        <button onClick={openSlidePane}>Edit Profile</button>
        <button onClick={openPasswordSlidePane}>Edit Password</button>
        <SlidingPane
          title="Edit Profile"
          overlayClassName="slide-overlay"
          isOpen={isPaneOpen}
          width="340px"
          ariaHideApp={false}
          onRequestClose={closeSlidingpane}
        >
          <EditProfile
          details={userDetails}
            profilePicture={props.profilePicture}
            loading={props.loading}
          ></EditProfile>
        </SlidingPane>
        <SlidingPane
          title="Edit Password"
          overlayClassName="slide-overlay"
          isOpen={isPasswordPaneOpen}
          width="340px"
          onRequestClose={closeSlidingPasswordPane}
        >
          <EditPassword></EditPassword>
        </SlidingPane>
      </div>
                  </div>
</Fragment>
)}

export default Profile;
