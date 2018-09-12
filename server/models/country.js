
export default (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pictures: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  Country.associate = function(models) {
    // associations can be defined here
  };
  return Country;
};