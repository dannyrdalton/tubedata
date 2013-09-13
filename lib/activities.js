var credentials = require('./credentials.js'),
	ytList = require('./yt-list.js');
	request = require('request');

function activities() {

	var baseUrl = 'https://www.googleapis.com/youtube/v3/activities';

	this.list = function(parts, options, callback) {
		ytList(baseUrl, parts, options, callback);
	};
}

module.exports = new activities();