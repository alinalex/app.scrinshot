import axios from 'axios'
import { history } from 'App'
import { notification } from 'antd'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  USER_ACTIVATED_SUCCESS,
  USER_ACTIVATED_FAIL,
  USER_RESET_SUCCESS,
  USER_RESET_FAIL,
  LOADING_ON,
  LOADING_OFF,
} from './types'

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/auth')

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    })
  }
}

// Register User
export const register = ({ name, email, password, confirmPassword, timezone }) => async (
  dispatch,
) => {
  dispatch({ type: LOADING_ON })

  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }

  const body = JSON.stringify({
    name,
    email,
    password,
    confirmPassword,
    timezone,
  })

  try {
    await axios.post('/api/user/register', body, config)

    await dispatch({
      type: REGISTER_SUCCESS,
    })

    await dispatch(loadUser())

    notification.success({
      message: 'Registration Success',
      description: 'You have successfully created your Scrinshot account!',
    })
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach((error) =>
        notification.error({
          message: 'Registration Error',
          description: error.msg,
        }),
      )
    }

    dispatch({
      type: REGISTER_FAIL,
    })
  }

  dispatch({ type: LOADING_OFF })
}

// Login User
export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOADING_ON })

  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }

  const body = JSON.stringify({ email, password })

  try {
    await axios.post('/api/auth', body, config)

    await dispatch({
      type: LOGIN_SUCCESS,
    })

    await dispatch(loadUser())

    notification.success({
      message: 'Authentication Success',
      description: 'You have successfully logged in to Scrinshot!',
    })
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach((error) =>
        notification.error({
          message: 'Authentication Error',
          description: error.msg,
        }),
      )
    }

    dispatch({
      type: LOGIN_FAIL,
    })
  }

  dispatch({ type: LOADING_OFF })
}

// Logout / Clear profile
export const logout = () => async (dispatch) => {
  try {
    await axios.get('/api/auth/logout')

    await dispatch({
      type: CLEAR_PROFILE,
    })

    await dispatch({
      type: LOGOUT,
    })
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach((error) =>
        notification.error({
          message: 'Account Error',
          description: error.msg,
        }),
      )
    }
  }
}

// Activate user
export const activateUser = (id) => async (dispatch) => {
  try {
    await axios.get(`/api/user/activate/${id}`)

    await dispatch({
      type: USER_ACTIVATED_SUCCESS,
    })

    notification.success({
      message: 'Activation Success',
      description: 'Your Scrinshot account has been successfully activated!',
    })
  } catch (err) {
    await dispatch({
      type: USER_ACTIVATED_FAIL,
    })

    notification.error({
      message: 'Activation Error',
      description: 'Invalid activation token',
    })
  }
}

// send email reset password
export const forgot = (email) => async (dispatch) => {
  dispatch({ type: LOADING_ON })

  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }

  try {
    const res = await axios.post('/api/user/forgot', { email }, config)

    notification.success({
      message: 'Forgot Password Success',
      description: res.data.msg,
    })
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach((error) =>
        notification.error({
          message: 'Forgot Password Error',
          description: error.msg,
        }),
      )
    }
  }

  dispatch({ type: LOADING_OFF })
}

// check if password reset link is valid
export const checkReset = (id) => async (dispatch) => {
  dispatch({ type: LOADING_ON })

  try {
    await axios.get(`/api/user/forgot/${id}`)

    dispatch({
      type: USER_RESET_SUCCESS,
    })
  } catch (err) {
    dispatch({
      type: USER_RESET_FAIL,
    })
  }

  dispatch({ type: LOADING_OFF })
}

// reset password
export const reset = (formData) => async () => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }

  try {
    const res = await axios.post('/api/user/forgot/reset', formData, config)

    history.push('/auth/login')

    notification.success({
      message: 'Forgot Password Success',
      description: res.data.msg,
    })
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach((error) =>
        notification.error({
          message: 'Forgot Password Error',
          description: error.msg,
        }),
      )
    }
  }
}
