import React from 'react';

import Sidebar from './Sidebar';
import Content from './Content';

export default class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <Sidebar />
        <Content />
      </div>
    );
  }
}
