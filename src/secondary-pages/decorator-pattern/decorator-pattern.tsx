import React from 'react';
import './decorator-pattern.scss';

// Интерфейс декорируемого компонента
interface ComponentInterface {
  render(): JSX.Element;
}

// Базовый компонент, который мы будем декорировать
class BaseComponent implements ComponentInterface {
  render(): JSX.Element {
    return <div className="base">Hello World</div>;
  }
}

// Декоратор, который добавляет красный цвет к компоненту
class RedColorDecorator implements ComponentInterface {
  component: ComponentInterface;

  constructor(component: ComponentInterface) {
    this.component = component;
  }

  render(): JSX.Element {
    return <div className="red-color">{this.component.render()}</div>;
  }
}

// Декоратор, который добавляет анимацию мерцания к компоненту
class BlinkAnimationDecorator implements ComponentInterface {
  component: ComponentInterface;

  constructor(component: ComponentInterface) {
    this.component = component;
  }

  render(): JSX.Element {
    return <div className="blink-animation">{this.component.render()}</div>;
  }
}

// Компонент, использующий декораторы
const DecoratorPattern = () => {
  // Создаем базовый компонент
  const baseComponent = new BaseComponent();

  // Декорируем компонент красным цветом
  const redComponent = new RedColorDecorator(baseComponent);

  // Декорируем компонент анимацией мерцания
  const blinkComponent = new BlinkAnimationDecorator(redComponent);

  // Возвращаем итоговый компонент
  return blinkComponent.render();
};

export default DecoratorPattern;

// Этот пример декорирует базовый компонент BaseComponent с помощью двух декораторов: RedColorDecorator и BlinkAnimationDecorator.
// Первый добавляет красный цвет к компоненту, а второй добавляет анимацию мерцания.
// В итоге мы получаем компонент DecoratedComponent, который отображает текст "Hello World" с красным цветом и анимацией мерцания.
