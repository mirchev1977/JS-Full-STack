'use strict';

let Handlers = require('../handlers/course-materials');

module.exports = [{
    method: 'GET',
    path: '/api/course-materials',
    handler: Handlers.getAll
}, {
	method: 'GET',
    path: '/api/course-materials/{id}',
    handler: Handlers.getOne
}, {
    method: 'POST',
    path: '/api/course-materials/{id}/topic',
    // config: {
    //     auth: 'api'
    // },
    handler: Handlers.enterTopic
}];