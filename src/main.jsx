import React from "react";
import ReactDOM from "react-dom/client";
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
        <SmoothScroll>
          <App />
        </SmoothScroll>
    </HelmetProvider>
  </React.StrictMode>
);