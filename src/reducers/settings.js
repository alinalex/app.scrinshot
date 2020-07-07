import store from 'store'
import {
  SETTINGS_SET_STATE,
  SETTINGS_CHANGE_SETTING,
  SETTINGS_SET_PRIMARY_COLOR,
  SETTINGS_SET_THEME,
} from '../actions/types'

const STORED_SETTINGS = (storedSettings) => {
  const settings = {}
  Object.keys(storedSettings).forEach((key) => {
    const item = store.get(`app.settings.${key}`)
    settings[key] = typeof item !== 'undefined' ? item : storedSettings[key]
  })
  return settings
}

const initialState = {
  ...STORED_SETTINGS({
    authProvider: 'jwt', // firebase, jwt
    logo: 'Scrinshot',
    locale: 'en-US',
    isSidebarOpen: false,
    isSupportChatOpen: false,
    isMobileView: false,
    isMobileMenuOpen: false,
    isMenuCollapsed: false,
    menuLayoutType: 'left', // left, top, nomenu
    routerAnimation: 'slide-fadein-up', // none, slide-fadein-up, slide-fadein-right, fadein, zoom-fadein
    menuColor: 'white', // white, dark, gray
    theme: 'default', // default, dark
    authPagesColor: 'white', // white, gray, image
    primaryColor: '#848BD8',
    leftMenuWidth: 256,
    isMenuUnfixed: false,
    isMenuShadow: false,
    isTopbarFixed: true,
    isGrayTopbar: true,
    isContentMaxWidth: false,
    isAppMaxWidth: false,
    isGrayBackground: true,
    isCardShadow: true,
    isSquaredBorders: false,
    isBorderless: false,
  }),
}

export default function settingsReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SETTINGS_SET_STATE:
      return { ...state, ...payload }

    case SETTINGS_CHANGE_SETTING:
      return {
        ...state,
        ...payload,
      }
    case SETTINGS_SET_THEME:
      return {
        ...state,
        theme: payload.theme,
      }
    case SETTINGS_SET_PRIMARY_COLOR:
    default:
      return state
  }
}
