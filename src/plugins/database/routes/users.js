'use strict';

let Handlers = require('../handlers/users');

module.exports = [{
    method: 'GET',
    path: '/api/users',
    handler: Handlers.getAll
}, {
	method: 'GET',
    path: '/api/users/{id}',
    handler: Handlers.getOne
}, {
    method: 'POST',
    path: '/api/users',
    // config: {
    //     auth: 'api'
    // },
    handler: Handlers.create
}];