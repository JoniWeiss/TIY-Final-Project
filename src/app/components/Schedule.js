
import React, { Component } from 'react';
import { base } from '../config/constants'
import moment from 'moment'
import {
  TODAY,
  TOMORROW,
  timeNow,
  formatDayOfWeek,
  formatLongDate,
  formatShortDate,
  formatTime } from '../helpers/date-helpers'

export default class Schedule extends Component {
  constructor(props){
    super(props);
    this.state = {
      schedule: [],
      loading: true
    }
  }
  componentDidMount(){
    this.ref = base.syncState('schedule', {
      context: this,
      state: 'schedule',
      asArray: true,
      queries: {
        orderByChild: 'date'
      },
      startAt: moment().format(),
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
      schedule: this.state.schedule.concat([newItem])
    });
  }

  //TODO: This needs to work for objects - not arrays
  handleRemoveItem(index){
    var newList = this.state.schedule;
    newList.splice(index, 1);
    this.setState({
      schedule: newList
    })
  }

  getSchedule(){
    base.fetch('schedule', {
      context: this,
      asArray: true
    }).then(data => {
      console.log("getSchedule(success!): ", data);
    }).catch(error => {
      //handle error
      console.log("getSchedule(error): ", error);
    })
  }

  getNextAppointment() {
    let timeDiff = 0;
    this.state.schedule.filter((c,i,a) => {
      if ( moment(c.date).format("YYYYMMDD") === TODAY ) {

      }
    })
  }


  displayNext(obj) {
    if (
      moment(obj.date).format("YYYYMMDD") === TODAY
    ) {
      // find next appt from now
      return obj
    }
  }

  displayToday(obj) {
    if ( moment(obj.date).format("YYYYMMDD") === TODAY ) {
      return obj
    }
  }

  displayTomorrow(obj) {
    if ( moment(obj.date).format("YYYYMMDD") === TOMORROW ) {
      return obj
    }
  }

  displaySchedule(obj, idx) {
    console.log("displaySchedule: ", obj)
    return (
      <li key={idx}>
        <p>{obj.date}  {obj.client} {obj.duration} {obj.location}</p>
      </li>
    )
  }

  render() {
    return (
      <div>
        <h2>Today is:</h2>
        <p>{formatLongDate()}</p>

        <h2>Schedule</h2>
        <h3>Next Appointment:</h3>

        <h3>Today</h3>
        <ul>
          {this.state.schedule
            .filter(this.displayToday)
            .map((obj, idx) => this.displaySchedule(obj, idx))}
        </ul>

        <h3>Tomorrow</h3>
        <ul>
          {this.state.schedule
            .filter(this.displayTomorrow)
            .map((obj, idx) => this.displaySchedule(obj, idx))}
        </ul>

        <h3>All</h3>
        <ul>
          {this.state.schedule.map((obj, idx) => this.displaySchedule(obj, idx))}
        </ul>
      </div>
    )
  }
}
