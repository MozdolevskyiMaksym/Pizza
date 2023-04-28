import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_DRINKS_REQUEST, FETCH_DRINKS_SUCCESS } from './action-types';
import ApiService from '../../../shared/helpers/api-service/api-service';
import { ResponseGenerator } from '../../../shared/types/redux-saga-types';

export const fetchDrinks = () => ({
  type: FETCH_DRINKS_REQUEST,
});

function* fetchDrinksWorker() {
  const data: ResponseGenerator = yield call(ApiService.load, 'dataDrink');
  yield put({
    type: FETCH_DRINKS_SUCCESS,
    payload: { drink: data },
  });
}

function* fetchDrinksWatcher() {
  yield takeEvery(FETCH_DRINKS_REQUEST, fetchDrinksWorker);
}

export function* drinksWatcher() {
  yield all([fork(fetchDrinksWatcher)]);
}
