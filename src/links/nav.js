// import react from 'react'
import { link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
      <ul className="Navbar">
          <li><NavLink exact to="/home" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Home</NavLink></li>
          <li><NavLink exact to="/planet-list" activeStyle={{fontWeight: "bold", color:"white", textDecoration: "none"}}>Planets</NavLink></li>
          <li><NavLink exact to="/vehicle-list" activeStyle={{fontWeight: "bold", color:"white", textDecoration: "none"}}>Vehicles</NavLink></li>
          <li><NavLink exact to="/destinationfavorites2" activeStyle={{fontWeight: "bold", color:"white", textDecoration: "none"}}>Destination</NavLink></li>
      </ul>     
    )
  }
  
  export default Nav;