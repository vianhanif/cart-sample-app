import { createBrowserHistory } from 'history'
import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import product from './product'
import cart from './cart'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
    combineReducers({
      router: connectRouter(history),
      product,
      cart,
    }),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
      ),
    ),
  )

  return store
}