const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'add_cart': {
      let {item} = action.payload
      let product = state.items.find(data => data.product.id === item.id)
      if (!product) {
        state.items.push({
          product: item,
          count: 1
        })
      } else {
        product.count++
      }
      return {
        items: state.items
      }
    }
    default:
      return state
  }
}