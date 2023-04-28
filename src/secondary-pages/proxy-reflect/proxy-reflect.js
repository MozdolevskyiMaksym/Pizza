/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#eaeaea',
  },
  input: {
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#f5f5f5',
  },
  button: {
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#61dafb',
    color: '#fff',
    cursor: 'pointer',
  },
  text: {
    margin: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#61dafb',
  },
};

const withLogging = (obj) => {
  return new Proxy(obj, {
    get(target, prop) {
      console.log(`Getting ${prop}`);
      return Reflect.get(target, prop);
    },
    set(target, prop, value) {
      console.log(`Setting ${prop} to ${value}`);
      return Reflect.set(target, prop, value);
    },
    deleteProperty(target, prop) {
      console.log(`Deleting ${prop}`);
      return Reflect.deleteProperty(target, prop);
    },
  });
};

const ProxyComponent = () => {
  const [state, setState] = useState(withLogging({}));
  const [input, setInput] = useState('');

  const handleClick = () => {
    setState(withLogging({ text: input }));
    setInput('');
  };

  useEffect(() => {
    console.log('State updated:', state);
  }, [state]);

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={styles.button} onClick={handleClick}>
        Add Text
      </button>
      {state.text && <p style={styles.text}>{state.text}</p>}
    </div>
  );
};

export default ProxyComponent;

// Этот код реализует React компонент ProxyComponent, который содержит логику использования Proxy и Reflect.

// Proxy - это механизм в JavaScript, который позволяет перехватывать и изменять поведение объектов и их свойств.
// В этом компоненте мы создаем объект withLogging, который использует Proxy для логирования операций чтения, записи и удаления свойств.
// Внутри withLogging мы передаем в new Proxy() объект, который нужно обернуть, и объект-обработчик с функциями, которые будут вызваны при обращении к свойствам объекта.

// В этом компоненте мы используем withLogging для отслеживания изменений состояния компонента state.
// Внутри useState мы передаем withLogging({}), чтобы создать пустой объект, который будет служить начальным значением для state.
// При каждом вызове setState мы используем withLogging, чтобы создать новый объект состояния с обновленным свойством text.

// Reflect - это встроенный объект в JavaScript, который предоставляет методы для работы с объектами и операциями, поддерживаемыми Proxy.
// В этом компоненте мы используем Reflect.get, Reflect.set и Reflect.deleteProperty для обращения к свойствам объекта и выполнения соответствующих действий,
// когда эти свойства читаются, записываются или удаляются.

// В функции handleClick мы вызываем setState с новым объектом состояния, содержащим свойство text, которое мы извлекаем из состояния input.
// При каждом изменении состояния state, компонент рендерит свойства input и state.text.
// В зависимости от наличия значения в state.text, мы отображаем элемент p с текстом внутри блока div.
// Когда состояние изменяется, мы логируем обновленное состояние в консоль с помощью useEffect.
