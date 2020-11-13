import React from 'react'
import '../Style/Footer.css'

const Footer = () => {
  return (
    <div>
            <footer class="page-footer  light-blue darken-4">
          <div class=" ft">
            <div class="row">
            <div class="col l4 s12">
                <h5 >Companies House Number</h5>
                <p class="left-align"> Companies House Number 10035788 VAT Number GB23555012. 
                Ade Okubanjo is licenced and regulated by the AAT under licence number 1000895. AAT is recognised 
                by HM Treasury to supervise compliance with the Money Laundering Regulations and Frampton House 
                Accountants  is supervised by AAT in this respect</p>
           </div>
      <div class="col l4  s12">
        <blockquote class="blockquote">
        <h5>Frampton House Accountants</h5>
        <p class="left-align">12 Haydock Avenue, Thurcroft, Sheffield, S25 3AN, United Kingdom.<br/>
            <b>01909 490 536</b> </p>
            <p className="left-align" ><b>FreeAgent Friendly Accountants</b></p>
      </blockquote>
      </div>
      <div class="col l4  s12">
       <blockquote class="blockquote">
      
        <h5 >Better yet, we can meet in person!</h5>
        <p className="left-align">We are flexible in our approach so we can meet you at a place of your convenience whether
           its at your office, factory, home or even a coffee shop.
           Feel free to let us know an appropriate time.</p>

       </blockquote>
      </div>

            </div>
          </div>
          <div class="footer-copyright footercopyright ">
            <div class="container ">
            Copyright © 2020 Frampton House Accountants - All Rights Reserved
        
            </div>
          </div>
        </footer>



    </div>
  )
}

export default Footer
