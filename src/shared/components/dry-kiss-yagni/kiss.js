/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

// KISS (Keep It Simple, Stupid)

// Сложный код
const calculateDiscountedPrice = (price, discountPercent) => {
  const discountAmount = (price * discountPercent) / 100;
  const discountedPrice = price - discountAmount;
  const roundedPrice = Math.round(discountedPrice * 100) / 100;
  return roundedPrice.toFixed(2);
};

// Простой код
function calculateDiscountedPrice2(price, discountPercent) {
  const discountAmount = price * (discountPercent / 100);
  return (price - discountAmount).toFixed(2);
}
