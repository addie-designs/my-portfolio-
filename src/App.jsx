import React from 'react'
import Hero from './Hero'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      
      <Routes>
        <Route path='/' element={<Hero />} />
  
      </Routes>
    </Router>
    
    </>
  )
}

export default App