import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./utility/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./utility/ScrollToTop";

ReactDOM.render(
  <Suspense fallback="<h1>Loading...</h1>">
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <App />
    </Router>
  </Suspense>,
  document.getElementById("root")
);
