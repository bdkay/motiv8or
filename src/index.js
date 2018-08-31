import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Redirect } from 'react-router-dom';
import { createStore } from 'redux';
import { firebaseApp } from './firebase';
import reducer_user from './reducers/reducer-user';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { logUser } from './actions';

const browserHistory = createBrowserHistory();
const store = createStore(reducer_user);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user has signed in or up', user);
    const { email } = user;
    store.dispatch(logUser(email));
    return <Redirect to='/App'/>;
  } else {
    console.log('user signed out or still needs to sign in', user);
    return <Redirect to='/signin'/>;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <div>
        <Route path="/" component={App} />
        <Route path="/app" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  </Provider>, document.getElementById('root')
);