import React from "react";
import { useLoaderData, useActionData } from "react-router";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import skills from "../skills";
import myProjects from "../myProjects";

// Load projects and skills
export async function loader({ request }) {
  return {skills, myProjects};
}

// Get contact form data and send to email
export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  console.log(message)

  // Send contact data to email
  const response = await fetch("https://formcarry.com/s/A6NrF_MGZsO", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name, email, message})
  })

  const data = await response.json();
  if(response.code === 200) {
    return alert("Successful Submission");
  }
}

export default function Portfolio() {
  const loader = useLoaderData();
  const projects = loader.myProjects;
  const skills = loader.skills;

  return (
    <>
      <main>
        <section className="headline">
          <h1 className="name">Darryl Adigwu</h1>
          <h1 className="highlight">front-end <br/> web developer</h1>
          <p>
            I am a self-taught front-end web developer 
            with a passion for creating user-friendly 
            websites and web applications using technologies 
            like HTML, CSS, Javascript, and React.
          </p>
        </section>
        <About skills={skills}/>
        <Projects projects={projects}/>
        <Contact />
      </main>
    </>
  )
}