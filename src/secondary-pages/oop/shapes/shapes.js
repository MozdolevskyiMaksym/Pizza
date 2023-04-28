import React, { Component } from 'react';
import './shapes.scss';

class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();

    // Приватное свойство, которое недоступно извне
    let _radius = radius;

    // Публичный метод для доступа к приватному свойству
    this.getRadius = function () {
      return _radius;
    };
    this.setRadius = function (value) {
      if (value < 0) {
        throw new Error('Radius can`t be negative');
      }
      _radius = value;
    };
  }

  getArea() {
    return Math.PI * this.getRadius() * this.getRadius();
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    // this.width = width;
    // this.height = height;
    this.setWidth = function (value) {
      if (value < 0) {
        throw new Error('Width can`t be negative');
      }
      this.width = value;
    };

    this.setHeight = function (value) {
      if (value < 0) {
        throw new Error('Height can`t be negative');
      }
      this.height = value;
    };
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.setBase = function (value) {
      if (value < 0) {
        throw new Error('Base can`t be negative');
      }
      this.base = value;
    };
    2;
    this.setHeight = function (value) {
      if (value < 0) {
        throw new Error('Height can`t be negative');
      }
      this.height = value;
    };
    this.base = base;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }
}

class Shapes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      circle: new Circle(5),
      rectangle: new Rectangle(10, 20),
      triangle: new Triangle(8, 6),
    };
  }

  render() {
    const { circle, rectangle, triangle } = this.state;

    return (
      <div className="shapes">
        <h1>Shapes</h1>
        <ul>
          <li>
            <h2>Circle</h2>
            <p>Radius: {circle.getRadius()}</p>
            <p>Area: {circle.getArea()}</p>
            <div className="circle"></div>
          </li>
          <li>
            <h2>Rectangle</h2>
            <p>Width: {rectangle.width}</p>
            <p>Height: {rectangle.height}</p>
            <p>Area: {rectangle.getArea()}</p>
            <div className="rectangle"></div>
          </li>
          <li>
            <h2>Triangle</h2>
            <p>Base: {triangle.base}</p>
            <p>Height: {triangle.height}</p>
            <p>Area: {triangle.getArea()}</p>
            <div className="triangle"></div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Shapes;
