import { useState } from 'react';

const useLinearData = () => {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  const removeData = (indexToRemove) => {
    setData(data.filter((_, index) => index !== indexToRemove));
  };

  return {
    data,
    setData,
    addData,
    removeData,
  };
};

export default useLinearData;
