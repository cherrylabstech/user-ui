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
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        onChange={props.onChange}
      />
    </Fragment>
  );
}
export default TextField;