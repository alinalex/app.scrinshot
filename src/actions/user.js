import axios from 'axios'
import { notification } from 'antd'
import { ACCOUNT_DELETED, UPDATE_USER, LOADING_ON, LOADING_OFF } from './types'

// delete account and profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete('/api/profile/delete')

      dispatch({ type: ACCOUNT_DELETED })

      notification.info({
        message: 'Account Success',
        description: 'Your account has been permanently deleted',
      })
    } catch (err) {
      notification.error({
        message: 'Account Error',
        description: err.response.statusText,
      })
    }
  }
}

// update password
export const updatePassword = (formData) => async (dispatch) => {
  dispatch({ type: LOADING_ON })

  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }

  try {
    const res = await axios.post('/api/profile/password', formData, config)

    notification.success({
      message: 'Password Update Success',
      description: res.data.msg,
    })
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach((error) =>
        notification.error({
          message: 'Password Update Error',
          description: error.msg,
        }),
      )
    }
  }

  dispatch({ type: LOADING_OFF })
}

// update user personal info
export const updatePersonalInfo = (formData) => async (dispatch) => {
  dispatch({ type: LOADING_ON })

  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }

  try {
    const res = await axios.put('/api/profile/personalInfo', formData, config)

    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    })

    notification.success({
      message: 'Profile Update Success',
      description: res.data.msg,
    })
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach((error) =>
        notification.error({
          message: 'Profile Update Error',
          description: error.msg,
        }),
      )
    }
  }

  dispatch({ type: LOADING_OFF })
}

// update user profile details
export const updateProfileDetails = (formData) => async (dispatch) => {
  dispatch({ type: LOADING_ON })

  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }

  try {
    const res = await axios.put('/api/profile/profileDetails', formData, config)

    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    })

    notification.success({
      message: 'Profile Update Success',
      description: res.data.msg,
    })
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach((error) =>
        notification.error({
          message: 'Profile Update Error',
          description: error.msg,
        }),
      )
    }
  }

  dispatch({ type: LOADING_OFF })
}
