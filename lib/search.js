var credentials = require('./credentials.js'),
	ytList = require('./yt-list.js');
	request = require('request');

function search() {

	var baseUrl = 'https://www.googleapis.com/youtube/v3/search';

	this.list = function(parts, options, callback) {
		ytList(baseUrl, parts, options, callback);
	};

}

module.exports = new search();