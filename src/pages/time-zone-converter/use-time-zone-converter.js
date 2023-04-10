import { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const useTimeZoneConverter = () => {
  const [localTime, setLocalTime] = useState('');
  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone || moment.tz.guess()
  );

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
  };
};

export default useTimeZoneConverter;
