import React from "react"
import Select from "react-select";
import status from "../icons/status.svg"

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
    minHeight:"20px"
  }),
   menu: base => ({ ...base, width: "130px" }),
   container: base => ({ ...base, width: "130px" })
};


export function StateDrop(props){
    return <Select isSearchable={false}
        styles={customStyles}
        placeholder={
          <div className="quick-state">
                <img
                  src={status}
                  alt="status"
                  width="14px"
                  className="mr-5"
                />
                <div className="quick-edit-state">{props.stateName}</div>
              </div>
        }  />
}