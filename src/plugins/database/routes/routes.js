'user strict';

let courses = require('./courses');
let users = require('./users');

module.exports = [].concat(courses, users);