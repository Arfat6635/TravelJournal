import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEarthAsia} from '@fortawesome/free-solid-svg-icons'
import './style.css'

const Navbar = () => {
  return (
    <div className='navbar--heading'>
        <FontAwesomeIcon className='navbar--icon' icon={faEarthAsia} />
        <h2> my travel journal</h2>
    </div>
  )
}

export default Navbar