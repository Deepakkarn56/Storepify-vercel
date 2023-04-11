import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
// import { Card } from "react-bootstrap";
import Card from "react-bootstrap/Card";


export default function Wishlist() {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand
            href="#"
            style={{ fontSize: "15px", fontSize: "15px", fontWeight: "400" }}
          >
            Home &nbsp;
            <i class="bi bi-chevron-right"></i>
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
      <div className="wishlist">
        <h3 className="font-jost">Wishlist</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 c0l-xs-3 ">
            <Card>
              <img 
                src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/8246900807_2_2_8_4a58e297-4797-44b9-8b5c-b32bba0c211b.png?v=1668478209&width=533"
                width="100%  "
              />
              <button>
                
              </button>
            </Card>
            {/* <div className="quick-add">
            <i class="bi bi-heart"></i>
            
            </div> */}
            <span className="name font-jost">The point of using Lorem Ipsum </span>
            <span className="price">$50</span>
            
           
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 c0l-xs-3 ">
            <Card>
              <img
                src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/3_1f6ee597-2d9b-419d-9440-29d4a4656618.png?v=1663640025&width=533"
                width="100%"
              />
            </Card>
            <span className="name font-jost">Hooded Gilet</span>
            <span className="price">$23</span>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 c0l-xs-3 ">
            <Card>
              <img
                src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/5_30e606e4-108b-412a-88fc-7cfc74c7f1e0.png?v=1663639761&width=533"
                width="100%"
              />
            </Card>
            <span className="name font-jost">Midi Dress</span>
            <span className="price">$34</span>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 c0l-xs-3  ">
            <Card>
              <img
                src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_5897ce91-b2db-488f-818b-8e7a2445c40c.png?v=1663640016&width=533"
                width="100%  "
              />
            </Card>
            <span className="name font-jost">Jumpsuit Jumpsuit</span>
            <span className="price">$32</span>
          </div>
        </div>
      </div>
    </div>
  );
}
