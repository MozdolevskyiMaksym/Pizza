import React, { useState, useEffect } from 'react';
import ListControl from './components/list-control/list-control';
import CountryList from './components/country-list/country-list';
import { subscribe, unsubscribe } from './helpers/events';

import './custom-events.scss';

const CustomEvents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [countryList, setList] = useState([]);

  useEffect(() => {
    subscribe('showList', () => setIsOpen(true));
    subscribe('hideList', () => setIsOpen(false));

    async function fetchData() {
      const apiUrl = 'https://restcountries.com/v3.1/region/africa';
      const response = await fetch(apiUrl);
      let data = await response.json();
      setList(data);
    }
    fetchData();

    return () => {
      unsubscribe('showList', () => setIsOpen(false));
      unsubscribe('hideList', () => setIsOpen(true));
    };
  }, []);

  return (
    <div className="custom-events">
      <h1 className="custom-events__title">Using Custom Events In React</h1>
      <ListControl listState={isOpen}></ListControl>
      {isOpen ? (
        <CountryList listData={countryList}></CountryList>
      ) : (
        <h3 className="custom-events__subtitle">
          Click on the Button above to render the list of African Countries
        </h3>
      )}
    </div>
  );
};
export default CustomEvents;
