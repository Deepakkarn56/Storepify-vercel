import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


export default function Dashboard() {

    // var slider = document.getElementById("myRange");
    // var output = document.getElementById("demo");
    // output.innerHTML = slider.value;

    // slider.oninput = function () {
    //     output.innerHTML = this.value;
    // }

    const [data, setData] = useState(0)

    return (
        <div style={{marginLeft : "-20px"}}>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <b>Collection</b>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body u" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>
                                <li className='underh'>Best Seller</li><br/>
                                <li className='underh'>Trending</li><br/>
                                <li className='underh'>Men</li><br/>
                                <li className='underh'>New Arrivals</li><br/>
                                <li className='underh'>Women</li><br/>
                            </span>
                            <span>
                                <li style={{ background: "rgb(240,240,242)", borderRadius: "50%", height: "26px", width: "26px" }}>&nbsp;31&nbsp;</li><br/>
                                <li style={{ background: "rgb(240,240,242)", borderRadius: "50%", height: "26px", width: "26px" }}>&nbsp;31&nbsp;</li><br/>
                                <li style={{ background: "rgb(240,240,242)", borderRadius: "50%", height: "26px", width: "26px" }}>&nbsp;30&nbsp;</li><br/>
                                <li style={{ background: "rgb(240,240,242)", borderRadius: "50%", height: "26px", width: "26px" }}>&nbsp;31&nbsp;</li><br/>
                                <li style={{ background: "rgb(240,240,242)", borderRadius: "50%", height: "26px", width: "26px" }}>&nbsp;20&nbsp;</li>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <b>Availability</b>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body u" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>
                                <li className='underh'>In stock</li><br/>
                                <li className='underh'>Out of stock</li><br/>
                            </span>

                            <span>
                                <li style={{ background: "rgb(240,240,242)", borderRadius: "50%", height: "26px", width: "26px" }}>&nbsp;31&nbsp;</li><br/>
                                <li style={{ background: "rgb(240,240,242)", borderRadius: "50%", height: "26px", width: "26px" }}>&nbsp;&nbsp;4&nbsp;</li>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <b>Price</b>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            <div className="slidecontainer">
                                {/* <input type="range" min="1" max="100" value="50" className="slider" id="myRange" /> */}
                                {/* <p>$ <span id="demo"></span></p> */}
                                <input type="range" min='0' max='456'  className="form-range" onChange={(e) => setData(e.target.value)} />
                                <h4>${data}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                            <b>Brand</b>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                        <div className="accordion-body">
                            <span className='underh'>Adidas</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='underh'>Burberry</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='underh'>Nike</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='underh'>Zara</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            <b>Color</b>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                        <div className="accordion-body">
                            <Button variant="primary" style={{ borderRadius: "100%", height: "25px" }} ></Button>&nbsp;
                            <Button variant="success" style={{ borderRadius: "100%", height: "25px" }} ></Button>&nbsp;
                            <Button variant="danger" style={{ borderRadius: "100%", height: "25px" }} ></Button>&nbsp;
                            <Button variant="info" style={{ borderRadius: "100%", height: "25px" }} ></Button>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                            <b>Size</b>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                        <div className="accordion-body u" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>
                                <li className='underh'>S</li><br/>
                                <li className='underh'>M</li><br/>
                                <li className='underh'>L</li><br/>
                                <li className='underh'>XL</li><br/>
                            </span>

                            <span>
                                <li style={{ background: "rgb(240,240,242)", borderRadius: "50%", height: "26px", width: "26px" }}>&nbsp;25&nbsp;</li><br/>
                                <li style={{ background: "rgb(240,240,242)", borderRadius: "50%", height: "26px", width: "26px" }}>&nbsp;25&nbsp;</li><br/>
                                <li style={{ background: "rgb(240,240,242)", borderRadius: "50%", height: "26px", width: "26px" }}>&nbsp;18&nbsp;</li><br/>
                                <li style={{ background: "rgb(240,240,242)", borderRadius: "50%", height: "26px", width: "26px" }}>&nbsp;&nbsp;6&nbsp;</li>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                            <b>Recent Viewed</b>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                        <div className="accordion-body">
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <img src='https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_676e2092-0628-4127-b453-63e286f3179b.png?v=1663639756&width=533' width="100%" />
                                </div>
                                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'>
                                    <h5 className='dh'>Sleeve Maxi Dress</h5>
                                    <h5>$50&nbsp;&nbsp;<span><strike>$76</strike></span></h5>
                                </div>
                            </div><br />

                            <div className='row'>
                                <div className='col-lg-4 col-md=4 col-sm-4 col-xs-4'>
                                    <img src='https://cdn.shopify.com/s/files/1/0624/8638/0738/products/2_5368d89c-cb3a-4a9c-b03d-f1d7de2f870a.png?v=1677221288&width=533' width="100%" />
                                </div>
                                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'>
                                    <h5 className='dh'>BDG Ripstop Filled Shirt Jacket</h5>
                                    <h5>$34</h5>
                                </div>
                            </div><br />

                            <div className='row'>
                                <div className='col-lg-4 col-md=4 col-sm-4 col-xs-4'>
                                    <img src='https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_a946f34d-d20e-468e-847a-0db6ec.png?v=1668159730&width=533' width="100%" />
                                </div>
                                <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8'>
                                    <h5 className='dh'>Tie Waist Crop Jumpsuit</h5>
                                    <h5>$456</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
