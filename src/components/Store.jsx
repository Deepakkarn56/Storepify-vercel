import React, { useCallback, useRef, useState, Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Store.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Icon } from 'react-icons-kit'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { starEmpty } from 'react-icons-kit/icomoon/starEmpty'
import { eye } from 'react-icons-kit/icomoon/eye'
import { ic_favorite_border } from 'react-icons-kit/md/ic_favorite_border'
import { ic_sync_alt } from 'react-icons-kit/md/ic_sync_alt'
import { pinterestP } from 'react-icons-kit/fa/pinterestP'
import { instagram } from 'react-icons-kit/entypo/instagram'
import { socialTwitterOutline } from 'react-icons-kit/ionicons/socialTwitterOutline'
import { iosBrowsersOutline } from 'react-icons-kit/ionicons/iosBrowsersOutline'
import { socialFacebookCircular } from 'react-icons-kit/typicons/socialFacebookCircular'
import { truck } from 'react-icons-kit/fa/truck'
import { reply } from 'react-icons-kit/oct/reply'
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right'
// import $ from "jquery";
import Table from 'react-bootstrap/Table';
import {star} from 'react-icons-kit/fa/star'
import Card from 'react-bootstrap/Card';
import database from '../components/database.jsx';
import $ from 'jquery';






export default function Store() {

  // images change
  const [noOfElement, setnoOfElement] = useState(5);



  const slice = database.cardData.slice(0, noOfElement);

  const changeImage = (id, size) => {
    const currentData = database.cardData.filter(el => el.id === id)
    console.log(id, size, currentData, currentData[0].linkImg);
    //    console.log("ddd", currentData)  

    // $(`${id} img`).attr('src', {img22});
    if (size == 'S') {
      $(`.${id} img`).attr('src', currentData[0].linkImg.S);
    } else if (size == 'M') {
      $(`.${id} img`).attr('src', currentData[0].linkImg.M);

    } else if (size == 'L') {
      $(`.${id} img`).attr('src', currentData[0].linkImg.L);

    } else if (size == 'XL') {
      $(`.${id} img`).attr('src', currentData[0].linkImg.XL);

    }
  }

  // next part

  let [num, setNum] = useState(1);
  let incNum = () => {
    if (num < 20) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  }
  let handleChange = (e) => {
    setNum(e.target.value);
  }


  const [clases, setClasses] = useState('S')

  $(document).ready(function () {

    $(".filter-button").click(function () {
      var value = $(this).attr('data-filter');

      if (value == "all") {

        $('.filter').show('1000');
      }
      else {

        $(".filter").not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');

      }
    });

    if ($(".filter-button").removeClass("active")) {
      $(this).removeClass("active");
    }
    $(this).addClass("active");

  });
  const rendringComponent = () => {
    if (clases === 'S') {
      return <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_676e2092-0628-4127-b453-63e286f3179b.png?crop=center&height=1200&v=1663639756&width=900" alt='img1' height="auto" width="100%" />
    } else if (clases === 'M') {
      return <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/2_71e4ec66-1bf5-4cd6-8a2f-47f4dc172c88.png?crop=center&height=1200&v=1663639756&width=900" alt='img1' height="auto" width="100%" />
    } else if (clases === 'L') {
      return <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/3_05925ea9-5e30-49ee-874e-38944cb94823.png?crop=center&height=1200&v=1663639756&width=900" alt='img1' height="auto" width="100%"
      />
    } else if (clases === 'XL') {
      return <img src='https://cdn.shopify.com/s/files/1/0624/8638/0738/products/4_21804ff4-4efc-475b-bb14-d9ba2b9f4f95.png?crop=center&height=1200&v=1663639756&width=900' height="auto" width="100%" />
    }

  }


  return (
    <div style={{ fontFamily: "Jost" }} >
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Home&nbsp;&nbsp;<Icon icon={ic_keyboard_arrow_right} size={25} /></Navbar.Brand>
          <Navbar.Brand href="#home">Accessories&nbsp;&nbsp;<Icon icon={ic_keyboard_arrow_right} size={25} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Sleeve Maxi Dress</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* next part ..... */}
      <div className='container'>
        <div className='row upper'>
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <span className={`gallery_product  filter ${clases}`}>
              {rendringComponent()}
            </span>
          </div>

          <div className='col-lg-5 col-md-5 col-sm-5 col-xs-5 img3' >
            <h2>Sleeve Maxi Dress</h2>
            <div style={{ color: 'orange' }}>
              <Icon size={15} icon={star} />
              <Icon size={15} icon={star} />
              <Icon size={15} icon={star} />
              <Icon size={15} icon={starEmpty} />
              <Icon size={15} icon={starEmpty} />
              <span className='color'> (0)</span>
            </div>
            <h1 className='d'>$50 &nbsp;<span className='del'><del>$70</del></span></h1>
            <div className='eye'>
              <Icon size={15} icon={eye} /><span>
                &nbsp;&nbsp;12 people are viewing the right now
              </span>
            </div>
            <div className='fire'>
              <svg className="mr-2.5 animate-pulse" fill="none" height="22" viewBox="0 0 18 22" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.56209 6.73463C3.45305 7.84937 3.37654 9.82217 4.06329 10.6619C4.06329 10.6619 3.74 8.49475 6.63812 5.77573C7.80502 
                 4.68116 8.07475 3.19239 7.66729 2.07581C7.43582 1.44327 7.01306 0.920735 6.64577 0.555877C6.43152 0.341363 6.59603 -0.0124945 
                  6.90785 0.00033966C8.79402 0.0810118 11.8509 0.583379 13.1498 3.70759C13.7199 5.07902 13.762 6.49628 13.4903 7.93738C13.3181 
                   8.85777 12.706 10.9039 14.1025 11.1551C15.0991 11.3348 15.5812 10.5757 15.7973 10.0294C15.8872 9.80201 16.1991 9.74517 16.3674 
                    9.92668C18.0508 11.762 18.1943 13.9236 17.8461 15.7846C17.1727 19.3818 13.3717 22 9.59554 22C4.8782 22 1.12308 19.413 0.149385 
                     14.7303C-0.24277 12.84 -0.0438223 9.09979 2.99777 6.45961C3.2235 6.2616 3.5927 6.43761 3.56209 6.73463Z"
                  fill="url(#paint0_radial_860_2458)">
                </path>
                <path d="M10.936 13.6413C9.41277 11.5417 10.0948 9.14609 10.4685 8.19142C10.5188 8.06581 10.3847 7.94737 10.2791 8.02453C9.62392 
                 8.50187 8.28164 9.62522 7.65659 11.2062C6.81034 13.3434 6.87067 14.3896 7.37171 15.6673C7.67335 16.4371 7.32312 16.6004 7.14716 
                  16.6291C6.97624 16.6578 6.81872 16.5358 6.69304 16.4084C6.33147 16.0367 6.07382 15.5644 5.94901 15.0446C5.92219 14.9333 5.78646 
                   14.9028 5.72446 14.9943C5.25525 15.6888 5.01226 16.8032 5.00053 17.5909C4.96367 20.0261 6.84218 22 9.11449 22C11.9783 22 14.0646 
                    18.6084 12.4191 15.7731C11.9415 14.9477 11.4924 14.4075 10.936 13.6413Z" fill="url(#paint1_radial_860_2458)"></path>
                <defs>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(8.66121 22.057) rotate(-179.762) scale(13.5031 21.2352)"
                    gradientUnits="userSpaceOnUse" id="paint0_radial_860_2458" r="1">
                    <stop offset="0.314" stopColor="#FF9800"></stop>
                    <stop offset="0.662" stopColor="#FF6D00"></stop>
                    <stop offset="0.972" stopColor="#F44336"></stop>
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(9.272 9.44906)   
                   rotate(90.5404)scale(13.25339.31427)"gradientUnits="userSpaceOnUse" id="paint1_radial_860_2458" r="1">
                    <stop offset="0.214" stopColor="#FFF176"></stop>
                    <stop offset="0.328" stopColor="#FFF27D"></stop>
                    <stop offset="0.487" stopColor="#FFF48F"></stop>
                    <stop offset="0.672" stopColor="#FFF7AD"></stop>
                    <stop offset="0.793" stopColor="#FFF9C4"></stop>
                    <stop offset="0.822" stopColor="#FFF8BD" stopOpacity="0.804"></stop>
                    <stop offset="0.863" stopColor="#FFF6AB" stopOpacity="0.529"></stop>
                    <stop offset="0.91" stopColor="#FFF38D" stopOpacity="0.209"></stop>
                    <stop offset="0.941" stopColor="#FFF176" stopOpacity="0"></stop>
                  </radialGradient>
                </defs>
              </svg>
              <span style={{ color: "red" }}>
                &nbsp;&nbsp;6 sold in last 24 hours
              </span>
            </div>
            <div className="input">
              <div className="input-group">
                <Table style={{ width: "200px" }}>
                  <thead>
                    <tr>
                      <th><button style={{ marginRight: '.3rem' }} className="Button" type="button" onClick={decNum}>-</button></th>
                      <th>
                        <input type="text" style={{ textAlign: "center", border: "none" }} value={num} size='2' onChange={handleChange} />
                      </th>
                      <th><button style={{ marginLeft: '.5rem' }} className="Button" type="button" onClick={incNum}>+</button>&nbsp;</th>
                    </tr>
                  </thead>
                </Table>
                <Button style={{ marginLeft: '20px', width: "40%", height: "45px" }} variant="outline-dark">Add to Cart</Button>
              </div>
            </div>
            <form action="action_page.php">
              <input type="checkbox" id="vehicle1" className="vehicle1" value="Bike" />
              <label htmlFor="vehicle1" className='v'>&nbsp;I agree with the&nbsp;<a className='u' href="#">terms and conditions.</a></label>
            </form>
            {/* <Button style={{ marginLeft: '20px', width: "50%" }} variant="outline-dark">Add to Cart</Button> */}
            <Button style={{ marginTop: "10px", width: "100%" }} variant="outline-dark">Buy Now</Button>
            <div className='fav'>
              <Icon icon={ic_favorite_border} size={15} className="dil" />&nbsp;&nbsp;
              <span>Wishlist</span>
              <Icon style={{ marginLeft: "50px" }} icon={ic_sync_alt} size={15} className="dil" />&nbsp;&nbsp;
              <span>Compare</span>
            </div>
            <hr style={{ marginTop: "28px" }} />
            <p>Vendor:&nbsp;&nbsp;<span><a className='u' href="#">Burberry</a></span></p>
            <p>Availability:&nbsp;&nbsp;<span style={{ color: "green" }}><a className='s' href='#'>In stock</a></span></p>
            <p>Category:&nbsp;&nbsp;<span>Accessories</span></p>
            <hr style={{ marginTop: "20px" }} />
            <p>Share: &nbsp;&nbsp;<span><a className='icons' href='#'><Icon icon={pinterestP} size={25} /> </a>&nbsp;&nbsp;<a
              className='icons' href='#'><Icon icon={instagram}
                size={22} /> </a>&nbsp;&nbsp;
              <a className='icons' href='#'><Icon icon={socialFacebookCircular} size={30} /> </a>&nbsp;&nbsp;<a className='icons' href='#'><Icon
                icon={socialTwitterOutline} size={25} /></a> &nbsp;&nbsp;
              <a className='icons' href='#'><Icon icon={iosBrowsersOutline} size={28} /></a></span></p>
            <p><span><Icon icon={reply} size={20} style={{ marginRight: "20px" }} /></span>Free Shipping & Returns: On all orders over $200</p>
            <p><span><Icon icon={truck} size={20} style={{ marginRight: "20px" }} /></span>Estimated Delivery: Mar 17 - Mar 23</p>
            <img src='https://cdn.shopify.com/s/files/1/0624/8638/0738/files/PngItem_3350472.png?crop=center&height=401&v=1677204939&width=2185'
              alt='ads' style={{ marginTop: "45px" }} width="100%" />
          </div>
          <div className='col-6 p-0 mx-3 dn' style={{ display: "flex", marginTop: "20px" }}>

            <div className="" data-filter="S" onClick={() => setClasses(() => 'S')}>
              <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_676e2092-0628-4127-b453-63e286f3179b.png?crop=center&height=1200&v=1663639756&width=900" alt='img1' width="80%" />

            </div>

            <div data-filter="M" onClick={() => setClasses(() => 'M')} >
              <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/2_71e4ec66-1bf5-4cd6-8a2f-47f4dc172c88.png?crop=center&height=1200&v=1663639756&width=900" alt='img1' width="80%" />
            </div>

            <div data-filter="L" onClick={() => setClasses(() => 'L')} >
              <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/3_05925ea9-5e30-49ee-874e-38944cb94823.png?crop=center&height=1200&v=1663639756&width=900" alt='img1' width="80%" />
            </div>

            <div data-filter="XL" onClick={() => setClasses(() => 'XL')}>
              <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/4_21804ff4-4efc-475b-bb14-d9ba2b9f4f95.png?crop=center&height=1200&v=1663639756&width=900" alt='img1' width="80%" />
            </div>
          </div>

          <p style={{ justifyContent: "center", textAlign: "justify", marginTop: "30px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing  elit.       Fusce egestas
            risus in dui tempus posuere.
            In finibus finibus interdum. Suspendisse finibus dui id ultrices eleifend. Sed bibendum aliquam nisi, at elementum lorem feugiat
            sagittis.
            Curabitur luctus erat quis massa condimentum, non interdum turpis accumsan. Donec lacinia egestas nunc vitae pretium. Donec et iaculis
            massa.
            Proin vel diam sed quam lacinia lobortis nec id nisi. Maecenas eu fringilla eros. Mauris in tellus vulputate, pretium mi ornare,
            vehicula lectus.
            Aenean et mollis dolor.</p>
          <p style={{ marginTop: "5px", textAlign: "justify" }}>Vestibulum eu tortor sit amet quam viverra convallis eget nec lacus. Pellentesque
            sit amet venenatis lacus.
            Maecenas aliquet erat blandit, volutpat velit sed, scelerisque felis. Integer lacinia accumsan lorem, eget lobortis eros egestas a.
            Morbi laoreet eros nec pharetra gravida. Suspendisse sagittis libero nibh, et egestas metus pulvinar non. Interdum et malesuada fames
            ac ante ipsum primis in faucibus.
            Maecenas aliquet quam quis dui vestibulum, sed volutpat velit ultrices. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
            In at odio et lectus lacinia imperdiet. Nam vitae accumsan neque, eget placerat purus. Aliquam eu tempus nibh, vel blandit orci.
            Curabitur tellus risus, porttitor eget finibus et,
            rhoncus non lorem. Nunc velit nisl, elementum a erat et, imperdiet accumsan nisi.</p>
          <p className='no'>No reviews yet<Button variant="outline-dark" style={{ marginLeft: "77%" }}>Write a review</Button></p>
        </div>
        <div className='mid'>
          <h2>You may also like</h2>
        </div>
        <div>
          <section className='container p-0'>
            <div className='row'>
              {/* {data.cardData.map((item, index) => { */}
              {slice.map((item, index) => {
                const sizes = item.size.map((size, index) => {
                  return (
                    <div key={index}>
                      <p><Button variant="outline-secondary mx-1" onClick={() => changeImage(item.id, size)}>{size}</Button>{' '}</p>
                    </div>
                  )
                });

                return (
                  <div className='col' key={index + 30}>
                    <div className={`'card' ${item.id}`}>
                      <span className='click'>
                        <div className='img-container'>
                          <img src={item.img} className='card-img' />
                        </div>
                        <div className='d-flex'>
                          <div className="heart">
                            <Icon icon={ic_favorite_border} size={20} style={{ display: 'flex', justifyContent: 'center', paddingTop: '6px' }} />
                          </div>
                          <div className="eyes">
                            <Icon icon={eye} size={20} style={{ display: 'flex', justifyContent: 'center', paddingTop: '5px' }} />
                          </div>
                          <div className="compare">
                            <Icon icon={ic_sync_alt} size={20} style={{ display: 'flex', justifyContent: 'center', paddingTop: '5px' }} />
                          </div>
                        </div>
                        <div className="overlay">Add To Card</div>
                      </span>
                    </div>
                    <div style={{ marginTop: "25px" }}>
                      <h6>{item.title}</h6>
                      <p>{item.desc}</p>
                      <div className='d-flex'>
                        {sizes}
                      </div>
                    </div>
                    <br />
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
