import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import connect from 'react-redux';

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
    this.props.history.push('/signin');
  }
  render(){
    return (
      <div>
        App
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
          Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log('state', state);
  return {
  
  }
}

export default connect(mapStateToProps, null)(App);