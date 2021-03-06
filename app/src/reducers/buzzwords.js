import {
  SET_BUZZWORDS,
  CHG_CURRENT_BUZZWORD,
  CLEAR_BUZZWORD_FORMDATA,
  CHG_CURRENT_VIEW_EDIT_BUZZWORD,
  RESET_VIEW_EDIT_BUZZWORD
} from '../constants'
import { merge } from 'ramda'

export const buzzwords = (state = [], action) => {
  switch (action.type) {
    case SET_BUZZWORDS:
      return action.payload
    default:
      return state
  }
}

export const currentBuzzword = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_BUZZWORD:
      return merge(state, action.payload)
    case CLEAR_BUZZWORD_FORMDATA:
      return {}
    default:
      return state
  }
}

export const currentViewEditBuzzword = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_VIEW_EDIT_BUZZWORD:
      return merge(state, action.payload)
    case RESET_VIEW_EDIT_BUZZWORD:
      return {}
    default:
      return state
  }
}
