const express = require('express');
const app = express();
const fs = require('fs');
const fritz = require('fritzbox.js');
const options = require('./package.json').options;
var json;

async function readPhoneCalls() {
	const calls = await fritz.getCalls(options);
	if (calls.error) {
		console.log('[FritzCalls] Error: ', calls.error.message);
		process.exit(1);
	} else {
		json = calls;
	}
}

readPhoneCalls();

app.get('/listCalls', function(req, res) {
	res.send(json);
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('[FritzCalls] NodeJS server listening on port 3000.');
});