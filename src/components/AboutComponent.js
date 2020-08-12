import React from "react";
import {
  Media,
  Breadcrumb,
  BreadcrumbItem,
  Navbar,
  Card,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";

const About = (props) => {
  const people = props.leaders.leaders.map((lead) => {
    return (
      <Media
        className="media-leaders col-12 m-2 p-2 align-items-center"
        key={lead.id}
      >
        <Media className="m-2" object src={baseUrl + lead.image} />
        <Media body className="">
          <Media className="ml-3" heading>
            {lead.name}
          </Media>
          <Media className="ml-4 media-leaders-status">
            {lead.designation}
          </Media>
          <Media className="ml-5">{lead.description}</Media>
        </Media>
      </Media>
    );
  });
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h2>About Us</h2>
            <hr />
          </div>
        </div>
        <div className="row ">
          {/* <div className="d-flex"> */}
          <div className="about-history col-lg-9 col-md-8 col-sm-7 col-12">
            <h4>Our History</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam amet
              corrupti nulla velit expedita, ipsa libero cum debitis ducimus,
              sint ut. Dolor nulla quod ipsum repellendus nobis ad. Officia,
              optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nulla saepe explicabo quis necessitatibus nisi commodi cumque
              iste! Ullam, dignissimos. Quam unde nobis temporibus rem tempore
              modi ullam esse hic in!
            </p>
          </div>
          <Card className="card-table col-lg-3 col-md-4 col-sm-5 col-10 ">
            <Navbar dark extend="md" className="text-light">
              Facts At a Glance
            </Navbar>
            <CardBody>
              <table className="about-table ">
                <tr>
                  <b>
                    <td>Started</td>
                  </b>
                  <td>3 Feb. 2019</td>
                </tr>
                <tr>
                  <b>
                    <td>Major Stake Holder</td>
                  </b>
                  <td>HK Fine Foods inc.</td>
                </tr>
                <tr>
                  <b>
                    <td>Last Year`s Turnover</td>
                  </b>
                  <td>$1,250,131</td>
                </tr>
                <tr>
                  <b>
                    <td>Turner Employee</td>
                  </b>
                  <td>40</td>
                </tr>
              </table>
            </CardBody>
          </Card>
          {/* </div> */}
        </div>
        <div className="row">
          <div className="about-comments col-12">
            <h5>You better pizza in four...</h5>
            <p>- Yogi Berra, The Wit and Wissom of yogi</p>
          </div>
        </div>

        <h4 className="mt-5">Corporate Leadership</h4>
        {people}
      </div>
    </section>
  );
};

export default About;
