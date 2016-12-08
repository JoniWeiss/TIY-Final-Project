import React from 'react';
import Login from '../Login'

export default class Sidebar extends React.Component {
  render () {
    return (
      <div className="sidebar">
        <h2>Sidebar</h2>
        <Login />
      </div>
    )
  }
}
