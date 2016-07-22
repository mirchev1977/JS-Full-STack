'user strict';

let courses = require('./courses');
let users = require('./users');
let topics = require('./topics');

module.exports = [].concat(courses, users, topics);