import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Route,
  CardSubtitle,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";
function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <FadeTransform
        in
        FadeTransformProps={{
          exitTransform: "scale(0,3) translateY(-50%)",
        }}
      >
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? (
              <CardSubtitle>{item.designation}</CardSubtitle>
            ) : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
}

function Home(props) {
  return (
    <section className="home">
      <div className="signboard">
        <img src="assets/images/bg-pizza.png" alt="" className="sign-bg-img" />
        <div className="container">
          <img
            src="assets/images/green1.png"
            alt=""
            className="sign-leaves-img"
          />
          <div class="sign-three row">
            {/* <div class="restaurant">Restaurant </div> */}
            <h1 class="title-light col-12">Pizza time</h1>
          </div>

          <div className="sign-lay df">
            <p className="sign-lay-text">
              Buy One <b>Pizza</b>. Get One
            </p>
            <NavLink className="sign-lay-btn" to="/menu">
              FREE
            </NavLink>
          </div>

          <div className="sign-contact">
            <p className="sign-contact-type">
              <i className="fa fa-phone"></i>
              Call <span>0743 888 555</span>
            </p>
            <p className="sign-contact-type">
              <i className="fa fa-mouse-pointer"></i>
              Or Log in to <span>website</span>
            </p>
          </div>

          {/* <svg
            class="signboard-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 200"
          >
            <path
              fill="#000"
              fill-opacity="1"
              d="M0,192L80,170.7C160,149,320,107,480,101.3C640,96,800,128,960,144C1120,160,1280,160,1360,160L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg> */}
        </div>
      </div>

      <div className="home-info">
        <div className="container">
          <div className="row align-items-start ">
            <div className="col-xl-3 col-md-4 col-sm-8 col-xs-9 mb-4 col-9 mx-auto">
              <RenderCard
                item={props.dish}
                isLoading={props.dishesLoading}
                errMess={props.dishesErrMess}
              />
            </div>
            {/* <div className="col-xl-3 col-md-4 col-sm-7 col-xs-8 mb-4 mx-auto">
              <RenderCard
                item={props.dish}
                isLoading={props.dishesLoading}
                errMess={props.dishesErrMess}
              />
            </div> */}
            <div className="col-xl-3 col-md-4 col-sm-8 col-xs-9 mb-4 col-9 mx-auto">
              <RenderCard
                item={props.promotion}
                isLoading={props.promoLoading}
                errMess={props.promoErrMess}
              />
            </div>
            <div className="col-xl-4 col-md-4 col-sm-8 col-xs-9 col-9 mx-auto">
              <RenderCard
                item={props.leader}
                isLoading={props.leaderLoading}
                errMess={props.leaderErrMess}
              />
            </div>
          </div>
        </div>
        <img
          className="home-block-cut-img"
          src="assets/images/pizza-cut.png"
          alt=""
        />
        {/* <div className="home-block">
          <div className="container">
            <p>Order Online</p>
            <p>Reservation</p>
            <p>7734 FORSYTH BLVD. | CLAYTON, MO 63105</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Home;
