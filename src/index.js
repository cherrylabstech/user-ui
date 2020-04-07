import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import "./css/responsive.css";

import Routes from "./routes";
import { store } from "./Store/Store";

ReactDOM.render(
  <Provider store={store}>
    <Routes></Routes>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
