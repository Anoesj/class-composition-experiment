import { compose } from './compose.js';

import { CanBreathe } from './behaviors/CanBreathe.js';
import { CanBark } from './behaviors/CanBark.js';
import { CanEat } from './behaviors/CanEat.js';
import { CanPoop } from './behaviors/CanPoop.js';
import { CanHunt } from './behaviors/CanHunt.js';

window.writeLog = (...logs) => {
  for (const log of logs) {
    const p = document.createElement('p');
    p.innerHTML = log;
    document.body.appendChild(p);
  }
};

class Entity {
  constructor (name) {
    writeLog(`I'm a entity called ${name}`);
    this.name = name;
  }
}

class Bacteria extends compose({ base: Entity, CanEat, CanPoop }) {
  constructor (name) {
    super(...arguments);
    writeLog(`I'm a bacteria`);
  }
}

class Animal extends compose({ base: Entity, CanBreathe, CanEat, CanPoop }) {
  constructor () {
    super(...arguments);
    writeLog(`I'm an animal`);
  }
}

class Dog extends compose({ base: Animal, CanBark }) {
  constructor (name) {
    super(...arguments);
    writeLog(`I'm a dog`);
  }
}

class GermanShepherd extends compose({ base: Dog, CanHunt }) {
  constructor (name) {
    super(...arguments);
    writeLog(`I'm a german shepherd`);
  }
}


const EColi = new Bacteria('EColi');
EColi.eat();
EColi.poop();

writeLog('<hr>');

const Sjonnie = new Dog('Sjonnie');
Sjonnie.eat();
Sjonnie.bark();
Sjonnie.poop();
Sjonnie.breathe();

writeLog('<hr>');

const Jack = new GermanShepherd('Jack');
Jack.bark();
Jack.hunt();
Jack.eat();
Jack.poop();
Jack.breathe();

console.log(EColi);
console.log(Sjonnie);
console.log(Jack);