import '../../App.css';
import { Link, NavLink } from 'react-router-dom';
import { faSpotify} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Navbar() {
  return (
      <div className="nav-contain">
          <div className='nav-elements'>
            <a target="_blank" href="https://github.com/nachatz"><FontAwesomeIcon icon={faSpotify} style={{ height: "2em", color: "white", opacity: 0.8, marginLeft: "15px" }} /></a>
              <div className='links'>
                  <Link style={{textDecoration: "none", color: "#dad9d9"}} to='/about'>About</Link>
                  <Link style={{textDecoration: "none", color: "#dad9d9"}} to='/resume'>Resume</Link>
                  <Link style={{textDecoration: "none", color: "#dad9d9"}} to='/portfolio'>Portfolio</Link>
                  <a>Learn</a>
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
