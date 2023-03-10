import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./styles/header.css";
import "./styles/nav.css";
import "./styles/icon-social-network.css";
import "./styles/services-testimonial.css";
import "./styles/mision-vision.css";
import "./index.css";


import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
