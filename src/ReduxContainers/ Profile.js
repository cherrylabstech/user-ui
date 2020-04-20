import React, { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import EditProfile from "./EditProfile";
function Profile(props) {
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  let el = React.createRef();
  useEffect(() => {
    Modal.setAppElement(el);
  }, [el]);
  const closeSlidingpane = () => {
    setIsPaneOpen(false);
  };
  const openSlidePane = () => {
    setIsPaneOpen(true);
  };
  return (
    <Fragment>
      <div ref={ref => (el = ref)} className="main">
        Edit Profile
        <button onClick={openSlidePane}>Edit Profile</button>
        <SlidingPane
          title="Edit Profile"
          overlayClassName="slide-overlay"
          isOpen={isPaneOpen}
          width="340px"
          ariaHideApp={false}
          onRequestClose={closeSlidingpane}
        >
          <EditProfile
            profilePicture={props.profilePicture}
            loading={props.loading}
          ></EditProfile>
        </SlidingPane>
      </div>
    </Fragment>
  );
}

export default Profile;
