import React from "react";
import ReactDOM from "react-dom";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import Web3 from "web3";
import App from "./App";
import { Provider } from "react-redux";
import GlobalStyle from "./utility/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./utility/ScrollToTop";
import store from "./redux/store";

const getLibrary = provider => new Web3(provider);
const Web3ReactProvider2 = createWeb3ReactRoot("networkProvider");

ReactDOM.render(
  <Provider store={store}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactProvider2 getLibrary={getLibrary}>
        <Router>
          <GlobalStyle />
          <ScrollToTop />
          <App />
        </Router>
      </Web3ReactProvider2>
    </Web3ReactProvider>
  </Provider>,
  document.getElementById("root")
);
