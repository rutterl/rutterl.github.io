import '../../App.css';
import { motion} from 'framer-motion'

function  Skill(props) {
  return (
    <>
      <div className="single-skill">
          <div className="skill-info">
            <span className="skill-name">{props.skill}</span>
            <span className="skill-percentage">{props.percent}</span>
          </div>

          <motion.div className="progress"
             whileHover={{
              scale: 1.10,
              boxShadow: "0px 0px 4px gray",
              zIndex: 5
              }}

              onClick={props.click}
          >
            <div className={"progress-bar-" + props.cl}></div>
          </motion.div>
      </div>
    </>
  );
}

export default Skill;
