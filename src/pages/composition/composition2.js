class Engine {
  constructor(p) {
    this.power = p;
  }
}

export class Car {
  constructor() {
    this.model = 'Porshe';
    this.engine = new Engine(360);
  }
}
