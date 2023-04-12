/* eslint-disable react/display-name */
import React from 'react';

const WithHover = (Component) => {
  return class extends React.Component {
    state = { isHovered: false };

    handleMouseEnter = () => {
      this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
      this.setState({ isHovered: false });
    };

    render() {
      return (
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <Component isHovered={this.state.isHovered} {...this.props} />
        </div>
      );
    }
  };
};

export default WithHover;

// мы используем композицию функций, чтобы добавить к компоненту поведение при наведении курсора мыши.
// Для этого мы создаем функцию withHover, которая принимает компонент Component и возвращает новый класс,
// который добавляет состояние isHovered и обработчики событий onMouseEnter и onMouseLeave.
// Затем мы оборачиваем компонент Card в withHover, чтобы добавить этот функционал.
