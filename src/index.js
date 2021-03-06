import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import "./css/responsive.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/routes";
import { store } from "./Store/Store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
