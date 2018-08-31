import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import { connect } from 'react-redux';

class GoalList extends Component {
  componentDidMount() {
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        // let goalObject = goal.val();
        const { email, title } = goal.val();
        goals.push({ email, title });
      });
      console.log('goals', goals);
    })
  }
  
  render(){
    console.log('this.props.goals', this.props.goals);
    return (
      <div>Goal List</div>
    )
  }
}

function mapStateToProps(state) {
  const { goals } = state;
  return {
    goals
  }
}

export default connect(mapStateToProps, { setGoals })(GoalList);