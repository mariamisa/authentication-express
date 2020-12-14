// validate req.body inputs with hopi joi
const Joi = require("@hapi/joi");

const signValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(3).max(30).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    error.status = 400;
    error.msg = "invalid input";
    next(error);
  } else {
    next();
  }
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().min(3).max(30).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    error.status = 400;
    error.msg = "invalid input";
    next(error);
  } else {
    next();
  }
};

module.exports = { signValidation, loginValidation };
