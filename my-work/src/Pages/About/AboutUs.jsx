import { Box, Toolbar } from "@mui/material";
import React from "react";
import './AboutUs.css';
import img from '../Assets/about_me.png';
import { IoIosCall } from 'react-icons/io';
import { MdEmail  } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';

function AboutUs() {
    return (
        <>
        <div className="about_mainDiv">
            <div className="aboutUs">
            <h1><u>About Me</u></h1>
            </div>
            <div className="Summary">
            <pre>
                    <b>To work with a company this appreciates innovation<br/>
                so that i can enhance my knowledge and skills to give<br/>
                my best for the growth of the company.</b>
            </pre>
            </div>
            <div className="Contact">
                <IoIosCall size={40}/>
                
                <h4>9879380239</h4>
            </div>
            <div className="Email">
                <MdEmail size={40}/>
                <h4>bk01@gmail.com</h4>
            </div>
            <div className="LinkedIn">
                <BsLinkedin size={40}/>
                <h4>xyzLinkedIn</h4>
            </div>
            <div className="imgDiv">
                <img src={img} alt="image" />
            </div>
        </div>        
        </>
    )
}
export default AboutUs;