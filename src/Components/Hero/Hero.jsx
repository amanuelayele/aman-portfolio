import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="Hero">
      <img src="/assets/aman.JPG" alt="Amanuel Ayele" />
      <h1>
        <span>I'm Amanuel Ayele,</span> a frontend developer based in Ethiopia{" "}
      </h1>
      <p>
        I'm a frontend developer from Arbaminch, Ethiopia, with 1 year of
        experience and strong skills in web development.
      </p>
      <div className="Hero-action">
        <div className="Hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me{" "}
          </AnchorLink>
        </div>
        <div className="Hero-resume">
          <a href="/assets/aman cv.pdf" download>
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
