import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import {
  addBuzzword,
  chgBuzzword,
  getBuzzword
} from '../../action-creators/buzzwords'

const BuzzwordForm = props => {
  return (
    <div>
      <h1>{props.formTitle}</h1>
      <Form
        cancelUrl="/buzzwords"
        onChange={props.onChange}
        onSubmit={e => props.onSubmit(props.history, props.currentBuzzword)}
        {...props.currentBuzzword}
        showValueInput={false}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentBuzzword: state.currentBuzzword
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgBuzzword(field, value))
    },
    onSubmit: (history, buzzword) => e => {
      e.preventDefault()
      dispatch(addBuzzword(buzzword, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(BuzzwordForm)
