import React, {useEffect, useState} from 'react'
import './Nav.css'
import logo from './logo2.png'
import { Link } from 'react-router-dom'

function Nav() {

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 300 ){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
  window.addEventListener("scroll", changeBackground)

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <img src={logo} alt="logo" />
        <ul>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/">About Us</Link>
        </ul>
      </nav>
    </>
  )
}

export default Nav
