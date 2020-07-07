import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import menu from './menu'
import timezone from './timezone'
import settings from './settings'
import screenshots from './screenshot'

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    menu,
    screenshots,
    settings,
    timezone,
  })

export default rootReducer

// export default (history) =>
//   combineReducers({
//     router: connectRouter(history),
//     auth,
//     profile,
//     menu,
//     settings,
//   })
