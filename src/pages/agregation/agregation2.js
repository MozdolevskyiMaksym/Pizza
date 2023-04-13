class Engine {
  constructor(power) {
    this.power = power;
  }
}

class Car {
  constructor(engine) {
    this.model = 'Porshe';
    this.engine = engine;
  }
}

const goodEngine = new Engine(360);
export const porshe = new Car(goodEngine);
