import { TIMEZONE_SET_STATE } from '../actions/types'

const initialState = {
  timezone: [],
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case TIMEZONE_SET_STATE:
      return {
        ...state,
        timezone: payload,
      }

    default:
      return state
  }
}
