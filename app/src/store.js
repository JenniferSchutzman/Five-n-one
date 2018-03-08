import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors } from './reducers/colors'
import { buzzwords } from './reducers/buzzwords'
import { starWarsCharacters } from './reducers/starwars'
import { emojis } from './reducers/emojis'
import { fortuneCookies } from './reducers/fortune-cookies'
export default createStore(
  combineReducers({
    colors,
    buzzwords,
    starWarsCharacters,
    emojis,
    fortuneCookies
  }),
  applyMiddleware(thunk)
)
