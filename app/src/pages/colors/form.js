import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addColor, chgColor } from '../../action-creators/colors'

const ColorForm = props => {
  return (
    <div>
      <h1>Add New Color</h1>
      <Form
        cancelUrl="/colors"
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.history)}
        {...props.currentColor}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    onChange: (field, value) => {
      dispatch(chgColor(color, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProp)
export default connector(ColorForm)
