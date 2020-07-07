import { MENU_SET_STATE } from '../actions/types'

const initialState = {
  menuData: [],
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case MENU_SET_STATE:
      return {
        ...state,
        menuData: payload,
      }

    default:
      return state
  }
}
