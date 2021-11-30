import React from 'react'
import './Footer.css'
import logo from '../Nav/logo2footer.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">About Us</Link>
        </ul>
        <img src={logo} alt="logo" />
      </footer>
    </>
  )
}

export default Footer
