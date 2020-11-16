import React, {Component} from 'react';
import Slider from "react-slick";
import '../Style/Home.css';
import ipad from '../images/ipad.jpg';
import plant from '../images/plant.jpg';
import calculator from '../images/calculator.jpg';


//set arrow background color
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}


// carousel code
export default class Home extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      
    };
    return (
      <div className="container masterhome left-align">
         
        <Slider {...settings}>
          <div className="row home1 ">
           

          <div className="col s12 l6 textback ">
                      <h5><b>Welcome to Frampton House Accountants - Tax, Accounting and Consultancy</b></h5>
                          <p>Here at Frampton House Accountants, our goal is to ensure you and your business are compliant,
                          take advantage of available allowances and tax breaks, and support you in your growth ambitions. </p>
                        
                  </div>
                  <div className="col s12 l6">
                  <img src={plant} width="300" alt="photo" className="responsive-img" />
                  </div>
          </div>

          <div className=" row home2">
          <div className="col s12 l6 textback">
          <h5><b>Would you like a professional and friendly service from a qualified accountant? </b></h5>
                        <p> Our clients told us we stand out from others because we are approachable, reliable and prompt in our responses.  </p>
                        
                  </div>
                  <div className="col s12 l6">
                  <img src={ipad} width="300" alt="photo" className="responsive-img" />
                  </div>
            
          </div>

          <div className="row home3">
                  <div className="col s12 l6 textback">
                  <h5><b>Would you like to receive answers to queries in a simplified manner? </b></h5>     
                        <p>You can rest assured that we will help you in the most efficient way and without the complex accounting jargons. </p>
                         
                  </div>
                  <div className="col s12 l6">
                  <img src={calculator} width="300" alt="photo" className="responsive-img" />
                  </div>
            
          </div>

        </Slider>
          <div><h3>Testimonials</h3></div>
  
          <div class="row ">
        <div class="card-relative  col s12 l4 testimonialrow ">
          <div class="card  z-depth-3 grey lighten-3">
            <div class="card-content black-text">
              <span class="card-title"><p>Aqua Group Ltd</p></span>
              <img className="testimonialImage " alt="photo"  src="https://img1.wsimg.com/isteam/ip/45e539b8-1934-46a4-8510-970be3fa6e0d/3bdf32c3-4f8d-4b32-8653-1bac77922156.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true"/>
                <h4>They are thoroughly knowledgeable</h4>
              <p>After many many years of searching for a proactive, friendly and professional accounting firm I can honestly say we are extremely happy with the service 
                we have received from Frampton House.For years we battled with Accountants who were out of touch with modern accounting methods, unable to keep us informed in an understandable manner a</p>
            </div>
          </div>
        </div>

        <div class="card-relative col s12 l4 testimonialrow">
            <div class="card z-depth-3 grey lighten-3">  
              <div class="card-content black-text">
                <span class="card-title "><p>The Railway Cafe - Worksop</p></span>
                <img className="testimonialImage " alt="photo" src="https://img1.wsimg.com/isteam/ip/45e539b8-1934-46a4-8510-970be3fa6e0d/7f81ad85-905b-4806-8fc9-8678f43faf3a.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true"/>
                 <h4>Guess who helped grow my business again?</h4>
                 <ul class="collection">     
                    <li class="collection-item" >Straight Talking Honest Very Professional Proactive Accountants!</li>  
                    <li class="collection-item" >They Held My Hand When I started As A Contractor In The Finance Industry. </li>
                    <li class="collection-item">I Moved On And Opened A Limited Company Employing Staff And Guess Who Helped Grow My Business Again....  
                                                 Highly Recommended!!!!!</li>  
                </ul> 
                
              </div>
            </div>
          </div>

          <div class="card-relative col s12 l4 testimonialrow">
            <div class="card z-depth-3 grey lighten-3">  
              <div class="card-content black-text">
                <span class="card-title "><p>Cornelii Ltd</p></span>
                
                <img className="testimonialImage" alt="photo" src="https://img1.wsimg.com/isteam/stock/99695/:/cr=t:0%25,l:0%25,w:66.63%25,h:100%25/rs=w:365,h:365,cg:true"/>
                 <h4>This is our 3rd year with Ade</h4>
                <p>Very good personal service. This is our 3rd year with Ade and we would highly recommend 
                  Frampton House Accountants both for company and personal accounts.</p>
                
              </div>
            </div>
          </div>

      </div>

         
      </div>
    );
  }
}