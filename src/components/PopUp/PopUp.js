import React from "react";
import Modal from "react-modal";
import "./PopUp.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

function PopUp(props) {
  var subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const abc = props.children;
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={props.closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-heading">
          <h2
            style={{ color: "black !important" }}
            ref={_subtitle => (subtitle = _subtitle)}
          >
            {props.heading}
          </h2>
          <div onClick={props.closeModal}>X</div>
        </div>
        <div>{abc}</div>
      </Modal>
    </div>
  );
}
export default PopUp;
