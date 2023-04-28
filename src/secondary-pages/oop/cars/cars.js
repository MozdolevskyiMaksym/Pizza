/* eslint-disable no-console */
import React, { Component } from 'react';
import './cars.scss';

// Абстрактный класс Машина
class Car {
  constructor(make, model, year, id) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    return `${this.make} ${this.model} engine started.`;
  }

  stopEngine() {
    return `${this.make} ${this.model} engine stopped.`;
  }

  // Полиморфный метод, переопределяется в дочерних классах
  drive() {
    return `Driving a ${this.make} ${this.model}...`;
  }
}

// Класс Легковая Машина наследуется от класса Машина
class CarSedan extends Car {
  constructor(make, model, year, id, numDoors) {
    super(make, model, year, id);
    this.numDoors = numDoors;
  }

  // Переопределение метода drive в дочернем классе CarSedan
  drive() {
    return `Driving a ${this.make} ${this.model} sedan with ${this.numDoors} doors.`;
  }
}

// Класс Спортивная Машина наследуется от класса Машина
class CarSport extends Car {
  constructor(make, model, year, id, topSpeed) {
    super(make, model, year, id);
    this.topSpeed = topSpeed;
  }

  // Переопределение метода drive в дочернем классе CarSport
  drive() {
    return `Driving a ${this.make} ${this.model} sportscar with top speed of ${this.topSpeed} mph.`;
  }
}

// Компонент React, который использует классы Легковая Машина и Спортивная Машина
class Cars extends Component {
  constructor(props) {
    super(props);

    // Создаем экземпляры классов и добавляем их в состояние
    this.state = {
      sedan: new CarSedan('Toyota', 'Camry', 2022, 1, 4),
      sportscar: new CarSport('Porsche', '911 GT3', 2022, 2, 197),
      driveInformation: '',
      startEngineInformation: '',
    };

    // Вызываем методы классов
    this.state.sedan.startEngine();
    this.state.sedan.drive();

    this.state.sportscar.startEngine();
    this.state.sportscar.drive();
  }

  // Приватный метод для отображения дополнительной информации
  #renderAdditionalInfo = (car) => {
    // _renderAdditionalInfo
    if (car instanceof CarSedan) {
      return <p>Number of Doors: {car.numDoors}</p>;
    } else if (car instanceof CarSport) {
      return <p>Top Speed: {car.topSpeed} mph</p>;
    } else {
      return null;
    }
  };

  handleCar = (car) => {
    this.setState({ startEngineInformation: car.startEngine() });
    this.setState({ driveInformation: car.drive() });
    this.setState({ stopEngineInformation: car.stopEngine() });
  };

  componentDidMount() {
    this.setState({ cars: [this.state.sedan, this.state.sportscar] });
  }

  render() {
    const { sedan, sportscar } = this.state;
    const cars = [sedan, sportscar];

    return (
      <div className="car-container">
        <h1>Car Component</h1>
        {cars.map((car) => (
          <div
            className="card"
            key={car.id}
            onClick={() => this.handleCar(car)}
          >
            <h2>
              {car.make} {car.model}
            </h2>
            <p>Year: {car.year}</p>
            {this.#renderAdditionalInfo(car)}
          </div>
        ))}
        <div className="card card-additional-information">
          <p>{this.state.startEngineInformation}</p>
          <p>{this.state.driveInformation}</p>
          <p>{this.state.stopEngineInformation}</p>
        </div>
      </div>
    );
  }
}

export default Cars;
