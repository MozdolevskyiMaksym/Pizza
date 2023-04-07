import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useActions from '../../shared/hooks/use-actions';
import { fetchPizza } from './actions/actions';

const usePizzaPage = () => {
  const pizzasData = useSelector((state) => state?.pizza?.data);
  const getPizza = useActions(fetchPizza);
  const [filteredPizzasData, setFilteredPizzasData] = useState(pizzasData);

  useEffect(() => {
    getPizza();
  }, [getPizza]);

  useEffect(() => {
    pizzasData && pizzasData.length > 0 && setFilteredPizzasData(pizzasData);
  }, [pizzasData]);

  return {
    pizzasData,
    filteredPizzasData,
    setFilteredPizzasData,
  };
};

export default usePizzaPage;
