import React, { Fragment } from "react";

function DropDown(props) {
  return (
    <Fragment>
      <div><label className="f-14">{props.text}</label></div>
      <select onChange={props.onChange} className={props.className || "def-dropdown"}>
      <option value="" disabled selected hidden>{props.placeholder}</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </Fragment>
  );
}

export default DropDown;
