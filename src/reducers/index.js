import { combineReducers } from "redux";

import {
  ON_CHANGE_FILTER,
  ON_ADD_TO_CART,
  ON_REMOVE_FROM_CART,
  ON_ADD_QUANTITY,
  ON_REMOVE_QUANTITY,
  products
} from "../Util";

function allProductsReducer(state = products) {
  return state;
}

function appliedFiltersReducer(state = [], action) {
  if (action.type === ON_CHANGE_FILTER) {
    return [...action.payload];
  } else {
    return state;
  }
}

const init = {
  product: {
    id: 12,
    sku: 12064273040195392,
    title: "Cat Tee Black T-Shirt",
    description: "4 MSL",
    availableSizes: ["S", "XS"],
    style: "Black with custom print",
    price: 10.9,
    installments: 9,
    currencyId: "USD",
    currencyFormat: "$",
    isFreeShipping: true
  },
  quantity: 1
};

function checkOutReducer(state = [init], action) {
  if (action.type === ON_ADD_TO_CART) {
    let isthere = false;
    for (let i in state) {
      if (state[i].product.id === action.payload.product.id) {
        isthere = true;
        break;
      }
    }
    if (!isthere) {
      return [...state, action.payload];
    } else {
      return state;
    }
  } else if (action.type === ON_REMOVE_FROM_CART) {
    return state.filter(data => {
      return data.product.id !== action.payload;
    });
  } else if (action.type === ON_ADD_QUANTITY) {
    for (let i in state) {
      if (state[i].product.id === action.payload) {
        state[i].quantity += 1;
        break;
      }
    }

    return [...state];
  } else if (action.type === ON_REMOVE_QUANTITY) {
    for (let i in state) {
      if (state[i].product.id === action.payload) {
        if (state[i].quantity > 1) {
          state[i].quantity -= 1;
        }
        break;
      }
    }
    return [...state];
  } else {
    return state;
  }
}

export default combineReducers({
  products: allProductsReducer,
  filters: appliedFiltersReducer,
  checkOutItems: checkOutReducer
});
