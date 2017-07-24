const chalk = require('chalk');
const moment = require('moment');

function fred() {
  if(moment().isDST()){
    return "is";
  }
  else {
    return "is not";
  }
}
function greg() {
  if(moment().isLeapYear()){
    return "is";
  }
  else {
    return "is not";
  }
}

// moment().dayOfYear();
console.log("It is " + chalk.blue(moment().format("LLLL")));
console.log("It is the " + chalk.magenta(moment().format("DDDo")) + " day of the year");
console.log("It is the " + chalk.cyan((moment().format("k")*3600)+(moment().format("m")*60)+(moment().format("s"))) + " second of the day");
console.log("it " + chalk.green(fred()) + " Daylights savings time");
console.log("it " + chalk.red(greg()) + " a leap year");
