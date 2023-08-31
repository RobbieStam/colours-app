import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './style.css'

const ColourItem = () => {
  const navigate = useNavigate()
  const params = useParams()
  const name = params.colour
  console.log(name)
  return (
    <>
    <button
      className='back-btn'
      onClick={() => navigate(-1)}
      >Back to colours</button>
    <div className="colour-item" style={{backgroundColor: `${name}`, height: "10000px", }}>{name.toUpperCase()}</div>
    </>
  )
}

export default ColourItem
