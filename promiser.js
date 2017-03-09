function promised(operation)
{
	return new Promise(function(resolve, reject)
	{
		operation(function(error, result)
		{
			if(error)
				return reject(error);

			resolve(result);
		});
	});
}

Function.prototype.promisedThis = function()
{
	let args = Array.prototype.slice.call(arguments);

	return promised(this.bind.apply(this, args));
};

Function.prototype.promised = function()
{
	let args = Array.prototype.slice.call(arguments);

	return this.promisedThis.apply(this, [null].concat(args));
};


function activate(fail, callback)
{
	if(fail)
		callback(new Error("Activate failed as requested"));

	callback(null, "G: " + this.entity);
}

function schedule(delay, failNow, fail, callback)
{
	if(failNow)
		callback(new Error("Schedule failed as requested"));

	setTimeout(this.activate.bind(this, fail, callback), delay);
}

function G(entity)
{
	this.schedule = schedule;
	this.activate = activate;
	this.entity = entity;
}

let myG = new G("myG");

Promise.prototype.hang = function()
{
	this
		.then((result) => console.log("Promise resolved: " + result))
		.catch((error) => console.log("Promise rejected: " + error.message));
};

myG.schedule.promisedThis(myG, 1500, false, false).hang();
myG.schedule.promisedThis(myG, 1500, false, true).hang();
myG.schedule.promisedThis(myG, 1500, true, false).hang();
myG.schedule.promisedThis(myG, 1500, true, true).hang();


function autoActivate(msg, fail, callback)
{
	if(fail)
		callback(new Error("AutoActivate failed as requested"));

	callback(null, "G: " + msg);
}

function autoSchedule(msg, delay, failNow, fail, callback)
{
	if(failNow)
		callback(new Error("AutoSchedule failed as requested"));

	setTimeout(autoActivate.bind(null, msg, fail, callback), delay);
}

autoSchedule.promised("auto", 3000, false, false).hang();
autoSchedule.promised("auto", 3000, false, true).hang();
autoSchedule.promised("auto", 3000, true, false).hang();
autoSchedule.promised("auto", 3000, true, true).hang();

