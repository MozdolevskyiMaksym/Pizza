import React, { useState } from 'react';
import './agregation.scss';

const Counter = ({ count, onIncrement, onDecrement }) => {
  const [animation, setAnimation] = useState('');

  function handleIncrement() {
    setAnimation('animate__bounceIn');
    setTimeout(() => {
      setAnimation('');
      onIncrement();
    }, 500);
  }

  function handleDecrement() {
    setAnimation('animate__backOutDown');
    setTimeout(() => {
      setAnimation('');
      onDecrement();
    }, 500);
  }

  return (
    <div className={`counter animate__animated ${animation}`}>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

class Agregation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  /**
   * Публичный метод, который вызывается при клике на кнопку "+"
   */
  handleIncrement() {
    this._increment();
  }

  /**
   * Приватный метод, который увеличивает счетчик на 1 и обновляет состояние компонента.
   */
  _increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  /**
   * Публичный метод, который вызывается при клике на кнопку "-"
   */
  handleDecrement() {
    this._decrement();
  }

  /**
   * Приватный метод, который уменьшает счетчик на 1 и обновляет состояние компонента.
   */
  _decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div className="agregation">
        <h1>Counter App</h1>
        <Counter
          count={this.state.count}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Agregation;

// В этом примере я создал компонент Counter, который отображает текущее значение счетчика и кнопки для увеличения и уменьшения значения.
// Компонент Counter представлен в виде функционального компонента, который принимает три пропса:
// count - текущее значение счетчика,
// onIncrement - функция для увеличения счетчика,
// onDecrement - функция для уменьшения счетчика.

// Затем мы создали классовый компонент Agregation, который использует компонент Counter и хранит текущее значение счетчика в своем состоянии.
// Функции handleIncrement и handleDecrement обновляют значение счетчика в состоянии классового компонента Agregation.
// Компонент Counter получает функции обратного вызова handleIncrement и handleDecrement в качестве пропсов.

// Это демонстрирует пример агрегации, где компонент Agregation агрегирует компонент Counter и обрабатывает состояние и обновление функций для дочернего компонента.
