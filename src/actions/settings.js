import store from 'store'
import qs from 'qs'
import { history } from 'App'
import { SETTINGS_CHANGE_SETTING, SETTINGS_SET_PRIMARY_COLOR, SETTINGS_SET_THEME } from './types'

export const setSetting = ({ payload: { setting, value } }) => async () => {
  await store.set(`app.settings.${setting}`, value)

  // dispatch({
  //   type: SETTINGS_SET_STATE,
  //   payload: {
  //     [setting]: value,
  //   },
  // })
}

export const changeSetting = ({ payload: { setting, value } }) => async (dispatch) => {
  dispatch({
    type: SETTINGS_CHANGE_SETTING,
    payload: {
      [setting]: value,
    },
  })

  dispatch(setSetting({ payload: { setting, value } }))
}

export const setPrimaryColor = ({ payload: { color } }) => async (dispatch) => {
  const addStyles = () => {
    const styleElement = document.querySelector('#primaryColor')
    if (styleElement) {
      styleElement.remove()
    }
    const body = document.querySelector('body')
    const styleEl = document.createElement('style')
    const css = document.createTextNode(`:root { --kit-color-primary: ${color};}`)
    styleEl.setAttribute('id', 'primaryColor')
    styleEl.appendChild(css)
    body.appendChild(styleEl)
  }

  addStyles()

  dispatch({
    type: SETTINGS_CHANGE_SETTING,
    payload: {
      primaryColor: color,
    },
  })
}

export const setTheme = ({ theme }) => async (dispatch) => {
  const nextTheme = theme === 'dark' ? 'dark' : 'default'
  document.querySelector('html').setAttribute('data-kit-theme', nextTheme)
  dispatch({
    type: SETTINGS_CHANGE_SETTING,
    payload: {
      theme: nextTheme,
    },
  })

  dispatch(setSetting({ payload: { setting: 'theme', value: nextTheme } }))
}

export const setup = () => async (dispatch) => {
  // load settings from url on app load
  const changeSettings = (search) => {
    const query = qs.parse(search, { ignoreQueryPrefix: true })
    Object.keys(query).forEach((key) => {
      let value
      switch (query[key]) {
        case 'false':
          value = false
          break
        case 'true':
          value = true
          break
        default:
          value = query[key]
          break
      }
      if (key === 'theme') {
        dispatch({
          type: SETTINGS_SET_THEME,
          payload: {
            theme: value,
          },
        })
        return
      }
      dispatch({
        type: SETTINGS_CHANGE_SETTING,
        payload: {
          key: value,
        },
      })
    })
  }

  changeSettings(history.location.search)

  history.listen((params) => {
    const { search } = params
    changeSettings(search)
  })

  // set primary color on app load
  const primaryColor = () => {
    const color = store.get('app.settings.primaryColor')
    if (color) {
      dispatch({
        type: SETTINGS_SET_PRIMARY_COLOR,
        payload: {
          color,
        },
      })
    }
  }

  primaryColor()

  // init theme on app load
  const initTheme = () => {
    const { search } = history.location
    const query = qs.parse(search, { ignoreQueryPrefix: true })
    const theme = query.theme || store.get('app.settings.theme') || 'default'
    dispatch(setTheme({ theme }))
    // dispatch({
    //   type: SETTINGS_SET_THEME,
    //   payload: {
    //     theme,
    //   },
    // })
  }

  initTheme()

  // detect isMobileView setting on app load and window resize
  const isMobileView = (load = false) => {
    const currentState = global.window.innerWidth < 768
    const prevState = store.get('app.settings.isMobileView')
    if (currentState !== prevState || load) {
      dispatch({
        type: SETTINGS_CHANGE_SETTING,
        payload: {
          isMobileView: currentState,
        },
      })
      dispatch(setSetting({ payload: { setting: 'isMobileView', value: currentState } }))
    }
  }

  // detect viewport width on app load and window resize
  const isMenuToggled = () => {
    const shouldToggle = global.window.innerWidth < 1024
    const prevState = store.get('app.settings.isMenuCollapsed')
    if (shouldToggle || prevState) {
      dispatch({
        type: SETTINGS_CHANGE_SETTING,
        payload: {
          isMenuCollapsed: true,
        },
      })
      dispatch(setSetting({ payload: { setting: 'isMenuCollapsed', value: true } }))
    }
  }

  isMobileView(true)
  isMenuToggled()

  window.addEventListener('resize', () => {
    isMobileView()
    isMenuToggled()
  })
}
