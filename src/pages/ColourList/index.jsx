import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const ColourList = (props) => {

const renderColours = props.colours.map((cl, index) => (
    <div key={index}>
      <Link to={`/colours/${cl.name}`}><div className="colour">{cl.name.toUpperCase()}</div></Link>
    </div>
  ))

  return (
    <div className="colours">
      <h2>Click a Colour</h2>
      {renderColours}
    </div>
  )
}

export default ColourList
