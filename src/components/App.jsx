import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import '../css/style.css';

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
    this.props.history.replace('/signin');
  }
  render(){
    return (
      <div className="app">
        <h3>Goals</h3>
        <AddGoal />
        <GoalList />
        <br /><br /><br /><br />
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