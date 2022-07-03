import '../../App.css';
import myVideo from "../../video/rain.mp4";

function Background() {
  return (
    <video autoPlay muted loop oncontextmenu="return false;">
          <source src={myVideo} type="video/mp4"/>
        Your browser does not support videos :(
    </video>    
  );
}

export default Background;
