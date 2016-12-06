import React from 'react';
import { base } from '../config/constants'
import { timeNow } from '../helpers/date-helpers'

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

  //TODO: This needs to work for objects - not arrays
  handleAddItem(newItem){
    this.setState({
      services: this.state.services.concat([newItem])
    });
  }

  //TODO: This needs to work for objects - not arrays
  handleRemoveItem(index){
    var newList = this.state.services;
    newList.splice(index, 1);
    this.setState({
      services: newList
    })
  }

  getServices(){
  base.fetch('services', {
    context: this,
    asArray: true
  }).then(data => {
    console.log("getServices(success!): ", data);
  }).catch(error => {
    //handle error
    console.log("getServices(error): ", error);
  })
}

  render() {
    return (
      <div>
        <h2>Services</h2>
        <h3>At my location</h3>
        <p></p>
          <ul>
            {this.state.services.filter((dataObj, idx) => {
              return dataObj.locationType === 'incall'
            })
            .map((dataObj, idx) => {
              return (
                <li key={idx}>
                  <p>{dataObj.serviceName}  {dataObj.duration}</p>
                </li>
              )
            })}
          </ul>

        <h3>At your location</h3>
          <ul>
            {this.state.services.filter((dataObj, idx) => {
              return dataObj.locationType === 'outcall'
            })
            .map((dataObj, idx) => {
              return (
                <li key={idx}>
                  <p>{dataObj.serviceName}  {dataObj.duration}</p>
                </li>
              )
            })}
          </ul>
        <h3>Surcharges</h3>
        <p></p>
      </div>
    )
  }
}
