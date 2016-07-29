'use strict';

let Handlers = require('../handlers/course-materials');
let Wreck = require('wreck');
let Val = require('../lib/validation/course-materials');
const Joi = require('joi');


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
    config: {
        // auth: 'adminTeacher',
        payload:{
            output: 'data'
        },
        validate:{
            payload: Val.create
        }
    },
    handler: Handlers.create
}, {
    method: 'POST',
    path: '/api/course-materials/{id}/topic',
    config: {
        // auth: 'adminTeacher',
        payload:{
            output: 'data'
        },
        validate:{
            payload: Val.enterTopic
        }
    },
    handler: Handlers.enterTopic
}, {
    method: 'PUT',
    path: '/api/course-materials/{id}',
    config: {
        // auth: 'adminTeacher',
        payload:{
            output: 'data'
        },
        validate:{
            payload: Val.edit
        }
    },
    handler: Handlers.edit
}, {
    method: 'DELETE',
    path: '/api/course-materials/{id}',
    config: {
        // auth: 'adminTeacher',
        pre:[
            'servDelMaterialTopic',
            'servDelUserTopics'
        ]
    },
    handler: Handlers.delete
}];