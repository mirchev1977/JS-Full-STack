'use strict';

const Joi = require('joi');

module.exports.create = {
	name: Joi.string().min(2).max(255).required()
};

module.exports.enterDetails = {
	topic: Joi.string().min(2).max(255).required(),
	description: Joi.string().min(2).max(255),
	teacher: Joi.string().min(2).max(255)
};

module.exports.enterMaterial = {
	title: Joi.string().min(2).max(255).required(),
	text: Joi.string().min(2).max(255),
};

module.exports.edit = {
	name: Joi.string().min(2).max(255).required()
};