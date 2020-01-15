export const addProduct = ({name, price, description}) => ({
  type: 'add_product',
  payload: {name, price, description}
})