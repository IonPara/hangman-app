// Import react components
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Import bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";

// Select the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
// Add the elements to the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
