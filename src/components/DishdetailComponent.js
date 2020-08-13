import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Fade, Stagger } from "react-animation-components";
// import { render } from "@testing-library/react";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

export class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
    this.toggleModal();

    this.props.postComment(
      this.props.dishId,
      values.rating,
      // values.author,
      values.yourname,
      values.comment
    );
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    return (
      <>
        <Button type="submit" onClick={this.toggleModal}>
          <i className="fa fa-pencil fa"></i> Submit Comment
        </Button>

        <Modal toggle={this.toggleModal} isOpen={this.state.isModalOpen}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" xs={12}>
                  Rating
                </Label>
                <Col xs={12}>
                  <Control.select
                    model=".rating"
                    name="rating"
                    id="rating"
                    className="form-control"
                  >
                    <option selected>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="yourname" xs={12}>
                  Your Name
                </Label>
                <Col xs={12}>
                  <Control.text
                    model=".yourname"
                    id="yourname"
                    name="yourname"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".yourname"
                    show="touched"
                    messages={{
                      required: "Required ",
                      minLength: "Must be greater than 2 char ",
                      maxLength: "Must be 15 char or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" xs={12}>
                  Comment
                </Label>
                <Col xs={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows="2"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col xs={{ size: 12 }}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
function RenderComments({ comments, postComment, dishId }) {
  var commentList = comments.map((comment) => {
    const num = comment.rating;
    let stars = [];

    // If rating = 1
    if (isNaN(num)) {
      stars.push(null);
    } else {
      for (let i = 0; i < num; i++) {
        stars.push(null);
      }
    }
    const rating = stars.map(function (item, index) {
      return (
        <span key={index}>
          {item}
          <i class="fa fa-star"></i>
        </span>
      );
    });
    return (
      <Fade in>
        <li key={comment.id}>
          <div className="rating">{rating}</div>

          <span className="comment">{comment.comment}</span>
          <span className="author"> {comment.author}</span>
          <span className="data">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
          </span>
        </li>
      </Fade>
    );
  });

  return (
    <div>
      <h4 className="mt-3">Comments</h4>
      <ul className="list-unstyled">
        <Stagger in>{commentList}</Stagger>
      </ul>
      <CommentForm dishId={dishId} postComment={postComment} />
    </div>
  );
}

function RenderDish({ dish }) {
  let label = "";
  if (dish.label !== undefined) {
    label = <CardText className="label">{dish.label}</CardText>;
  }
  return (
    <div className="col-12 m-1 mt-4 mb-5">
      <FadeTransform
        in
        FadeTransformProps={{
          exitTransform: "scale(0,4) translateY(-50%)",
        }}
      >
        <Card>
          <CardImg top src={baseUrl + dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            {label}
            <div className="df">
              <CardText className="price">
                <strong>{dish.price}$</strong>
              </CardText>

              <Button className="ml-auto">Buy now</Button>
            </div>
          </CardBody>
        </Card>
      </FadeTransform>
    </div>
  );
}

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="loading-component">
        <Loading />
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="loading-component">
        <h2>{props.errMess}</h2>
      </div>
    );
  } else if (props.dish != null)
    return (
      <section className="dish-detail">
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h2>{props.dish.name}</h2>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 col-sm-8 col-11  m-1">
              <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-6 m-1">
              <RenderComments
                comments={props.comments}
                // addComment={props.addComment}
                dishId={props.dish.id}
                postComment={props.postComment}
              />
            </div>
          </div>
        </div>
      </section>
    );
  else return <div></div>;
};

export default DishDetail;
