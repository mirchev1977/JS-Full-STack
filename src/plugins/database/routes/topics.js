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
	method: 'POST',
    path: '/api/topics',
    config: {
        auth: 'adminTeacher'
    },
    handler: Handlers.create
}, {
    method: 'PUT',
    path: '/api/topics/{id}',
    config: {
        auth: 'adminTeacher'
    },
    handler: Handlers.edit
}, {
	method: 'DELETE',
    path: '/api/topics/{id}',
    config: {
        auth: 'adminTeacher'
    },
    handler: Handlers.delete
}];