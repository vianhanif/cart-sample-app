export const addProduct = ({name, price, stock}) => ({
  type: 'add_product',
  payload: {name, price, stock}
})