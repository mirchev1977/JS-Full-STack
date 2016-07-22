'use strict';

let Handlers = require('../handlers/courses');

module.exports = [{
    method: 'GET',
    path: '/api/courses',
    handler: Handlers.getAll
}];