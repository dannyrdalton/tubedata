var credentials = require('./credentials.js'),
	channel = require('./channel.js'),
	playlist = require('./playlist.js'),
	playlistItems = require('./playlistitems.js');
	video = require('./video.js');

function tubedata() {
	var self = this;

	//functions for getting/setting API key
	this.setApiKey = function(apiKey) {
		credentials.setApiKey(apiKey);
	};

	this.getApiKey = function() {
		return credentials.getApiKey();
	};

	//Channel API
	this.channel = channel;

	//Playlist API
	this.playlist = playlist;

	this.playlistItems = playlistItems;

	//Video API
	this.video = video;

}

module.exports = new tubedata();