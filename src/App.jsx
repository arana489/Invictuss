import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Career from './components/Career'
import Contact from './components/Contact'
import Service from './components/Service'
import {Routes, Route} from "react-router-dom"
import Navbar from './Navbar'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/service" element={<Service/>}></Route>
        <Route exact path="/career" element={<Career/>}></Route>
      </Routes>
    </div>
  )
}

export default App
