import React, { useState } from 'react'
import './style.css'

const ColourForm = (props) => {
  const [inputText, setInputText] = useState('')

  function updateInput (e) {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.setColours([...props.colours, {name: inputText }])
    setInputText('') 
  }

  return (
    <form 
      onSubmit={handleSubmit}
    >
      <label htmlFor="task" style={{ marginRight: "10px"}}>Task</label>
      <input type="text"
        className='colour-input'
        value={inputText}
        onChange={updateInput}
      />
      <input type="submit" value="Add" />
    </form>
  )
}

export default ColourForm
