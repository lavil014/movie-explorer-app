import { NavLink } from "react-router-dom";

import '../Stylesheets/Layouts.css'

export const NavBar = ()=>{
    return (  

      <div className="MainContainer">
        <aside className="Sidebar">
          <nav>
            <NavLink to="/" style={
              ({isActive})=>({
                textDecoration : 'none',
                color: isActive ? 'blue' : 'white',
                fontWeight : isActive ? 'bold' : 'normal',
              })
            }>
              Home
            </NavLink>
            <NavLink to='/about' style={
              ({isActive})=>({
                textDecoration : 'none',
                color: isActive ? 'blue' : 'white',
                fontWeight : isActive ? 'bold' : 'normal',
              })
            }>
              About
            </NavLink>
          </nav>                        
            <NavLink to='/addamovie' style={
              {
                textDecoration : 'none',
                background : 'linear-gradient(135deg, #007BFF, #00C6FF)',
                color: 'white',
                fontWeight: 'bold',
                cursor:'pointer',
                borderRadius: '5px',
                padding: '4px',
                fontSize: '13px',
              }
            }>
              Add a movie
            </NavLink>
        </aside>
      </div>
    )
}

export default NavBar;