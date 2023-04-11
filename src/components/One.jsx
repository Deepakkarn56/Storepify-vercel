import React, { useState } from 'react'
import data from './data'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Button } from 'react-bootstrap';
import $ from 'jquery';


export default function Third() {

    const [noOfElement, setnoOfElement] = useState(4);
    const loadMore = () => {
        setnoOfElement((pre) => pre + 4);
    }


    const slice = data.cardData.slice(0, noOfElement);

    const changeImage = (id, size) => {
        const currentData =  data.cardData.filter(el => el.id === id)
        console.log(id, size, currentData,  currentData[0].linkImg);
    //    console.log("ddd", currentData)  
        
        // $(`${id} img`).attr('src', {img22});
        if (size == 'S') {
            $(`.${id} img`).attr('src', currentData[0].linkImg.S);
        } else if (size == 'M') {
            $(`.${id} img`).attr('src',  currentData[0].linkImg.M);

        }  else if (size == 'L') {
            $(`.${id} img`).attr('src',  currentData[0].linkImg.L);

        }  else if (size == 'XL') {
            $(`.${id} img`).attr('src',  currentData[0].linkImg.XL);

        } 
    }

    // console.log("ddd", data.totalImage === noOfElement , data.totalImage , noOfElement )
    return (
        <div style={{fontFamily : "Jost"}}>

            <section className='py-4 container'>
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
                            <div className='col-lg-12' key={index + 50}>
                                <div className='row'>
                                    <div className={`col-lg-6 col-md-6 col-sm-6 col-xs-6 ${item.id}`}>
                                        <img src={item.img} className='card-img' />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 mo'>
                                        <h5 className='dh'>{item.title}</h5>
                                        <p>{item.desc}</p>
                                        <div className='d-flex'>
                                            {sizes}
                                        </div>

                                        <div className='aha'>
                                            <button className='btn btn-dark'>Add to card</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <OverlayTrigger overlay={<Tooltip id="tooltip">Wishlist</Tooltip>}>
                                                <div className='oh'>
                                                    <center>
                                                        &nbsp;&nbsp;<i className="bi bi-heart" ></i>&nbsp;&nbsp;&nbsp;
                                                    </center>
                                                </div>
                                            </OverlayTrigger>
                                            <OverlayTrigger overlay={<Tooltip id="tooltip">Quick View</Tooltip>}>

                                                <div className='oh'>
                                                    <center>
                                                        &nbsp;&nbsp;<i className="bi bi-eye "></i>&nbsp;&nbsp;&nbsp;
                                                    </center>
                                                </div>
                                            </OverlayTrigger>
                                            <OverlayTrigger overlay={<Tooltip id="tooltip">Compare</Tooltip>}>

                                                <div className='oh'>
                                                    <center>
                                                        &nbsp;&nbsp;<i className="bi bi-arrow-left-right" />&nbsp;&nbsp;&nbsp;
                                                    </center>
                                                </div>
                                            </OverlayTrigger>

                                        </div>

                                    </div>

                                </div><br />
                            </div>

                        )
                    })}

                </div>
                {data.totalImage < noOfElement ? <></> :
                    <center>
                        <a>
                            <button className='' style={{ backgroundColor: "", border: "none" }} onClick={() => loadMore()}>
                                Load More
                            </button>
                        </a>
                    </center>}

            </section>

        </div>
    )
}



