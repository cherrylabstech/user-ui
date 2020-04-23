import React from "react";
import Select from "react-select";
import status from "../icons/status.svg";
import { noData, loading } from "../ReduxContainers/MyRequest";

const customStyles = {
  control: base => ({
    ...base,
    "&:hover": {
      cursor: "pointer",
      background: "#efefef"
    },
    borderRadius: "0px",
    border: "none",
    borderColor: "none",
    boxShadow: "none",
    minHeight: "20px"
  }),
  menu: base => ({ ...base, width: "130px" }),
  container: base => ({ ...base, width: "130px" })
};

function SelectDropDown(props) {
  return (
    <Select
      isSearchable={false}
      styles={customStyles}
      options={
        props.options
          ? props.options.length <= 0
            ? noData
            : props.options
          : loading
      }
      onChange={props.onChange}
      placeholder={
        <div className="quick-state">
          <img src={status} alt="status" width="14px" className="mr-5" />
          <div className="quick-edit-state">{props.name}</div>
        </div>
      }
    />
  );
}

export default SelectDropDown;
