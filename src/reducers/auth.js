import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
  USER_ACTIVATED_SUCCESS,
  USER_ACTIVATED_FAIL,
  USER_RESET_SUCCESS,
  USER_RESET_FAIL,
  UPDATE_USER,
  LOADING_ON,
  LOADING_OFF,
} from '../actions/types'

const initialState = {
  isAuthenticated: null,
  isResetTokenValid: null,
  isActivated: false,
  loading: true,
  user: null,
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case LOADING_ON:
      return {
        ...state,
        loading: true,
      }

    case LOADING_OFF:
      return {
        ...state,
        loading: false,
      }

    case UPDATE_USER:
      return {
        ...state,
        user: payload.user,
      }

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isActivated: payload.emailVerified,
        loading: false,
        user: payload,
      }

    case USER_ACTIVATED_SUCCESS:
      return {
        ...state,
        isActivated: true,
      }

    case USER_ACTIVATED_FAIL:
      return {
        ...state,
        isActivated: false,
      }

    case USER_RESET_SUCCESS:
      return {
        ...state,
        isResetTokenValid: true,
      }

    case USER_RESET_FAIL:
      return {
        ...state,
        isResetTokenValid: false,
      }

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      }

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
    case ACCOUNT_DELETED:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      }

    default:
      return state
  }
}
