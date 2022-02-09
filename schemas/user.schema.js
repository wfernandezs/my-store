const Joi = require('joi');
const id = Joi.string().uuid();
const name = Joi.string();
const lastName = Joi.string();
const email = Joi.string().email();
const username = Joi.string();
const phone = Joi.string();
const company = Joi.string();

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  username: username.required(),
  phone: phone.required(),
  compay: company.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  lastName: lastName,
  email: email,
  username: username,
  phone: phone,
  compay: company,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
