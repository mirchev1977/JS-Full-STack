'use strict';

let Handlers = require('../handlers/topics');

module.exports = [{
    method: 'GET',
    path: '/api/topics',
    handler: Handlers.getAll
}, {
	method: 'GET',
    path: '/api/topics/{id}',
    handler: Handlers.getOne
}];