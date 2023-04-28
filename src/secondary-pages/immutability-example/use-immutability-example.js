import { useState } from 'react';
import { List, Record, Map } from 'immutable';

const PersonRecord = Record({
  name: '',
  age: 0,
  gender: '',
});

const useImmutabilityExample = () => {
  const [items, setItems] = useState(List(['Item 1', 'Item 2', 'Item 3']));
  const [person, setPerson] = useState(new PersonRecord());
  const [user, setUser] = useState(
    Map({
      name: 'John',
      age: 25,
      email: 'john@example.com',
    })
  );

  const addItem = () => {
    const newItem = `Item ${items.size + 1}`;
    const newItems = items.push(newItem);
    setItems(newItems);
  };

  const updatePerson = (name, value) => {
    setPerson(person.set(name, value));
  };

  return {
    items,
    person,
    user,
    addItem,
    updatePerson,
    setUser,
  };
};

export default useImmutabilityExample;
