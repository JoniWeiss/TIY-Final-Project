import React from 'react';
import { base } from '../config/constants'
const moment = require('moment')

export default class Services extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      services: [],
      loading: true
    }
  }
  componentDidMount(){
    this.ref = base.syncState('services', {
      context: this,
      state: 'services',
      asArray: true,
      then(){
        this.setState({loading: false})
      }
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  render() {
    return (
      <div>
        <h2>Services</h2>
      </div>
    )
  }
}
