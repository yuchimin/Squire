var static = require('node-static');
var sys = require('sys');
var exec = require('child_process').exec;

var file = new static.Server('./');

function puts(error, stdout, stderr) { sys.puts(stdout) };

require('http').createServer(function (request, response) {
exec("make -f Makefile build", puts);
exec("make -f Makefile ui", puts);
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(8080);