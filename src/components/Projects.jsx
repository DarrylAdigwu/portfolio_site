import React from "react";
import '../assets/css/projects.css';

export default function Projects(props) {

  // Return and format each individual project
  const projectsList = props.projects.map(project => {
    const toolsList = project.skills;

    const allTools = toolsList.map(tool => {
      return(
        <span key={tool} className="display-tools">
          {tool}
        </span>
      )
    });

    return(
      <div key={`${project.id}`} className={`project`}>
        <div className="project-visual">
          <a href={`${project.link}`} target="_blank">
            <img src={`${project.image.src}`} alt={`${project.image.alt}`}/>
          </a>
          <a href={`${project.link}`} target="_blank">
            <h3>{project.title}</h3>
          </a>
        </div>
        <p className="project-descr">
          {project.description}
        </p>
        <div className="tools">
          {allTools}
        </div>
      </div>
    )
  })

  return(
    <section id="projects-section" className="projects-container">
      <div className="projects-header">
        <h2
        ref={props.titleRef} 
        className={`section-title ${props.isObserved ? `title-show` : null}`}
        >
          projects
        </h2>
      </div>
      <div className="projects-list">
        {projectsList}
      </div>
    </section>
  )
}
