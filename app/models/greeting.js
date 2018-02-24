'use strict';

module.exports = (config, utils, connect) => {
	
	let greeting = connect.Model.extend({
	  tableName: 'greeting'
	});

	return greeting;
};
