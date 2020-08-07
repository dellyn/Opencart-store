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

const About = (props) => {
  const people = props.leaders.map((lead) => {
    return (
      <Media className="col-12 mt-4" key={lead.id}>
        <Media
          width="100"
          height="100"
          className="m-2"
          object
          src={lead.image}
        />
        <Media body>
          <Media heading>{lead.name}</Media>
          <Media className="ml-5">{lead.designation}</Media>
          <Media>{lead.description}</Media>
        </Media>
      </Media>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="d-flex">
          <div className="about-history">
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
          <Card className="card-table">
            <Navbar dark extend="md" className="text-light">
              Facts At a Glance
            </Navbar>
            <CardBody>
              <table className="about-table">
                <tr>
                  <b>
                    <td>Started</td>
                  </b>
                  <td>3 Feb. 2013</td>
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
        </div>
        <div className="about-comments">
          <h5>You better pizza in four...</h5>
          <p>- Yogi Berra, The Wit and Wissom of yogi</p>
        </div>

        <h3 className="mt-5">Corporate Leadership</h3>
        {people}
      </div>
    </div>
  );
};

export default About;
