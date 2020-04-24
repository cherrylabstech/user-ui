import React, { useState, useEffect } from "react";
import "./ImageUpload.css";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Spinner from "../../ReusableComps/Spinner";
import { userActions } from "../../ApiCall/rootApi";
import { useDispatch, useSelector } from "react-redux";
function ImageUpload(props) {
  let cropRef = React.createRef();
  const [cropResult, setCropResult] = useState("");
  const [display, setDisplay] = useState("none");
  const [src, setSrc] = useState("");
  const dispatch = useDispatch();
  const imageUploading = useSelector(
    state => state.profilePictureUploadReducer.loading
  );
  const imageError = useSelector(
    state => state.profilePictureUploadReducer.error
  );
  useEffect(() => {
    props.profilePicture && setCropResult(props.profilePicture.image);
  }, [props.profilePicture]);
  const imageOnChange = e => {
    e.preventDefault();
    setDisplay("block");
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (files[0].size < 8000000) {
        setSrc(reader.result);
      } else {
        setDisplay("none");
        alert("I Alerted you,I gone a kill you,if you did this again");
      }
    };
    reader.readAsDataURL(files[0]);
  };
  const cropImage = () => {
    if (typeof cropRef.getCroppedCanvas() === "undefined") {
      return;
    }
    setCropResult(cropRef.getCroppedCanvas().toDataURL());
    setDisplay("none");
    let formData = new FormData();
    cropRef.getCroppedCanvas().toBlob(blob => {
      formData.append("file", blob, "file.png");
      dispatch(userActions.ProfilePicUploadApi(formData));
    });
  };
  const handleCancel = () => {
    setDisplay("none");
  };
  const loadingImage = () => {
    // setImageUploading(true);
    cropImage();
  };
  useEffect(() => {
    imageError !== null &&
      imageError.status === 400 &&
      props.profilePicture &&
      setCropResult(props.profilePicture.image);
  }, [imageError, props.profilePicture]);
  return (
    <div>
      <div className="profile-picture-upload-box">
        <div className="profile-upload-box">
          {imageUploading && (
            <Spinner
              className="upload-icon-box"
              marginTop="10%"
              position="absolute"
              marginLeft="39%"
              fontSize="50px"
            ></Spinner>
          )}
          <img src={cropResult} alt="cropped" className="profile-pic-upload" />

          {!imageUploading && (
            <label
              htmlFor="files"
              className="fas fa-cloud-upload-alt cursor-pointer upload-icon"
            />
          )}

          <input
            id="files"
            style={{ visibility: "hidden" }}
            onChange={imageOnChange}
            type="file"
            accept="image/*"
          />
        </div>
        <Cropper
          style={{ display: display }}
          className="cropper-box"
          aspectRatio={1 / 1}
          guides={false}
          src={src}
          ref={cropper => {
            cropRef = cropper;
          }}
          viewMode={1}
          dragMode="move"
          cropBoxMovable={true}
        />
      </div>

      <div style={{ display: display }}>
        <div className="upload-button-box mt-1">
          <button onClick={loadingImage} className="profile-upload-button">
            Submit
          </button>
          <button
            onClick={handleCancel}
            className="profile-upload-button pull-right"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default ImageUpload;
