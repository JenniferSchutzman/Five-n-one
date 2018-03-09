import { SET_FORTUNECOOKIES, CHG_CURRENT_COOKIE } from '../constants'
import { merge } from 'ramda'

export const fortuneCookies = (state = [], action) => {
  switch (action.type) {
    case SET_FORTUNECOOKIES:
      return action.payload
    default:
      return state
  }
}

export const currentCookie = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_COOKIE:
      return merge(state, action.payload)
    default:
      return state
  }
}
