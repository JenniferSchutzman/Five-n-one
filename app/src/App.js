import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import Buzzwords from './pages/buzzwords'
import Cookies from './pages/fortune-cookies'
import Starwars from './pages/starwars'
import Emojis from './pages/emojis'
import ColorForm from './pages/colors/form'
import CookieForm from './pages/fortune-cookies/form'
import BuzzwordForm from './pages/buzzwords/form'
import StarwarsForm from './pages/starwars/form'
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
          <Route exact path="/starwars" component={Starwars} />
          <Route
            path="starwars/new"
            render={props => (
              <StarwarsForm
                {...props}
                formTitle="Add Characters to starwars list"
              />
            )}
          />
          <Route path="/emojis" component={Emojis} />
          <Route exact path="/fortune-cookies" component={Cookies} />
          <Route
            path="/cookies/new"
            render={props => <CookieForm {...props} formTitle="Add Cookie" />}
          />
          <Route exact path="/buzzwords" component={Buzzwords} />
          <Route
            path="/buzzwords/new"
            render={props => (
              <BuzzwordForm {...props} formTitle="Add Buzzword" />
            )}
          />
          <Route
            path="/colors/new"
            render={props => (
              <ColorForm {...props} formTitle="add color here" />
            )}
          />}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
