import React from 'react';
import { base } from '../config/constants'
import moment from 'moment'
import { timeNow, formatLongDate } from '../helpers/date-helpers'


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
      <div>
        <h2>Today is:</h2>
        <p>{formatLongDate()}</p>

        <h2>Services</h2>
        <h3>At my location</h3>
        <ul>
          {this.state.services.filter(this.isIncall)
          .map((obj, idx) => {
            return (
              <li key={idx}>
                <p>{obj.serviceName}  ${obj.price}</p>
              </li>
            )
          })}
        </ul>

        <h3>At your location</h3>
        <ul>
          {this.state.services.filter(this.isOutcall)
          .map((obj, idx) => {
            return (
              <li key={idx}>
                <p>{obj.serviceName}  ${obj.price}</p>
              </li>
            )
          })}
        </ul>

      </div>
    )
  }
}
