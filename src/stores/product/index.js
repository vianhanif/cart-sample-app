const initialState = {
  items: [{
      id: 1,
      name: 'Produk 1',
      price: 30000,
      stock: 5,
    },
    {
      id: 2,
      name: 'Produk 2',
      price: 30000,
      stock: 5,
    },
    {
      id: 3,
      name: 'Produk 3',
      price: 30000,
      stock: 5,
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'inc_stock': {
      const {
        id
      } = action.payload
      const item = state.items.find(item => item.id === id)
      item.stock++
      return {
        items: state.items
      }
    }
    case 'dec_stock': {
      const {
        id
      } = action.payload
      const item = state.items.find(item => item.id === id)
      item.stock--
      return {
        items: state.items
      }
    }
    default: {
      return state
    }
  }
}