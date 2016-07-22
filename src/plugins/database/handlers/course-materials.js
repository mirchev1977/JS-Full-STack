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

module.exports.enterTopic = function (request, reply) {

    this.db.get('SELECT * FROM course_materials WHERE id = ?', [request.params.id], (err, result) => {

        if (err) {
            throw err;
        }

        if (typeof result !== 'undefined') {
            //use result.name in order to get the name of the course
            //or result.id - in order to get the id of the course
            //later I should make this with the inbuilt server methods
            // or I could even try to use wreck, after I've found out how to use it



            const sql = 'INSERT INTO topics (topic, text, course_material_id)'+
            ' VALUES (?, ?, ?)';

            this.db.run(sql,
                [
                    request.payload.topic,
                    request.payload.text,
                    result.id
                ],
            (err) => {

                if (err) {
                    throw err;
                }

                reply({ status: 'ok' });
            });

            





        }
        else {
            reply('Not found').code(404);
        }
    });
};