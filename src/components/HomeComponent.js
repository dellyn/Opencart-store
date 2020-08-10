import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
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
      <div id="signboard">
        <div className="container">
          <div class="sign-three">
            <div class="restaurant">Restaurant</div>
            <div class="jackpots">PIZZA</div>
          </div>

          <svg
            class="signboard-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 200"
          >
            <path
              fill="#000"
              fill-opacity="1"
              d="M0,192L80,170.7C160,149,320,107,480,101.3C640,96,800,128,960,144C1120,160,1280,160,1360,160L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.dish}
              isLoading={props.dishesLoading}
              errMess={props.dishesErrMess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.promotion}
              isLoading={props.promoLoading}
              errMess={props.promoErrMess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.leader}
              isLoading={props.leaderLoading}
              errMess={props.leaderErrMess}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
