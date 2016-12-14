
import React, { Component } from 'react'
import { base } from '../config/constants'
import Login from './Login'
import NewAppointment from './NewAppointment'
import moment from 'moment'
import {
  TODAY,
  TOMORROW,
  timeNow,
  formatDayOfWeek,
  formatLongDate,
  formatLongDateTime,
  formatShortDate,
  formatShortDateTime,
  formatTime } from '../helpers/date-helpers'

import sass from '../styles/_Schedule.sass'

export default class Schedule extends Component {
  constructor(props){
    super(props);
    this.state = {
      schedule: []
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
      startAt: moment().format()
    });
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  //TODO: This needs to work for objects - not arrays
  handleAddAppt(apptObj){
    this.setState({
      schedule: this.state.schedule.concat(apptObj)
    });
  }

  //TODO: This needs to work for objects - not arrays
  handleRemoveItem(apptObj){
    // var newList = this.state.schedule;
    // newList.splice(apptObj, 1);
    // this.setState({
    //   schedule: newList
    // })
  }

  //TODO: Add getNextAppointment functionality
  getNextAppointment() {
    let timeDiff = 0;
    this.state.schedule.filter((c,i,a) => {
      if ( moment(c.date).format("YYYYMMDD") === TODAY ) {
      }
    })
  }

  displayToday(obj) {
    if ( moment(obj.date).format("YYYYMMDD") === TODAY ) {
      return (
        <li>
          <p>{obj.client} {obj.phone}<br />
              {formatLongDateTime(obj.date)}<br />
              {obj.duration} Minutes<br />
              {obj.location}<br />
              {obj.note}<br />
              <button>Edit</button>
              <button>Delete</button><br /><br /></p>
        </li>
      )
    }
  }

  displayTomorrow(obj) {
    if ( moment(obj.date).format("YYYYMMDD") === TOMORROW ) {
      return (
        <li>
          <p>{obj.client} {obj.phone}<br />
              {formatLongDateTime(obj.date)}<br />
              {obj.duration} Minutes<br /> {obj.location}<br />
              {obj.note}<br />
              <button>Edit</button>
              <button>Delete</button><br /><br /></p>
        </li>
      )
    }
  }

  displayFuture(obj) {
    if ( moment(obj.date).format("YYYYMMDD") > TOMORROW ) {
      return (
        <li>
          <p>{obj.client} {obj.phone}<br />
              {formatLongDateTime(obj.date)}<br />
              {obj.duration} Minutes<br /> {obj.location}<br />
              {obj.note}<br />
              <button>Edit</button>
              <button>Delete</button><br /><br /></p>
        </li>
      )
    }
  }

  displaySchedule(obj, idx) {
    return (
      <li key={idx}>
        <p>{obj.client} {obj.phone}<br />
            {formatLongDateTime(obj.date)}<br />
            {obj.duration} Minutes<br />
            {obj.location}<br />
            {obj.note}<br />
            <button>Edit</button>
            <button>Delete</button><br /><br /></p>
      </li>
    )
  }

  render() {
    return (
      <div className="mainContent">
        <h1>Therapists' Awesome Schedule</h1>
        <h2>Today is:</h2>
        <p className="centeredText">{formatLongDate()}</p><br />
        <hr />
        <div className="flex">
          <div className="flexContent">
            <h2>Schedule</h2>

            <h3>Today</h3>
            <hr />
            <ul>
              {this.state.schedule
                .filter(this.displayToday)
                .map((obj, idx) => this.displaySchedule(obj, idx))}
            </ul>
            <br />

            <h3>Tomorrow</h3>
            <hr />
            <ul>
              {this.state.schedule
                .filter(this.displayTomorrow)
                .map((obj, idx) => this.displaySchedule(obj, idx))}
            </ul>
            <br />

            <h3>Future</h3>
            <hr />
            <ul>
              {this.state.schedule
                .filter(this.displayFuture)
                .map((obj, idx) => this.displaySchedule(obj, idx))}
            </ul>
            <br />
            <hr />
          </div>
          <div className="flexContent">
            <NewAppointment
              schedule={this.state.schedule}
              addAppt={this.handleAddAppt.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}
