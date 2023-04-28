import { ActionType } from '../../../shared/types/redux-saga-types';
import {
  FETCH_DRINKS_REQUEST,
  FETCH_DRINKS_SUCCESS,
} from '../actions/action-types';
import { DrinksStateType } from '../types';

const initialState: DrinksStateType = {
  data: [],
  isLoading: false,
};

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case FETCH_DRINKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DRINKS_SUCCESS:
      return {
        ...state,
        data: action.payload.drink,
        isLoading: false,
      };
    default:
      return state;
  }
};
