/* eslint-disable no-console */
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_DISCOUNTS_REQUEST,
  FETCH_DISCOUNTS_SUCCESS,
  FETCH_DISCOUNTS_FAILED,
} from './action-types';
import { ResponseGenerator } from '../../../shared/types/redux-saga-types';
import ApiService from '../../../shared/helpers/api-service/api-service';

export const fetchDiscounts = () => ({
  type: FETCH_DISCOUNTS_REQUEST,
});

function* fetchDiscountsWatcher() {
  yield takeEvery(FETCH_DISCOUNTS_REQUEST, fetchDiscountsWorker);
}

function* fetchDiscountsWorker() {
  try {
    const data: ResponseGenerator = yield call(
      ApiService.load,
      'dataDiscounts'
    );

    yield put({
      type: FETCH_DISCOUNTS_SUCCESS,
      payload: { pizza: data },
    });
  } catch (error) {
    yield put({
      type: FETCH_DISCOUNTS_FAILED,
    });
  }
}

export function* discountsWatcher() {
  yield all([fork(fetchDiscountsWatcher)]);
}
