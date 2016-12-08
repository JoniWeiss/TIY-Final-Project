
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

export default class NewAppointment extends Component {
  constructor(props){
    super(props);
    this.state = {
      services: []
    }
  }

  //TODO: This needs to work for objects - not arrays
  handleAddItem(newItem){
    //Push new appointment to DB
  }

  render() {
    return (
      <div>
        <h2>Add new appointment</h2>
        <form>
          <input type="date" placeholder="MM/DD/YY" tabIndex={1} />
          <input type="time" placeholder="hh:mm AM/PM" tabIndex={2} />
          <input type="text" placeholder="First Name"tabIndex={3} />
          <input type="text" placeholder="Last Name" tabIndex={4} />
          <input type="text" placeholder="801-000-0000" tabIndex={5} />
          <textArea type="textArea" placeholder="Notes..." tabIndex={6} />

          <button type="submit" tabIndex={7}>Add</button>
        </form>

      </div>
    )
  }
}
