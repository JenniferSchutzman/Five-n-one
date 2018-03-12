import fetch from 'isomorphic-fetch'
import { SET_STARWARS, CHG_STARWARS_CHARACTER } from '../constants'
const url = 'http://localhost:5000/starwars'

// export const setStarwars = async (dispatch, getState) => {
//   const starwars = await fetch(url).then(res => res.json())
//   dispatch({ type: SET_STARWARS, payload: starwars })
// }

export const setStarwars = async (dispatch, setState) => {
  const starwars = await fetch(url).then(res => res.json())
  dispatch({ type: SET_STARWARS, payload: starwars })
}

export const chgStarwarsCharacter = (field, value) => (dispatch, setState) => {
  dispatch({ type: CHG_STARWARS_CHARACTER, payload: { [field]: value } })
}

export const addStarwarsCharacter = (character, history) => async (
  dispatch,
  getState
) => {
  const method = 'POST'
  const headers = { 'Content-Type': 'application/json' }
  const body = JSON.stringify(character)

  const result = await fetch(url, (method, headers, body))
    .then(res => res.json())
    .catch(err =>
      console.log(
        'problem with addStarwarsCharacter before the history push',
        err
      )
    )
  if (result.ok) {
    dispatch(setStarwars)
    history.push('/starwars')
  } else {
    console.log('Problem with addStarwarsCharacter action creator')
  }
}
