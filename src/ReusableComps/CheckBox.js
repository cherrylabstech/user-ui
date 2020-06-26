import React, { Fragment } from "react";

function CheckBox(props) {
  return (
    <Fragment>
      <input
        className="cursor-pointer"
        type="checkbox"
        id={props.text}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
      <label className="cursor-pointer" htmlFor={props.text}>
        {props.text}
      </label>
    </Fragment>
  );
}

export default CheckBox;
