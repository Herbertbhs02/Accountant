import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../Style/Social.css'

class Social extends Component{
  componentDidMount() {
      //code to activate tooltip message on hover
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tooltipped');
      var instances = M.Tooltip.init(elems, {});

    });
}

render(){
  return (
    <div>
    
     <div class="container ">
      <ul className="right .hide-on-small-only black-text">
        <li><a href="https://twitter.com/FHAccounts" target="_blank" class="tooltipped  btn-floating btn-small indigo darken-4" data-tooltip="Twitter">
            <i class="fab fa-twitter"></i>
            </a></li>
            <li><a href="https://www.linkedin.com/in/adeolaokubanjo/"  target="_blank" class="tooltipped  btn-floating btn-small indigo darken-4" data-tooltip="LinkedIn">
            <i class="fab fa-linkedin"></i>
            </a></li>
      </ul>
    </div>
    </div>
  );
}}
export default Social;