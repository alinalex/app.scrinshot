import 'antd/lib/style/index.less' // antd core styles
// import 'antd/dist/antd.css'
import './components/kit/vendors/antd/themes/default.less' // default theme antd components
import './components/kit/vendors/antd/themes/dark.less' // dark theme antd components
import './global.scss' // app & third-party component styles

import React, { useEffect } from 'react'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'

// store
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'

// language and router
import Localization from './localization'
import Router from './router'

// actions
import { loadUser } from './actions/auth'
import { getMenu } from './actions/menu'
import { getTimezone } from './actions/timezone'
import { setup } from './actions/settings'
import { loadScreenshots } from './actions/screenshot'

// history
const history = createBrowserHistory()

// store
const initialState = {}
const middleware = [thunk]
const store = createStore(
  rootReducer(history),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
    store.dispatch(getMenu())
    store.dispatch(setup())
    store.dispatch(getTimezone())
    store.dispatch(loadScreenshots())
  }, [])

  return (
    <Provider store={store}>
      <Localization>
        <Router history={history} />
      </Localization>
    </Provider>
  )
}

export { store, history }
export default App
