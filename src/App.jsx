import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'
import About from './components/About'
import Career from './components/Career'

function App() {

  return (
    <div className="App ">

    <div >
      <NavBar/>

       <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/service" element={<Service/>}></Route>
            <Route exact path="/about" element={<About/>}></Route> 
            <Route exact path="/careers" element={<Career/>}></Route> 
            <Route exact path="/contact" element={<Contact/>}></Route> 


        </Routes>
      
      
    </div>
      
    </div>
  )
}

export default App
