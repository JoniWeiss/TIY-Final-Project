import React, { Component } from 'react'
import { Redirect } from 'react-router'
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

    //Sign in via Firebase
    base.auth().signInWithEmailAndPassword(email, password)
      .then( () => {
        this.resetForm()
        window.location.back()
      })
      .catch( e => {
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
      <div className="mainContent">
        <h1>Please Log In</h1>
        <br /><br />

        <div className="flex">
          <form onSubmit={this.login.bind(this)}>
            <input
              id="email"
              type="email"
              placeholder="Email"
              onChange={e => this.setState({email: e.target.value})}
            /><br /><br />
            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={e => this.setState({password: e.target.value})}
            /><br /><br />
            <button
              type='submit'
              className={classnames("btn btn-action", {
                hide: isAuthed
              })}
            >
              Log In
            </button><br /><br />
            <button
              onClick={this.logout.bind(this)}
              className={classnames("btn btn-action btnLogout", {
               hide: !isAuthed
              })}
              >
              Log Out
            </button>
          </form>
        </div>
      </div>
    );
  }
}
