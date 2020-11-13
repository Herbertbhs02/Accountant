import React from 'react';
import '../Style/ContactUs.css'

const ContactUs = () => {
  return (
    <div className="contact">
    <div className="line"><span>Contact Us</span></div>
<div className="row container">
    <form  action="/contactUs" method="post" className="col s12">
      <div className="row">
        <div className="input-field col s12 l6">
          <input id="first_name" type="text" name="firstName" className="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s12 l6">
          <input id="last_name" type="text" name="lastName" className="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>
    
      <div className="row">
        <div className="input-field col s12 l6">
        <i class="material-icons prefix">email</i>
          <input id="email" type="email" name="email" className="validate"/>
          <label for="email">Email</label>
        </div>

        <div className="input-field col s12 l6">
        <i class="material-icons prefix">phone</i>
          <input id="last_name" type="text" name="lastName" className="validate"/>
          <label for="last_name">Phone(Optional)</label>
        </div>

      </div>

      <div className="row">
        <div className="input-field col s12">
        <i class="material-icons prefix">message</i>
          <textarea id="textarea1" name="shortMessage" className="materialize-textarea"></textarea>
          <label for="textarea1">Feel free to leave a message</label>
        </div>
      </div>
      <button class="btn form-btn z-depth-2 grey darken-3 formbtn" type="submit" name="button">SEND</button>
    </form>
    </div>
  </div>

    
  )
}

export default ContactUs
