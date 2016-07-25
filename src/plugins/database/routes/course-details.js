
let Handlers = require('../handlers/course-details');
let Wreck = require('wreck');

module.exports = [{
    method: 'POST',
    path: '/api/course-details',
    config:{
    	auth: 'admin-teacher'
    },
    handler: Handlers.create
},{
    method: 'PUT',
    path: '/api/course-details/{id}/edit',
    config:{
    	auth: 'admin-teacher'
    },
    handler: Handlers.edit
}, {
    method: 'DELETE',
    path: '/api/course-details/{id}',
    config:{
    	auth: 'admin-teacher'
    },
    handler: Handlers.delete
}];