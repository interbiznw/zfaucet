const stdrpc = require('stdrpc');
const config = require('../config');

module.exports = stdrpc('http://localhost:17932', {
	req: {
		auth: {
			username: config.rpcuser,
			password: config.rpcpass
		}
	},
	methodTransform: require('decamelize')
});
