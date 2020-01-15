const initialState = {
  items: [{
      id: 1,
      name: 'Nasi + Ayam Geprek',
      image: 'https://i0.wp.com/www.pancan.org/wp-content/uploads/2019/03/healthy-food-meat-veg-733x450.jpg?fit=733%2C450&ssl=1',
      price: 30000,
    },
    {
      id: 2,
      name: 'Nasi Goreng Telur',
      image: 'https://previews.123rf.com/images/nitsuki/nitsuki1806/nitsuki180600009/104781198-healthy-meals-culinary-and-protein-food-concept-nutrient-rich-food-of-fish-beef-chicken-and-glass-of.jpg',
      price: 30000,
    },
    {
      id: 3,
      name: 'Ketoprak',
      image: 'http://eetdagoodfud.weebly.com/uploads/3/8/4/4/38441103/7600082_orig.jpg',
      price: 30000,
    },
    {
      id: 4,
      name: 'Indomie Rebus & Tuna',
      image: 'http://media.coreperformance.com/images/411*308/knowledge-protein1.jpg',
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