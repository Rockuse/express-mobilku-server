module.exports = (sequelize, datatypes) => {
  const Profiles = sequelize.define(
    'profiles',
    {
      id: {
        type: datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: { type: datatypes.STRING, allowNull: false },
      city: { type: datatypes.STRING, allowNull: false },
      mobile: { type: datatypes.STRING, allowNull: false },
      usia: { type: datatypes.STRING, allowNull: false },
      date: { type: datatypes.DATE, allowNull: false },
      filename: { type: datatypes.STRING, allowNull: false },
      education: { type: datatypes.STRING, allowNull: false },
    },
  );
  return Profiles;
};