{/* <div className="row">
                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/8246588251_2_2_8_c6439845-0e1f-4115-98f0-1a3d267c6178.png?crop=center&height=1200&v=1668409823&width=900" width="100%" className="ab" />
                    </div>

                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <p style={{ fontSize: "16px" }}>Sweatshirt With Open Flower</p>
                        <p style={{ fontSize: "16px" }}>$225</p>
                        <button>Add to Cart</button>
                        <p><i className="bi bi-heart"></i></p>
                    </div>
                </div><br/>

                <div className="row">
                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>

                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/8590528800_2_1_8.png?crop=center&height=1200&v=1663639985&width=900" width="100%" />

                    </div>

                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <p style={{ fontSize: "16px" }}>Basic joggers with elastic waist</p>
                        <p style={{ fontSize: "16px" }}>$25</p>
                        <button>Add to Cart</button>

                    </div>
                </div><br/>

                <div className="row">
                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/8715533600_2_1_8.png?crop=center&height=1200&v=1663640257&width=900" width="100%" />

                    </div>

                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <p style={{ fontSize: "16px" }}>Light Varsity Bomber Jacket</p>
                        <p style={{ fontSize: "16px" }}>$25</p>
                        <button>Add to Cart</button>
                    </div>
                </div><br/>

                <div className="row">
                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/2_d0a941b5-c804-432a-a888-d4568e843a9a.png?crop=center&height=1200&v=1663640232&width=900" width="100%" />
                    </div>

                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <p style={{ fontSize: "16px" }}>High-Collared Puffer Jacket</p>
                        <p style={{ fontSize: "16px" }}>$212</p>
                        <button>Add to Cart</button>
                    </div>
                </div><br/>

                <div className="row">
                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/3_1f6ee597-2d9b-419d-9440-29d4a4656618.png?crop=center&height=1200&v=1663640025&width=900" width="100%" />
                    </div>

                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <p style={{ fontSize: "16px" }}>Hooded Gilet</p>
                        <p style={{ fontSize: "16px" }}>$23</p>
                        <button>Add to Cart</button>
                    </div>
                </div><br/>

                <div className="row">
                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_5897ce91-b2db-488f-818b-8e7a2445c40c.png?crop=center&height=1200&v=1663640016&width=900" width="100%" />
                    </div>

                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <p style={{ fontSize: "16px" }}>Jumpsuit</p>
                        <p style={{ fontSize: "16px" }}>$32</p>
                        <button>Add to Cart</button>
                    </div>
                </div><br/>

                <div className="row">
                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/8246900807_2_5_8.png?crop=center&height=1200&v=1663639994&width=900" width="100%" />

                    </div>

                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <p style={{ fontSize: "16px" }}>Long Sleeve T-Shirt</p>
                        <p style={{ fontSize: "16px" }}>$12</p>
                        <button>Add to Cart</button>
                    </div>
                </div><br/>

                <div className="row">
                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/8471506251_2_1_8.png?crop=center&height=1200&v=1663639976&width=900" width="100%" />
                    </div>

                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <p style={{ fontSize: "16px" }}>Plaid Overshirt</p>
                        <p style={{ fontSize: "16px" }}>$11</p>
                        <button>Add to Cart</button>
                    </div>
                </div><br/>

                <div className="row">
                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/4_906eac6f-35bd-4bc6-b55d-807d5b60ab79.png?crop=center&height=1200&v=1663639968&width=900" width="100%" />
                    </div>

                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <p style={{ fontSize: "16px" }}>Seersucker Shirt</p>
                        <p style={{ fontSize: "16px" }}>$36</p>
                        <button>Add to Cart</button>
                    </div>
                </div><br/>

                <div className="row">
                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/4474577502_2_1_8.png?crop=center&height=1200&v=1663639961&width=900" width="100%" />
                    </div>

                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <p style={{ fontSize: "16px" }}>Short Sleeve Cotton Shirt</p>
                        <p style={{ fontSize: "16px" }}>$127</p>
                        <button>Add to Cart</button>
                    </div>
                </div><br/>

                <div className="row">
                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/8246588251_2_1_8.png?crop=center&height=1200&v=1663639953&width=900" width="100%" />

                    </div>

                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <p style={{ fontSize: "16px" }}>Mount Hokusai T-Shirt</p>
                        <p style={{ fontSize: "16px" }}>$22</p>
                        <button>Add to Cart</button>
                    </div>
                </div><br/>

                <div className="row">
                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/4474909621_2_1_8.png?crop=center&height=1200&v=1663639945&width=900" width="100%" />

                    </div>

                    <div className={`col-lg-${cole} col-md-${cole} col-sm-${cole} col-xs-${cole}`}>
                        <p style={{ fontSize: "16px" }}>Short Sleeve Shirt</p>
                        <p style={{ fontSize: "16px" }}>$243</p>
                        <button>Add to Cart</button>
                    </div>
                </div> */}