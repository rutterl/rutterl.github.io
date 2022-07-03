import '../../App.css';
import {AnimatePresence, motion} from "framer-motion"
import Backdrop from './backdrop';
import {useState, useEffect} from "react"



function Modal({handleClose, skill}) {

  useEffect(()  => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
});

  return (
    <AnimatePresence>
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
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

        <div className='container-modal'>
          <div className='container-modal-top'>
            <h2>{skill["language"]}</h2>
            <div className='modal-extra-info'>
              <p>{skill["company"]}</p>
              <p style={{textAlign: "right"}}>Years: {skill["years"]}</p>
            </div>
            <h3>My experience detailed</h3>
          </div>

          <div className='text-modal'>{skill["text"]}</div>
        </div>
      </motion.div>
    </Backdrop>
    </AnimatePresence>
  );
}

export default Modal;
