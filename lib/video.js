var credentials = require('./credentials.js'),
	request = require('request');

function video() {

	var baseUrl = 'https://www.googleapis.com/youtube/v3/videos';

	this.list = function(parts, options, callback) {
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
	};

	this.test = function() {
		console.log(credentials.getApiKey() + ' hi there');
	};
}

module.exports = new video();