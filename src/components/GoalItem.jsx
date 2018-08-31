import React, { Component } from 'react';

class GoalItem extends Component {
  render(){
    console.log('this.props.goal', this.props.goal);
    return (
      <div>Goal Item</div>
    )
  }
}

export default GoalItem;