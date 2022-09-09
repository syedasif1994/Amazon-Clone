import React from 'react'
import { DensityMediumOutlined} from '@mui/icons-material'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        
        <div className="navbar_main">
        <button type='submit' className='navbar_button navbar_buttonIcon'> <DensityMediumOutlined /> <p>ALL</p></button>
        <button type='submit' className='navbar_button'>Today's Deals</button>
        <button type='submit' className='navbar_button'>Customer Service</button>
        <button type='submit' className='navbar_button'>Registry</button>
        <button type='submit' className='navbar_button'>Gift Cards</button>        
        <button type='submit' className='navbar_button'>Sell</button>        
        </div>

    </div>
  )
}

export default Navbar