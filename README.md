# colorize-stream

A dead simple through-stream that colorizes output using ANSI escape codes.

## Installation

Get it:

```shell
npm install colorize-stream
```

Require it:

```javascript
var colorize = require('colorize-stream');
```

## Usage

```javascript
var stream = colorize('red').pipe(process.stdout);
stream.write("here's some red text\n");
```

## Copyright &amp; License

&copy; 2014 Jason Frame [ [@jaz303](http://twitter.com/jaz303) / [jason@onehackoranother.com](mailto:jason@onehackoranother.com) ]

Released under the ISC license.