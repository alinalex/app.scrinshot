import getMenuData from '../services/menu.service'
import { MENU_SET_STATE } from './types'

export const getMenu = () => async (dispatch) => {
  const menuData = await getMenuData()

  dispatch({
    type: MENU_SET_STATE,
    payload: menuData,
  })
}
