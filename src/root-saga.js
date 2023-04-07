import { all, fork } from 'redux-saga/effects';
import { pizzaWatcher } from './pages/pizza/actions/actions';
import { basketWatcher } from './redux/actions/basket-actions';

function* rootSaga() {
  yield all([fork(pizzaWatcher), fork(basketWatcher)]);
}

export default rootSaga;
