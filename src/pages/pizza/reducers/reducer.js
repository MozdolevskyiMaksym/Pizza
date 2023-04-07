import { FETCH_PIZZA_SUCCESS } from '../actions/action-types';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PIZZA_SUCCESS:
      return {
        ...state,
        data: action.payload.pizza,
      };
    default:
      return state;
  }
};
