import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import initStore from 'reduxStuff/initStore'
import Main from './Main'
import registerServiceWorker from './registerServiceWorker'
import 'todomvc-app-css/index.css'

const store = initStore()

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
