import React, { Fragment } from "react";
import WelcomeMessage from "../../components/HomePage/WelcomeMessage/WelcomeMessage";
import TopBar from "../../components/HomePage/TopBar/TopBar";
function HomePage() {
  return (
    <Fragment>
      <TopBar></TopBar>
      <WelcomeMessage></WelcomeMessage>
    </Fragment>
  );
}
export default HomePage;
