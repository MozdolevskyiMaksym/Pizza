import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_PIZZA, FETCH_PIZZA_SUCCESS } from './action-types';
import ApiService from '../../../shared/helpers/api-service/api-service';

export const fetchPizza = () => ({
  type: FETCH_PIZZA,
});

function* fetchPizzaWorker() {
  const data = yield call(ApiService.load, 'dataPizza');

  yield put({
    type: FETCH_PIZZA_SUCCESS,
    payload: { pizza: data },
  });
}

function* fetchPizzaWatcher() {
  yield takeEvery(FETCH_PIZZA, fetchPizzaWorker);
}

export function* pizzaWatcher() {
  yield all([fork(fetchPizzaWatcher)]);
}
