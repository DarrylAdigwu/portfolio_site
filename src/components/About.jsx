import React from "react";
import '../assets/css/about.css';
import half from "../assets/images/half.png";
import full from "../assets/images/dslate.png";

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
      
      <div className="about-grid">
        <h2 
        ref={props.titleRef} 
        className={`section-title ${props.isObserved ? `title-show` : null}`}
        >
          about me
        </h2>
        <div className="about-descr">
          <p>
            My name is Darryl. I'm an aspiring web developer.
            I gravitate towards front-end development because I 
            enjoy structuring layouts, making content visually 
            appealing, and creating user-friendly web experiences. 
            However, throughout my journey learning front-end development 
            I have picked up skills in DevOps and Back-end development
            in order to create fully-functional projects.
          </p>

          <p className="middle">
            Learning new technologies and tackling challenges are the aspects within
            coding and development that excite me the most. Solving problems, creating
            solutions, and seeing functional products is a process I have always been 
            passionate about.
          </p>

          <p>
            Outside of coding, I enjoy outdoor activities, playing basketball,
            spending time with friends and family, and most importantly growing 
            in my faith.
          </p>
        </div>  
        
        <div className="about-img">
          <img src={half} alt="image of me"/>
        </div>
        <div className="about-img-full">
          <img src={full} alt="image of me"/>
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

      </div>
    </section>
  )
}