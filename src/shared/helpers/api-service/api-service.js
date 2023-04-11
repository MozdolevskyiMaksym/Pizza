import axios from 'axios';
import 'regenerator-runtime/runtime';
import { BASE_URL } from './config.js';
class ApiService {
  static sendRequest = async (url, method, data = null, headers = {}) => {
    const response = await axios(url, {
      method,
      data,
      headers: {
        // Добавляем заголовки для разрешения кросс-доменного доступа
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        ...headers, // Добавляем заголовки, переданные в параметрах функции
      },
    });
    if (!(response.status >= 200 && response.status < 300)) {
      throw response;
    }
    return response.data;
  };
  static load = (url, data) =>
    ApiService.sendRequest(`${BASE_URL}${url}`, 'GET', data);
  static create = (url, data) =>
    ApiService.sendRequest(`${BASE_URL}${url}`, 'POST', data);
  static update = (url, data) =>
    ApiService.sendRequest(`${BASE_URL}${url}`, 'PUT', data);
  static remove = (url, data) =>
    ApiService.sendRequest(`${BASE_URL}${url}`, 'DELETE', data);
  static reactivate = (url, data) =>
    ApiService.sendRequest(`${BASE_URL}${url}`, 'PATCH', data);
}

// export class ApiService {
//   static sendRequest = (url, method, data = null, headers = {}) => {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open(method, url);
//       xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//       Object.keys(headers).forEach((key) => {
//         xhr.setRequestHeader(key, headers[key]);
//       });
//       xhr.onload = () => {
//         if (xhr.status >= 200 && xhr.status < 300) {
//           try {
//             const response = JSON.parse(xhr.responseText);
//             resolve(response);
//           } catch (error) {
//             resolve(xhr.responseText);
//           }
//         } else {
//           reject(xhr);
//         }
//       };
//       xhr.onerror = () => reject(xhr);
//       xhr.send(JSON.stringify(data));
//     });
//   };

//   static load = (url, data) =>
//     ApiService.sendRequest(`${BASE_URL}${url}`, 'GET', data);

//   static create = (url, data) =>
//     ApiService.sendRequest(`${BASE_URL}${url}`, 'POST', data);

//   static update = (url, data) =>
//     ApiService.sendRequest(`${BASE_URL}${url}`, 'PUT', data);

//   static remove = (url, data) =>
//     ApiService.sendRequest(`${BASE_URL}${url}`, 'DELETE', data);

//   static reactivate = (url, data) =>
//     ApiService.sendRequest(`${BASE_URL}${url}`, 'PATCH', data);
// }

export default ApiService;
