import React from 'react';
import Links from './Links';
import Sidebar from './Sidebar';
import Social from './Social'
import '../Style/Navbar.css';


const Navbar = () => {
  return (
      
        <div >
                  <div className="css-3d-text">Frampton House Accountants</div>
               <nav className="  light-blue darken-4">
                    <div class="nav-wrapper">
                    <Social/>
                    <Links/>
                    <Sidebar/>
                    </div>
              </nav>
            
        </div>
  )
}

export default Navbar
