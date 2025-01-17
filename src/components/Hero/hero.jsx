import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";

const hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Hemavardhan,</span>Machine learning Engineer and WebDeveloper based in India.</h1>
      <p>I am currently pursuing a B.Tech in Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning at SRM University AP. My skill set includes machine learning, AI, Deeplearning, Data analyzing and normalizing, data structures and algorithms, and frontend development.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#projects">My projects</AnchorLink></div>
        <dive className="hero-resume"><AnchorLink className="anchor-link" offset={50} href="#resume">My Resume</AnchorLink></dive>
      </div>
    </div>
  )
}

export default hero