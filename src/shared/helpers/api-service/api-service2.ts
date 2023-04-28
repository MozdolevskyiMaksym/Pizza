/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL } from './config.js';

export class ApiService {
  static sendRequest = async (
    url: RequestInfo,
    method: RequestInit['method'],
    data?: any,
    headers: HeadersInit = {}
  ): Promise<any> => {
    const response: Response = await fetch(url, {
      method,
      body: data ? JSON.stringify(data) : null,
      headers: new Headers({ 'Content-Type': 'application/json', ...headers }),
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return response.json();
  };

  static load = (url: string, data?: any): Promise<any> =>
    ApiService.sendRequest(`${BASE_URL}${url}`, 'GET', data);

  static create = (url: string, data: any): Promise<any> =>
    ApiService.sendRequest(`${BASE_URL}${url}`, 'POST', data);

  static update = (url: string, data: any): Promise<any> =>
    ApiService.sendRequest(`${BASE_URL}${url}`, 'PUT', data);

  static remove = (url: string, data: any): Promise<any> =>
    ApiService.sendRequest(`${BASE_URL}${url}`, 'DELETE', data);

  static reactivate = (url: string, data: any): Promise<any> =>
    ApiService.sendRequest(`${BASE_URL}${url}`, 'PATCH', data);
}

// Здесь мы добавили типы для аргументов и возвращаемых значений методов sendRequest() и других методов в классе.
// Мы также использовали интерфейсы Response и Request для объявления переменных response и fetch(), соответственно.
// Для заголовков мы использовали HeadersInit, чтобы указать тип для объекта заголовков, который мы передаем в fetch().
// В методе sendRequest(), мы также использовали !response.ok вместо !(response.status >= 200 && response.status < 300),
// чтобы проверить, что ответ от сервера имеет статус в диапазоне 200-299.
