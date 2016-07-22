'use strict';

let Handlers = require('../handlers/users');

module.exports = [{
    method: 'GET',
    path: '/api/users',
    handler: Handlers.getAll
}];