import { combineReducers } from 'redux';
import pizzaReducer from './pages/pizza/reducers/reducer';
import basketReducer from './redux/reducers/basket-reducer';

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  basket: basketReducer,
});

export default rootReducer;
