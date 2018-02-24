module.exports = function(config) {
    var obj = {};

    obj.connectDB = () => {
    	let knex = require('knex')({
		  client: 'mysql',
		  connection: {
		    host     : '127.0.0.1',
		    user     : 'root',
		    password : 'root',
		    database : 'api_generator',
		    charset  : 'utf8'
		  }
		});

		return require('bookshelf')(knex);
    }

    return obj;
};