'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Role, Film }) {
      // define association here
      this.hasOne(Role, {foreignKey: 'UserId',as: 'role'}),
      this.hasMany(Film, {foreignKey: 'UserId', as: 'film'})
      //this.belongsTo(Role, {foreignKey: 'RoleId',as: 'role'})

    }
  };
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastname:{
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        unique: true,
        type:DataTypes.STRING,
        validate: {
          isEmail: {
            msg: "nije mail"
          }
        }
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    defaultScope: {
      attributes: {
        exclude: ['email']
      }
    },
    modelName: 'User',
  });
  return User;
};