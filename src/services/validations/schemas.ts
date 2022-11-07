import Joi from 'joi';

const loginSchema: Joi.Schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default { loginSchema };