/* eslint-disable no-console */
import { ActionType } from '../../shared/types/redux-saga-types';
import { CLEAR_ALERTS, CLEAR_ALERTS_SUCCESS } from './action-types';
import { all, fork, put, takeEvery } from 'redux-saga/effects';

export const clearAlerts = (key: number) => ({
  type: CLEAR_ALERTS,
  payload: { key },
});

function* removeAlertWorker(data: ActionType) {
  try {
    yield put({
      type: CLEAR_ALERTS_SUCCESS,
      payload: { key: data.payload.key },
    });
  } catch (error) {
    console.log(error);
  }
}

function* removeAlertWatcher() {
  yield takeEvery(CLEAR_ALERTS, removeAlertWorker);
}

export function* alertsWatcher() {
  yield all([fork(removeAlertWatcher)]);
}
