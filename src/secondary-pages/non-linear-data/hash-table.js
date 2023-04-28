/* eslint-disable no-console */
/* eslint-disable security/detect-object-injection */

// Хеш-таблица (HashTable) - это структура данных, которая позволяет хранить пары "ключ-значение" и быстро находить значения по ключу.
// на основана на хеш-функции, которая преобразует ключ в индекс массива, где хранится значение.
// В идеальном случае, каждый ключ должен преобразовываться в уникальный индекс, что обеспечивает константное время доступа к значению.

// В этом примере мы создаем класс HashTable, который имеет методы put (добавление элемента), get (получение элемента) и remove (удаление элемента).
// Хеш-функция реализована методом hash, который преобразует ключ в индекс массива.
// Массив хранит массивы ключ-значение, чтобы можно было обрабатывать коллизии (ситуации, когда два разных ключа дают одинаковый хеш).

class HashTable {
  constructor() {
    this.table = new Array(100); // создаем массив фиксированного размера
  }

  // хеш-функция для получения индекса в массиве по ключу
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  // добавление элемента в таблицу
  put(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  // получение элемента по ключу
  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        return this.table[index][i][1];
      }
    }
    return undefined;
  }

  // удаление элемента по ключу
  remove(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        const value = this.table[index][i][1];
        this.table[index].splice(i, 1);
        return value;
      }
    }
    return undefined;
  }
}

// В этом примере мы создаем объект HashTable, добавляем в него два элемента с ключами "apple" и "banana" и значениями 10 и 20 соответственно.
// Затем мы получаем значение элемента по ключу

const table = new HashTable();
table.put('apple', 10);
table.put('banana', 20);
console.log(table.get('apple')); // 10
console.log(table.get('banana')); // 20
table.remove('apple');
console.log(table.get('apple')); // undefined
