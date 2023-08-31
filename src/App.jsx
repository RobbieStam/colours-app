import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Pages from './pages'
import { NavBar } from './layout'
import './App.css'

const startColours = [
  {
    name: "red"
  },
  {
    name: "blue"
  },
  {
    name: "orange"
  },
  {
    name: "yellow"
  }
]

const App = () => {
  const [colours, setColours] = useState(startColours)

  return (
    <div className = "App">
      <Routes>
        <Route element={<NavBar />}>
        <Route index element={<Pages.Home />} />

        <Route path="/colours" element={<Pages.ColourList colours={colours} setColours={setColours} />} />
        <Route path="/new" element={<Pages.ColourForm colours={colours} setColours={setColours} />} />
        </Route>
        <Route path="/colours/:colour" element={<Pages.ColourItem colours={colours} setColours={setColours} />} />
        
        

      </Routes>

    </div>
  )
}

export default App
