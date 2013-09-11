var tubedata = require('../index.js');

//set API key and check if true
tubedata.setApiKey('AIzaSyCNVhTbydq4uBvnC8LvmRR2cIFegjReevM');
console.log(tubedata.getApiKey());

/*tubedata.video.list(['id', 'snippet', 'contentDetails'], {
	id: 'yfRX9u6Vw2o'
}, function(error, response, body) {
	console.log(body);
}); */

/*tubedata.playlist.list(['snippet', 'contentDetails'], { id: 'UUTTSHJ2LsaHQ8FBiNUstEtw'},
	function(error, response, body) {
		console.log(body);
	}
); */

tubedata.playlistItems.list(['contentDetails'], { 
	playlistId: 'UUTTSHJ2LsaHQ8FBiNUstEtw'
}, function(error, reponse, body) {
	console.log(body);
});

/*tubedata.channel.list(['contentDetails'], { forUsername: 'LibraryUk'},
	function(error, response, body) {
		console.log(body);
	}
); */