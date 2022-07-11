import '../../App.css';
import { motion} from 'framer-motion'
import {useState, useEffect} from "react"

function  Skill(props) {
  const [width, setWidth] = useState(window.innerWidth);

useEffect(() => {
  function handleResize() {
    setWidth(window.innerWidth);
  }
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [width]);
  return (
    <>
      <div className="single-skill">
          <div className="skill-info">
            <span className="skill-name">{props.skill}</span>
            <span className="skill-percentage">{props.percent}</span>
          </div>

          {width > 910 && <motion.div className="progress"
             whileHover={{
              scale: 1.10,
              boxShadow: "0px 0px 4px gray",
              zIndex: 5
              }}

              onClick={props.click}
          >
            <div className={"progress-bar-" + props.cl}></div>
          </motion.div>}          
          
          {width < 910 && <motion.div className="progress">
            <div className={"progress-bar-" + props.cl}></div>
          </motion.div>}


      </div>
    </>
  );
}

export default Skill;
