const profile = require('./profile.routes');
const validator = require('../validator');
const { getImage } = require('../controller/image.handler');

module.exports = (app, express) => {
  app.get('/', (req, res) => { res.json('Hello World'); });
  app.get('/Images/profile/:img', getImage);
  app.use('/profile', profile(express.Router(), validator));
  return app;
};
