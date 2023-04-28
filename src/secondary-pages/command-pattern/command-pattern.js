import React, { useState } from 'react';
import './command-pattern.scss';

const CommandPattern = () => {
  const [output, setOutput] = useState('');

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const Command = function (execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  };

  const Calculator = {
    _currentValue: 0,
    _commands: [],

    executeCommand: function (command) {
      this._currentValue = command.execute(this._currentValue, command.value);
      this._commands.push(command);
    },

    undo: function () {
      const command = this._commands.pop();
      if (command) {
        this._currentValue = command.undo(this._currentValue, command.value);
      }
    },

    getCurrentValue: function () {
      return this._currentValue;
    },
  };

  const AddCommand = function (value) {
    this.execute = function (currentValue) {
      return currentValue + value;
    };

    this.undo = function (currentValue) {
      return currentValue - value;
    };

    this.value = value;
  };

  const SubtractCommand = function (value) {
    this.execute = function (currentValue) {
      return currentValue - value;
    };

    this.undo = function (currentValue) {
      return currentValue + value;
    };

    this.value = value;
  };

  const handleAddition = () => {
    const value = parseInt(document.getElementById('addition-input').value);
    const addCommand = new AddCommand(value);
    Calculator.executeCommand(addCommand);
    setOutput(Calculator.getCurrentValue());
  };

  const handleSubtraction = () => {
    const value = parseInt(document.getElementById('subtraction-input').value);
    const subtractCommand = new SubtractCommand(value);
    Calculator.executeCommand(subtractCommand);
    setOutput(Calculator.getCurrentValue());
  };

  const handleUndo = () => {
    Calculator.undo();
    setOutput(Calculator.getCurrentValue());
  };

  return (
    <div className="command-pattern">
      <h2>Command Pattern Example</h2>
      <div className="calculator">
        <div className="output">{output}</div>
        <div className="buttons">
          <div className="addition">
            <input
              type="text"
              id="addition-input"
              placeholder="Enter a number"
            />
            <button onClick={handleAddition}>Add</button>
          </div>
          <div className="subtraction">
            <input
              type="text"
              id="subtraction-input"
              placeholder="Enter a number"
            />
            <button onClick={handleSubtraction}>Subtract</button>
          </div>
          <div className="undo">
            <button onClick={handleUndo}>Undo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPattern;

// В этом примере используется паттерн Command для создания простого калькулятора, который может выполнять операции сложения, вычитания и отмены.

// Паттерн Command используется для инкапсуляции запроса в отдельный объект, который затем может быть передан в качестве параметра или сохранен для последующего выполнения.
// В этом примере каждая операция (сложение и вычитание) представлена отдельным классом, реализующим интерфейс

// Конструктор Command используется в примере как фабричный метод для создания объектов команд.
// Объект команды содержит функции execute и undo, которые выполняют определенные действия и отменяют их соответственно,
// и свойство value, которое хранит значение, связанное с командой. В данном конкретном примере эти объекты создаются непосредственно в методах компонента,
// но обычно в приложениях используются фабрики команд, которые создают объекты команд на основе различных параметров.

// Конструктор Command не используется явно в данном коде, но он является частью паттерна "Команда" и предоставляет удобный способ создания объектов команд.

// CommandPattern - компонент React, который отвечает за отображение и логику для калькулятора, который использует паттерн команд.
// Command - функция-конструктор, которая создает объект команды с методами execute, undo и свойством value.
// Calculator - объект, который представляет калькулятор и содержит свойства и методы для выполнения операций.
// executeCommand - метод Calculator, который принимает команду и выполняет ее, сохраняя ее в истории команд.
// undo - метод Calculator, который отменяет последнюю выполненную команду.
// getCurrentValue - метод Calculator, который возвращает текущее значение калькулятора.
// AddCommand - функция-конструктор, которая создает объект команды для выполнения операции сложения.
// SubtractCommand - функция-конструктор, которая создает объект команды для выполнения операции вычитания.
// handleAddition - функция-обработчик события клика на кнопке сложения. Создает новый объект команды сложения и передает его в метод executeCommand объекта Calculator. Затем обновляет состояние компонента, отображая текущее значение калькулятора.
// handleSubtraction - функция-обработчик события клика на кнопке вычитания. Создает новый объект команды вычитания и передает его в метод executeCommand объекта Calculator. Затем обновляет состояние компонента, отображая текущее значение калькулятора.
// handleUndo - функция-обработчик события клика на кнопке отмены. Вызывает метод undo объекта Calculator, который отменяет последнюю выполненную команду. Затем обновляет состояние компонента, отображая текущее значение калькулятора.
