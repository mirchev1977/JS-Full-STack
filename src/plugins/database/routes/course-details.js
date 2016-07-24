
let Handlers = require('../handlers/course-details');
let Wreck = require('wreck');

module.exports = [{
    method: 'PUT',
    path: '/api/course-details/{id}/edit',
    handler: Handlers.edit
}, {
    method: 'DELETE',
    path: '/api/course-details/{id}',
    handler: Handlers.delete
}];