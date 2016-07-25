'use strict';

const Hapi = require('hapi');
const Sqlite3 = require('sqlite3');
const Auth = require('./lib/auth');
const UserServerMethods = require('./serverMethods/users.js');
const CourseMaterialsServerMethods = require('./serverMethods/course-materials.js');
const CoursesServerMethods = require('./serverMethods/courses.js');

const DB_FILE = __dirname + './oss.sqlite';

exports.register = function(server, options, next){


	const db = new Sqlite3.Database(DB_FILE);

	server.bind({ db: db });

	UserServerMethods.UserGetQueries(server, db);
	CourseMaterialsServerMethods.CourseMaterialDeleteQueries(server, db);
	CoursesServerMethods.CourseGetQueries(server, db);
	CoursesServerMethods.CourseDeleteQueries(server, db);

	server.register(require('hapi-auth-bearer-token'), (err) => {

        if (err) {
            return next(err);
        }

        server.auth.strategy('registered', 'bearer-access-token', {
            validateFunc: Auth.validateRegistered.bind(db)
        });

         server.auth.strategy('admin-teacher', 'bearer-access-token', {
            validateFunc: Auth.validateAdminTeacher.bind(db)
        });

        server.route(require('./routes/routes'));

        next();
    });
}

exports.register.attributes = {
	pkg: require('./package.json')
}