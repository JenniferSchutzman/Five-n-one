import React from 'react'
//import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = buzzword => {
  return (
    <li key={buzzword.id} style={{ buzzword: buzzword.value }}>
      {buzzword.value}
    </li>
  )
}

const Buzzwords = props => {
  return (
    <div>
      <h1>Buzzwords</h1>
      <ul>{map(li, props.buzzwords)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { buzzwords: state.buzzwords }
}

const connector = connect(mapStateToProps)

export default connector(Buzzwords)

// class Buzzwords extends React.Component {
//   constructor() {
//     super()
//     this.state = { buzzwords: [] }
//   }
//   componentDidMount() {
//     fetch('http://localhost:5000/buzzwords')
//       .then(res => res.json())
//       .then(buzzwords => this.setState({ buzzwords }))
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Buzzwords</h1>
//         <ul>{map(li, this.state.buzzwords)}</ul>
//       </div>
//     )
//   }
// }
