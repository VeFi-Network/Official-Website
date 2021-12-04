import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './utility/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>,
  document.getElementById('root')
);
