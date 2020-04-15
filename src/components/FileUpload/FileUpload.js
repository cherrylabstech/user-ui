import React from "react";
import "./FileUpload.css";
function FileUpload() {
  return (
    <div className="upload-button">
      <label className="myLabel">
        <input type="file" required />
        <span>Add file</span>
      </label>
    </div>
  );
}
export default FileUpload;
