import React, { Component } from 'react';
import EventEmitter from 'events';

import './custom-event.scss';

class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.emitter = new EventEmitter(); // Создание объекта EventEmitter
    this.buttonRef = React.createRef(); // Создание ссылки на кнопку
  }

  handleClick = () => {
    // Генерируем событие 'customClick'
    this.emitter?.emit('customClick', 'Button clicked!');
  };

  render() {
    return <button onClick={this.handleClick}>{this.props.children}</button>;
  }
}

// В этом коде создается React-компонент CustomButton, который имеет ссылку на EventEmitter и ссылку на кнопку (buttonRef), которые инициализируются в конструкторе.
// В методе handleClick определяется обработчик события клика на кнопке, который генерирует событие 'customClick' при помощи метода emit объекта emitter.
// Метод render возвращает кнопку, которая вызывает обработчик клика handleClick, и рендерит this.props.children внутри кнопки.

class CustomEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.buttonRef = React.createRef(); // Создание ссылки на компонент CustomButton
  }

  componentDidMount() {
    // Подписка на событие 'customClick' при монтировании компонента
    if (this.buttonRef.current) {
      this.buttonRef.current.emitter?.addListener('customClick', (message) => {
        this.setState({ message: message }); // Установка состояния с сообщением о событии
      });
    }
  }

  componentWillUnmount() {
    // Отписка от события 'customClick' при размонтировании компонента
    if (this.buttonRef.current) {
      this.buttonRef.current.emitter?.removeListener(
        'customClick',
        (message) => {
          this.setState({ message: message }); // Удаление состояния сообщения
        }
      );
    }
  }

  render() {
    return (
      <div className="custom-event">
        <CustomButton ref={this.buttonRef}>Click Me!</CustomButton>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default CustomEvent;

// В этом коде создается React-компонент CustomEvent, который имеет состояние message и ссылку на CustomButton, которые инициализируются в конструкторе.

// В методе componentDidMount компонента CustomEvent устанавливается подписка на событие 'customClick'
// при помощи метода addListener объекта emitter, который вызывается из объекта buttonRef.current.
