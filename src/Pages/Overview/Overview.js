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
import './Overview.css';
import Footer from "../../Components/Footer/Footer";

const Overview = () => {
    
    const sendEmail = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <NavBar />
        <div style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/hoangthanh.png'})`, 
                paddingLeft: '3%',
                paddingRigt: '3%',
                paddingTop: '18%',
                paddingBottom: '10%',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
            <div className="cont">
                <h3>Hi, My name is Vu (Dustin)</h3>
                <h5>Welcome to my website...</h5>
                <p>
                    <button type="button" className="btn btn-dark" onClick={()=> window.open("https://www.linkedin.com/in/dustin-duong-chu/", "_blank")}>
                        <FaIcons.FaLinkedin /> LinkedIn
                    </button>
                    <button type="button" className="btn btn-dark" onClick={()=> window.open("https://github.com/dustin1709", "_blank")}>
                        <FaIcons.FaGithub /> GitHub
                    </button>
                </p>
            </div>
        </div>
        <div style={{ 
                paddingLeft: '3%',
                paddingRigt: '3%',
                paddingTop: '3%',
                paddingBottom: '2%' 
            }}>
            <div className="cont">
                <h3>About Me</h3>
                <h5>Education</h5>
                <ul>
                    <li>
                        College
                        <ul>
                            <li>
                            Class of 2022. Rochester Institute of Technology (RIT). Rochester, NY
                            <ul>
                                <li>Bachelor of Science in Web and Mobile Computing</li>
                                <li id="smaller">Major concentration: Mobile Development and Project Management</li>
                            </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        High School
                        <ul>
                            <li>Class of 2018. La Lumiere School. La Porte, Indiana</li>
                            <li>2015 - 16. Hanoi Amsterdam High School. Hanoi, Vietnam</li>
                        </ul>
                    </li>
                </ul>
                
                <div className="space"></div>
                <h5>Hobbies</h5>
                <p>I do play some sport with my friend in my free time. I play a little bit of tennis and golf.</p>
                
                <div className="space"></div>
                <h5>Technologies</h5>
                <ul>
                    <li className="listEle">
                        <h6>Programming languages</h6>
                        <li>Java <FaIcons.FaJava />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Python <FaIcons.FaPython /></li>
                        <li>C#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C++</li>
                    </li>
                    
                    <li className="listEle">
                        <h6>Web development</h6>
                        <li>Sass <FaIcons.FaSass/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript <FaIcons.FaJs/></li>
                        <li>jQuery Library&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ASP.NET Framework</li>
                        <li>NodeJS <FaIcons.FaNodeJs />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React <FaIcons.FaReact /></li>
                        <li>PHP <FaIcons.FaPhp />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Angular <FaIcons.FaAngular /></li>
                    </li>
                    
                    <li className="listEle">
                        <h6>UI/UX</h6>
                        <li>Adobe Photoshop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adobe XD</li>
                        <li>Figma <FaIcons.FaFigma />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sketch <FaIcons.FaSketch /></li>
                    </li>
                    
                    <li className="listEle">
                        <h6>Mobile</h6>
                        <li>Swift <FaIcons.FaSwift /></li>
                    </li>
                    
                    <li className="listEle">
                        <h6>Database</h6>
                        <li>MySQL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MS SQL</li>
                    </li>
                </ul>
            </div>
        </div>
        <div style={{ 
                backgroundColor: '#f1f1f1',
                paddingLeft: '3%',
                paddingRigt: '3%',
                display: 'grid',
                gridTemplateColumns: 'auto auto',
                width: '100%'
            }}>
           <div className="formFloatLeft">
           <h1>Contact me</h1>
           <form onSubmit={sendEmail}>
               <label for="name">Name</label>
               <input type="text" id="name" name="name" 
               placeholder="enter name" required />

            <div className="space"></div>
               <label for="email">Email</label>
               <input type="text" id="email" name="email"
               placeholder="enter email" required />
            
            <div className="space"></div>
               <label for="message">Message</label>
               <textarea id="textbox" placeholder="write something here..." required ></textarea>
               
            <div className="space"></div>
               <button type="submit" className="btn btn-dark btn-lg btn-block">submit</button>
            <div className="space"></div>
           </form>
           </div>
           <div className="formFloatRight"
           style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/ben-kolde-FaPxZ88yZrw-unsplash.png'})`
            }}>

           </div>
        </div>
        <Footer pageId={"first"}/>
        </>
    );
}

export default Overview
