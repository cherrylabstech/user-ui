import React from "react";
import "./FileUpload.css";
function FileUpload(props) {
  const supportedTypes =
    props.propertiesData !== undefined && props.propertiesData.fileType;
  return (
    <div className="upload-button">
      <label className="myLabel">
        <input
          accept={(supportedTypes || []).map(data => "." + data)}
          type="file"
          onChange={props.onChange}
          required
        />
        <span>Add file</span>
      </label>
    </div>
  );
}
export default FileUpload;
