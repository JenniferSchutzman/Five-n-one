import React from 'react'
import {Link} from 'react-router-dom'

const Form = ({id, name value, onChange, onSubmit, cancelUrl, showValueInput})=>
{
  const valueInput = showValueInput ? (
    <div>
    <label className = "dib">value</label>
    <input
      type = "text"
      value={value}
      onChange = {e=> onChange('value', e.target.value)}
      />
      </div>

  ) : null

  return (
    <form on Submit = {onSubmit({id, name, value})}>
    <div>
      <label className = "dib">id</label>
      <div>{id}</div>
    </div>
    <div>
      <button>Submit</button>
      <Link to={cancelUrl}>Cancel</Link>
      </div>
    </form>
  )
}
export default Form 
