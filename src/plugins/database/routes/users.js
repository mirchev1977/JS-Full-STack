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
}, {
    method: 'POST',
    path: '/api/admin/users',
    // config: {
    //     auth: 'api'
    // },
    handler: Handlers.createByAdmin
}, {
    method: 'POST',
    path: '/api/users/{userId}/subscribe/courses/{courseId}',
    // config: {
    //     auth: 'api'
    // },
    handler: Handlers.subscribeCourse
}, {
    method: 'POST',
    path: '/api/users/{userId}/cover/topics/{topicId}',
    // config: {
    //     auth: 'api'
    // },
    handler: Handlers.coverTopic
}];