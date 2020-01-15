import React from 'react'
import Home from './pages/home'
import Admin from './pages/admin'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './stores'

const store = configureStore()

export default () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route exact path="/" component={Home}></Route>
        <Route path="/admin/products/add" component={Admin}></Route>
      </ConnectedRouter>
    </Provider>
  )
}
