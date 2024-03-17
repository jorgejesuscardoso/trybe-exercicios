interface User {
  id?: number;
  name: string;
  age: number;
}

class UserModel {
  private database: User[] = [];
  private lastId = 0;

  create(user: User) {
    const newUser = {
      ...user,
      id: this.lastId++
    }
    this.database.push(newUser);

    return newUser;
  }

  getAll(): User[] {
    return [...this.database];
  }
}

class UserService {
  constructor(protected userModel: UserModel) {}

  create(user: User): User {
    if (user.age > 200) {
      throw new Error('Você não pode ter mais de 200 anos!');
    }
    return this.userModel.create(user);
  }

  getAll(): User[] {
    return this.userModel.getAll();
  }
}


const userModel = new UserModel();
const userService = new UserService(userModel);

userService.create({ name: 'Luiz', age: 20 });
userService.create({ name: 'Maria', age: 30 });

console.log("service", userService.getAll());
