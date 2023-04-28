/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
// Плохо
class OrderService {
  constructor() {
    this.orderRepository = new OrderRepository();
  }

  getOrderById(id) {
    return this.orderRepository.getOrderById(id);
  }
}

class OrderRepository {
  getOrderById(id) {
    // get order from DB
  }
}

// Хорошо
class OrderService2 {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  getOrderById(id) {
    return this.orderRepository.getOrderById(id);
  }
}

class OrderRepository2 {
  constructor() {
    // init connection to DB
  }

  getOrderById(id) {
    // get order from DB
  }
}

let orderRepository = new OrderRepository();
let orderService = new OrderService(orderRepository);

// Принцип инверсии зависимостей (DIP) заключается в том, что модули более высокого уровня не должны зависеть от модулей более низкого уровня.
// Их зависимости должны быть инвертированы, чтобы более высокоуровневые модули зависели от абстракций, а не от конкретных реализаций модулей более низкого уровня.

// Первоначальная реализация OrderService зависит от конкретной реализации OrderRepository, что нарушает принцип DIP.
// Это означает, что любые изменения в OrderRepository могут повлиять на работу OrderService.

// Во второй реализации OrderService2 мы видим, что зависимость от OrderRepository была инвертирована -
// теперь OrderRepository передается как параметр в конструктор OrderService2.
// Это позволяет легко заменить реализацию OrderRepository, не внося изменений в OrderService2. Это соответствует принципу DIP.

// Также стоит отметить, что класс OrderRepository2 содержит логику инициализации подключения к базе данных.
// Это позволяет инвертировать зависимость между OrderService2 и OrderRepository2, так как теперь OrderRepository2 не зависит от конкретной реализации базы данных,
// а OrderService2 зависит только от абстракции OrderRepository. Это также соответствует принципу DIP.
