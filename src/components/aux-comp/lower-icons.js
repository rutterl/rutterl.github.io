import '../../App.css';
// get our fontawesome imports
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from 'framer-motion'

function Icons() {
  return (
    // Languages and social media?
  <div className="fixed-wrapper">
      <div className="fixed-block block-right">
        <ul className="social-icons">
          <motion.li whileTap={{scale: 1.15 }} whileHover={{ scale: 1.05 }}><a target="_blank" href="https://github.com/nachatz"><FontAwesomeIcon icon={faGithub} style={{ height: "2em", color: "white" }} /></a></motion.li>
          <motion.li whileTap={{scale: 1.15 }} whileHover={{ scale: 1.05 }}><a target="_blank" href="https://www.linkedin.com/in/nikolas-achatz-074973187/"><FontAwesomeIcon icon={faLinkedin}  style={{ height: "2em", color: "white" }} /></a></motion.li>
        </ul>
      </div>
    </div>
  );
}

export default Icons;
