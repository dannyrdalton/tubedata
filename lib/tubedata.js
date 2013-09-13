//load API modules
var credentials = require('./credentials.js'),
	activities = require('./activities.js'),
	channel = require('./channel.js'),
	guideCategories = require('./guidecategories.js'),
	playlist = require('./playlist.js'),
	playlistItems = require('./playlistitems.js'),
	search = require('./search.js'),
	subscriptions = require('./subscriptions.js'),
	videoCategories = require('./videocategories.js'),
	video = require('./video.js');

//object returned on require('tubedata')
function tubedata() {
	var self = this;

	//functions for getting/setting API key
	this.setApiKey = function(apiKey) {
		credentials.setApiKey(apiKey);
	};

	this.getApiKey = function() {
		return credentials.getApiKey();
	};

	//Activities API
	this.activities = activities;

	//Channel API
	this.channel = channel;

	//Guide Categories API
	this.guideCategories = guideCategories;

	//Playlist API
	this.playlist = playlist;

	//Playlist Item API
	this.playlistItems = playlistItems;

	//Search API
	this.search = search;

	//Subscriptions API
	this.subscriptions = subscriptions;

	//Video Categories API
	this.videoCategories = videoCategories;

	//Video API
	this.video = video;

}

module.exports = new tubedata();