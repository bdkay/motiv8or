import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal(){
    // Add to complete goals on the database
    // Remove this goal from the goals reference
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email, title});
  }
  render(){
    console.log('this.props.goal', this.props.goal);
    const { email, title } = this.props.goal;
    return (
      <div style={{margin: '10px'}}>
        <strong>{title}</strong><br />
        <span style={{marginRight: '5px'}}>submitted by: <em>{email}</em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
        >
          Complete
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(GoalItem);