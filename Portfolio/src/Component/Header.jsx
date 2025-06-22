import React from "react"
import { Link } from "react-router-dom"
import './Header.css'
import logo from '../assets/logo.png'
import search from '../assets/search.png'

const Header = () => {
  return ( 
    <div className="Navbar">
      <img src={logo} alt="" className="Navbarimg"></img>
      <nav><ul>
         <li><Link to="/">About</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
         <li>  <Link to="/Experience">Experience</Link></li>
        <li><Link to="/Projects">Projects</Link></li> 
      </ul></nav>
      <div className="Searchbox">
        <button   className="searchbtn"> Availble for freelance</button>
        
      </div>
      </div>
  )
}


export default Header;