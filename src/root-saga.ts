import { all, fork } from 'redux-saga/effects';
import { pizzaWatcher } from './pages/pizza/actions/actions';
import { drinksWatcher } from './pages/drinks/actions/actions';
import { salatsWatcher } from './pages/salats/actions/actions';
import { basketWatcher } from './redux/actions/basket-actions';
import { alertsWatcher } from './redux/actions/alerts-actions';
import { discountsWatcher } from './pages/discounts/actions/actions';

function* rootSaga() {
  yield all([
    fork(pizzaWatcher),
    fork(basketWatcher),
    fork(drinksWatcher),
    fork(alertsWatcher),
    fork(salatsWatcher),
    fork(discountsWatcher),
  ]);
}

export default rootSaga;
