/* eslint-disable no-console */
import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_PIZZA_REQUEST, FETCH_PIZZA_SUCCESS } from './action-types';
import ApiService from '../../../shared/helpers/api-service/api-service';
import { FetchPizzaError } from '../../../utils/custom-errors';
import { ResponseGenerator } from '../../../shared/types/redux-saga-types';

export const fetchPizza = () => ({
  type: FETCH_PIZZA_REQUEST,
});

function* fetchPizzaWorker() {
  try {
    const data: ResponseGenerator = yield call(ApiService.load, 'dataPizza');

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
  yield takeEvery(FETCH_PIZZA_REQUEST, fetchPizzaWorker);
}

export function* pizzaWatcher() {
  yield all([fork(fetchPizzaWatcher)]);
}

// takeEvery используется для того, чтобы запускать новую сагу каждый раз, когда происходит определенное действие в сторе Redux.
// Например, если мы используем takeEvery для отслеживания действия FETCH_DATA, то каждый раз, когда в сторе Redux происходит действие FETCH_DATA, будет запущена новая сага.

// takeLatest используется для того, чтобы запускать только последнюю сагу, связанную с определенным действием.
// Если в сторе Redux происходит несколько действий FETCH_DATA одновременно, то takeLatest запустит только сагу, связанную с последним из этих действий.

// all: используется для одновременного запуска нескольких саг, которые могут выполняться параллельно.
// Например, yield all([fetchData(), fetchUsers()]); запустит саги fetchData() и fetchUsers() одновременно.

// fork: используется для запуска новой саги, которая может выполняться параллельно с другими сагами.
// Например, yield fork(fetchData); запустит сагу fetchData() параллельно с текущей сагой.

// call: используется для вызова асинхронной функции внутри саги.
// Например, const result = yield call(fetchData); вызовет функцию fetchData() и дождется ее завершения, прежде чем продолжить выполнение саги.

// put: используется для отправки действия в Redux-стор из саги.
// Например, yield put({ type: 'FETCH_DATA_SUCCESS', data: result }); отправит действие FETCH_DATA_SUCCESS в Redux-стор с данными result.
