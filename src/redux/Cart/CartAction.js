import { ADD_TO_CART, DEC_ITEM, EMT_CART, INC_ITEM, RMV_FROM_CART } from "./CartType";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const removeFromcart = (id) => {
  return {
    type: RMV_FROM_CART,
    payload: id,
  };
};

export const emtCart = () => {
  return {
    type: EMT_CART,
  };
};

export const incItem = (ind) => {
  return {
    type: INC_ITEM,
    payload: ind,
  };
};

export const decItem = (ind) => {
  return {
    type: DEC_ITEM,
    payload: ind,
  };
};
