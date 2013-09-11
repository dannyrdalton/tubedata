var tubedata = require('../index.js');

//set API key and check if true
tubedata.setApiKey('AIzaSyCNVhTbydq4uBvnC8LvmRR2cIFegjReevM');
console.log(tubedata.getApiKey());

tubedata.video.list(['id', 'snippet', 'contentDetails'], {
	id: 'yfRX9u6Vw2o'
}, function(error, response, body) {
	console.log(body);
});