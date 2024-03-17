const { Address, Employee } = require('../models');
const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
  });

  return employee;
};

const insert = async ({  firstName, lasName, age, city, street, number }) => {
  const result = await sequelize.transaction(async (t) => {
    const employee = await Employee.create(
      { firstName, lasName, age },
      { transaction: t }
    );
    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t }
    );
    return employee;
  });
  return result;
};


module.exports = {
  getAll,
  getById,
  insert,
};
