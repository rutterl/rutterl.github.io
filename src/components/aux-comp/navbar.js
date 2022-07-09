import '../../App.css';
import { Link, NavLink } from 'react-router-dom';
import { faSpotify} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from 'framer-motion'


function Navbar() {
  return (
      <div className="nav-contain">
          <div className='nav-elements'>
              <div className='links'>
                  <Link className="underline" style={{textDecoration: "none", color: "#dad9d9"}} to='/about'>About</Link>
                  <Link className="underline" style={{textDecoration: "none", color: "#dad9d9"}} to='/resume'>Resume</Link>
                  <Link className="underline" style={{textDecoration: "none", color: "#dad9d9"}} to='/portfolio'>Portfolio</Link>
                  <Link className="underline" style={{textDecoration: "none", color: "#dad9d9"}} to='/life'>My Life</Link>
                  <a className="underline no-margin" style={{textDecoration: "none", color: "#dad9d9"}} href="https://github.com/nachatz/LearnAI" target="_blank">Learn AI</a>
              </div>
          </div>

          <div className='nav-mobile'>
            <div className='links-mobile'>
                  <Link style={{textDecoration: "none", color: "#dad9d9"}} to='/about'>About</Link>
                  <Link style={{textDecoration: "none", color: "#dad9d9"}} to='/resume'>Resume</Link>
                  <Link style={{textDecoration: "none", color: "#dad9d9"}} to='/portfolio'>Portfolio</Link>
                  <Link style={{textDecoration: "none", color: "#dad9d9"}} to='/life' className='mobile-life'>Life</Link>
              </div>
          </div>
      </div>
  );
}

export default Navbar;
