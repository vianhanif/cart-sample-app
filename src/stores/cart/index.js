import {
  useReducer
} from 'react'

const initialState = {
  showDetail: false,
  items: []
}

export default () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add_cart': {
        let {
          item
        } = action.payload
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
      case 'toggle_detail': {
        return {
          ...state,
          showDetail: !state.showDetail,
        }
      }
      default:
        return state
    }
  }, initialState)
  return [state, dispatch]
}