'use strict';
import { DataTypes } from "sequelize";
import { sequelize } from '../config/sequelize.js'

export const smsMessage = sequelize.define(
  'smsMessage',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'smsMessage',
  }
);
