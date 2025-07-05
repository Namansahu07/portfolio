import React from "react"
import { Link } from "react-router-dom"
import './Header.css'
import logo from '../assets/logo.png'


const Header = () => {
  const whatsappNumber = '9313285351'; // Replace with your actual WhatsApp number
  return (
    <div className="Navbar">
      <a href="/">
        <img src={logo} alt="" className="Navbarimg"></img>
      </a>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/Skills">Skills</Link></li>
          <li>  <Link to="/Experience">Experience</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
        </ul>
      </nav>
      <div className="Searchbox">
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          <button className="searchbtn">Get in touch</button>
        </a>
      </div>
    </div>
  )
}


export default Header;