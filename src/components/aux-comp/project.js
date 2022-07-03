import '../../App.css';

function Project({data}) {
return (
      <div className='project-container'>
        <div className='project-info'>
          <div>
            <img className='project-img' src={data["images"][3]}></img>
          </div>
          <div className='project-overlay project-overlay--blur'>
            <h3>{data["title"]}</h3>
            <p>{data["text"]}</p>
            <a target="_blank" href={data["url"]} className='project-link'>More Info</a>
            <div className='tech-stack'>
              <img className='icons' src={data["images"][0]} ></img>
              <img className='icons' src={data["images"][1]} ></img>
              <img className='icons' src={data["images"][2]} ></img>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Project;
