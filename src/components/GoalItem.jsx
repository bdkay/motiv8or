import React, { Component } from 'react';

class GoalItem extends Component {
  render(){
    console.log('this.props.goal', this.props.goal);
    const { email, title } = this.props.goal;
    return (
      <div style={{margin: '10px'}}>
        <strong>{title}</strong><br />
        <span>submitted by: <em>{email}</em></span>
      </div>
    )
  }
}

export default GoalItem;