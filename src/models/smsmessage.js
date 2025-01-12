'use strict';
import { Sequelize } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class smsMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  smsMessage.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    phone: {
      type: Sequelize.STRING
    },
    message: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'smsMessage',
  });
  return smsMessage;
};