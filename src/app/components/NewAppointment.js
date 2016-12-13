
import React, { Component } from 'react';
import { base } from '../config/constants'
import moment from 'moment'
import Moment from 'moment'
import sass from 'react-widgets/lib/scss/react-widgets.scss'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
momentLocalizer(Moment)
import numberLocalizer from 'react-widgets/lib/localizers/simple-number'
numberLocalizer()

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

  // {  Firebase "schedule" looks like:
  //     "date": "2016-12-12T11:00:00-07:00",
  //     "client": "Brenda",
  //     "phone" : "801-555-1212",
  //     "therapist": "Joni",
  //     "location": "LotusMind Studio",
  //     "isOutcall": false,
  //     "duration": 90,
  //     "note": "Some note",
  //     "bookedBy": "Joni"
  // }
let newSchedule = {
  date: "",
  client: "",
  phone: "",
  therapist: "Joni",
  location: "LotusMind Studio",
  isOutcall: false,
  duration: 90,
  note: "",
  bookedBy: "Joni"
}

export default class NewAppointment extends Component {
  constructor(props){
    super(props);
    this.state = {
      newSchedule: {}
    }
  }

handleDateChange (e) {
  // console.log("handleDateChange: ", e);
  let newDate = moment(e, "MM/DD/YY hh:mm A").format("YYYY-MM-DDTHH:mm:ssZ")
  newSchedule.date = newDate
  // console.log(newSchedule);
}

handleDurationChange (e) {
  newSchedule.duration = e.target.value
}

handleNameChange (e) {
  newSchedule.client =  e.target.value
}

handlePhoneChange (e) {
  newSchedule.phone =  e.target.value
}

handleNoteChange (e) {
  newSchedule.note = e.target.value
}

handleAdd () {
  // console.log(newSchedule);
  this.setState({
    newSchedule: newSchedule
  })
  this.props.addAppt(newSchedule)
  document.getElementById("newAppt").reset();
}

  render() {
    return (
      <div>
        <h2>Add new appointment</h2>
        <br />
        <form id="newAppt">
          <label>Appointment Date:<DateTimePicker tabIndex={1} defaultValue={new Date} step={15} format='MM/DD/YY hh:mm A' onChange={this.handleDateChange.bind(this)} /></label><br />

          <label>Select duration (default: 90)<select value={90} name="duration" tabIndex={2} onChange={this.handleDurationChange.bind(this)}>
            <option value="60">1 Hour</option>
            <option value="90">90 Minutes</option>
            <option value="120">2 Hours</option>
          </select></label><br /><br />

          <label>Client name:<input name="name" type="text" placeholder="Client Name"tabIndex={3} onChange={this.handleNameChange.bind(this)} /></label><br /><br />

          <label>Client phone:<input name="phone" type="text" placeholder="801-000-0000" tabIndex={4} onChange={this.handlePhoneChange.bind(this)} /></label><br /><br />

          <label>Any notes (optional):<textArea name="note" type="textArea" placeholder="Notes..." tabIndex={5} onChange={this.handleNoteChange.bind(this)} /></label>
          <br /><br />

          <button type="button" tabIndex={6} onClick={this.handleAdd.bind(this)}>Add</button>
        </form>

      </div>
    )
  }
}
