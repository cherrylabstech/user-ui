import React from "react";

function Radio(props) {
  return (
    <div className="radio-field">
      <input
        className="cursor-pointer"
        type="radio"
        id={props.text}
        name="radio"
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
      <label className="cursor-pointer" htmlFor={props.text}>
        {props.text}
      </label>
    </div>
  );
}
export default Radio;
