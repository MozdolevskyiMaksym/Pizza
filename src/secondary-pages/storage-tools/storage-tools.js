import React from 'react';
import useStorageTools from './use-storage-tools';

import './storage-tools.scss';

const StorageTools = () => {
  const {
    value,
    handleInputChange,
    handleCookieSaveClick,
    handleCookieLoadClick,
    handleForageSaveClick,
    handleForageLoadClick,
  } = useStorageTools();
  return (
    <div className="storage-component">
      <input type="text" value={value} onChange={handleInputChange} />
      <button onClick={handleCookieSaveClick}>Сохранить в куки</button>
      <button onClick={handleCookieLoadClick}>Загрузить из куки</button>
      <button onClick={handleForageSaveClick}>Сохранить в localforage</button>
      <button onClick={handleForageLoadClick}>Загрузить из localforage</button>
    </div>
  );
};

export default StorageTools;
