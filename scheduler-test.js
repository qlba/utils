const scheduler = require("./scheduler.js");


function now()
{
	return (new Date()).valueOf();
}

const start = now();
let ctr = 0;

function say(index, time)
{
	console.log("" + index + ": " + time + " @ " + ((now() - start) / 1000));
}

function delayedSay(sched, time)
{
	setTimeout(sched.bind(null, say.bind(null, ctr++, time)), 1000 * time);
}


let sch = scheduler(1000, 3);
let sci = scheduler(1000, 3);
//sch(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say());

//delayedSay(sch, 0);
//delayedSay(sch, 0);
//delayedSay(sch, 0.1);
//delayedSay(sch, 0.2);
//delayedSay(sch, 0.5);
//delayedSay(sch, 3);
//delayedSay(sch, 5);
//delayedSay(sch, 5.1);
//delayedSay(sch, 7);
//delayedSay(sch, 7);
//delayedSay(sch, 7);
//delayedSay(sch, 7);

//delayedSay(sci, 0);
//delayedSay(sci, 0);
//delayedSay(sci, 0.1);
//delayedSay(sci, 0.2);
//delayedSay(sci, 0.5);
//delayedSay(sci, 3);
//delayedSay(sci, 5);
//delayedSay(sci, 5.1);
//delayedSay(sci, 7);
//delayedSay(sci, 7);
//delayedSay(sci, 7);
//delayedSay(sci, 7);

delayedSay(sch, 0);
delayedSay(sch, 0);
delayedSay(sch, 0);
delayedSay(sch, 0);
delayedSay(sch, 0);

