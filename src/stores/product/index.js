const initialState = {
  items: [{
      id: 1,
      name: 'Produk 1',
      price: 30000,
    },
    {
      id: 2,
      name: 'Produk 2',
      price: 30000,
    },
    {
      id: 3,
      name: 'Produk 3',
      price: 30000,
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'add_product': {
      let { items } = state
      let {name, price} = action.payload
      let id = state.items.length + 1
      items.push({
        id, name, price
      })
      return {
        items
      }
    }
    default: {
      return state
    }
  }
}