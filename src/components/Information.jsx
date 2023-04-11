import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Information.css';
import logo from '../assets/images/LOGO.webp';
import In from '../assets/images/in.png';
import less from '../assets/images/less.png';
import impic from '../assets/images/impic.png';

const subtotal = 2000;

function Information() {
  return (
    <div>
      <div className='container-fluid left'>

        <Row>
          <Col xs={0} md={2}></Col>
          <Col xs={12} md={5} style={{ borderRight: '1px solid #d9d9d9' }}>
            <div className='div-mai' style={{ paddingRight: '50px', marginTop: '50px' }}>
              <div className='mbb'>
                <a href='#Home' className='Logo-link'><img src={logo} alt='logo' className='logo-img' /></a>
              </div>
              <div className='mbb'>
                <Breadcrumb className='nbredcrub'>
                  <Breadcrumb.Item className='nbredcrubd' href="#">Cart</Breadcrumb.Item>
                  <Breadcrumb.Item active>Information</Breadcrumb.Item>
                  <Breadcrumb.Item active>Shiping</Breadcrumb.Item>
                  <Breadcrumb.Item active>Payment</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div>
                <div className='id-info'>
                  <div><h5>Contact information</h5></div>
                  <div><h6>Already have an account?<a href='ghj'>Log in</a></h6></div>
                </div>
                <div>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Email me with news and offers"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </div>
                  ))}
                  <div>
                    <h5>Shipping address</h5>
                    <FloatingLabel controlId="floatingSelect" label="Counrty/Region" className='mbb'>
                      <Form.Select aria-label="Floating label select example">
                        <option value="1">China</option>
                        <option value="2">Japan</option>
                        <option value="3">France</option>
                        <option value="4">United States</option>
                      </Form.Select>
                    </FloatingLabel>
                    <Row className="g-2 mbb">
                      <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="First name(optional)">
                          <Form.Control type="text" placeholder="First name(optional)" />
                        </FloatingLabel>
                      </Col>
                      <Col md>
                        <FloatingLabel
                          controlId="floatingSelectGrid"
                          label="Last name"
                        >
                          <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Address"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder="Address" />
                    </FloatingLabel>
                    <div className='flex in-info'>
                      <img src={In} alt='in' style={{ width: '18px', height: '18px', marginRight: '10px' }} />
                      <h6>Add a house number if you have one</h6>
                    </div>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Apartment, suite, etc. (optional)"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder="Apartment, suite, etc. (optional)" />
                    </FloatingLabel>
                    <Row className="mb-3">

                      <Form.Group as={Col} controlId="formGridCity">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="City"
                          className="mb-3"
                        >
                          <Form.Control type="text" placeholder="City" />
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridCity">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="State"
                          className="mb-3"
                        >
                          <Form.Select defaultValue="Choose..." placeholder='State'>
                            <option>Choose...</option>
                            <option>...</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridCity">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Zip Code"
                          className="mb-3"
                        >
                          <Form.Control type="text" placeholder="Zip Code" />
                        </FloatingLabel>
                      </Form.Group>
                    </Row>
                    {['checkbox'].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Save this information for next time"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                      </div>
                    ))}
                    <div className='justify marbot'>
                    <div className='div-a' style={{ height: '40px', marginTop: '15px' }}><a href='lj' className='lesimg' style={{ marginTop: '30px' }}><img src={less} alt='les' />Return to cart</a></div>
                      <div className='div-buton'><Button className='continueship' variant="primary" size="lg">Continue to shipping</Button>{' '}</div>
                      <div className='div-amedia' style={{ height: '40px', marginTop: '15px' }}><a href='lj' className='lesimg' style={{ marginTop: '30px' }}><img src={less} alt='les' />Return to cart</a></div>
                      
                    </div>
                    <hr></hr>
                    <div className='policy-service mb'>
                      <a href='#ko'>Refund policy</a>
                      <a href='#ko'>Privacy policy</a>
                      <a href='#ko'>Terms of service</a>
                      <a href='#ko'>Contact information</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} md={5} className='colsize' style={{ background: '#f5f5f5' }}>
            <div className='scrcol'>
              <div className='scrollimg'>
              <Row className='mttt'>
                <div className='flex' style={{ borderBottom: '1px solid #d9d9d9' }}>
                  <div className='pictureim mbb'>
                    <img src={impic} alt='impic' />
                  </div>
                  <div className='justify justf mbb'>
                    <h6 style={{ marginRight: '10rem' }}>Sleeve Maxi Dress</h6>
                    <span>$50.00</span>
                  </div>
                </div>
              </Row>
              <Row className='mttt'>
                <div className='flex' style={{ borderBottom: '1px solid #d9d9d9' }}>
                  <div className='pictureim mbb'>
                    <img src={impic} alt='impic' />
                  </div>
                  <div className='justify justf mbb'>
                    <h6 style={{ marginRight: '10rem' }}>Sleeve Maxi Dress</h6>
                    <span>$50.00</span>
                  </div>
                </div>
              </Row>
              <Row className='mttt'>
                <div className='flex' style={{ borderBottom: '1px solid #d9d9d9' }}>
                  <div className='pictureim mbb'>
                    <img src={impic} alt='impic' />
                  </div>
                  <div className='justify justf mbb'>
                    <h6 style={{ marginRight: '10rem' }}>Sleeve Maxi Dress</h6>
                    <span>$50.00</span>
                  </div>
                </div>
              </Row>
              <Row className='mttt'>
                <div className='flex' style={{ borderBottom: '1px solid #d9d9d9' }}>
                  <div className='pictureim mbb'>
                    <img src={impic} alt='impic' />
                  </div>
                  <div className='justify justf mbb'>
                    <h6 style={{ marginRight: '10rem' }}>Sleeve Maxi Dress</h6>
                    <span>$50.00</span>
                  </div>
                </div>
              </Row>
              <Row className='mttt'>
                <div className='flex' style={{ borderBottom: '1px solid #d9d9d9' }}>
                  <div className='pictureim mbb'>
                    <img src={impic} alt='impic' />
                  </div>
                  <div className='justify justf mbb'>
                    <h6 style={{ marginRight: '10rem' }}>Sleeve Maxi Dress</h6>
                    <span>$50.00</span>
                  </div>
                </div>
              </Row>
              <Row className='mttt'>
                <div className='flex' style={{ borderBottom: '1px solid #d9d9d9' }}>
                  <div className='pictureim mbb'>
                    <img src={impic} alt='impic' />
                  </div>
                  <div className='justify justf mbb'>
                    <h6 style={{ marginRight: '10rem' }}>Sleeve Maxi Dress</h6>
                    <span>$50.00</span>
                  </div>
                </div>
              </Row>
              </div>
              <div className='flex discontspace mbb'>
                <div>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Discount Code"
                    size="sm"
                    className="mb-3"
                  >
                    <Form.Control size="sm" className='formcont' type="email" placeholder="Discount Code" />
                  </FloatingLabel>
                </div>
                <div>
                  <Button className='butdiscount' variant="secondary">Apply</Button>{' '}
                </div>
              </div>
              <div className='bb mbb'>
                <div className='justify mbb'>
                  <span>Subtotal</span>
                  <span>${subtotal}.00</span>
                </div>
                <div className='justify mbb'>
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>
              <div className='justify'>
                <div><h6>Total</h6></div>
                <div><span style={{ fontSize: '12px' }}>USD <span style={{ fontSize: '22px', fontWeight: '500' }}>${subtotal}.00</span></span></div>
              </div>

            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Information;
