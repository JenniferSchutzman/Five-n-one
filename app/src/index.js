import React from 'react'
import { render } from 'react-dom'
import Tachyons from 'tachyons'
import { Provider } from 'react-redux'
import store from './store'
import { setColors } from './action-creators/colors'
import { setBuzzwords } from './action-creators/buzzwords'
import { setStarwars } from './action-creators/starwars'
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
store.dispatch(setStarwars)
store.dispatch(setBuzzwords)
store.dispatch(setEmojis)
store.dispatch(setCookies)
