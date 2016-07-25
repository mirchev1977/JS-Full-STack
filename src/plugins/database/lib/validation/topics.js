'use strict';

const Joi = require('joi');

module.exports.create = {
	topic: Joi.string().min(5).max(255).required(),
	text: Joi.string().min(5).max(255),
	course_material_id: Joi.number().min(1).required()
};

module.exports.edit = {
	topic: Joi.string().min(5).max(255).required(),
	text: Joi.string().min(5).max(255),
	course_material_id: Joi.number().min(1).required()
};