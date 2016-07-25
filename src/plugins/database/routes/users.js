'use strict';

let Wreck = require('wreck');
let Handlers = require('../handlers/users');


module.exports = [{
    method: 'GET',
    path: '/api/users',
    config: {
        auth: 'admin'
    },
    handler: Handlers.getAll
}, {
	method: 'GET',
    path: '/api/users/{id}',
    config: {
        auth: 'registered'
    },
    handler: Handlers.getOne
}, {
    method: 'GET',
    path: '/api/users/{id}/courses',
    config: {
        auth: 'registered'
    },
    handler: Handlers.getCoursesSubscribedOn
}, {
    method: 'GET',
    path: '/api/users/{id}/courses/{courseId}/materials',
    handler: Handlers.getCourseMaterials,
    config: {
        auth: 'registered',
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
        auth: 'registered',
        pre: [
            'servGetUser',
            'servGetUserCourses',
            'servGetCourseMaterials',
            'servGetCourseCompletedTopics'
        ]
    }
}, {
    method: 'GET',
    path: '/api/users/{id}/topic/{topicId}',
    config: {
        auth: 'registered'
    },
    handler: Handlers.checkTopicCompleted
}, {
    method: 'POST',
    path: '/api/users/login',
    handler: Handlers.login
}, {
    method: 'POST',
    path: '/api/users/logout',
    config: {
        auth: 'registered'
    },
    handler: Handlers.logout
}, {
    method: 'POST',
    path: '/api/users',
    handler: Handlers.create
}, {
    method: 'POST',
    path: '/api/admin/users',
    config: {
        auth: 'admin'
    },
    handler: Handlers.createByAdmin
}, {
    method: 'POST',
    path: '/api/users/{userId}/subscribe/courses/{courseId}',
    config: {
        auth: 'registered'
    },
    handler: Handlers.subscribeCourse
}, {
    method: 'POST',
    path: '/api/users/{userId}/cover/topics/{topicId}',
    config: {
        auth: 'registered'
    },
    handler: Handlers.coverTopic
}, {
    method: 'PUT',
    path: '/api/users/{id}/edit-admin',
    config: {
        auth: 'admin'
    },
    handler: Handlers.editAdmin
}, {
    method: 'PUT',
    path: '/api/users/{id}/edit',
    config: {
        auth: 'registered'
    },
    handler: Handlers.edit
}, {
    method: 'PUT',
    path: '/api/users/{id}/increase-points',
    config: {
        auth: 'registered'
    },
    handler: Handlers.increasePoints
}, {
    method: 'DELETE',
    path: '/api/users/{id}',
    config: {
        auth: 'admin'
    },
    handler: Handlers.delete
}, {
    method: 'DELETE',
    path: '/api/users/{id}/unsubscribe-course',
    config: {
        auth: 'registered'
    },
    handler: Handlers.unsubscribeCourse
}];