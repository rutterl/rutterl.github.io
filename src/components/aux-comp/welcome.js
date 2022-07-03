import '../../App.css';
import TypeWriter from 'typewriter-effect';

function Welcome() {
  return (
    <div className="welcome">
        <h1>Nikolas Achatz</h1>
        <div className="type">
        <TypeWriter 
          options={{
            autoStart: true,
            loop: true,
          }}

          onInit={(typewriter) => {
              typewriter.typeString('')
              .pauseFor(2500)
              typewriter.typeString('Software Engineer')
              .pauseFor(2500)
              .deleteChars(17)
              typewriter.typeString('Mathematican')
              .pauseFor(2500)
              .deleteChars(12)
              typewriter.typeString('Machine Learning')
              .pauseFor(2500)
              .deleteChars(16)
              .start();
          }}
          />
          </div>
    </div>
  );
}

export default Welcome;
