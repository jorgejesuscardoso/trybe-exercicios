class Person {
  // Atributos
  name: string;
  age: number;
  height: number;

  // Métodos
  // Método construtor

  constructor(n: string, a:number, h: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.age = a;
    this.height = h;
  }

  // Método qualquer de exmplo

  sleep() {
    console.log(`${this.name} is sleeping, zzzzzzzz`);
  }
}

const p1 = new Person('Maria', 58, 171); // Saída: Creating person Maria
const p2 = new Person('João', 66, 175); // Saída: Creating person João

console.log(p1); // Saída: Person { name: 'Maria', age: 58, height: 171 }
console.log(p2); // Saída: Person { name: 'João', age: 66, height: 175 }

p1.sleep(); // Saída: Maria is sleeping, zzzzzzzz
p2.sleep(); // Saída: João is sleeping, zzzzzzzz
