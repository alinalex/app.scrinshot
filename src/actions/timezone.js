import getTimezoneData from '../services/timezone.service'
import { TIMEZONE_SET_STATE } from './types'

export const getTimezone = () => async (dispatch) => {
  const timezone = await getTimezoneData()

  dispatch({
    type: TIMEZONE_SET_STATE,
    payload: timezone,
  })
}
