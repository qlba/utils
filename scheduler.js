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
			scheduleReview();
		
		return res;
	}

	function review()
	{
		if(res.queue.length < 1)
			return;
			
		if(res.history[0] + period - now() > 0)
		{
			scheduleReview();
			return;
		}
		
		res.history.push(now());
		res.history.shift();
		res.queue.shift()();

		review();
	}

	function scheduleReview()
	{
		setTimeout(review, res.history[0] + period - now());
	}

	function now()
	{
		return (new Date()).valueOf();
	}
}

module.exports = scheduler;

