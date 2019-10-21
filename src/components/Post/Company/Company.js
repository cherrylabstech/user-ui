import React from "react";
import CompanyIcon from "../../../images/CompanyIcon.png";
import "./Company.css";

const Company = props => {
  const companyName = props.companyName;
  return (
    <div className="company-info">
      <img src={CompanyIcon} alt="company icon" className="company-icon" />
      <span className="question-label">Questions for</span>
      <span className="company-name">{companyName}</span>
    </div>
  );
};

export default Company;
