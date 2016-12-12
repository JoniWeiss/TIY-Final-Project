
import React, { Component } from 'react';
import { base } from '../config/constants'
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

export default class newAppt extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

handleDateChange (e) {
   this.setState({
     apptDate: e.target.value
   });
}

handleTimeChange (e) {
   this.setState({
     apptTime: e.target.value
   });
}

handleDurationChange (e) {
   this.setState({
     apptDuration: e.target.value
   });
}

handleNameChange (e) {
   this.setState({
     apptName: e.target.value
   });
}

handlePhoneChange (e) {
   this.setState({
     apptPhone: e.target.value
   });
}

handleNoteChange (e) {
   this.setState({
     apptNote: e.target.value
   });
}

handleAdd () {
  console.log("Date: " + this.state.apptDate);
  console.log("Time: " + this.state.apptTime);
  console.log("Duration: " + this.state.apptDuration);
  console.log("Name: " + this.state.apptName);
  console.log("Phone: " + this.state.apptPhone);
  console.log("Note: " + this.state.apptNote);
      // this.props.addAppt(event)
}

  render() {
    return (
      <div>
        <h2>Add new appointment</h2>
        <br />
        <form >

          <input name="date" type="date" placeholder="MM/DD/YY" tabIndex={1} onChange={this.handleDateChange.bind(this)} /><br /><br />

          <input name="time" type="time" placeholder="hh:mm AM/PM" tabIndex={2} onChange={this.handleTimeChange.bind(this)} /><br /><br />

          <input name="duration" type="time" placeholder="Duration (60, 90, 120)" tabIndex={3} onChange={this.handleDurationChange.bind(this)} /><br /><br />

          <input name="name" type="text" placeholder="Client Name"tabIndex={4} onChange={this.handleNameChange.bind(this)} /><br /><br />

          <input name="phone" type="text" placeholder="801-000-0000" tabIndex={5} onChange={this.handlePhoneChange.bind(this)} /><br /><br />

          <textArea name="note" type="textArea" placeholder="Notes..." tabIndex={6} onChange={this.handleNoteChange.bind(this)} />
          <br /><br />

          <button type="button" tabIndex={7} onClick={this.handleAdd}>Add</button>
        </form>

      </div>
    )
  }
}
