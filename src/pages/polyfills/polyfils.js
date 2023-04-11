import React, { useState } from 'react';
import 'core-js/stable'; // импортируем полифилл для ECMAScript стандартных методов
import 'regenerator-runtime/runtime'; // импортируем полифилл для async/await и других фич ECMAScript

import './polyfills.scss';

const Polyfills = () => {
  const [isDateSupported, setIsDateSupported] = useState(() => {
    try {
      // Проверяем поддержку объекта Date конструктором
      new Date('2012-01-01');
      return true;
    } catch (e) {
      return false;
    }
  });

  const handleDateSupport = () => {
    setIsDateSupported((prev) => !prev);
  };

  return (
    <div className="polyfills">
      <p>
        {isDateSupported
          ? 'Объект Date поддерживается'
          : 'Объект Date не поддерживается'}
      </p>
      <div className="polyfills-actions">
        <button onClick={handleDateSupport}>Change Support</button>
      </div>
    </div>
  );
};

export default Polyfills;

// Здесь мы импортируем полифиллы core-js/stable и regenerator-runtime/runtime, которые содержат реализации недостающих функций и методов для старых браузеров,
// и используем их в компоненте. Также в компоненте мы проверяем поддержку объекта Date конструктором, и выводим сообщение об этом на страницу.

// Импортирование полифилла core-js/stable обеспечивает поддержку стандартных методов ECMAScript,
// которые могут быть не реализованы в определенных версиях браузеров или средах выполнения JavaScript.

// Некоторые из методов, которые могут быть полифиллированы с помощью core-js/stable, включают:

// Массивы: Array.from(), Array.isArray(), Array.of(), Array.prototype.fill(), Array.prototype.find(), Array.prototype.findIndex(), Array.prototype.includes()

// Строки: String.fromCodePoint(), String.prototype.endsWith(), String.prototype.includes(), String.prototype.padEnd(),
// String.prototype.padStart(), String.prototype.repeat(), String.prototype.startsWith()

// Объекты: Object.assign(), Object.entries(), Object.freeze(), Object.keys(), Object.values()

// Другие: Promise, Set, Map, Symbol

///////////////////////////////////////////////////////////////////////////////////////////////

// Импортирование полифилла regenerator-runtime/runtime обеспечивает поддержку следующих функций и возможностей ECMAScript:

// Асинхронное программирование с помощью async/await
// Генераторы и итераторы, используемые вместе с yield и for...of циклами
// Promise, включая методы Promise.all(), Promise.race() и Promise.prototype.finally()
// Другие функции, такие как Object.assign(), Array.prototype.includes(), Symbol(), Map и Set
// regenerator-runtime - это полифилл, который реализует функциональность генераторов и итераторов на основе генераторов, которая является частью ECMAScript 6.
// Эта библиотека позволяет использовать современные конструкции JavaScript, такие как async/await, в браузерах и средах выполнения JavaScript,
// которые не поддерживают их стандартным способом.
