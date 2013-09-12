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


Currently a work in progress. Will eventually be a youtube data api wrapper.
