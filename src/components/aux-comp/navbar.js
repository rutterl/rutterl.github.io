import '../../App.css';
import { Link, NavLink } from 'react-router-dom';
import { faSpotify} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from 'framer-motion'


function Navbar() {
  return (
      <div className="nav-contain">
          <div className='nav-elements'>
            <motion.a whileTap={{scale: 1.15 }} whileHover={{ scale: 1.05 }} target="_blank" href="https://github.com/nachatz"><FontAwesomeIcon icon={faSpotify} style={{ height: "2em", color: "white", opacity: 0.8, marginLeft: "15px" }} /></motion.a>
              <div className='links'>
                  <Link className="underline" style={{textDecoration: "none", color: "#dad9d9"}} to='/about'>About</Link>
                  <Link className="underline" style={{textDecoration: "none", color: "#dad9d9"}} to='/resume'>Resume</Link>
                  <Link className="underline" style={{textDecoration: "none", color: "#dad9d9"}} to='/portfolio'>Portfolio</Link>
                  <a className="underline" style={{textDecoration: "none", color: "#dad9d9"}} href="https://github.com/nachatz"  target="_blank">Learn</a>
              </div>
          </div>


          <div className='nav-mobile'>
            <div className='links-mobile'>
                  <Link style={{textDecoration: "none", color: "#dad9d9"}} to='/about'>About</Link>
                  <Link style={{textDecoration: "none", color: "#dad9d9"}} to='/resume'>Resume</Link>
                  <Link style={{textDecoration: "none", color: "#dad9d9"}} to='/portfolio'>Portfolio</Link>
              </div>
          </div>
            
      </div>
  );
}

export default Navbar;
