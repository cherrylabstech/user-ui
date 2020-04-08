import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import "./css/responsive.css";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
