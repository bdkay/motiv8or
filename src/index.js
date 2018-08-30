import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './helpers/history';
import Routes from './components/Router';

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>, document.getElementById('root')
);