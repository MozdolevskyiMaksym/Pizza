import React from 'react';
import './composition.scss';

function Button(props) {
  // or we can import another button
  return (
    <button className="composition-button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

class AlertButton extends React.Component {
  handleClick = () => {
    alert('Button clicked!');
  };

  render() {
    return (
      <div className="alert-button">
        <Button label={this.props.label} onClick={this.handleClick} />
      </div>
    );
  }
}

const Composition = () => {
  return (
    <div className="composition">
      <h1>Alert Button</h1>
      <AlertButton label="Click me!" />
    </div>
  );
};

export default Composition;

// В данном компоненте используется композиция, где компонент AlertButton использует другой компонент Button для рендеринга кнопки,
// а также добавляет свою собственную функциональность обработки клика через handleClick.
// Таким образом, мы получаем гибкость и повторное использование кода, при этом не нарушая принципы SOLID.
// Стили для компонента можно добавить в файл styles.scss в соответствующих классах button и alert-button.
