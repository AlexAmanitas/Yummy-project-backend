const Joi = require('joi');

const userRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});
const userLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const userStatusSchema = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business'),
});

const userVerifySchema = Joi.object({
  email: Joi.string().required(),
});

module.exports = {
  userRegisterSchema,
  userLoginSchema,
  userStatusSchema,
  userVerifySchema,
};
