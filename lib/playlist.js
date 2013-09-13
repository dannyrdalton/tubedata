var credentials = require('./credentials.js'),
	ytList = require('./yt-list.js'),
	request = require('request');

function playlist() {

	var baseUrl = 'https://www.googleapis.com/youtube/v3/playlists';

	this.list = function(parts, options, callback) {
		ytList(baseUrl, parts, options, callback);
	};
}

module.exports = new playlist();