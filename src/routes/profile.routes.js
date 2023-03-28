const handler = require('../controller/profle.handler');
const upload = require('../utility/multer');
const { profileSchema } = require('../validator/schema');
const imageProcessing = require('../utility/sharp');

module.exports = (router, validator) => {
  router.get('/', handler.getProfile);
  router.get('/:id', handler.getOneProfile);
  router.post('/', upload('image', 'profile'), validator(profileSchema), imageProcessing, handler.addProfile);
  router.put('/:id', upload('image', 'profile'), validator(profileSchema), imageProcessing, handler.editProfile);

  return router;
};
