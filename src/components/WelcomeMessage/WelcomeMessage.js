import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../ApiCall/rootApi";
import Interweave from "interweave";
import "./WelcomeMessage.css";
function WelcomeMessage() {
  const dispatch = useDispatch();

  const WelcomeData = useSelector(
    state => state.WelcomeMessageReducer.welcomeData
  );
  const Loading = useSelector(state => state.WelcomeMessageReducer.loading);
  useEffect(() => {
    dispatch(userActions.welcome());
  }, [dispatch]);

  return (
    <div className="main welcome-message-box">
      {!Loading && WelcomeData === undefined && <div>Welcome </div>}
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
