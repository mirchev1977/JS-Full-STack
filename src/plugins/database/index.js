'use strict';

const Hapi = require('hapi');
const Sqlite3 = require('sqlite3');
const UserServerMethods = require('./serverMethods/users.js');
const CourseMaterialsServerMethods = require('./serverMethods/course-materials.js');

const DB_FILE = __dirname + './oss.sqlite';

exports.register = function(server, options, next){


	const db = new Sqlite3.Database(DB_FILE);

	server.bind({ db: db });

	UserServerMethods.UserGetQueries(server, db);
	CourseMaterialsServerMethods.CourseMaterialDeleteQueries(server, db);


	server.route(require('./routes/routes'));

	next();
}

exports.register.attributes = {
	pkg: require('./package.json')
}