const profile = require('./profile.routes');
const validator = require('../validator');
const { getImage } = require('../controller/image.handler');

module.exports = (app, express) => {
  app.get('/api', (req, res) => { res.json('Hello World'); });
  app.get('/api/Images/profile/:img', getImage);
  app.use('/api/profile', profile(express.Router(), validator));
  return app;
};