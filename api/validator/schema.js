const {
  object, string, number, date,
} = require('yup');

const profileSchema = object({
  name: string().required(),
  city: string().required(),
  mobile: number().required(),
  usia: number().required(),
  date: date().required(),
  education: string().required(),
});

module.exports = { profileSchema };
