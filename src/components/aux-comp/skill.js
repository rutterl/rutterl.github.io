import '../../App.css';
import { motion} from 'framer-motion'

function  Skill(props) {
  return (
    <>
      <div class="single-skill">
          <div class="skill-info">
            <span class="skill-name">{props.skill}</span>
            <span class="skill-percentage">{props.percent}</span>
          </div>

          <motion.div class="progress"
             whileHover={{
              scale: 1.10,
              boxShadow: "0px 0px 4px gray",
              zIndex: 5
              }}

              onClick={props.click}
          >
            <div class={"progress-bar-" + props.cl}></div>
          </motion.div>
      </div>
    </>
  );
}

export default Skill;
