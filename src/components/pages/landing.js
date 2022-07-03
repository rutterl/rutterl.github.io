import '../../App.css';
import Navbar from '../aux-comp/navbar';
import Background from '../aux-comp/background';
import Welcome from '../aux-comp/welcome';
import Icons from '../aux-comp/lower-icons';
import {motion} from 'framer-motion'


function Landing() {
  const routeTransition = {
    hide: {
      y: "0vh",
      opacity: 0
    },

    exit: {
      y: "-200vh",
      opacity: 0,
      transition: {
        duration: .75,
      }
    }
  };
  return (
    <motion.div 
    variants={routeTransition}
    animate="animate"
    exit="exit"
    className='fade'
  >
      <Background></Background> 
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Icons></Icons>
    </motion.div>
  );
}

export default Landing;
