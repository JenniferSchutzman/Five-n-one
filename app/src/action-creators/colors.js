import fetch from 'isomorphic-fetch'
import { SET_COLORS } from '../constants'
const url = 'http://localhost:5000/colors'
/*  THINK OF FETCH LIKE OUR POSTMAN   */
export const setColors = async (dispatch, setState) => {
  const colors = await fetch(url).then(res => res.json())
  dispatch({ type: SET_COLORS, payload: colors })
}

export default setColors
