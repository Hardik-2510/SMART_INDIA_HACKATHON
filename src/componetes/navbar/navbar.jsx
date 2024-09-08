import React, { useState } from 'react'
import './navbar.css'
import logo from '../assist/logo1.jpg'
import cart_icon from '../assist/shopping-cart.png'

const Navbar = () => {
    const [menu,setmenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
         <img src={logo} alt=''></img>
         <p>FARMKILT</p>
        </div> 
        <ul className='nav-menu'>
            <li onClick={()=>{setmenu('shop')}}>shop{menu=="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu('vegetables')}}>vegetable{menu=="vegetables"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu('fruites')}}>fruites{menu=="fruites"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu('meat/fish')}}>milk products{menu=="meat/fish"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <button> login </button>
            <img src={cart_icon} alt=''></img>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar
