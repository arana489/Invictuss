import { useState } from 'react'
import reactLogo from '../public/react.svg'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home/Home'
import Service from './components/Services/Service'
import Contact from './components/Contacts/Contact'
import About from './components/About'
import Career from './components/Careers/Career'

function App() {

  return (
    <div className="App bg-blue-bg font-dmSans">
       <div className="pt-4 px-4">
        <NavBar/>
       </div>
       <Routes>

            <Route path="/" element={<Home/>}></Route>
            <Route path="/service" element={<Service/>}></Route>
            <Route path="/about" element={<About/>}></Route> 
            <Route path="/careers" element={<Career/>}></Route> 
            <Route path="/contact" element={<Contact/>}></Route> 

        </Routes>
    </div>
  )
}

export default App