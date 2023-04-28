/* eslint-disable security/detect-object-injection */
/* eslint-disable no-console */
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Underflow';
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return 'No elements in Queue';
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printQueue() {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }
}

let queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.printQueue()); // 10 20 30

console.log(queue.front()); // 10

queue.dequeue();

console.log(queue.printQueue()); // 20 30

// Одной из таких структур данных является "очередь" (queue) - это абстрактный тип данных,
// который представляет собой коллекцию элементов, у которых есть две основные операции: добавление элемента в конец очереди (enqueue)
//  и удаление элемента из начала очереди (dequeue).
// Очередь работает по принципу "первым пришел - первым ушел" (FIFO - first in, first out).
