import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img
          className="product-card__image"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="product-card__content">
        <h2 className="product-card__title">{product.name}</h2>
        <p className="product-card__description">{product.description}</p>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;

// 1. Single Responsibility Principle (SRP) - компонент "ProductCard" имеет только одну ответственность:
// показывать информацию о товаре и его изображение. Это помогает сделать компонент более понятным и легким для тестирования.

// 2. Open-Closed Principle (OCP) - компонент "ProductCard" закрыт для изменения и открыт для расширения.
// Мы можем добавлять новые свойства товара в объект "product" без изменения кода компонента.

// 3. Dependency Inversion Principle (DIP) - компонент "ProductCard" зависит только от объекта "product", который предоставляет информацию о товаре.
// Это позволяет легко заменить источник информации о товаре, например, использовать API вместо локаль
