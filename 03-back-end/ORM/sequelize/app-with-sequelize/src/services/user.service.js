const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);

  if (!user) return null;

  return user;
}

const getByIdAndEmail = async (id, email) => {
  const user = await User.findOne({ where: { id, email } });

  if (!user) return null;

  return user;
}

const createUser = async (fullName, email, phoneNUm) => {
  const newUser = await User.create({ fullName, email, phoneNUm });

  return newUser;
}

const updateUser = async (id, fullName, email) => {
  const [updatedUser] = await User.update({ fullName, email }, { where: { id } });

  console.log(updatedUser);
  return updatedUser;
}

const deleteUser = async (id) => {
  const deletedUser = await User.destroy({ where: { id } });

  console.log(deletedUser);
  return deletedUser;
}

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
};