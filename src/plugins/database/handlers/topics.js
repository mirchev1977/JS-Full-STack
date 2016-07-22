'use strict';

module.exports.getAll = function (request, reply) {
	this.db.all('SELECT * FROM topics', (err, results) => {

		if (err) {
			throw err;
		}

		reply(results);
	});
}