import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_QUANTITY,
  DELETE_ITEM,
  EMPTY_CART,
} from "../actions/cart-action";

const cartItem = {
  totalQuantity: 0,
  totalAmount: 0,
  cartItem: [],
};

const sumItems = (items) => {
  let sum = 0;

  items?.forEach(function (item) {
    let calculation = Math.trunc(item.totalPrice);
    sum += calculation;
  });
  return sum;
};

const cartReducer = (state = cartItem, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const existingItem = state?.cartItem?.find(
        (item) => item.id == action.payload.id
      );
      if (!existingItem) {
        state.totalQuantity++;

        let cart = {
          id: action.payload.id,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
          totalPrice: action.payload.price * action.payload.quantity,
          size: action.payload.size,
          quantity: action.payload.quantity,
          customize: action.payload.customize,
        };
        state?.cartItem?.push(cart);
      } else if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.totalPrice * existingItem.quantity;
      }

      return {
        ...state,
        totalAmount: sumItems(state.cartItem),
      };

    case INCREASE_QUANTITY:
      let ids = action.payload;
      const existingItemsos = state.cartItem.find((e) => e.id == ids);
      existingItemsos.quantity++;
      existingItemsos.totalPrice =
        existingItemsos.quantity * existingItemsos.price;
      return {
        ...state,
        totalAmount: sumItems(state.cartItem),
      };

    case REMOVE_ITEM:
      let id = action.payload;
      const existingItems = state.cartItem.find((e) => e.id == id);
      existingItems.totalPrice = existingItems.totalPrice - existingItems.price;
      existingItems.quantity--;

      if (existingItems.quantity === 0) {
        state.totalQuantity--;
        state.cartItem = state.cartItem.filter((e) => e.id !== id);
      }
      return {
        ...state,
        totalAmount: sumItems(state.cartItem),
      };

    case DELETE_ITEM:
      let reId = action.payload;
      state.cartItem = state.cartItem.filter((e) => e.id !== reId);
      state.totalQuantity--;

      return {
        ...state,
        totalAmount: sumItems(state.cartItem),
      };

    case EMPTY_CART:
      return {
        totalQuantity: 0,
        totalAmount: 0,
        cartItem: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
