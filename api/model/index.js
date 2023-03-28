const Sequelize = require('sequelize');
const { env } = require('../utility/config');

const sequelize = new Sequelize(env('DATABASE_URL'));
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.profiles = require('./profile.model')(sequelize, Sequelize);

module.exports = db;
