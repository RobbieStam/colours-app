import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './style.css'

const ColourItem = (props) => {
  const navigate = useNavigate()
  const params = useParams()
  const name = params.colour
  console.log(props.colours)
  console.log({name: name})

  // if(props.colours.includes({name: name})){
    return (
      <>
      <button
        className='back-btn'
        onClick={() => navigate(-1)}
        >Back to colours</button>
      <div className="colour-item" style={{backgroundColor: `${name}`, height: "100vh" }}><h2 className="colour-title">{name.toUpperCase()}</h2></div>
      </>
    )
  // } else {
    // useEffect(() => {
    //   navigate("/")
    // })
}

  


export default ColourItem
