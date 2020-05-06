import React from "react";
import QuestionMark from "../../images/NeedHelpIcon.svg";
import "./SideNavRight.css";
import {  withRouter } from "react-router-dom";


const SideNavRight = (props) => {

  const handleCreateTicket = () => {
    props.history.push("/CreateTicket");
  };
  return (
    <div className="sidenav-right">
      <div className="sidenav-right-fixed">
      <div className="ask-a-question-container">
        <div className="pull-right ask-a-question-block cursor-pointer" onClick={handleCreateTicket}>
          <img src={QuestionMark} alt="question" className="question-icon" />
          <span className="question-label">Ask new question</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default withRouter(SideNavRight);
