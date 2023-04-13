/* eslint-disable no-console */
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

function printArea(rectangle) {
  console.log(rectangle.area());
}

let rectangle = new Rectangle(4, 5);
let square = new Square(4);

printArea(rectangle); // 20
printArea(square); // 16

// Liskov Substitution Principle гласит, что любой объект типа T может быть заменен объектом типа S без нарушения свойств программы.
// Он означает, что подклассы должны быть заменяемы на свои суперклассы. Это означает, что любой код, написанный для суперкласса, должен работать и для подкласса.

// Принцип подстановки Барбары Лисков (LSP) утверждает, что объекты одного типа могут быть заменены объектами другого типа без нарушения правильности выполнения программы.

// В приведенном примере, Rectangle и Square являются объектами двух разных типов.
// Square наследует от Rectangle, но переопределяет метод area() для установки одинаковых значений для width и height.
// Несмотря на то, что квадрат является подтипом прямоугольника, ожидается, что метод area() в классе Square вернет корректное значение для квадрата.

// Однако, в примере метод printArea принимает объекты типа Rectangle, и если мы передадим объект Square, то метод printArea вернет некорректный результат.
// Это нарушает принцип LSP, так как Square не может заменить Rectangle в функции printArea без нарушения правильности выполнения программы.

// Чтобы исправить эту ситуацию, мы можем изменить функцию printArea следующим образом:

// function printArea(rectangle) {
//   if (!(rectangle instanceof Rectangle)) {
//     throw new Error('Invalid argument: must be an instance of Rectangle');
//   }
//   console.log(rectangle.area());
// }

// Таким образом, мы гарантируем, что функция printArea будет принимать только объекты типа Rectangle и его подтипов.
// Теперь функция будет работать корректно, и принцип LSP будет соблюден.
