import React from "react";
function Spinner(props) {
  return (
    <i
      className={`fas fa-circle-notch fa-spin ${props.className}`}
      style={{
        fontSize: `${props.fontSize}`,
        marginLeft: `${props.marginLeft}`,
        marginTop: `${props.marginTop}`,
        position: `${props.position} `,
        marginRight: ` ${props.marginRight}`,
        marginBottom: ` ${props.marginBottom}`,
        color: "#bbbbbb",
        opacity: props.opacity,
        padding: props.padding,
        top: `${props.top}`,
        zIndex: `${props.zIndex || `1`}`
      }}
    ></i>
  );
}

export default Spinner;
