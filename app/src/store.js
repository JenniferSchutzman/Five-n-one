import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors, currentColor } from './reducers/colors'
import {
  buzzwords,
  currentBuzzword,
  currentViewEditBuzzword
} from './reducers/buzzwords'
import { starwars, currentStarwarsCharacter } from './reducers/starwars'
import { emojis } from './reducers/emojis'
import { fortuneCookies, currentCookie } from './reducers/fortune-cookies'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    buzzwords,
    starwars,
    currentStarwarsCharacter,
    emojis,
    fortuneCookies,
    currentBuzzword,
    currentViewEditBuzzword
  }),
  applyMiddleware(thunk)
)
