import { ActionType } from '../../../shared/types/redux-saga-types';
import {
  FETCH_PIZZA_REQUEST,
  FETCH_PIZZA_SUCCESS,
} from '../actions/action-types';
import { PizzaStateType } from '../types';

export const initialState: PizzaStateType = {
  data: [],
  isLoading: false,
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case FETCH_PIZZA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PIZZA_SUCCESS:
      return {
        ...state,
        data: action.payload.pizza,
        isLoading: false,
      };
    default:
      return state;
  }
};
