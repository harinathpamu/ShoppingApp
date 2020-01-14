import {
  ON_CHANGE_FILTER,
  ON_ADD_TO_CART,
  ON_REMOVE_FROM_CART,
  ON_ADD_QUANTITY,
  ON_REMOVE_QUANTITY
} from "../Util";

export const actionFilter = filters => {
  return {
    type: ON_CHANGE_FILTER,
    payload: filters
  };
};

export const actionAddToCart = product => {
  return {
    type: ON_ADD_TO_CART,
    payload: { product, quantity: 1 }
  };
};

export const actionRemoveFromCart = product_id => {
  return {
    type: ON_REMOVE_FROM_CART,
    payload: product_id
  };
};

export const actionAddQuantity = product_id => {
  return {
    type: ON_ADD_QUANTITY,
    payload: product_id
  };
};

export const actionRemoveQuantity = product_id => {
  return {
    type: ON_REMOVE_QUANTITY,
    payload: product_id
  };
};
