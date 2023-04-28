import { ActionType } from '../../shared/types/redux-saga-types';
import {
  ADD_PRODUCT_TO_BASKET_SUCCESS,
  FETCH_PRODUCT_ITEMS_SUCCESS,
  DELETE_PRODUCT_ITEMS_SUCCESS,
  OPEN_BASKET_MODAL_STATUS_SUCCESS,
  CLOSE_BASKET_MODAL_STATUS_SUCCESS,
} from '../actions/action-types';
import { BasketStateType } from '../types';

const initialState: BasketStateType = {
  basketData: [],
  isBasketSidebarOpen: false,
  error: null,
};

export default (state = initialState, action: ActionType) => {
  switch (action?.type) {
    case ADD_PRODUCT_TO_BASKET_SUCCESS:
      return {
        ...state,
        basketData: [...state.basketData, action?.payload.product],
      };
    case FETCH_PRODUCT_ITEMS_SUCCESS:
      return {
        ...state,
        basketData: action?.payload.product,
      };
    case DELETE_PRODUCT_ITEMS_SUCCESS:
      return {
        ...state,
        basketData: state.basketData.filter(
          (item) => item?.id !== action?.payload.productId
        ),
      };
    case OPEN_BASKET_MODAL_STATUS_SUCCESS:
      return {
        ...state,
        isBasketSidebarOpen: true,
      };
    case CLOSE_BASKET_MODAL_STATUS_SUCCESS:
      return {
        ...state,
        isBasketSidebarOpen: false,
      };
    default:
      return state;
  }
};
