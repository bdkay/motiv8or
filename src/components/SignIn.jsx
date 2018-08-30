import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
  
  signIn(){
    console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
        this.setState({error});
      })
  }
  
  render(){
    return (
      <div className="form-inline col-lg-4" style={{margin: '5%'}}>
        <h2 style={{margin: '5%'}}>Sign In</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="email"
            onChange={(event) => this.setState({email: event.target.value})}
            style={{margin: '5%'}}
          />
          <input
            className="form-control"
            type="password"
            placeholder="password"
            onChange={(event) => this.setState({password: event.target.value})}
            style={{margin: '5%'}}
          />
          <br />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signIn()}
            style={{margin: '5%'}}
          >
            Sign In
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <br /><br />
        <div><Link style={{margin: '5%', textDecoration: 'underline'}} to={'/signup'}>Sign Up</Link></div>
      </div>
    )
  }
}

export default SignIn;