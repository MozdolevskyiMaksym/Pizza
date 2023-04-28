import { combineReducers } from 'redux';
import pizzaReducer from './pages/pizza/reducers/reducer';
import drinksReducer from './pages/drinks/reducers/reducer';
import salatsReducer from './pages/salats/reducers/reducer';
import discountsReducer from './pages/discounts/reducers/reducer';
import alertsReducer from './redux/reducers/alerts-reducer';
import basketReducer from './redux/reducers/basket-reducer';

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  drinks: drinksReducer,
  salats: salatsReducer,
  discounts: discountsReducer,
  alerts: alertsReducer,
  basket: basketReducer,
});

export default rootReducer;
