import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

function getRootElement(): Element {
  const rootElement = document.getElementById("root");
  if (rootElement === undefined || rootElement === null) {
    throw new Error("root element is undefined");
  }
  return rootElement;
}

ReactDOM.createRoot(getRootElement()).render(<App />);
