console.log("hello world");

function printMonth(currentMonth) {
  var daysInMonth = currentMonth.daysInMonth();
  console.log(daysInMonth);
  var template = $("#template").html();
  var compiled = Handlebars.compile(template);
  var target = $(".giorni-mese");

  for (var i = 1; i <= daysInMonth; i++) {
    var daysHtml = compiled({
      "value": i
    });
    target.append(daysHtml);
  }
}




function init() {

var currentMonth = moment("2018-01-01");
console.log(currentMonth);
printMonth(currentMonth);
}

$(document).ready(init);
