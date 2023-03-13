import React from 'react'
import Navbar from './components/navbar/navbar'
import Sidenavbar from './components/sidenavbar/sidenavbar'
import './App.css'
import Customers from './pages/custumers/custumers'





export default function App() {
  return (
    <div className='Container'>
      <div className='left-cont'>
      <Sidenavbar/>
      </div>
      <div className='right-cont'>

      <Navbar/>
      
      <Customers/>
      </div>
      
      
      
      
    </div>
  )
}
