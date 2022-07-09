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
import { images } from "../aux-comp/Images";

function Life() {
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


  useEffect(()  => {
    document.body.style.overflowY = "scroll";

    return () => {
      document.body.style.overflowY = "hidden";
    };
});

  const res = images.sort( () => .5 - Math.random());
  var shuffled = []


  for (var i of res)
    shuffled.push(i);

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
          <div className="resume-header">
            <p className='memories'>My memories</p>
            <motion.h2  whileHover={{ scale: 1.05 }}><a style={{ color:"white", textDecoration: "none"}}target="_blank" href="https://www.linkedin.com/in/nikolas-achatz-074973187/">Life</a></motion.h2>
            <ul className='animatedBars-ul'>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
            </ul>
          </div>

          <Gallery props={shuffled}></Gallery>
          
      </div>    

    </motion.div>
  );
}

export default Life;
