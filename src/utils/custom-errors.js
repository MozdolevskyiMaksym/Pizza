export class FetchPizzaError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FetchPizzaError';
  }
}
