'use strict';

let Wreck = require('wreck');

module.exports.create = function (request, reply) {

    const sql = 'INSERT INTO course_details (topic, description, course_id, teacher)'+
    ' VALUES (?, ?, ?, ?)';

    this.db.run(sql,
        [
            request.payload.topic,
            request.payload.description,
            request.payload.course_id,
            request.payload.teacher
        ],
    (err) => {

        if (err) {
            throw err;
        }

        reply({ status: 'ok' });
    });

};

module.exports.edit = function(request, reply){

    this.db.run('UPDATE course_details SET topic = ?, description = ?, course_id = ?, teacher = ? WHERE id = ?', 
        [
            request.payload.topic,
            request.payload.description,
            request.payload.course_id,
            request.payload.teacher,
            request.params.id
        ], (err, result) => {
        

        if (err) {
            throw err;
        }

        reply('ok');
    });

};



module.exports.delete = function(request, reply){

    this.db.run('DELETE FROM course_details WHERE id = ?', 
        [
            request.params.id
        ], (err, result) => {
        

        if (err) {
            throw err;
        }

        reply('ok');
    });

};