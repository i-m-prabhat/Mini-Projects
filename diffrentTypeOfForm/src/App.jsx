import React from 'react'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import NavBar from './components/NavBar'
import HomePage from './components/HomePage'

const App = () =>
{
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/form1' element={<Form1 />} />
        <Route exact path='/form2' element={<Form2 />} />
      </Routes>
    </Router>
  )
}

export default App
