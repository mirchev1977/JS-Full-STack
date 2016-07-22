'use strict';

const Hapi = require('hapi');
const Sqlite3 = require('sqlite3');

const db = new Sqlite3.Database('./oss.sqlite');

const server = new Hapi.Server();
server.connection({ port: 9000 });

server.bind({ db: db });

server.route(require('./routes/routes'));

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});