import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import App from './components/App'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(promise(), thunk, logger)
const store = createStore(rootReducer, middleware)


render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
)