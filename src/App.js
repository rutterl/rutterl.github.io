import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom';
import Landing from './components/pages/landing.js';
import About from './components/pages/About';
import {AnimatePresence} from "framer-motion"
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';

function App() {
  const location = useLocation();
  return (
    <>
    <AnimatePresence exitBeforeEnter initial={false}>
        <Routes  location={location} key={location.pathname}>
          <Route path="/" element={<Landing/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Resume" element={<Resume/>} />
          <Route path="/Portfolio" element={<Portfolio/>} />
        </Routes>  
      </AnimatePresence>  
    </>
  );
}

export default App;
