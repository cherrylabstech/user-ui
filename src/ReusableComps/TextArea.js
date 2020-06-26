import React, { Fragment } from "react";
import "./Components.css";
function TextArea(props) {
  return (
    <Fragment>
      <div className="f-14">
        <label>{props.text}</label>
      </div>
      <textarea
        className={"text-area" || props.className}
        placeholder={props.placeholder}
        required={props.required}
        onChange={props.onChange}
      />
    </Fragment>
  );
}
export default TextArea;
