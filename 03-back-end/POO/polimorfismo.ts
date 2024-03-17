/* class Animals {
  public turns: number = 0;
  public makeSound(sound:string) {
    console.log('Som emitido:' + sound);
  }
}

class Dogs extends Animals {
  setTurns(turns: number) {
    this.turns = turns;
  }

  makeSound(sound:string) {
   this.setTurns(5);
   console.log(`Som emitido: ${sound}, ${this.turns} vezes`);
  }

}

class Birds extends Animals {
  public specie: string;

    constructor() {
      super();
      this.specie = 'pássaro';
    }

    makeSound(sound:string) {
      console.log(`O som emitido pelo ${this.specie} é ${sound}`);
    }
}

const dogs = new Dogs();
dogs.makeSound('Au au au');

const birds = new Birds();
birds.makeSound('piu piu piu');
*/

class Animal {
  constructor(public name: string) {}
  move() { console.log(`${this.name} está se movendo.`); }
}
class Bird extends Animal {
  move() {
    super.move();
    console.log(`${this.name} está voando.`); 
  }
}

class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}

const a = new Animal('Tubarão');
const b = new Bird('Pardal');
const m = new Mammal('Cachorro');

const myMove = (animal: Animal) => animal.move();

myMove(a);
myMove(b);
myMove(m);

// Path: polimorfismo.ts


/* class Database {
  connect() {
    console.log('Conectando ao banco de dados genérico...');
  }
}

class MongoDatabase extends Database {
  connect() {
    console.log('Conectando ao banco de dados MongoDB...');
  }
}

class MySQLDatabase extends Database {
  connect() {
    console.log('Conectando ao banco de dados MySQL...');
  }
}

const db1 = new Database();
const db2 = new MongoDatabase();
const db3 = new MySQLDatabase();

const connectToDatabase = (db: Database) => db.connect();

connectToDatabase(db1);
connectToDatabase(db2);
connectToDatabase(db3);
 */