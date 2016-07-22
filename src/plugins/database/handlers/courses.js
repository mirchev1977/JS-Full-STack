'use strict';

module.exports.getAll = function (request, reply) {
	this.db.all('SELECT * FROM courses', (err, results) => {

		if (err) {
			throw err;
		}

		reply(results);
	});
};

module.exports.getOne = function (request, reply) {
    this.db.get('SELECT * FROM courses WHERE id = ?', [request.params.id], (err, result) => {

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

exports.create = function (request, reply) {

    const sql = 'INSERT INTO courses (name)'+
    ' VALUES (?)';

    this.db.run(sql,
        [
            request.payload.name
        ],
    (err) => {

        if (err) {
            throw err;
        }

        reply({ status: 'ok' });
    });

};