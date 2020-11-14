import React, {Component} from 'react';
import Slider from "react-slick";
import '../Style/Home.css';
import laptop from '../images/laptop.jpg';
import notebook from '../images/notebook.jpg';
import stock from '../images/stock.jpg';

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
                              <h5>Welcome</h5>
                        <p>Here at Frampton House Accountants, our goal is to ensure you and your business
                          are compliant, take advantage of available allowances and tax breaks, and support
                          you in your growth ambitions. </p>
                        <p>There's much to see here. So, take your time, look around, and learn all there is to
                          know about us. We hope you enjoy our site and take a moment to drop us a line.</p>  
                  </div>
                  <div className="col s12 l6">
                  <img src={notebook} width="300" alt="photo" className="responsive-img" />
                  </div>
          </div>

          <div className=" row home2">
          <div className="col s12 l6 textback">
                              <h5>Welcome</h5>
                        <p>Here at Frampton House Accountants, our goal is to ensure you and your business
                          are compliant, take advantage of available allowances and tax breaks, and support
                          you in your growth ambitions. </p>
                        <p>There's much to see here. So, take your time, look around, and learn all there is to
                          know about us. We hope you enjoy our site and take a moment to drop us a line.</p>  
                  </div>
                  <div className="col s12 l6">
                  <img src={laptop} width="300" alt="photo" className="responsive-img" />
                  </div>
            
          </div>

          <div className="row home3">
                  <div className="col s12 l6 textback">
                              <h5>Welcome</h5>
                        <p>Here at Frampton House Accountants, our goal is to ensure you and your business
                          are compliant, take advantage of available allowances and tax breaks, and support
                          you in your growth ambitions. </p>
                        <p>There's much to see here. So, take your time, look around, and learn all there is to
                          know about us. We hope you enjoy our site and take a moment to drop us a line.</p>  
                  </div>
                  <div className="col s12 l6">
                  <img src={stock} width="300" alt="photo" className="responsive-img" />
                  </div>
            
          </div>


          <div className="home  ">
            <h3>4</h3>
          </div>
         
        </Slider>
        <div><h3>Testimonial</h3></div>
      </div>
    );
  }
}