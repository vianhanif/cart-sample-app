import { createBrowserHistory } from 'history'
import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import product from './product'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
    combineReducers({
      router: connectRouter(history),
      product,
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