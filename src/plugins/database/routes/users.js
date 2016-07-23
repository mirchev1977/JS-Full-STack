'use strict';

let Wreck = require('wreck');
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
    method: 'GET',
    path: '/api/users/{id}/courses',
    handler: Handlers.getCoursesSubscribedOn
}, {
    method: 'GET',
    path: '/api/users/{id}/courses/{courseId}/materials',
    handler: Handlers.getCourseMaterials,
    config: {
        pre: [
            'servGetUser',
            'servGetUserCourses',
            'servGetCourseMaterials',
            'servGetCourseMaterialsTopics'
        ]
    }
}, {
    method: 'GET',
    path: '/api/users/{id}/courses/{courseId}/completed-topics',
    handler: Handlers.getCourseCompletedTopics,
    config: {
        pre: [
            'servGetUser',
            'servGetUserCourses',
            'servGetCourseMaterials',
            'servGetCourseCompletedTopics'
        ]
    }
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