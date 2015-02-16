
var EXPORTED_SYMBOLS = ['console'];

(function(context)
{
	var o = Components.utils.import("resource://gre/modules/devtools/Console.jsm");

	// https://developer.mozilla.org/en-US/docs/Web/API/console
	context.console = new o.ConsoleAPI();

	context.console.options = {
		mode: false,
	};

	context.console.logOrig = o.ConsoleAPI.prototype.log;

	context.console.log = function log(e)
	{
		var args = arguments;

		while (args.length == 1 && typeof args[0].callee !== 'undefined')
		{
			args = args[0];
		}

		if (this.options.mode !== null)
		{
			this.logOrig((args.length == 1) ? args[0] : Array.prototype.slice.call(args, 0));
		}

		if (this.options.mode !== false)
		{
			return this.logPrint(args);
		}
	};

	// for Scratchpad or console
	context.console.logPrint = function (e)
	{
		var args = arguments;

		while (args.length == 1 && typeof args[0].callee !== 'undefined')
		{
			args = args[0];
		}

		return o.log((args.length == 1) ? args[0] : Array.prototype.slice.call(args, 0));
	};

})(this);
