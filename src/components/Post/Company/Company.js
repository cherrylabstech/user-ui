import React from "react";
import CompanyIcon from "../../../images/CompanyIcon.png";
import PropTypes from "prop-types";
import "./Company.css";

const Company = ({ companyName }) => {
  return (
    <div className="company-info">
      <img src={CompanyIcon} alt="company icon" className="company-icon" />
      <span className="question-label">Questions for</span>
      <span className="company-name">{companyName}</span>
    </div>
  );
};

Company.propTypes = {
  companyName: PropTypes.string
};

export default Company;
