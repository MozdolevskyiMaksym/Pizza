import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_SALAT_REQUEST, FETCH_SALAT_SUCCESS } from './action-types';
import ApiService from '../../../shared/helpers/api-service/api-service';
import { ResponseGenerator } from '../../../shared/types/redux-saga-types';

export const fetchSalats = () => ({
  type: FETCH_SALAT_REQUEST,
});

function* fetchSalatWorker() {
  const data: ResponseGenerator = yield call(ApiService.load, 'dataSalat');
  yield put({
    type: FETCH_SALAT_SUCCESS,
    payload: { data },
  });
}

function* fetchSalatWatcher() {
  yield takeEvery(FETCH_SALAT_REQUEST, fetchSalatWorker);
}

export function* salatsWatcher() {
  yield all([fork(fetchSalatWatcher)]);
}
