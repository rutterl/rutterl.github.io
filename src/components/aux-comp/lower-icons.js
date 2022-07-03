import '../../App.css';
// get our fontawesome imports
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icons() {
  return (
    // Languages and social media?
  <div className="fixed-wrapper">
      <div className="fixed-block block-right">
        <ul className="social-icons">
          <li><a target="_blank" href="https://github.com/nachatz"><FontAwesomeIcon icon={faGithub} style={{ height: "2em", color: "white" }} /></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/nikolas-achatz-074973187/"><FontAwesomeIcon icon={faLinkedin}  style={{ height: "2em", color: "white" }} /></a></li>
        </ul>
      </div>

    </div>
  );
}

export default Icons;
