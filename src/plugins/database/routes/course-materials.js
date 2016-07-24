'use strict';

let Handlers = require('../handlers/course-materials');
let Wreck = require('wreck');

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
    path: '/api/course-materials',
    // config: {
    //     auth: 'api'
    // },
    handler: Handlers.create
}, {
    method: 'POST',
    path: '/api/course-materials/{id}/topic',
    // config: {
    //     auth: 'api'
    // },
    handler: Handlers.enterTopic
}, {
    method: 'DELETE',
    path: '/api/course-materials/{id}',
    config: {
        pre:[
            'servDelMaterialTopic',
            'servDelUserTopics'
        ],
        // auth: 'api'
    },
    handler: Handlers.delete
}];