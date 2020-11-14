import React from 'react';
import '../Style/AboutUs.css';
import notebook from '../images/notebook.jpg';
import freeagent from '../images/freeagent.png';

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutline"><span>ABOUT US</span></div>
            
            <div className="row aboutrow z-depth-3">

            <div className="col s12 l6">
                  <img src={notebook} width="300" alt="photo" className="responsive-img" />
                  </div>
            <div className="col s12 l6 textback left-align ">
                              <h5>Welcome</h5>
                        <p>Here at Frampton House Accountants, our goal is to ensure you and your business
                          are compliant, take advantage of available allowances and tax breaks, and support
                          you in your growth ambitions. </p>
                        <p>There's much to see here. So, take your time, look around, and learn all there is to
                          know about us. We hope you enjoy our site and take a moment to drop us a line.</p>  
                  </div>
            </div>
   
    <div className="row aboutrow z-depth-3">
    
      <div className="col s12 l6 textback left-align ">
                  <h5>FreeAgent</h5>
            <p>At Frampton House Accountants,  we’ve chosen FreeAgent as our preferred 
              accounting software for our small business, freelance and contractor clients. </p>
            <p>FreeAgent is completely web-based, so there’s nothing to download, update, or install 
              on your computer, and you can access it from anywhere you have an internet connection. 
              Your data is safely backed-up, and FreeAgent uses the same level of encryption to talk 
              to your computer as banks use, they even store your data in a former nuclear bunker!</p>  
      </div>
      <div className="col s12 l6">
      <img src={freeagent}  alt="photo" className="responsive-img" />
      </div>
   </div>
   <div className="row aboutrow z-depth-3">
        <div className="col s12 l5">
                  <img src={notebook} width="300" alt="photo" className="responsive-img" />
        </div>
            <div className="col s12 l7 textback left-align ">
                              <h5>What you ge</h5>
                <ul class="collection">     
                    <li class="collection-item" >You always have direct access to a qualified accountant</li>  
                    <li class="collection-item" >We prepare your accounts in advance of the relevant deadlines so you know how much tax you owe well before you need to pay.</li>
                    <li class="collection-item">We let you know of the various tax allowance available to you so you don't pay more tax than is necessary.</li>
                    <li class="collection-item">We keep you up to date with the latest tax and accounting changes affecting your business.</li>
                    <li class="collection-item">We keep you informed about regulatory changes such as auto enrolment and Making Tax Digital, and assist you in remaining compliant.</li>
                </ul> 
              </div>
      </div> 
      
    </div>
  )
}

export default AboutUs
