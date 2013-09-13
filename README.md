# Installation

```
npm install tubedata
```

# Configuration

First, get a Youtube API Key from Google.

Then, hust require the module, set the API Key and you are good to go!

```
var tubedata = require('tubedata');
tubedata.setApiKey('example-youtube-api-key');
```

# Basic Usage

This module is a work in progress, and only contains minor functionality at this point.

So far this module implements the `list` data call for the channel, playlist, playlist item, and video resources. To use the `list` function call: `tubedata.resource.list(parts, options, callback)`

i.e.
```
var parts = ['snippet', 'contentDetails'];
var options = { forUsername: 'example-username' };

tubedata.channel.list(parts, options, function(error, response, body) {
	if (!error && response.code.statusCode == 200) {
		//process response body
	}
});
```

To check out what `parts` and `options` you can pass into the list function for each resource <a href="https://developers.google.com/youtube/v3/docs/">here</a>. Please note that both the **filter** and **optional parameters** both go in the `options` json

The only other functionality that has been added at this point is the ability to get ALL the videos for a certain channel, all you need to do is provide the name. To use the `getUploadedVideos` function call: `tubedata.channel.getUploadedVideos(channelName, callback)`

i.e.
```
tubedata.channel.getUploadedVideos('example-channel-name', function(videos) {
	//process videos here
});
```



Currently a work in progress. Will be adding better abstractions and finer grained control module calls. Documentation will slowly improve over time also. Let me know if you want to help out!
