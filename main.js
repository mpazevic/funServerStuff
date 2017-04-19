var http = require("http");

// Set a PORT
var PORT = 5555;
var PORT2 = 3000;

// 
function handleRequest(request, response) {
	response.end('HELLO');
};

function handleRequest2(request, response) {
	response.end("GOODBYE");
};

// Create new server using node's built in HTTP server
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(PORT, function() {
	console.log("Woohoo the server is running");
	console.log("Visit http://localhost:5555 to see the magic");
});

server2.listen(PORT2, function () {
	console.log("The second server is going");
});

