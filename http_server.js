var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('It is connected!!');
	response.end();
}).listen(8000);

console.log('-----******-----Running at 8000 port-------*******-------');