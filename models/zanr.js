'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zanr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Film }) {
      // define association here
      //this.belongsTo
      this.belongsTo(Film, {foreignKey: 'FilmId', as: 'film', onDelete: 'cascade'})
      //this.hasMany(Film, {foreignKey: 'ZanrId',as: 'film'})

    }
  };
  Zanr.init({
    tipZanra: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Zanr',
  });
  return Zanr;
};