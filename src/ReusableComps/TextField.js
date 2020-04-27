import React, { Fragment } from "react";
import "./Components.css";
function TextField(props) {
  return (
    <Fragment>
      <div className="f-14">
        <label>{props.text}</label>
      </div>
      <input
        className={"text-field" || props.className}
        type={props.type || "text"}
        placeholder={props.placeholder}
        required={props.required}
        onChange={props.onChange}
        value={props.value}
      />
    </Fragment>
  );
}
export default TextField;
