import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./Navbar.css";
import $ from 'jquery';

import logo from "../assets/images/LOGO.webp";
import { Link } from "react-router-dom";

function MainNavbar() {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [shonw, setShonw] = useState(false);
  const [shown, setShown] = useState(false);

  const handleClosen = () => setShown(false);
  const handleShown = () => setShown(true);
  const handleClosed = () => setShonw(false);
  const handleShonw = () => setShonw(true);
  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [num, setNum]= useState(1);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>1)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
  // const percentage = 50

  var subtotal = 2000;

  var hunperc = 2000;
  const oneperc = hunperc/100;
  const gainedProgress = subtotal/ oneperc;

  const balance = hunperc - subtotal;
  const rendervalue = () => {
    if(subtotal >= hunperc){
      return("Congratulation's you won free shipment")
    }
    else{
      return(`$${balance} more to get free shipping`)
    }
  }

  return (
    <div>
      <Navbar bg="white" expand="lg" className="nnav" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" width="200px" />
          </Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="dropdownn">
                <button className="dropbtn">
                  Home&nbsp;
                  <svg
                    className="bi bi-chevron-down cursor-pointer"
                    fill="#000"
                    height="10"
                    viewBox="0 0 16 16"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
                
              </div>
              <div className="dropdownn">
                <button className="dropbtn">
                  Shop&nbsp;
                  <svg
                    className="bi bi-chevron-down cursor-pointer"
                    fill="#000"
                    height="10"
                    viewBox="0 0 16 16"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <span className="status-item-menu item-hot">Hot</span>
                <div className="dropdownn-content"></div>
              </div>
              <div className="dropdownn">
                <button className="dropbtn">
                  Features&nbsp;
                  <svg
                    className="bi bi-chevron-down cursor-pointer"
                    fill="#000"
                    height="10"
                    viewBox="0 0 16 16"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <span className="status-item-menu item-news">News</span>
                <div className="dropdownn-content">
                  <a href="#b">Link 1</a>
                  <a href="#nb">Link 2</a>
                  <a href="#n">Link 3</a>
                </div>
              </div>
              <div className="dropdownn">
                <button className="dropbtn">
                  Portfolio&nbsp;
                  <svg
                    className="bi bi-chevron-down cursor-pointer"
                    fill="#000"
                    height="10"
                    viewBox="0 0 16 16"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div className="dropdownn-content">
                  <a href="#b">Portfolio 1</a>
                  <a href="#nb">Portfolio 2</a>
                  <a href="#n">Portfolio 3</a>
                  <a href="#n">Portfolio 4</a>
                </div>
              </div>
              <div className="dropdownn">
                <button className="dropbtn">
                  Blog&nbsp;
                  <svg
                    className="bi bi-chevron-down cursor-pointer"
                    fill="#000"
                    height="10"
                    viewBox="0 0 16 16"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div className="dropdownn-content">
                  <a href="#b">Blog Detail</a>
                  <a href="#nb">Blog Listing Default</a>
                  <a href="#n">Blog Listing One Column</a>
                  <a href="#n">Blog Listing Two Columns</a>
                  <a href="#n">Blog Listing Right Sidebar</a>
                  <a href="#n">Blog Listing Full Two Column</a>
                  <a href="#n">Blog Listing Loadmore</a>
                </div>
              </div>
              <div className="dropdownn">
                <button className="dropbtn">
                  Contact&nbsp;
                  <svg
                    className="bi bi-chevron-down cursor-pointer"
                    fill="#000"
                    height="10"
                    viewBox="0 0 16 16"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div className="dropdownn-content">
                  <a href="#b">Contact2</a>
                </div>
              </div>
              <div className="dropdownn">
                <button className="dropbtn" style={{ color: "red" }}>
                  Buy Now&nbsp;
                  <svg
                    className="bi bi-chevron-down cursor-pointer"
                    fill="#000"
                    height="10"
                    viewBox="0 0 16 16"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div className="dropdownn-content">
                  <a href="#b">Buy Now</a>
                  <a href="#nb">Documentation</a>
                  <a href="#n">Support</a>
                  <a href="#n">Open a Store for free</a>
                  <a href="#n">Storepify Update</a>
                </div>
              </div>

              <>
                <a href="#fl" className="las">
                  <svg
                    className="w-modal"
                    onClick={handleShow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 25 26"
                    fill="none"
                  >
                    <path
                      d="M1 24.16L8.5 16.66L1 24.16ZM24 10.16C24 11.3419 23.7672 12.5122 23.3149 13.6041C22.8626 14.6961 22.1997 15.6882 21.364 16.5239C20.5282 17.3597 19.5361 18.0226 18.4442 18.4749C17.3522 18.9272 16.1819 19.16 15 19.16C13.8181 19.16 12.6478 18.9272 11.5558 18.4749C10.4639 18.0226 9.47177 17.3597 8.63604 16.5239C7.80031 15.6882 7.13738 14.6961 6.68508 13.6041C6.23279 12.5122 6 11.3419 6 10.16C6 7.77302 6.94821 5.48384 8.63604 3.79601C10.3239 2.10819 12.6131 1.15997 15 1.15997C17.3869 1.15997 19.6761 2.10819 21.364 3.79601C23.0518 5.48384 24 7.77302 24 10.16V10.16Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="black"
                    ></path>
                  </svg>
                </a>

                <Modal className="mod" show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <div className="sear">
                      <div>
                        <Form
                          className="d-flex e"
                          style={{ marginLeft: "30rem" }}
                        >
                          <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                          />
                          <button className="search__button">
                            <svg
                              className=""
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 25 26"
                              fill="none"
                            >
                              <path
                                d="M1 24.16L8.5 16.66L1 24.16ZM24 10.16C24 11.3419 23.7672 12.5122 23.3149 13.6041C22.8626 14.6961 22.1997 15.6882 21.364 16.5239C20.5282 17.3597 19.5361 18.0226 18.4442 18.4749C17.3522 18.9272 16.1819 19.16 15 19.16C13.8181 19.16 12.6478 18.9272 11.5558 18.4749C10.4639 18.0226 9.47177 17.3597 8.63604 16.5239C7.80031 15.6882 7.13738 14.6961 6.68508 13.6041C6.23279 12.5122 6 11.3419 6 10.16C6 7.77302 6.94821 5.48384 8.63604 3.79601C10.3239 2.10819 12.6131 1.15997 15 1.15997C17.3869 1.15997 19.6761 2.10819 21.364 3.79601C23.0518 5.48384 24 7.77302 24 10.16V10.16Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                stroke="black"
                              ></path>
                            </svg>
                          </button>
                        </Form>
                      </div>
                      <div className="search-modal__quicksearch">
                        <div className="content flex flex-row items-center">
                          <span className="mr-1">Quick search:</span>
                          <ul className="flex flex-row">
                            <li className="mr-1">
                              <a
                                title="Search with keyword: Shirt"
                                href="/search?type=product&amp;q=Shirt&amp;options%5Bprefix%5D=last&amp;form_type=product&amp;utf8=✓"
                              >
                                Shirt,
                              </a>
                            </li>

                            <li className="mr-1">
                              <a
                                title="Search with keyword: Shirt"
                                href="/search?type=product&amp;q= Dress&amp;options%5Bprefix%5D=last&amp;form_type=product&amp;utf8=✓"
                              >
                                {" "}
                                Dress,
                              </a>
                            </li>

                            <li className="mr-1">
                              <a
                                title="Search with keyword: Shirt"
                                href="/search?type=product&amp;q= Sweater&amp;options%5Bprefix%5D=last&amp;form_type=product&amp;utf8=✓"
                              >
                                {" "}
                                Sweater
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Modal.Header>
                </Modal>

                <Link to="/wishlist"
                  className="icon-contain-count"
                  href="/pages/wishlist"
                  title="wishlist"
                >
                  <svg
                    fill="none"
                    height="20"
                    viewBox="0 0 27 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.0723 2.92773C23.4614 2.31659 22.7361 1.83178 21.9378 1.50101C21.1396 1.17025 20.2839 1 19.4199 1C18.5558 1 17.7001 1.17025 16.9019 1.50101C16.1036 1.83178 15.3783 2.31659 14.7674 2.92773L13.4997 4.19549L12.2319 2.92773C10.998 1.69384 9.3245 1.00064 7.57951 1.00064C5.83452 1.00064 4.16099 1.69384 2.92709 2.92773C1.6932 4.16163 1 5.83515 1 7.58015C1 9.32514 1.6932 10.9987 2.92709 12.2326L4.19485 13.5003L13.4997 22.8052L22.8045 13.5003L24.0723 12.2326C24.6834 11.6217 25.1682 10.8964 25.499 10.0981C25.8298 9.29986 26 8.44424 26 7.58015C26 6.71606 25.8298 5.86043 25.499 5.06216C25.1682 4.26388 24.6834 3.53859 24.0723 2.92773V2.92773Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="black"
                      className="hove"
                    ></path>
                  </svg>
                  <p className="badge-count count-wishlist hidden"></p>
                </Link>

                <button
                  className="link link--text focus-inset icon-contain-count "
                  onClick={handleShonw}
                >
                  <svg
                    className="header__icon--cart "
                    fill="none"
                    height="20"
                    viewBox="0 0 23 23"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.9838 20.0139L21.0905 5.88477H15.9919V4.49219C15.9919 2.0152 13.9768 0 11.4997 0C9.0227 0 7.00755 2.0152 7.00755 4.49219V5.88477H1.90901L0.0184232 19.9915L0.015683 20.0139C-0.0667936 20.7739 0.178704 21.5359 0.689197 22.1048C1.19969 22.6737 1.93088 23 2.69527 23H20.3042C21.0686 23 21.7997 22.6737 22.3102 22.1048C22.8207 21.536 23.0662 20.7739 22.9838 20.0139ZM8.80442 4.49219C8.80442 3.00599 10.0135 1.79688 11.4997 1.79688C12.9859 1.79688 14.195 3.00599 14.195 4.49219V5.88477H8.80442V4.49219ZM20.9729 20.9048C20.8002 21.0972 20.5628 21.2031 20.3042 21.2031H2.69527C2.4367 21.2031 2.19925 21.0972 2.02657 20.9048C1.856 20.7146 1.77613 20.4708 1.80106 20.2171L3.48109 7.68164H7.00755V10.4219H8.80442V7.68164H14.195V10.4219H15.9919V7.68164H19.5184L21.1984 20.2171C21.2233 20.4708 21.1435 20.7146 20.9729 20.9048Z"
                      fill="black"
                      className="hov"
                    ></path>
                  </svg>
                  <p className="badge-count count-item-cart hidden"></p>
                </button>

                <Offcanvas
                  className="offcanvas-end"
                  show={shonw}
                  onHide={handleClosed}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                      <h2>Shopping Cart</h2>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {/* <div className="shop-cart-hide">
                      <span>Your cart is currently empty.</span>
                    </div> */}
                    <div className="shop-cart-hidden">
                      <div className="list-cart">
                        <div className="list-call-item">
                          <a href="image-item" className="image-item">
                            <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_676e2092-0628-4127-b453-63e286f3179b.png?crop=center&height=130&v=1663639756&width=100" alt="img1" />
                          </a>
                          <div className="item-info">
                            <a className="font-medium" href="#font">Sleeve Maxi Dress</a>
                            <div className="table_price">
                              <div className="image-price">
                                <span style={{fontWeight:'400'}}>$50.00</span>
                              </div>
                            </div>
                            <div className="tab">
                            <div className="table_quantity">
                              <div className="input-group input-grp" style={{background:'#f6f6f6'}}>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={decNum}>-</button>
                                </div>
                                <input type="text" className="in-dec" value={num} onChange={handleChange}/>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={incNum}>+</button>
                               </div>
                            </div>
                            <div>
                            <button type="button" data-product-id="42470644809922:ed94fc9f56509f85a2d2b93d6022d901" className="item__remove">Remove</button>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        
                      </div>
                      <div className="list-cart">
                        <div className="list-call-item">
                          <a href="image-item" className="image-item">
                            <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_676e2092-0628-4127-b453-63e286f3179b.png?crop=center&height=130&v=1663639756&width=100" alt="img1" />
                          </a>
                          <div className="item-info">
                            <a className="font-medium" href="#font">Sleeve Maxi Dress</a>
                            <div className="table_price">
                              <div className="image-price">
                                <span style={{fontWeight:'400'}}>$50.00</span>
                              </div>
                            </div>
                            <div className="tab">
                            <div className="table_quantity">
                              <div className="input-group input-grp" style={{background:'#f6f6f6'}}>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={decNum}>-</button>
                                </div>
                                <input type="text" className="in-dec" value={num} onChange={handleChange}/>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={incNum}>+</button>
                               </div>
                            </div>
                            <div>
                            <button type="button" data-product-id="42470644809922:ed94fc9f56509f85a2d2b93d6022d901" className="item__remove">Remove</button>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        
                      </div>
                      <div className="list-cart">
                        <div className="list-call-item">
                          <a href="image-item" className="image-item">
                            <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_676e2092-0628-4127-b453-63e286f3179b.png?crop=center&height=130&v=1663639756&width=100" alt="img1" />
                          </a>
                          <div className="item-info">
                            <a className="font-medium" href="#font">Sleeve Maxi Dress</a>
                            <div className="table_price">
                              <div className="image-price">
                                <span style={{fontWeight:'400'}}>$50.00</span>
                              </div>
                            </div>
                            <div className="tab">
                            <div className="table_quantity">
                              <div className="input-group input-grp" style={{background:'#f6f6f6'}}>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={decNum}>-</button>
                                </div>
                                <input type="text" className="in-dec" value={num} onChange={handleChange}/>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={incNum}>+</button>
                               </div>
                            </div>
                            <div>
                            <button type="button" data-product-id="42470644809922:ed94fc9f56509f85a2d2b93d6022d901" className="item__remove">Remove</button>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        
                      </div>
                      <div className="list-cart">
                        <div className="list-call-item">
                          <a href="image-item" className="image-item">
                            <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_676e2092-0628-4127-b453-63e286f3179b.png?crop=center&height=130&v=1663639756&width=100" alt="img1" />
                          </a>
                          <div className="item-info">
                            <a className="font-medium" href="#font">Sleeve Maxi Dress</a>
                            <div className="table_price">
                              <div className="image-price">
                                <span style={{fontWeight:'400'}}>$50.00</span>
                              </div>
                            </div>
                            <div className="tab">
                            <div className="table_quantity">
                              <div className="input-group input-grp" style={{background:'#f6f6f6'}}>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={decNum}>-</button>
                                </div>
                                <input type="text" className="in-dec" value={num} onChange={handleChange}/>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={incNum}>+</button>
                               </div>
                            </div>
                            <div>
                            <button type="button" data-product-id="42470644809922:ed94fc9f56509f85a2d2b93d6022d901" className="item__remove">Remove</button>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        
                      </div>
                      <div className="list-cart">
                        <div className="list-call-item">
                          <a href="image-item" className="image-item">
                            <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_676e2092-0628-4127-b453-63e286f3179b.png?crop=center&height=130&v=1663639756&width=100" alt="img1" />
                          </a>
                          <div className="item-info">
                            <a className="font-medium" href="#font">Sleeve Maxi Dress</a>
                            <div className="table_price">
                              <div className="image-price">
                                <span style={{fontWeight:'400'}}>$50.00</span>
                              </div>
                            </div>
                            <div className="tab">
                            <div className="table_quantity">
                              <div className="input-group input-grp" style={{background:'#f6f6f6'}}>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={decNum}>-</button>
                                </div>
                                <input type="text" className="in-dec" value={num} onChange={handleChange}/>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={incNum}>+</button>
                               </div>
                            </div>
                            <div>
                            <button type="button" data-product-id="42470644809922:ed94fc9f56509f85a2d2b93d6022d901" className="item__remove">Remove</button>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        
                      </div>
                      <div className="list-cart">
                        <div className="list-call-item">
                          <a href="image-item" className="image-item">
                            <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_676e2092-0628-4127-b453-63e286f3179b.png?crop=center&height=130&v=1663639756&width=100" alt="img1" />
                          </a>
                          <div className="item-info">
                            <a className="font-medium" href="#font">Sleeve Maxi Dress</a>
                            <div className="table_price">
                              <div className="image-price">
                                <span style={{fontWeight:'400'}}>$50.00</span>
                              </div>
                            </div>
                            <div className="tab">
                            <div className="table_quantity">
                              <div className="input-group input-grp" style={{background:'#f6f6f6'}}>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={decNum}>-</button>
                                </div>
                                <input type="text" className="in-dec" value={num} onChange={handleChange}/>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={incNum}>+</button>
                               </div>
                            </div>
                            <div>
                            <button type="button" data-product-id="42470644809922:ed94fc9f56509f85a2d2b93d6022d901" className="item__remove">Remove</button>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        
                      </div>
                      <div className="list-cart">
                        <div className="list-call-item">
                          <a href="image-item" className="image-item">
                            <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_676e2092-0628-4127-b453-63e286f3179b.png?crop=center&height=130&v=1663639756&width=100" alt="img1" />
                          </a>
                          <div className="item-info">
                            <a className="font-medium" href="#font">Sleeve Maxi Dress</a>
                            <div className="table_price">
                              <div className="image-price">
                                <span style={{fontWeight:'400'}}>$50.00</span>
                              </div>
                            </div>
                            <div className="tab">
                            <div className="table_quantity">
                              <div className="input-group input-grp" style={{background:'#f6f6f6'}}>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={decNum}>-</button>
                                </div>
                                <input type="text" className="in-dec" value={num} onChange={handleChange}/>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={incNum}>+</button>
                               </div>
                            </div>
                            <div>
                            <button type="button" data-product-id="42470644809922:ed94fc9f56509f85a2d2b93d6022d901" className="item__remove">Remove</button>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        
                      </div>
                      <div className="list-cart">
                        <div className="list-call-item">
                          <a href="image-item" className="image-item">
                            <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_676e2092-0628-4127-b453-63e286f3179b.png?crop=center&height=130&v=1663639756&width=100" alt="img1" />
                          </a>
                          <div className="item-info">
                            <a className="font-medium" href="#font">Sleeve Maxi Dress</a>
                            <div className="table_price">
                              <div className="image-price">
                                <span style={{fontWeight:'400'}}>$50.00</span>
                              </div>
                            </div>
                            <div className="tab">
                            <div className="table_quantity">
                              <div className="input-group input-grp" style={{background:'#f6f6f6'}}>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={decNum}>-</button>
                                </div>
                                <input type="text" className="in-dec" value={num} onChange={handleChange}/>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={incNum}>+</button>
                               </div>
                            </div>
                            <div>
                            <button type="button" data-product-id="42470644809922:ed94fc9f56509f85a2d2b93d6022d901" className="item__remove">Remove</button>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        
                      </div>
                    </div>
                    
                    </Offcanvas.Body>
                    <div className="shop-cart-footer">
                    <div className="fitpro">
                      <ProgressBar className="progrs" striped variant="warning" now={gainedProgress} />
                      <div className="text">{rendervalue()}</div>
                    </div>
                      <div className="shop-cart-icon mb-[20px]">
                        <ul>                  
                          <li flow="up"  className="shop-cart-icon__item" data-show="note">
                          {['top'].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>
                                <strong>Add note</strong>
                              </Tooltip>
                            }
                          >
                            <Button className="shop-cart-btn" variant="transparent">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard">
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                              </svg>
                            </Button>
                          </OverlayTrigger>
                          ))}
                          </li>
                          <li flow="up" tooltip="Add Coupon" className="shop-cart-icon__item" data-show="coupon">
                          {['top'].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>
                                <strong>Add coupan</strong>
                              </Tooltip>
                            }
                          >
                            <Button className="shop-cart-btn" variant="transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-percent">
                              <line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>
                            </svg>
                            </Button>
                          </OverlayTrigger>
                          ))}
                          </li>
                          <li flow="up" tooltip="Estimate Shipping" className="shop-cart-icon__item" data-show="shipping">
                          {['top'].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>
                                <strong>Estimate Shiping</strong>
                              </Tooltip>
                            }
                          >
                            <Button className="shop-cart-btn" variant="transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-truck">
                              <rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
                            </svg>
                            </Button>
                          </OverlayTrigger>
                          ))}  
                          </li>
                          <li flow="up" tooltip="Add A Gift Wrap" className="shop-cart-icon__item" data-show="gift_wrap">
                          {['top'].map((placement) => (
                          <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                              <Tooltip id={`tooltip-${placement}`}>
                                <strong>Add a Gift Wrap</strong>
                              </Tooltip>
                            }
                          >
                            <Button className="shop-cart-btn" variant="transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-gift">
                              <polyline points="20 12 20 22 4 22 4 12"></polyline>
                              <rect x="2" y="7" width="20" height="5"></rect>
                              <line x1="12" y1="22" x2="12" y2="7"></line>
                              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                            </svg>
                            </Button>
                          </OverlayTrigger>
                          ))} 
                          </li>
                          <li className="shop-cart-icon__item remove-cart-item-all">Clear Cart</li>
                        </ul>
                      </div>

                      <div className="shop-cart-total">
                        <span>Subtotal</span>
                        <span>${subtotal}.00</span>
                      </div>
                      <div>
                       <Link to="/Information" style={{ textDecoration:'none', color:'white'}} className="butan mb-3">Check Out</Link>
                      </div>
                      <div className="button-wrap">
                        <Link to='/Cart' type="button" style={{ textDecoration:'none'}} className="buton second-buton"><span>View Cart</span></Link>
                      </div>
                      
                    </div>
                </Offcanvas>

                <button
                  className="menu-drawer__account link focus-inset-l h5 account-button"
                  href="#kj"
                  onClick={handleShown}
                >
                  <svg
                    className="icon-account"
                    width="20"
                    height="20"
                    viewBox="0 0 23 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 14C15.0899 14 18 11.0899 18 7.5C18 3.91015 15.0899 1 11.5 1C7.91015 1 5 3.91015 5 7.5C5 11.0899 7.91015 14 11.5 14Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M1 24C1 19 5 14 11.5 14C18 14 22 19 22 24"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <Modal className="mode" show={shown} onHide={handleClosen}>
                  <Modal.Header closeButton>
                    <h4>Login</h4>
                  </Modal.Header>
                  <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <div className="kls" style={{position:'absolute',overflow: 'hidden'}}>
                      <button className="anima login-box" onClick={handleClosen}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Sign In
                      </button>
                    </div>
                    <div className="kls" style={{position:'absolute',overflow: 'hidden', marginLeft:'10rem'}}>
                      <button className="anima login-box" onClick={handleClosen}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      Create account
                      </button>
                    </div>
                    
                  </Modal.Footer>
                </Modal>
              </>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <Navbar
        className="nNav"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="white"
      >
        <Container>
          <Button className="banbut" variant="primary" onClick={handleShows}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="27"
              viewBox="0 0 17 13"
              fill="none"
            >
              <path
                d="M0 0.722222C0 0.530677 0.0746279 0.346977 0.207466 0.211534C0.340304 0.0760912 0.520472 0 0.708333 0H12.0417C12.2295 0 12.4097 0.0760912 12.5425 0.211534C12.6754 0.346977 12.75 0.530677 12.75 0.722222C12.75 0.913767 12.6754 1.09747 12.5425 1.23291C12.4097 1.36835 12.2295 1.44444 12.0417 1.44444H0.708333C0.520472 1.44444 0.340304 1.36835 0.207466 1.23291C0.0746279 1.09747 0 0.913767 0 0.722222ZM0 12.2778C0 12.0862 0.0746279 11.9025 0.207466 11.7671C0.340304 11.6316 0.520472 11.5556 0.708333 11.5556H10.625C10.8129 11.5556 10.993 11.6316 11.1259 11.7671C11.2587 11.9025 11.3333 12.0862 11.3333 12.2778C11.3333 12.4693 11.2587 12.653 11.1259 12.7885C10.993 12.9239 10.8129 13 10.625 13H0.708333C0.520472 13 0.340304 12.9239 0.207466 12.7885C0.0746279 12.653 0 12.4693 0 12.2778ZM0.708333 5.77778C0.520472 5.77778 0.340304 5.85387 0.207466 5.98931C0.0746279 6.12475 0 6.30845 0 6.5C0 6.69155 0.0746279 6.87525 0.207466 7.01069C0.340304 7.14613 0.520472 7.22222 0.708333 7.22222H16.2917C16.4795 7.22222 16.6597 7.14613 16.7925 7.01069C16.9254 6.87525 17 6.69155 17 6.5C17 6.30845 16.9254 6.12475 16.7925 5.98931C16.6597 5.85387 16.4795 5.77778 16.2917 5.77778H0.708333Z"
                fill="black"
              ></path>
            </svg>
          </Button>

          <Offcanvas
            style={{ width: "320px" }}
            show={shows}
            onHide={handleCloses}
          >
            <div
              style={{
                display: "flex",
                padding: "10px",
                backgroundColor: "#f8f8f8",
                borderBottom: "1px solid #ebebeb",
              }}
            >
              <div>
                <Offcanvas.Header closeButton></Offcanvas.Header>
              </div>
              <div style={{ marginTop: "11px", fontWeight: "bolder" }}>
                Close
              </div>
            </div>
            <Offcanvas.Body>
              <Accordion defaultActiveKey="0">
                {/* <Accordion.Item eventKey="9"> */}
                <Accordion.Header>Home</Accordion.Header>
                {/* <Accordion.Body>
                    <ul className="uflu">
                      <li>Home Default</li>
                      <li>Home Pet</li>
                      <li>Home Gift</li>
                      <li>Home Socks</li>
                      <li>Home Craft</li>
                      <li>Home Clogs</li>
                    </ul>
                  </Accordion.Body> */}
                {/* </Accordion.Item> */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Shop</Accordion.Header>
                  <Accordion.Body>
                    <ul className="uflu">
                      <li>LISTING STYLE</li>
                      <li>PRODUCT PAGE STYLE</li>
                      <li>PRODUCT PAGE STYLE 2</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Features</Accordion.Header>
                  <Accordion.Body>
                    <ul className="uflu">
                      <li>PAGES</li>
                      <li>DESIGN</li>
                      <li>ABOUT US</li>
                      <li>OTHER PAGES</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Portfolio</Accordion.Header>
                  <Accordion.Body>
                    <ul className="uflu">
                      <li>Portfolio 1</li>
                      <li>Portfolio 2</li>
                      <li>Portfolio 3</li>
                      <li>Portfolio 4</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Blog</Accordion.Header>
                  <Accordion.Body>
                    <ul className="uflu">
                      <li>Blog Details</li>
                      <li>Blog Listing Default </li>
                      <li>Blog Listing One Column</li>
                      <li>Blog Listing Two Column</li>
                      <li>Blog Listing Right Sidebar</li>
                      <li>Blog Listing Full Two Column</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Contact</Accordion.Header>
                  <Accordion.Body>
                    <ul className="uflu">
                      <li>Contact 2</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Offcanvas.Body>
          </Offcanvas>

          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="150px"
              height="30px"
              className="align-top"
            />
          </Navbar.Brand>
          <svg
            className="icon-account"
            width="20"
            height="20"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleShown}
          >
            <path
              d="M11.5 14C15.0899 14 18 11.0899 18 7.5C18 3.91015 15.0899 1 11.5 1C7.91015 1 5 3.91015 5 7.5C5 11.0899 7.91015 14 11.5 14Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M1 24C1 19 5 14 11.5 14C18 14 22 19 22 24"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <button
            className="px-1.25 header__icon header__icon--cart link link--text focus-inset ml-3.75"
            id="cart-icon-bubble"
            title="Cart count"
            onClick={handleShonw}
          >
            <svg
              className="header__icon--cart "
              fill="none"
              height="20"
              viewBox="0 0 23 23"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.9838 20.0139L21.0905 5.88477H15.9919V4.49219C15.9919 2.0152 13.9768 0 11.4997 0C9.0227 0 7.00755 2.0152 7.00755 4.49219V5.88477H1.90901L0.0184232 19.9915L0.015683 20.0139C-0.0667936 20.7739 0.178704 21.5359 0.689197 22.1048C1.19969 22.6737 1.93088 23 2.69527 23H20.3042C21.0686 23 21.7997 22.6737 22.3102 22.1048C22.8207 21.536 23.0662 20.7739 22.9838 20.0139ZM8.80442 4.49219C8.80442 3.00599 10.0135 1.79688 11.4997 1.79688C12.9859 1.79688 14.195 3.00599 14.195 4.49219V5.88477H8.80442V4.49219ZM20.9729 20.9048C20.8002 21.0972 20.5628 21.2031 20.3042 21.2031H2.69527C2.4367 21.2031 2.19925 21.0972 2.02657 20.9048C1.856 20.7146 1.77613 20.4708 1.80106 20.2171L3.48109 7.68164H7.00755V10.4219H8.80442V7.68164H14.195V10.4219H15.9919V7.68164H19.5184L21.1984 20.2171C21.2233 20.4708 21.1435 20.7146 20.9729 20.9048Z"
                fill="black"
              ></path>
            </svg>
          </button>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNavbar;
