import React, { Component } from 'react'
import { auth } from '../helpers/auth'

export default class Register extends Component {
  handleSubmit(e) {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
  }
  render () {
    return (
      <div  className="mainContent">
        <h1>Register</h1>
        <br /><br />

        <div className="flex">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
            </div><br />
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
            </div><br />
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    )
  }
}
