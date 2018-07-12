import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import {
  composeWithDevTools
} from 'redux-devtools-extension'
import {
  createOffline
} from '@redux-offline/redux-offline'
import defaultConfig from '@redux-offline/redux-offline/lib/defaults'
import reducers from './reducers'
import customMiddleware from './middleware'

const initStore = (initialState = {}) => {
  if (process.browser && window.__store) {
    return window.__store
  }

  const config = {
    ...defaultConfig,
    retry(_action, retries) {
      const delay = (retries + 1) * 1000
      console.log(delay/1000)
      return delay
    },
    returnPromises: true
  };

  const {
    middleware: offlineMiddleware,
    enhanceReducer: offlineEnhanceReducer,
    enhanceStore: offlineEnhanceStore
  } = createOffline(config)

  const middleware = [
    offlineMiddleware,
    customMiddleware,
    thunk
  ]

  const enhancers = [
    offlineEnhanceStore,
    applyMiddleware(...middleware),
  ]

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' ?
    composeWithDevTools : compose

  const store = createStore(
    offlineEnhanceReducer(reducers),
    initialState,
    composeEnhancers(...enhancers)
  )

  if (process.browser) {
    window.__store = store
  }

  return store
}

export default initStore
