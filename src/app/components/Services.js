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
      },
      onFailure() {
        console.log("Error: ", error)
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
  })
}

  render() {
    {/*let listServices = this.state.services.map((item, idx) => {
      return (
        <li key={idx} className="list-item">
          <button className="removeItem"
            onClick={this.removeItem.bind(idx)}
          />
          <span>
            {item.service-name}
          </span>
        </li>
      )
    })*/}
    return (
      <div>
        <h2>Services</h2>
        <div>
          <ul>
            {/*this.state.services*/}
          </ul>
        </div>

        <h3>At my location</h3>
        <p></p>
        <h3>At your location</h3>
        <p></p>
        <h3>Surcharges</h3>
        <p></p>
      </div>
    )
  }
}
