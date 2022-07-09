import '../../App.css';
import TypeWriter from 'typewriter-effect';
import {motion} from 'framer-motion'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Welcome() {
  return (
    <div className="welcome">
        <motion.h1 style={{cursor: "pointer"}} whileTap={{scale: 1.15 }} whileHover={{ scale: 1.01 }}><a style={{color: "white", textDecoration: "none"}} target="_blank" href="https://www.linkedin.com/in/nikolas-achatz-074973187/">Nikolas Achatz</a></motion.h1>
        <div className="type">
        <TypeWriter 
          options={{
            autoStart: true,
            loop: true,
          }}

          onInit={(typewriter) => {
              typewriter.typeString('')
              .pauseFor(2500)
              typewriter.typeString('Software Engineer')
              .pauseFor(2500)
              .deleteChars(17)
              typewriter.typeString('Mathematican')
              .pauseFor(2500)
              .deleteChars(12)
              typewriter.typeString('Machine Learning')
              .pauseFor(2500)
              .deleteChars(16)
              .start();
          }}
          />
          </div>
    </div>
  );
}

export default Welcome;
