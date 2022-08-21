'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, {foreignKey: 'UserId',as: 'user',onDelete: 'cascade'})
      //this.hasMany(User, {foreignKey: 'RoleId',as: 'user'})
    }
  };
  Role.init({
     roleType:{
      allowNull: false,
      type: DataTypes.STRING
    },
    // UserId: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER
    // }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};