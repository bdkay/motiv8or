import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constants';

//Action creators

export function logUser(email){
  const action = {
    type: SIGNED_IN,
    email: email
  };
  return action;
}

export function setGoals(goals){
  const action = {
    type: SET_GOALS,
    goals: goals
  };
  return action;
}

export function setCompleted(completeGoals){
  const action = {
    type: SET_COMPLETED,
    completeGoals: completeGoals
  }
  return action;
}