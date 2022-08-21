'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Zanr }) {
      // define association here
      this.hasMany(Zanr, {foreignKey: 'FilmId',as: 'zanr'})
      this.belongsTo(User, {foreignKey: 'UserId',as: 'user', onDelete: 'cascade'})
      //this.belongsTo(Zanr, {foreignKey: 'ZanrId', as: 'zanr'})
    }
  };
  Film.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    rating: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    trajanje: {
      allowNull: false,
      type: DataTypes.STRING
    },

  }, {
    sequelize,
    modelName: 'Film',
  });
  return Film;
};