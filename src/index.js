import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SEO from "./seo";
import App from "./App";

const MainComponent = () => (
  <div>
    <SEO
      title="The VeFi Foundation"
      meta={[
        {
          name: "description",
          content:
            "The VEFI Foundation is an independent standard body that controls and oversees the advancement of the VEFI Network and ecosystem. We are the owner of the VEFI brand. The foundation works to drive the adoption and partnerships, grow the VEFI community."
        }
      ]}
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

ReactDOM.render(<MainComponent />, document.getElementById("root"));
