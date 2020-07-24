console.log("hello world");

function printMonth(currentMonth) {
  var daysInMonth = currentMonth.daysInMonth();
  console.log(daysInMonth);
}




function init() {

var currentMonth = moment("2018-01-01");
console.log(currentMonth);
printMonth(currentMonth);
}

$(document).ready(init);
