/* eslint-disable no-console */
function User(name) {
  this.name = name;
  let _age = 1;
  this.displayInfo = function () {
    console.log('Имя: ' + this.name + '; возраст: ' + _age);
  };
  this.getAge = function () {
    return _age;
  };
  this.setAge = function (age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      _age = age;
    } else {
      console.log('Недоступное значение');
    }
  };
}

let tom = new User('Tom');
console.log('toms age: ', tom._age); // undefined
console.log('toms age 2: ', tom.getAge());
tom.setAge(10);
console.log('toms age 3: ', tom.getAge());
