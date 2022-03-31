import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { hot } from "react-hot-loader/root";
import "./assets/scss/base.scss";

const render = (Component) =>
  ReactDOM.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
    document.getElementById("root")
  );

render(hot(App));
