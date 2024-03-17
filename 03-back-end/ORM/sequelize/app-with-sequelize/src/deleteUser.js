// src/deleteUser.js

const { User } = require('./models');

(async () => {
  const user = await User.destroy(
    { where: { id: 4 } },
  );
  console.log(user);
})();