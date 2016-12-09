import React, { Component } from 'react'
import { base } from '../config/constants'

import classnames from 'classnames'

export default class Logout extends Component {
  logout() {
    base.auth().signOut();
    window.location.reload();
  }
  render() {
    return (
      <div className="home">
        <h1>Logout</h1>
        <button
          onClick={this.logout.bind(this)}>
         Log Out
        </button>
      </div>
    );
  }
}
