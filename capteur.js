var http = require('http');

var options = {
	host: 'localhost',
	port: 80,
	path: '/agriwatch/web/api/cooltainers/1?token=123456789',
	method: 'PUT',
	headers:{
		"Content-Type": "application/json"
	}
};

(function capteur(){

	var temp = Math.round(((Math.random() * 10) + 25)*10) / 10;
	var hum = Math.round(((Math.random() * 10) + 30)*10) / 10;

	var data = "{\"temperature\":" + temp + ",\"humidity\":" + hum + "}";

	var req = http.request(options, function(res) {
		console.log('STATUS: ' + res.statusCode);
		console.log('HEADERS: ' + JSON.stringify(res.headers));
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			console.log('BODY: ' + chunk);
		});
	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	req.write(data);
	req.end();

	setTimeout(capteur, 5000);

})();

