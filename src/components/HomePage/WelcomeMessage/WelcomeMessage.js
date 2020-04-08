import React from "react";
import "./WelcomeMessage.css";
function WelcomeMessage() {
  return (
    <div className="welcome-message-box">
      <div className="welcome-message-first-half welcome-message-content">
        <h1>Welcome to The Foo Support Portal</h1>
        <h4>
          A journey without you is impossible, We are here to help
          you......always.
        </h4>
        <h4>Please check the link for Support</h4>
      </div>
      <div className="welcome-message-second-half ">
        <h1>Welcome to Foo</h1>
        <input type="text"></input>
      </div>
    </div>
  );
}

export default WelcomeMessage;
