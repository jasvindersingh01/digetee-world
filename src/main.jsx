import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";
import "./index.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* Lightbox CSS */
import "yet-another-react-lightbox/styles.css";
import SmoothScroll from "./components/common/SmoothScroll.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);