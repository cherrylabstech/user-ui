import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Interweave from "interweave";
import "./WelcomeMessage.css";
import { userActions } from "../../../ApiCall/rootApi";
import { withRouter } from "react-router-dom";
import { getKnowledgeBase } from "../../../ApiCall/KnowledgeBaseApi";
function WelcomeMessage(props) {
  const WelcomeData = useSelector(
    state => state.WelcomeMessageReducer.welcomeData
  );
  const dispatch = useDispatch();

  const location = props.location.pathname;

  const Loading = useSelector(state => state.WelcomeMessageReducer.loading);
  useEffect(() => {
    const apiCall = () => {
      dispatch(userActions.welcome());
      dispatch(userActions.KnowledgeBaseApi());
    };
    apiCall();
  }, [dispatch]);
  useEffect(() => {
    return function cleanUp() {
      dispatch(getKnowledgeBase());
    };
  }, [location, dispatch]);
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
export default withRouter(WelcomeMessage);
