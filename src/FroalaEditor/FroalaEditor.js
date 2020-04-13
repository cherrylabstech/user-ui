import React from "react";
import { OverviewConfig } from "./Config/OverviewConfig";
// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins/align.min.js";
import "froala-editor/js/plugins/char_counter.min.js";
import "froala-editor/js/plugins/colors.min.js";
import "froala-editor/js/plugins/font_size.min.js";
import "froala-editor/js/plugins/paragraph_format.min.js";
import "froala-editor/js/plugins/font_family.min.js";
import "froala-editor/js/plugins/inline_style.min.js";
import "froala-editor/js/plugins/lists.min.js";
import "froala-editor/js/plugins/quote.min.js";
import "froala-editor/js/plugins/link.min.js";
import "froala-editor/js/plugins/table.min.js";
import "froala-editor/js/plugins/image.min.js";
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/plugins/char_counter.min.css";
import "froala-editor/css/plugins/colors.min.css";
import "froala-editor/css/plugins/table.min.css";
import "froala-editor/css/plugins/image.min.css";
// Require FroalaEditor file

import FroalaEditor from "react-froala-wysiwyg";

class FroalasEditor extends React.Component {
  constructor() {
    super();

    this.state = {
      model: ""
    };
  }

  handleModelChange = model => {
    this.setState({
      model: model
    });
  };

  render() {
    return (
      <div className="my-1">
        <FroalaEditor
          model={this.props.model}
          onModelChange={(this.handleModelChange, this.props.onModelChange)}
          tag={this.props.tag}
          config={this.props.config || OverviewConfig}
          name={this.props.name}
        />
      </div>
    );
  }
}
export default FroalasEditor;
