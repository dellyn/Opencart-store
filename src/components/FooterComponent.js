import React from "react";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div className="footer">
      <svg
        className="footer-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#1f1f1f"
          fill-opacity="1"
          d="M0,64L80,64C160,64,320,64,480,58.7C640,53,800,43,960,37.3C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="container">
        <div className="row align-items-baseline justify-content-center justify-content-lg-start xs-column">
          <div className="nav-links col-lg-2 col-md-3 col-sm-3 col-5 mt-2 xs-center">
            <h5>Navigation</h5>
            <ul className="">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="address col-lg-2 col-md-3 col-sm-4 col-5 xs-center">
            <h5>Our Address</h5>
            <address>
              62 B Madison St
              <br />
              Chicago, IL 60601
              <br />
              11:00am - 12:00pm
              <br />
              <i className="fa fa-phone fa-lg"></i>: +852 1234 5676
              <br />
              <i className="fa fa-fax fa-lg"></i>: +852 8765 4322
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:pizzlicemail@food.net">pizzlicemail@food.net</a>
            </address>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-5 col-8 mt-2 ">
            <h5>Social Media</h5>
            <div class="frame ">
              <a href="http://www.facebook.com" class="btn fb">
                <i class="fa fa-facebook"></i>
              </a>

              <a href="http://www.instagram.com" class="btn inst">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="http://youtube.com/" class="btn ytb">
                <i class="fa fa-youtube"></i>
              </a>
              <a href="mailto:" class="btn eml">
                <i class="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2020 Restaurant Pizzlice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
