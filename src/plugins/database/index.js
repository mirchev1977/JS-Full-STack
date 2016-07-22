'use strict';

const Hapi = require('hapi');
const Sqlite3 = require('sqlite3');

const DB_FILE = __dirname + './oss-02.sqlite';

exports.register = function(server, options, next){
	const db = new Sqlite3.Database(DB_FILE);

	server.bind({ db: db });

	server.route(require('./routes/routes'));

	next();
}

exports.register.attributes = {
	pkg: require('./package.json')
}