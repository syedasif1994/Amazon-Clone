// ---------------------------------------------------------
// --------------------- Default Value ---------------------
// ---------------------------------------------------------

export const initialState = {
  cart: [],
  user: null
};

// ----------------------------------------------------
// --------------------- Selector ---------------------
// ----------------------------------------------------
export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.product_price + amount, 0)


// ---------------------------------------------------
// --------------------- Reducer ---------------------
// ---------------------------------------------------

const reducer = (state, action) => {

  switch (action.type) {

    // --------------------- ADD to CART ---------------------
    case "ADD_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };


    // --------------------- REMOVE from CART ---------------------

    case "REMOVE_CART":

      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)
      }
      return {
        ...state,
        cart: newCart
      }

      case "SET_USER":
        return {
          ...state,
          user: action.user
        }

    // --------------------- Default ---------------------

    default:
      return state;
  }

};

export default reducer;
