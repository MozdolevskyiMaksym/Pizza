import { useState } from 'react';

const useNonLinearData = () => {
  const [data, setData] = useState({
    name: 'John Doe',
    age: 30,
    hobbies: ['reading', 'hiking', 'photography'],
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
    },
    notes: [
      { id: 1, text: 'Buy groceries' },
      { id: 2, text: 'Call mom' },
      { id: 3, text: 'Finish project' },
    ],
  });

  return {
    data,
    setData,
  };
};

export default useNonLinearData;
