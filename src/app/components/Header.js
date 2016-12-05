import React from 'react';

import Nav from './Nav.js';

export default class Header extends React.Component {
  render () {
    return(
      <header>
        <Nav />
        <h1 className="header">My Awesome Therapist</h1>
      </header>
    );
  }
}
