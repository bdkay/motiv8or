import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { withRouter } from 'react-router-dom';

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
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then(this.props.history.push('/app'))
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
        <div><a href={'/signup'} style={{margin: '5%', textDecoration: 'underline'}}>Sign Up Instead</a></div>
      </div>
    )
  }
}

export default withRouter(SignIn);