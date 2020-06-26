import { Key } from "../FroalaEditorKey";
import {
  BASE_PATH,SERVICE_PATH
} from "../../ApiBasePath/ApiBasePath";
export const OverviewConfig = {
  heightMin: 150,
  heightMax: 320,
  placeholderText: "",
  charCounterCount: false,
  attribution: false,
  autofocus: false,
  key: Key,
  required: true,
  toolbarButtons: {
    moreText: {
      buttons: [
        "bold",
        "italic",
        "underline",
        "strikeThrough",
        "subscript",
        "superscript",
        "fontFamily",
        "fontSize",
        "textColor",
        "inlineClass",
        "inlineStyle",
        "clearFormatting"
      ],
      align: "left",
      buttonsVisible: 2
    },
    moreParagraph: {
      buttons: [
        "alignLeft",
        "alignCenter",
        "formatOLSimple",
        "alignRight",
        "alignJustify",
        "formatOL",
        "formatUL",
        "paragraphFormat",
        "paragraphStyle",
        "lineHeight",
        "outdent",
        "indent",
        "quote"
      ],
      align: "left",
      buttonsVisible: 3
    },
    moreRich: {
      buttons: ["insertLink", "insertImage", "insertTable", "insertHR"],
      align: "left",
      buttonsVisible: 2
    }
  },
  imageUploadURL: `${BASE_PATH}${SERVICE_PATH}/static/upload/?v2=true`,
  imageUploadMethod: "POST",
  imageAllowedTypes: ["jpeg", "jpg", "png"],
  events: {
    "image.beforeUpload": function(images) {
      // Return false if you want to stop the image upload.
    },
    "image.uploaded": function(response) {
      response = JSON.parse(response);
      var img_url = response.uploadUrl;
      this.image.insert(img_url, true, null, this.image.get(), {
        link: img_url
      });
      return false;
      // Image was uploaded to the server.
    },
    "image.inserted": function(img, response) {
      // Image was inserted in the editor.
    },
    "image.replaced": function(img, response) {
      response = JSON.parse(response);
      var img_url = response.uploadUrl;
      this.image.insert(img_url, true, null, this.image.get(), {
        link: img_url
      });
      return false;
    }
  }
};
