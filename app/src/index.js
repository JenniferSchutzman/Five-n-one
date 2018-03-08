import React from 'react'
import { render } from 'react-dom'
import 'tachyons'
import { Provider } from 'react-redux'
import store from './store'
import { setColors } from './action-creators/colors'
import { setBuzzwords } from './action-creators/buzzwords'
import { setStarWarsCharacters } from './action-creators/starwars'
import { setEmojis } from './action-creators/emojis'
import { setCookies } from './action-creators/fortune-cookies'
import App from './App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(setColors)
store.dispatch(setStarWarsCharacters)
store.dispatch(setBuzzwords)
store.dispatch(setEmojis)
store.dispatch(setCookies)
