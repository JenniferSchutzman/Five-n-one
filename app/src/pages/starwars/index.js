import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = sn => {
  return (
    <li key={sn.id} style={{ starwars: sn.value }}>
      {sn.value.all}
    </li>
  )
}

class Starwars extends React.Component {
  constructor() {
    super()
    this.state = { starwars: [] }
  }
  componentDidMount() {
    fetch('http://localhost:5000/starwars')
      .then(res => res.json())
      .then(starwars => this.setState({ starwars }))
  }

  render() {
    return (
      <div>
        <h1>Starwars</h1>
        <ul>{map(li, this.state.starwars)}</ul>
      </div>
    )
  }
}

export default Starwars
