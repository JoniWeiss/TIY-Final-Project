import React, { Component } from 'react'
import { login } from '../helpers/auth'

export default class Login extends Component {
  handleSubmit(e) {
    console.log(this.email.value);
    e.preventDefault()
    login(this.email.value, this.pw.value)
  }
  render () {
    return (
      <div>
        <h1> Login </h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
