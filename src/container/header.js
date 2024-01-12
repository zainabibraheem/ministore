import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { BsPersonPlus } from "react-icons/bs";



function Header() {
  return (

    <header>
      <div className='store-logo'>MINISTORE</div>
      <div>
        <BsPersonPlus className='header-icon' size={30} />
        <FiShoppingCart className='header-icon' size={30} />

      </div>
    </header>

  )
}

export default Header
