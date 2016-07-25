'use strict';

exports.validateRegistered = function (token, callback) {

    this.get('SELECT * FROM users WHERE token = ?', 
        [token], (err, result) => {

        if (err) {
            return callback(err, false);
        }

        const user = result;

        if (!user) {
            return callback(null, false);
        }

        callback(null, true, {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            token: user.token,
            role: user.role,
            points: user.points
        });
    });
};

exports.validateAdminTeacher = function (token, callback) {
    this.get('SELECT * FROM users WHERE token = ?', 
        [token], (err, result) => {

        if (err) {
            return callback(err, false);
        }

        const user = result;

        if (!user) {
            return callback(null, false);
        }
        if (user.role != 'admin' && user.role != 'teacher') {
            return callback(null, false);
        }


        callback(null, true, {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            token: user.token,
            role: user.role,
            points: user.points
        });
    });
};

exports.validateAdmin = function (token, callback) {

    this.get('SELECT * FROM users WHERE token = ?', 
        [token], (err, result) => {

        if (err) {
            return callback(err, false);
        }

        const user = result;

        if (!user) {
            return callback(null, false);
        }

        if (user.role !== 'admin') {
            return callback(null, false);
        }

        callback(null, true, {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            token: user.token,
            role: user.role,
            points: user.points
        });
    });
};