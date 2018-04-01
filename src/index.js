import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'
import reducer from './features/search/redux'

import 'antd/dist/antd.css'
import './index.css'
// import App from './App';
import Search from './features/search/Search'
import registerServiceWorker from './registerServiceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [promiseMiddleware(), logger] // more middleware
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
)

ReactDOM.render(
  <Provider store={store}>
    <Search />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
