import '../../App.css';
import { Link} from 'react-router-dom';
import {motion} from 'framer-motion'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  const routeTransition = {
    hide: {
      y: "100vh"
    },

    animate: {
      y: 0,
      transition: {
        duration: 0.75,
      }
    },

    exit: {
      y: "100vh",
      transition: {
        duration: 0.75
      }
    }
  };
  return (
    <motion.div 
    variants={routeTransition}
    initial="hide"
    animate="animate"
    exit="exit"
    >

  <div className="burgere">
          <Link to="/">
          <div className="stripe burgere-strip">
              <div></div>
              <div></div>
              <div></div>
          </div>
          </Link>
      </div>
    <div className="about-container">


      <div className="about-header">
        <p>Let's explore my skill</p>
        <motion.h2  whileHover={{ scale: 1.05 }}><a style={{ color:"white", textDecoration: "none"}}target="_blank" href="https://www.linkedin.com/in/nikolas-achatz-074973187/">Call me Nik</a></motion.h2>
        <ul className='animatedBars-ul'>
          <li className="animatedBars"></li>
          <li className="animatedBars"></li>
          <li className="animatedBars"></li>
          <li className="animatedBars"></li>
          <li className="animatedBars"></li>
          <li className="animatedBars"></li>
        </ul>
      </div>


        <div className="profile-main">
          <div className='profile-pic'>
            <div className='profile-pic-img'></div>
          </div>

          <div className='profile-pic-mobile'></div>

          <div className='profile-descriptions'>
              <h3>I'm a Software Engineer with strong foundations in Mathematics</h3>
              <p>My interests are directly related to machine learning and general optimization. The field of artificial intelligence inspires me daily to grow my understanding of the field. Due to this, I'm a fantatic of new techniques and learning to work with as many experts as possible. In terms of my personal, I enjoy going for daily walks and relaxing with friends discussing a variety of topics. Feel free to reach out to me regarding business or personal inquires, I'm always open to chat. </p>
              <div className='about-separator'></div>
              <address className='about-content'>
                    <div className='info'>
                      <div className='row gone'>
                          <span>From: </span>
                          <p>Tualatin, OR</p>
                      </div>

                      <div className='row gone'>
                        <span>Email: </span>
                        <p>nik.achatz@gmail.com</p>
                      </div>
                    </div>
                     
                    <div className='row'>
                    <a href="../Resume.pdf" download="../Resume.pdf"><motion.button whileTap={{scale: 1.15 }} whileHover={{ scale: 1.05 }} className="resume-button">Resume</ motion.button></a>
                    <ul class="about-ul">
                    <motion.li whileTap={{scale: 1.15 }} whileHover={{ scale: 1.05 }}><a target="_blank" href="https://github.com/nachatz"><FontAwesomeIcon icon={faGithub} style={{ height: "2em", color: "white" }} /></a></motion.li>
                    <motion.li whileTap={{scale: 1.15 }} whileHover={{ scale: 1.05 }}><a target="_blank" href="https://www.linkedin.com/in/nikolas-achatz-074973187/"><FontAwesomeIcon icon={faLinkedin}  style={{ height: "2em", color: "white" }} /></a></motion.li>
                      </ul>
                    </div>

              </address>
          </div>


        </div>



    </div>

    </motion.div>
  );
}

export default About;
