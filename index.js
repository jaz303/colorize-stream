var through = require('through');

var RESET = "\x1b[0m";

var COLORS = {
	black       : "\x1b[30m",
    red         : "\x1b[31m",
    green       : "\x1b[32m",
    yellow      : "\x1b[33m",
    blue        : "\x1b[34m",
    magenta     : "\x1b[35m",
    cyan        : "\x1b[36m",
    white       : "\x1b[37m",
    reset       : RESET
};

module.exports = function(color) {

	var ansi = COLORS[color];

	if (!ansi) {
		throw new Error("invalid color: " + color);
	}

	return through(function(data) {
		this.queue(ansi + data + RESET);
	});
	
};