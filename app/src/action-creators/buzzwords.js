import fetch from 'isomorphic-fetch'
import {
  SET_BUZZWORDS,
  SET_ERROR_MSG,
  CHG_CURRENT_BUZZWORD,
  CLEAR_BUZZWORD_FORMDATA,
  CHG_CURRENT_VIEW_EDIT_BUZZWORD
} from '../constants'
const url = 'http://localhost:5000/buzzwords'

export const setBuzzwords = async (dispatch, getState) => {
  const buzzwords = await fetch(url).then(res => res.json())
  dispatch({ type: SET_BUZZWORDS, payload: buzzwords })
}

export const getBuzzword = id => async (dispatch, getState) => {
  const buzzword = await fetch(`${url}/${id}`).then(res => res.json())
  dispatch({ type: CHG_CURRENT_VIEW_EDIT_BUZZWORD, payload: buzzword })
  console.log('in getBuzzword buzzword', buzzword)
  console.log('in getBuzzword dispatch', dispatch)
}

export const addBuzzword = (buzzword, history) => async (
  dispatch,
  getState
) => {
  console.log('addBuzzword action creator', buzzword)
  const method = 'POST'
  const headers = {
    'Content-Type': 'application/json'
  }
  const body = JSON.stringify(buzzword)
  console.log('buzzword body', body)
  const result = await fetch(url, { headers, method, body })
    .then(httpResponse => {
      console.log('fetch httpResponse', httpResponse)
      return httpResponse.json()
    })
    .catch(err => {
      console.log('fetch err', err)
      dispatch({
        type: SET_ERROR_MSG,
        payload: 'Error adding buzzword to the database'
      })
    })
  if (result.ok) {
    dispatch({ type: CHG_CURRENT_BUZZWORD, payload: {} })
    dispatch(setBuzzwords)
    dispatch({ type: CLEAR_BUZZWORD_FORMDATA })
    history.push('/buzzwords')
  } else {
    console.log('error adding buzzword, err')
  }
}

export const chgBuzzword = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_BUZZWORD, payload: { [field]: value } })
}
