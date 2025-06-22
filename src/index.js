import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";  // ✅ Import App which uses HashRouter
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
