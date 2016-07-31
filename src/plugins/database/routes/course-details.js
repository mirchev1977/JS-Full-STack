'use strict';

let Handlers = require('../handlers/course-details');
let Wreck = require('wreck');
let Val = require('../lib/validation/course-details');
const Joi = require('joi');


module.exports = [{
    method: 'POST',
    path: '/api/course-details',
    config:{
    	auth: 'adminTeacher',
        payload:{
            output: 'data'
        },
        validate:{
            payload: Val.create
        }
    },
    handler: Handlers.create
},{
    method: 'PUT',
    path: '/api/course-details/{id}/edit',
    config:{
    	auth: 'adminTeacher',
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
    path: '/api/course-details/{id}',
    config:{
    	auth: 'adminTeacher'
    },
    handler: Handlers.delete
}];