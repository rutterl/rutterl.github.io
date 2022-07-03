import '../../App.css';
import {motion} from "framer-motion"

function Backdrop({children, onClick}) {
  return (
    <motion.div
      className='backdrop'
      onClick={onClick}
      initial={{opacity: 0, transition: {
        duration: 0.25,
      }}}
      animate={{opacity: 1, transition: {
        duration: 0.25,
      }}}
      exit={{opacity: 0, transition: {
        duration: 0.25,
      }}}
    >
      {children}

    </motion.div>
  );
}

export default Backdrop;
