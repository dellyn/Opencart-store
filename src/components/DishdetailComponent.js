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
    this.toggleModal();

    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.author,
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
                    className="form-control"
                  >
                    <option>1</option>
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
                    rows="6"
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
    return (
      <Fade in>
        <li key={comment.id}>
          {comment.comment}
          <br />
          <br />
          -- {comment.author},{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(comment.date)))}
          <br />
          <br />
        </li>
      </Fade>
    );
  });

  return (
    <div>
      <h4>Comments</h4>
      <ul className="list-unstyled">
        <Stagger in>{commentList}</Stagger>
      </ul>
      <CommentForm dishId={dishId} postComment={postComment} />
    </div>
  );
}

function RenderDish({ dish }) {
  return (
    <div className="col-12 m-1">
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
            <CardText className="price">{dish.price}</CardText>
            <CardText className="label">{dish.label}</CardText>
            <Button>
              Eat now! <i className="fa fa-shopping-cart"></i>
            </Button>
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
        <h3>{props.errMess}</h3>
      </div>
    );
  } else if (props.dish != null)
    return (
      <div className="">
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComments
                comments={props.comments}
                addComment={props.addComment}
                dishId={props.dish.id}
                postComment={props.postComment}
              />
            </div>
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default DishDetail;
