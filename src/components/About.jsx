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
  
  // Fetch resume pdf
  function resumeDownload() {
    const resumePdf = "/files/darryls-resume.pdf";
    console.log(resumePdf)
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = `Darryl's Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return(
    <section id="about-section" className="about-container">
      
      <div className="about-grid">
        <h2 
        ref={props.titleRef} 
        className={`section-title ${props.isObserved ? `title-show` : null}`}
        >
          About Me
        </h2>
        <div className="about-descr">
          <p>
            My name is Darryl.  While my background is 
            non-traditional—I have spent the last several 
            years completely dedicated to mastering software 
            engineering. Through professional freelance work, 
            self-directed learning, and coursework. I have built 
            a technical foundation in full-stack engineering and 
            the modern JavaScript ecosystem.
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
          <button onClick={resumeDownload}>Resume</button>
        </div>
        <section id="skills-section" className="skills-container">
          <h3>My Skills</h3>
          <div className="skills">
            {skillList}
          </div>
        </section>

      </div>
    </section>
  )
}