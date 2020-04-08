import React from "react";
import QuestionMark from "../../images/NeedHelpIcon.svg";
import "./SideNavRight.css";

const SideNavRight = () => {
  return (
    <div className="sidenav-right">
      <div className="ask-a-question-container">
        <div className="pull-right ask-a-question-block cursor-pointer">
          <img src={QuestionMark} alt="question" className="question-icon" />
          <span className="question-label">Ask new question</span>
        </div>
      </div>
    </div>
  );
};

export default SideNavRight;
