/* class Vehicle {
  constructor(
    public brand:string, 
    private automarker: string) {}

    public speed(): string {
      console.log(`O ${this.brand} acelera!`);
      return `O ${this.brand} acelera!`
    }
}

class Car extends Vehicle {
  constructor(
    brand: string, 
    automaker: string) {
      super(brand, automaker);
    }

    public speed(): string {
      console.log(`Acelera o ${this.brand}!!!!`);
      return super.speed() + `Acelera o ${this.brand}!`;
    }
}

let car = new Car('Uno', 'FIAT');
car.speed(); */

interface Contract {
  subject: string;
  clauses: string[];
  signatories: Person[];
  describe(): void;
}

class Person {
  private _name;
  constructor(name: string) {
  this._name = name;
  }

  get name() {
  return this._name;
  }
}

class NaturalPerson extends Person {
  private _cpf;
  constructor(name: string, cpf: string) {
  super(name);
  this._cpf = cpf;
  }

  get cpf() {
  return this._cpf;
  }
}

class LegalPerson extends Person {
  private _cnpj;
  constructor(name: string, cnpj: string) {
  super(name);
  this._cnpj = cnpj;
  }
}

class SalesContract implements Contract {
  private _signatories: Person[];
  private _clauses: string[];

  constructor() {
  this._signatories = [];
  this._clauses = [];
  }

  get signatories() { return [...this._signatories]; }
  get clauses() { return [...this._clauses]; }
  get subject() { return 'Sales'; }

  sign(signatory: Person) {
    this._signatories.push(signatory);
  }

  addClause(clause: string) {
    if (this._signatories.length > 0) return;
    this._clauses.push(clause);
  }

  describe() {
    console.log('....................');
    console.log(`Contrato: ${this.subject}`);
    this._clauses.forEach(clause => console.log(`Cláusula: ${clause}`));
    this._signatories.forEach(signatory => console.log(`Assinado por: ${signatory.name}`));
    console.log('....................\n');
  }
}

const s1 = new SalesContract();
const p1 = new NaturalPerson('João', '123.456.789-00');
const p2 = new NaturalPerson('Esa', '00.000.000/0000-00');
const lp = new LegalPerson('International Sales SA', '00.000.000/0000-00');

s1.describe();
s1.addClause('Entrega do produto em 30 dias');
s1.addClause('Pagamento em 3 parcelas');
s1.describe();
s1.sign(p1);
s1.sign(p2);
s1.describe();
s1.addClause('Entrega do produto em 30 dias');
s1.sign(lp);
s1.describe();