'use strict';

module.exports = (config, utils, connect) => {
	
	let user = connect.Model.extend({
	  tableName: 'user'
	});

	return user;
};
