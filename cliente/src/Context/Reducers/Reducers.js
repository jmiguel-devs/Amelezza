const initialState = {
    toggleCart: false
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case '@cart/toggleCart':
      return {...state,
        toggleCart: !state.toggleCart}
  
    default:
      break;
  }
}

export default cartReducer