export const incStock = (id) => ({
  type: 'inc_stock',
  payload: {id}
})

export const decStock = (id) => ({
  type: 'dec_stock',
  payload: {id}
})