/* eslint-disable security/detect-non-literal-regexp */
export class Cookie {
  static set(cname, cvalue, exdays) {
    const currentDay = new Date();
    currentDay.setTime(currentDay.getTime() + exdays * 24 * 60 * 60 * 1000);

    const expires = `expires=${currentDay.toUTCString()}`;
    const secure = location.protocol === 'https:' ? 'secure' : '';
    const sameSite = 'SameSite=Strict';
    document.cookie = `${cname}=${cvalue};${expires};path=/;${secure};${sameSite}`;
  }
  static get(cname) {
    const matches = document.cookie.match(
      new RegExp(
        `(?:^|; )${cname.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  static del(cname) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}

// Здесь параметр secure установлен только в том случае, если протокол текущей страницы HTTPS.
// Параметр sameSite установлен на значение Strict.
// Это означает, что куки будут отправляться только на текущий домен и только в том случае, если пользователь явно запрашивает страницу.
// Это помогает защитить от некоторых типов атак, таких как CSRF.
