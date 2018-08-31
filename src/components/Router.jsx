import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Route, Redirect} from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { createStore } from 'redux';
import reducer from '../reducers';
import { logUser } from '../actions';

const store = createStore(reducer);

class Routes extends Component {
  componentWillMount(){
    firebaseApp.auth().onAuthStateChanged(user => {
      if(user) {
        console.log('user has signed in or up', user);
        const { email } = user;
        store.dispatch(logUser(email));
        return <Redirect to='/App'/>;
      } else {
        console.log('user signed out or still needs to sign in', user);
        return <Redirect to='/signin'/>;
      }
    })
  }
  render() {
    return (
      <div>
        <Route path="/App" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>)
  }
}

export default Routes;