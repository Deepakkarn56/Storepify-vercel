import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

export default function Account() {
  return (
    <div>
      <div className="center font-jost">
       <h2>  Account</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xs-6 col-llg-6 p-3 login-form">
            <Form > 
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <h3 className="heading">Login</h3>
                <Form.Control size="lg" type="email" placeholder="E-mail" className="my-input" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                {/* <Form.Label>Email address</Form.Label> */}
                {/* <Form.Control type="email" placeholder="Password" /> */}
                <Form.Control size="lg" type="password" placeholder="Password" className="my-input" />
              </Form.Group>
              <span className="password">Forgot your Password?</span>
              <button
                className="btn btn-light"
                style={{ backgroundColor: "black", color: "white" }}
              >
                Sign in
              </button>
            </Form>
          </div>
          
          <div className="col-md-6 col-lg-6 col-xs-6 col-llg-6 p-3">
            <div className="font-jost">
              <h3>New coustomer</h3>
              <p className="paragraph">
                Sign up for early Sale access plus tailored new arrivals, trends
                and promotions. To opt out, click unsubscribe in our emails.
              </p>
              {/* <div className="tp-btn tp-btn_secondary" style={{width:'100%'}}> */}
                <button className="btn btn-light button-customs second-btn">Register</button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
