/* eslint-disable security/detect-non-literal-regexp */
export class Cookie {
  static set(cname, cvalue, exdays) {
    const currentDay = new Date();
    currentDay.setTime(currentDay.getTime() + exdays * 24 * 60 * 60 * 1000); // через сколько дней будет последний день срока.

    const expires = `expires=${currentDay.toUTCString()}`; // преобразует дату в строку, используя часовой пояс UTC
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

// В методе get класса Cookie создается регулярное выражение, которое используется для поиска значения куки по ее имени.

// Сначала создается константа matches, которая получает результат выполнения метода match() на строке document.cookie.
// Метод match() ищет в строке document.cookie все совпадения с регулярным выражением, которое передается ему в качестве аргумента.

// Регулярное выражение состоит из двух частей: (?:^|; )${cname.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*).

// (?:^|; ): ненумерируемая группа, которая ищет либо начало строки, либо символ ";" и пробел.

// ${cname.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}: заменяет в строке cname все специальные символы, которые могут нарушить регулярное выражение,
// на экранированные версии самих себя (выражение использует регулярное выражение для экранирования).

// =([^;]*): группа, которая ищет символ "=", за которым следует любое количество любых символов, кроме символа ";".

// Таким образом, получается регулярное выражение, которое ищет совпадение в виде "имя_куки=значение_куки" в строке document.cookie.
// Если совпадение найдено, то метод get возвращает раскодированное значение куки, которое находится в группе, определенной в регулярном выражении.
// Иначе, если совпадение не найдено, метод возвращает undefined. Функция decodeURIComponent() используется для декодирования значения куки,
// так как значения кук могут содержать закодированные символы, например, пробелы или знаки "=" и ";" в значении куки.

// Здесь параметр secure установлен только в том случае, если протокол текущей страницы HTTPS.
// Параметр sameSite установлен на значение Strict.
// Это означает, что куки будут отправляться только на текущий домен и только в том случае, если пользователь явно запрашивает страницу.
// Это помогает защитить от некоторых типов атак, таких как CSRF.

// Атрибут "SameSite" устанавливает политику SameSite для куки в "lax", что означает, что куки будет отправляться на сервер только в рамках "top-level" навигации
// (т.е. при переходе по ссылке или вводе URL в адресной строке), но не отправляться при запросах, которые происходят из внедренных ресурсов на странице
// (например, при использовании iframe). Атрибут "path" указывает путь к куки, который в данном случае установлен в корневой путь сайта "/".
