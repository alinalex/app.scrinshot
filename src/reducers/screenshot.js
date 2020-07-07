import {
  SCREENSHOT_ADD,
  SCREENSHOT_LOADED,
  SCREENSHOT_EDIT,
  SCREENSHOT_REMOVE,
} from '../actions/types'

const initialState = []

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SCREENSHOT_ADD:
      return [...state, payload.screenshot]

    case SCREENSHOT_EDIT:
      return state.map((screenshot) => {
        if (screenshot._id === payload.screenshot._id) {
          return {
            ...screenshot,
            ...payload.screenshot,
          }
        }
        return screenshot
      })

    case SCREENSHOT_REMOVE:
      return state.filter(({ _id }) => _id !== payload._id)

    case SCREENSHOT_LOADED:
      return payload.screenshots
    default:
      return state
  }
}
