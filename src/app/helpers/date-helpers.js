const moment = require('moment');

export const TODAY = timeNow("YYYYMMDD")
export const TOMORROW = moment().add(1, 'days').format("YYYYMMDD")

export function timeNow (formatStr) {
  var now = moment().format(formatStr)
  console.log("Now is: ", now)
  return now
}

export function getDay (formatStr) {
  var now = moment().format(formatStr)
  console.log("Now is: ", now)
  return now
}

export function formatDayOfWeek(date) {
  return moment(date).format('dddd')
}

export function formatLongDate(date) {
  return moment(date).format('MMMM Do, Y')
}

export function formatLongDateTime(date) {
  return moment(date).format('MMMM Do, Y h:mm A')
}

export function formatShortDate(date) {
  return moment(date).format('MM/DD/YY')
}

export function formatShortDateTime(date) {
  return moment(date).format('MM/DD/YY h:mm A')
}

export function formatTime(date) {
  return moment(date).format('h:mm A')
}
