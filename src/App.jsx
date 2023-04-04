import { useState } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home/Home'
import Service from './components/Services/Service'
import Contact from './components/Contacts/Contact'
import About from './components/About/About'
import Career from './components/Careers/Career'
import Footer from './Footer'

function App() {

  return (
    <div className="bg-blue-bg font-dmsans">
      <div className="top-0 sticky z-50 pt-4">
        <NavBar/>
       </div>
       <Routes>

            <Route path="/" element={<Home/>}></Route>
            <Route path="/service" element={<Service/>}></Route>
            <Route path="/about" element={<About/>}></Route> 
            <Route path="/careers" element={<Career/>}></Route> 
            <Route path="/contact" element={<Contact/>}></Route> 

        </Routes>
        <Footer></Footer>
    </div>
  )
}

export default App