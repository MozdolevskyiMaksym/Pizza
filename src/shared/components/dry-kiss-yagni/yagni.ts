/* eslint-disable security/detect-object-injection */

type ProductType = {
  name: string;
  description: string;
  price: number;
};

// Before Refactoring
export function calculateTotalPrice(products: ProductType[]) {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
  }
  return totalPrice;
}

// After Refactoring
export function calculateTotalPrice2(products: ProductType[]) {
  return products.reduce(
    (totalPrice, product) => totalPrice + product.price,
    0
  );
}

/////////////////////////////////////////////////////////////////

type UserType = {
  firstName: string;
  lastName: string;
};

// Before Refactoring
export function getUserFullName(user: UserType) {
  return `${user.firstName} ${user.lastName}`;
}

export function getUserAvatar(user: { avatarUrl: string }) {
  return user.avatarUrl || '/default-avatar.png';
}

// After Refactoring
export function getUserFullName2({ firstName, lastName }: UserType) {
  return `${firstName} ${lastName}`;
}

export function getUserAvatar2({
  avatarUrl = '/default-avatar.png',
}: {
  avatarUrl: string;
}) {
  return avatarUrl;
}
