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
          fill="#000"
          fill-opacity="1"
          d="M0,64L80,64C160,64,320,64,480,58.7C640,53,800,43,960,37.3C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="nav-links col-4 offset-1 col-sm-2">
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
          <div className="address col-4 col-sm-2">
            <h5>Our Address</h5>
            <address>
              29B Nyzhenska Street
              <br />
              Clear Water Bay, Kowloon
              <br />
              Kiev, Ukraine
              <br />
              <i className="fa fa-phone fa-lg"></i>: +852 1234 5676
              <br />
              <i className="fa fa-fax fa-lg"></i>: +852 8765 4322
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:confusion@food.net">ingvarmail@food.net</a>
            </address>
          </div>

          <div class="frame col-4">
            <a href="http://www.facebook.com" class="btn fb">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="http://twitter.com/" class="btn twt">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="http://www.instagram.com" class="btn inst">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="http://www.linkedin.com/in/" class="btn ldn">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="http://youtube.com/" class="btn ytb">
              <i class="fa fa-youtube"></i>
            </a>
            <a href="mailto:" class="btn eml">
              <i class="fa fa-envelope-o"></i>
            </a>
          </div>
        </div>
        <div className="copyright row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2020 Ristorante Del Carte</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
