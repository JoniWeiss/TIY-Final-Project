import React, { Component } from 'react';
import { base } from '../config/constants'
import moment from 'moment'
import { timeNow, formatLongDate } from '../helpers/date-helpers'


export default class Services extends Component {
  constructor(props){
    super(props);
    this.state = {
      services: []
    }
  }
  componentDidMount(){
    this.ref = base.syncState('services', {
      context: this,
      state: 'services',
      asArray: true
    })
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
      console.log("getServices(success!)");
    }).catch(error => {
      //handle error
      console.log("getServices(error)");
    })
  }

  isIncall(obj) {
    if ( obj.locationType === "incall" ) {
      return obj
    }
  }

  isOutcall(obj) {
    if ( obj.locationType === "outcall" ) {
      return obj
    }
  }

  render() {
    return (
      <div className="mainContent">
        <h1>Our Services</h1>
        <h2>Today is:</h2>
        <p className="centeredText">{formatLongDate()}</p><br />
        <hr />
        <h2>Services</h2>
        <div className="flex">

          <div className="flexContent">
            <p><h3>At my location</h3></p>
            <hr />

            <table>
              <tr>
                <th><p>Service:</p></th>
                <th><p>Rate:</p></th>
              </tr>
              {this.state.services.filter(this.isIncall)
              .map((obj, idx) => {
                return (
                  <tr key={idx}>
                    <td><p>{obj.serviceName}</p></td>
                    <td><p>${obj.price}</p></td>
                  </tr>
                )
              })}
            </table>
          </div>

          <div className="flexContent">
            <p><h3>At your location</h3></p>
            <hr />

            <table>
              <tr>
                <th><p>Service:</p></th>
                <th><p>Rate:</p></th>
              </tr>
              {this.state.services.filter(this.isOutcall)
              .map((obj, idx) => {
                return (
                  <tr key={idx}>
                    <td><p>{obj.serviceName}</p></td>
                    <td><p>${obj.price}</p></td>
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
      </div>
    )
  }
}
