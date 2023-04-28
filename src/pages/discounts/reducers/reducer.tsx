import { ActionType } from '../../../shared/types/redux-saga-types';
import {
  FETCH_DISCOUNTS_FAILED,
  FETCH_DISCOUNTS_REQUEST,
  FETCH_DISCOUNTS_SUCCESS,
} from '../actions/action-types';
import { DiscountsStateType } from '../types';

const initialState: DiscountsStateType = {
  data: [],
  isLoading: false,
  isError: false,
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case FETCH_DISCOUNTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_DISCOUNTS_SUCCESS:
      return {
        ...state,
        data: action.payload.pizza,
        isLoading: false,
        isEror: true,
      };
    case FETCH_DISCOUNTS_FAILED:
      return {
        ...state,
        isLoading: false,
        isEror: true,
      };
    default:
      return state;
  }
};
