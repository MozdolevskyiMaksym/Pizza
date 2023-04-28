import { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const useTimeZoneConverter = () => {
  const [localTime, setLocalTime] = useState('');
  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone || moment.tz.guess()
  );
  // Если метод Intl.DateTimeFormat().resolvedOptions().timeZone не возвращает значение,
  // то используется часовой пояс, определенный с помощью библиотеки moment.js, используя метод moment.tz.guess().

  const timeZoneOffSet = new Date().getTimezoneOffset(); // возвращает разницу между местным временем и временем UTC (в минутах).

  const currentDate = moment().tz('Europe/Berlin'); // Вывод: Moment<2023-04-27T19:00:00+03:00>
  // В этом примере мы используем библиотеку Moment.js и ее метод tz, чтобы создать дату на основе часового пояса сервера.
  // Метод tz принимает строку, которая указывает нужный часовой пояс.

  // Обновление времени при изменении выбранного часового пояса
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLocalTime(
        moment().tz(selectedTimezone).format('MMMM Do YYYY, h:mm:ss a')
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, [selectedTimezone]);

  // Обработчик изменения выбранного часового пояса
  const handleTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
  };
  return {
    localTime,
    selectedTimezone,
    handleTimezoneChange,
    timeZoneOffSet,
    currentDate,
  };
};

export default useTimeZoneConverter;
