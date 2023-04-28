import React from 'react';
import useTimeZoneConverter from './use-time-zone-converter';
import './time-zone-converter.scss';

const TimeZoneConverter = () => {
  const { localTime, selectedTimezone, handleTimezoneChange } =
    useTimeZoneConverter();

  return (
    <div className="timezone-converter">
      <h2>Timezone Converter</h2>
      <div className="timezone-converter__form">
        <label htmlFor="timezone-select">Select a timezone:</label>
        <select
          id="timezone-select"
          value={selectedTimezone}
          onChange={handleTimezoneChange}
        >
          <option value="America/New_York">New York</option>
          <option value="Europe/London">London</option>
          <option value="Europe/Kiev">Kyiv</option>
          <option value="Asia/Tokyo">Tokyo</option>
          <option value="Australia/Sydney">Sydney</option>
        </select>
      </div>
      <div className="timezone-converter__time">{localTime}</div>
    </div>
  );
};

export default TimeZoneConverter;
