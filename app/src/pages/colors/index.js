import React from 'react'
//import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/*
- FIRST GIVE IT A KEY TO INDENTIFY THIS NEW ITEM VS OTHER OLD ITEMS
- CATEGORIZE THE COLOR VALUE AS STYLE OBJECT */
/* THE DOUBLE {{}} ABOVE MEANS THAT IT'S JAVASCRIPT COMING IN AND AN
OBJECT */

const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      // <Link to={`/colors/${color.id}`}>{color.name}</Link>
    </li>
  )
}

const Colors = props => {
  return (
    <div>
      <h1>Colors</h1>
      <Link to="/colors/new">Add New Color</Link>
      <ul>{map(li, props.colors)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { colors: state.colors }
}

const connector = connect(mapStateToProps)

export default connector(Colors)

/*  HERE WE ADD A LINK TO ADD A NEW COLOR */

/*  MAKING IT A CLASS BECAUSE WE ARE TRACKING STATE WITHIN THE COMPONENT */
/* fetch reaches out to the API like a get */
/*  which then returns an array of colors
& then it's parsed into an object  */
/* we put it in an object literal with props called colors */
/* THEN WE TELL THE SCREEN WHAT TO DISPLAY IN THE RENDER */
/* MAP OVER THE ARRAY OF COLORS COMING IN WITH THE FUNCTION LI ON EACH
      COLOR */
// class Colors extends React.Component {
//   constructor() {
//     super()
//     this.state = { colors: [], fetchErrorMsg: null }
//   }
//   componentDidMount() {
//     fetch('http://localhost:5000/colors')
//       .then(res => res.json())
//       .then(colors => this.setState({ colors }))
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Colors</h1>
//         <ul>{map(li, this.state.colors)}</ul>
//       </div>
//     )
//   }
// }
