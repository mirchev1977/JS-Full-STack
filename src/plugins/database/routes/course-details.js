
let Handlers = require('../handlers/course-details');
let Wreck = require('wreck');

module.exports = [{
    method: 'POST',
    path: '/api/course-details',
    config:{
    	auth: 'adminTeacher'
    },
    handler: Handlers.create
},{
    method: 'PUT',
    path: '/api/course-details/{id}/edit',
    config:{
    	auth: 'adminTeacher'
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