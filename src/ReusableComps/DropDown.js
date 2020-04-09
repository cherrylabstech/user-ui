import React, { Fragment } from "react";

function DropDown(props) {
  return (
    <Fragment>
      <label className="f-14">{props.text}</label>
      <select onChange={props.onChange}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </Fragment>
  );
}

export default DropDown;
