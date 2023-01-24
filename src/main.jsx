import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ButtonProvider } from "./provider/provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ButtonProvider>
      <App />
    </ButtonProvider>
  </React.StrictMode>
);
