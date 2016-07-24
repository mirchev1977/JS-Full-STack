'user strict';

let Wreck = require('wreck');

let courses = require('./courses');
let users = require('./users');
let topics = require('./topics');
let courseMaterials = require('./course-materials');
let courseDetails = require('./course-details');

module.exports = [].concat(courses, users, topics, courseMaterials, courseDetails);