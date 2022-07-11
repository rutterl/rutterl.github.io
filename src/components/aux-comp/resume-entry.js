import '../../App.css';
import {motion} from "framer-motion"
import {useState, useEffect} from "react"

function EntryEducation() {
  const [shift, setShift] = useState(0);
  const [shift2, setShift2] = useState(0);
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
        {width > 910 && <motion.div className='entry' 
            whileHover={{
            scale: 1.12,
            x: -105,
            boxShadow: "0px 0px 4px gray",
            zIndex: 5
            }}
            animate={{
              y: shift2
            }}
            onMouseEnter={() => setShift(10)}
            onMouseLeave={() => setShift(0)}
        >
            <div className='row row-title'>
              <h5>Computer Science</h5>
              <span className='span-resume'>BS / CS 4.0 / 2022</span>
            </div>
            <span>Systems / Magna Cum Laude / Oregon State</span>
            <p>Specialized in optimization problems, machine learning, and electrical engineering</p>
        </motion.div>}

        {width > 910 && <motion.div className='entry' 
            whileHover={{
            scale: 1.12,
            x: -105,
            boxShadow: "0px 0px 4px gray",
            zIndex: 5,
            }}
            animate={{
              y: shift
            }}
            
            onMouseEnter={() => setShift2(10)}
            onMouseLeave={() => setShift2(0)}
        >
            <div className='row row-title'>
              <h5>Mathematics</h5>
              <span className='span-resume'>Minor / 2022</span>
            </div>
            <span>Computational / Magna Cum Laude</span>
            <p>Specialized in computational mathematics utilized commonly in machine learning</p>
        </motion.div>}


        {/* MOBILE */}

        {width < 910 && <motion.div className='entry' 
        >
            <div className='row row-title'>
              <h5>Computer Science</h5>
              <span className='span-resume'>BS / CS 4.0 / 2022</span>
            </div>
            <span>Systems / Magna Cum Laude / Oregon State</span>
            <p>Specialized in optimization problems, machine learning, and electrical engineering</p>
        </motion.div>}

        {width < 910 && <motion.div className='entry' 
        >
            <div className='row row-title'>
              <h5>Mathematics</h5>
              <span className='span-resume'>Minor / 2022</span>
            </div>
            <span>Computational / Magna Cum Laude</span>
            <p>Specialized in computational mathematics utilized commonly in machine learning</p>
        </motion.div>}
    </>
  );
}

export default EntryEducation;
