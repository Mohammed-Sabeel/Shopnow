export const reducer = (state, action) => {
  if (action.type === "SUCCESS") {
    return {
      ...state,
      products: action.payload,
    };
  }

  if (action.type === "ADDCART") {
    const newCart = [...state.product, action.payload];
    return {
      ...state,
      product: newCart,
      totalItems: state.totalItems + 1,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      totalItems: state.totalItems - 1,
      product: state.product.filter((curr) => {
        return curr.id !== action.payload;
      }),
    };
  }

  return state;
};
