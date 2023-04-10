/* eslint-disable no-console */
import { useState } from 'react';
import Cookies from 'js-cookie';
import localforage from 'localforage';

const useStorageTools = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleCookieSaveClick = () => {
    // Сохранение значения в куки
    Cookies.set('myKey', value, { expires: 7 }); // куки будут жить 7 дней
    console.log('myKey: ', value);
  };

  const handleCookieLoadClick = () => {
    // Получение значения из куки
    const cookieValue = Cookies.get('myKey');
    console.log('cookieValue', cookieValue);
  };

  const handleForageSaveClick = async () => {
    // Сохранение значения в localforage
    await localforage.setItem('myKey', value);
    console.log('myKey', value);
  };

  const handleForageLoadClick = async () => {
    // Получение значения из localforage
    const forageValue = await localforage.getItem('myKey');
    console.log('forageValue', forageValue);
  };
  return {
    value,
    handleInputChange,
    handleCookieSaveClick,
    handleCookieLoadClick,
    handleForageSaveClick,
    handleForageLoadClick,
  };
};

export default useStorageTools;
