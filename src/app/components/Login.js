import React, { Component } from 'react'
import { base } from '../config/constants'

import classnames from 'classnames'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.isAuthed,
      email: '',
      password: '',
    }
  }


  login(e) {
    e.preventDefault();
    //Get email and pass
    const { email, password } = this.state
    console.log("email: " + email + " pass: " + password);

    //Sign in via Firebase
    base.auth().signInWithEmailAndPassword(email, password)
      .then( () => {
        this.resetForm()
        window.location.reload();
      })
      .catch( e => {
        console.log(e.message)
        this.resetForm()
      });
      // The rest will be handled by the firebase listener in the App.js
    }
    logout() {
      base.auth().signOut();
      window.location.reload();
    }
    resetForm () {
      this.setState({
        email: '',
        password: ''
      })
  }

  render() {
    const { isAuthed } = this.props
    return (
      <div className="home">
        <h1>Home</h1>
        <form onSubmit={this.login.bind(this)}>
          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={e => this.setState({email: e.target.value})}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={e => this.setState({password: e.target.value})}
          />
          <button
            type='submit'
            className={classnames("btn btn-action", {
              hide: isAuthed
            })}
          >
            Log In
          </button>
        </form>
        {/* <button className="btn btn-secondary">Sign Up</button> */}
       <button
         onClick={this.logout.bind(this)}
         className={classnames("btn btn-action btnLogout", {
           hide: !isAuthed
         })}
         >
         Log Out
        </button>
      </div>
    );
  }
}
