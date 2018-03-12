import React from 'react'
import { connect } from 'react-redux'
import { getBuzzword } from '../../action-creators/buzzwords'
import { Link } from 'react-router-dom'

class ShowBuzzword extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    console.log('ShowBuzzword id', id)
    this.props.getBuzzword(id)
    console.log('getBuzzword id', getBuzzword(id))
  }
  render() {
    const props = this.props
    console.log('in ShowBuzzword props', props)
    // if (props.id !== props.match.params.id) {
    //   return <h1>Loading Buzzword...</h1>
    //   console.log('render props', props)
    // }
    return (
      <div className="vh-100" style={{ backgroundColor: props.value }}>
        <h1> {props.name} </h1>
        <Link to={`/buzzwords/${props.id}/edit`}>Edit</Link>
        <button onClick={e => props.removeBuzzword(props.id, props.history)}>
          Remove
        </button>
      </div>
    )
    console.log('props after removeBuzzword', props)
  }
}

const mapStateToProps = state => {
  return {
    id: state.currentBuzzword.id,
    name: state.currentBuzzword.name,
    value: state.currentBuzzword.value
  }
}

const mapActionToProps = dispatch => {
  return {
    getBuzzword: id => dispatch(getBuzzword(id)),
    removeBuzzword: () => null
  }
}

const connector = connect(mapStateToProps, mapActionToProps)

export default connector(ShowBuzzword)
