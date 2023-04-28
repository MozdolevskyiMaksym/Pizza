import { ActionType } from '../../../shared/types/redux-saga-types';
import {
  FETCH_SALAT_REQUEST,
  FETCH_SALAT_SUCCESS,
} from '../actions/action-types';
import { SalatsStateType } from '../types';

const initialState: SalatsStateType = {
  data: [],
  isLoading: false,
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case FETCH_SALAT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SALAT_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    default:
      return state;
  }
};
