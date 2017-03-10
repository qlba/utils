require("./promiser.js")();


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

myG.schedule.methodPromise(myG, 1500, false, false).hang();
myG.schedule.methodPromise(myG, 1500, false, true).hang();
myG.schedule.methodPromise(myG, 1500, true, false).hang();
myG.schedule.methodPromise(myG, 1500, true, true).hang();


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

autoSchedule.promise("auto", 3000, false, false).hang();
autoSchedule.promise("auto", 3000, false, true).hang();
autoSchedule.promise("auto", 3000, true, false).hang();
autoSchedule.promise("auto", 3000, true, true).hang();

