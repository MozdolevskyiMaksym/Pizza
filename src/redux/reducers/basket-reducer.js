import {
  ADD_PRODUCT_TO_BASKET_SUCCESS,
  FETCH_PRODUCT_ITEMS_SUCCESS,
  DELETE_PRODUCT_ITEMS_SUCCESS,
  OPEN_BASKET_MODAL_STATUS_SUCCESS,
  CLOSE_BASKET_MODAL_STATUS_SUCCESS,
} from '../actions/action-types';

const initialState = {
  basketData: [],
  isModalBasketOpen: false,
  isSuccessAddProduct: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TO_BASKET_SUCCESS:
      return {
        ...state,
        basketData: [...state.basketData, payload.product],
      };
    case FETCH_PRODUCT_ITEMS_SUCCESS:
      return {
        ...state,
        basketData: payload.product,
      };
    case DELETE_PRODUCT_ITEMS_SUCCESS:
      return {
        ...state,
        basketData: state.basketData.filter(
          (item) => item.id !== payload.productId
        ),
      };
    case OPEN_BASKET_MODAL_STATUS_SUCCESS:
      return {
        ...state,
        isModalBasketOpen: true,
      };
    case CLOSE_BASKET_MODAL_STATUS_SUCCESS:
      return {
        ...state,
        isModalBasketOpen: false,
      };
    default:
      return state;
  }
};
