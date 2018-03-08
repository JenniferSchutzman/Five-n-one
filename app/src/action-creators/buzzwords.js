import fetch from 'isomorphic-fetch'
import { SET_BUZZWORDS } from '../constants'
const url = 'http://localhost:5000/buzzwords'

export const setBuzzwords = async (dispatch, setState) => {
  const buzzwords = await fetch(url).then(res => res.json())
  dispatch({ type: SET_BUZZWORDS, payload: buzzwords })
}
