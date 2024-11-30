const Joi = require('joi');

const schoolSchema = Joi.object({
  name: Joi.string().trim().required().min(2).max(255),
  address: Joi.string().trim().required().min(5).max(255),
  latitude: Joi.number().min(-90).max(90).required(),
  longitude: Joi.number().min(-180).max(180).required()
});

function validateSchool(school) {
  return schoolSchema.validate(school);
}

module.exports = {
  validateSchool
};