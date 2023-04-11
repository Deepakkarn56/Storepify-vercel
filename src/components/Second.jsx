import React, { useState } from 'react'
import data from './data'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import $ from 'jquery';

export default function Second() {

    // count down timer

    function makeTimer() {

        //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
            var endTime = new Date("12 June 2023 9:56:00 GMT+01:00");			
                endTime = (Date.parse(endTime) / 1000);
    
                var now = new Date();
                now = (Date.parse(now) / 1000);
    
                var timeLeft = endTime - now;
    
                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
      
                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
    
                $(".days").html(days + "<br/>Days");
                $(".hours").html(hours + "<br/>Hr");
                $(".minutes").html(minutes + "<br/>Min");
                $(".seconds").html(seconds + "<br/>Sec");		
    
        }
    
        setInterval(function() { makeTimer(); }, 1000);
      
    
    

    // next part

    const [noOfElement, setnoOfElement] = useState(4);
    const loadMore = () => {
        setnoOfElement((pre) => pre + 4);
    }


    const slice = data.cardData.slice(0, noOfElement);

    const changeImage = (id, size) => {
        const currentData = data.cardData.filter(el => el.id === id)
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

    return (
        <div style={{ fontFamily: "Jost" }}>

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
                        console.log(item.timer);
                        if(item.timer === undefined){
                            return (
                                <div className='col-11 col-md-4 col-lg-6 col-xs-2 col-sm-2' key={index + 20}>
                                    <div className={`'card' ${item.id}`}>
                                            <span className='click'>
                                                <img src={item.img} className='card-img' />
    
                                                {/* <div className='overlay'>
                                            <i className="bi bi-heart icon i" style={{ top: "20px", right: "20px" }}></i>
                                            <i className="bi bi-eye icon i" style={{ top: "60px", right: "20px" }}></i>
                                            <i className="bi bi-arrow-left-right icon i" style={{ top: "100px", right: "20px" }}></i>
    
                                            <Button variant="outline-dark" className='over'>Add To Card</Button>
    
                                        </div> */}
                                                <div className="overtake">
                                                    
                                                    <center>
                                                        
                                                        <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip" >Wishlist</Tooltip>}>
                                                            <i className="bi bi-heart icon" style={{ marginTop: "10px" }}></i>
                                                        </OverlayTrigger>
    
                                                        <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip" >Quick View</Tooltip>}>
                                                            <i className="bi bi-eye icon" style={{ marginTop: "60px" }}></i>
                                                        </OverlayTrigger>
    
                                                        <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip" >Compare</Tooltip>}>
                                                            <i className="bi bi-arrow-left-right icon" style={{ marginTop: "110px" }}></i>
                                                        </OverlayTrigger>
                                                        
                                                    </center>
                                                    
    
                                                    &nbsp;&nbsp;<Button className="btn btn-light buttons second-buttons" style={{ width: "95%", marginTop : "-100px" }}>Add To Card</Button> 
    
    
                                                </div>
                                            </span>
                                    </div>
                                            
                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                        <div className='d-flex'>
                                            {sizes}
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            )
                        }else{
                        return (
                            <div className='col-11 col-md-4 col-lg-6 col-xs-2 col-sm-2' key={index + 20}>
                                <div className={`'card' ${item.id}`}>
                                        <span className='click'>
                                            <img src={item.img} className='card-img' />

                                            {/* <div className='overlay'>
                                        <i className="bi bi-heart icon i" style={{ top: "20px", right: "20px" }}></i>
                                        <i className="bi bi-eye icon i" style={{ top: "60px", right: "20px" }}></i>
                                        <i className="bi bi-arrow-left-right icon i" style={{ top: "100px", right: "20px" }}></i>

                                        <Button variant="outline-dark" className='over'>Add To Card</Button>

                                    </div> */}
                                            <div className="overtake">
                                                
                                                <center>
                                                    
                                                    <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip" >Wishlist</Tooltip>}>
                                                        <i className="bi bi-heart icon" style={{ marginTop: "10px" }}></i>
                                                    </OverlayTrigger>

                                                    <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip" >Quick View</Tooltip>}>
                                                        <i className="bi bi-eye icon" style={{ marginTop: "60px" }}></i>
                                                    </OverlayTrigger>

                                                    <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip" >Compare</Tooltip>}>
                                                        <i className="bi bi-arrow-left-right icon" style={{ marginTop: "110px" }}></i>
                                                    </OverlayTrigger>
                                                    
                                                </center>
                                                

                                                &nbsp;&nbsp;<Button className="btn btn-light buttons second-buttons" style={{ width: "95%", marginTop : "-100px" }}>Add To Card</Button> 


                                            </div>
                                            <div id="timer" className='timer'>
                                                <div className="boxes days"></div>
                                                <div className="boxes hours"></div>
                                                <div className="boxes minutes"></div>
                                                <div className="boxes seconds"></div>
                                            </div>
                                        </span>
                                </div><br/>
                                        
                                <div>
                                    <h5 className='dh'>{item.title}</h5>
                                    <p>{item.desc}</p>
                                    <div className='d-flex'>
                                        {sizes}
                                    </div>
                                </div>
                                <br />
                            </div>
                        )}
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


// const [col, setCol] = useState(6);


{/* <div className="row">
                    <div className={`col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col}`}>
                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/8246588251_2_2_8_c6439845-0e1f-4115-98f0-1a3d267c6178.png?crop=center&height=1200&v=1668409823&width=900" width="100%" className="ab" />
                        <p style={{ fontSize: "16px" }}>Sweatshirt With Open Flower</p>
                        <p style={{ fontSize: "16px" }}>$225</p>

                    </div>

                    <div className={`col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col}`}>

                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/8590528800_2_1_8.png?crop=center&height=1200&v=1663639985&width=900" width="100%" />
                        <p style={{ fontSize: "16px" }}>Basic joggers with elastic waist</p>
                        <p style={{ fontSize: "16px" }}>$25</p>
                    </div>
                </div>

                <div className="row">
                    <div className={`col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col}`}>

                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/8715533600_2_1_8.png?crop=center&height=1200&v=1663640257&width=900" width="100%" />
                        <p style={{ fontSize: "16px" }}>Light Varsity Bomber Jacket</p>
                        <p style={{ fontSize: "16px" }}>$25</p>
                    </div>

                    <div className={`col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col}`}>

                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/2_d0a941b5-c804-432a-a888-d4568e843a9a.png?crop=center&height=1200&v=1663640232&width=900" width="100%" />
                        <p style={{ fontSize: "16px" }}>High-Collared Puffer Jacket</p>
                        <p style={{ fontSize: "16px" }}>$212</p>
                    </div>
                </div>

                <div className="row">
                    <div className={`col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col}`}>

                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/3_1f6ee597-2d9b-419d-9440-29d4a4656618.png?crop=center&height=1200&v=1663640025&width=900" width="100%" />
                        <p style={{ fontSize: "16px" }}>Hooded Gilet</p>
                        <p style={{ fontSize: "16px" }}>$23</p>
                    </div>

                    <div className={`col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col}`}>

                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/1_5897ce91-b2db-488f-818b-8e7a2445c40c.png?crop=center&height=1200&v=1663640016&width=900" width="100%" />
                        <p style={{ fontSize: "16px" }}>Jumpsuit</p>
                        <p style={{ fontSize: "16px" }}>$32</p>
                    </div>
                </div>

                <div className="row">
                    <div className={`col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col}`}>

                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/8246900807_2_5_8.png?crop=center&height=1200&v=1663639994&width=900" width="100%" />
                        <p style={{ fontSize: "16px" }}>Long Sleeve T-Shirt</p>
                        <p style={{ fontSize: "16px" }}>$12</p>
                    </div>

                    <div className={`col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col}`}>

                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/8471506251_2_1_8.png?crop=center&height=1200&v=1663639976&width=900" width="100%" />
                        <p style={{ fontSize: "16px" }}>Plaid Overshirt</p>
                        <p style={{ fontSize: "16px" }}>$11</p>
                    </div>
                </div>

                <div className="row">
                    <div className={`col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col}`}>

                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/4_906eac6f-35bd-4bc6-b55d-807d5b60ab79.png?crop=center&height=1200&v=1663639968&width=900" width="100%" />
                        <p style={{ fontSize: "16px" }}>Seersucker Shirt</p>
                        <p style={{ fontSize: "16px" }}>$36</p>
                    </div>

                    <div className={`col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col}`}>

                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/4474577502_2_1_8.png?crop=center&height=1200&v=1663639961&width=900" width="100%" />
                        <p style={{ fontSize: "16px" }}>Short Sleeve Cotton Shirt</p>
                        <p style={{ fontSize: "16px" }}>$127</p>
                    </div>
                </div>

                <div className="row">
                    <div className={`col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col}`}>

                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/8246588251_2_1_8.png?crop=center&height=1200&v=1663639953&width=900" width="100%" />
                        <p style={{ fontSize: "16px" }}>Mount Hokusai T-Shirt</p>
                        <p style={{ fontSize: "16px" }}>$22</p>
                    </div>

                    <div className={`col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col}`}>

                        <img src="https://cdn.shopify.com/s/files/1/0624/8638/0738/products/4474909621_2_1_8.png?crop=center&height=1200&v=1663639945&width=900" width="100%" />
                        <p style={{ fontSize: "16px" }}>Short Sleeve Shirt</p>
                        <p style={{ fontSize: "16px" }}>$243</p>
                    </div>
                </div> */}