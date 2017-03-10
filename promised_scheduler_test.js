const promisedScheduler = require("./promised_scheduler.js");

let sch = promisedScheduler (1000, 1);

sch().then(console.log.bind(null, 3));
sch().then(console.log.bind(null, 2));
sch().then(console.log.bind(null, 1));
sch().then(console.log.bind(null, "Operation complete"));

