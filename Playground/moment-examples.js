var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am --> 0
// January 1st 1970 @ 12:01am --> 60

var now = moment();
console.log('Current timestamp ', now.unix());
