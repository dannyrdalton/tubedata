function credentials() {
	var self = this;

	var apiKey = '';

	this.setApiKey = function(apiKey) {
		self.apiKey = apiKey;
	};

	this.getApiKey = function() {
		return self.apiKey;
	};
}

module.exports = new credentials();