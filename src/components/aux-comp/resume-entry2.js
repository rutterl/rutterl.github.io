import '../../App.css';
import {motion} from "framer-motion"
import {useState, useEffect} from "react"
import { hover } from '@testing-library/user-event/dist/hover';

function EntryExperience() {
  const [shift, setShift] = useState(0);
  const [shift2, setShift2] = useState(0);
  const [shift3, setShift3] = useState(0);
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  
  
  function checkHover1(check)
  {
    if (width > 1000)
    {
      if (check){
        setShift(10); 
        setShift3(10);    
      }else
      {
        setShift3(0); 
        setShift(0);      
      }
    }
  }

  return (
    <>
        {/* <motion.div className='entry' 
            whileHover={{
            scale: 1.12,
            x: 105,
            boxShadow: "0px 0px 4px gray",
            zIndex: 5
            }}
            animate={{
              y: shift
            }}
            onMouseEnter={() => {setShift2(10); setShift3(10)}}
            onMouseLeave={() => {setShift2(0); setShift3(0)}}
            onClick={() => openInNewTab('https://www.nike.com/')}

        >
            <div className='row row-title'>
              <h5>Software Engineer</h5>
              <span className='span-resume'>Nike WHQ</span>
            </div>
            <span>July 2022 - Current</span>
            <p>-</p>

        </motion.div> */}

        {width > 910 && <motion.div className='entry' 
            whileHover={{
              scale: 1.12,
              x: 105,
              boxShadow: "0px 0px 4px gray",
              zIndex: 5
              }}
              animate={{
                y: shift2
              }}
            
            onMouseEnter={() => checkHover1(true)}
            onMouseLeave={() => checkHover1(false)}
            onClick={() => openInNewTab('https://www.teachengineering.org/ngss_explorer')}
            >
            <div className='row row-title'>
              <h5>Software Dev.</h5>
              <span className='span-resume'>TeachEngineering</span>
            </div>
            <span>March 2021 - June 2022</span>
            <p>Developed and restructured NGSS Explorer for production release</p>

        </motion.div>}
        {width > 910 && <motion.div className='entry' 
            whileHover={{
            scale: 1.12,
            x: 105,
            boxShadow: "0px 0px 4px gray",
            zIndex: 5
            }}
            animate={{
              y: shift3
            }}
            onMouseEnter={() => {setShift(10); setShift2(10)}}
            onMouseLeave={() => {setShift(0); setShift2(0)}}
            onClick={() => openInNewTab('https://simonensemble.github.io/')}

        >
            <div className='row row-title'>
              <h5>ML Research</h5>
              <span className='span-resume'>Oregon State University</span>
            </div>
            <span>June 2021 - July 2022</span>
            <p>Displayed inputting molecular geometry to graph neural networks for adsorption prediction</p>

        </motion.div>}

{/* mobiles */}

        {width < 910 && <motion.div className='entry' 
            onClick={() => openInNewTab('https://www.teachengineering.org/ngss_explorer')}
            >
            <div className='row row-title'>
              <h5>Software Dev.</h5>
              <span className='span-resume'>TeachEngineering</span>
            </div>
            <span>March 2021 - June 2022</span>
            <p>Developed and restructured NGSS Explorer for production release</p>

        </motion.div>}
        {width < 910 && <motion.div className='entry' 
    
            onClick={() => openInNewTab('https://simonensemble.github.io/')}

        >
            <div className='row row-title'>
              <h5>ML Research</h5>
              <span className='span-resume'>Oregon State University</span>
            </div>
            <span>June 2021 - July 2022</span>
            <p>Displayed inputting molecular geometry to graph neural networks for adsorption prediction</p>

        </motion.div>}
        
    </>
  );
}

export default EntryExperience;
