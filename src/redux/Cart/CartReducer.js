import {
  ADD_TO_CART,
  DEC_ITEM,
  EMT_CART,
  INC_ITEM,
  RMV_FROM_CART,
} from "./CartType";

const intialState = {
  carts: [],
};

export const cartReducer = (state = intialState, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;

        return {
          ...state,
          carts: [...state.carts],
        };
      }
      else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case RMV_FROM_CART:
      console.log(action.payload);
      const finalState = state.carts.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        carts: finalState,
      };

    case EMT_CART:
      return intialState;

    case INC_ITEM:
      const ind = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      state.carts[ind].qnty += 1;

      return {
        ...state,
        carts: [...state.carts],
      };

    case DEC_ITEM:
      const dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      
      if (state.carts[dec].qnty > 1) {
        state.carts[dec].qnty -= 1;

        return {
          ...state,
          carts: [...state.carts],
        };
      }
      else {
        const finalState = state.carts.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          carts: finalState,
        };
      }
    default:
      return state;
  }
};
