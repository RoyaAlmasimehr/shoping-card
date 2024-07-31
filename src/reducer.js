
 export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, price } = action.data;
      const newState = { ...state };
      if (newState.addedProducts.some((product) => product.id == id)) {
        newState.addedProducts.map((product) => {
          if (product.id == id) {
            product.count += 1;
            product.totalPrice = product.count * product.price;
          }
        });
      } else {
        newState.addedProducts.push({
          ...action.data,
          count: 1,
          totalPrice: price,
        });
        newState.addedToCart += 1;
      }

      return newState;
    }
    case "INCREASE_IN_CART": {
      const newState = { ...state };
      newState.addedProducts.map((product) => {
        if (product.id == action.id) {
          product.count += 1;
          product.totalPrice = product.count * product.price;
        }
      });
      return newState;
    }
    case "DECREASE_IN_CART": {
      const newState = { ...state };
      newState.addedProducts.map((product) => {
        if (product.id == action.id) {
          product.count -= 1;
          product.totalPrice = product.count * product.price;
        }
      });
      return newState;
    }
    case "REMOVE_FROM_CART": {
      const newState = { ...state };
      const updateAddedProducts = newState.addedProducts.filter(
        (product) => product.id !== action.id
      );
      newState.addedProducts = updateAddedProducts;
      newState.addedToCart -= 1;

      return newState;
    }
    default: {
      return state;
    }
  }
};
 