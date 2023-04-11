import React, { useState } from 'react';
import One from './One';
import Second from './Second';
import Third from './Third';
import Four from './Four';
import Dashboard from './Dashboard'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navb() {
    const [clases, setClasses] = useState('hdpe')

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
        if (clases === 'hdpe') {
            return <One />
        } else if (clases === 'sprinkle') {
            return <Second />
        } else if (clases === 'spray') {
            return <Third />
        } else if (clases === 'irrigation') {
            return <Four />
        }

    }
const [zero, setZero] = useState('1'); 
const [one, setOne] = useState('1'); 
    return (
        <div style={{fontFamily : "Jost"}}>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 nm'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' style={{ display: "flex" }}>
                        <span>
                            <p>Best Seller</p>
                        </span>

                        <span className='nr'>
                            <p data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                                <svg fill="none" height="20" viewBox="0 0 18 20" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.39875 14.605L8.72175 15.748C9.01175 15.999 9.04475 16.439 8.79675 16.732C8.73791 16.8015 8.66586 16.8586 8.58478 16.9C8.5037 16.9415 8.4152 16.9664 8.32441 16.9734C8.23363 16.9804 8.14236 16.9692 8.0559 16.9407C7.96944 16.9121 7.88951 16.8667 7.82075 16.807L6.25575 15.455C6.17971 15.3892 6.11874 15.3078 6.07698 15.2164C6.03523 15.1249 6.01366 15.0255 6.01375 14.925V7.938L0.171747 1.155C-0.219253 0.703 0.100747 0 0.694747 0H17.3067C17.9007 0 18.2187 0.704 17.8297 1.155L11.9797 7.939V19.302C11.9797 19.688 11.6697 20 11.2877 20C11.1965 19.9996 11.1062 19.9812 11.022 19.9459C10.9378 19.9107 10.8614 19.8591 10.7972 19.7943C10.7329 19.7295 10.6821 19.6527 10.6475 19.5682C10.6129 19.4837 10.5954 19.3933 10.5957 19.302V7.678C10.5956 7.50987 10.6559 7.3473 10.7657 7.22L15.7887 1.395H2.21075L7.22875 7.22C7.33858 7.3473 7.39892 7.50987 7.39875 7.678V14.605Z" fill="black"></path>
                                </svg>&nbsp;Filter
                            </p>
                            {/* <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                                <div>
                                &nbsp;&nbsp; <Dashboard />
                                </div>
                            </div> */}
                        </span>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-3 col-xs-3 '>

                        <span>
                            <select style={{ marginTop: "8px", border: "none", outline : "none" }} value={zero} onChange={(e) => setZero(e.target.value)} >
                                <option value='0'>12</option>
                                <option value="1">24</option>
                                <option value="2">36</option>
                                <option value="3">42</option>
                            </select>&nbsp;&nbsp;&nbsp;&nbsp;

                            <select style={{ border: "none", outline : "none" }} value={one} onChange={(e) => setOne(e.target.value)}>
                                <option value="0">Features</option>
                                <option value="1">Alphabetically, A-Z</option>
                                <option value="2">Alphabetically, Z-A</option>
                                <option value="3">Price, low to high</option>
                                <option value="4">Price, high to low</option>
                                <option value="5">Date, old to new</option>
                                <option value="6">Date, new to old</option>
                            </select>
                        </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <span>
                            <button className="btn btn-default " data-filter="hdpe" onClick={() => setClasses(() => 'hdpe')}>
                                <li className="icon-type-list grid-1-col u" data-type="grid-1-col">
                                    <span flow="up" tooltip="List">
                                        <OverlayTrigger overlay={<Tooltip id="tooltip">List</Tooltip>}>
                                            <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                <rect fill="#CECECE" height="20" strokeWidth="2" stroke="" width="20" x="1" y="1"></rect>
                                            </svg>
                                        </OverlayTrigger>
                                    </span>
                                </li>
                            </button>
                        
                            <button className="btn btn-default " data-filter="sprinkle" onClick={() => setClasses(() => 'sprinkle')}>
                                <li className="icon-type-list u" data-type="grid-2-col">
                                    <span flow="up" tooltip="2 col">
                                        <OverlayTrigger overlay={<Tooltip id="tooltip">2 col</Tooltip>}>
                                            <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                <rect fill="#CECECE" height="8.8" width="8.8"></rect>
                                                <rect fill="#CECECE" height="8.8" width="8.8" y="13.2002"></rect>
                                                <rect fill="#CECECE" height="8.8" width="8.8" x="13.2"></rect>
                                                <rect fill="#CECECE" height="8.8" width="8.8" x="13.2" y="13.2002"></rect>
                                            </svg>
                                        </OverlayTrigger>
                                    </span>
                                </li>
                            </button>
                        </span>

                    </div>
                </div>
            </div>

            {/* next part */}

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                <div className='nl' style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    <h3>Best Seller</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <span style={{marginLeft : "160px"}}>
                        <select style={{ marginTop: "8px", border: "none", outline : "none" }} defaultValue="1">
                        <option value='0'>12</option>
                            <option value="1">24</option>
                            <option value="2">36</option>
                            <option value="3">42</option>
                        </select>&nbsp;

                        <select style={{ border: "none", outline : "none" }} defaultValue='2'>
                        <option value='0'>Features</option>
                           
                            <option value="1">Alphabetically, A-Z</option>
                            <option value="2">Alphabetically, Z-A</option>
                            <option value="3">Price, low to high</option>
                            <option value="3">Price, high to low</option>
                            <option value="3">Date, old to new</option>
                            <option value="3">Date, new to old</option>
                        </select>
                    </span>

                    <span style={{marginRight : "-12px"}}>
                        <button className="btn btn-default " data-filter="hdpe" onClick={() => setClasses(() => 'hdpe')}>
                            <li className="icon-type-list grid-1-col u" data-type="grid-1-col">
                                <span flow="up" tooltip="List">
                                    <OverlayTrigger overlay={<Tooltip id="tooltip">List</Tooltip>}>
                                        <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                            <rect fill="#CECECE" height="20" strokeWidth="2" stroke="" width="20" x="1" y="1"></rect>
                                        </svg>
                                    </OverlayTrigger>
                                </span>
                            </li>
                        </button>


                        <button className="btn btn-default " data-filter="sprinkle" onClick={() => setClasses(() => 'sprinkle')}>
                            <li className="icon-type-list u" data-type="grid-2-col">
                                <span flow="up" tooltip="2 col">
                                    <OverlayTrigger overlay={<Tooltip id="tooltip">2 col</Tooltip>}>
                                        <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                            <rect fill="#CECECE" height="8.8" width="8.8"></rect>
                                            <rect fill="#CECECE" height="8.8" width="8.8" y="13.2002"></rect>
                                            <rect fill="#CECECE" height="8.8" width="8.8" x="13.2"></rect>
                                            <rect fill="#CECECE" height="8.8" width="8.8" x="13.2" y="13.2002"></rect>
                                        </svg>
                                    </OverlayTrigger>
                                </span>
                            </li>
                        </button>

                        <button className="btn btn-default " data-filter="spray" onClick={() => setClasses(() => 'spray')}>
                            <li className="icon-type-list u" data-type="grid-3-col">
                                <span flow="up" tooltip="3 col">
                                    <OverlayTrigger overlay={<Tooltip id="tooltip">3 col</Tooltip>}>
                                        <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                            <rect fill="#CECECE" height="4.4" width="4.4"></rect>
                                            <rect fill="#CECECE" height="4.4" width="4.4" y="8.7998"></rect>
                                            <rect fill="#CECECE" height="4.4" width="4.4" y="17.6001"></rect>
                                            <rect fill="#CECECE" height="4.4" width="4.4" x="8.79932"></rect>
                                            <rect fill="#CECECE" height="4.4" width="4.4" x="8.79932" y="8.7998"></rect>
                                            <rect fill="#CECECE" height="4.4" width="4.4" x="8.79932" y="17.6001"></rect>
                                            <rect fill="#CECECE" height="4.4" width="4.4" x="17.6003"></rect>
                                            <rect fill="#CECECE" height="4.4" width="4.4" x="17.6003" y="8.7998"></rect>
                                            <rect fill="#CECECE" height="4.4" width="4.4" x="17.6003" y="17.6001"></rect>
                                        </svg>
                                    </OverlayTrigger>
                                </span>
                            </li>
                        </button>
                        <button className="btn btn-default " data-filter="irrigation" onClick={() => setClasses(() => 'irrigation')}>
                            <li className="icon-type-list u" data-type="grid-4-col">
                                <span flow="up" tooltip="4 col">
                                    <OverlayTrigger overlay={<Tooltip id="tooltip">4 col</Tooltip>}>
                                        <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304"></rect>
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304" y="6.6958"></rect>
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304" y="13.3911"></rect>
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304" y="20.0869"></rect>
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304" x="6.69531"></rect>
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304" x="6.69531" y="6.6958"></rect>
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304" x="6.69531" y="13.3911"></rect>
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304" x="6.69531" y="20.0869"></rect>
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304" x="13.3926"></rect>
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304" x="13.3926" y="6.6958"></rect>
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304" x="13.3926" y="13.3911"></rect>
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304" x="13.3926" y="20.0869"></rect>
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304" x="20.0859"></rect>
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304" x="20.0859" y="6.6958"></rect>
                                            <rect fill="#CECECE" height="1.91304" width="1.91304" x="20.0859" y="13.3911"></rect>
                                            <rect fill="#B8B8B8" height="1.91304" width="1.91304" x="20.0859" y="20.0869"></rect>
                                        </svg>
                                    </OverlayTrigger>

                                </span>
                            </li>
                        </button>
                    </span>
                </div>
                <br />


                <div className={`gallery_product col-lg-12 col-md-12 col-sm-12 col-xs-12 filter ${clases}`}>
                    {rendringComponent()}
                </div>

                {/* <div className="gallery_product col-lg-12 col-md-12 col-sm-12 col-xs-12 filter sprinkle">
                    <Second />
                </div>

                <div className="gallery_product col-lg-12 col-md-12 col-sm-12 col-xs-12 filter irrigation">
                    <Four />
                </div>

                <div className="gallery_product col-lg-12 col-md-12 col-sm-12 col-xs-12 filter spray">
                    <Third/>
                </div> */}








            </div>
        </div>
    )
}
