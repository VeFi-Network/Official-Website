import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './utility/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './utility/ScrollToTop';

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById('root')
);
