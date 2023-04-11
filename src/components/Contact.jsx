import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() { 
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand
            
            style={{ fontSize: "15px", fontSize: "15px", fontWeight: "400" }}
          >
            Home &nbsp;
            <i className="bi bi-chevron-right"></i>
            <Navbar.Brand
              
              style={{
                paddingLeft: "10px",
                fontSize: "15px",
                fontWeight: "400",
              }}
            >
              Contact
            </Navbar.Brand>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* contact */}

      <div className="container">
        <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>contact</h3>

        <div className="row  ">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6  top-contact">
            <h4>
              Get in <span className="underline"> touch</span> with us
            </h4>
            <div className="teliphone-icon">
              <i className="bi bi-telephone-fill"></i>
              &nbsp; &nbsp;
              <span style={{ fontSize: "15px", fontWeight: "400" }}>
                +48 541 44 27
              </span>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <i className="bi bi-envelope-at-fill"></i>
              &nbsp; &nbsp;
              <span style={{ fontSize: "15px", fontWeight: "400" }}>
                storepify@company.com
              </span>
            </div>
            <div style={{ paddingTop: "5px" }}>
              <i className="bi bi-geo-alt-fill"></i>
              &nbsp;
              <span style={{ fontSize: "15px", fontWeight: "400" }}>
                66-764 City, Street 23
              </span>
            </div>
            <div className="social-icons">
              <ul className="no-bullets">
                <li>
                  <i className="bi bi-pinterest"></i>
                </li>

                <li>
                  <i className="bi bi-instagram"></i>
                </li>
                <li>
                  
                  <i className="bi bi-facebook"></i>
                </li>
                <li>
                  <i className="bi bi-twitter"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 p-0">
            <img
              src="https://cdn.shopify.com/s/files/1/0624/8638/0738/files/store2.png?crop=center&height=600&v=1667209291&width=675"
              alt="logo"
              width="100%"
            />
          </div>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: "#F8F8F8" }}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 p-0 ">
            <iframe className="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109552.19658110882!2d75.78663204370402!3d30.90047363811166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1679132281590!5m2!1sen!2sin"
              width="100%"
              height="100%"
              // padding= "0px"
              // border-width="0px"
              // margin= "0px"
              // left="0px"
              // top= "0px"
              style={{ border: "0" }}
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6  signup-form">
            <div className="tp-contact">
              {/* <h2 className="contact-title"> Send us a message</h2> */}
              <h3 className="heading">
                
                Send <span className="underline"> us a</span> message
              </h3>
              <Form className="contact-form">
                <Form.Group
                  className="mb-6 form-group"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <br />
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="name@example.com"
                  />
                </Form.Group>
                <button className="btn btn-secondary form-control form-button buttons second-buttons">
                  Subscribe
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
