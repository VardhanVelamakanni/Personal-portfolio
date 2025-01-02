import React from "react";
import "./About.css";

import profile_img from "../../assets/about.svg";

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              A skilled frontend developer with a keen eye for detail,
              specializing in crafting user-friendly and visually appealing web
              interfaces using modern technologies.
            </p>
            <p>
              An enthusiastic machine learning practitioner adept at analyzing
              and normalizing data to build effective predictive models and
              solve real-world challenges.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML&CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Git</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Libraries</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Frameworks</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Figma</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
