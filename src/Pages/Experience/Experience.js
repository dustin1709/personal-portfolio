/*
 * Generic intro
 * Education (High School, College)
 * Technical skills
 */

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Navigate, Link, NavLink } from 'react-router-dom';
import NavBar from "../../Components/NavBar/NavBar";
import * as FaIcons from 'react-icons/fa';
import './Experience.css';
import Footer from "../../Components/Footer/Footer";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Experience = () => {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
        <NavBar />
            <div id="cointainer-box">
                <Carousel id="carousel"
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                >
                    <div>
                        <div className="frame">
                            <img className="imageIcon" src={'assets/logo_company/TV-software.png'} />
                            <h5>TinhVan Software - TSO BU02</h5>
                            <h6>Hanoi, Vietnam</h6>
                            <h6>May - June 2022</h6>
                            <h6>Marketing</h6>
                            <ul id="to-do">
                                <li>See work sample: <a href="https://www.figma.com/proto/wFizciQ8l65UEFuTAdQUJr/TV_ECOMMERCE_SubVer?node-id=4%3A5&starting-point-node-id=4%3A5&scaling=scale-down" target="_blank">click here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="frame">
                            <img className="imageIcon" src={'assets/logo_company/jcs.png'} />
                            <h5>JCS Control Inc.</h5>
                            <h6>Rochester, NY</h6>
                            <h6>June - December 2020</h6>
                            <h6>Front-End Developer Co-op</h6>
                            <ul id="to-do">
                                <li>Design UI for ingredient/recipe editors for engineers to work remotely from the factory/shop.</li>
                                <li>Used ASP.NET Framework web forms written in C# to develop Recipe Management front-end, which allows clients to work remotely with their processing systems database.</li>
                                <li>Designed two Recipe Management interfaces which include: Ingredient Editor and Recipe Editor.</li>
                                <li>Ingredients Editor contains available ingredients which will be required based on certain recipe in the Recipe Editor.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="frame">
                            <img className="imageIcon" src={'assets/logo_company/ey.png'} />
                            <h5>Ernst & Young</h5>
                            <h6>Hanoi, Vietnam</h6>
                            <h6>June - August 2019</h6>
                            <h6>IT Intern</h6>
                            <ul id="to-do">
                                <li>Sorted client's data with ACL Analytics tool to reduce work processes and procedures.</li>
                                <li>Performed journal entry testing to filter data to search for transactions by MS Access.</li>
                                <li>Organized important data to generate client's audit report in MS Excel.</li>
                            </ul>
                        </div>
                    </div>
                </Carousel>
            </div>
        <Footer pageId={"second"} />
        </>
    );
}

export default Experience
