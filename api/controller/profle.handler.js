const db = require('../model');

const Profiles = db.profiles;
module.exports = {
  getProfile: async (req, res) => {
    try {
      return res.json({ es: 'tes' });
    } catch (error) {
      return error;
    }
  },
  getOneProfile: async (req, res) => {
    try {
      const { id } = req.params;
      const base = req.headers.host;
      const image = [];
      const { dataValues } = await Profiles.findByPk(id);
      if (!dataValues) {
        throw new Error('Data Not Found');
      }
      const splited = dataValues.filename.split('.');
      const imagePath = splited[0].split('\\').join('/');
      const endpoint500 = `${imagePath}-500.${splited[1]}`;
      const endpoint1000 = `${imagePath}-1000.${splited[1]}`;

      image.push(`${base}/${endpoint500}`);
      image.push(`${base}/${endpoint1000}`);
      const data = { ...dataValues, image };
      res.json({ data });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },

  addProfile: async (req, res) => {
    try {
      const {
        education,
        city,
        mobile,
        usia,
        date,
        name,
      } = req.body;
      console.log(req.body);
      const { path } = req.file;
      const payload = {
        name,
        city,
        mobile,
        usia,
        education,
        date,
        filename: path,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await Profiles.create(payload).then((data) => {
        res.json({
          message: 'Profile created successfully.',
          id: data.id,
        });
      })
        .catch((err) => {
          res.status(500).json({
            message: err.message || 'Some error occurred while creating the Profile.',
            data: null,
          });
        });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  editProfile: async (req, res) => {
    try {
      const { id } = req.params;
      const { path } = req.file;
      const {
        education,
        city,
        mobile,
        usia,
        date,
        name,
      } = req.body;
      const data = {
        education,
        city,
        mobile,
        usia,
        date,
        name,
        filename: path,
        updatedAt: new Date(),
      };
      const { dataValues } = await Profiles.findByPk(id);
      if (!dataValues) {
        throw new Error('Data Not Found');
      }
      Profiles.update(data, {
        where: { id },
      }).then((num) => {
        if (num == 1) {
          res.json({
            message: 'Profile updated successfully.',
            data: req.body,
          });
        } else {
          res.json({
            message: `Cannot update Profile with id=${id}. Maybe Profile was not found or req.body is empty!`,
            data: req.body,
          });
        }
      })
        .catch((err) => {
          res.status(500).json({
            message: err.message || 'Some error occurred while updating the Profile.',
            data: null,
          });
        });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};
