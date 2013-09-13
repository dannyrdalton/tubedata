var credentials = require('./credentials.js'),
	request = require('request');

var list = function(baseUrl, parts, options, callback) {
	var reqUrl = baseUrl + '?key=' + credentials.getApiKey();

	for (var key in options) {
		if (options.hasOwnProperty(key)) {
			reqUrl += '&' + key + '=' + options[key];
		}
	}

	reqUrl += '&part=';
	for (var i = 0; i < parts.length; i++) {
		reqUrl += parts[i];
		if (i !== parts.length - 1) reqUrl += ',';
	}
	console.log(reqUrl);
	request(reqUrl, callback);
}

module.exports = list;

