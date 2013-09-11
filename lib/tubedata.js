var credentials = require('./credentials.js'),
	video = require('./video.js'),
	playlist = require('./playlist.js'),
	channel = require('./channel.js');

function tubedata() {
	var self = this;

	//functions for getting/setting API key
	this.setApiKey = function(apiKey) {
		credentials.setApiKey(apiKey);
	};

	this.getApiKey = function() {
		return credentials.getApiKey();
	};

	//Video API
	this.video = video;

	//Playlist API
	this.playlist = playlist;

	//Channel API
	this.channel = channel;

}

module.exports = new tubedata();