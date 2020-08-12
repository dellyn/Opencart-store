import React from "react";
import {
  Card,
  CardImg,
  Button,
  CardTitle,
  CardText,
  CardImgOverlay,
  CardSubtitle,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function RenderMenuItem({ dish }) {
  let label = "";
  if (dish.label !== undefined) {
    label = <CardText className="label">{dish.label}</CardText>;
  }

  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100" src={baseUrl + dish.image} alt={dish.name} />
      </Link>
      {/* <CardText className="label">{dish.label}</CardText> */}
      {label}
      <CardBody>
        <Link to={`/menu/${dish.id}`}>
          <CardTitle>{dish.name}</CardTitle>
        </Link>

        <CardSubtitle>{dish.description}</CardSubtitle>

        <div className="df">
          <CardText className="price">
            <strong>{dish.price}$</strong>
          </CardText>

          <Button dark>Buy now</Button>
        </div>
      </CardBody>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div className="menu-card col-xl-4 col-md-4 col-sm-6" key={dish.id}>
        <br></br>
        <RenderMenuItem dish={dish} />
      </div>
    );
  });
  if (props.dishes.isLoading) {
    return (
      <div className="loading-component">
        <Loading />
      </div>
    );
  } else if (props.dishes.errMess) {
    return (
      <div className="loading-component">
        <h4>{props.dishes.errMess}</h4>;
      </div>
    );
  } else
    return (
      <section className="menu">
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h2>Menu</h2>
              <hr />
            </div>
          </div>
          <div className="row menu-lay">{menu}</div>
        </div>
      </section>
    );
};

export default Menu;
