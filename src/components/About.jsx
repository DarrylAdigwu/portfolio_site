import React from "react";
import '../assets/css/about.css';
import half from "../assets/images/half.png"

export default function About(props) {
  // Return each individual skill
  const skillList = props.skills.map((skill) => {
    return(
      //<img key={`${skill.id}`} src={`${skill.image.src}`} alt={`${skill.image.alt}`} />
      <span key={`${skill.id}`}>{skill.title}</span>
    )
  });
  
  return(
    <section id="about-section" className="about-container">
      <h2>about me</h2>
        <div className="about-info">
          <p className="about-descr">
            My name is Darryl. I am an aspiring front-end web developer.
            I have focused the last year and some change of my life on
            making the transition from a career in sales to a career in 
            web development. <br/>
            <br/>
            I enjoy hiking, playing basketball, and 
            being with friends and family. Most importantly, I put my 
            faith in Jesus Christ.
          </p>
          <img src={half} alt="image of me"/>
        </div>
        <div className="resume">
          <button>Resume</button>
        </div>
        <section id="skills-section" className="skills-container">
          <h3>my skills</h3>
          <div className="skills">
            {skillList}
          </div>
        </section>
    </section>
  )
}