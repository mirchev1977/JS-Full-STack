'use strict';

let CryptoJS = require("crypto-js");

module.exports.getAll = function (request, reply) {

    this.db.all('SELECT * FROM users', (err, results) => {

        if (err) {
            throw err;
        }

        reply(results);
    });
};

module.exports.getOne = function (request, reply) {
    this.db.get('SELECT * FROM users WHERE id = ?', [request.params.id], (err, result) => {

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

    // // Encrypt 
    let pass = CryptoJS.AES.encrypt(request.payload.password, 'secret key 123');
    pass = pass.toString();

    let tok = CryptoJS.AES.encrypt(request.payload.email + ' ' + request.payload.password + ' student', 'this is the token');
    tok = tok.toString();

    const sql = 'INSERT INTO users (first_name, last_name, email, password, token, role, points)'+
    ' VALUES (?, ?, ?, ?, ?, ?, ?)';

    this.db.run(sql,
        [
            request.payload.first_name,
            request.payload.last_name,
            request.payload.email,
            pass,
            tok,
            'student',
            0
        ],
    (err) => {

        if (err) {
            throw err;
        }

        reply({ status: 'ok' });
    });

};

module.exports.createByAdmin = function (request, reply) {

    // // Encrypt 
    let pass = CryptoJS.AES.encrypt(request.payload.password, 'secret key 123');
    pass = pass.toString();

    let tok = CryptoJS.AES.encrypt(request.payload.email + ' ' + request.payload.password + ' ' + 
        request.payload.role, 'this is the token');
    tok = tok.toString();

    const sql = 'INSERT INTO users (first_name, last_name, email, password, token, role, points)'+
    ' VALUES (?, ?, ?, ?, ?, ?, ?)';

    this.db.run(sql,
        [
            request.payload.first_name,
            request.payload.last_name,
            request.payload.email,
            pass,
            tok,
            request.payload.role,
            0
        ],
    (err) => {

        if (err) {
            throw err;
        }

        reply({ status: 'ok' });
    });

};

module.exports.subscribeCourse = function (request, reply) {

    this.db.get('SELECT * FROM users WHERE id = ?', [request.params.userId], (err, resultUsr) => {

        if (err) {
            throw err;
        }

        if (typeof resultUsr !== 'undefined') {
            

            /********************************
            GET COURSE ID
            **********************************/

            this.db.get('SELECT * FROM courses WHERE id = ?', [request.params.courseId], (err, resultCourse) => {

                if (err) {
                    throw err;
                }

                if (typeof resultCourse !== 'undefined') {


                    /********************************
                    USER SUBSCRIBES ON A COURSE
                    **********************************/

                    const sql = 'INSERT INTO user_courses (user_id, course_id, status)'+
                    ' VALUES (?, ?, ?)';

                    this.db.run(sql,
                        [
                            resultUsr.id,
                            resultCourse.id,
                            'In Progress'
                        ],
                    (err) => {

                        if (err) {
                            throw err;
                        }

                        reply({ status: 'ok' });
                    });


                    /********************************
                    END USER SUBSCRIBES ON A COURSE
                    **********************************/



                    
                }
                else {
                    reply('Not found').code(404);
                }
            });

            /********************************
            END GET COURSE ID
            **********************************/








        }
        else {
            reply('Not found').code(404);
        }
    });

};