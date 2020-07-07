import axios from 'axios'
import { notification } from 'antd'
import { history } from 'App'
import {
  SCREENSHOT_ADD,
  LOADING_ON,
  LOADING_OFF,
  SCREENSHOT_LOADED,
  SCREENSHOT_EDIT,
  SCREENSHOT_REMOVE,
} from './types'

// add screenshot
export const addScreenshot = (formData) => async (dispatch) => {
  dispatch({ type: LOADING_ON })

  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }

  try {
    const res = await axios.post('/api/screenshot', formData, config)

    await dispatch({ type: SCREENSHOT_ADD, payload: res.data })

    history.push('/screenshots/my-screenshots')

    notification.success({
      message: 'Screenshot Success',
      description: res.data.msg,
    })
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach((error) =>
        notification.error({
          message: 'Screenshot Error',
          description: error.msg,
        }),
      )
    }
  }

  dispatch({ type: LOADING_OFF })
}

// edit screenshot
export const editScreenshot = (formData, id) => async (dispatch) => {
  dispatch({ type: LOADING_ON })

  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }

  try {
    const res = await axios.put(`/api/screenshot/${id}`, formData, config)

    await dispatch({ type: SCREENSHOT_EDIT, payload: res.data })

    history.push(`/screenshots/${id}`)

    notification.success({
      message: 'Screenshot Success',
      description: res.data.msg,
    })
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach((error) =>
        notification.error({
          message: 'Screenshot Error',
          description: error.msg,
        }),
      )
    }
  }

  dispatch({ type: LOADING_OFF })
}

// delete screenshot
export const deleteScreenshot = (id) => async (dispatch) => {
  if (window.confirm('Are you sure you want to delete this website and all its screenshots?')) {
    dispatch({ type: LOADING_ON })

    try {
      const res = await axios.delete(`/api/screenshot/${id}`)

      await dispatch({ type: SCREENSHOT_REMOVE, payload: { _id: id } })

      history.push('/screenshots/my-screenshots')

      notification.success({
        message: 'Screenshot Success',
        description: res.data.msg,
      })
    } catch (err) {
      const errors = err.response.data.errors

      if (errors) {
        errors.forEach((error) =>
          notification.error({
            message: 'Screenshot Error',
            description: error.msg,
          }),
        )
      }
    }

    dispatch({ type: LOADING_OFF })
  }
}

// get all user screenshots
export const loadScreenshots = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/screenshot')

    dispatch({
      type: SCREENSHOT_LOADED,
      payload: res.data,
    })
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach((error) =>
        notification.error({
          message: 'Screenshot Error',
          description: error.msg,
        }),
      )
    }
  }
}
