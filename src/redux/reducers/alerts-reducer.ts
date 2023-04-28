import { ActionType } from '../../shared/types/redux-saga-types';
import {
  ADD_SUCCESS_ALERT,
  CLEAR_ALERTS_SUCCESS,
  ADD_ERROR_ALERT,
  CLEAR_ALERTS_ERROR,
} from '../actions/action-types';
import { AlertType, AlertsStateType } from '../types';

const initialState: AlertsStateType = {
  data: [],
};

export default (state = initialState, action: ActionType) => {
  switch (action?.type) {
    case ADD_SUCCESS_ALERT:
      return {
        ...state,
        data: [...state.data, action?.payload],
      };
    case CLEAR_ALERTS_SUCCESS:
      return {
        ...state,
        data: state.data.filter((item) => item.key !== action?.payload.key),
      };
    case ADD_ERROR_ALERT:
      return {
        ...state,
        data: [...state.data, action?.payload],
      };
    case CLEAR_ALERTS_ERROR:
      return {
        ...state,
        data: state.data.filter(
          (item: AlertType) => item.key !== action?.payload.key
        ),
      };
    default:
      return state;
  }
};
