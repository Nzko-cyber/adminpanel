import { Button } from '@material-ui/core'
import React from 'react'
import importimg from '../../assets/icons/download.png'
import exportimg from '../../assets/icons/export.png'
import './custumer.css'






export default function Customers() {


  return (
    <div className='Container'>
      <div className='Custumers'>
        <div className='custumer-up'>
          <div className='cust-left'>
            <h1>Customers</h1>
            <div className='cust-left-bttn'>
              <button type='submit'><img alt='' src={importimg}></img><h1>Import</h1></button>
              <button type='submit'><img src={exportimg} alt=''></img><h1>Export</h1></button>
              
            </div>
           
          </div>
           <div className='cust-right-bttn'>
              <Button>add</Button>
            </div>
    

        </div>
      </div>


    </div>
  )
}