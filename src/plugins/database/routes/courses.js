'use strict';

let Wreck = require('wreck');
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
}, {
    method: 'POST',
    path: '/api/courses/{id}/details',
    // config: {
    //     auth: 'api'
    // },
    handler: Handlers.enterDetails
}, {
    method: 'POST',
    path: '/api/courses/{id}/material',
    // config: {
    //     auth: 'api'
    // },
    handler: Handlers.enterMaterial
}, {
    method: 'PUT',
    path: '/api/courses/{id}',
    // config: {
    //     auth: 'api'
    // },
    handler: Handlers.edit
}, {
    method: 'DELETE',
    path: '/api/courses/{id}',
    config: {
        pre: [
            'servGetMaterialIds',
            'servDelCourseMaterials'
        ],

        // auth: 'api'
    },
    handler: Handlers.delete
}];