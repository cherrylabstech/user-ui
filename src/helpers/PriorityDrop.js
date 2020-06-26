import React from "react";
import Select from "react-select";

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

export function PriorityDrop(props) {
  return (
    <Select
      isSearchable={false}
      styles={customStyles}
      options={props.options}
      placeholder={
        <div>
          <i
            className="fas fa-circle fa-xs mr-5"
            style={{ color: props.color }}
          />
          {props.priorityName}
        </div>
      }
    />
  );
}
