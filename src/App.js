import React from 'react'
import Home from './pages/home'
import Admin from './pages/admin'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/index.scss';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/admin/products/add" component={Admin}></Route>
      </Switch>
    </BrowserRouter>
  )
}