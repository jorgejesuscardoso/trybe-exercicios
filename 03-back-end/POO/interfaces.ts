interface Person {
  name: string;
  info: string;
}

class Student implements Person {
  constructor(
    public name: string,
    public school: string
  ) {  }

  get info() {
    return `${this.name} estuda no colégio ${this.school}`;
  }
}

class Professor implements Person {
  constructor(
    public name: string,
    public school: string,
    public subject: string
  ) {  }

  get info() {
    return `${this.name} leciona ${this.subject} no colégio ${this.school}`;
  }
}

function printInfo(person: Person) {
  console.log(person.info);
}

const student = new Student('João', 'Escola de Jupiter');
const professor = new Professor('Maria', 'Escola de Marte', 'Matemática');

printInfo(student);
printInfo(professor);
