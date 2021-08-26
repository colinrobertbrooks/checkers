import "bootstrap/dist/css/bootstrap.min.css";
import "focus-visible";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
