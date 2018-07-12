import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App} />
    </Switch>
  </main>
)

export default Main
