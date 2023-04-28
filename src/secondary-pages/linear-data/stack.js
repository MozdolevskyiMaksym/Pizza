/* eslint-disable no-console */

// Стек представляет собой тип данных, работающий по принципу LIFO (Last In First Out).
// Элементы добавляются и удаляются только с одного конца стека, называемого "вершиной".

// В этом примере мы определяем класс Stack, который представляет стек.
// Мы добавляем элементы в стек с помощью метода push, удаляем элементы из стека с помощью метода pop,
// просматриваем элемент на вершине стека с помощью метода peek, проверяем, пуст ли стек, с помощью метода isEmpty,
// узнаем размер стека с помощью метода size и очищаем стек с помощью метода clear. Мы создаем экземпляр стека и добавляем в него три элемента - "apple", "banana" и "orange".
// Затем мы просматриваем элемент на вершине стека, удаляем элемент на вершине стека, просматриваем новый элемент на вершине стека и узнаем размер стека.

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const stack = new Stack();
stack.push('apple');
stack.push('banana');
stack.push('orange');
console.log(stack.peek()); // Результат: "orange"
console.log(stack.pop()); // Результат: "orange"
console.log(stack.peek()); // Результат: "b
