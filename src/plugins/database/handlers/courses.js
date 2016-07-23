'use strict';

let Wreck = require('wreck');

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

module.exports.create = function (request, reply) {

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

module.exports.enterDetails = function (request, reply) {

    this.db.get('SELECT * FROM courses WHERE id = ?', [request.params.id], (err, result) => {

        if (err) {
            throw err;
        }

        if (typeof result !== 'undefined') {
            //use result.name in order to get the name of the course
            //or result.id - in order to get the id of the course
            //later I should make this with the inbuilt server methods
            // or I could even try to use wreck, after I've found out how to use it



            const sql = 'INSERT INTO course_details (topic, description, teacher, course_id)'+
            ' VALUES (?, ?, ?, ?)';

            this.db.run(sql,
                [
                    request.payload.topic,
                    request.payload.description,
                    request.payload.teacher,
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

module.exports.enterMaterial = function (request, reply) {

    this.db.get('SELECT * FROM courses WHERE id = ?', [request.params.id], (err, result) => {

        if (err) {
            throw err;
        }

        if (typeof result !== 'undefined') {
            //use result.name in order to get the name of the course
            //or result.id - in order to get the id of the course
            //later I should make this with the inbuilt server methods
            // or I could even try to use wreck, after I've found out how to use it



            const sql = 'INSERT INTO course_materials (title, text, course_id)'+
            ' VALUES (?, ?, ?)';

            this.db.run(sql,
                [
                    request.payload.title,
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