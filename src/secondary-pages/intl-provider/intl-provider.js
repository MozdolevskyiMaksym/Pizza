/* eslint-disable security/detect-object-injection */
import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import './Intl-provider.scss';
import IntlText from './components/intl-text';

const messages = {
  en: {
    greeting: 'Hello!',
    goodbye: 'Goodbye!',
    someMessage: 'some message',
  },
  es: {
    greeting: '¡Hola!',
    goodbye: '¡Adiós!',
    someMessage: 'algún mensaje',
  },
  fr: {
    greeting: 'Bonjour!',
    goodbye: 'Au revoir!',
    someMessage: 'un message',
  },
};

const IntlProviderExample = () => {
  const [locale, setLocale] = useState('en');

  const handleLocaleChange = (e) => {
    setLocale(e.target.value);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="intl-example">
        <div>
          <label htmlFor="locale-select">Select a language:</label>
          <select id="locale-select" onChange={handleLocaleChange}>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <h1>
          <FormattedMessage id="greeting" />
        </h1>
        <p>
          <FormattedMessage id="goodbye" />
        </p>
        <p>
          <IntlText />
        </p>
      </div>
    </IntlProvider>
  );
};

export default IntlProviderExample;

// В этом примере мы импортируем IntlProvider и FormattedMessage из react-intl.
// Затем мы создаем объект messages, который содержит переводы на английский, испанский и французский языки.
// Мы используем useState hook для установки локали по умолчанию (en) и для обновления локали при выборе нового языка в селекторе.

// Внутри компонента IntlProvider мы передаем выбранную локаль и соответствующие переводы в качестве свойств.
// Затем мы используем FormattedMessage для вывода локализованных строк на экран.
// Вместо прямого использования текста мы используем id для идентификации строки, которую нужно локализовать.

// При выборе нового языка в селекторе мы обновляем локаль и передаем соответствующие переводы в компонент IntlProvider,
// который автоматически обновляет все FormattedMessage на странице с новыми переводами.

// В этом примере мы использовали greeting и goodbye в качестве идентификаторов переводов, которые соответствуют ключам в объекте messages.
// Вы можете добавить свои собственные переводы в объект messages, используя любые идентификаторы, которые вам нравятся.
