import React from 'react'
import './navbar.css'
import {IoIosNotifications} from 'react-icons/io'
import {IoMdContacts}  from 'react-icons/io'
import profile from '../../assets/image/avatar/avatar.png'
import {FiSearch} from 'react-icons/fi'

export default function Navbar() {
  return (

        <div className='navbar'>
            <FiSearch size='2rem'/>
            <div className='right-nav'>
                <IoIosNotifications  size='2rem'/>
                <IoMdContacts size='2rem'/>
                <img alt='' className='nav-img' src={profile}></img>
                
                
      
        </div>

    </div>
  )
}
