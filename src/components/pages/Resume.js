import '../../App.css';
import { Link} from 'react-router-dom';
import { AnimatePresence, motion} from 'framer-motion'
import Entry from '../aux-comp/resume-entry';
import Entry2 from '../aux-comp/resume-entry2';
import Skill from '../aux-comp/skill';
import {useState, useEffect} from "react"
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion"
import Modal from '../aux-comp/modal';
import {skills} from '../aux-comp/text-skills'

function Resume() {
  const options = {threshold: 0.25 }
  const [ref, inView ] = useInView(options);
  const [ref2, inView2 ] = useInView(options);
  const [ref3, inView3 ] = useInView(options);
  
  const [shift, setShift] = useState(0);
  const [shift2, setShift2] = useState(0);

  const [modalOpen, setModalOpen] = useState(0);
  const close = () => setModalOpen(0);
  const open1 = () => setModalOpen(1);

  const [modalOpen2, setModalOpen2] = useState(0);
  const close2 = () => setModalOpen2(0);
  const open2 = () => setModalOpen2(1); 
  
  const [modalOpen3, setModalOpen3] = useState(0);
  const close3 = () => setModalOpen3(0);
  const open3 = () => setModalOpen3(1);  
  
  const [modalOpen4, setModalOpen4] = useState(0);
  const close4 = () => setModalOpen4(0);
  const open4 = () => setModalOpen4(1);  
  
  const [modalOpen5, setModalOpen5] = useState(0);
  const close5 = () => setModalOpen5(0);
  const open5 = () => setModalOpen5(1); 
  
  const [modalOpen6, setModalOpen6] = useState(0);
  const close6 = () => setModalOpen6(0);
  const open6 = () => setModalOpen6(1);

  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() =>{
    if(inView)
    {
      animation.start({
        x: 0,
        transition:
        {
            type: 'spring', duration: 1, bounce: 0.3
        }
      })
    }

    if (!inView)
    {
      animation.start({x: "-100vw"})
    }

  }, [inView])

  useEffect(()  => {
    document.body.style.overflowY = "scroll";

    return () => {
      document.body.style.overflowY = "hidden";
    };
});

useEffect(() =>{
  if(inView2 || inView3)
  {
    animation2.start({
      x: 0,
      transition:
      {
          type: 'spring', duration: 1, bounce: 0.3
      }
    })
  }

  if (!inView2 && !inView3)
  {
    animation2.start({x: "100vw"})
  }
}, [inView2, inView3])



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
            <p>The past and present</p>
            <motion.h2  whileHover={{ scale: 1.05 }}><a style={{ color:"white", textDecoration: "none"}}target="_blank" href="https://www.linkedin.com/in/nikolas-achatz-074973187/">Resume</a></motion.h2>
            <ul className='animatedBars-ul'>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
              <li className="animatedBars"></li>
            </ul>
          </div>

          <div className="resume-row">

            <div className="resume-experience">
                <h3>Experience</h3>
                <motion.div           
                animate={{x: shift}}

                onMouseEnter={() => setShift2(100)}
                onMouseLeave={() => setShift2(0)}
                >
                  <Entry2></Entry2>
                </motion.div>
               </div>

            <div className="resume-education">
                <h3 >Education</h3>
                <motion.div           
                animate={{x: shift2}}
              
                onMouseEnter={() => setShift(-100)}
                onMouseLeave={() => setShift(0)}
                >
                  <Entry></Entry>
                </motion.div>
            </div>
          </div>

          {/* Im crazy with the scroll in views <3 */}
          <br className='stop-inspecting-my-code-bro'></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div ref={ref}></div>
          <motion.div className='resume-row-tech' 
            animate={animation}
          >
            <motion.div className='resume-tech-info'>
              <p className="resume-skills-top">Sharpening the craft</p>
              <h2 className="resume-skills">Tech Stack</h2>
              <p className="resume-skills">** Click on each to learn more</p>
            </motion.div>

            <div className='skills'>
              <div className='skills-col1'>
                
                
                <Skill click={() => (modalOpen == 1 ? close() : open1())}  key="loading" skill="Python" percent="98%" cl="1"></Skill>
                <Skill click={() => (modalOpen2 == 1 ? close2() : open2())} skill="C# (.NET Core)" percent="95%" cl="2"></Skill>
                <Skill click={() => (modalOpen4 == 1 ? close4() : open4())} skill="Mathematics" percent="95%" cl="3"></Skill>
              </div>  

              <div className='skills-col2'>
                <Skill click={() => (modalOpen5 == 1 ? close5() : open5())} skill="SQL/NoSQL" percent="93%" cl="4"></Skill>
                <Skill click={() => (modalOpen3 == 1 ? close3() : open3())} skill="JavaScript (React)" percent="89%" cl="5"></Skill>
                <Skill click={() => (modalOpen6 == 1 ? close6() : open6())} skill="C++/C" percent="85%" cl="6"></Skill>

              </div>  
            </div>

          </motion.div>

          <br className='what-did-the-chicken-say'></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br className='stop-inspecting-me-codes'></br>

          <div ref={ref2}></div>

          <motion.div className='resume-row-tech' 
          animate={animation2}
          >
            <motion.div className='resume-tech-info'>
              <p className="resume-skills-top">Pressing forward</p>
              <a target="_blank" style={{textDecoration: "none"}}href="https://simonensemble.github.io/"><h2 className="resume-skills">Research</h2></a>
            </motion.div>


          <div className='research-main'>


          <div className='text-research'>
              <div className='research-info'>
                <div className='research-img-contain'>
                  <div className='research-img'></div>
                </div>
                <div className='text-research'>
                    <h6>My research is at the interesection of Chemical Engineering and Machine Learning. My cohort utilizes the crystal structure of Covalent Organic Frameworks as input to a graph neural network. With this we utilize deep learning and spatial convolutions to effectively predict gas adsorptions.</h6>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          </motion.div>

        <div ref={ref3}></div>

      </div>

      <div >
      </div>    
  
      {modalOpen == 1 && <Modal skill={skills[0]} modalOpen={modalOpen} handleClose={close}></Modal>}
      {modalOpen2 == 1 && <Modal skill={skills[1]} modalOpen={modalOpen2} handleClose={close2}></Modal>}
      {modalOpen3 == 1 && <Modal skill={skills[2]} modalOpen={modalOpen3} handleClose={close3}></Modal>}
      {modalOpen4 == 1 && <Modal skill={skills[3]} modalOpen={modalOpen4} handleClose={close4}></Modal>}
      {modalOpen5 == 1 && <Modal skill={skills[4]} modalOpen={modalOpen5} handleClose={close5}></Modal>}
      {modalOpen6 == 1 && <Modal skill={skills[5]} modalOpen={modalOpen6} handleClose={close6}></Modal>}
    </motion.div>
  );
}


const routeTransition = {
  hide: {
    y: "100vh"
  },

  animate: {
    y: 0,
    transition: {
      duration: 1,
    }
  },

  exit: {
    y: "100vh",
    transition: {
      duration: 1
    }
  }
};


const pageAnimateTransition = {
  hide: {
    y: "-1000vw"
  },

  animate: {
    y: 0,
    transition: {
      duration: 0.75,
    }
  },

  exit: {
    y: "1000vw",
    transition: {
      duration: 0.75
    }
  }
};

export default Resume;
