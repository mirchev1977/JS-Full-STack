'use strict';

let Wreck = require('wreck');
let Handlers = require('../handlers/courses');

module.exports = [{
    method: 'GET',
    path: '/api/courses',
    config:{
        auth: "adminTeacher"
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
        auth: 'adminTeacher'
    },
    handler: Handlers.create
}, {
    method: 'POST',
    path: '/api/courses/{id}/details',
    config: {
        auth: 'adminTeacher'
    },
    handler: Handlers.enterDetails
}, {
    method: 'POST',
    path: '/api/courses/{id}/material',
    config: {
        auth: 'adminTeacher'
    },
    handler: Handlers.enterMaterial
}, {
    method: 'PUT',
    path: '/api/courses/{id}',
    config: {
        auth: 'adminTeacher'
    },
    handler: Handlers.edit
}, {
    method: 'DELETE',
    path: '/api/courses/{id}',
    config: {
        auth: 'adminTeacher',
        pre: [
            'servGetMaterialIds',
            'servDelCourseMaterials'
        ],

    },
    handler: Handlers.delete
}];