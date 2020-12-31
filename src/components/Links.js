import React from 'react';
import {NavLink} from 'react-router-dom';
import '../Style/Links.css';
import '../App.css';

const Links = () => {
  return (
    <div className="">
       <ul class="right hide-on-med-and-down  ">
        <li><NavLink exact activeClassName="navbar_active" to='/' className="btn  btnresize  btn-small">HOME</NavLink></li>
        <li><NavLink activeClassName="navbar_active" to='/AboutUs' className="btn  btnresize btn-small">ABOUT US</NavLink></li>
        <li><NavLink activeClassName="navbar_active" to='/Services' className="btn  btnresize btn-small">SERVICES</NavLink></li>
        {/* <li><NavLink activeClassName="navbar_active" to='/Latestnews' className="btn  btnresize btn-small">LATEST NEWS</NavLink></li> */}
        <li><NavLink activeClassName="navbar_active" to='/ContactUs' className="btn  btnresize btn-small">CONTACT US</NavLink></li>
      </ul> 
    </div>
  )
}

export default Links
