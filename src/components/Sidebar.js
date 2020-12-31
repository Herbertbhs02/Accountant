import React, {useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {NavLink} from 'react-router-dom';
import '../Style/sidebar.css';

const Sidebar = () => {

    useEffect(() => {
        //code to activate sidenav bar.
          var elems = document.querySelectorAll('.sidenav');
           M.Sidenav.init(elems, {});
      });

  return (
    <div>
       <a href="#" data-target="slide-out" class="  sidenav-trigger "><i class="material-icons icon-white ">menu</i></a>
     <ul id="slide-out" className="sidenav navbar-fixed ">
        <li><NavLink  to='/' className="btn sidenav-close">HOME</NavLink></li>
        <li><NavLink  to='/AboutUs' className="btn sidenav-close">ABOUT US</NavLink></li>
        <li><NavLink  to='/Services' className="btn sidenav-close">SERVICES</NavLink></li>
        {/* <li><NavLink  to='/Latestnews' className="btn sidenav-close">LATEST NEWS</NavLink></li> */}
        <li><NavLink  to='/ContactUs' className="btn sidenav-close">CONTACT US</NavLink></li>
       </ul>
    </div>
  );
}

export default Sidebar
