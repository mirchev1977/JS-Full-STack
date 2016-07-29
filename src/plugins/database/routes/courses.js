'use strict';

let Wreck = require('wreck');
let Handlers = require('../handlers/courses');
let Val = require('../lib/validation/courses');
const Joi = require('joi');


module.exports = [{
    method: 'GET',
    path: '/api/courses',
    config:{
        // auth: "adminTeacher"
    },
    handler: Handlers.getAll
}, {
	method: 'GET',
    path: '/api/courses/{id}',
    handler: Handlers.getOne
}, {
    method: 'POST',
    path: '/api/courses',
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
    path: '/api/courses/{id}/details',
    config: {
        // auth: 'adminTeacher',
        payload:{
            output: 'data'
        },
        validate:{
            payload: Val.enterDetails
        }
    },
    handler: Handlers.enterDetails
}, {
    method: 'POST',
    path: '/api/courses/{id}/material',
    config: {
        // auth: 'adminTeacher',
        payload:{
            output: 'data'
        },
        validate:{
            payload: Val.enterMaterial
        }
    },
    handler: Handlers.enterMaterial
}, {
    method: 'PUT',
    path: '/api/courses/{id}',
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
    path: '/api/courses/{id}',
    config: {
        // auth: 'adminTeacher',
        pre: [
            'servGetMaterialIds',
            'servDelCourseMaterials'
        ],

    },
    handler: Handlers.delete
}];