const useMathMethods = () => {
  const randomNumbers = [];

  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // randomNumbers - массив из 10 случайных чисел от 1 до 100
    randomNumbers.push(randomNumber);
  }

  const exponentNumber = Math.exp(randomNumbers[0]); // exponentNumber - экспонента от первого числа в массиве randomNumbers
  const sinNumber = Math.sin(randomNumbers[1]); // sinNumber - синус второго числа в массиве randomNumbers
  const cosNumber = Math.cos(randomNumbers[2]); // cosNumber - косинус третьего числа в массиве randomNumbers
  const roundNumber = Math.round(randomNumbers[3]); // roundNumber - четвертое число в массиве округленное до ближайшего целого
  const ceilNumber = Math.ceil(randomNumbers[4]); // ceilNumber - пятое число в массиве округленное в большую сторону
  const floorNumber = Math.floor(randomNumbers[5]); // floorNumber - шестое число в массиве округленное в меньшую сторону
  const logNumber = Math.log(randomNumbers[6]); // logNumber - натуральный логарифм седьмого числа в массиве
  const sqrtNumber = Math.sqrt(randomNumbers[7]); // sqrtNumber - квадратный корень восьмого числа в массиве
  const tanNumber = Math.tan(randomNumbers[8]); // tanNumber - тангенс девятого числа в массиве
  const atanNumber = Math.atan(randomNumbers[9]); // atanNumber - арктангенс десятого числа в массиве

  return {
    exponentNumber,
    sinNumber,
    cosNumber,
    roundNumber,
    ceilNumber,
    floorNumber,
    logNumber,
    sqrtNumber,
    tanNumber,
    atanNumber,
  };
};

export default useMathMethods;
