var $http = require('http'); // import

$http.createServer( function (request, response) {
    response.writeHead(200);
    response.write("Hello, this is dog");
    response.end();
}).listen( 3000 );
