/* eslint-disable security/detect-object-injection */
// DRY (Don't Repeat Yourself)

// Повторение кода
export function calculateCircleArea(radius: number) {
  return 3.14 * radius * radius;
}

export function calculateCircleCircumference(radius: number) {
  return 2 * 3.14 * radius;
}

// Good example
const PI = 3.14;

export function calculateCircleArea2(radius: number) {
  return PI * radius * radius;
}

export function calculateCircleCircumference2(radius: number) {
  return 2 * PI * radius;
}

///////////////////////////////////////////////////////////////////////

// Before Refactoring
type ProductType = {
  name: string;
  description: string;
  price: number;
};
export function renderProductList(products: ProductType[]) {
  let productListHtml = '';

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    productListHtml += `
      <div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <span>${product.price}</span>
      </div>
    `;
  }

  return productListHtml;
}

// After Refactoring
export function renderProductList2(products: ProductType[]) {
  return products
    .map(
      (product) => `
    <div>
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <span>${product.price}</span>
    </div>
  `
    )
    .join('');
}
