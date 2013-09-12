var credentials = require('./credentials.js'),
	request = require('request'),
	async = require('async'),
	_ = require('underscore');

var events = require('events');
var emitter = new events.EventEmitter();

function channel() {

	var baseUrl = 'https://www.googleapis.com/youtube/v3/channels';

	//async queue for processing pages of videos
	var pageQueue = async.queue(function(task, callback) {
		callback(task.body, task.reqUrl, task.playlistVideos, task.totalResults, task.callback);
	}, 1);

	//helper functions

	function processYoutubePage(body, reqUrl, playlistVideos, totalResults, callback) {
		_.each(body.items, function(playlistItem) {
			var videoId = playlistItem.contentDetails.videoId;
			var videosRequestUrl = 'https://www.googleapis.com/youtube/v3/videos' +
								   '?key=' + credentials.getApiKey() + '&id=' + 
								   videoId + '&part=snippet,contentDetails';
			//req to get video
			request(videosRequestUrl, function(error, response, body) {
				if (error) {
					console.log('Error getting video');
				} else {
					body = JSON.parse(body);
					playlistVideos.push(body.items[0]);
					console.log(playlistVideos.length + '/' + totalResults + ' videos processed.');
					if (playlistVideos.length === totalResults) {
						emitter.emit('playlistVideos.finished', playlistVideos);
					}
				}
			});
		});
		if (body.nextPageToken) {
			fullReqUrl = reqUrl + '&pageToken=' + body.nextPageToken;
			request(fullReqUrl, function(error, response, body) {
				if (error) {
					console.log('error getting playlist items');
				} else {
					body = JSON.parse(body);
					pageQueue.push({
						totalResults: totalResults,
						body: body, 
						reqUrl: reqUrl, 
						playlistVideos: playlistVideos,
						callback: callback
					}, processYoutubePage);
				}
			});
		}
	};

	function getPlaylistItems(playlistId, callback) {
		var playlistItemReqUrl = 'https://www.googleapis.com/youtube/v3/playlistItems' +
								 '?key=' + credentials.getApiKey() + '&playlistId=' +
								 playlistId + '&part=contentDetails';

		request(playlistItemReqUrl, function(error, response, body) {
			if (error) {
				console.log('Error getting playlist items.');
			} else {
				body = JSON.parse(body);
				var playlistVideos = [];
				pageQueue.push({
					totalResults: body.pageInfo.totalResults,
					body: body, 
					reqUrl: playlistItemReqUrl, 
					playlistVideos: playlistVideos,
					callback: callback
				}, processYoutubePage);
			}
		});
	}


	//exported functions
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

	this.getUploadedVideos = function(channelName, callback) {
		var reqUrl = baseUrl + '?key=' + credentials.getApiKey() +
					 '&forUsername=' + channelName + '&part=contentDetails';

		emitter.on('playlistVideos.finished', callback);

		request(reqUrl, function(error, response, body) {
			if (error) {
				console.log('Error getting channel.');
			} else {
				body = JSON.parse(body);
				if (body.items[0].contentDetails.relatedPlaylists.uploads) {
					var uploadPlaylistId = body.items[0].contentDetails.relatedPlaylists.uploads;
					getPlaylistItems(uploadPlaylistId, callback);
				} else {
					console.log('That channel has no uploads');
				}
			}
		});
	};
}

module.exports = new channel();