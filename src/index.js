import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import App from "./App";

const MainComponent = () => (
  <div>
    <Helmet>
      <meta
        name="description"
        content="The VEFI Foundation is an independent standard body that controls and oversees the advancement of the VEFI Network and ecosystem. We are the owner of the VEFI brand. The foundation works to drive the adoption and partnerships, grow the VEFI community."
      />
      <title>The VEFI Foundation</title>
    </Helmet>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

ReactDOM.render(<MainComponent />, document.getElementById("root"));
