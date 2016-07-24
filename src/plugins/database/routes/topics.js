'use strict';

let Wreck = require('wreck');
let Handlers = require('../handlers/topics');

module.exports = [{
    method: 'GET',
    path: '/api/topics',
    handler: Handlers.getAll
}, {
	method: 'GET',
    path: '/api/topics/{id}',
    handler: Handlers.getOne
}, {
	method: 'DELETE',
    path: '/api/topics/{id}',
    handler: Handlers.delete
}];