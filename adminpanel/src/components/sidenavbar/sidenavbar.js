import React from 'react'
import devicas from '../../assets/image/devies/transformed.png'
import './sidenavbar.css'
import {AiFillSignal} from 'react-icons/ai'
import {IoMdContacts} from 'react-icons/io'
import {FaShoppingBag} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import {CiSettings} from 'react-icons/ci'
import {TbLock} from 'react-icons/tb'
import {VscError} from 'react-icons/vsc'
import {BsFillPersonPlusFill} from 'react-icons/bs'

export default function Sidenavbar() {
  return (

    
        <div className='sidebar'>
            <div className='upper-sidebar'>
                <img  alt='' src={devicas}></img> 
                <div className='devias'>
                    <h1>DEVIAS</h1>
                    <h2>PRODUCTION</h2>
                </div>
                

            </div>
            <div className='bottom-sidebar'>
              <div className='col-side'>
                <AiFillSignal className='icon' size='22px'/>
                <h1>Overview</h1>
              </div>
              <div className='col-side'>
                <IoMdContacts  className='icon' size='22px'/>
                <h1>Custumers</h1>
              </div>
              <div className='col-side'>
                <FaShoppingBag  className='icon' size='22px'/>
                <h1>Companies</h1>
              </div>
              <div className='col-side'>
                <BsFillPersonFill  className='icon' size='22px'/>
                <h1>Accounts</h1>
              </div>
              <div className='col-side'>
                <CiSettings  className='icon' size='22px'/>
                <h1>Settings</h1>
              </div>
              <div className='col-side'>
                <TbLock  className='icon' size='22px'/>
                <h1>Login</h1>
              </div>
              <div className='col-side'>
                <BsFillPersonPlusFill  className='icon' size='18px'/>
                <h1>Register</h1>
              </div>
              <div className='col-side'>
                <VscError  className='icon' size='22px'/>
                <h1>Error</h1>
              </div>


            </div>
        
    </div>
  )
}
