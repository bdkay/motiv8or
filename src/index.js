import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/App" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>, document.getElementById('root')
);