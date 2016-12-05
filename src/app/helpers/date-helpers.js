const moment = require('moment');

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
