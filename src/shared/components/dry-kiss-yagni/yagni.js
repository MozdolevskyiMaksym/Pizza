/* eslint-disable security/detect-object-injection */
// Before Refactoring
export function calculateTotalPrice(products) {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
  }
  return totalPrice;
}

// After Refactoring
export function calculateTotalPrice2(products) {
  return products.reduce(
    (totalPrice, product) => totalPrice + product.price,
    0
  );
}

/////////////////////////////////////////////////////////////////

// Before Refactoring
export function getUserFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

export function getUserAvatar(user) {
  return user.avatarUrl || '/default-avatar.png';
}

// After Refactoring
export function getUserFullName2({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

export function getUserAvatar2({ avatarUrl = '/default-avatar.png' }) {
  return avatarUrl;
}
