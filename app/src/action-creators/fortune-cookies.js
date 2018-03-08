import fetch from 'isomorphic-fetch'
import { SET_FORTUNECOOKIES } from '../constants'
const url = 'http://localhost:5000/fortune-cookies'

export const setCookies = async (dispatch, setState) => {
  const cookies = await fetch(url).then(res => res.json())
  dispatch({ type: SET_FORTUNECOOKIES, payload: cookies })
}

export default setCookies
