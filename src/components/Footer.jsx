import githubLogo from "../../src/assets/images/github.svg";
import linkedInLogo from "../../src/assets/images/linkedIn.svg";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <div className="foot-descr">
        <div className="descr-header">
          <a href="#header-section">
            <h2>DARRYL ADIGWU</h2>
          </a>
          <div className="socials">
            <Link to={`https://github.com/DarrylAdigwu`} target={`_blank`}>
              <img
                src={githubLogo} 
                alt={`github logo and link to my personal github profile`}
              />
            </Link>
            <Link to={`https://www.linkedin.com/in/darryl-adigwu-839108170/`} target={`_blank`}>
              <img 
                src={linkedInLogo} 
                alt={`linkedIn logo and link to my personal linkedIn profile`}
                />
            </Link>
          </div>
        </div>
        <p>
          A front-end 
          web developer with a passion for 
          creating user-friendly web application.
        </p>
        <hr />
        <aside className="copyright">
          &copy; 2025 Made by Darryl Adigwu
        </aside>
      </div>
    </footer>
  )
}