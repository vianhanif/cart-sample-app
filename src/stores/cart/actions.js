export const addToCart = (item) => ({
  type: 'add_cart',
  payload: {item},
})

export const toggleDetail = () => ({
  type: 'toggle_detail'
})