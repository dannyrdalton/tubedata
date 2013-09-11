var credentials = require('./credentials.js'),
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

	//Video API
	this.video = video;

}

module.exports = new tubedata();