var stream = require('stream');
var colorize = require('../');

"black red green yellow blue magenta cyan white reset".split(' ').forEach(function(c) {
	var stream = colorize(c);
	stream.pipe(process.stdout);
	stream.write(c + "\n");
});