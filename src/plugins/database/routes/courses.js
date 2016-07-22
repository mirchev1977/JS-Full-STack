'use strict';

let Handlers = require('../handlers/courses');

module.exports = [{
    method: 'GET',
    path: '/api/courses',
    handler: Handlers.getAll
}, {
	method: 'GET',
    path: '/api/courses/{id}',
    handler: Handlers.getOne
}, {
    method: 'POST',
    path: '/api/courses',
    // config: {
    //     auth: 'api'
    // },
    handler: Handlers.create
}];