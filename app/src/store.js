import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors, currentColor } from './reducers/colors'
import { buzzwords } from './reducers/buzzwords'
import { starwars } from './reducers/starwars'
import { emojis } from './reducers/emojis'
import { fortuneCookies, currentCookie } from './reducers/fortune-cookies'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    buzzwords,
    starwars,
    emojis,
    fortuneCookies
  }),
  applyMiddleware(thunk)
)
