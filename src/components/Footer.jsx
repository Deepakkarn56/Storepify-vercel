import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/LOGO.webp";
import Accordion from "react-bootstrap/Accordion";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="#FFFFFF"
      className="text-center text-lg-start text-muted"
    >
      <section>
        {/* <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div> */}

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol
              md="6"
              lg="6"
              xl="6"
              className="mx-auto mb-4"
              style={{ justifyContent: "left" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                <img src={logo} alt="logo" width="200px" />
              </h6>
              <div className="paragraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolorebbmagna
                  aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div
                className="border-radius"
                // style={{
                //   display: "flex",
                //   alignItems: "left",
                //   justifyContent: "left",
                // }}
              >
                <span
                  style={{
                    backgroundColor: "#f1f1f1",
                    borderRadius: "200%",
                    width: "40px",
                    height: "40px",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.166 0C11.6698 0 12.153 0.189642 12.5093 0.527208C12.8655 0.864773 13.0657 1.32261 13.0657 1.8V14.2C13.0657 14.6774 12.8655 15.1352 12.5093 15.4728C12.153 15.8104 11.6698 16 11.166 16H4.83396C4.33015 16 3.84697 15.8104 3.49073 15.4728C3.13448 15.1352 2.93434 14.6774 2.93434 14.2V1.8C2.93434 1.32261 3.13448 0.864773 3.49073 0.527208C3.84697 0.189642 4.33015 0 4.83396 0H11.166ZM11.166 1.2H4.83396C4.66602 1.2 4.50497 1.26321 4.38622 1.37574C4.26747 1.48826 4.20075 1.64087 4.20075 1.8V14.2C4.20075 14.5312 4.48443 14.8 4.83396 14.8H11.166C11.334 14.8 11.495 14.7368 11.6138 14.6243C11.7325 14.5117 11.7992 14.3591 11.7992 14.2V1.8C11.7992 1.64087 11.7325 1.48826 11.6138 1.37574C11.495 1.26321 11.334 1.2 11.166 1.2ZM9.0545 12.4C9.22244 12.3998 9.38359 12.4628 9.50249 12.5752C9.6214 12.6875 9.68833 12.8401 9.68855 12.9992C9.68878 13.1583 9.62228 13.311 9.50369 13.4237C9.3851 13.5364 9.22413 13.5998 9.05619 13.6L6.9455 13.6032C6.77756 13.6034 6.61641 13.5404 6.49751 13.428C6.3786 13.3157 6.31167 13.1631 6.31145 13.004C6.31122 12.8449 6.37772 12.6922 6.49631 12.5795C6.6149 12.4668 6.77587 12.4034 6.94381 12.4032L9.0545 12.4ZM15.3047 4.904L15.3418 4.9768L15.834 6.1424C15.9718 6.46884 16.025 6.82181 15.9891 7.17174C15.9533 7.52166 15.8295 7.85835 15.628 8.1536L15.5352 8.2792L15.4085 8.4408C15.3122 8.56238 15.2464 8.70317 15.2161 8.85247C15.1858 9.00177 15.1919 9.15565 15.2338 9.3024L15.2726 9.412L15.764 10.5776C15.8228 10.7186 15.8231 10.8755 15.7648 11.0167C15.7066 11.158 15.594 11.2731 15.4498 11.3388C15.3056 11.4046 15.1405 11.4162 14.9876 11.3713C14.8348 11.3264 14.7055 11.2283 14.6259 11.0968L14.5887 11.0224L14.0965 9.8576C13.9588 9.53116 13.9056 9.17819 13.9414 8.82826C13.9773 8.47834 14.1011 8.14165 14.3025 7.8464L14.3954 7.7208L14.522 7.5592C14.6184 7.43762 14.6842 7.29683 14.7145 7.14753C14.7447 6.99823 14.7387 6.84435 14.6968 6.6976L14.658 6.588L14.1666 5.4232C14.1097 5.28895 14.1059 5.13972 14.1559 5.00302C14.2059 4.86631 14.3063 4.75133 14.4387 4.67925C14.5711 4.60718 14.7265 4.58286 14.8763 4.61078C15.0262 4.6387 15.1603 4.71698 15.254 4.8312L15.3047 4.9032V4.904ZM1.37412 4.904L1.41126 4.9768L1.90348 6.1424C2.04123 6.46884 2.09442 6.82181 2.05857 7.17174C2.02273 7.52166 1.89891 7.85835 1.69747 8.1536L1.6046 8.2792L1.47796 8.4408C1.38163 8.56238 1.31582 8.70317 1.28553 8.85247C1.25525 9.00177 1.26129 9.15565 1.3032 9.3024L1.34203 9.412L1.8334 10.5776C1.89225 10.7186 1.89256 10.8755 1.83427 11.0167C1.77599 11.158 1.66343 11.2731 1.51924 11.3388C1.37505 11.4046 1.20991 11.4162 1.05706 11.3713C0.904199 11.3264 0.774954 11.2283 0.695317 11.0968L0.658169 11.0224L0.165955 9.8576C0.0282009 9.53116 -0.024983 9.17819 0.0108593 8.82826C0.0467016 8.47834 0.170526 8.14165 0.371959 7.8464L0.464829 7.7208L0.591471 7.5592C0.687805 7.43762 0.753616 7.29683 0.7839 7.14753C0.814183 6.99823 0.808142 6.84435 0.766236 6.6976L0.727399 6.588L0.23603 5.4232C0.179801 5.28914 0.176428 5.14037 0.226531 5.00414C0.276633 4.86792 0.376856 4.75336 0.50884 4.68145C0.640823 4.60954 0.79573 4.5851 0.945183 4.6126C1.09464 4.6401 1.22863 4.71771 1.32261 4.8312L1.37412 4.9032V4.904Z"
                      fill="#919191"
                    ></path>
                  </svg>
                </span>
                &nbsp;
                <span style={{ marginTop: "6px" }}>
                  (+400) 2523 465 376 &nbsp;
                </span>
                &nbsp; &nbsp; &nbsp;
              </div>
              &nbsp;
              <div
                className="phone"
                // style={{
                //   display: "flex",
                //   alignItems: "left",
                //   justifyContent: "left",
                // }}
              >
                <span
                  style={{
                    backgroundColor: "#f1f1f1",
                    borderRadius: "200%",
                    width: "40px",
                    height: "40px",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <svg
                    fill="none"
                    height="12"
                    viewBox="0 0 14 12"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.4921 12C9.40138 12 9.31632 11.9857 9.23694 11.957C9.15755 11.9288 9.08384 11.8805 9.0158 11.8122L7.07655 9.86629C6.9518 9.74111 6.88943 9.58179 6.88943 9.38834C6.88943 9.19488 6.9518 9.03556 7.07655 8.91038C7.2013 8.78521 7.36006 8.72262 7.55286 8.72262C7.74565 8.72262 7.90441 8.78521 8.02916 8.91038L9.4921 10.3784L12.8603 6.99858C12.985 6.8734 13.1438 6.81081 13.3366 6.81081C13.5294 6.81081 13.6881 6.8734 13.8129 6.99858C13.9376 7.12375 14 7.28307 14 7.47653C14 7.66999 13.9376 7.8293 13.8129 7.95448L9.96841 11.8122C9.90036 11.8805 9.82665 11.9288 9.74727 11.957C9.66788 11.9857 9.58283 12 9.4921 12V12ZM1.36087 1.36558L6.80437 4.77952L12.2479 1.36558H1.36087ZM1.36087 10.9246C0.986634 10.9246 0.666375 10.791 0.400097 10.5238C0.133366 10.2562 0 9.93457 0 9.55903V1.36558C0 0.990043 0.133366 0.668677 0.400097 0.401479C0.666375 0.133826 0.986634 0 1.36087 0H12.2479C12.6221 0 12.9426 0.133826 13.2093 0.401479C13.4756 0.668677 13.6087 0.990043 13.6087 1.36558V4.3357L12.9283 5.01849L12.2479 5.70128V2.73115L7.1616 5.92319C7.1049 5.95733 7.04525 5.98282 6.98265 5.99966C6.9205 6.01696 6.86108 6.0256 6.80437 6.0256C6.74767 6.0256 6.68825 6.01696 6.6261 5.99966C6.5635 5.98282 6.50385 5.95733 6.44714 5.92319L1.36087 2.73115V9.55903H4.86513L6.226 10.9246H1.36087Z"
                      fill="#919191"
                    ></path>
                  </svg>
                </span>
                &nbsp;&nbsp;
                <span style={{ marginTop: "5px" }}>storepify@company.com</span>
              </div>
            </MDBCol>

            
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 clear">
              <h6
                className="text-uppercase  mb-4 font-jost"
                style={{ fontSize: "18px", color: "black" }}
              >
                Quick Links
              </h6>
              <div >
              < p className="list">My Account</p>
                <p className="list">Gift Card</p>
                <p className="list">Careers</p>
                <p className="list">Need Help</p>
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 clear">
              <h6
                className="text-uppercase  mb-4 font-jost"
                style={{ fontSize: "18px", color: "black" }}
              >
                Information
              </h6>
              <div style={{ lineHeight: "1.1rem" }}>
                <p className="list" >About us</p>
                <p className="list">Contact Us</p>
                <p className="list">Sitemap</p>
                <p className="list">Tracking Order</p>
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 font-jost clear">
              <h6
                className="text-uppercase fboldw- mb-4 font-jost"
                style={{ fontSize: "18px", color: "black" }}
              >
                Legal
              </h6>
              <div style={{ lineHeight: "1.1rem" }}>
                <p className="list">Privacy policy</p>
                <p className="list">Terms of service</p>
                <p className="list">Shipping</p>
                <p className="list" >Tracking Order</p>
              </div>
            </MDBCol>

          </MDBRow>
        
        <div className="drops">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header className="font-jost ">Quick Links</Accordion.Header>
              <Accordion.Body >
                <div style={{ lineHeight: "1.1rem", textAlign: 'left'}}>
                  < p>My Account</p>
                  <p>Gift Card</p>
                  <p>Careers</p>
                  <p>Need Help</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="2">
              <Accordion.Header className="font-jost">Information</Accordion.Header>
              <Accordion.Body>
                <div style={{ lineHeight: "1.1rem", textAlign: 'left' }}>
                  <p>About us</p>
                  <p>Contact Us</p>
                  <p>Sitemap</p>
                  <p>Tracking Order</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="3">
              <Accordion.Header className="font-jost">Legal</Accordion.Header>
              <Accordion.Body>
                <div style={{ lineHeight: "1.1rem", textAlign: 'left' }}>
                  <p>Privacy policy</p>
                  <p>Terms of service</p>
                  <p>Shipping</p>
                  <p>Tracking Order</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        </MDBContainer>

      </section>

      <div
        className="text-center ppad"
        style={{
          backgroundColor: "white",
          paddingBottom: "50px",
        }}
      >
        <div className="container">
          <div className="row center">
            <div
              className="col-lg-6 col-md-6 col-sm-12 copy-right "
              // style={{ textAlign: "left" }}
            >
              <span>© 2023 Copyright By Storepify</span>
            </div>
            <div
              className="col-lg-3 col-md-3 col-sm-12"
              style={{ marginTop: "15px" }}
            >
              <svg
                className="icon icon--full-color"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                aria-labelledby="pi-american_express"
              >
                <title id="pi-american_express">American Express</title>
                <g fill="none">
                  <path
                    fill="#000"
                    d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z"
                    opacity=".07"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z"
                  ></path>
                </g>
              </svg>
              &nbsp;&nbsp;
              <svg
                className="icon icon--full-color"
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="38"
                height="24"
                aria-labelledby="pi-diners_club"
              >
                <title id="pi-diners_club">Diners Club</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  fill="#fff"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                ></path>
                <path
                  d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z"
                  fill="#3086C8"
                ></path>
              </svg>
              &nbsp;&nbsp;
              <svg
                className="icon icon--full-color"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                role="img"
                aria-labelledby="pi-discover"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="pi-discover">Discover</title>
                <path
                  fill="#000"
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                  fill="#fff"
                ></path>
                <path
                  d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z"
                  fill="#231F20"
                ></path>
                <path
                  d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                  fill="url(#pi-paint0_linear)"
                ></path>
                <path
                  opacity=".65"
                  d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                  fill="url(#pi-paint1_linear)"
                ></path>
                <path
                  d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z"
                  fill="#231F20"
                ></path>
                <path
                  d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z"
                  fill="#231F20"
                ></path>
                <path
                  d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z"
                  fill="#F48120"
                ></path>
                <defs>
                  <linearGradient
                    id="pi-paint0_linear"
                    x1="21.657"
                    y1="12.275"
                    x2="19.632"
                    y2="9.104"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F89F20"></stop>
                    <stop offset=".25" stopColor="#F79A20"></stop>
                    <stop offset=".533" stopColor="#F68D20"></stop>
                    <stop offset=".62" stopColor="#F58720"></stop>
                    <stop offset=".723" stopColor="#F48120"></stop>
                    <stop offset="1" stopColor="#F37521"></stop>
                  </linearGradient>
                  <linearGradient
                    id="pi-paint1_linear"
                    x1="21.338"
                    y1="12.232"
                    x2="18.378"
                    y2="6.446"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F58720"></stop>
                    <stop offset=".359" stopColor="#E16F27"></stop>
                    <stop offset=".703" stopColor="#D4602C"></stop>
                    <stop offset=".982" stopColor="#D05B2E"></stop>
                  </linearGradient>
                </defs>
              </svg>
              &nbsp;&nbsp;
              <svg
                className="icon icon--full-color"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                aria-labelledby="pi-shopify_pay"
              >
                <title id="pi-shopify_pay">Shop Pay</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  fill="#000"
                ></path>
                <path
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                  fill="#5A31F4"
                ></path>
                <path
                  d="M21.382 9.713c0 1.668-1.177 2.858-2.821 2.858h-1.549a.133.133 0 00-.12.08.127.127 0 00-.01.049v2.192a.129.129 0 01-.13.129h-1.084a.13.13 0 01-.13-.13V6.986a.127.127 0 01.08-.12.129.129 0 01.05-.01h2.9c1.637 0 2.814 1.19 2.814 2.858v-.001zm-1.352 0c0-.958-.658-1.658-1.55-1.658h-1.468a.13.13 0 00-.13.13v3.05a.127.127 0 00.038.092.129.129 0 00.092.038h1.468c.892.005 1.55-.695 1.55-1.652zm1.674 3.791a1.527 1.527 0 01.647-1.317c.423-.316 1.084-.48 2.055-.514l1.033-.036v-.303c0-.607-.41-.863-1.068-.863-.658 0-1.075.231-1.17.61a.127.127 0 01-.125.09h-1.022a.13.13 0 01-.126-.092.125.125 0 01-.004-.055c.152-.898.904-1.58 2.494-1.58 1.692 0 2.303.783 2.303 2.276v3.172a.13.13 0 01-.132.129h-1.03a.13.13 0 01-.13-.13v-.236a.096.096 0 00-.061-.091.1.1 0 00-.107.022c-.31.334-.808.575-1.607.575-1.175 0-1.95-.607-1.95-1.657zm3.735-.687v-.246l-1.339.07c-.705.036-1.115.326-1.115.816 0 .444.376.69 1.034.69.893 0 1.42-.48 1.42-1.33zm2.316 4.6v-.919a.13.13 0 01.049-.1.132.132 0 01.108-.027c.158.029.318.044.479.044a1.229 1.229 0 001.245-.876l.067-.211a.133.133 0 000-.088l-2.145-5.471a.13.13 0 01.06-.165.13.13 0 01.062-.015h1.04a.132.132 0 01.123.085l1.456 3.859a.131.131 0 00.125.088.133.133 0 00.125-.088l1.265-3.848a.13.13 0 01.126-.09h1.076a.134.134 0 01.132.116.134.134 0 01-.008.063l-2.295 6.076c-.528 1.413-1.433 1.773-2.43 1.773a1.959 1.959 0 01-.561-.066.132.132 0 01-.1-.14h.001zM8.57 6.4a5.363 5.363 0 00-3.683 1.427.231.231 0 00-.029.31l.618.839a.236.236 0 00.362.028 3.823 3.823 0 012.738-1.11c2.12 0 3.227 1.584 3.227 3.15 0 1.7-1.163 2.898-2.835 2.921-1.292 0-2.266-.85-2.266-1.974a1.908 1.908 0 01.713-1.48.231.231 0 00.033-.324l-.65-.815a.236.236 0 00-.339-.034 3.43 3.43 0 00-.942 1.183 3.39 3.39 0 00-.337 1.47c0 1.935 1.655 3.452 3.775 3.464h.03c2.517-.032 4.337-1.884 4.337-4.415 0-2.247-1.667-4.64-4.752-4.64z"
                  fill="#fff"
                ></path>
              </svg>
            </div>

            <div
              className="col-lg-3 col-md-3 col-sm-12 bottom"
              // style={{ marginTop: "15px",textAlign:"right" }}
            >
              <i className="bi bi-instagram"></i>&nbsp; &nbsp;
              <i className="bi bi-pinterest"></i>&nbsp;&nbsp;
              <i className="bi bi-twitter"></i>&nbsp;&nbsp;
              <i className="bi bi-facebook"></i>&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    </MDBFooter>
  );
}
