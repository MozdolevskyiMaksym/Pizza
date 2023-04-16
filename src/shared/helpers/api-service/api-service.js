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
        // Access-Control-Allow-Origin': '' - этот заголовок указывает, каким доменам разрешено получать доступ к ресурсам на сервере.
        // Значение "" означает, что доступ разрешен для любых доменов.
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
        // Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH' - этот заголовок определяет, какие методы HTTP разрешены для доступа к ресурсам на сервере.
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        // Access-Control-Allow-Headers': 'Content-Type, Authorization' - этот заголовок указывает, какие заголовки запроса разрешены для доступа к ресурсам на сервере.
        // В данном случае разрешены заголовки "Content-Type" и "Authorization".
        /////////////////////////////////////////////////////////////////////////////////
        // USES SECURE HEADERS IN NETWORK REQUESTS
        /////////////////////////////////////////////////////////////////////////////////
        'Content-Security-Policy': 'default-src "self"',
        // Content-Security-Policy Определяет, какие ресурсы могут быть загружены в браузер и откуда, а также какие типы скриптов могут выполняться.
        // Это снижает риск атак XSS и других атак, связанных с внедрением вредоносного кода.
        // Значения заголовка могут включать исходные источники ('self', 'unsafe-inline', 'unsafe-eval', 'nonce-[some-random-value]')
        // и разрешенные источники ('https://example.com', 'data:', 'blob:', 'media-stream:').
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
        // Strict-Transport-Security Заставляет браузеры использовать только HTTPS-соединения для взаимодействия с веб-сайтом в течение заданного периода времени (задается параметром max-age).
        // Это снижает вероятность атак MITM (Man-in-the-Middle), которые могут происходить при использовании HTTP.
        'X-Content-Type-Options': 'nosniff',
        // X-Content-Type-Options предотвращает MIME-типы атак, которые могут произойти, когда браузер обрабатывает файлы с неправильным MIME-типом.
        // Значение заголовка может быть "nosniff" - запрет браузеру переопределять MIME-типы.
        'X-Frame-Options': 'DENY',
        // X-Frame-Options Предотвращает кликджекинг-атаки (Clickjacking), которые позволяют злоумышленнику перехватить пользовательский клик и выполнить его на другом сайте.
        // Значение заголовка может быть "DENY", "SAMEORIGIN", "ALLOW-FROM url", где "DENY" отключает фреймы на всех сайтах,
        // "SAMEORIGIN" позволяет фреймы на текущем сайте, "ALLOW-FROM url" позволяет фреймы только на заданном URL.
        'X-XSS-Protection': '1; mode=block',
        // X-XSS-Protection Предотвращает атаки типа XSS (Cross-Site Scripting) за счет блокировки или фильтрации вредоносных скриптов, переданных в запросе.
        // Допустимые значения для заголовка: "0" (отключен), "1" (включен), "1; mode=block" (включен и предотвращает рендеринг страницы в случае обнаружения XSS-атаки).
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
