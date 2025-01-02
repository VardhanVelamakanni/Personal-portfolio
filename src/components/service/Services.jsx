import React from "react";
import "./Services.css";
import Services_Data from "../../assets/services_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Services = () => {
  return (
    <div id='projects' className="services">
      <div className="services-title">
        <h1>Projects</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <a className="a-link" href="https://github.com/VardhanVelamakanni?tab=repositories">
                <p>Read more</p>
                <img src={arrow_icon} alt="" />
              </a>
            </div>
          </div>
        })}
      </div>
      <div className="mywork-showmore">
        <p>Read More</p>
        <a href="https://github.com/VardhanVelamakanni?tab=repositories">

          <img src={arrow_icon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Services;
