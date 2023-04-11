import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Navb from "./Navb";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Products() {

    return (
        <div style={{fontFamily : "Jost"}}>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Home <i className="bi bi-chevron-compact-right"></i></Navbar.Brand>
                    <Navbar.Brand href="#home">Best Seller </Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home  </Nav.Link>
        
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 dm">
                            <br/>
                            <Dashboard />
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                            <Navb />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
