const { Address } = require('../models');

const getAllByEmployeeId = async (employeeId) => {
  const addresses = await Address.findAll({
    where: { employeeId },
  });

  return addresses;
}

module.exports = {
  getAllByEmployeeId,
};