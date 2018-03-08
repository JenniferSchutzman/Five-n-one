import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import Buzzwords from './pages/buzzwords'
import Cookies from './pages/fortune-cookies'
import Starwars from './pages/starwars'
import Emojis from './pages/emojis'
import { ColorForm } from './pages/colors/form'
const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">BuzzWords</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/fortune-cookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  )
}
/*  This BrowserRouter component gives you all of these paths with history */
const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/colors" component={Colors} />
          <Route path="/starwars" component={Starwars} />
          <Route path="/emojis" component={Emojis} />
          <Route path="/fortune-cookies" component={Cookies} />
          <Route path="/buzzwords" component={Buzzwords} />
          <Route path="/colors/new" component={ColorForm} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
