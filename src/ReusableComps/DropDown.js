import React, { Fragment } from "react";

function DropDown(props) {
  return (
    <Fragment>
      <div><label className="f-14">{props.text}</label></div>
      <select onChange={props.onChange} className={props.className || "def-dropdown"}>
      <option value="" disabled selected hidden>{props.placeholder}</option>
      {props.options}
      </select>
    </Fragment>
  );
}

export default DropDown;
