/* eslint-disable no-console */
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновляем состояние, чтобы следующий рендер показал запасной интерфейс
    console.log('error boundary: ', error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Логируем ошибку в консоль
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Возвращаем запасной интерфейс, если произошла ошибка
      <div className="error-boundary">
        <h1 className="error-boundary__text">Something went wrong.</h1>
        <div className="error-boundary__animation">😱</div>
      </div>;
    }
    // Иначе отображаем дочерние компоненты
    return this.props.children;
  }
}

export default ErrorBoundary;
