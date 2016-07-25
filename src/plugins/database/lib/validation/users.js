'use strict';

const Joi = require('joi');

module.exports.login = {
    email: Joi.string().email().required(),
	password: Joi.string().min(5).required()
};

module.exports.create = {
	first_name: Joi.string().min(2).max(60).required(),
	last_name: Joi.string().min(2).max(60).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(5).required()
};

module.exports.createByAdmin = {
	first_name: Joi.string().min(2).max(60).required(),
	last_name: Joi.string().min(2).max(60).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(5).required(),
	role: Joi.string().valid(['admin', 'teacher', 'student'])
};

module.exports.editAdmin = {
	first_name: Joi.string().min(2).max(60).required(),
	last_name: Joi.string().min(2).max(60).required(),
	email: Joi.string().email().required(),
	role: Joi.string().valid(['admin', 'teacher', 'student'])
};

module.exports.edit = {
	first_name: Joi.string().min(2).max(60).required(),
	last_name: Joi.string().min(2).max(60).required(),
	email: Joi.string().email().required(),
	role: Joi.string().valid(['admin', 'teacher', 'student'])
};