import React from 'react';
import '../Style/AboutUs.css';
import freeagent from '../images/freeagent.png';

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutline"><span>Our Story</span></div>
            
            <div className="row aboutrow z-depth-3">

            <div className="col s12 l8">
                <img className="aboutImage responsive-img" src="https://img1.wsimg.com/isteam/stock/o36Jkzj/:/cr=t:0%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true" alt="photo" />
                  </div>
            <div className="col s12 l4 textback left-align ">
                              <h5>History</h5>
                        <p>The business was started in 2012 by Ade Okubanjo who had a vision of supporting growth of businesses by giving
                           them unrivaled access to a qualified accountant. Many of our clients told us we stand out from others because they
                            can talk to us and receive answers to queries and support in a simplified manner without complex accounting jargons. 
                            Our business ethos is deeply rooted in the ability to build a meaningful relationship with our clients and help them succeed.</p>
                       
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
                  <img className="aboutImage2 responsive-img" src="https://img1.wsimg.com/isteam/stock/lrre3B6/:/cr=t:0%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true" alt="photo"  />
        </div>
            <div className="col s12 l7 textback left-align ">
                              <h5>What you get</h5>
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
