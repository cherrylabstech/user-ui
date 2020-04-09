import React from "react";
import { useSelector } from "react-redux";
import Interweave from "interweave";
import "./WelcomeMessage.css";
function WelcomeMessage() {
  const WelcomeData = useSelector(
    state => state.WelcomeMessageReducer.welcomeData
  );
  const Loading = useSelector(state => state.WelcomeMessageReducer.loading);

  return (
    <div className="main welcome-message-box">
      {!Loading && WelcomeData === undefined && <div>Welcome </div>}
      {Loading && <div>Loading...</div>}
      {!Loading && WelcomeData !== undefined && (
        <div className="welcome-message-box">
          <div>{WelcomeData.welcomeHeading}</div>
          <div>
            <Interweave content={WelcomeData.welcomeMessage}></Interweave>
          </div>
        </div>
      )}
    </div>
  );
}
export default WelcomeMessage;
