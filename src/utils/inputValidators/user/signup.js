const Joi = require('joi');

const signupSchema = Joi
    .object()
    .keys({
        username: Joi
            .string()
            .alphanum()
            .min(3)
            .max(50)
            .trim(true)
            .required(),
        email: Joi
            .string()
            .email()
            .trim(true)
            .required(),
        bio: Joi
            .string(),
        password: Joi
            .string()
            .regex(/[a-z0-9]/)
            .min(5)
            .max(15)
            .required()
        ,
        role: Joi
            .valid('user', 'aplicant')
            .required()

    })
const signUpInputValidator = (payload) => {
    return signupSchema.validate(payload);
}

module.exports = signUpInputValidator;