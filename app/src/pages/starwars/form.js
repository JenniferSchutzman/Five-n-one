import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import {
  addStarwarsCharacter,
  chgStarwarsCharacter
} from '../../action-creators/starwars'

const StarwarsForm = props => {
  console.log('starwars props', props)
  return (
    <div>
      <h1>{props.formTitle}</h1>
      <Form
        cancelUrl="/starwars"
        onChange={props.onChange}
        onSubmit={e =>
          props.onSubmit(props.currentStarwarsCharacter, props.history)
        }
        {...props.currentStarwarsCharacter}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentStarwarsCharacter: state.currentStarwarsCharacter
  }
}

function mapActionsToProps(dispatch) {
  return {
    onChange: (field, value) => dispatch(chgStarwarsCharacter(field, value)),
    onSubmit: (character, history) => e => {
      e.preventDefault()
      dispatch(addStarwarsCharacter(character, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(StarwarsForm)
