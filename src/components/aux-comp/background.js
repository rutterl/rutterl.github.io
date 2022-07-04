import '../../App.css';
import myVideo from "../../video/rain_test.mp4";

function Background() {
  return (
    <video webkit-playsinline playsInline defaultMuted autoPlay muted loop>
          <source src={myVideo} type="video/mp4"/>
        Your browser does not support videos :(
    </video>    
  );
}

export default Background;
