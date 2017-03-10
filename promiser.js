function promise(operation)
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

function init()
{
	Function.prototype.methodPromise = function()
	{
		let args = Array.prototype.slice.call(arguments);

		return promise(this.bind.apply(this, args));
	};

	Function.prototype.promise = function()
	{
		let args = Array.prototype.slice.call(arguments);

		return this.methodPromise.apply(this, [null].concat(args));
	};
}

module.exports = init;

