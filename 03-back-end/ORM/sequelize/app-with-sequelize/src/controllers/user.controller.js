const UserService = require('../services/user.service');

const error500Message = 'Algo deu errado';

const getAll = async (_req, res) => {
 try {
    const users = await UserService.getAll();
  
    res.status(200).json(users);
 } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
 }
};

const getById = async (req, res) => {
   try {
      const { id } = req.params;
   
      const user = await UserService.getById(id);
   
      if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
   
      res.status(200).json(user);
   } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
   }
};

const getByIdAndEmail = async (req, res) => {
   try {
      const { id } = req.params;
      const { email } = req.query;
   
      const user = await UserService.getByIdAndEmail(id, email);
   
      if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
   
      res.status(200).json(user);
   } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error500Message });
   }
};

const createUser = async (req, res) => {
   try {
      const { fullName, email, phoneNUm } = req.body;
   
      const newUser = await UserService.createUser(fullName, email, phoneNUm);
      
      res.status(201).json(newUser);
   } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error500Message });
   }
};

const updateUser = async (req, res) => {
   try {
      const { id } = req.params;
      const { fullName, email } = req.body;
   
      const updatedUser = await UserService.updateUser(id, fullName, email);
   
      if (!updatedUser) return res.status(404).json({ message: 'Usuário não encontrado' });

      res.status(200).json(updatedUser);
   } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error500Message });
   }
};

const deleteUser = async (req, res) => {
   try {
      const { id } = req.params;
   
      const deletedUser = await UserService.deleteUser(id);
   
      if (!deletedUser) return res.status(404).json({ message: 'Usuário não encontrado' });
   
      res.status(204).end();
   } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error500Message });
   }
};

module.exports = {
   getAll,
   getById,
   getByIdAndEmail,
   createUser,
   updateUser,
   deleteUser,
};