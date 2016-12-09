import React, { Component } from 'react'
import { base } from '../config/constants'
import Main from './Main'
import Login from './Login'

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

  render() {
    const { isAuthed } = this.props
    return (
      <div>
        <Login />
        <Main
          isAuthed={this.props.isAuthed} />
      </div>
    );
  }
}
