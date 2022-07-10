import '../../App.css';
import { Link} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gallery from '../aux-comp/gallery';
import Project from '../aux-comp/project';
import {projects} from '../aux-comp/Portfolio'
import {useAnimation} from "framer-motion"
import {useState, useEffect} from "react"

function Portfolio() {
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

  const projectList = projects.map((proj) =>
  <Project key={proj["title"]} data={proj}></Project> 
  );

  useEffect(()  => {
    document.body.style.overflowY = "scroll";

    return () => {
      document.body.style.overflowY = "hidden";
    };
});

  return (
    <motion.div 
    variants={routeTransition}
    initial="hide"
    animate="animate"
    exit="exit"
    >

      
      <div className="resume-container">

        <div className="burgere">
            <Link to="/">
            <div className="stripe burgere-strip">
                <div></div>
                <div></div>
                <div></div>
            </div>
            </Link>
        </div>

          <div className="ab-header">
            <p>Fun is the key to success</p>
            <motion.h2  whileHover={{ scale: 1.05 }}><a style={{ color:"white", textDecoration: "none"}}target="_blank" href="https://www.github.com/nachatz">Portfolio</a></motion.h2>
            <ul className='animatedBars-ul'>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
            </ul>
          </div>

          <motion.div 
          className='portfolio-row-tech' >
            {projectList[0]}
            {projectList[1]}
            {projectList[2]}
          </motion.div>
          <motion.div className='portfolio-row-tech' >
            {projectList[3]}
            {projectList[4]}
            {projectList[5]}
          </motion.div>
      </div>
      <div >
      </div>    

    </motion.div>
  );
}

export default Portfolio;
