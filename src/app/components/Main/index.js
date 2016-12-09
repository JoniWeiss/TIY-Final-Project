import React from 'react';
import Content from './Content'
import Sidebar from './Sidebar'

export default class Main extends React.Component {
  render() {
    return (
      <div className="content">
        <Sidebar />
        <Content />
      </div>
    );
  }
}
