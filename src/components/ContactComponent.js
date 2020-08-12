import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.postFeedback(
      values.firstname,
      values.lastname,
      values.telnum,
      values.email,
      values.agree,
      values.contactType,
      values.message
    );
    console.log("Тест: " + JSON.stringify(values));
    // alert("Current state is: " + JSON.stringify(values));
    this.props.resetFeedbackForm();
  }

  render() {
    return (
      <section className="contact">
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h2>Contact Us</h2>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-10 col-10 mt-4">
              <h4 className="mb-4">Location Information</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.070685980543!2d1.2584745662016523!3d45.8354264021988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2z0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sru!2sua!4v1597181779874!5m2!1sru!2sua"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                // tabindex="0"
              ></iframe>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-10 col-10 mt-5">
              <div className="col-12">
                <h4>Send us your Feedback</h4>
              </div>
              <Form
                model="feedback"
                onSubmit={(values) => this.handleSubmit(values)}
              >
                <Row className="form-group mb-1">
                  <Label htmlFor="firstname" md={12}>
                    First Name
                  </Label>
                  <Col md={12}>
                    <Control.text
                      model=".firstname"
                      id="firstname"
                      name="firstname"
                      placeholder="First Name"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".firstname"
                      show="touched"
                      messages={{
                        required: "Required ",
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group mb-1">
                  <Label htmlFor="lastname" md={12}>
                    Last Name
                  </Label>
                  <Col md={12}>
                    <Control.text
                      model=".lastname"
                      id="lastname"
                      name="lastname"
                      placeholder="Last Name"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".lastname"
                      show="touched"
                      messages={{
                        required: "Required ",
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group mb-1">
                  <Label htmlFor="telnum" md={12}>
                    Contact Tel.
                  </Label>
                  <Col md={12}>
                    <Control.text
                      model=".telnum"
                      id="telnum"
                      name="telnum"
                      placeholder="Tel. Number"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                        isNumber,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".telnum"
                      show="touched"
                      messages={{
                        required: "Required ",
                        minLength: "Must be greater than 2 numbers",
                        maxLength: "Must be 15 numbers or less",
                        isNumber: "Must be a number",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group mb-1">
                  <Label htmlFor="email" md={12}>
                    Email
                  </Label>
                  <Col md={12}>
                    <Control.text
                      model=".email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      validators={{
                        required,
                        validEmail,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                        required: "Required ",
                        validEmail: "Invalid Email Address",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group mt-3">
                  <Col className="col-7">
                    <div className="form-check">
                      <Label check>
                        <Control.checkbox
                          model=".agree"
                          name="agree"
                          className="form-check-input"
                        />
                        <strong>May we contact you?</strong>
                      </Label>
                    </div>
                  </Col>
                  <Col className="col-5">
                    <Control.select
                      model=".contactType"
                      name="contactType"
                      className="form-control"
                    >
                      <option>Tel.</option>
                      <option>Email</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group mb-1">
                  <Label htmlFor="message" md={12}>
                    Your Feedback
                  </Label>
                  <Col md={12}>
                    <Control.textarea
                      model=".message"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control mb-3"
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 10 }}>
                    <Button type="submit">Send Feedback</Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
