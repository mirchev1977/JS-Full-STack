'use strict';

module.exports.getAll = function (request, reply) {
	this.db.all('SELECT * FROM course_materials', (err, results) => {

		if (err) {
			throw err;
		}

		reply(results);
	});
};

module.exports.getOne = function (request, reply) {

    this.db.get('SELECT * FROM course_materials WHERE id = ?', [request.params.id], (err, result) => {

        if (err) {
            throw err;
        }

        if (typeof result !== 'undefined') {
            reply(result);
        }
        else {
            reply('Not found').code(404);
        }
    });
};