import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = emoji => {
  return (
    <li key={emoji.id} style={{ emoji: emoji.name }}>
      {emoji.value}
    </li>
  )
}

const Emojis = props => {
  return (
    <div>
      <h1>Emojis</h1>
      <ul>{map(li, props.emojis)}</ul>
    </div>
  )
}
function mapStateToProps(state) {
  console.log('...and the state is...', state)
  return { emojis: state.emojis }
}
const connector = connect(mapStateToProps)

export default connector(Emojis)
// class Emojis extends React.Component {
//   constructor() {
//     super()
//     this.state = { emojis: [] }
//   }
//   componentDidMount() {
//     fetch('http://localhost:5000/emojis')
//       .then(res => res.json())
//       .then(emojis => this.setState({ emojis }))
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Emojis</h1>
//         <ul>{map(li, this.state.emojis)}</ul>
//       </div>
//     )
//   }
// }
