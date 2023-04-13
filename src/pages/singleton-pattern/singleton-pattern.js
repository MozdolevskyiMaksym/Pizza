import React, { Component } from 'react';
import './singleton-pattern.scss';

class SingletonPattern extends Component {
  constructor(props) {
    super(props);

    if (SingletonPattern.instance) {
      return SingletonPattern.instance;
    }

    SingletonPattern.instance = this;
  }

  render() {
    return (
      <div className="singleton-container">
        <h2>Singleton Component</h2>
        <p>
          This is an example of a React component that uses the Singleton
          pattern.
        </p>
      </div>
    );
  }
}

export default SingletonPattern;

// В этом компоненте мы создаем единственный экземпляр класса SingletonComponent, который будет использоваться каждый раз, когда компонент будет создаваться.
// Как только экземпляр будет создан, он сохраняется в статической переменной instance. В будущем, если компонент будет создан повторно, мы вернем сохраненный экземпляр.
