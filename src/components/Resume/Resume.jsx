import React from 'react'
import './Resume.css'
import arrow_icon from "../../assets/arrow_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Resume = () => {
    return (
        <div id="resume" className='Resume'>
            <div className="Resume-title">
                <h1>Resume</h1>
            </div>
            <div className="resume-download">
                <p>View/Download</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default Resume