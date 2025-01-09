import React from "react";
import "./Services.css";

import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        <div className="services-format">
          <h3>1</h3>
          <h2>Frontend Development</h2>
          <p>Building responsive websites.</p>
          <div className="services-readmore">
            <p>Read More</p>
            <img src={arrow_icon} alt="Arrow Icon" />
          </div>
        </div>
        <div className="services-format">
          <h3>2</h3>
          <h2>Backend Development</h2>
          <p>Creating server-side applications.</p>
          <div className="services-readmore">
            <p>Read More</p>
            <img src={arrow_icon} alt="Arrow Icon" />
          </div>
        </div>
        <div className="services-format">
          <h3>3</h3>
          <h2>UI/UX Design</h2>
          <p>Designing user-friendly interfaces.</p>
          <div className="services-readmore">
            <p>Read More</p>
            <img src={arrow_icon} alt="Arrow Icon" />
          </div>
        </div>
        <div className="services-format">
          <h3>4</h3>
          <h2>Graphic Design</h2>
          <p>Creating visual content.</p>
          <div className="services-readmore">
            <p>Read More</p>
            <img src={arrow_icon} alt="Arrow Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
