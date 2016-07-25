'use strict';

const Joi = require('joi');

module.exports.create = {
	title: Joi.string().min(2).max(255).required(),
	text: Joi.string().min(2).max(10000),
	course_id: Joi.number().min(1).required()
};

module.exports.enterTopic = {
	title: Joi.string().min(2).max(255).required(),
	text: Joi.string().min(2).max(10000),
	course_id: Joi.number().min(1).required()
};

module.exports.edit = {
	title: Joi.string().min(2).max(255).required(),
	text: Joi.string().min(2).max(10000),
	course_id: Joi.number().min(1).required()
};