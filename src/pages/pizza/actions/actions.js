/* eslint-disable no-console */
import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_PIZZA, FETCH_PIZZA_SUCCESS } from './action-types';
import ApiService from '../../../shared/helpers/api-service/api-service';
import { FetchPizzaError } from '../../../utils/custom-errors';

export const fetchPizza = () => ({
  type: FETCH_PIZZA,
});

function* fetchPizzaWorker() {
  try {
    const data = yield call(ApiService.load, 'dataPizza');

    yield put({
      type: FETCH_PIZZA_SUCCESS,
      payload: { pizza: data },
    });
  } catch (error) {
    if (error instanceof FetchPizzaError) {
      // Обработка конкретного типа ошибок FetchPizzaError
      console.error('Ошибка при загрузке данных пиццы:', error.message);
    } else {
      // Общая обработка ошибок
      console.error('Ошибка при загрузке данных пиццы:', error);
    }
  }
}

function* fetchPizzaWatcher() {
  yield takeEvery(FETCH_PIZZA, fetchPizzaWorker);
}

export function* pizzaWatcher() {
  yield all([fork(fetchPizzaWatcher)]);
}
