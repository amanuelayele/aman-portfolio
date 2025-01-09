import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="About">
      <div className="About-title">
        <h1>About Me</h1>
      </div>
      <div className="About-sections">
        <div className="About-left">
          <img src="/assets/aman.JPG" alt="My Profile" />
        </div>
        <hr />
        <div className="About-right">
          <div className="About-para">
            <p>
              I am a proud graduate of Madda Walabu University, where I earned
              my Bachelor of Science in Computer Science with a major GPA of
              3.83. My academic journey equipped me with a solid foundation in
              technology and a passion for web development.
            </p>
            <p>
              Graduating in 2024 (2016 EC), I have honed my skills in web
              development and am eager to create impactful projects that make a
              difference. My strong communication skills complement my technical
              abilities, allowing me to collaborate effectively and bring
              innovative ideas to life.
            </p>
          </div>
          <div className="About-skills">
            <div className="About-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="About-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="About-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="About-skill">
              <p>Python</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="About-achievements">
        <div className="About-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="About-achievement">
          <h1>1+</h1>
          <p>COMPLETED PROJECTS</p>
        </div>
        <hr />
        <div className="About-achievement">
          <h1>5+</h1>
          <p>SKILLS MASTERED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
