'use strict';

const Joi = require('joi');

module.exports.create = {
	topic: Joi.string().min(2).max(255).required(),
	description: Joi.string().min(2).max(2000),
	course_id: Joi.number().min(1).required(),
	teacher: Joi.string().min(2).max(255).required()
};


module.exports.edit = {
	topic: Joi.string().min(2).max(255).required(),
	description: Joi.string().min(2).max(2000),
	course_id: Joi.number().min(1).required(),
	teacher: Joi.string().min(2).max(255).required()
};