import React from 'react';
import '../Style/Services.css'

const Services = () => {
  return (
    <div className="services left-align">
      <div className="servicesline"><span>Accounting Tax and Consultancy</span></div>

      <div class="row ">
        <div class="card-relative  col s12 l4 service_col ">
          <div class="card  z-depth-3 grey lighten-3">
            <div class="card-content black-text">
              <span class="card-title"><p>Limited Company</p></span>
              <img className="serviceImage " alt="photo"  src="https://img1.wsimg.com/isteam/stock/85846/:/cr=t:0%25,l:0%25,w:100%25,h:66.67%25/rs=w:388,h:194,cg:true" />
              <p>All limited companies must prepare and file their accounts to companies house
                 within 9 months of the year-end. Any taxes due must be paid to HMRC and corporation
                  tax return filed. Whether your company accounts are maintained on spreadsheet, cloud 
                  based software or even just bank statements, we can assist in filing relevant year end accounts. 
                </p>
            </div>
          </div>
        </div>

        <div class="card-relative col s12 l4 service_col">
            <div class="card z-depth-3 grey lighten-3">  
              <div class="card-content black-text">
                <span class="card-title "><p>Sole-Trader</p></span>
                <img className="serviceImage" alt="photo" src="https://img1.wsimg.com/isteam/stock/119024/:/cr=t:10.3%25,l:8.79%25,w:82.42%25,h:27.47%25/rs=w:388,h:194,cg:true,m" />
                <p>s a sole-trader, you need to register with the HMRC within three months of commencing trading.
                   Your accounts need to be filed by the 31st of January each year with any taxes due paid on the 
                   same day. If you would like to find out more about your responsibilities as a sole-trade or require
                    support in preparing your accounts, contact us.</p>
                
              </div>
            </div>
          </div>

          <div class="card-relative col s12 l4 service_col">
            <div class="card z-depth-3 grey lighten-3">  
              <div class="card-content black-text">
                <span class="card-title "><p>Buy-To-Let Landlord</p></span>
                <img className="serviceImage" alt="photo" src="https://img1.wsimg.com/isteam/stock/3Dzeenw/:/cr=t:0%25,l:0%25,w:100%25,h:75%25/rs=w:388,h:194,cg:true" />
                <p>With the residential property industry experiencing dramatic changes in recent years,
                   it can be somewhat challenging keeping up with regulatory and accounting changes. 
                   We are here to  guide you through the accounting changes, provide advice on whether 
                   its better to incorporate (trade as a limited company) or trade as buy to let landlord 
                   and access relevant support you need.</p>
                
              </div>
            </div>
          </div>

      </div>
    
      <div className="row">

      <div class="card-relative  col s12 l4 service_col">
          <div class="card  z-depth-3 grey lighten-3">
            <div class="card-content black-text">
              <span class="card-title"><p>Business Planning and Advisory</p></span>
              <img className="serviceImage" alt="photo" src="https://img1.wsimg.com/isteam/stock/2626/:/rs=w:388,h:194,cg:true,m/cr=w:388,h:194" />
              <p>Do you need to raise finance for your business and you been told you need a business plan
                 but you don't know where to start? Perhaps you are looking for insight on how to take your
                  business to the next level? We are here to make the journey smoother. </p>
               
            </div>
          </div>
        </div>

        <div class="card-relative col s12 l4 service_col">
            <div class="card z-depth-3 grey lighten-3">  
              <div class="card-content black-text">
                <span class="card-title "><p>Consultancy</p></span>
                <img className="serviceImage" alt="photo" src="https://img1.wsimg.com/isteam/stock/9Vo2nj1/:/cr=t:0%25,l:0%25,w:100%25,h:90.1%25/rs=w:388,h:194,cg:true" />
                <p>There are numerous factors within the economy that can impose both negative and positive
                   impact on businesses. From Brexit and trade wars to changes in taxation and compliance laws,
                  it is important businesses remain resilient irrespective of the prevailing economic conditions.
                   We provide bespoke and general economic reports to assist businesses and individuals in decision making.</p> 
              </div>
            </div>
          </div>

          <div class="card-relative col s12 l4 service_col">
            <div class="card z-depth-3 grey lighten-3">  
              <div class="card-content black-text">
                <span class="card-title "><p>Mentoring</p></span>
                <img className="serviceImage" alt="photo" src="https://img1.wsimg.com/isteam/stock/lrre3B6/:/cr=t:0%25,l:0%25,w:100%25,h:75%25/rs=w:388,h:194,cg:true" />
                <p>We are currently embarking on a programme to give work experience to future accountants. With the
                   profession experience a technological revolution, it is crucial accountants possess the know-how
                   of manual and computerised accounting processes.</p>
              
                
              </div>
            </div>
          </div>


      </div>

    </div>
  )
}

export default Services
