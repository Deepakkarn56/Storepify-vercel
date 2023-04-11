import React, {useState} from "react";
import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from 'react-bootstrap/Form';
import "./Cart.css";
import { Link } from "react-router-dom";


function Cart() {
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

  
  return (
    <div>
      <section className="mb-3">
        <div className="bread-wrap">
          <Container style={{ display: "block" }}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Your Shopping Cart
              </Breadcrumb.Item>
            </Breadcrumb>
          </Container>
        </div>
      </section>
      <div>
        <Container>
          <div className="justify">
            <h1>My Cart</h1>
            <a href="#f" className="btn_continue btn__underline">
              Continue Shopping
            </a>
          </div>
          <form>
            <div className="item-start">
              <div className="cart-item">
                <div className="cart_items">
                  <div className="cart-contents">
                    <div className="cart-table">
                      <div className="table-head">
                        <div className="table_image"></div>
                        <div className="table_product">Product</div>
                        <div className="table_price">Price</div>
                        <div className="table_quantity">Quantity</div>
                        <div className="table_total">Total</div>
                      </div>
                      <div className="table-body">
                        <div className="table-items">
                          <div className="table-cart_items">
                            <div className="table_image">
                              <div className="table_remove">
                                <a href="#delete" className="remove">
                                  <svg fill="none" height="24" viewBox="0 0 24 28" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 10H10V22H8V10ZM14 10H16V22H14V10Z" fill="black"></path>
                                    <path d="M0 4V6H2V26C2 26.5304 2.21071 27.0391 2.58579 27.4142C2.96086 27.7893 3.46957 28 4 28H20C20.5304 28 21.0391 27.7893 21.4142 27.4142C21.7893 27.0391 22 26.5304 22 26V6H24V4H0ZM4 26V6H20V26H4ZM8 0H16V2H8V0Z" fill="black"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="product-image">
                                <div className="item-image">
                                <img src="//cdn.shopify.com/s/files/1/0624/8638/0738/products/1_676e2092-0628-4127-b453-63e286f3179b.png?v=1663639756&amp;width=300" className="cart-item__image" alt="" loading="lazy" width="90" height="110" />
                                </div>
                              </div>
                            </div>
                            <div className="table_product">
                              <div className="image-name">
                                <a href="#product" style={{color:'black', textDecoration:'none'}}>Sleeve Maxi Dress</a>
                              </div>
                            </div>
                            <div className="table_price">
                              <div className="image-price">
                                <span style={{fontWeight:'400'}}>$50.00</span>
                              </div>
                            </div>
                            <div className="table_quantity">
                              <div className="input-group" style={{background:'#f6f6f6'}}>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={decNum}>-</button>
                                </div>
                                <input type="text" className="in-dec" value={num} onChange={handleChange}/>
                                <div className="input-group-prepend">
                                  <button className="btn-primary btn bt" type="button" onClick={incNum}>+</button>
                               </div>
                            </div>
                            </div>
                            <div className="table_total">
                              <div className="total-price">
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gift-wrap">
                  <div className="tool-wrap">
                      <svg viewBox="0 0 24 24" width="40" height="40" stroke="#ec0101" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="tca-gift-svg">
                      <polyline points="20 12 20 22 4 22 4 12"></polyline>
                      <rect x="2" y="7" width="20" height="5"></rect>
                      <line x1="12" y1="22" x2="12" y2="7"></line>
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                      </svg>
                      <span className="gift-wrap_text">Do you want a gift wrap?</span>
                    <div className="button-wrap wrap-buton">
                      <div className="button-wrap" style={{width:'100%'}} >
                        <button type="button" style={{width:'100%'}} className="buton second-buton"><span>Add A Gift Wrap</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-right">
                <h5 className="right-title">ORDER SUMMARY</h5>
                <div className="cart_right">
                  <div className="shipping-estimate">
                    <h6 className="mb">Get shipping estimates</h6>
                    <Form.Select className="FS" aria-label="Default select example">
                      <option value="United States" data-provinces="[]">United States</option>
                      <option value="---" data-provinces="[]">---</option>
                      <option value="Afghanistan" data-provinces="[]">Afghanistan</option>
                      <option value="Aland Islands" data-provinces="[]">Åland Islands</option>
                      <option value="Albania" data-provinces="[]">Albania</option>
                      <option value="Algeria" data-provinces="[]">Algeria</option>
                      <option value="Andorra" data-provinces="[]">Andorra</option>
                      <option value="Angola" data-provinces="[]">Angola</option>
                      <option value="Anguilla" data-provinces="[]">Anguilla</option>
                      <option value="Antigua And Barbuda" data-provinces="[]">Antigua &amp; Barbuda</option>
                      <option value="Argentina" data-provinces="[]">Argentina</option>
                      <option value="Armenia" data-provinces="[]">Armenia</option>
                      <option value="Aruba" data-provinces="[]">Aruba</option>
                      <option value="Ascension Island" data-provinces="[]">Ascension Island</option>
                      <option value="Australia" data-provinces="[]">Australia</option>
                      <option value="Austria" data-provinces="[]">Austria</option>
                      <option value="Azerbaijan" data-provinces="[]">Azerbaijan</option>
                      <option value="Bahamas" data-provinces="[]">Bahamas</option>
                      <option value="Bahrain" data-provinces="[]">Bahrain</option>
                      <option value="Bangladesh" data-provinces="[]">Bangladesh</option>
                      <option value="Barbados" data-provinces="[]">Barbados</option>
                      <option value="Belarus" data-provinces="[]">Belarus</option>
                      <option value="Belgium" data-provinces="[]">Belgium</option>
                      <option value="Belize" data-provinces="[]">Belize</option>
                      <option value="Benin" data-provinces="[]">Benin</option>
                      <option value="Bermuda" data-provinces="[]">Bermuda</option>
                      <option value="Bhutan" data-provinces="[]">Bhutan</option>
                      <option value="Bolivia" data-provinces="[]">Bolivia</option>
                      <option value="Bosnia And Herzegovina" data-provinces="[]">Bosnia &amp; Herzegovina</option>
                      <option value="Botswana" data-provinces="[]">Botswana</option>
                      <option value="Brazil" data-provinces="[]">Brazil</option>
                      <option value="British Indian Ocean Territory" data-provinces="[]">British Indian Ocean Territory</option>
                      <option value="Virgin Islands, British" data-provinces="[]">British Virgin Islands</option>
                      <option value="Brunei" data-provinces="[]">Brunei</option>
                      <option value="Bulgaria" data-provinces="[]">Bulgaria</option>
                      <option value="Burkina Faso" data-provinces="[]">Burkina Faso</option>
                      <option value="Burundi" data-provinces="[]">Burundi</option>
                      <option value="Cambodia" data-provinces="[]">Cambodia</option>
                      <option value="Republic of Cameroon" data-provinces="[]">Cameroon</option>
                      <option value="Canada" data-provinces="[]">Canada</option>
                      <option value="Cape Verde" data-provinces="[]">Cape Verde</option>
                      <option value="Caribbean Netherlands" data-provinces="[]">Caribbean Netherlands</option>
                      <option value="Cayman Islands" data-provinces="[]">Cayman Islands</option>
                      <option value="Central African Republic" data-provinces="[]">Central African Republic</option>
                      <option value="Chad" data-provinces="[]">Chad</option>
                      <option value="Chile" data-provinces="[]">Chile</option>
                      <option value="China" data-provinces="[]">China</option>
                      <option value="Christmas Island" data-provinces="[]">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands" data-provinces="[]">Cocos (Keeling) Islands</option>
                      <option value="Colombia" data-provinces="[]">Colombia</option>
                      <option value="Comoros" data-provinces="[]">Comoros</option>
                      <option value="Congo" data-provinces="[]">Congo - Brazzaville</option>
                      <option value="Congo, The Democratic Republic Of The" data-provinces="[]">Congo - Kinshasa</option>
                      <option value="Cook Islands" data-provinces="[]">Cook Islands</option>
                      <option value="Costa Rica" data-provinces="[]">Costa Rica</option>
                      <option value="Croatia" data-provinces="[]">Croatia</option>
                      <option value="Curaçao" data-provinces="[]">Curaçao</option>
                      <option value="Cyprus" data-provinces="[]">Cyprus</option>
                      <option value="Czech Republic" data-provinces="[]">Czechia</option>
                      <option value="Côte d'Ivoire" data-provinces="[]">Côte d’Ivoire</option>
                      <option value="Denmark" data-provinces="[]">Denmark</option>
                      <option value="Djibouti" data-provinces="[]">Djibouti</option>
                      <option value="Dominica" data-provinces="[]">Dominica</option>
                      <option value="Dominican Republic" data-provinces="[]">Dominican Republic</option>
                      <option value="Ecuador" data-provinces="[]">Ecuador</option>
                      <option value="Egypt" data-provinces="[]">Egypt</option>
                      <option value="El Salvador" data-provinces="[]">El Salvador</option>
                      <option value="Equatorial Guinea" data-provinces="[]">Equatorial Guinea</option>
                      <option value="Eritrea" data-provinces="[]">Eritrea</option>
                      <option value="Estonia" data-provinces="[]">Estonia</option>
                      <option value="Eswatini" data-provinces="[]">Eswatini</option>
                      <option value="Ethiopia" data-provinces="[]">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)" data-provinces="[]">Falkland Islands</option>
                      <option value="Faroe Islands" data-provinces="[]">Faroe Islands</option>
                      <option value="Fiji" data-provinces="[]">Fiji</option>
                      <option value="Finland" data-provinces="[]">Finland</option>
                      <option value="France" data-provinces="[]">France</option>
                      <option value="French Guiana" data-provinces="[]">French Guiana</option>
                      <option value="French Polynesia" data-provinces="[]">French Polynesia</option>
                      <option value="French Southern Territories" data-provinces="[]">French Southern Territories</option>
                      <option value="Gabon" data-provinces="[]">Gabon</option>
                      <option value="Gambia" data-provinces="[]">Gambia</option>
                      <option value="Georgia" data-provinces="[]">Georgia</option>
                      <option value="Germany" data-provinces="[]">Germany</option>
                      <option value="Ghana" data-provinces="[]">Ghana</option>
                      <option value="Gibraltar" data-provinces="[]">Gibraltar</option>
                      <option value="Greece" data-provinces="[]">Greece</option>
                      <option value="Greenland" data-provinces="[]">Greenland</option>
                      <option value="Grenada" data-provinces="[]">Grenada</option>
                      <option value="Guadeloupe" data-provinces="[]">Guadeloupe</option>
                      <option value="Guatemala" data-provinces="[]">Guatemala</option>
                      <option value="Guernsey" data-provinces="[]">Guernsey</option>
                      <option value="Guinea" data-provinces="[]">Guinea</option>
                      <option value="Guinea Bissau" data-provinces="[]">Guinea-Bissau</option>
                      <option value="Guyana" data-provinces="[]">Guyana</option>
                      <option value="Haiti" data-provinces="[]">Haiti</option>
                      <option value="Honduras" data-provinces="[]">Honduras</option>
                      <option value="Hong Kong" data-provinces="[]">Hong Kong SAR</option>
                      <option value="Hungary" data-provinces="[]">Hungary</option>
                      <option value="Iceland" data-provinces="[]">Iceland</option>
                      <option value="India" data-provinces="[]">India</option>
                      <option value="Indonesia" data-provinces="[]">Indonesia</option>
                      <option value="Iraq" data-provinces="[]">Iraq</option>
                      <option value="Ireland" data-provinces="[]">Ireland</option>
                      <option value="Isle Of Man" data-provinces="[]">Isle of Man</option>
                      <option value="Israel" data-provinces="[]">Israel</option>
                      <option value="Italy" data-provinces="[]">Italy</option>
                      <option value="Jamaica" data-provinces="[]">Jamaica</option>
                      <option value="Japan" data-provinces="[]">Japan</option>
                      <option value="Jersey" data-provinces="[]">Jersey</option>
                      <option value="Jordan" data-provinces="[]">Jordan</option>
                      <option value="Kazakhstan" data-provinces="[]">Kazakhstan</option>
                      <option value="Kenya" data-provinces="[]">Kenya</option>
                      <option value="Kiribati" data-provinces="[]">Kiribati</option>
                      <option value="Kosovo" data-provinces="[]">Kosovo</option>
                      <option value="Kuwait" data-provinces="[]">Kuwait</option>
                      <option value="Kyrgyzstan" data-provinces="[]">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic" data-provinces="[]">Laos</option>
                      <option value="Latvia" data-provinces="[]">Latvia</option>
                      <option value="Lebanon" data-provinces="[]">Lebanon</option>
                      <option value="Lesotho" data-provinces="[]">Lesotho</option>
                      <option value="Liberia" data-provinces="[]">Liberia</option>
                      <option value="Libyan Arab Jamahiriya" data-provinces="[]">Libya</option>
                      <option value="Liechtenstein" data-provinces="[]">Liechtenstein</option>
                      <option value="Lithuania" data-provinces="[]">Lithuania</option>
                      <option value="Luxembourg" data-provinces="[]">Luxembourg</option>
                      <option value="Macao" data-provinces="[]">Macao SAR</option>
                      <option value="Madagascar" data-provinces="[]">Madagascar</option>
                      <option value="Malawi" data-provinces="[]">Malawi</option>
                      <option value="Malaysia" data-provinces="[]">Malaysia</option>
                      <option value="Maldives" data-provinces="[]">Maldives</option>
                      <option value="Mali" data-provinces="[]">Mali</option>
                      <option value="Malta" data-provinces="[]">Malta</option>
                      <option value="Martinique" data-provinces="[]">Martinique</option>
                      <option value="Mauritania" data-provinces="[]">Mauritania</option>
                      <option value="Mauritius" data-provinces="[]">Mauritius</option>
                      <option value="Mayotte" data-provinces="[]">Mayotte</option>
                      <option value="Mexico" data-provinces="[]">Mexico</option>
                      <option value="Moldova, Republic of" data-provinces="[]">Moldova</option>
                      <option value="Monaco" data-provinces="[]">Monaco</option>
                      <option value="Mongolia" data-provinces="[]">Mongolia</option>
                      <option value="Montenegro" data-provinces="[]">Montenegro</option>
                      <option value="Montserrat" data-provinces="[]">Montserrat</option>
                      <option value="Morocco" data-provinces="[]">Morocco</option>
                      <option value="Mozambique" data-provinces="[]">Mozambique</option>
                      <option value="Myanmar" data-provinces="[]">Myanmar (Burma)</option>
                      <option value="Namibia" data-provinces="[]">Namibia</option>
                      <option value="Nauru" data-provinces="[]">Nauru</option>
                      <option value="Nepal" data-provinces="[]">Nepal</option>
                      <option value="Netherlands" data-provinces="[]">Netherlands</option>
                      <option value="New Caledonia" data-provinces="[]">New Caledonia</option>
                      <option value="New Zealand" data-provinces="[]">New Zealand</option>
                      <option value="Nicaragua" data-provinces="[]">Nicaragua</option>
                      <option value="Niger" data-provinces="[]">Niger</option>
                      <option value="Nigeria" data-provinces="[]">Nigeria</option>
                      <option value="Niue" data-provinces="[]">Niue</option>
                      <option value="Norfolk Island" data-provinces="[]">Norfolk Island</option>
                      <option value="North Macedonia" data-provinces="[]">North Macedonia</option>
                      <option value="Norway" data-provinces="[]">Norway</option>
                      <option value="Oman" data-provinces="[]">Oman</option>
                      <option value="Pakistan" data-provinces="[]">Pakistan</option>
                      <option value="Palestinian Territory, Occupied" data-provinces="[]">Palestinian Territories</option>
                      <option value="Panama" data-provinces="[]">Panama</option>
                      <option value="Papua New Guinea" data-provinces="[]">Papua New Guinea</option>
                      <option value="Paraguay" data-provinces="[]">Paraguay</option>
                      <option value="Peru" data-provinces="[]">Peru</option>
                      <option value="Philippines" data-provinces="[]">Philippines</option>
                      <option value="Pitcairn" data-provinces="[]">Pitcairn Islands</option>
                      <option value="Poland" data-provinces="[]">Poland</option>
                      <option value="Portugal" data-provinces="[]">Portugal</option>
                      <option value="Qatar" data-provinces="[]">Qatar</option>
                      <option value="Reunion" data-provinces="[]">Réunion</option>
                      <option value="Romania" data-provinces="[]">Romania</option>
                      <option value="Russia" data-provinces="[]">Russia</option>
                      <option value="Rwanda" data-provinces="[]">Rwanda</option>
                      <option value="Samoa" data-provinces="[]">Samoa</option>
                      <option value="San Marino" data-provinces="[]">San Marino</option>
                      <option value="Sao Tome And Principe" data-provinces="[]">São Tomé &amp; Príncipe</option>
                      <option value="Saudi Arabia" data-provinces="[]">Saudi Arabia</option>
                      <option value="Senegal" data-provinces="[]">Senegal</option>
                      <option value="Serbia" data-provinces="[]">Serbia</option>
                      <option value="Seychelles" data-provinces="[]">Seychelles</option>
                      <option value="Sierra Leone" data-provinces="[]">Sierra Leone</option>
                      <option value="Singapore" data-provinces="[]">Singapore</option>
                      <option value="Sint Maarten" data-provinces="[]">Sint Maarten</option>
                      <option value="Slovakia" data-provinces="[]">Slovakia</option>
                      <option value="Slovenia" data-provinces="[]">Slovenia</option>
                      <option value="Solomon Islands" data-provinces="[]">Solomon Islands</option>
                      <option value="Somalia" data-provinces="[]">Somalia</option>
                      <option value="South Africa" data-provinces="[]">South Africa</option>
                      <option value="South Georgia And The South Sandwich Islands" data-provinces="[]">South Georgia &amp; South Sandwich Islands</option>
                      <option value="South Korea" data-provinces="[]">South Korea</option>
                      <option value="South Sudan" data-provinces="[]">South Sudan</option>
                      <option value="Spain" data-provinces="[]">Spain</option>
                      <option value="Sri Lanka" data-provinces="[]">Sri Lanka</option>
                      <option value="Saint Barthélemy" data-provinces="[]">St. Barthélemy</option>
                      <option value="Saint Helena" data-provinces="[]">St. Helena</option>
                      <option value="Saint Kitts And Nevis" data-provinces="[]">St. Kitts &amp; Nevis</option>
                      <option value="Saint Lucia" data-provinces="[]">St. Lucia</option>
                      <option value="Saint Martin" data-provinces="[]">St. Martin</option>
                      <option value="Saint Pierre And Miquelon" data-provinces="[]">St. Pierre &amp; Miquelon</option>
                      <option value="St. Vincent" data-provinces="[]">St. Vincent &amp; Grenadines</option>
                      <option value="Sudan" data-provinces="[]">Sudan</option>
                      <option value="Suriname" data-provinces="[]">Suriname</option>
                      <option value="Svalbard And Jan Mayen" data-provinces="[]">Svalbard &amp; Jan Mayen</option>
                      <option value="Sweden" data-provinces="[]">Sweden</option>
                      <option value="Switzerland" data-provinces="[]">Switzerland</option>
                      <option value="Taiwan" data-provinces="[]">Taiwan</option>
                      <option value="Tajikistan" data-provinces="[]">Tajikistan</option>
                      <option value="Tanzania, United Republic Of" data-provinces="[]">Tanzania</option>
                      <option value="Thailand" data-provinces="[]">Thailand</option>
                      <option value="Timor Leste" data-provinces="[]">Timor-Leste</option>
                      <option value="Togo" data-provinces="[]">Togo</option>
                      <option value="Tokelau" data-provinces="[]">Tokelau</option>
                      <option value="Tonga" data-provinces="[]">Tonga</option>
                      <option value="Trinidad and Tobago" data-provinces="[]">Trinidad &amp; Tobago</option>
                      <option value="Tristan da Cunha" data-provinces="[]">Tristan da Cunha</option>
                      <option value="Tunisia" data-provinces="[]">Tunisia</option>
                      <option value="Turkey" data-provinces="[]">Turkey</option>
                      <option value="Turkmenistan" data-provinces="[]">Turkmenistan</option>
                      <option value="Turks and Caicos Islands" data-provinces="[]">Turks &amp; Caicos Islands</option>
                      <option value="Tuvalu" data-provinces="[]">Tuvalu</option>
                      <option value="United States Minor Outlying Islands" data-provinces="[]">U.S. Outlying Islands</option>
                      <option value="Uganda" data-provinces="[]">Uganda</option>
                      <option value="Ukraine" data-provinces="[]">Ukraine</option>
                      <option value="United Arab Emirates" data-provinces="[]">United Arab Emirates</option>
                      <option value="United Kingdom" data-provinces="[]">United Kingdom</option>
                      <option value="United States" data-provinces="[]">United States</option>
                      <option value="Uruguay" data-provinces="[]">Uruguay</option>
                      <option value="Uzbekistan" data-provinces="[]">Uzbekistan</option>
                      <option value="Vanuatu" data-provinces="[]">Vanuatu</option>
                      <option value="Holy See (Vatican City State)" data-provinces="[]">Vatican City</option>
                      <option value="Venezuela" data-provinces="[]">Venezuela</option>
                      <option value="Vietnam" data-provinces="[]">Vietnam</option>
                      <option value="Wallis And Futuna" data-provinces="[]">Wallis &amp; Futuna</option>
                      <option value="Western Sahara" data-provinces="[]">Western Sahara</option>
                      <option value="Yemen" data-provinces="[]">Yemen</option>
                      <option value="Zambia" data-provinces="[]">Zambia</option>
                      <option value="Zimbabwe" data-provinces="[]">Zimbabwe</option>
                    </Form.Select>
                    <div className="f_z-s mbb">
                      <div className="F-s">
                      <Form.Select className="f_s" aria-label="Default select example">
                        <option></option>
                        <option value="1"></option>
                      </Form.Select>
                      </div>
                      <div className="F-z">
                      <Form.Control type="text"  className="F_z" aria-describedby="HelpBlock"  placeholder="Zip code" />
                      </div>
                    </div>
                    <div className="mbb">
                      <button className="buton second-buton" >Calculate Shipping</button>
                    </div>
                    <h6 className="mb">Order special instructions</h6>
                    <Form.Control className="f-c mbb" as="textarea" placeholder="Order special instructions" rows={3} />
                  </div>
                  <div className="mbb" style={{borderBottom:'1px solid #eee'}}>
                    <h6 className="mbb">Discount Code</h6>
                    <Form.Control type="text" className="F_s mbb" placeholder="Enter discount code" />
                    <button className="buton butoon mbb second-buton" >Apply</button>
                  </div>
                  <div className="mbb" style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #eee'}}>
                    <h6 className="mbb" style={{fontWeight:'600'}}>Sub Total</h6>
                    <span className="mbb">$50.00</span>
                  </div>
                  <div className="mbb" style={{borderBottom:'1px solid #eee'}}>
                  <h6  className="mbb">Taxes and shipping calculated at checkout</h6>
                  </div>
                  <div style={{textAlign: 'center'}}>
                    <Link to='/Information' style={{ textDecoration:'none', color:'white'}} className="butan">Check Out</Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default Cart;
