import "./intro.scss";
import imageg from "../../assets/image.jpg";

export default function Intro() {
  return (
    <div className="intro" id="intro">
     <div className="topbar">
        <div className="logo">
          <a>Portfolio left logo</a>
        </div>
        <div className="right">
         <h1>portfolio right</h1>
        </div>
     </div>
      <div className="intro__container">
        <h1 className="intro__title">BSc Computer Science Graduate</h1>
        <h2 className="intro_sub">Fullstack Developer</h2>
        {/* <img src={imageg} alt="" /> */}
      </div>
      
      
    </div>
  )
}
