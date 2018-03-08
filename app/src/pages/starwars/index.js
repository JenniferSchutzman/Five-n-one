import React from 'react'
//import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = c => {
  return <li key={c.id}>{c.name}</li>
}

const StarWars = props => {
  return (
    <div>
      <h1>Star Wars Character Names</h1>
      {map(li, props.starwars)}
    </div>
  )
}
function mapStateToProps(state) {
  console.log('...and the state is...', state)
  return { starwars: state.starWarsCharacters }
}

/* the mapStateToProps function is pulling state from the reducer
in the other directory called starWarsCharacters*/

const connector = connect(mapStateToProps)
export default connector(StarWars)

// class Starwars extends React.Component {
//   constructor() {
//     super()
//     this.state = { starwars: [] }
//   }
//   componentDidMount() {
//     fetch('http://localhost:5000/starwars')
//       .then(res => res.json())
//       .then(starwars => this.setState({ starwars }))
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Starwars</h1>
//         <ul>{map(li, this.state.starwars)}</ul>
//       </div>
//     )
//   }
// }
