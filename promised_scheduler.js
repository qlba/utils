const scheduler = require("./scheduler");
require("./promiser")();

function promisedScheduler(period, times)
{
	let sch = scheduler(period, times);
	return enqueue;

	function enqueue()
	{
		return sch.promise();
	}
}

module.exports = promisedScheduler;

