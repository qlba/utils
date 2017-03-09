function now()
{
	return (new Date()).valueOf();
}

function scheduler(period, times)
{
	let res = enqueue;

	res.history = (new Array(times)).fill(-Infinity);
	res.queue = [];

	return res;


	function enqueue(callback)
	{
		res.queue.push(callback);

		if(res.queue.length < 2)
			setTimeout(review, res.history[0] + period - now());
		
		return res;
	}

	function review()
	{
		// console.log("DEBUG: Review called");

		if(res.history[0] + period - now() > 0)
		{
			setTimeout(review, res.history[0] + period - now());
			return;
		}
	
		if(res.queue.length > 0)
		{
			res.history.push(now());
			res.history.shift();
			res.queue.shift()();

			review();
		}
	}
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
//sch(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say())(say());

delayedSay(sch, 0);
delayedSay(sch, 0);
delayedSay(sch, 0.1);
delayedSay(sch, 0.2);
delayedSay(sch, 0.5);
delayedSay(sch, 3);
delayedSay(sch, 5);
delayedSay(sch, 5.1);
delayedSay(sch, 7);
delayedSay(sch, 7);
delayedSay(sch, 7);
delayedSay(sch, 7);

